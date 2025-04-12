const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

/*checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable, isAgeAbove50, hasAadharCard);

  if(isSeatAvailable){
    console.log("Seat is available.")
    if(isAgeAbove50){
        console.log("Age is above 50.")
        if(hasAadharCard){
            console.log("You are eligible for free bus pass.")
            alert("You are eligible for free bus pass.")
            passengerStatus.textContent = "You are eligible for free bus pass.";
        }
        else{
            console.log("You are not eligible for free bus pass. Please apply for Aadhar card.")
            alert("You are not eligible for free bus pass. Please apply for Aadhar card.")
            passengerStatus.textContent = "You are not eligible for free bus pass. Please apply for Aadhar card.";
        }
    }
    else{
        console.log("You are not eligible for free bus pass. You must be above 50 years of age.")
        alert("You are not eligible for free bus pass. You must be above 50 years of age.")
        passengerStatus.textContent = "You are not eligible for free bus pass. You must be above 50 years of age.";
    }
}
else{
    console.log("Seat is not available.")
    alert("Seat is not available.")
    passengerStatus.textContent = "Seat is not available.";
}
});
*/

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable, isAgeAbove50, hasAadharCard);

  let feedback;
  if(isSeatAvailable){
    console.log("Seat is available.")
    feedback ="Seat is Available"
    if(isAgeAbove50){
        console.log("Age is above 50.")
        feedback = feedback +" ,Aged above 50"
        if(hasAadharCard){
            console.log("You are eligible for free bus pass.")
            feedback = feedback +" ,You are eligible for free bus"
            let confirmation = confirm("Are you sure?Do you want to come inside?")
            if(confirmation){
              alert("Please Open the Door")
              feedback += ", Please come inside the Bus"
            }
            else{
              alert("Thank You,Right Rigt...!")
            }
            
          }
        else{
            console.log("You are not eligible for free bus pass. Please apply for Aadhar card.")
            feedback =feedback + " ,but you are not eligible for free bus pass. Please apply for Aadhar card."
           }
    }
    else{
        console.log("You are not eligible for free bus pass. You must be above 50 years of age.")
        feedback= feedback +" ,but you are not eligible for free bus pass. You must be above 50 years of age"
        }
}
else{
    console.log("Seat is not available.")
    feedback ="Seat is not available."
    }

    passengerStatus.textContent = feedback;

});
