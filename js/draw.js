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
