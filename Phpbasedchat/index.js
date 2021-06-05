/* Created by Furqan_Elahie */

const sticker=[

       {

           code:"sticker.angry",

           src:"https://dl.dropboxusercontent.com/s/lokcw6d2m80uiyi/1620476321920.png?dl=0"

       },

       {

           code:"sticker.love",

           src:"https://dl.dropboxusercontent.com/s/7cda067df2w311u/1620476342705.png?dl=0"

       },

       {

           code:"sticker.happy",

           src:"https://dl.dropboxusercontent.com/s/uui786powu47ram/1620475885455.png?dl=0"

       },

       {

           code:"sticker.wow",

           src:"https://dl.dropboxusercontent.com/s/6gxgmqg7g6nvstr/1620476299081.png?dl=0"

       },

       {

           code:"sticker.mask",

           src:"https://dl.dropboxusercontent.com/s/84obtnxsilvy1kr/1620476286312.png?dl=0"

       },

       {

           code:"sticker.cry",

           src:"https://dl.dropboxusercontent.com/s/e4r6es3diaqgo53/1620476266048.png?dl=0"

       },

       

       ];

var newroomprotection;

var oldmsg;      

var xhrname;

var session;

var credits;

function loadJSON(path, success, error) { 

var xhr = new XMLHttpRequest(); xhr.onreadystatechange = function() { 

if(xhr.readyState === XMLHttpRequest.DONE){

if (xhr.status === 200) { 

if (success) success(JSON.parse(xhr.responseText));

 } else {

  if (error) error(xhr); 

  }

   } 

  };

   xhr.open("GET", path, true); 

   xhr.send();

    }

   

credits=2;

function Send(a){

 var inval=encodeURIComponent(message.value);

 var urn=urName.value;

 urn.slice(0,15);

 inval.slice(0,180);

 if(inval.length===0){

     message.classList.add("redborder");

     setTimeout(function(){ 

    message.classList.remove("redborder");

     },2000);

 }else{

loadJSON('https://irreverent-hinge.000webhostapp.com/contactjson/send.php?id=0&message='+inval+" "+"      "+"   --"+rightnowtime+'&name='+urName.value, function(data) {

 message.value="";

Data();

 }, function(xhr) { 

 console.error(xhr); 

 });}

  

  return false;

}

function SendSticker(a){

console.log("called")

var mode=result.getAttribute("mode");

if(mode==="public"){

console.log("public")

    pmode=true;

}else{

    if(mode=="room"){

        pmode=false;

        

    }else{

    console.log("error++")

        

    }

}

 var urn=urName.value;

 var inval =a.getAttribute("code");

 urn.slice(0,15);

 inval.slice(0,180);

 if(pmode){

    var pmsmsg=inval;

    var name=urName.value;

    var base="https://irreverent-hinge.000webhostapp.com/contactjson/send.php?id=0&message=";

    sturl=base+pmsmsg+"&name="+name;

     

     

 }else{

 var x_none='https://irreverent-hinge.000webhostapp.com/privateroom/send.php?room=';

var x_2='&name='

var x_3='&message=';

var sturl=x_none+join_room_input_value.value+x_2+urName.value+x_3+inval;

 }

  fetch(sturl).then((res) => res.json()).then((json) => {

    close_pop_up()

    if(pmode){

Data();

}else{

    JoinRoom();

}

window.scrollTo(0,document.body.scrollHeight);

 }).catch((err) => {

            console.log(err);

        });

  return false;

}

function timeDifference(current, previous) {

 var msPerMinute = 60 * 1000;

  var msPerHour = msPerMinute * 60;

   var msPerDay = msPerHour * 24;

    var msPerMonth = msPerDay * 30; 

    var msPerYear = msPerDay * 365; 

    var elapsed = current - previous;

     if (elapsed < msPerMinute) { 

     return Math.round(elapsed/1000) + ' sec';

      } else if (elapsed < msPerHour) {

       return Math.round(elapsed/msPerMinute) + ' mins'; 

       } else if (elapsed < msPerDay ) {

        return Math.round(elapsed/msPerHour ) + ' hours'; 

        } else if (elapsed < msPerMonth) { 

        return  Math.round(elapsed/msPerDay) + ' days'; 

        } else if (elapsed < msPerYear) { 

        

        return  Math.round(elapsed/msPerMonth) + ' mths';

         } else { 

         return  Math.round(elapsed9/msPerYear ) + ' yrs'; 

         } 

         } 

