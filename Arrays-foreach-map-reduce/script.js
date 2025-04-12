"use Strict";

const gift=[
    "Gift Card to a Local Restaurant",
    "Weekend Getaway to a Nearby Beach",
    "Subscription Box with Local Products",
    "Set of High-Quality Tea or Coffee",
    "Spa Day Voucher",
    "Tickets to a Local Event (Movie, Concert, etc.)",
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

// gift.forEach(function(value,index,arr){
//     //let newval=value.toUpperCase();
//     console.log(value.toUpperCase(),index);
// })

let newarray=gift.map(function(value,index,arr){
    return value.toUpperCase();
    
})
console.log(newarray)
console.log(gift)

const marks=[89,79,45,76,87,45]

let totalsum=0;
marks.forEach(function(marks){
    totalsum=totalsum+marks
})

console.log(totalsum)

let reduceex=marks.reduce(function(totalsum,cur,i,arr){
    console.log(totalsum,cur,i);
    return totalsum+cur;
},0);

console.log(reduceex)

gift.reduce(function(prev,cur,i,arr){
    console.log(prev,cur)
    prev.push(cur.toUpperCase())
    return prev;
},[])

gift.reduce(function(prev,cur,i,arr){
    console.log(prev,cur)
    prev[i]=cur;
    return prev;
},{})

