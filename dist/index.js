var foto;
window.onload=function(){
    foto=new Foto();
}


function makegray(){
    foto.grayscale();
}
function makedarker(){
    foto.makeDark();
}
function makeBright(){
    foto.makeBright();
}
function makeSharp(){
    foto.applySharpFilter();
}
function crop(){
    foto.cropSelected();
}
function flipVertically(){
    foto.flipVertically();
}
function makeBlur(){
    foto.applyBlurFlter();
}
function makeEmboss(){
    foto.applyEmbossFlter();
}
function download(){
    foto.export();
}