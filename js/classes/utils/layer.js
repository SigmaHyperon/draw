class Layer {
    constructor() {
        this.elements = [];
    }
    getAsQueue(){
        return this.elements;
    }
    addElement(element){
        if(element.prototype instanceof Drawable){
            this.elements.push(element);
        }
    }
}
