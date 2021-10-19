
const anime1= document.querySelector('.animate_div1');
const car_anime1= document.querySelector('.animate_div1 .position-car img.car1');
const car_appear= document.querySelector('.animate_div1 #imgappear');
const anime2= document.querySelector('.animate_div2');
const middle= document.querySelectorAll('.animate_div2 .middle1');
let runcar=0;

window.onscroll=function(event)
{
	if(this.innerWidth>400)
	{
	  	if(this.pageYOffset>1200)
		{
		   if(runcar==0)
		   {
		   	   anime1.classList.add('active');
			   anime2.classList.add('active');
			   car_anime1.classList.add('move1');
			   setTimeout(()=>
			   {
			     middle.forEach((val)=>
			     {
                    val.style.marginTop="83px";
			     })
			   },7000);
			   setTimeout(()=>
			   {
			     car_appear.classList.add('car2');
			   },7000);
			   runcar++;
		   } 
		}
	}
	else
	{
		if(this.pageYOffset>1800)
		{
		   if(runcar==0)
		   {
		   	   anime1.classList.add('active');
			   anime2.classList.add('active');
			   car_anime1.classList.add('move1');

			   setTimeout(()=>
			   {
			     car_appear.classList.add('car2');
			   },7000);
			   runcar++;
		   } 
		}
	}
}

