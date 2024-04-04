Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");

function clickimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+'"/>';
    });
}
console.log("ml5version",ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wU04krELG/model.json",modelLoaded);
function modelLoaded() {
    console.log("model Loaded");
}
function identifyimage(){
    var img=document.getElementById("capturedimage");
     classifier.classify(img,getresult);
}
function getresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("resultobject").innerHTML=result[0].label;
        document.getElementById("resultaccuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}