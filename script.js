const starcontainer=document.querySelector('#star');
const allstars=document.querySelectorAll('#star span');
const rating=document.querySelector('#rate');

starcontainer.addEventListener('click',function(e){
    //console.log(e.target);
    if(e.target.classList.contains('star-container')){
        return;
    }
    unfillStars();
    let value=e.target.dataset.pos;
    //console.log(value);
    fillStars(value);
    rating.innerText=value;
});

starcontainer.addEventListener('mouseover',function(e){
    if(e.target.classList.contains('star-container')){
        return;
    }
    unfillStars();
    let value=e.target.dataset.pos;
    //console.log(value);
    fillStars(value);
});

starcontainer.addEventListener('mouseout',function(e){
    let rate=rating.innerText;
    console.log(rate);
    unfillStars();
    fillStars(rate);
});

function unfillStars(){
    for(let i=0;i<allstars.length;i++){
        if(allstars[i].classList.contains('gold')){
            allstars[i].classList.remove('gold');
        }
    }
}

function fillStars(size){
    for(let i=0;i<size;i++){
        allstars[i].classList.add('gold');
    }
}