function previewImage() {
    var file = document.getElementById("file").files;
    if (file.length > 0){
         var fileReader = new FileReader();
    }

    fileReader.onload = function (event){
        document.getElementById("targetimage").setAttribute("src",event.target.result);
    };
    fileReader.readAsDataURL(file[0]);
}

let targetimage = document.getElementById("targetimage");
let inputrange = document.querySelectorAll(".slider")

for(let i=0; i<=inputrange.length-1; i++){
    inputrange[i].addEventListener('input', editimage);
}

function editimage(){
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');
    let bright = document.getElementById('bright');
    let cont = document.getElementById('cont');


    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;
    let brightval = bright.value;
    let contval = cont.value;

    targetimage.style.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%) brightness('+brightval+'%) contrast('+contval+'%)';
}
