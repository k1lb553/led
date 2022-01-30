var data = ["","255,255,255","255","255","255,255,255","255","255","255,255,255","255","255","0","255","255","*"];
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
    
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('text');
if (isMobile) {
    element.innerHTML = "You are using Mobile";
} else {
    element.innerHTML = "You are using Desktop";
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
    data[1] = color.red+","+color.green+","+color.blue;
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
    data[4] = color.red+","+color.green+","+color.blue;
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
    data[7] = color.red+","+color.green+","+color.blue;
    window.location.href=data
    });

function brightness_1(){
    var value = document.getElementById("brightness_1").value;
    data[2] = value;
    window.location.href=data
}

function kelvin_1(){
    var value = document.getElementById("kelvin_1").value;
    data[3] = value;
    window.location.href=data
}

function brightness_2(){
    var value = document.getElementById("brightness_2").value;
    data[5] = value;
    window.location.href=data
}

function kelvin_2(){
    var value = document.getElementById("kelvin_2").value;
    data[6] = value;
    window.location.href=data
}

function brightness_3(){
    var value = document.getElementById("brightness_3").value;
    data[8] = value;
    window.location.href=data
}

function kelvin_3(){
    var value = document.getElementById("kelvin_3").value;
    data[9] = value;
    window.location.href=data
}

function curtain_1(){
    var value = document.getElementById("curtain_1").value;
    data[10] = value;
    window.location.href=data
}

function brightness_4(){
    var value = document.getElementById("brightness_4").value;
    data[11] = value;
    window.location.href=data
}

function brightness_5(){
    var value = document.getElementById("brightness_5").value;
    data[12] = value;
    window.location.href=data
}
