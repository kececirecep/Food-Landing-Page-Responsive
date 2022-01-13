const menuBtn = document.querySelector('.mobile-menu');
const mobileMenu = document.querySelector('.m-menu');
const icon = document.querySelector('.mobile-menu i');

menuBtn.addEventListener("click",function(){
  mobileMenu.classList.toggle("activeMenu");
  if(icon.classList.contains("fa-bars")){
    icon.classList = "fa fa-times fa-2x";
  }else{
    icon.classList = "fa fa-bars fa-2x";
  }
})