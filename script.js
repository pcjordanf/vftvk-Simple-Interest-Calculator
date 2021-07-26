function compute()
{
    //Create references to the input elements we wish to validate
    var amount = document.getElementById("principal");
    var interest = document.getElementById("rate");
    var period = document.getElementById("NoOfYears");
    var value_year = period.options[period.selectedIndex].value;
    var amount_input = document.getElementById("amount_input");
    var interest_input = document.getElementById("rate_input");
    var amount_result = document.getElementById("amount_result");
    var year_result = document.getElementById("year_result");
    var myText = document.getElementById("results");
    
    //Check if principal field is empty, negative or zero
    if(amount.value == "" || Number(amount.value) <= 0 ){
    alert("Enter a positive number");
    principal.focus();
    return false;
    } else
    {
        amount_input.innerHTML= amount.value;
        interest_input.innerHTML= interest.value + "%";
        amount_result.innerHTML= (Number(amount.value) * (Number(interest.value) * Number(value_year) / 100)).toFixed(2);
        year_result.innerHTML = new Date().getFullYear() + Number(period.value);
        myText.removeAttribute("hidden");
        return true;        
    }
 

       
}


var slider = document.getElementById("rate");
var output = document.getElementById("rate_selected");

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value + "%" ;
}