function printTime() {

    var d = new Date();

    var years = d.getFullYear();

    var months = d.getMonth() + 1;

    var days = d.getDate();

    var hours = d.getHours();

    var mins = d.getMinutes();

    var secs = d.getSeconds();

    var millis = d.getMilliseconds();

    

    if(hours===12){

        mins =mins+" PM"

        

    }

    if(hours>12){

        hours=hours-12;

        mins=mins+" PM"

    }else{

   if(hours!==12){

        mins=mins+" AM"

        }

    }

  return  [years,months,days,hours,mins,secs];

}

var months=["","Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Dec"]

var rightnowtime=printTime()[0]+"/"+months[printTime()[1]]+"/"+printTime()[2]+"  At "+printTime()[3]+":"+printTime()[4];

function open_pop_up(){

  menu_container.style.display="block"

}

function close_pop_up(){

  menu_container.style.display="none"

}

function open_room_up(){

  room_container.style.display="block"

}

function close_room_up(){

  room_container.style.display="none"

}

function bar(){

sidebar.style.display="block"

}

function Login(){

if(urName.value.length===0){

urName.classList.add("redborder");

     setTimeout(function(){

     urName.classList.remove("redborder");

     },2000);

}else{

     Data();

    Showprehidden(); fetch("https://irreverent-hinge.000webhostapp.com/online.php?name="+urName.value).then((res) => res.json()).then((json) => {

 session=json.session;

 xhrname=urName.value;

OnlineList()

setTimeout (function (){

    OnlineList()

},3000)

 }, function(xhr) { 

 console.error(xhr); }

  );

     lowxd.style.display="none";

    fo1.style.display="none";

    fo2.style.display="block";

    lowxd.style.zIndex=-9999;

    }

    return false;

}

function JoinRoom(){

    event_join_int.innerText="Please Wait..."

fetch("https://unurged-tone.000webhostapp.com/privateroom/index.php?room="+join_room_input_value.value+"&password="+entpasswordtojoin.value).then((res) => res.json()).then((json) => {

event_join_int.innerText="Join"

            const status = json.status;

            const data = json.roomdata;

            if(status[0].status=="success"){

         fetch("https://lutheran-zips.000webhostapp.com/addviews.php?id="+join_room_input_value.value).then((res) => res.json()).then((json) => {

             

         }, function(xhr) { 

 console.log(xhr); }

  );

  

           close_room_up();

         result.setAttribute("mode","room");

            result.innerHTML =``;

            

            for (let i in data){

var msg=data[i].message;

var nme=data[i].name;

msg=msg.replace(/</g,"");

msg=msg.replace(/>/g,"");

msg=msg.replace(/\(/g,"");

msg=msg.replace(/\)/g,"");

msg=msg.replace(/</g,"");

msg=msg.replace(/eval/g,"");

msg=msg.replace(/script/g,"");

nme=nme.replace(/</g,"");

nme=nme.replace(/>/g,"");

nme=nme.replace(/\(/g,"");

nme=nme.replace(/\)/g,"");

nme=nme.replace(/</g,"");

nme=nme.replace(/eval/g,"");

nme=nme.replace(/script/g,"");

if(msg.length>140){

    msg=msg.slice(0,180);

    msg=msg+"....";

}

nme=nme.slice(0,15);

for(n=0;n<sticker.length;n++){

    if(msg.includes(sticker[n].code)){

        msg=`<img align="center" class="st_img" src="${sticker[n].src}"></img>`

    }

}

   if(nme==urName.value){

   var message =`<p class="message right"><span class="name me">You</span><br>${msg}</p>`

   }else{

    var message =`<p class="message left"><span class="name">${nme}</span><br>${msg}</p>`

   }

   result.innerHTML+=message;

window.scrollTo(0,document.body.scrollHeight);

 }

}else{

var exr=data[0].error;

    join_error.innerText=exr;

    event_join_int.innerText="Join";

    setTimeout(function (){

        join_error.innerText="";

    },2000)

}

 }).catch((err) => {

            console.log(err);

        });

return false;

}

