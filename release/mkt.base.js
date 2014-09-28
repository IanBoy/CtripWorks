;(function(a){if(typeof a["__union"]==="undefined"){a["__union"]=[]}var b=b||{};b.buildNamespace=function(g){if(typeof g!=="string"){return false}var e=b,c=g.split("."),f=c[0]==="Mkt"?1:0,d=c.length;for(;f<d;f++){e[c[f]]=e[c[f]]||{};e=e[c[f]]}};b.buildNamespace("Store");b.Store.CommonStore=(function(){var d=null,e=a.localStorage;if(!e){return}function c(){function j(k){if(e&&JSON&&typeof JSON.parse==="function"){return JSON.parse(e.getItem(k))}return null}function f(o,q,n,l){if(arguments.length<2){throw"The arguments less than 2"}var k=this,p=k.getStore(o)||null,m=null;if(o==="SALES_OBJECT"){m={value:q,tag:n||p.tag||"",oldvalue:p&&p.oldvalue?p.oldvalue:null,timeout:b.Utils.formatDate("Y/m/d H:i:s",new Date(),l),savedate:b.Utils.formatDate("Y/m/d H:i:s",new Date())}}else{m={data:q,timeout:b.Utils.formatDate("Y/m/d H:i:s",new Date(),l)}}k.setStore(o,m)}function i(l,n){var k=this,n=n||"data",m=k.getStore(l);if(m&&m[n]){return m[n]}return null}function h(k,l){e.removeItem(k);if(JSON&&typeof JSON.stringify==="function"){e.setItem(k,JSON.stringify(l))}else{e.setItem(k,l)}}function g(k){e.removeItem(k)}return{getStore:j,setStore:h,setStoreParam:f,getStoreParam:i,removeStore:g}}return{getInstance:function(){if(!d){d=c.call(b.Store)}return d}}}());b.buildNamespace("Mkt.Dom");b.Dom.elems=[];b.Dom.getByClass=function(k,e,d){var n=this,j=[],l=e,o=typeof d==="string"?d:"*";if(l){l=typeof l==="string"?n.getById(l):e}else{l=document.body}var c=l.getElementsByTagName(o),m=0,h=c.length;for(;m<h;m++){var i=0,g=c[m].className.split(" "),f=g.length;for(;i<f;i++){if(g[i]==k){j.push(c[m]);break}}}if(j.length>0){n.elems=j}else{n.elems=[]}return n};b.Dom.getById=function(e){var c=this,d=document.getElementById(e);c.elems=[];if(d){c.elems.push(d)}return c};b.Dom.html=function(f){var e=this,d=0,c=e.elems.length;for(;d<c;d++){if(e.elems[d]&&e.elems[d].nodeType===1&&typeof f==="string"){e.elems[d].innerHTML=f}}return e};b.Dom.show=function(){var e=this,d=0,c=e.elems.length;for(;d<c;d++){if(e.elems[d]&&e.elems[d].nodeType===1){e.elems[d].style.display="block"}}return e};b.Dom.hide=function(){var e=this,d=0,c=e.elems.length;for(;d<c;d++){if(e.elems[d]&&e.elems[d].nodeType===1){e.elems[d].style.display="none"}}return e};b.buildNamespace("Mkt.Ajax");b.Ajax.obj=(function(){var c;try{c=new XMLHttpRequest()}catch(d){try{c=new ActiveXObject("Msxml2.XMLHTTP")}catch(d){try{c=new ActiveXObject("Microsoft.XMLHTTP")}catch(d){throw"您的浏览器不支持AJAX";return false}}}return c}());b.Ajax.httpSuccess=function(c){return c.status>=200&&c.status<300||c.status==304};b.Ajax.submitRequest=function(d){if(!d){return}var c=this,e=c.obj;e.onreadystatechange=function(){if(e.readyState==4){if(c.httpSuccess(e)&&e.responseText){d.success(e.responseText)}else{d.error(e.responseText)}}};e.open(d.type,d.url,d.async||true);e.send(d.param)};b.Utils={formatDate:function(d,c,e){var f=c;var i={"d":function(m,j,k){var l=j.getDate().toString();if(l.length<2){l="0"+l}return m.replace(new RegExp(k,"mg"),l)},"m":function(m,j,k){var l=(j.getMonth()+1).toString();if(l.length<2){l="0"+l}return m.replace(new RegExp(k,"mg"),l)},"Y":function(l,j,k){return l.replace(new RegExp(k,"mg"),j.getFullYear())},"H":function(m,j,k){var l=j.getHours().toString();if(l.length<2){l="0"+l}return m.replace(new RegExp(k,"mg"),l)},"i":function(m,j,k){var l=j.getMinutes().toString();if(l.length<2){l="0"+l}return m.replace(new RegExp(k,"mg"),l)},"s":function(m,j,k){var l=j.getSeconds().toString();if(l.length<2){l="0"+l}return m.replace(new RegExp(k,"mg"),l)}};function g(j){j=j||0;f.setDate(f.getDate()+j);return f}function h(k){if(typeof k!=="string"){k=""}for(var j in i){k=i[j].call(this,k,f,j)}return k}if(e){f=g(e);return h(d)}return h(d)},getUa:function(){var d=window.navigator.userAgent.toLocaleLowerCase(),c=!!d.match(/(ipad|iphone|mac)/i),e=!!d.match(/android/i),f=!!d.match(/MSIE/i);return{isApple:c,isAndroid:e,isWinPhone:f}},getPlatFormCode:function(){var d=this,c=d.getUa();if(c.isApple){c="ios-app"}else{if(c.isAndroid){c="andreod-app"}else{if(c.isWinPhone){c="win-app"}}}return c},getUrlParam:function(d,f){var d=d||document.location.href,e=new RegExp("(\\?|&)"+f+"=([^&]+)(&|$)","i"),c=d.match(e);if(c){return c[2]}return""},base64:function(){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var f=function(k){var h="";var r,p,n,q,o,m,l;var j=0;k=c(k);while(j<k.length){r=k.charCodeAt(j++);p=k.charCodeAt(j++);n=k.charCodeAt(j++);q=r>>2;o=((r&3)<<4)|(p>>4);m=((p&15)<<2)|(n>>6);l=n&63;if(isNaN(p)){m=l=64}else{if(isNaN(n)){l=64}}h=h+d.charAt(q)+d.charAt(o)+d.charAt(m)+d.charAt(l)}return h};var g=function(k){var h="";var r,p,n;var q,o,m,l;var j=0;k=k.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(j<k.length){q=d.indexOf(k.charAt(j++));o=d.indexOf(k.charAt(j++));m=d.indexOf(k.charAt(j++));l=d.indexOf(k.charAt(j++));r=(q<<2)|(o>>4);p=((o&15)<<4)|(m>>2);n=((m&3)<<6)|l;h=h+String.fromCharCode(r);if(m!=64){h=h+String.fromCharCode(p)}if(l!=64){h=h+String.fromCharCode(n)}}h=e(h);return h};function c(i){i=i.replace(/\r\n/g,"\n");
    var h="";for(var k=0;k<i.length;k++){var j=i.charCodeAt(k);if(j<128){h+=String.fromCharCode(j)}else{if((j>127)&&(j<2048)){h+=String.fromCharCode((j>>6)|192);h+=String.fromCharCode((j&63)|128)}else{h+=String.fromCharCode((j>>12)|224);h+=String.fromCharCode(((j>>6)&63)|128);h+=String.fromCharCode((j&63)|128)}}}return h}function e(h){var k="";var m=0;var o=0,n=0,l=0,j=0;while(m<h.length){o=h.charCodeAt(m);if(o<128){k+=String.fromCharCode(o);m++}else{if((o>191)&&(o<224)){l=h.charCodeAt(m+1);k+=String.fromCharCode(((o&31)<<6)|(l&63));m+=2}else{l=h.charCodeAt(m+1);j=h.charCodeAt(m+2);k+=String.fromCharCode(((o&15)<<12)|((l&63)<<6)|(j&63));m+=3}}}return k}return{encode:f,decode:g}}};b.Sales=(function(){var i=b.Dom,m=null,e="4000086666",r=b.Store.CommonStore.getInstance();var h=function(w,x,u){var v=r.getStore("SALES_OBJECT")&&r.getStore("SALES_OBJECT").value?r.getStore("SALES_OBJECT").value:null;if(v&&v.sid==w){m=v;if(!v.appurl||v.appurl.length<=0){i.getById("dl_app").hide()}else{i.getById("dl_app").show()}x&&x(v)}else{var t="/html5/ClientData/GetSalesInfo/"+w;b.Ajax.submitRequest({url:t,type:"POST",success:function(B){if(!JSON&&typeof JSON.parse!=="function"){return}var A={};B=JSON.parse(B);if(B.ServerCode==1){if(B.Data){for(var z in B.Data){A[z.toLowerCase()]=B.Data[z]}B.Data=A;var y=30;if(B.Data&&(B.Data.sales==="ydwxcs"||B.Data.sales==="1622")){y=5}if(!B.Data.appurl||B.Data.appurl.length<=0){i.getById("dl_app").hide()}else{i.getById("dl_app").show()}r.setStoreParam("SALES_OBJECT",B.Data,w,y);r.setStoreParam("SALESOBJ",B.Data,w,y)}m=B.Data;x&&x(B.Data)}else{u&&u(B)}},error:function(y){u&&u(y)}})}};var l=function(){var t=r.getStore("SALES_OBJECT")&&r.getStore("SALES_OBJECT").value?r.getStore("SALES_OBJECT").value:null;return m||t},k=function(t){r.setStoreParam("SALES",{sales:t})},f=function(t){r.setStoreParam("SALES",{sourceid:t})},c=function(t){r.setStoreParam("UNION",t)};var s=/400\d{3}\d{4}/i,q=/400\s+\d{3}\s+\d{4}/i,p=/400-\d{3}-\d{4}/i,d=b.Utils.getUa();function g(u){var t=l();if(t&&t.tel){if(typeof u==="string"){u=u.replace(s,t.tel);u=u.replace(q,t.teltitle);if(t.teltitle){u=u.replace(p,t.teltitle.split(" ").join("-"))}}else{u=t.teltitle?t.teltitle.split(" ").join("-"):u}}return u}function n(){var t=l();if(t){if(t.isseo){i.getByClass("module").show()}if(t.appurl){return t.appurl}else{var u=t.sid?t.sid:t.sales;return"/market/download.aspx?from="+u}}return null}function j(){var z="__hreftel__",y="__conttel__",A="__appaddress__",x,v=n();x=i.getByClass(z).elems;for(var u=0,t=x.length;u<t;u++){x[u].href=g(x[u].href)}x=i.getByClass(y).elems;for(var u=0,t=x.length;u<t;u++){x[u].innerHTML=g(x[u].innerHTML)}x=i.getByClass(A).elems;for(var u=0,t=x.length;u<t;u++){var w=v;if(!w){switch(true){case d.isApple:w=x[u].getAttribute("data-ios-app");break;case d.isAndroid:w=x[u].getAttribute("data-android-app");break;case d.isWinPhone:w=x[u].getAttribute("data-win-app");break}}if(w){x[u].setAttribute("href",w)}}}function o(){var x=b.Utils.getUrlParam(null,"sourceid"),u=b.Utils.getUrlParam(null,"sales");if((x&&+x>0)||(u&&u.length>0)){r.removeStore("APP_DOWNLOAD")}if(x||u){if(u){k(u)}if(x){f(x)}h(u||x,$.proxy(function(y){if(!y.appurl||y.appurl.length<=0){i.getById("dl_app").hide()}e=y&&y.tel?y.tel:"4000086666";j()}))}else{j()}if(typeof window["_Mkt_"]==="object"&&window["_Mkt_"].length>0){var v=0,t=window["_Mkt_"].length,w=null;for(;v<t;v++){w=window["_Mkt_"][v];typeof w.callback==="function"&&w.callback()}}}a["__union"].push({callback:o});return{warning404:e,replaceContent:j,replaceTel:g,getSales:l,getSalesObject:h,setUnion:c,setSourceId:f,setSales:k,updateSales:o}}());window.Mkt=b}(typeof window!=="undefined"?window:this));