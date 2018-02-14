class draw {
    var drawQueue = [];
    var layers = [];
    var context;
    constructor(selector) {
        var canvas;
        if(typeof $ == "undefined"){
            canvas = document.getElementById(selector);
        } else {
            canvas = $(selector);
        }
        this.context = canvas.getContext("2d");
    }
    function draw(){
        this.fillDrawQueue();
        for (var element in this.drawQueue) {
            element.draw(this.context);
        }
    }
    function fillDrawQueue() {
        for (var layer in this.layers) {
            this.drawQueue.push(...layer.getAsQueue());
        }
    }
    function addLayer(){
        this.layers.push(new Layer());
        return this.layers[this.layers.length-1];
    }
    function getLayer(index){
        return this.layers[index];
    }
}
