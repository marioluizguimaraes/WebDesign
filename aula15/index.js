document.getElementById('showmodal').addEventListener("clik", modal)
document.getElementById('fechar').addEventListener("clik", modal)

function modal(){
    if(getComputedStyle(document.querySelector(".modal")).visibility =='visible'){
        document.getElementsByClassName("modal1").style.visibility = "hidden"
    } 
    else{
        document.getElementsByClassName("modal1").style.visibility = "visible"
    }
}
