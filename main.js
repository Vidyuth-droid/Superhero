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