function displayViceVersa(a,b){ 

document.querySelector(a).style.display="block";    document.querySelector(b).style.display="none";

     

 }

 

function mode_check(){

if(message.value==oldmsg){

    var alertContent = "Cant send same text again."; 

  halfmoon.initStickyAlert({ 

  content: alertContent, 

   title: "Sorry",

   alertType: "alert-primary" 

   })

}else{

if(credits>0){

credits =(credits-1);

oldmsg=message.value;

    var current_mode=result.getAttribute("mode");

    if(current_mode=="public"){

        Send();

    }else{

        if(current_mode=="room"){

            SendToRoom();

        }else{

            alert("You modified Code that is causing error !")

        }

    }

    }else{

        var alertContent = "Too many messages sent ,Please wait before send new message "; 

  halfmoon.initStickyAlert({ 

  content: alertContent, 

   title: "Infomation",

   alertType: "alert-secondaryVvu" 

   })

    }

    }

    return false;

}

function  Showprehidden(){

    var prehidden=document.querySelectorAll(".prehide");

    

for(y=0;y<prehidden.length;y++){

prehidden[y].style.display="block";

}

}

function SendToRoom(){

var _xx_='https://unurged-tone.000webhostapp.com/privateroom/send.php?room=';

var _x2_='&name='

var _x3_='&message=';

var _x4_="&password="

    loadJSON(_xx_+join_room_input_value.value+_x2_+urName.value+_x3_+message.value+_x4_+entpasswordtojoin.value, function(data) { 

    message.value="";

JoinRoom();

 }, function(xhr) { 

 console.error(xhr); }

  );

  return false;

  }

  function CreateRoom(){

  var roomname=create_room_name.value.slice(0,15); if(roomname.length===0){

      var alertContent = "Please enter room name."; 

  halfmoon.initStickyAlert({ 

  content: alertContent, 

   title: "Error",

   alertType: "alert-danger" 

   })

      

  }else{

  

  event_create_int.innerText="Creating..."; fetch("https://unurged-tone.000webhostapp.com/privateroom/createroom.php?setname="+roomname+"&protected="+window.newroomprotection+"&setpassword="+addpassword_create.value).then((res) => res.json()).then((json) => {

event_create_int.innerText="Create New Room";

   if(json.status=="success"){

  var new_room_code=json.code;

 join_room_input_value.value=new_room_code; entpasswordtojoin.value=addpassword_create.value;

JoinRoom()    

}else{

    console.log("Unexpected Error has been occured")

}

 }, function(xhr) { 

 console.error(xhr); }

  );

  }

  return false;

  }

  function OnlineList(){

AddonlineUser()

}

function AddonlineUser(a){

     clickmetorefresh.innerHTML="&#8645;";

     activeonline2.innerHTML=""; fetch("https://irreverent-hinge.000webhostapp.com/onlineusersname.json?update="+Math.floor(Math.random() * 10000000)).then((res) => res.json()).then((json) => {

      var zerouser=0;

for(let key in json){

var ause=json[key];

ause=ause.slice(0,10);

   zerouser++; totalnowonline.innerText=" ("+zerouser+")";

var ur=`<span class="imonlinenow org_color">${ause}<span class="activenow org_color"> ◉ Online</span></span><br>`;

   activeonline2.innerHTML+=ur;

    }

   clickmetorefresh.innerHTML="&#8634"

 }, function(xhr) { 

 console.error(xhr); }

  );

  }

window.addEventListener("beforeunload", () => {

  var _s=window.session;

  var m_=window.xhrname; 

  var offme_="https://irreverent-hinge.000webhostapp.com/offline.php?offline="+_s+"&name="+m_;

    fetch(offme_).then((res) => res.json()).then((json) => {

 }, function(xhr) { 

 }

  );

});

