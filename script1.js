let burgerslist = document.querySelector('.burgers');
let orders = document.querySelector('.orderdburgers');
let total = document.getElementById('total');
let subtotal = document.getElementById('subtotal');
let taxtotal = document.getElementById('tax');
let itemnumber = document.getElementById('itemnumber');
let burgers = [
    {
        name:"Burger ,Leger et savoureux 900 calorie",
        image:"https://www.lanutribysego.be/wp-content/uploads/2021/01/front-view-vegetarian-burger-on-cutting-board-with-sauces.jpg",
        price:55
    },
    {
        name:"Grizette 200 calorie",
        image:"https://tse2.mm.bing.net/th?id=OIP.Wseu7IQc-l065Zjj7ZviiwHaFj&pid=Api&P=0",
        price:68
    },
    {
        name:"Plaza Athenee 100 calorie",
        image:"https://tse3.mm.bing.net/th?id=OIP.TraludNv6oh_e7bxcHXr-AHaIw&pid=Api&P=0",
        price:50

    },
    {
        name:"Vegan 600 calorie",
        image:"https://i.pinimg.com/736x/9c/c4/59/9cc459500f0583bf991d0b0ade87727a.jpg",
        price:30
    },
    {
        name: "Simple braekfash 90 calorie",
        image:"https://static.wixstatic.com/media/47ec8b_4a62c9742da74a97a9bab462acba8e12~mv2_d_4863_3240_s_4_2.jpg/v1/fill/w_1000,h_666,al_c,q_90,usm_0.66_1.00_0.01/47ec8b_4a62c9742da74a97a9bab462acba8e12~mv2_d_4863_3240_s_4_2.jpg",
        price:20
          
    },
    {
        name:"food motivation 300 calorie",
        image:"https://tse4.mm.bing.net/th?id=OIP.7Fqb8BR2qaWTdyfJbAfpeAHaGD&pid=Api&P=0",
        price:30

    },
    {
        name:"salaman braekfash 70 calorie",
        image:"https://tse2.mm.bing.net/th?id=OIP.U9Hxl_5vteFeRawpbfNPNQHaE8&pid=Api&P=0",
        price:25

    },
    {
        name:"bacon baked egg in avocado 40calorie",
        image:"https://tse3.mm.bing.net/th?id=OIP.NDA2s47_5cr3r3HHvtI8kQHaKw&pid=Api&P=0",
        price:15

    },

    {
        name:"healthy eating plan 800 calories ,Alimentation saine pour la sante ",
        image:"https://tse4.mm.bing.net/th?id=OIP.dks8UrOrtNUjx_cbgWUBTAHaE8&pid=Api&P=0",
        price: 70
    },
    {
        name:"healthy et bio-Parisianavores 900 calories",
        image:"https://parisianavores.paris/wp-content/uploads/2016/10/judy-paris6-restaurant-bio-vegetarien-paris-6.jpg",
        price:66
    },
    {
        name:"Sirlon steak dinner with asparagus and potatoes 608 calories",
        image:"https://tse1.mm.bing.net/th?id=OIP.ceSKUKB_pId-6aigZQvQswHaLG&pid=Api&P=0",
        price:100
    },
    {
        name:"Soupe de Tomate 200 caliries",
        image:"https://tse2.mm.bing.net/th?id=OIP.2h-hAD2DXCCx5-kKgaI3kgHaEy&pid=Api&P=0",
        price:99
    }
]
burgers.forEach((element,index) =>{
    let newelement = ``;
    newelement = `
                     <div class="burger">
                         <div class="image">
                            <img src="${element.image}" alt ="">
                         </div>
                        <div class="title">${element.name}</div>
                       <div class="bottom">
                          <div class="price">${element.price}dh</div>
                           <div class="cart"><i class="fa-solid fa-cart-plus" id="${index}" onclick="ordernow(this.id)"></i></div>
                         </div>
                    </div>
`
    burgerslist.innerHTML += newelement;
    
})
let orderedburger = [];
function ordernow(index){
    orderedburger.push(burgers[index]);
    orders.innerHTML = "";
    orderedburger.forEach((element,index)=>{
          let neworder=``;
          neworder =` 
          <div class="burger">
          <div class="icon"><img src="${orderedburger[index].image}" alt=""></div>
              <div class="title"><h1>${orderedburger[index].name}</h1><p>${orderedburger[index].price}dh</p></div>
              <div class="delete"><i class="fa-solid fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
      </div>
          
          
                    `
    orders.innerHTML+=neworder;
    })
    cashcalc();
}
function removeitem(index){
    orderedburger.splice(index,1);
    orders.innerHTML = "";
    orderedburger.forEach((element,index)=>{
          let neworder=``;
          neworder =` 
          <div class="burger">
          <div class="icon"><img src="${orderedburger[index].image}" alt=""></div>
              <div class="title"><h1>${orderedburger[index].name}</h1><p>${orderedburger[index].price}</p></div>
              <div class="delete"><i class="fa-solid fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
      </div>
                    `
    orders.innerHTML+=neworder;
    })
    cashcalc();
}
function cashcalc(){
    let totalcash =0;
    orderedburger.forEach(element=>{
        totalcash = totalcash + element.price;
    });
    subtotal.innerHTML =totalcash+`dh`;
    taxtotal.innerHTML =(totalcash*10/100)+`dh`;
    total.innerHTML = (totalcash+(totalcash*10/100))+`dh`;
    itemnumber.innerHTML = orderedburger.length;
}














