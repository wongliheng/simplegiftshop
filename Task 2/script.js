// Name: Wong Li Heng
// UOW Student ID: 6859197

//Changes the delivery date on load
window.addEventListener('load', displayDate);

//Changes the date on the input to today and disables past dates
function displayDate () {
    var today = new Date ();
    document.getElementById("delivery").valueAsDate = today;
    delivery.min = today.toISOString().split("T")[0];
}

//Adds field checking function to checkout button
var checkout = document.getElementById ("checkout-button");
checkout.addEventListener('click', checkFields);

//Variable for setting interval to close the modal
var closeTimer;

//Checks whether the user has inputted valid values
function checkFields ()
{
   //Global search for any character that is not A-Z, a-z or whitespace
   var checkName = /[^A-Za-z\s]/g;
   var name = document.getElementById("name").value;

   var checkNumber = /[^\d]/g;
   var number = document.getElementById("number").value;
   
   //Displays error messages if fields do not meet requirements
   if (name == "")
   {
        alert ("Please enter your name.");
        return false;
   }
   else if (name.match (checkName))
   {
        alert ("Name should not contain numbers or special characters.");
        return false;
   }
   else if (number == "")
   {
        alert ("Please enter your number.");
        return false;
   }
   else if (number.length != 8)
   {
        alert ("Your contact number should contain 8 numbers");
        return false;
   }
   else if (number.match (checkNumber))
   {
        alert ("Your contact number should only contain numbers");
        return false;
   }
   
   //Clears the fields
   document.getElementById("name").value = "";
   document.getElementById("number").value = "";
   document.getElementById("address").value = "";

   //Calls the function to create a string for the date
   var deliveryDate = formatDate();
   //Prints the date on the modal
   document.getElementById("ddate").innerHTML = "Your gift will arrive on the " + deliveryDate;
   //Opens the modal and automatically closes it after 4 seconds or if the user closes
   openModal ();
   closeTimer = setInterval (closeModal, 4000);
}

//Gets date from input and changes it to a string
function formatDate () {
    var deliveryDate = document.getElementById("delivery").value;
    var monthArray = ["January", "February", "March", "April", "May", "June", 
             "July", "August", "September", "October", "November", "December"];
    var monthNo = deliveryDate.substring (5,7);
    var arrayIndex = parseInt (monthNo);
    arrayIndex--;
    var month = monthArray[arrayIndex];

    var day = deliveryDate.substring (8,10);

    //Remove the 0 in front of 01 - 09
    if (day < 10)
    {
        day = deliveryDate.substring (9,10);
    }

    if (day == 1)
    {
        var date = day + "st of " + month;
    }
    else if (day == 2)
    {
        var date = day + "nd of " + month;
    }
    else if (day == 3)
    {
        var date = day + "rd of " + month;
    }
    else 
    {
        var date = day + "th of " + month;
    }
    return date;
}

//Makes modal visible
function openModal () {
    var modal = document.getElementById("buy-modal");
    modal.style.display = "block";
}

//Adds function to close button of modal
var close = document.getElementById ("close");
close.addEventListener('click', closeModal);

//Closes the modal and clears the interval
function closeModal () {
    var modal = document.getElementById("buy-modal");
    modal.style.display = "none";
    clearInterval(closeTimer);
}

//Adds function to scroll
window.onscroll = function() {newsletterScroll()};
//Variables for controlling the modal and for setting interval
var displayed = 0;
var closeTimer2;

//Opens the modal when the user has scrolled past a certain point
function newsletterScroll() {
    var modal = document.getElementById("newsletter-modal");
    
    //Ensures that the modal only displays once per visit
    if (displayed > 0)
    {
        return false;
    }

    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700)
    {
        openNewsletter ();
        displayed++;
        closeTimer2 = setInterval (closeNewsletter, 4000);
    }
}

//Makes modal visible
function openNewsletter () {
    var modal = document.getElementById("newsletter-modal");
    modal.style.display = "block";
}

//Adds function to close button of modal
var newsletterclose = document.getElementById ("newsletter-close");
newsletterclose.addEventListener('click', closeNewsletter);

//Closes the modal and clears the interval
function closeNewsletter () {
    var modal = document.getElementById("newsletter-modal");
    modal.style.display = "none";
    clearInterval (closeTimer2);
}