function AllRoomsList(){

clickmetorefreshallrooms.innerHTML="&#8645;";

fetch("https://unurged-tone.000webhostapp.com/privateroom/rooms.php").then((res) => res.json()).then((json) => {

var count=json.length;

characterscreen.innerHTML =""

totalrooms.innerText="("+count+")";

for(i=count-1;i>-1;i--){

var xname=json[i].name;

    var xid=json[i].id;

    var xpro=json[i].protected;

    var xta=json[i].timeago;

    var xts=json[i].timestamp;

    var joiners=json[i].views;

    if(joiners==""){

        joiners===0;

    }

    

    

if(json[i].protected==="true"){

    var one_room=`<div  class="choosec_ bestseller">

<span  class="t_ago">${xta}</span>

<span  class="t_jio"> &#9735;${joiners}</span><br>

<span class="cr_name">${xname}</span><br>

<span class="cr_name"><span  class="litid">id: </span>${xid}</span><br>    

<button protection="true" class="b_j" id="${xid}" onclick='joinroomfrompac(${xid})'>Join</button>

</div>`

characterscreen.innerHTML+=one_room;

}else{

    var one_room=`<div  class="choosec_">

<span  class="t_ago">${xta}</span>

<span  class="t_jio"> &#9735;${joiners}</span><br>

<span class="cr_name">${xname}</span><br>

<span class="cr_name"><span  class="litid">id: </span>${xid}</span><br>    

<button protection="false" class="b_j" id="${xid}" onclick='joinroomfrompac(${xid})'>Join</button>

</div>`

characterscreen.innerHTML+=one_room;

} clickmetorefreshallrooms.innerHTML="&#8634"

} 

 }, function(xhr) { 

 console.log(xhr); }

  );

  }

function joinroomfrompac(a){ 

join_room_input_value.value=a.getAttribute("id");

if(a.getAttribute("protection")==="false"){

    JoinRoom();

    var alertContent = "Please wait joining !"; 

  halfmoon.initStickyAlert({ 

  content: alertContent, 

   title: "Joining",

   alertType: "alert-primary" 

   })

    

      setTimeout(function(){

          mytoast_head.innerText="Refreshed"

       mytoast_des_head.innerText="Refresh Done "

       mytoast_msg.innerText=""

        halfmoon.toastAlert('precompiled-alert-1', 2500)

      },3000);

      

    window.open("#");

    }else{

        window.open("#");

    }

}

  

  function crearetmproom(){

      create_room_btn.click()

  }

  

