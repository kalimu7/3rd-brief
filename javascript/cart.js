const ps = document.querySelector('#plus') ;
const ms = document.querySelector('#minus');
const affichage = document.querySelector('#quantity');
var counnter = 1;
ps.addEventListener("click",()=>{
    counnter ++;
    if(counnter<=0){
        alert('stop');
    }else{
        
        affichage.value  =  counnter;
    }
})
ms.addEventListener("click",()=>{
    counnter --;
    if(counnter<=0){
        counnter = 0;
    }else{
        affichage.value  =  counnter;
    }
})