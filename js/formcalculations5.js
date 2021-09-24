 //2. Do you have a domain?
 var website_prices = new Array();
 website_prices["YesHaveDomain"]=5;
 website_prices["NoHaveDomain"]=5;


 //3. Will your design required stock images?
 var website_prices2 = new Array();
 website_prices2["NoHosting"]=0;
 website_prices2["YesHosting"]=780;


 //5. Do you need your design printed?
 var website_prices3 = new Array();
 website_prices3["YesDesign"]=5;
 website_prices3["NoDesign"]=3080;



 //1. What do you need?
 var filling_prices= new Array();
 filling_prices["none"]=5;
 filling_prices["stockimages1"]=253;
 filling_prices["stockimages2"]=203;
 filling_prices["stockimages3"]=230;
 filling_prices["stockimages4"]=240;





 //4. Will your design need multiple pages, if so, how many?
 var pagesfilling_prices= new Array();
 pagesfilling_prices["None"]=5;
 pagesfilling_prices["maintencebasic"]=2000;
 pagesfilling_prices["maintencestandard"]=2400;
 pagesfilling_prices["maintencepremium"]=2004;





 




	 
	 
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
function customCalendarPrice()
{
    var customCalendarPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includecustomCalendarPrice = theForm.elements["includeCalendarPrice"];

    //If they checked the box set candlePrice to 5
    if(includecustomCalendarPrice.checked==true)
    {
        customCalendarPrice=5;
    }
    //finally we return the candlePrice
    return customCalendarPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function customSlideshowPrice()
{
    var customSlideshowPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includecustomSlideshowPrice = theForm.elements["includeSlideshowPrice"];

    //If they checked the box set candlePrice to 5
    if(includecustomSlideshowPrice.checked==true)
    {
        customSlideshowPrice=5;
    }
    //finally we return the candlePrice
    return customSlideshowPrice;
}













//candlesPrice() finds the candles price based on a check box selection
function ECommercePrice()
{
    var ECommercePrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeECommercePrice = theForm.elements["includeECommercePrice"];

    //If they checked the box set candlePrice to 5
    if(includeECommercePrice.checked==true)
    {
        ECommercePrice=5;
    }
    //finally we return the candlePrice
    return ECommercePrice;
}

//candlesPrice() finds the candles price based on a check box selection
function LiveChatPrice()
{
    var LiveChatPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeLiveChatPrice = theForm.elements["includeLiveChatPrice"];

    //If they checked the box set candlePrice to 5
    if(includeLiveChatPrice.checked==true)
    {
        LiveChatPrice=5;
    }
    //finally we return the candlePrice
    return LiveChatPrice;
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
function MembersLoginPrice()
{
    var MembersLoginPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeMembersLoginPrice = theForm.elements["includeMembersLoginPrice"];

    //If they checked the box set candlePrice to 5
    if(includeMembersLoginPrice.checked==true)
    {
        MembersLoginPrice=5;
    }
    //finally we return the candlePrice
    return MembersLoginPrice;
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
function SocialMediaPrice()
{
    var SocialMediaPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includeSocialMediaPrice = theForm.elements["includeSocialMediaPrice"];

    //If they checked the box set candlePrice to 5
    if(includeSocialMediaPrice.checked==true)
    {
        SocialMediaPrice=5;
    }
    //finally we return the candlePrice
    return SocialMediaPrice;
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
function googlemapsPrice()
{
    var googlemapsPrice=0;
    //Get a reference to the form id="websiteform"
    var theForm = document.forms["websiteform"];
    //Get a reference to the checkbox id="includecandles"
    var includegooglemapsPrice = theForm.elements["includegooglemapsPrice"];

    //If they checked the box set candlePrice to 5
    if(includegooglemapsPrice.checked==true)
    {
        googlemapsPrice=5;
    }
    //finally we return the candlePrice
    return googlemapsPrice;
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
		 getPagesPrice() ;
   
    
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
