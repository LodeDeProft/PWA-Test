import React from "react";

export abstract class Slide {
    private onSlideChanged : (eventName: string) => void = () =>{};
    public counter = 0;
    protected maxCounter = 0;
    constructor(props : any) {    
    }

    public subscribeToEvents(callback : (eventName : string) => void){
        this.onSlideChanged = callback;
    }

    public unsubscribe(){
        this.onSlideChanged = () =>{};
    }
    public next(){
        if(this.counter + 1 > this.maxCounter){
            this.onSlideChanged("next");
        }
        else {
            this.counter++;
            this.onSlideChanged("current");
        }

    }

    public previous(){
        if(this.counter == 0){
            this.onSlideChanged('previous');
        }
        else{
            this.counter--;
            this.onSlideChanged("current");
        }
    }

    public render() : React.JSX.Element{
        return <></>
    }
}

export class Slideshow{
    private onSlideChangedCallback : (slide: React.JSX.Element) => void = () => {};
    private counter = 0;
    constructor(private slides : Slide[]) {
        if(slides.length > 0){
            this.SetSlide(0, 0);
        }
    }

    public next(){
        this.slides[this.counter].next();
    }

    public previous(){
        this.slides[this.counter].previous();
    }

    public subscribeOnStateChanged( callback : (slide : React.JSX.Element) => void){
        this.onSlideChangedCallback = callback;
    }

    public unSubscribe(){
        this.onSlideChanged = () => {};
    }

    public getCurrentSlide() : Slide {
        return this.slides[this.counter];
    }

    private onSlideChanged(eventName : string) : void{
        switch (eventName) {
            case "next":
                this.nextSlide();
                break;
            case "previous":
                this.previousSlide();
                break;
            case "current":
                this.currentSlide();
                    break;
        }
    }

    private previousSlide(){
        this.SetSlide(this.counter, this.counter - 1);
    }
    private nextSlide(){
        this.SetSlide(this.counter, this.counter + 1);
    }

    private currentSlide(){
        let currentSlide = this.slides[this.counter];
        this.onSlideChangedCallback(currentSlide.render());
    }

    private SetSlide(previous: number, current:number){
        if(current > this.slides.length-1) return;
        else if(current < 0) return;
        this.counter = current;
        let prev = this.slides[previous];
        prev.unsubscribe();

        let currentSlide = this.slides[current];
        currentSlide.subscribeToEvents((eventName:string) => {this.onSlideChanged(eventName);});
        this.onSlideChangedCallback(currentSlide.render());
    }
}