function Data(){ 

      loadJSON('https://irreverent-hinge.000webhostapp.com/contactjson/responses.php?id=0&password=furqan', function(data) { 

result.innerHTML =``;

for(i=0;i<data.length;i++){

var msg=data[i].message;

var nme=data[i].name;

msg=msg.replace(/</g,"");

msg=msg.replace(/>/g,"");

msg=msg.replace(/\(/g,"");

msg=msg.replace(/\)/g,"");

msg=msg.replace(/</g,"");

msg=msg.replace(/eval/g,"");

msg=msg.replace(/script/g,"");

nme=nme.replace(/</g,"");

nme=nme.replace(/>/g,"");

nme=nme.replace(/\(/g,"");

nme=nme.replace(/\)/g,"");

nme=nme.replace(/</g,"");

nme=nme.replace(/eval/g,"");

nme=nme.replace(/script/g,"");

if(msg.length>140){

    msg=msg.slice(0,180);

    msg=msg+"....";

}

nme=nme.slice(0,15);

for(n=0;n<sticker.length;n++){

    if(msg.includes(sticker[n].code)){

        msg=`<img align="center" class="st_img" src="${sticker[n].src}"></img>`

    }

}

 

if(msg.includes("%%%file_")){

if(msg.includes("__ext")){

var subStr = msg.match("%%%file_(.*)__ext"); msg=msg.replace((subStr[1]),`<img class="st_img" src="${subStr[1]}"/><br>`)

msg=msg.replace(/%%%file_/g,"");

msg=msg.replace(/__ext/g,"");

}

}

   if(data[i].name==urName.value){

   var message =`<p class="message right"><span class="name me">You</span><br>${msg}</p>`

   }else{

    var message =`<p class="message left"><span class="name">${nme}</span><br>${msg}</p>`

   }

   

   

   

   result.innerHTML+=message;

 

 window.scrollTo(0,document.body.scrollHeight);

 

 

 

}

 }, function(xhr) { 

 console.error(xhr); }

  );

  }

  window.onload=function(){

      AllRoomsList()

       

       newroomprotection=false;

       for(q=0;q<sticker.length;q++){

       var st=sticker[q].code;

      

       var stkr=`<img onclick="SendSticker(this)" src="${sticker[q].src}" code="${sticker[q].code}" height="50vh" width="70vw"></img>`

           actual_txt.innerHTML+=stkr;

       }

      

  

  plus.addEventListener("click",function(){

      open_pop_up();

      

  })

  sts.addEventListener("click",function(){

      sidebar.style.display="none"

      

  })

  hbt.addEventListener("click",function(){

      sidebar.style.display="block"

      

  })

  

 

 

 

 

  join_room_btn.addEventListener("click",function(){

  room_head.innerHTML ="Join Room"

   open_room_up();

   displayViceVersa("#inside_join","#inside_create");

   window.open("#");

   

  })

 

 create_room_btn.addEventListener("click",function(){

        room_head.innerHTML ="Create Room";

   open_room_up(); displayViceVersa("#inside_create","#inside_join");

   window.open("#");

  })

clickmetorefresh.addEventListener("click",function(){

        OnlineList()

  })

 password_protected.addEventListener("click",function(){

        if(password_protected.checked!==false){   

   password_protected.checked===true;

  addpassword_create.style.display="block";

   newroomprotection=true;

   

        }else{

            password_protected.checked===false;

   addpassword_create.style.display="none";

   newroomprotection=false;

   

        }

   

  })

  

  

  

  

function credits_(){

    credits =2;

    later()

}

function later(){

setTimeout(function (){

    credits_()

},14000);

}

later(); 

  clickmetorefreshallrooms.addEventListener("click",function(){

        AllRoomsList()

   

  })

  

   refresh.addEventListener("click",function(){

   var current_mode=result.getAttribute("mode");

    if(current_mode=="public"){

        Data();

    }else{

        if(current_mode=="room"){

            JoinRoom();

        }else{

            alert("You modified Code that is causing error !")

        }

    }

    

       setTimeout(function(){

       mytoast_head.innerText="Refreshed"

       mytoast_des_head.innerText="Refresh Done "

       mytoast_msg.innerText=""

        halfmoon.toastAlert('precompiled-alert-1', 2500)

      },2000);

   

  })

  }

  

  

  /*

* -----------------------------------------------------------------------------

* Halfmoon JS

* Version: 1.1.1

* https://www.gethalfmoon.com

* Copyright, Halfmoon UI

* Licensed under MIT (https://www.gethalfmoon.com/license)

* -----------------------------------------------------------------------------

* The above notice must be included in its entirety when this file is used.

*/

Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(e){"use strict";if("Element"in e){var t="classList",o="prototype",a=e.Element[o],s=Object,n=String[o].trim||function(){return this.replace(/^\s+|\s+$/g,"")},i=Array[o].indexOf||function(e){for(var t=0,o=this.length;t<o;t++)if(t in this&&this[t]===e)return t;return-1},r=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},d=function(e,t){if(""===t)throw new r("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(t))throw new r("INVALID_CHARACTER_ERR","The token must not contain space characters.");return i.call(e,t)},l=function(e){for(var t=n.call(e.getAttribute("class")||""),o=t?t.split(/\s+/):[],a=0,s=o.length;a<s;a++)this.push(o[a]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},c=l[o]=[],m=function(){return new l(this)};if(r[o]=Error[o],c.item=function(e){return this[e]||null},c.contains=function(e){return~d(this,e+"")},c.add=function(){for(var e,t=arguments,o=0,a=t.length,s=!1;~d(this,e=t[o]+"")||(this.push(e),s=!0),++o<a;);s&&this._updateClassName()},c.remove=function(){var e,t,o=arguments,a=0,s=o.length,n=!1;do{for(t=d(this,e=o[a]+"");~t;)this.splice(t,1),n=!0,t=d(this,e)}while(++a<s);n&&this._updateClassName()},c.toggle=function(e,t){var o=this.contains(e),a=o?!0!==t&&"remove":!1!==t&&"add";return a&&this[a](e),!0===t||!1===t?t:!o},c.replace=function(e,t){var o=d(e+"");~o&&(this.splice(o,1,t),this._updateClassName())},c.toString=function(){return this.join(" ")},s.defineProperty){var h={get:m,enumerable:!0,configurable:!0};try{s.defineProperty(a,t,h)}catch(e){void 0!==e.number&&-2146823252!==e.number||(h.enumerable=!1,s.defineProperty(a,t,h))}}else s[o].__defineGetter__&&a.__defineGetter__(t,m)}}(self),function(){"use strict";var e,o,t=document.createElement("_");t.classList.add("c1","c2"),t.classList.contains("c2")||((e=function(e){var a=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){for(var t=arguments.length,o=0;o<t;o++)e=arguments[o],a.call(this,e)}})("add"),e("remove")),t.classList.toggle("c3",!1),t.classList.contains("c3")&&(o=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:o.call(this,e)}),"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(e,t){var o=this.toString().split(" "),a=o.indexOf(e+"");~a&&(o=o.slice(a),this.remove.apply(this,o),this.add(t),this.add.apply(this,o.slice(1)))}),t=null}());var halfmoon={pageWrapper:document.getElementsByClassName("page-wrapper")[0],stickyAlerts:document.getElementsByClassName("sticky-alerts")[0],darkModeOn:!1,toggleDarkMode:function(){document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),this.darkModeOn=!1,this.createCookie("halfmoon_preferredMode","light-mode",365)):(document.body.classList.add("dark-mode"),this.darkModeOn=!0,this.createCookie("halfmoon_preferredMode","dark-mode",365))},getPreferredMode:function(){return this.readCookie("halfmoon_preferredMode")?this.readCookie("halfmoon_preferredMode"):"not-set"},toggleSidebar:function(){this.pageWrapper&&(this.pageWrapper.getAttribute("data-sidebar-hidden")?this.pageWrapper.removeAttribute("data-sidebar-hidden"):this.pageWrapper.setAttribute("data-sidebar-hidden","hidden"))},deactivateAllDropdownToggles:function(){for(var e=document.querySelectorAll("[data-toggle='dropdown'].active"),t=0;t<e.length;t++)e[t].classList.remove("active"),e[t].closest(".dropdown").classList.remove("show")},toggleModal:function(e){var t=document.getElementById(e);t&&t.classList.toggle("show")},makeId:function(e){for(var t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=o.length,s=0;s<e;s++)t+=o.charAt(Math.floor(Math.random()*a));return t},toastAlert:function(e,t){var o,a=document.getElementById(e);void 0===t&&(t=5e3),a.classList.contains("show")||(a.classList.contains("alert-block")||a.classList.add("alert-block"),setTimeout(function(){a.classList.add("show")},250),o=t+250,setTimeout(function(){a.classList.add("fade")},o),setTimeout(function(){a.classList.remove("alert-block"),a.classList.remove("show"),a.classList.remove("fade")},o+500))},initStickyAlert:function(e){var t="content"in e?e.content:"",o="title"in e?e.title:"",a="alertType"in e?e.alertType:"",s="fillType"in e?e.fillType:"",n=!("hasDismissButton"in e)||e.hasDismissButton,i="timeShown"in e?e.timeShown:5e3,r=document.createElement("div");r.setAttribute("id",this.makeId(6)),o&&(t="<h4 class='alert-heading'>"+o+"</h4>"+t),r.classList.add("alert"),a&&r.classList.add(a),s&&r.classList.add(s),n&&(t="<button class='close' data-dismiss='alert' type='button' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+t),r.innerHTML=t,this.stickyAlerts.insertBefore(r,this.stickyAlerts.childNodes[0]),this.toastAlert(r.getAttribute("id"),i)},clickHandler:function(e){},keydownHandler:function(e){}};function halfmoonOnDOMContentLoaded(){halfmoon.pageWrapper||(halfmoon.pageWrapper=document.getElementsByClassName("page-wrapper")[0]),halfmoon.stickyAlerts||(halfmoon.stickyAlerts=document.getElementsByClassName("sticky-alerts")[0]),document.documentElement.clientWidth<=768?halfmoon.pageWrapper&&(halfmoon.pageWrapper.getAttribute("data-show-sidebar-onload-sm-and-down")||halfmoon.pageWrapper.setAttribute("data-sidebar-hidden","hidden")):halfmoon.pageWrapper&&"overlayed-all"===halfmoon.pageWrapper.getAttribute("data-sidebar-type")&&halfmoon.pageWrapper.setAttribute("data-sidebar-hidden","hidden"),document.addEventListener("click",function(e){var t,o,a=e,s=e.target;s.matches("[data-toggle='dropdown']")||s.matches("[data-toggle='dropdown'] *")?(s.matches("[data-toggle='dropdown'] *")&&(s=s.closest("[data-toggle='dropdown']")),s.classList.contains("active")?(s.classList.remove("active"),s.closest(".dropdown").classList.remove("show")):(halfmoon.deactivateAllDropdownToggles(),s.classList.add("active"),s.closest(".dropdown").classList.add("show"))):s.matches(".dropdown-menu *")||halfmoon.deactivateAllDropdownToggles(),(s.matches(".alert [data-dismiss='alert']")||s.matches(".alert [data-dismiss='alert'] *"))&&(s.matches(".alert [data-dismiss='alert'] *")&&(s=s.closest(".alert [data-dismiss='alert']")),s.parentNode.classList.add("dispose")),(s.matches("[data-toggle='modal']")||s.matches("[data-toggle='modal'] *"))&&(s.matches("[data-toggle='modal'] *")&&(s=s.closest("[data-toggle='modal']")),(t=document.getElementById(s.getAttribute("data-target")))&&t.classList.contains("modal")&&halfmoon.toggleModal(s.getAttribute("data-target"))),(s.matches(".modal [data-dismiss='modal']")||s.matches(".modal [data-dismiss='modal'] *"))&&(s.matches(".modal [data-dismiss='modal'] *")&&(s=s.closest(".modal [data-dismiss='modal']")),s.closest(".modal").classList.remove("show")),s.matches(".modal-dialog")&&((o=s.closest(".modal")).getAttribute("data-overlay-dismissal-disabled")||(o.classList.contains("show")?o.classList.remove("show"):window.location.hash="#")),halfmoon.clickHandler(a)},!1),document.addEventListener("keydown",function(e){var t,o,a,s=e;document.querySelector("input:focus")||document.querySelector("textarea:focus")||document.querySelector("select:focus")||(e=e||window.event).ctrlKey||e.metaKey||(document.body.getAttribute("data-sidebar-shortcut-enabled")&&e.shiftKey&&83==e.which&&(t=!1,window.location.hash&&(o=window.location.hash.substring(1),(a=document.getElementById(o))&&a.classList.contains("modal")&&(t=!0)),document.querySelector(".modal.show")&&(t=!0),t||(halfmoon.toggleSidebar(),e.preventDefault())),document.body.getAttribute("data-dm-shortcut-enabled")&&e.shiftKey&&68==e.which&&(halfmoon.toggleDarkMode(),e.preventDefault())),27===e.which&&(document.querySelector("[data-toggle='dropdown'].active")?((a=document.querySelector("[data-toggle='dropdown'].active")).classList.remove("active"),a.closest(".dropdown").classList.remove("show"),e.preventDefault()):(window.location.hash&&(o=window.location.hash.substring(1),(a=document.getElementById(o))&&a.classList.contains("modal")&&(a.getAttribute("data-esc-dismissal-disabled")||(window.location.hash="#",e.preventDefault()))),document.querySelector(".modal.show")&&((a=document.querySelector(".modal.show")).getAttribute("data-esc-dismissal-disabled")||(a.classList.remove("show"),e.preventDefault())))),halfmoon.keydownHandler(s)});for(var e=document.querySelectorAll(".custom-file input"),t=0;t<e.length;t++){var o=e[t],a=document.createElement("div");a.classList.add("file-names");var s=o.getAttribute("data-default-value");a.innerHTML=s||"No file chosen",o.parentNode.appendChild(a),o.addEventListener("change",function(e){a=e.target.parentNode.querySelector(".file-names"),1===e.target.files.length?a.innerHTML=e.target.files[0].name:1<e.target.files.length?a.innerHTML=e.target.files.length+" files":a.innerHTML="No file chosen"})}halfmoon.pageWrapper&&halfmoon.pageWrapper.classList.add("with-transitions")}document.addEventListener("DOMContentLoaded",halfmoonOnDOMContentLoaded);
