var data = ["255,255,255","100","5500","255,255,255","100","5500","255,255,255","100","5500"];
window.location.href="index.html#"+data
var colorPicker = new iro.ColorPicker('#picker1', {
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
    { 
        component: iro.ui.Wheel,
        options: {}
    },
    ]
});
colorPicker.on(['color:init', 'input:end'], function(color) {
    data[0] = color.red+","+color.green+","+color.blue;
    window.location.href="index.html#"+data;
});


var colorPicker = new iro.ColorPicker('#picker2', {
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
    { 
        component: iro.ui.Wheel,
        options: {}
    },
    ]
});

colorPicker.on(['color:init', 'input:end'], function(color) {
    data[3] = color.red+","+color.green+","+color.blue;
    window.location.href="index.html#"+data;
    });

var colorPicker = new iro.ColorPicker('#picker3', {
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
    { 
        component: iro.ui.Wheel,
        options: {}
    },
    ]
});

colorPicker.on(['color:init', 'input:end'], function(color) {
    data[5] = color.red+","+color.green+","+color.blue;
    window.location.href="index.html#"+data;
    });

function brightness_1(){
    var value = document.getElementById("brightness_1").value;
    data[1] = value;
    window.location.href="index.html#"+data;
}

function kelvin_1(){
    var value = document.getElementById("kelvin_1").value;
    data[2] = value;
    window.location.href="index.html#"+data;
}

function brightness_2(){
    var value = document.getElementById("brightness_2").value;
    data[4] = value;
    window.location.href="index.html#"+data;
}

function kelvin_2(){
    var value = document.getElementById("kelvin_2").value;
    data[5] = value;
    window.location.href="index.html#"+data;
}

function brightness_3(){
    var value = document.getElementById("brightness_3").value;
    data[6] = value;
    window.location.href="index.html#"+data;
}

function kelvin_3(){
    var value = document.getElementById("kelvin_3").value;
    data[7] = value;
    window.location.href="index.html#"+data;
}
