var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object=" ";
var block_object=" ";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x

        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
fabric.Image.fromURL(get_image , function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top:player_y,left:player_x
    });
    canvas.add(block_object);
});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypress=e.keyCode;
console.log(keypress);
if (e.shiftKey==true && keypress=="80"){
    console.log("p and shift pressed together");
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if (e.shiftKey==true && keypress=="77"){
    console.log("m and shift pressed together");
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if (keypress=="38"){
    up();
    console.log("Up arrow was pressed")
}
if (keypress=="40"){
    down();
    console.log("Down arrow was pressed")
}
if (keypress=="37"){
    left();
    console.log("Left arrow was pressed")
}
if (keypress=="39"){
    right();
    console.log("Right arrow was pressed")
}
if (keypress=="82"){
    new_image("ironmsn_right_hand.png");
    console.log("W was pressed");
}
if (keypress=="70"){
    new_image("hulk_face.png");
    console.log("F was pressed");
}
if (keypress=="72"){
    new_image("spiderman_left_hand.png");
    console.log("H was pressed");
}
if (keypress=="84"){
    new_image("ironman_body.png");
    console.log("T was pressed");
}
if (keypress=="82"){
    new_image("ironman_right_hand.png");
    console.log("R was pressed");
}
if (keypress=="76"){
    new_image("hulk_legs.png");
    console.log("Y was pressed");
}

}
function up(){
    if (player_y>=0){
        player_y=player_y-block_height;
        console.log("Block image height= "+block_height);
        console.log("Up arrow was pressed, X= "+player_x+ " Y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y<=500){
        player_y=player_y+block_height;
        console.log("Block image height= "+block_height);
console.log("Down arrow was pressed, X= "+player_x+" Y= "+player_y);
canvas.remove(player_object);
player_update();
    }
}
function left(){
    if (player_x>=0){
    player_x=player_x-block_width;
    console.log("Block image width= "+block_width);
    console.log("Left arrow was pressed, X= "+player_x+" Y= "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function right(){
    if (player_x<=850){
        player_x=player_x+block_width;
        console.log("Block image width= "+block_width);
        console.log("Right arrow was pressed, X= "+player_x+" Y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}