function akinNameGenerator() {
    event.preventDefault(); // Prevent refreshing of the screen
  
    // Get inputs from the form
    let DD = parseInt(document.getElementById("DAY").value);
    let MM = parseInt(document.getElementById("MONTH").value);
    let YEAR = parseInt(document.getElementById("YEAR").value);
    let gender = document.querySelector('input[name="gender"]:checked')?.value; // Get gender (male or female)
  
    // Akan names
    let malesName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    // Calculate century (CC) and year (YY)
    let CC = Math.floor(YEAR / 100);
    let YY = YEAR % 100;
  
    // Day of the week formula
    let day = Math.ceil((((CC/4)-2*CC-1)+(Math.ceil(5*YY/4))+(Math.ceil(26*(MM+1)/10))+DD)%7);
  
    
    // Determine and display the name
    let resultContainer = document.getElementById("result");
    if (gender === "male") {
        resultContainer.innerText = `Your Akan name is: ${malesName[day]}`;
    } else if (gender === "female") {
        resultContainer.innerText = `Your Akan name is: ${femaleName[day]}`;
    } else {
        resultContainer.innerText = "Please select a valid gender.";
    }
  }
  


  
  









