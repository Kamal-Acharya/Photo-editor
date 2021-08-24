var foto;
async function exec(){
    foto= await new Foto();
}



async function makegray(){
    await foto.grayscale();
}
async function makedarker(){
    await foto.makeDark();
}
async function makeBright(){
    await foto.makeBright();
}
async function makeSharp(){
    await foto.applySharpFilter();
}
async function crop(){
    foto.cropSelected();
}
async function flipVertically(){
    await  foto.flipVertically();
}
async function makeBlur(){
    await foto.applyBlurFilter();
}
async function makeEmboss(){
    await  foto.applyEmbossFilter();
}
async function download(){
    await foto.export();
}

exec();