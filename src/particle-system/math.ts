export class Vector2{
    constructor(public x : number, public y : number) {
    }

    public magnitude() : number{
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }

    public add(other:Vector2) : Vector2{
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    public addDirect(other:Vector2) : void{
        this.x += other.x;
        this.y += other.y;
    }

    public subtract(other:Vector2) : Vector2{
        return new Vector2(this.x - other.x, this.y - other.y);
    }

    public subtractDirect(other:Vector2) : void{
        this.x -= other.x;
        this.y -= other.y;
    }

    public multiply(scalar : number) : Vector2{
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    public multiplyDirect(scalar : number) : void{
        this.x *=  scalar;
        this.y *= scalar;
    }

    public dot(other : Vector2) : number{
        return this.x * other.x + this.y * other.y;
    }

    public normalize() : Vector2{
        let mag = this.magnitude();
        return new Vector2(this.x/ mag, this.y / mag);
    }

    public copy() : Vector2{
        return new Vector2(this.x, this.y);
    }

}

export class Color{
    constructor(public r : number, public g : number, public b : number) {
    }
}

export function randomBetweenInt(min: number, max:number) : number{
    return Math.round((max - min) * Math.random() + min);
}

export function randomBetween(min: number, max: number) : number{
    return (max - min) * Math.random() + min;
}