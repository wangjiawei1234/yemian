

var pic=documnet.getElementById('pic');
var imgs=['banner_bg.jpg','flat_parallax.jpg','red-bg.jpg']
var i=0;
function my(){
	pic.src='img/'+imgs[i];
	i++;
	if(i>=imgs.length){
		i=0;
	}
}
var time=setInterval('my()',1000);
