const uls = document.querySelector('.nav-ul');
const cl = document.getElementById('close');
const op  =document.getElementById('open');

op.addEventListener('click',()=>{
    uls.style.right = '0';
    document.querySelector('body').style.overflow = "hidden";
    
})
cl.addEventListener('click',()=>{
    uls.style.right = '-100%';
    document.querySelector('body').style.overflow = "visible";
})

// ***************menu filter*************
const  sushibtn = document.querySelector('#sushi-btn');
const  saladebtn = document.querySelector('#salade-btn');
const  dessertebtn = document.querySelector('#desserte-btn');
const  allbtn = document.querySelector('#all-btn');
const cards = document.querySelectorAll('.card');


//display sushi
 function dsalade () {
    cards.forEach(element => {
        element.style.display = "block";
        if(!element.classList.contains("salade")){
            element.style.display = "none";
        }
    });
 }

 function dsushi() {
    cards.forEach(element =>{
        element.style.display = "block";
        if(!element.classList.contains("sushi")){
            element.style.display = "none";
        }
    });
 }

 function ddesserte(){
    
    cards.forEach(element => {
        element.style.display = "block";
        element.style.marginButtom = "10px"
        if(!element.classList.contains("desserte")){
            element.style.display = "none";
        }
    });
 }

    function displayall(){
        cards.forEach(element =>{
            element.style.display = "block";
        })
    }


 saladebtn.addEventListener("click",dsalade);
 sushibtn.addEventListener("click",dsushi);
 dessertebtn.addEventListener("click",ddesserte);
    allbtn.addEventListener("click",displayall);

// ***************menu filter*************