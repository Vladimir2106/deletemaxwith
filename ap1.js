

var wii;
function unitt (){
    wii=document.querySelector('.first').offsetWidth;

if(wii<768){
 document.querySelector('.menu-burger').style.display='flex'
}

if(wii>768){
 document.querySelector('.menu-burger').style.display='none'
}
}
unitt();
    window.addEventListener('resize',unitt)
unitt


