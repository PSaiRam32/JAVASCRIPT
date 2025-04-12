"user Strict";



let picnumberbtn=document.getElementById("picnumberbtn");
let resultbtn=document.getElementById("result")
let sheetcontainer=document.getElementById("lottery-sheet-container")

const gift=[
    "Gift Card to a Local Restaurant",
    "Weekend Getaway to a Nearby Beach",
    "Subscription Box with Local Products",
    "Set of High-Quality Tea or Coffee",
    "Spa Day Voucher",
    "Tickets to a Local Event (Movie/Concert)",
    "Cozy Blanket",
    "Set of Books",
    "Smart Speaker",
    "Portable Bluetooth Speaker",
    "Wireless Headphones",
    "Digital Photo Frame",
    "Gift Basket with Snacks",
    "Personalized Mug",
    "High-Quality Pen Set",
    "Board Game",
    "Puzzle",
    "Card Game",
    "Cooking Class Voucher",
    "Wine or Liquor Set",
    "Home Decor Item",
    "Plant",
    "Candle Set",
    "Essential Oil Diffuser",
    "Smartwatch",
    "Fitness Tracker",
    "Water Bottle",
    "Backpack",
    "Umbrella",
    "Sunscreen",
    "Hat",
    "Sunglasses",
    "T-shirt",
    "Sweatshirt",
    "Pants",
    "Skirt",
    "Dress",
    "Shoes",
    "Socks",
    "Underwear",
    "Scented Soap",
    "Shampoo",
    "Conditioner",
    "Body Lotion",
    "Face Mask",
    "Hand Cream",
    "Lip Balm",
    "Toothpaste",
    "Toothbrush",
    "Hairbrush"
  ]

picnumberbtn.addEventListener('click',function(){
  for(let idx=1;idx<50;idx++){
    document.getElementById(idx).classList.remove("winningbox");
  }
    //console.log(Math.floor(Math.random()*10))
    resultbtn.textContent="Please wait...";
    setTimeout(function(){
      let randomnumber=Math.random()*50;
      //console.log(randomnumber)
      console.log(Math.floor(randomnumber)+1)
      //console.log(Math.ceil(randomnumber))
      let drawnnumber=Math.floor(randomnumber)+1
      //console.log(gift[drawnnumber-1])
      let giftown=gift[drawnnumber-1]
      resultbtn.textContent=`you have got ${drawnnumber}, and you won ${giftown}`;
      document.getElementById(drawnnumber).classList.add("winningbox");
    },5000) 
})

gift.forEach(function(val,idx){
  const box=`<div class="box" id=${idx+1}>${idx+1}.${val}</div>`;
  sheetcontainer.insertAdjacentHTML("beforeend",box)
})








