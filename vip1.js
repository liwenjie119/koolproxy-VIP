var thisURL = window.location.href,inum=1,vipOption;
var vipChannl = new Array(
//"http://www.88gc.net/jx/?url=",
//"http://vip.jlsprh.com/index.php?url=",
//"http://api.wlzhan.com/sudu/?url=",
//"http://aikan-tv.com/?url=",
"http://www.88gc.net/jx/?url=",
"http://vip.jlsprh.com/index.php?url=",
"http://api.wlzhan.com/sudu/?url=",
"http://aikan-tv.com/?url=",
"http://jx.vgoodapi.com/jx.php?url=",
"http://000o.cc/jx/ty.php?url=",
"http://j.zz22x.com/jx/?url=",
"http://api.wlzhan.com/sudu/?url=",
"http://www.kkflv.com/kkflv/index.php?url=",
"http://q.z.vip.totv.72du.com/?url=",
"http://qtv.soshane.com/ko.php?url=",
"http://www.a305.org/weixin.php?url=",
"http://y.qin52.com/xnflv/index.php?url=",
"http://j.chanchangou.com/vip/index.php?url=",
"http://api.koflv.cn/url.php?url=",
"http://api2.my230.com/?vid=",
"http://jx.myxit.cn/vip/?url=",
"http://014670.cn/jx/ty.php?url=",
"http://y.qin52.com/xnflv/index.php?url=",
"http://www.662820.com/xnflv/index.php?url=",
"http://ku.kuuhui.com/svipjx/liulanqichajian/browserplugin/qianru/qianru.php?id=",
);

for (x in vipChannl)
{
  vipOption = vipOption + '<option value="'+vipChannl[x]+thisURL+'">VIP通道'+inum+++'</option>';
}

function insVIP(emID,rID,index=0,height="100%"){
var gemID = document.getElementsByClassName(emID)[0];
var newNode = document.createElement("select");
newNode.setAttribute("title","原整理by MarIxs");
gemID.appendChild(newNode);
newNode.setAttribute("onchange", "replacePlayer(this,'"+rID+"','"+height+"')");
newNode.innerHTML = '<option selected="selected" disabled="disabled">切换VIP通道</option>'+vipOption;
if (index!=0){
  newNode.selectedIndex=index;
  setTimeout(function () {
    var event = document.createEvent("UIEvents"); 
    event.initUIEvent("change", true, true);      
    newNode.dispatchEvent(event);
  }, 1000);
}
}

function replacePlayer(e,rID,height="100%"){
    var playerID = document.getElementById(rID);
    playerID.innerHTML = '';
    var newplayerID = document.createElement("iframe");
    playerID.appendChild(newplayerID);
    newplayerID.setAttribute("border","0");
    newplayerID.setAttribute("frameborder","no");
    newplayerID.setAttribute("scrolling","no");
    newplayerID.setAttribute("marginwidth","0");
    newplayerID.setAttribute("width","100%");
    newplayerID.setAttribute("height",height);
    newplayerID.src = e.value;
}
