
var h1=document.querySelector("h1");
var numSquare = 6;
var colors = generateRandomColors(6);
var square = document.querySelectorAll(".square");
var resetbutton = document.querySelector("#reset");
var pickedColor = pickColor();  
// pickedColor = pickColor();
// pickedColor =  colors[3];

var colorDisplay=document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;
console.log(pickedColor);

var easyButton = document.querySelector("#easybtn");
var hardButton = document.querySelector("#hardbtn");

easyButton.addEventListener("click",function(){
	// alert("easy clicked");
	messageDisplay.textContent="";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	

	 colorDisplay.textContent = pickedColor;
	// console.log("SQUARE.LENGTH  = " + square.length);
	numSquare=3;
	for(var i = 0;i<square.length;i++)
	{
		if(i===0)
		{
					colors = generateRandomColors(numSquare);
		pickedColor = pickColor();	
		}

		if(colors[i])
		{
			square[i].style.background = colors[i];
			console.log("inloop sq length  = " + i);
		}else{
			square[i].style.display="none";
		}
	}
});

hardButton.addEventListener("click",function(){
	// alert("hard clicked");
	messageDisplay.textContent="";
	numSquare=6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;
	console.log("SQUARE.LENGTH  = " + square.length);

	for(var i = 0;i<square.length;i++)
	{
		
			square[i].style.background = colors[i];
			console.log("inloop sq length  = " + i);
		
			square[i].style.display="block";
		
	}
});


resetbutton.addEventListener("click",function(){
	messageDisplay.textContent="";
	if(resetbutton.textContent == "Play Again")
	{
		resetbutton.textContent = "New Color";
	}
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	h1.style.background = "steelblue";
	for(var i=0; i<square.length; i++)
	{	
		square[i].style.background = colors[i];
	}
})

for(var i=0; i<square.length; i++)
	{	
		square[i].style.background = colors[i];

		square[i].addEventListener("click", function(){
			var clickedColor=this.style.background;

			if(pickedColor===clickedColor)
			{
				//alert("Correct!");
				
				messageDisplay.textContent="Correct";
				correct(pickedColor);
				h1.style.background = clickedColor;
				resetbutton.textContent = "Play Again";
			}else{
				//alert("Wrong!");
				 
				this.style.background = "#232323";
				messageDisplay.textContent="Try Again";
			}
		});
	}

	function correct(colorStr)
	{
		for(var i=0;i<square.length;i++){
			square[i].style.background = colorStr;
		}
	}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		console.log(random);
		return colors[random];
	}

	function generateRandomColors(numberColors)
	{
		
		//make array
		//add num random colors to array
		//return array yipee
		var colors = [];

		for(var i=0;i<numberColors;i++)
			{
				colors.push(randomColor());
			}

		return colors;

	}

	function randomColor()
	{
		//pick a red, from 0-255
		var r = Math.floor(Math.random() * 256);
		//pick green from 0-255
		var g = Math.floor(Math.random() * 256);
		//pick blue from 0-255
		var b = Math.floor(Math.random() * 256);
			"rgb(r,g,b)"
		return ("rgb(" + r +", " + g + ", " + b + ")");
	}

