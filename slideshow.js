 var  pictures = [ 
   "bootstrap.png",
   "butterfly.jpg",
   "cats.jpg",
   "frida.jpg",
   "logo_JavaScript.png", 
   "m.jpg",
   "github-logo.jpg"
];

var Length = pictures.length;
var x = 0 ;
var interval = undefined;
 


  $('#start').on('click', Start);
  $('#stop').on('click', Stop);

 
  function Start(){
   clearInterval(interval);
   interval = setInterval(function(){
     if (x < Length){
       document.querySelector('#image-holder').innerHTML = ` <img src="./images/${pictures[x]}" style="width:400px; height:400px;"> `;
       x++;  
     } 
     else if(x == Length){
       x = 0;
       Start();
     };

    ShowGif();
   }, 2000);
 
  return ;
  }

  function Stop(){
    clearInterval(interval);
    return;
  }

  function ShowGif(){
    setTimeout(function(){
      document.querySelector('#image-holder').innerHTML = ` <img src="./images/loading.gif" style="width:400px; height:400px;"> `;
     },500);
     return; 

  }















 