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
