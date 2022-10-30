const uls = document.querySelector('.nav-ul');
const cl = document.getElementById('close');
const op = document.getElementById('open');

op.addEventListener('click', () => {
    uls.style.right = '0';
    document.querySelector('body').style.overflow = "hidden";

})
cl.addEventListener('click', () => {
    uls.style.right = '-100%';
    document.querySelector('body').style.overflow = "visible";
})

// ***************menu filter*************
const sushibtn = document.querySelector('#sushi-btn');
const saladebtn = document.querySelector('#salade-btn');
const dessertebtn = document.querySelector('#desserte-btn');
const allbtn = document.querySelector('#all-btn');
const cards = document.querySelectorAll('.card');


//display sushi
function dsalade() {
    cards.forEach(element => {
        element.style.display = "block";
        if (!element.classList.contains("salade")) {
            element.style.display = "none";
        }
    });
}

function dsushi() {

    cards.forEach(element => {
        element.style.display = "block";
        if (!element.classList.contains("sushi")) {
            element.style.display = "none";
        }
    });
}

function ddesserte() {

    cards.forEach(element => {

        element.style.display = "block";
        if (!element.classList.contains("desserte")) {
            element.style.display = "none";
        }
    });
}

function displayall() {
    cards.forEach(element => {
        element.style.display = "block";
    })
}


saladebtn.addEventListener("click", dsalade);
sushibtn.addEventListener("click", dsushi);
dessertebtn.addEventListener("click", ddesserte);
allbtn.addEventListener("click", displayall);



// ********************cart logic********************* // ********************cart logic********************* // ********************cart logic*********************
const ordernow = document.querySelectorAll(".test");
const show = document.querySelector('.show-nu');
var count = 0;
var count1 = 0;
let quantity1 =0;


let sum = 0;
// var quantity=0;
ordernow.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        count++;
        show.innerText = count;
        let titl5 =  btn.parentElement.querySelector('h3').innerHTML ;//title
        let price =  parseFloat(btn.parentElement.querySelector('h4').innerHTML);//prix
       
     
        
        let html = `<div class="panier-table">

        <table class="styled-table">
            
                <tr class="total">
                    <td style="width: 90px;"><h4>${titl5}</h4><td>    
                    <td style="width: 90px;" class="pricediv">${price} $</td>
                    <td style="width: 90px;"><input type="number"  style="width : 30px;" class="input-quantity" value="1" min="1" ></td>
                    <td style="width: 90px;"><button class="btn">remove item</button></td>

                </td>
            
            </table>
        </div>`
        const panierdontainer = document.getElementsByClassName('cartpanier')[0];
        panierdontainer.insertAdjacentHTML("beforeend",html);
        // let totalClass =  document.querySelectorAll(".total");
        // console.log("quantite = ",qnt.length);
        // qnt[0] =1;
        
       
        
        
        
        
    })
    
})
let arrTotal = [];
let total =[];




// ********************test moving cart to the nexy page*********************
const firstcard = document.querySelector("#card1");
const container_cart = document.querySelector(".container-cart");

const titre = document.querySelector('#title-1');



const cartbtn = document.querySelector('#carte');
cartbtn.addEventListener('click', () => {
    document.querySelector('.cartpanier').classList.toggle("hide");
    console.log("clicked the panier");
})

console.log(cards[4].children[1].src);
// console.log(cards[4].children[3].innerHTML);


const ttlbtn = document.querySelector('#calculatetotal');
ttlbtn.addEventListener('click',()=>{
    const panierdontainer = document.getElementsByClassName('cartpanier')[0];
    const div = panierdontainer.querySelectorAll('.total');
    console.log(div[0])
    // console.log(prc);
    div.forEach((element)=>{
        let price = element.querySelector(".pricediv")
        let inputquantity = element.querySelector(".input-quantity")
        console.log(price.innerHTML ,inputquantity.value )

        arrTotal.push(Number(price.innerHTML.replace("$",""))* inputquantity.value)

    })
    let taotaltoatal  = arrTotal.reduce((pre,cur) =>pre +cur)
    console.log(taotaltoatal);
    document.querySelector(".areatoshow").innerHTML = taotaltoatal;
    arrTotal = [];

})