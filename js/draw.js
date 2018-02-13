class draw {
    constructor(selector) {
        var canvas;
        if(typeof $ == "undefined"){
            canvas = document.getElementById(selector);
        } else {
            canvas = $(selector);
        }
        var context = canvas.getContext("2d");
    }
}
