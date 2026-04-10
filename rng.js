document.getElementById("clickMe").onclick = function(){
const g = document.getElementById("myP"); 
const vl =+ document.getElementById("szoveg").value;
 const vl2 =+ document.getElementById("szoveg2").value;
    let ran = Math.floor(Math.random()* vl2)+ vl; 
    g.innerText = ran;
}