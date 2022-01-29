var data = ["255,255,255","255","255","255,255,255","255","255","255,255,255","255","255","*"];
var size=300;
var radius=8;
if(window.innerWidth < 1000) {
        size=690;
        radius=18.4;
    }
else{
        size=300;
        radius=8;
    }

window.location.href=data
var colorPicker = new iro.ColorPicker('#picker1', {
    width: size,
    handleRadius: radius,
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
    window.location.href=data
});


var colorPicker = new iro.ColorPicker('#picker2', {
    width: size,
    handleRadius: radius,
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
    window.location.href=data
    });

var colorPicker = new iro.ColorPicker('#picker3', {
    width: size,
    handleRadius: radius,
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
    data[6] = color.red+","+color.green+","+color.blue;
    window.location.href=data
    });

function brightness_1(){
    var value = document.getElementById("brightness_1").value;
    data[1] = value;
    window.location.href=data
}

function kelvin_1(){
    var value = document.getElementById("kelvin_1").value;
    data[2] = value;
    window.location.href=data
}

function brightness_2(){
    var value = document.getElementById("brightness_2").value;
    data[4] = value;
    window.location.href=data
}

function kelvin_2(){
    var value = document.getElementById("kelvin_2").value;
    data[5] = value;
    window.location.href=data
}

function brightness_3(){
    var value = document.getElementById("brightness_3").value;
    data[7] = value;
    window.location.href=data
}

function kelvin_3(){
    var value = document.getElementById("kelvin_3").value;
    data[8] = value;
    window.location.href=data
}
