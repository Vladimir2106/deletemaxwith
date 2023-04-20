/*начало бургер меню*/

function m1(){
    const d1=document.querySelector('.menu-burger')
    const d2=document.querySelector('.f4')
    const d3=document.querySelector('.kk121')
    const d4=document.querySelector('.f4').querySelectorAll('ul>li')
    

    d1.addEventListener('click', function(){
        d1.style.display="none"

        d2.classList.add('f41')
        d2.classList.remove('f4')

        d3.style.display="block"

for(let i of d4){
        i.style.display="block";
     }


    d3.addEventListener('click',function(){
            d1.style.display="flex"
           
        d2.classList.add('f4')
        d2.classList.remove('f41')

            d3.style.display="none"

  for(let i of d4){
        i.style.display="none";
     }
   
    
           })
 })
}

m1();



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
    window.addEventListener('resize',unitt);/* изменение изображение масштабирование при загрузке страницы 
unitt();




/*конец бургер меню*/



/*страница 1 */

/*кнопка появления + другие елементы 
function f1(){
const z1=document.querySelector('.kryg')
const z2=document.querySelector('.menu')
const z3=document.querySelector('.menu2')
const z4=document.querySelector('.box102')
z1.addEventListener('click', function(){

    z2.classList.add('a')
    z4.classList.add('a')
    z1.classList.add('b')
    z3.classList.add('b')
    
    setTimeout(function a2(){
        const d3=document.querySelectorAll('.cont1')
        for(let i of d3){
            i.classList.remove('cont1')
            i.classList.add('act15')
        }  
    },1000)
})
}
f1();*/


 /* пульсация кнопки 
 const f10=document.querySelector('.im')
 console.log(f10)
 
 function f2(){
 setInterval(function(){
     f10.classList.add('bolhe')
     f10.classList.remove('menhe')
 },2000)
     
 setInterval(function(){
     f10.classList.remove('bolhe')
     f10.classList.add('menhe')
 },4000)
 }
 f2();*/
 /* конец поиск кнопки */