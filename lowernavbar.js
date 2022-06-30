const list = document.querySelectorAll('.list');
function activeLink (){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach ((item) =>
item.addEventListener ('click',activeLink));

    let toggle = document.querySelector('.toggle');
    let share = document.querySelector('.share');
   /* am adaugat clasa buton ca avitator pentru toggle 
   pentru ca avea o dimensiunea mai mare
   deci puteam apasa oriunde in social block pentru a deschide social icons*/
    let buton = document.querySelector('.buton');
    share.onclick = function (){
       share.classList.toggle('active')
    };
    buton.onclick = function (){
       toggle.classList.toggle('active')
    }
