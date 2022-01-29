body {
    padding: 0px;
    margin-top: 20px;
    background-color: #121212;
    color: white;
    font-family: Verdana;
}

h2 {
    text-align: center ;
    font-size: 24px;
}

p {
    font-size: 16px;
    text-align: left;
    margin: 0px 0px 2px 18px;
    color: whitesmoke;
}

.main_div{
    margin: 10px 10px 10px 10px;
    display:inline-block;
    padding: 20px;
    border-radius: 10px;
    background-color: #2c2c2c;
}

.brightness_div{
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 300px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid white;
    background: linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%);
}

.kelvin_div{
    box-sizing: border-box;
    width: 300px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid white;
    background: linear-gradient(to right, rgb(255, 148, 42) 0%, rgb(255, 189, 126) 12.5%, rgb(255, 216, 181) 25%, rgb(255, 235, 222) 37.5%, rgb(255, 248, 255) 50%, rgb(230, 235, 255) 62.5%, rgb(214, 226, 255) 75%, rgb(204, 220, 255) 87.5%);
}

.slider{
    -webkit-appearance: none;
    margin: 0;
    width: 280px;
    height: 40px; opacity: 1;
    background: none;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: white;
    width: 16px;
    height: 16px;
    cursor: pointer;
    border-radius: 20px;
    border: 2.5px solid black;
}

@media only screen and (max-width: 1000px) {
    body {
        padding: 0px;
        margin-top: 46px;
        background-color: #121212;
        color: white;
        font-family: Verdana;
    }
    
    h2 {
        font-size: 55.2px;
        text-align: center ;
    }
    
    p {
        font-size: 36.8px;
        text-align: left;
        margin: 0px 0px 4.6px 41.4px;
        color: whitesmoke;
    }
    
    .main_div{
        margin: 23px 23px 23px 23px;
        display:inline-block;
        padding: 46px;
        border-radius: 23px;
        background-color: #2c2c2c;
    }
    
    .brightness_div{
        margin-bottom: 23px;
        box-sizing: border-box;
        width: 690px;
        height: 92px;
        border-radius: 46px;
        border: 2.3px solid white;
        background: linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%);
    }
    
    .kelvin_div{
        box-sizing: border-box;
        width: 690px;
        height: 92px;
        border-radius: 46px;
        border: 2.3px solid white;
        background: linear-gradient(to right, rgb(255, 148, 42) 0%, rgb(255, 189, 126) 12.5%, rgb(255, 216, 181) 25%, rgb(255, 235, 222) 37.5%, rgb(255, 248, 255) 50%, rgb(230, 235, 255) 62.5%, rgb(214, 226, 255) 75%, rgb(204, 220, 255) 87.5%);
    }
    
    .slider{
        -webkit-appearance: none;
        margin: 0;
        width: 644px;
        height: 46px; opacity: 1;
        background: none;
    }
    
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: white;
        width: 36.8px;
        height: 36.8px;
        cursor: pointer;
        border-radius: 46px;
        border: 5.75px solid black;
    }}
