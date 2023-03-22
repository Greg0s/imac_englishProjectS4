var clueShowed = false;

function show(selector){
    document.querySelectorAll(selector).forEach((element) => {
        element.style.visibility = 'visible';
    })
}

function hide(selector){
    document.querySelectorAll(selector).forEach((element) => {
        element.style.visibility = 'hidden';
    })
}

function closeBtn(){
    if(clueShowed){
        show('#close');
        document.querySelector('#close').onclick = function (){
            hide('.clues');
            hide('#close');
        }
    }
}

function onClickElement(clickElement, showElement){
    document.querySelector(clickElement).onclick = function (){
        show(showElement);
        clueShowed = true;
        closeBtn();
    }
}

window.onload = function() {
    onClickElement('#droite', '#testelt');
    console.log(clueShowed);
  };
