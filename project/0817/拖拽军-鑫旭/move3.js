// by zhangxinxu welcome to visit my personal website http://www.zhangxinxu.com/
// zxx.drag v1.0 2010-03-23
var params={left:0,top:0,currentX:0,currentY:0,flag:false};var getCss=function(b,a){return b.currentStyle?b.currentStyle[a]:document.defaultView.getComputedStyle(b,false)[a]};var startDrag=function(a,b){if(getCss(b,"left")!=="auto"){params.left=getCss(b,"left")}if(getCss(b,"top")!=="auto"){params.top=getCss(b,"top")}a.onmousedown=function(c){params.flag=true;if(!c){c=window.event;a.onselectstart=function(){return false}}var d=c;params.currentX=d.clientX;params.currentY=d.clientY};document.onmouseup=function(){params.flag=false;if(getCss(b,"left")!=="auto"){params.left=getCss(b,"left")}if(getCss(b,"top")!=="auto"){params.top=getCss(b,"top")}};document.onmousemove=function(h){var i=h?h:window.event;if(params.flag){var d=i.clientX,c=i.clientY;var g=d-params.currentX,f=c-params.currentY;b.style.left=parseInt(params.left)+g+"px";b.style.top=parseInt(params.top)+f+"px"}}};