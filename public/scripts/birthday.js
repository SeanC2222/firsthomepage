var pic = document.getElementsByClassName('pic');
var picNum = pic[0].id;

pic[0].addEventListener('click', function(){
   var iNum = parseInt(picNum);
   iNum++;
   if(iNum % 15 == 0){
      launchCat();
      iNum = 1;
   }
   picNum = iNum.toString();
   var picName = changePic(picNum);
   pic[0].id = picNum;
   pic[0].src = "public/documents/" + picName;
});


function changePic(pNum){
   var pic = '';
   if(pNum == '14'){
      pic = 'cat14.gif';
   } else {
      pic = 'cat' + pNum + '.jpg';
   }
   return pic;
}

function launchCat(){
   var nyan = document.getElementById('nyan');
   var pos = -300;
   var id = setInterval(frame, 5);
   function frame(){
      if(pos == 1900){
	 clearInterval(id);
      } else {
	 pos++;
	 nyan.style.left = pos + 'px';
      }
   }
}
