//text-color
var homeElement = document.getElementById('homeElement');
 homeElement.style.color = "#4a90f9";

 var serviceElement = document.getElementById('serviceElement');
 serviceElement.style.color = "green";

 var element = document.getElementById('Feature');
 element.style.color = "#f7c77e";

 var productElement = document.getElementById('productElement');
 productElement.style.color = "#5ee299";

 var testElement = document.getElementById('testElement');
 testElement.style.color = "#f1475b";

 var element = document.getElementById('faqElement');
 faqElement.style.color = "#4444fe";


//pop-up
 document.getElementById("signButton").addEventListener('click',
 function(){
    document.querySelector(".login-box").style.display = 'flex';
 });

 document.querySelector(".close").addEventListener('click',
 function(){
    document.querySelector(".login-box").style.display = "none";
 
 });


//  sticky Navbar
 var nav= document.getElementById("nav");
 var menu= document.getElementById("menu");

 window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("hi");
    }
    else{
        nav.classList.remove("hi");
    }
});

// dropdown

var dropdownBtn = document.querySelector("#Feature");
var dropdown = document.querySelector(".list-items");
var downarrow = document.querySelector(".down-arrow");
var arrow = document.getElementById("arrow-rotate");
downarrow.addEventListener("click",function(){
    dropdown.classList.toggle('show');
    arrow.classList.toggle("arrow-rotate");
})

