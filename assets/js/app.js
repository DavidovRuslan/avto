
function slider(){
const header_image = document.querySelectorAll('.header-bg img')
    let i = 0;
    setInterval(function(){
        if ( i < header_image.length-1){
            header_image[i].classList.remove("bg-active")
            header_image[i+1].classList.add("bg-active")
        i++
        }else {
            header_image[i].classList.remove("bg-active")
            header_image[0].classList.add("bg-active")
            i = 0
        }
        
    }, 3000)
}
slider()
let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };


function itemInfo() {
    const itemBtn = document.querySelectorAll('.item-btn')
    const itemCard = document.querySelectorAll('.product-item')

      if(isMobile.any()){

        itemBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                const hideInfo = btn.previousElementSibling
                hideInfo.classList.toggle('hide-info-active')
            })
        });
      } else{
            itemCard.forEach(item => {
               const itemHover = item.children[0]
                item.addEventListener('mouseover',() =>{
                    itemHover.classList.add('hide-info-active')
                })
                item.addEventListener('mouseout', () =>{
                    itemHover.classList.remove('hide-info-active')
                })
            });
      }


    
}
itemInfo()
function burger(){
    let burgerBtn = document.querySelector('.mobile__menu-btn')
    let burgerNav = document.querySelector('.mobile__menu')
    let bodyWrap = document.querySelector('body')
    burgerBtn.addEventListener('click',function(){
      burgerBtn.classList.toggle('mobile___menu-btn-active')
      burgerNav.classList.toggle('mobile__menu-active')
  
    })
    window.onscroll = function(){
      return false;
    }
  }
  burger()

                        // swiper
var swiper = new Swiper(".prod-slider", {
    spaceBetween: 50,
    pagination: {
        el: ".slider__nav",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
      },
    loop: true

    });