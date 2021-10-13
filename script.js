const slide= document.querySelector('.main .slide');
const button= document.querySelector('.main .lend-div button');
const h2= document.querySelector('.main .lend-div .col h2');
const p= document.querySelector('.main .lend-div .col p');
const slider= document.querySelectorAll('.main .slide .slider');
const leftcon_btn= document.querySelectorAll('.main .left-content button');
const sliderlen = slider.length;
let current=0,y;

const slideImage=(event)=>
{
	y = this.innerWidth;
	setInterval( ()=>
	{
	    if(current>=sliderlen-1)
		{
			gotoSlide(0);
			if(current==sliderlen-1) {
				current==0;
			}
			return;
		}
		current++;
		// slides_cont.style.transform= "translateX(-"+slideWidth+"px)";
		gotoSlide(current,y); 
	},6000)	
}
window.addEventListener('load', slideImage);

function gotoSlide(slidestart,y)
{
    slide.style.transform="translateX(-"+slidestart *98+"%)";
    if(y<380)
    {
       slide.style.transform="translateX(-"+slidestart *93+"%)";
    }

    current  = slidestart;
    setActiveclass(current);
}

function setActiveclass(current)
{
    let activeslide=document.querySelector('.slide .slider.active');
    activeslide.classList.remove('active');
    slider[current].classList.add('active');
}

        window.onresize=function()
        {
        	if(this.innerWidth>600)
        	{
        	   y=this.innerWidth;
        	}
        	else
        	{
        		y=this.innerWidth;
        	}   	
        }


const lender =
[
  {
  	head:'Lendor',
  	content:'Inclusion of trusted vendors of creditworthy anchors into your portfolio. Be an OI Lender'
  },
  {
  	head:'Vendor',
  	content:'Fuel your business by access to institutional credit. Be an OI Borrower'
  },
  {
  	head:'Anchor',
  	content:'Become vendors’ favourite client. With no recourse to you. Be an OI Anchor'
  },
  {
  	head:'MPower',
  	content:'Mpower yourself. Get your Credit Card now'
  }
];
let con =0;

const firstCon=()=>
{
	changeText(con);
}
firstCon();

button.addEventListener('click',(event)=>
{ 
	h2.classList.remove('active');
    p.classList.remove('active');
	con++;
	if(con==2 || con==3 || con==4)
    {
    	let active_btn = document.querySelector('.main .left-content button.active');
        active_btn.classList.remove('active');
    }
	if(con>=4)
	{
		con=0;
		changeText(con);
	    return;
	}  
    changeText(con); 
	
})

function changeText(con)
{
	setTimeout(()=>
	{
        h2.classList.add('active');
        p.classList.add('active');
	},100);
	switch (con) {
		case 1:
			leftcon_btn[0].classList.add('active');
		break;
		case 2:
		    leftcon_btn[1].classList.add('active');
		break;
		case 3:
		    leftcon_btn[2].classList.add('active');
		break;
	}
   h2.innerText=lender[con].head;
   p.innerText=lender[con].content;
}
