const buttonScrollStyle =  {
    height: "100%",
    width: "15px",
    position: "fixed",
    zIndex: "999",
    opacity: "0.4",
}


document.addEventListener('DOMContentLoaded', function() {
    const div = document.createElement('div');
    const button = document.createElement("button-scroll");
    div.classList.add("button-container");

    //Применение стилей кнопки
    Object.assign(button.style,buttonScrollStyle);

    //Скролл вниз
    button.addEventListener('click', function (e) {
        const height = document.querySelector('body').scrollHeight;
        window.scrollTo(0,height);
    });

    //скролл вверх
    button.addEventListener('contextmenu', function(e){
        e.preventDefault();
        window.scrollTo(0,0);
    });

    div.append(button);
    document.querySelector('body').insertAdjacentElement("afterbegin",div);
});