class Drawable {
    constructor() {

    }
    draw(target) {
        
    }
}
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
class Rectangle extends Drawable{
    constructor() {
        super();
    }
    draw(){
        
    }
}
class vector2 {
    constructor(x, y) {
        this.x = (typeof x == 'undefined') ? 0 : x;
        this.y = (typeof y == 'undefined') ? 0 : y;
    }
    getLength(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
    setLength(length){
        var cLength = this.getLength();
        this.setX((this.x / cLength) * length);
        this.setY((this.y / cLength) * length);
        return this;
    }
    setAngle(angle){
        var length = this.getLength();
        // divide by 180 to convert to radians
        this.setX(Math.cos((angle/180)*Math.PI)*length);
        this.setY(Math.sin((angle/180)*Math.PI)*length);
        return this;
    }
    setPolar(length, angle){
        this.setLength(length);
        this.setAngle(angle);
        return this;
    }
    add(vector){
        if(Types.isRecursiveType(vector, vector2));
        this.setX(vector.x);
        this.setY(vector.y);
        return this;
    }
    getReverse(){
        return new vector2(-this.x, -this.y);
    }
    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
    getX(){
        return Math.round(this.x * 100) / 100;
    }
    getY(){
        return Math.round(this.y * 100) / 100;
    }
}
class Types {
    constructor() {

    }
    static isType(object, type){
        return object.constructor.name == type.name;
    }
    static isRecursiveType(object, type){
        return object instanceof type
    }
}
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
class draw {
    constructor(selector) {
        this.drawQueue = [];
        this.layers = [];
        this.context;
        this.canvas;
        if(typeof $ == "undefined"){
            canvas = document.getElementById(selector);
        } else {
            canvas = $(selector);
        }
        this.context = canvas.getContext("2d");
    }
    draw(){
        this.fillDrawQueue();
        for (var element in this.drawQueue) {
            element.draw(this.context);
        }
    }
    fillDrawQueue() {
        for (var layer in this.layers) {
            this.drawQueue.push(...layer.getAsQueue());
        }
    }
    addLayer(){
        this.layers.push(new Layer());
        return this.layers[this.layers.length-1];
    }
    getLayer(index){
        return this.layers[index];
    }
}
