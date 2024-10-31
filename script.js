let lastscrolly = 0;
const navbar = document.querySelector("nav");



var video = [
    {
        vd:"https://clear.bank/uploads/assets/CB_Product_Accounts.webm",
        para:"Choose the fully regulated accounts that work best for your business and your customers."
    },
    {
        vd:"https://clear.bank/uploads/assets/CB_Product_Clearing.webm",
        para:"Start processing payments faster and more securely by connecting to the payment schemes via our API."
    },
    {
        vd:"https://clear.bank/uploads/assets/CB_Product_Embedded.webm",
        para:"Offer your customers FSCS protected accounts by leveraging our banking licence. We take care of the banking products so you can focus on creating the business that your customers dream of."
    },
]








gsap.from(".section-t-move h1",{
    opacity:0,
    x:50,
    delay:.5,
    duration:.5,
    stagger:.1
    
});

gsap.to(".section-t-move button",{
    opacity:1,
    
    
    duration:.2,
    delay:.5
    
    
});



gsap.to(".child-scroll",{
    x:"-100%",
    duration:10,
    repeat:-1,
    ease:"none"
    

});

gsap.from(".move-ani-para1",{
    opacity:0,
    x:50,
    
    
    scrollTrigger:{
        trigger:".move-ani-para1",
        scroller:"body",
        
        start:"top 80%"
    }
    
})

gsap.to("#pin-products",{
    scrollTrigger:{
        trigger:"#pin-products",
        scroller:"body",
        pin:true,
        start:"top 0",
        end:"bottom 55%",
        
        

    }
});





var pProducts=document.querySelectorAll(".p-products");
var changenum = document.querySelector(".pin-products-change-num");
var changevideo = document.querySelector("#side-video");
var changepara = document.querySelector("#side-para");

document.querySelector(".def").style.transform = "translateX(0%)"

pProducts.forEach((elem,index)=>{
    
    
    elem.addEventListener("mouseenter",()=>{

        pProducts.forEach((item)=>{
            item.childNodes[1].style.color="#8c9097";
            item.childNodes[3].childNodes[1].style.transform = "translateX(-100%)";
        })
        
        elem.childNodes[3].childNodes[1].style.transform = "translateX(0%)";
    
        elem.childNodes[1].style.color = "black"
        
        changenum.innerHTML = `0${index + 1}`;
        changevideo.setAttribute("src",video[index].vd);
        changepara.innerHTML = video[index].para;
        
    })

})


gsap.from(".move-ani-para2",{
    opacity:0,
    x:50,
    
    
    scrollTrigger:{
        trigger:".move-ani-para2",
        scroller:"body",
        
        start:"top 80%"
    }
    
})
gsap.from(".move-divs1 div",{
    opacity:0,
    x:-50,
    stagger:.3,
    
    scrollTrigger:{
        trigger:".move-divs1",
        scroller:"body",
        
        start:"top 60%",
       
    }
    
})

gsap.from(".move-ani-para3",{
    opacity:0,
    x:50,
    
    
    scrollTrigger:{
        trigger:".move-ani-para3",
        scroller:"body",
        
        start:"top 80%"
    }
    
})


var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation:{
        nextEl:"#swiper-right",
        prevEl:"#swiper-left",
        
    },

  });

var swiperNum = document.querySelector("#swiper-num");
var Leftaro = document.querySelector("#swiper-left-aro");
var rightaro = document.querySelector("#swiper-right-aro");
var moveleft = document.querySelector("#move-left")
var moveright= document.querySelector("#move-right")

swiper.on('slideChange', function () {
    swiperNum.innerHTML = `0${swiper.activeIndex+1}`
    if(swiper.activeIndex != 0){
        Leftaro.style.display = "none";
        moveleft.style.display = "inline-flex";
    }
    else{
        Leftaro.style.display = "inline-flex";
        moveleft.style.display = "none";
    }
    if(swiper.activeIndex != 3 ){
        rightaro.style.display = "none";
        moveright.style.display = "inline-flex";
    }
    else{
        rightaro.style.display = "inline-flex";
        moveright.style.display = "none";
    }
});




gsap.from(".move-ani-para4",{
    opacity:0,
    x:50,
    
    
    scrollTrigger:{
        trigger:".move-ani-para4",
        scroller:"body",
       
        start:"top 80%"
    }
    
})


var isSectionOpen =false;

    window.addEventListener("scroll",()=>{
    var curscrolly = window.scrollY;

    if(curscrolly > lastscrolly && !isSectionOpen ){
      navbar.style.transform="translateY(-100%)"
    }else{
      navbar.style.transform="translateY(0)"
      
    }
    lastscrolly = curscrolly;
    
})






function lenis(){
    // Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on('scroll', (e) => {

});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

return lenis;
}

var lenisinstance = lenis();




function links(){
    var productBtn  = document.querySelector("#product");
    var productdiv = document.querySelector("#product-page");
    
    var usecaseBtn = document.querySelector("#usecase");
    var usecasediv = document.querySelector("#usecase-page");
    
    var aboutBtn = document.querySelector("#about");
    var aboutdiv = document.querySelector("#about-page");
    
    var nav = document.querySelector("nav");
    var body = document.querySelector("body");
    var htm = document.querySelector("html");
    
    var flag = null;
    
    productBtn.addEventListener("click",()=>{
        
        if(flag=="product"){
            closeAllSections() 
            
           flag=null;
    
        }else{
            closeAllSections() 
            isSectionOpen=true;
            nav.style.backdropFilter = "blur(0px)"
            nav.style.backgroundColor = "transparent"
            
            body.style.overflowY = "hidden";
            lenisinstance.stop()
            productdiv.style.display="flex"; 
            
            productBtn.style.borderBottom="1px solid black"
            flag="product";
            
        }
        
    })
    
    usecaseBtn.addEventListener("click",()=>{
        if(flag=="usecase"){
             
            closeAllSections() 
           flag=null;
    
        }else{
            closeAllSections() 
            isSectionOpen=true;
            nav.style.backdropFilter = "blur(0px)"
            nav.style.backgroundColor = "transparent"
            body.style.overflowY = "hidden";
            lenisinstance.stop()
            usecasediv.style.display="flex"; 
            usecaseBtn.style.borderBottom="1px solid black"
            flag="usecase";
        }
        
    })
    aboutBtn.addEventListener("click",()=>{
        if(flag=="about"){
    
            closeAllSections() 
           flag=null;
    
        }else{
            closeAllSections() 
            isSectionOpen=true;
            
            nav.style.backdropFilter = "blur(0px)"
            nav.style.backgroundColor = "transparent"
            body.style.overflowY = "hidden";
            lenisinstance.stop()
            aboutdiv.style.display="flex"; 
            aboutBtn.style.borderBottom="1px solid black"
           flag="about";
        }
        
        
    })
    
    
    function closeAllSections() {
        nav.style.backdropFilter = "blur(15px)"
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.308)"
        body.style.overflowY = "auto";
        lenisinstance.start()
        isSectionOpen=false;
        // Close all sections and remove borders
        productdiv.style.display = "none";
        productBtn.style.borderBottom = "none";
    
        usecasediv.style.display = "none";
        usecaseBtn.style.borderBottom = "none";
    
        aboutdiv.style.display = "none";
        aboutBtn.style.borderBottom = "none";
    }
}
links()

