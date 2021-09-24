/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

 //Set up an associative array
 //The keys represent the size of the website
 //The values represent the cost of the website i.e A 10" website cost's $35
 var website_prices = new Array();
 website_prices["Round6"]=800;
 website_prices["Round8"]=1200;
 website_prices["Round10"]=1600;
 website_prices["Round12"]=2000;
 
 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
 //We use this this array when the user selects a filling from the form
 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["logo"]=200;
 filling_prices["uxui"]=200;
 filling_prices["businesscard"]=200;
 filling_prices["envelope"]=200;
 filling_prices["letterhead"]=200;
 filling_prices["flyer"]=200;
 filling_prices["folder"]=200;
 filling_prices["infographic"]=200;
 filling_prices["brochure"]=400;
 filling_prices["booklet"]=400;
 filling_prices["banner"]=400;
 filling_prices["packaging"]=400;
filling_prices["vectordesign"]=400;
filling_prices["coverdesign"]=400;
filling_prices["clothingdesign"]=400;
filling_prices["officesupplies"]=400;
 
	 
	 
// getwebsiteSizePrice() finds the price based on the size of the website.
// Here, we need to take user's the selection from radio button selection
function getwebsiteSizePrice()
{  
    var websiteSizePrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the website the user Chooses name=selectedwebsite":
    var selectedwebsite = theForm.elements["selectedwebsite"];
    //Here since there are 4 radio buttons selectedwebsite.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedwebsite.length; i++)
    {
        //if the radio button is checked
        if(selectedwebsite[i].checked)
        {
            //we set websiteSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" website we set it to 25
            //by using the website_prices array
            //We get the selected Items value
            //For example website_prices["Round8".value]"
            websiteSizePrice = website_prices[selectedwebsite[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the websiteSizePrice
    return websiteSizePrice;
}

//This function finds the filling price based on the 
//drop down selection
function getFillingPrice()
{
    var websiteFillingPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["filling"];
     
    //set websiteFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    websiteFillingPrice = filling_prices[selectedFilling.value];

    //finally we return websiteFillingPrice
    return websiteFillingPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function customCMSPrice()
{
    var customCMSPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includecustomCMSPrice = theForm.elements["includeCMSPrice"];

    //If they checked the box set candlePrice to 5
    if(includecustomCMSPrice.checked==true)
    {
        customCMSPrice=5;
    }
    //finally we return the candlePrice
    return customCMSPrice;
}


//candlesPrice() finds the candles price based on a check box selection
function informationalPrice()
{
    var informationalPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeinformationalPrice = theForm.elements["includeInformationalPrice"];

    //If they checked the box set candlePrice to 5
    if(includeinformationalPrice.checked==true)
    {
        informationalPrice=5;
    }
    //finally we return the candlePrice
    return informationalPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function shoppingCartPrice()
{
    var shoppingCartPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeshoppingCartPrice = theForm.elements["includeshoppingCartPrice"];

    //If they checked the box set candlePrice to 5
    if(includeshoppingCartPrice.checked==true)
    {
        shoppingCartPrice=5;
    }
    //finally we return the candlePrice
    return shoppingCartPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function blogPrice()
{
    var blogPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeblogPrice = theForm.elements["includeblogPrice"];

    //If they checked the box set candlePrice to 5
    if(includeblogPrice.checked==true)
    {
        blogPrice=5;
    }
    //finally we return the candlePrice
    return blogPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function photoGalleryPrice()
{
    var photoGalleryPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includephotoGalleryPrice = theForm.elements["includephotoGalleryPrice"];

    //If they checked the box set candlePrice to 5
    if(includephotoGalleryPrice.checked==true)
    {
        photoGalleryPrice=5;
    }
    //finally we return the candlePrice
    return photoGalleryPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function videoGalleryPrice()
{
    var videoGalleryPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includevideoGalleryPrice = theForm.elements["includevideoGalleryPrice"];

    //If they checked the box set candlePrice to 5
    if(includevideoGalleryPrice.checked==true)
    {
        videoGalleryPrice=5;
    }
    //finally we return the candlePrice
    return videoGalleryPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function audioPrice()
{
    var audioPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeaudioPrice = theForm.elements["includeaudioPrice"];

    //If they checked the box set candlePrice to 5
    if(includeaudioPrice.checked==true)
    {
        audioPrice=5;
    }
    //finally we return the candlePrice
    return audioPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function emailPrice()
{
    var emailPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeemailPrice = theForm.elements["includeemailPrice"];

    //If they checked the box set candlePrice to 5
    if(includeemailPrice.checked==true)
    {
        emailPrice=5;
    }
    //finally we return the candlePrice
    return emailPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function adservePrice()
{
    var adservePrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeadservePrice = theForm.elements["includeadservePrice"];

    //If they checked the box set candlePrice to 5
    if(includeadservePrice.checked==true)
    {
        adservePrice=5;
    }
    //finally we return the candlePrice
    return adservePrice;
}

//candlesPrice() finds the candles price based on a check box selection
function reservationPrice()
{
    var reservationPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includereservationPrice = theForm.elements["includereservationPrice"];

    //If they checked the box set candlePrice to 5
    if(includereservationPrice.checked==true)
    {
        reservationPrice=5;
    }
    //finally we return the candlePrice
    return reservationPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function eventListingPrice()
{
    var eventListingPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeeventListingPrice = theForm.elements["includeeventListingPrice"];

    //If they checked the box set candlePrice to 5
    if(includeeventListingPrice.checked==true)
    {
        eventListingPrice=5;
    }
    //finally we return the candlePrice
    return eventListingPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function contactPrice()
{
    var contactPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includecontactPrice = theForm.elements["includecontactPrice"];

    //If they checked the box set candlePrice to 5
    if(includecontactPrice.checked==true)
    {
        contactPrice=5;
    }
    //finally we return the candlePrice
    return contactPrice;
}





function insciptionPrice()
{
    //This local variable will be used to decide whether or not to charge for the inscription
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0
    var inscriptionPrice=0;
    //Get a refernce to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includeinscription"
    var includeInscription = theForm.elements["includeinscription"];
    //If they checked the box set inscriptionPrice to 20
    if(includeInscription.checked==true){
        inscriptionPrice=20;
    }
    //finally we return the inscriptionPrice
    return inscriptionPrice;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var websitePrice = 
    getwebsiteSizePrice() + 
    getFillingPrice() + 
    customCMSPrice() + 
    informationalPrice() + 
    shoppingCartPrice() + 
    blogPrice() + 
    photoGalleryPrice() +  
    videoGalleryPrice() + 
    audioPrice() + 
    emailPrice() + 
    adservePrice() + 
    reservationPrice() + 
    eventListingPrice() + 
    contactPrice() + 
    insciptionPrice();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
	var divobjj = document.getElementById('totalPrice1');
    divobj.style.display='block';
    divobj.innerHTML = "$"+websitePrice;
	 divobjj.innerHTML = "$"+websitePrice;

}



function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
