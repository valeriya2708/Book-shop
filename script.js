let menu = document.querySelector(".header_burger-menu");
check = false;

function out(){
    check = true;
        anime({
            targets: ".header__navigation",
            loop: false,
            duration: 1000,
            top: ["-200px", "0px"],
            easing: "easeInSine",
        });
        anime({
            targets: ".stick",
            loop: false,
            duration: 1000,
            rotate: 180,
            easing: "easeInSine",
        })
};
function inner(){
    check = false;
        anime({
            targets: ".header__navigation",
            loop: false,
            duration: 1000,
            top: ["0px", "-200px"],
            easing: "easeInSine",
        });
        anime({
            targets: ".stick",
            loop: false,
            duration: 1000,
            rotate: -180,
            easing: "easeInSine",
        })
}

menu.addEventListener("click", function(){
    if (check == false){
        out()
    }
    else{
        inner()
    };
});


let arrow = document.querySelector(".bestcellers__slide");
let parent = document.querySelector(".main__bestcellers");
arrow.addEventListener("click", function(){
    arrow.classList.add("active");
    parent.innerHTML += '<div class="bestcellers__books"><div class="test"><img class="books__book" src="images/book1.png" alt="book1"><div class="books__price"><h1 class="price__name">Atomic Ones</h1><p class="price__cost">$ 13.84 USD</p><p class="price__text">Книга содержит как теоретическое содержание, так и решенные вопросы.</p><h3 class="price__type">Печатная версия</h3><button class="price__buy">Заказать</button></div></div><div class="test2"><img class="books__book" src="images/book2.png" alt="book2"><div class="books__price"><h1 class="price__name">The Dark Light</h1><p class="price__cost">$ 13.84 USD</p><p class="price__text">Книга содержит как теоретическое содержание, так и решенные вопросы.</p><h3 class="price__type">Печатная версия</h3><button class="price__buy">Заказать</button></div></div></div>';
});
