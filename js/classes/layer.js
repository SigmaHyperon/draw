class Layer {
    var elements = [];
    constructor() {

    }
    function getAsQueue(){
        return this.elements;
    }
    function addElement(element){
        if(element.prototype instanceof Drawable){
            this.elements.push(element);
        }
    }
}
