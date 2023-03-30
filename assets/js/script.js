var clueShowed = false;
var isFullscreen = false;

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

function openFullscreen(){
    let page = document.documentElement;
    if (page.requestFullscreen) {
        page.requestFullscreen();
    } else if (page.webkitRequestFullscreen) { /* Safari */
        page.webkitRequestFullscreen();
    } else if (page.msRequestFullscreen) { /* IE11 */
        page.msRequestFullscreen();
    }
    isFullscreen = true;
}

function closeFullscreen(){
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    isFullscreen = false;
}

function fullscreen(){
    if(!isFullscreen){
        openFullscreen();
    }else{
        closeFullscreen();
    }

}

function closeBtn(){
    if(clueShowed){
        show('#close');
        document.querySelector('#close').onclick = function (){
            hide('.clues');
            hide('#close');
            clueShowed = false;
        }
    }
}

function onClickElement(clickElement, showElement){
    document.querySelector(clickElement).onclick = function (){
        if(!clueShowed){
            show(showElement);
            clueShowed = true;
            closeBtn();
        }
    }
}

window.onload = function() {

    //onClickElement('#drawer-d', '#diary');
    onClickElement('#mud', '#mud-clue');
    onClickElement('#wine1', '#wine1-clue');
    onClickElement('#wine2', '#wine2-clue');
    onClickElement('#hair', '#hair-clue');
    onClickElement('#drawer-l-t', '#hair-clue');
    onClickElement('#drawer-l-b', '#hair-clue');
    onClickElement('#drawer-r', '#diary-clue');
    onClickElement('#horsehair', '#hair-clue');
    onClickElement('#portrait', '#portrait-clue');
    onClickElement('#vase', '#vase-clue');
    onClickElement('#books', '#books-clue');
    onClickElement('#library', '#library-clue');
    onClickElement('#horsehair', '#horsehair-clue');

    //console.log(clueShowed);
  };
