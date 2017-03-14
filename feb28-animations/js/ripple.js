
document.getElementsByClassName('btn')[0].addEventListener('click', function(e){
    var el = document.createElement('span');
    this.appendChild(el);
    el.style.left = (e.layerX - 25)+'px';
    el.style.top = (e.layerY - 25)+'px';

    var run = 0;
    var int = setInterval(function(){
        run++;
        if(run === 1){clearInterval(int);}
        el.classList.add('btn-anim');
        el.parentElement.removeChild(el);
    }, 2000);
});
