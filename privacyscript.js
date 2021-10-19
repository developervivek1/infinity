const privacy= document.querySelector('.privacy-content');

privacy.addEventListener('click', (event)=>
{
    event.stopPropagation();
    if(event.target.closest('.div-privacy'))
    {
    	let divprivacy = event.target.closest('.div-privacy');
        let img = event.target.parentNode.querySelector('img');
    	let showdiv = divprivacy.querySelector('.show-content');
    	showElement(showdiv,img);
    }
})

function showElement(showdiv,img)
{
    showdiv.style.height=showdiv.scrollHeight+'px';
    if(!showdiv.classList.contains('open'))
    {
       showdiv.classList.add('open');
       img.src='img/arrowup.svg';
        showdiv.addEventListener('transitionend',()=>
       {
         showdiv.style.removeProperty('height');
       })
    }
    else
    {
        img.src='img/arrowdown.svg';
        showdiv.classList.remove('open');
        showdiv.style.removeProperty('height');   
    }
}

