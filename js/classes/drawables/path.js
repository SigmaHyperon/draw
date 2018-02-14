class Path extends Drawable {
    constructor() {
        super();
        this.start = new vector2(0, 0);
        this.sequence = [];
    }
    draw(target){
        target.beginPath();
        for (var vector in this.sequence) {

        }
        super.draw(target);
    }
    addStep(vector){
        if(Types.isType(vector, vector2)){
            this.sequence.push(vector);
        }
    }
}
