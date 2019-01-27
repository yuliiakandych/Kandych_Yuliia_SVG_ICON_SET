(() => {

	var bell = document.querySelector("#bell");
	var clock = document.querySelector("#clock");
	var compass = document.querySelector("#compass");
	var fastforwardbutton = document.querySelector("#fastforwardbutton");
	var mail = document.querySelector("#mail");
	var photocamera = document.querySelector("#photocamera");
	var placeholder = document.querySelector("#placeholder");
	var playbutton = document.querySelector("#playbutton");
    var search = document.querySelector("#search");
    var settings = document.querySelector("#settings");
    

   

     function Bell()
     {
     	console.log(this.id);
     }


     function Clock()
     {
     	console.log(this.id);
     }


     function Compass()
     {
     	console.log(this.id);
     }


   	 function Fastforwardbutton()
     {
     	console.log(this.id);
     }
  
	function Mail()
     {
     	console.log(this.id);
     }

     function Photocamera()
     {
     	console.log(this.id);
     }

     function Placeholder()
     {
     	console.log(this.id);
     }

     function Playbutton()
     {
     	console.log(this.id);
     }


	function Search() 
    {
    	 console.log(this.id);
    }
    

     function Settings()
     {
     	console.log(this.id);
     }


	bell.addEventListener("click", Bell);

	clock.addEventListener("click", Clock);

	compass.addEventListener("click", Compass);

	fastforwardbutton.addEventListener("click", Fastforwardbutton);

	mail.addEventListener("click", Mail);

	photocamera.addEventListener("click", Photocamera);

	placeholder.addEventListener("click", Placeholder);

	playbutton.addEventListener("click", Playbutton);
		
    search.addEventListener("click", Search);

    settings.addEventListener("click", Settings);
     
    
  
})();