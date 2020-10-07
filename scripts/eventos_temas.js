function gerenciarAltoContraste() {
    var corAtual, elementoBody;

    elementoBody = document.getElementsByTagName("body")[0];
    
    corAtual = elementoBody.style.backgroundColor;      
    console.log("cor atual: " + corAtual);
    
    if(corAtual == "black"){ 
        elementoBody.style.backgroundColor = "white"; 
        elementoBody.style.color = "black";         
    } else {
        elementoBody.style.backgroundColor = "black";   
        elementoBody.style.color = "white";            
    } 

}
function gerenciarTemaRosa() {
    var corAtual, elementoBody;

    elementoBody = document.getElementsByTagName("body")[0];
    
    corAtual = elementoBody.style.backgroundColor;      
    console.log("cor atual: " + corAtual);
    
    if(corAtual == "black"){ 
        elementoBody.style.backgroundColor = "pink"; 
        elementoBody.style.color = "black";
    } else {
        elementoBody.style.backgroundColor = "black";   
        elementoBody.style.color = "pink";            
    } 

}


$(document).ready(function(){
    console.log("Entrou no window onload..funcionou o JS");

    document.getElementById("opAltoContraste").addEventListener("click", gerenciarAltoContraste);
    document.getElementById("opTema").addEventListener("click", gerenciarTemaRosa); 
 
});
