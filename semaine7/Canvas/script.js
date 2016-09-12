function init(){

  var canvas = document.getElementById('canvas');
  var context1= canvas.getContext('2d');
  //image 1 fait position ok
  var image1 = new Image();
  image1.src = '1.png';
  image1.onload = function () {
    context1.drawImage(this,350, 50,268,245);
  }
   //image 2 fait position ok
  var image2 = new Image();
  image2.src = '2.png';
  image2.onload = function () {
    context1.drawImage(this,424, 130,299,242);
  } //image 3 fait position ok
  var image3 = new Image();
  image3.src = '3.png';
  image3.onload = function () {
    context1.drawImage(this,373, 202,185,111);
  } //image 3 fait position ok
  var image4 = new Image();
  image4.src = '4.png';
  image4.onload = function () {
    context1.drawImage(this,71, 114,251,264);
  } //image 3 fait position ok
  var image5 = new Image();
  image5.src = '5.png';
  image5.onload = function () {
    context1.drawImage(this,174, 37,223,169);
  }
  //image centre fait position ok
  var centre = new Image();
  centre.src = 'centre.png';
  centre.onload = function () {
    context1.drawImage(this,222, 51,347,531);
    
  }
}
