var clueShowed = false;
var uiShowed = false;
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
    if(clueShowed || uiShowed){
        show('#close');
        document.querySelector('#close').onclick = function (){
            if(clueShowed){
                hide('.clues');
                clueShowed = false;
            }
            if(uiShowed){
                hide('.ui');
                uiShowed = false;
            }
            hide('#close');
        }
    }
}

function onClickClue(clickElement, showElement){
    document.querySelector(clickElement).onclick = function (){
        if(!clueShowed && !uiShowed){
            show(showElement);
            clueShowed = true;
            closeBtn();
        }
    }
}

function checkAnswer(suspect){
    if(suspect == "#alexandra"){
        win();
    }else{
        lose();
    }
}

function confirm(suspect){
    hide('#suspects-zoom');
    show('#confirm');
    uiShowed = true;
    document.querySelector('#yes').onclick = function(){
        hide('#confirm');
        checkAnswer(suspect);
    }
    document.querySelector('#no').onclick = function(){
        hide('#confirm');
        show('#suspects-zoom');
    }
}

function selectSuspect(suspect){
    document.querySelector(suspect).onclick = function (){
        confirm(suspect);
    }
}

function onClickSuspects(){
    document.querySelector("#suspects").onclick = function (){ 
        if(!clueShowed && !uiShowed){
            show("#suspects-zoom");
            clueShowed = true;
            closeBtn();

            selectSuspect("#anne");
            selectSuspect("#charlotte");
            selectSuspect('#alexandra');
            selectSuspect("#edward");
            selectSuspect("#eleanor");
            selectSuspect("#caroline");
        }
    }
}

function win(){
    show('#win');
    closeBtn();
}

function lose(){
    show('#lose');
    closeBtn();
}


window.onload = function() {
    show('#briefing-zoom');
    clueShowed = true;
    closeBtn();

    onClickClue('#mud', '#mud-clue');
    onClickClue('#wine1', '#wine1-clue');
    onClickClue('#wine2', '#wine2-clue');
    onClickClue('#hair', '#hair-clue');
    onClickClue('#drawer-l-t', '#hair-clue');
    onClickClue('#drawer-l-b', '#letters-clue');
    onClickClue('#drawer-r', '#diary-clue');
    onClickClue('#horsehair', '#horsehair-clue');
    onClickClue('#portrait', '#portrait-clue');
    onClickClue('#vase', '#vase-clue');
    onClickClue('#books', '#books-clue');
    onClickClue('#library', '#library-clue');
    onClickClue('#briefing', '#briefing-zoom');

    onClickSuspects();
};