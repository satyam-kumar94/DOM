// selection of html
var a = document.querySelector("h1")
console.log(a)



// changing in html and css
var a = document.querySelector("h1")
a.innerHTML = "change ho gyqa bhai"
a.style.backgroundColor = "black"  


// event listner
var a = document.querySelector("h1")
a.addEventListener("click",function(){
    a.innerHTML = "mai badal gya hu sabki tarah"
    a.style.backgroundColor = "black"
    a.style.color="yellow"
})

