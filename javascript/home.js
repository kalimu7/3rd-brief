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
var total =0;
let arrTotal = [];
// var quantity=0;
ordernow.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        count++;
        show.innerText = count;
        let titl5 =  btn.parentElement.querySelector('h3').innerHTML ;//title
        let price =  parseFloat(btn.parentElement.querySelector('h4').innerHTML);//prix
       
     
        
        let html = `<div class="panier-table">
        
        <table class="styled-table">
    
            <tbody>
                <tr class="total">
                    <td><h4>${titl5}</h4><td>    
                    <td>${price}</td>

                    <td><input type="number"  style="width : 30px;" class="input-quantity" value="" ></td>

                    <td class="totalValue"> ${total} $</td>

                </tr>
            </tbody>
            </table>

        </div>`

        panierdontainer.insertAdjacentHTML("beforeend",html);

        let qnt =  document.querySelectorAll(".input-quantity");
        let totalClass =  document.querySelectorAll(".total");
        
         
        console.log("quantite = ",qnt.length)
        
        let displaytotal =  document.querySelector(".displaytotal");
        for(let  i = 0 ; i < qnt.length ; i++){

            qnt[i].addEventListener('change',(e)=>{

                total =  price * parseFloat(qnt[i].value);
                 console.log(total);
                 displaytotal.innerHTML = `<h1>${final}</h1>`
            })

        }
        // console.log("total",total)
        
        arrTotal.push(total);
        let final = 0;

        for (let i = 0; i < arrTotal.length; i++) {
            final +=  arrTotal[i];
           
            
        }
        
        displaytotal.innerHTML = `<h1>${final}</h1>`













        
        
        
    })
    
})

// ********************test moving cart to the nexy page*********************
const firstcard = document.querySelector("#card1");
const container_cart = document.querySelector(".container-cart");
const panierdontainer = document.querySelector('.cartpanier');
const titre = document.querySelector('#title-1');

// document.getElementById('btnitem1').addEventListener('click', () => {
//     cards.forEach((element)=>{
        
//     let html = `<div class="panier-table">
//      <h4>${titre.innerHTML}</h4>
//      <h4>price dollar</h4>
//     </div>`


//     })
//     console.log(titre.innerHTML);
//     let html = `<div class="panier-table">
//     <h4>${titre.innerHTML}</h4>
//     <h4>price dollar</h4>
// </div>`
//     panierdontainer.insertAdjacentHTML("beforeend",html);

// })

const cartbtn = document.querySelector('#carte');
cartbtn.addEventListener('click', () => {
    document.querySelector('.cartpanier').classList.toggle("hide");
    console.log("clicked the panier")
})

console.log(cards[4].children[1].src);
// console.log(cards[4].children[3].innerHTML);