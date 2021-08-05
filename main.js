canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

pinkcar_width = 75;
pinkcar_height = 100;

background_image = "parkingLot.jpg";
pinkcar_image = "Pink Car.png";

pinkcar_x = 5;
pinkcar_y = 225;

function add() {
		background_img_tag = new Image();
		background_img_tag.onload = uploadBackground;
		background_img_tag.src = background_image;
	
		pinkcar_imgTag = new Image();
		pinkcar_imgTag.onload = upload_pinkcar;
		pinkcar_imgTag.src = pinkcar_image;
	}

function uploadBackground() {
	ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height );	
}

function upload_pinkcar() {
	ctx.drawImage(pinkcar_imgTag, pinkcar_x, pinkcar_y, pinkcar_width, pinkcar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
    if (pinkcar_y >= 0) {
        pinkcar_y = pinkcar_y - 10;
        console.log("When Up Arrow is Pressed x=" + pinkcar_x + " & y=" + pinkcar_y);
        uploadBackground();
        upload_pinkcar();
    }
}

function down() {
    if (pinkcar_y <= 400) {
        pinkcar_y = pinkcar_y + 10;
        console.log("When Down Arrow is Pressed x=" + pinkcar_x + " & y=" + pinkcar_y);
        uploadBackground();
        upload_pinkcar();
    }
}

function left() {
    if (pinkcar_x>=0) {
        pinkcar_x = pinkcar_x - 10;
        console.log("When Left Arrow is Pressed x=" + pinkcar_x + " & y=" + pinkcar_y);
        uploadBackground();
        upload_pinkcar();
    }
}

function right() {
    if (pinkcar_x <= 700) {
        pinkcar_x = pinkcar_x + 10;
        console.log("When Right Arrow is Pressed x=" + pinkcar_x + " & y=" + pinkcar_y);
        uploadBackground();
        upload_pinkcar();
    }
}
