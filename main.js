var canvas=new fabric.canvas("myCanvas");
block_x=20;
block_y=30;
block_width=50;
block_hright=50;
var playerobject=" ";
var blockobject=" ";
function playerupdate(){
    fabric.Image.fromUrl("player(1).png", function(Img){
    playerobject.scaleToWidth(150);
playerobject.scaleToHeight(130);
playerobject.set({
    top:player_y,left:player_x
});
canvas.add(playerobject);
});
}
function new_image(get_Image){
    fabric.Image.fromUrl(get_Image, function(Img){
        blockobject.scaleToWidth(block_width);
    blockobject.scaleToHeight(block_hright);
    blockobject.set({
        top:player_y,left:player_x
    });
    canvas.add(blockobject);
});
}
window.addeventListener("keydown" , mykeydown());
function mykeydown(e){
   keypress=e.keyCode;
console.log(keypress);
if (keypress=="38"){
uparrow();
console.log("Up arrow was pressd");
}
if (keypress=="40"){
downarrow();
console.log("Down arrow was pressed");
}
if (keypress=="37"){
    leftarrow();
    console.log("Left arrow was pressed");
}
if (keypress=="39"){
    rightarrow();
    console.log("Right arrow was pressed");
}
if (keypress=="83"){
    new_image("spiderman_body.png")
    console.log("s");
}
if (keypress=="73"){
    new_image("ironman_face.png");
    console.log("i");
}
if (keypress=="72"){
    new_image("hulk_right_hand.png");
    console.log("h");
}
if (keypress=="84"){
    new_image("thor_left_hand");
    console.log("t");
}
if (keypress=="76"){
    new_image("ironman_legs.png");
    console.log("l");
}
}