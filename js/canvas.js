(function() {

	//VARIABLES//

	var theCanvas = document.querySelector("#myCanvas");
	var context = theCanvas.getContext("2d");
	var canvasContainer = document.querySelector(".introSection");

	function showCanvas() {
		canvasContainer.classList.toggle("canvasAppear");
		(canvasContainer.classList.contains("canvasAppear")) ? 
		showCanvasButton.firstChild.nodeValue = "Have Fun!" :
		showCanvasButton.firstChild.nodeValue = "Thanks for Painting!";
	}

	var brushButton = document.querySelector(".brush");
	var eraserButton = document.querySelector(".eraser");

 	var sizeSelector = document.querySelectorAll(".sizes");
	var oldX;
	var oldY;
	var strokeSize = 5;

	var colorPicker = document.querySelector("#color");

	var brushDown;
	var stage = new createjs.Stage("myCanvas");
	stage.width  = window.innerWidth;
	stage.height  = window.innerHeight;
	var stageWidth = stage.width;
	var stageHeight = stage.height;

	var brushMark = new createjs.Graphics();
	brushMark.setStrokeStyle(2);

	var colorSelected = document.querySelectorAll(".colors");
	var strokeColour = "#aa1111";

	var eraser = document.querySelector(".eraser");
	eraser.addEventListener("click", function() {
		strokeSize = 20; strokeColour = "#FFF";
	},false);

	var paper = new createjs.Shape(brushMark);
	paper.width = stageWidth;
	paper.height = stageHeight;
	stage.addChild(paper);

	var brush = new createjs.Bitmap("images/paint/userBrush.svg");
	var eraserPic = new createjs.Bitmap('images/paint/eraser.svg');
	stage.addChild(brush);

	//VARIABLES//

	//FUNCTIONS//

	function highlightBrush() {
		if(brushButton != null){
			brushButton.style.backgroundColor = "#aa1111";
			brushButton.style.backgroundImage = "url(./images/paint/paintHover.svg)";
			brushButton.style.backgroundRepeat = "no-repeat";
			brushButton.style.backgroundPosition = "center";
			eraserButton.style.backgroundColor = "#280e0e";
			eraserButton.style.backgroundImage = "url(./images/paint/eraser.svg)";
			eraserButton.style.backgroundRepeat = "no-repeat";
			eraserButton.style.backgroundPosition = "center";
			brush.strokeSize = 1; strokeColour = "#aa1111";
		}
	}

	function highlightEraser() {
		if(eraserButton != null) {
			eraserButton.style.background = "#aa1111";
			eraserButton.style.backgroundImage = "url(./images/paint/eraserHover.svg)";
			eraserButton.style.backgroundRepeat = "no-repeat";
			eraserButton.style.backgroundPosition = "center";
			brushButton.style.background = "#280e0e";
			brushButton.style.backgroundImage = "url(./images/paint/paint.svg)";
			brushButton.style.backgroundRepeat = "no-repeat";
			brushButton.style.backgroundPosition = "center";
		}
	}

	brushButton.addEventListener("click", highlightBrush, false);
	eraserButton.addEventListener("click", highlightEraser, false);

	function draw() {
		brush.x += (stage.mouseX-brush.x) * 0.2;
		brush.y += (stage.mouseY-brush.y) * 0.2;
		brushMark.setStrokeStyle(strokeSize, "round");
		brushMark.moveTo(oldX,oldY)
		brushMark.lineTo(brush.x, brush.y);
		oldX = brush.x;
		oldY = brush.y;
		if(brushDown===true) {
			brushMark.lineTo(brush.x, brush.y);
		}
		stage.update();
	}

	function startStroke() {
		brushDown = true;
		brushMark.beginStroke(strokeColour);
	}

	function endStroke() {
		brushDown = false;
		brushMark.endStroke();
	}

	//touch screen function//

	var touchX, touchY;
	var lastX, lastY=-1;

	function drawMobile(context,x,y,size) {
		if (lastX==-1) {
            lastX=x;
	    	lastY=y;
        }
        context.strokeStyle = colorSelected;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(lastX,lastY);
        context.lineTo(x,y);
        context.lineWidth = size;
        context.stroke();
        context.closePath();
        lastX=x;
		lastY=y;
    }

     function touchStart() {
        getTouchPos();
        drawMobile(context,touchX,touchY,12);
        event.preventDefault();
    }

    function touchEnd() {
    	lastX=-1;
        lastY=-1;
    }

    function touchMove(e) { 
        getTouchPos(e);
        drawMobile(context,touchX,touchY,12); 
        event.preventDefault();
    }

    function getTouchPos(e) {
        if (!e)
            var e = event;
        if(e.touches) {
            if (e.touches.length == 1) {
                var touch = e.touches[0]; 
                touchX=touch.pageX-touch.target.offsetLeft;
                touchY=touch.pageY-touch.target.offsetTop;
            }
        }
    }

	//end touch screen funstions//

	var exportImage = document.querySelector(".export");

	function toImage() {
		var canvasExport = document.querySelector("#myCanvas");
		var myImage = canvasExport.toDataURL("image/jpg");
		window.location = myImage;
		brushButton.style.backgroundColor = '#280e0e';
		brushButton.style.backgroundImage = 'url(./images/paint/paint.svg)';
		eraserButton.style.backgroundColor = '#280e0e';
		eraserButton.style.backgroundImage = 'url(./images/paint/eraser.svg)';
	}

	var nukeButton = document.querySelector("#nuke");

	function nukeCanvas () {
		if(nukeButton = true){
			paper.graphics.clear();
			stage.update();
			stage.addChild(brush);
			brushButton.style.backgroundColor = '#280e0e';
			brushButton.style.backgroundImage = 'url(./images/paint/paint.svg)';
			eraserButton.style.backgroundColor = '#280e0e';
			eraserButton.style.backgroundImage = 'url(./images/paint/eraser.svg)';
		}else{
			return false;
		}
	}

	//FUNCTIONS//

	//EVENT LISTENERS//

	for (var size = 0; size<sizeSelector.length; size++) {
		sizeSelector[size].addEventListener('click', function() {
			var sizeChosen = document.querySelector('#chosenSize');
			var getStrokeWidth = window.getComputedStyle(this).getPropertyValue('width');
			strokeSize = getStrokeWidth.substring(0, getStrokeWidth.length-2);
			for(size = 0; size<sizeSelector.length; size++) {
				sizeSelector[size].style.border = 'none';
				sizeSelector[size].style.transition = "all 0.3s ease-in-out";
			}
			sizeChosen.innerHTML = ' - '+strokeSize;
		}, false);
	}


	for(var colour = 0; colour<colorSelected.length; colour++) {
		colorSelected[colour].addEventListener("click", function() {
			var chosenColor = document.querySelector('#chosenColour');
			strokeColour = window.getComputedStyle(this).getPropertyValue('background-color');
			if(strokeColour == 'rgb(156, 39, 176)'){strokeColour = 'Purple';}
			if(strokeColour == 'rgb(3, 169, 244)'){strokeColour = 'Light Blue';}
			if(strokeColour == 'rgb(76, 175, 80)'){strokeColour = 'Green';}
			if(strokeColour == 'rgb(255, 193, 7)'){strokeColour = 'Yellow';}
			if(strokeColour == 'rgb(255, 87, 34)'){strokeColour = 'Orange';}
			if(strokeColour == 'rgb(233, 30, 99)'){strokeColour = 'Pink';}
			if(strokeColour == 'rgb(168, 30, 34)'){strokeColour = 'Red';}
			if(strokeColour == 'rgb(96, 125, 139)'){strokeColour = 'Light Grey';}
			if(strokeColour == 'rgb(51, 51, 51)'){strokeColour = 'Dark Grey';}
			if(strokeColour == 'rgb(0, 0, 0)'){strokeColour = 'Black';}
			chosenColor.innerHTML = ' - '+strokeColour;
		}, false);
	}

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", draw);

	exportImage.addEventListener("click", toImage, false);
	stage.addEventListener("stagemousedown", startStroke, false);	
	stage.addEventListener("stagemouseup", endStroke, false);
	nukeButton.addEventListener("click", nukeCanvas, false);
	theCanvas.addEventListener("touchstart", touchStart, false);
	theCanvas.addEventListener("touchend", touchEnd, false);
	theCanvas.addEventListener("touchmove", touchMove, false);
	//EVENT LISTENERS//
})();