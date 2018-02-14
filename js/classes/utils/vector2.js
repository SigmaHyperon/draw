class vector2 {
    var x;
    var y;
    constructor(x, y) {
        this.x = (typeof x == "undefined") ? 0 : x;
        this.y = (typeof y == "undefined") ? 0 : y;
    }
    function getLength(){
        return Math.sqrt(this.x^2 + this.y^2);
    }
    function setLength(length){
        this.x = (this.x / this.getLength()) * length;
        this.y = (this.y / this.getLength()) * length;
        return this;
    }
    function setAngle(angle){
        this.x = Math.cos(angle)*this.getLength;
        this.y = Math.sin(angle)*this.getLength;
        return this;
    }
    function setPolar(length, angle){
        this.setLength(length);
        this.setAngle(angle);
        return this;
    }
    function add(vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    function getReverse(){
        return new vector2(-this.x, -this.y);
    }
}
