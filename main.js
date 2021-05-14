var camera = document.getElementById("camera");
function take_snapshot() {
    Webcam.attach(camera);
    setTimeout(function() { 
        take_selfie(); 
    }, 15000);
}

Webcam.set({
    width : 350,
    height : 350,
    img_format : "png",
    png_quality : 100 
});

function take_selfie() {
    Webcam.snap(function(data) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data+'"/>';
    });
}

