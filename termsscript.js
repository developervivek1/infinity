const content= document.querySelector('.terms-content');

content.addEventListener('click', (event)=>
{
    event.stopPropagation();
    if(event.target.closest('.div-privacy'))
    {
    	let divprivacy = event.target.closest('.div-privacy');
        let img = event.target.parentNode.querySelector('img');
        let showdiv = divprivacy.querySelector('.content');
    	showElement(showdiv,img);
        // console.log(divprivacy);
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

