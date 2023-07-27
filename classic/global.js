if(cur_page!="server"&&showft){setTimeout("animate()",700);document.getElementById("firsttime").style.display="block";function animate(){document.getElementById("firsttime").className="animate";setTimeout("out()",5000);setTimeout("hide()",6000);}
function out(){document.getElementById("firsttime").className="";}
function hide(){document.getElementById("firsttime").style.display="none";}}
var examples=document.getElementById("examples"),bg=document.getElementById("examples_bg"),btn=document.getElementById("examples_btn"),quickbuy=document.getElementById("quickbuy");if(btn){btn.onclick=function(e){do_click(e)};examples.onclick=function(e){close_examples(e)};bg.onclick=function(e){close_examples(e)};function do_click(e){e.preventDefault();examples.style.display="block";examples.style.top=window.pageYOffset+"px";bg.style.display="block";return false;};function close_examples(e){if(e.target==examples||e.target==bg){examples.style.display="none";bg.style.display="none";}
return false;};}
if(quickbuy){quickbuy.onchange=function(e){if(e.target.value!="Choose"){window.location=e.target.value;}}}
