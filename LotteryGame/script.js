"user Strict";

let picnumberbtn=document.getElementById("picnumberbtn");
let resultbtn=document.getElementById("result")
let sheetcontainer=document.getElementById("lottery-sheet-container")
const tick=new Audio("Win.wav")
const win=new Audio("Final.wav");

const gift=[  
  "Smartwatch",
  "Fitness Tracker",
  "Wireless Headphones",
  "Portable Bluetooth Speaker",
  "Smart Speaker",
  "Subscription Box with Local Products",
  "Weekend Getaway to a Nearby Beach",
  "Gift Card to a Local Restaurant",
  "Tickets to a Local Event (Movie/Concert)",
  "Set of High-Quality Tea or Coffee",
  "Board Game",
  "Card Game",
  "Puzzle",
  "Set of Books",
  "T-shirt",
  "Sweatshirt",
  "Backpack",
  "Shoes",
  "Sunglasses",
  "Hat",
  "Water Bottle",
  "Plant",
  "Candle Set",
  "Essential Oil Diffuser",
  "Personalized Mug",
  "Gift Basket with Snacks",
  "Body Lotion",
  "Face Mask",
  "Lip Balm",
  "Hairbrush",
  "Digital Photo Frame",
  "Netflix Subscription (3 Months)",
  "Mystery Box",
  "Online Course Voucher",
  "Streaming Service Gift Card",
  "Power Bank",
  "Bluetooth Tracker (like Tile)",
  "Phone Stand or Holder",
  "Mini Projector",
  "LED Strip Lights",
  "Cool Graphic Socks",
  "Gaming Mouse",
  "Wireless Charger",
  "Customized Phone Case",
  "Mini Desk Plant",
  "Eco-Friendly Notebook",
  "Coffee Shop Voucher",
  "Beanie or Cap",
  "Portable Blender",
  "Self-Care Kit"
  ]

  //Rendering all the Gift Details
  gift.forEach(function(val,idx){
    const box=`<div class="box" id=${idx+1}>${idx+1}.${val}</div>`;
    sheetcontainer.insertAdjacentHTML("beforeend",box)
  })

//Pic the number 
picnumberbtn.addEventListener('click',function(){
  for(let idx=1;idx<50;idx++){
    document.getElementById(idx).classList.remove("winningbox");
  } 
    //console.log(Math.floor(Math.random()*10))
    resultbtn.textContent="Please wait...";

    //Setting the 5 secoond timeout to know the gift which was win by us using setTimeout 

    // setTimeout(function(){
    //   let randomnumber=Math.random()*50;
    //   //console.log(randomnumber)
    //   console.log(Math.floor(randomnumber)+1)
    //   //console.log(Math.ceil(randomnumber))
    //   let drawnnumber=Math.floor(randomnumber)+1
    //   //console.log(gift[drawnnumber-1])
    //   let giftown=gift[drawnnumber-1]
    //   resultbtn.textContent=`you have got ${drawnnumber}, and you won ${giftown}`;
    //   document.getElementById(drawnnumber).classList.add("winningbox");
    // },5000);

    //Using SetInterval to engage the user second to second upto 5 counts and reveleing the gift
    let secondscount=0;
    const intervalid=setInterval(function() {
      tick.pause();
      tick.currentTime=0;
      tick.play();
      secondscount++;
      
      //This is used to highlight the boxed during the 5 seconds engaging interval.
      const randombox=Math.floor(Math.random() *50)+1;
     // document.getElementById(randomnumber).classList.add("highlightedbox")
      for(let idx=1;idx<=50;idx++){
        if(idx===randombox){
          document.getElementById(idx).classList.add("highlightedbox")
        }
        else{
          document.getElementById(idx).classList.remove("highlightedbox")
        }
      }

      //This is used to reveal the gift won by user after 5 seconds using secondscount.

      //console.log(randomnumber)
      if(secondscount===5){
        let randomnumber=Math.random()*50;
      //console.log(randomnumber)
      //console.log(Math.floor(randomnumber)+1)
      //console.log(Math.ceil(randomnumber))
      let drawnnumber=Math.floor(randomnumber)+1
      //console.log(gift[drawnnumber-1])
      let giftown=gift[drawnnumber-1]
      resultbtn.textContent=`you have got ${drawnnumber}, and you won ${giftown}`;
      document.getElementById(randombox).classList.remove("highlightedbox")
      document.getElementById(drawnnumber).classList.add("winningbox");
      tick.pause()
      win.pause();
      win.currentTime=0;
      win.play();  
      clearInterval(intervalid);
      }
    }, 1000);
    
})










