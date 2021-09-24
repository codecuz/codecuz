

 //1. What do you need?
 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["logo"]=250;
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

 //2. Do you have a design?
 var website_prices = new Array();
 website_prices["YesHaveDesign"]=0;
 website_prices["NoHaveDesign"]=350;
 website_prices["YesNeedColor"]=150;
 website_prices["NoNeedColor"]=300;

 //3. Will your design required stock images?
 var website_prices2 = new Array();
 website_prices2["NoNeedStock"]=0;
 website_prices2["YesNeedStock1"]=7800;
 website_prices2["YesNeedStock2"]=1850;
 website_prices2["YesNeedStock3"]=3900;

 //4. Will your design need multiple pages, if so, how many?
 var pagesfilling_prices= new Array();
 pagesfilling_prices["None"]=0;
 pagesfilling_prices["pagesnum24"]=2000;
 pagesfilling_prices["pagesnum46"]=2400;
 pagesfilling_prices["pagesnum68"]=2004;
 pagesfilling_prices["pagesnum810"]=2040;
 pagesfilling_prices["letterhead"]=200;
 pagesfilling_prices["flyer"]=200;
 pagesfilling_prices["folder"]=200;
 pagesfilling_prices["infographic"]=200;
 pagesfilling_prices["brochure"]=400;
 pagesfilling_prices["booklet"]=400;
 pagesfilling_prices["banner"]=400;
 pagesfilling_prices["packaging"]=400;
pagesfilling_prices["vectordesign"]=400;
pagesfilling_prices["coverdesign"]=400;
pagesfilling_prices["clothingdesign"]=400;
pagesfilling_prices["officesupplies"]=400;

 //5. Do you need your design printed?
 var website_prices3 = new Array();
 website_prices3["Pages24"]=0;
 website_prices3["Pages46"]=3080;
 website_prices3["Pages68"]=509;
 website_prices3["Pages812"]=300;
 website_prices3["Pages1224"]=1200;



 




	 
	 
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




// getwebsiteSizePrice1() finds the price based on the size of the website.
// Here, we need to take user's the selection from radio button selection
function getwebsiteSizePrice1()
{  
    var websiteSizePrice1=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the website the user Chooses name=selectedwebsite1":
    var selectedwebsite1 = theForm.elements["selectedwebsite1"];
    //Here since there are 4 radio buttons selectedwebsite1.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedwebsite1.length; i++)
    {
        //if the radio button is checked
        if(selectedwebsite1[i].checked)
        {
            //we set websiteSizePrice1 to the value of the selected radio button
            //i.e. if the user choose the 8" website we set it to 25
            //by using the website_prices1 array
            //We get the selected Items value
            //For example website_prices1["Round8".value]"
            websiteSizePrice1 = website_prices1[selectedwebsite1[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the websiteSizePrice1
    return websiteSizePrice1;
}



// getwebsiteSizePrice2() finds the price based on the size of the website.
// Here, we need to take user's the selection from radio button selection
function getwebsiteSizePrice2()
{  
    var websiteSizePrice2=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the website the user Chooses name=selectedwebsite2":
    var selectedwebsite2 = theForm.elements["selectedwebsite2"];
    //Here since there are 4 radio buttons selectedwebsite2.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedwebsite2.length; i++)
    {
        //if the radio button is checked
        if(selectedwebsite2[i].checked)
        {
            //we set websiteSizePrice2 to the value of the selected radio button
            //i.e. if the user choose the 8" website we set it to 25
            //by using the website_prices2 array
            //We get the selected Items value
            //For example website_prices2["Round8".value]"
            websiteSizePrice2 = website_prices2[selectedwebsite2[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the websiteSizePrice2
    return websiteSizePrice2;
}


// getwebsiteSizePrice3() finds the price based on the size of the website.
// Here, we need to take user's the selection from radio button selection
function getwebsiteSizePrice3()
{  
    var websiteSizePrice3=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the website the user Chooses name=selectedwebsite3":
    var selectedwebsite3 = theForm.elements["selectedwebsite3"];
    //Here since there are 4 radio buttons selectedwebsite3.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedwebsite3.length; i++)
    {
        //if the radio button is checked
        if(selectedwebsite3[i].checked)
        {
            //we set websiteSizePrice3 to the value of the selected radio button
            //i.e. if the user choose the 8" website we set it to 25
            //by using the website_prices3 array
            //We get the selected Items value
            //For example website_prices3["Round8".value]"
            websiteSizePrice3 = website_prices3[selectedwebsite3[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the websiteSizePrice3
    return websiteSizePrice3;
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


//This function finds the pagesfilling price based on the 
//drop down selection
function getPagesPrice()
{
    var websitePagesPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the select id="pagesfilling"
     var selectedPagesFilling = theForm.elements["pagesfilling"];
     
    //set websitepagesfilling Price equal to value user chose
    //For example pagesfilling_prices["Lemon".value] would be equal to 5
    websitePagesPrice = pagesfilling_prices[selectedPagesFilling.value];

    //finally we return websitePagesPrice
    return websitePagesPrice;
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
function customMembersPrice()
{
    var customMembersPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includecustomMembersPrice = theForm.elements["includeMembersPrice"];

    //If they checked the box set candlePrice to 5
    if(includecustomMembersPrice.checked==true)
    {
        customMembersPrice=5;
    }
    //finally we return the candlePrice
    return customMembersPrice;
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
		getwebsiteSizePrice2() + 
			getwebsiteSizePrice3() + 
    getFillingPrice() + 
			 getPagesPrice() +
		  customCMSPrice() + 
		  customMembersPrice() + 
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
