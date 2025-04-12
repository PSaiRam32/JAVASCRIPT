let seat=prompt("Is Seat Available?").toLowerCase();
//let age=prompt("Is Age Above 50?");
//let aadhar=prompt("Do you have Aadhar Card?");

// if(seat=="yes" && age=="yes" && aadhar=="yes"){
//     alert("You are eligible for free bus pass.");
//     console.log("You are eligible for free bus pass.");
// }
// else if(seat=="yes" && age=="yes" && aadhar=="no"){
//     alert("You are not eligible for free bus pass. Please apply for Aadhar card.");
//     console.log("You are not eligible for free bus pass. Please apply for Aadhar card.");
// }
// else if(seat=="yes" && age=="no" && aadhar=="yes"){
//     alert("You are not eligible for free bus pass. You must be above 50 years of age.");
//     console.log("You are not eligible for free bus pass. You must be above 50 years of age.");
// } 
  
if(seat=='yes'){
    console.log("Seat is available.")
    let ageisabove50=prompt("Is Age Above 50?").toLowerCase();
    if(ageisabove50=="yes"){
        console.log("Age is above 50.")
        let aadhar=prompt("Do you have Aadhar Card?").toLowerCase();
        if(aadhar=="yes"){
            console.log("You are eligible for free bus pass.")
            alert("You are eligible for free bus pass.")
        }
        else{
            console.log("You are not eligible for free bus pass. Please apply for Aadhar card.")
            alert("You are not eligible for free bus pass. Please apply for Aadhar card.")
        }
    }
    else{
        console.log("You are not eligible for free bus pass. You must be above 50 years of age.")
        alert("You are not eligible for free bus pass. You must be above 50 years of age.")
    }
}
else{
    console.log("Seat is not available.")
    alert("Seat is not available.")
}