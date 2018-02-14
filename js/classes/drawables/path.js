class Path extends Drawable {
    constructor() {
        super();
        this.sequence = [];
    }
    draw(){
        super.draw();
    }
    addStep(vector){
        this.sequence.push(vector);
    }
}
