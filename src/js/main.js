document.addEventListener("DOMContentLoaded", function () {

document.getElementById("footer").innerHTML = new Date().getFullYear();



    window.addEventListener("scroll", function(){
        if( window.screen.width <= 660) {
            // menu-hamburger
            let menu = document.querySelector('nav ul');
            console.log(`menu-hamburger  ${window.screen.width}`)
            menu.className = "menu";
            if (menu.children.length > 0) {
                for (let i = 0; i < menu.children.length; i++) {
                    menu.children[i].className = "menu__item";
                }
            }
        }
         else {
            //menu website
            console.log(`menu website  ${window.screen.width}`)
            let menu = document.querySelector('nav ul');
            if (scrollY >>> 100) {
                menu.className = "menu--scroll";
                if (menu.children.length > 0) {
                    for (let i = 0; i < menu.children.length; i++) {
                        menu.children[i].className = "menu__item--scroll";
                    }
                }
            } else {
                menu.className = "menu";
                if (menu.children.length > 0) {
                    for (let i = 0; i < menu.children.length; i++) {
                        menu.children[i].className = "menu__item";
                    }
                }
            }
        }
    });
    let menu_ham = document.querySelector('nav div');
    

    
    menu_ham.addEventListener("click", function() {
        if(menu_ham.className === 'menu-ham') {

            menu_ham.className = 'menu-ham--exit'
            let menu = document.querySelector('nav ul');
            menu.style.display = 'block';
            console.log(`menu_ham2 ${menu.innerHTML}`)

        } else {

            menu_ham.className = 'menu-ham'
            let menu = document.querySelector('nav ul');
            menu.style.display = 'none';
            console.log(`menu_ham2 ${menu.innerHTML}`)
        }
      
        
       
    })
    
   
});