
const btn=document.querySelector('[data-menu-button]');
const nav=document.querySelector('[data-mobile-nav]');
if(btn&&nav){
  btn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
