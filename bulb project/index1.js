var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0;
btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        console.log("clcked")
        flag = 1;
    }else{
        bulb.style.backgroundColor = "transparent"
        console.log(" again clcked")
        flag = 0;
    }
    
})