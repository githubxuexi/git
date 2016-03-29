
 window.onload=function()
 {
  var tabs=document.getElementById('tab');
  var uls=tabs.getElementsByTagName("ul")[0];
  var lis=uls.getElementsByTagName("li");
  var con=document.getElementById("con");
  var divs=con.getElementsByTagName("div");
  for (var i=0;i<lis.length;i++)
  {
     lis[i].onclick=function()
     {
     	change(this);
     }
  }
  function change(obj)
{
  for (var i=0;i<lis.length;i++ )
  {
	   if(lis[i]==obj)
	  {
         lis[i].className="active";
		 divs[i].className="con1";
	  }
	  else
	  {
		  lis[i].className="";
		  divs[i].className="";
	  }
  }
 }
}