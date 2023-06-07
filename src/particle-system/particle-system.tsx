import { useEffect, useRef, useState } from 'react';
import {Vector2, Color, randomBetweenInt, randomBetween} from './math';

interface SystemProps{
    position : Vector2;
    direction : number;
    spreadAngle : number;
    minInitialForce : number;
    maxInitialForce : number;
    minSize : Vector2;
    maxSize : Vector2;
    lifetime: number;
    maxSpawnCount: number;
    spawnRate : number;
    burstRate : number;
    burstInterval : number;
    burstRepetition : number;
    colors: Color[]
}

class Particle{

    public position : Vector2 = new Vector2(0, 0);
    public velocity : Vector2 = new Vector2(0, 0);
    public lifetime : number = 0;
    public size : Vector2 = new Vector2(10, 10);
    public isAlive : boolean = false;
    public color : Color = new Color(256, 256, 256);
}

export default function ParticleSystem(props : SystemProps){
    const gravity = new Vector2(0, 15);
    const timer = useRef(0);
    const burstTimer = useRef(0);
    const burstRepetition = useRef(props.burstRepetition);
    const particles = useRef<Particle[]>([])
    const animationRef = useRef(0);
    const previousTimeRef = useRef(0);
    const delta = useRef(0);
    const spawnInterval = useRef(props.spawnRate > 0 ? 1.0/props.spawnRate : 0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const spawnBursts = () => {
        while(burstTimer.current >= props.burstInterval && burstRepetition.current != 0){
            spawnSingleBurst();
            burstTimer.current -= props.burstInterval;
            burstRepetition.current = Math.round(burstRepetition.current - 1);
            if(burstRepetition.current == 0){
                lifetimeActions.splice(lifetimeActions.indexOf(spawnBursts), 1);
            }
        }
        burstTimer.current += delta.current;
    }

    const spawnSingleBurst = ()=>{
        for(let i = 0; i < props.burstRate; ++i){
            spawnSingleParticle();
        }
    }

    const spawnStreamParticles = () => {
        while(timer.current >= spawnInterval.current){
            timer.current -= spawnInterval.current;
            spawnSingleParticle();
        }
        timer.current += delta.current;
    };

    const spawnSingleParticle = () =>{
        let particle = particles.current.find((p) => !p.isAlive);
        if(particle == null){
            if(particles.current.length >= props.maxSpawnCount){
                particle = particles.current.reduce((prev, curr) => curr.lifetime > prev?.lifetime ?? -1 ? curr : prev);
            }
            else{
                particle = new Particle();
                particles.current.push(particle);
            }
        }
        particle!.color = props.colors[randomBetweenInt(0, props.colors.length - 1)];
        particle!.position = props.position.copy();
        particle!.size = new Vector2(randomBetween(props.minSize.x, props.maxSize.x), randomBetween(props.minSize.y, props.maxSize.y))
        let angleRad = (props.direction + (props.spreadAngle * Math.random())) / 180 * Math.PI;
        let pVelocity = new Vector2(Math.cos(angleRad), Math.sin(angleRad));
        pVelocity = pVelocity.multiply(randomBetween(props.minInitialForce, props.maxInitialForce));
        particle!.velocity = pVelocity;
        particle.lifetime = 0;
        particle!.isAlive = true;
    }

    const updateParticles = () => {
        let context = canvasRef.current!.getContext('2d')!;
        context.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        for(let particle of particles.current){
            updateParticlePhysics(particle);
            repaintParticle(context, particle);
        }
        context.restore();
    }

    const lifetimeActions : Function[] = [];
    if(props.spawnRate > 0)lifetimeActions.push(spawnStreamParticles);
    if(props.burstRepetition != 0)lifetimeActions.push(spawnBursts);
    if(lifetimeActions.length > 0){
        lifetimeActions.push(updateParticles);
    }

    useEffect(() => {
            animationRef.current = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationRef.current)
    }, [])

    const update = (time : number) => {
        if(previousTimeRef.current === 0){
            previousTimeRef.current = time;
        }
        else{
            delta.current = (time - previousTimeRef.current)/1000;
            previousTimeRef.current = time;
            for(let action of lifetimeActions){
                action();
            }
        }
        animationRef.current = requestAnimationFrame(update);
    }

    const updateParticlePhysics = (particle : Particle) => {
            if(particle.isAlive){
                if(particle.lifetime > props.lifetime){
                    particle.isAlive = false;
                }
                else{
                    particle.lifetime += delta.current;
                    let vel = particle.velocity.copy();
                    vel.subtractDirect(vel.multiply(0.1*delta.current));
                    vel.addDirect(gravity);
                    particle.velocity = vel;
                    particle.position.addDirect(vel.multiply(delta.current));
                }
            }
    }

    const repaintParticle = (context: CanvasRenderingContext2D, particle : Particle) => {
        if(particle.isAlive){
            context.fillStyle = `rgb(${particle.color.r}, ${particle.color.g},${particle.color.b})`
            context.fillRect(particle.position.x, particle.position.y, particle.size.x, particle.size.y); 
        }
    }
    return <>
        <canvas style={{"display": "fixed", "position" : "absolute", "top" : "0", "right" : 0}} ref={canvasRef} height={window.innerHeight} width={window.innerWidth}>
        </canvas>
        </>
}