/* generated @ 2017-06-29 11:37:46*/
!function(t){function o(n){if(e[n])return e[n].exports;var i=e[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}({0:function(t,o,e){t.exports=e(340)},2:function(t,o,e){"use strict";e(3),e(8),e(10),e(11),e(12),e(14)},3:function(t,o){},8:function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){var o;t.jquery?(o=t,t=t[0]):o=$(t);var e={keyfrom:"deskdict.main"};_.each(t.attributes,function(t){var n=t.name;if(/^data-log-/.test(n)){var i=t.value;if(!i)return;var r=n.substring(9);if("^"==i){var a=o.parents("["+n+"]");if(0==a.length)return void(t.value="");i=a[0].getAttribute(n),t.value=i,e[r]=i}else e[r]=i}}),ydk.rlog(e)}Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=i;var r=e(9),a=n(r);$(document).on("click","[data-log-action]",function(){i(this)}),$(function(){a["default"].pageId&&setTimeout(function(){ydk.rlog({show:a["default"].pageId,version:new Date(a["default"].version).format("yyyy-MM-dd HH:mm:ss")})},100)})},9:function(t,o){"use strict";t.exports={version:1498707467994,debug:!1,platform:"win",serverInfoLine:"http://dict.youdao.com/infoline",swPathPrefix:"frame:mainFrame://"}},10:function(t,o){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(t){return _.omit(t,function(t){return _.isFunction(t)})};ydk.extend({rlog:function(t){ydk._invoke("rlog",n(t),t)},getInfoLineData:function(t){ydk._invoke("getInfoLineData",t.data,t)},setKeyword:function(t){ydk._invoke("setKeyword",t,t)},getKeyword:function(t){ydk._invoke("getKeyword",t,t)},onKeywordChanged:function(t){ydk._on("onKeywordChanged",{},t)},onKeywordSubmit:function(t){ydk._on("onKeywordSubmit",{},t)},getDictResult:function(t){ydk._invoke("getDictResult",t.data,t)},getTranslateResult:function(t){ydk._invoke("getTranslateResult",t.data,t)},getSimsentResult:function(t){ydk._invoke("getSimsentResult",t.data,t)},onTriggerNativeEvent:function(t){ydk._on("onTriggerNativeEvent",{},t)},getSetting:function(t){ydk._invoke("getSetting",{},t)},saveSetting:function(t){ydk._invoke("saveSetting",{setting:t.setting},t)},closeSuggest:function(t){ydk._invoke("closeSuggest",{},t)},onNativeKeyDown:function(t){ydk._on("onNativeKeyDown",{},t)},copyToClipboard:function(t){ydk._invoke("copyToClipboard",{content:t.content},t)},onBroadcast:function(t){t._complete=function(t){"json"==t.data.format&&"string"==typeof t.data.data&&(t.data.data=JSON.parse(t.data.data))},ydk._on("onBroadcast",{},t)},broadcast:function(t){var o=t.data,n="string";"object"==("undefined"==typeof o?"undefined":e(o))&&(o=JSON.stringify(o),n="json"),ydk._invoke("broadcast",{type:t.type,format:n,data:o},t)},onHistory:function(t){ydk._on("onHistory",{},t)},setHasHistory:function(t){ydk._invoke("setHasHistory",{has:t.has},t)},onCornerPopupShow:function(t){ydk._on("onCornerPopupShow",{},t)},showCornerPopup:function(t){ydk._invoke("showCornerPopup",{},t)},onStrokeResult:function(t){ydk._on("onStrokeResult",{},t)},setStroke:function(t){ydk._invoke("setStroke",n(t),t)},closeWin:function(t){ydk._invoke("closeWin",{},t)},checkUpdate:function(t){ydk._invoke("checkUpdate",{},t)},setWinHeight:function(t){ydk._invoke("setWinHeight",n(t),t)},setWinSize:function(t){ydk._invoke("setWinSize",n(t),t)},onSettingChange:function(t){ydk._on("onSettingChange",{},t)},setTop:function(t){ydk._invoke("setTop",{},t)},checkWordBook:function(t){ydk._invoke("checkWordBook",{word:t.word,lang:t.lang},t)},removeFromWordBook:function(t){ydk._invoke("removeFromWordBook",n(t),t)},addToWordBook:function(t){ydk._invoke("addToWordBook",n(t),t)},updateToWordBook:function(t){ydk._invoke("updateToWordBook",n(t),t)},syncWordBook:function(t){ydk._invoke("syncWordBook",{},t)},queryWordBook:function(t){ydk._invoke("queryWordBook",n(t),t)},onWordBookChanged:function(t){ydk._on("onWordBookChanged",{},t)},queryWordBookCategory:function(t){ydk._invoke("queryWordBookCategory",n(t),t)},addWordBookCategory:function(t){ydk._invoke("addWordBookCategory",n(t),t)},updateWordBookCategory:function(t){ydk._invoke("updateWordBookCategory",n(t),t)},removeWordBookCategory:function(t){ydk._invoke("removeWordBookCategory",n(t),t)},importToWordBook:function(t){ydk._invoke("importToWordBook",n(t),t)},queryWordBookForReview:function(t){ydk._invoke("queryWordBookForReview",n(t),t)},reviewWordBook:function(t){ydk._invoke("reviewWordBook",n(t),t)},exportFromWordBook:function(t){ydk._invoke("exportFromWordBook",n(t),t)},cancleExportFromWordBook:function(t){ydk._invoke("cancleExportFromWordBook",n(t),t)},setWordBookCategory:function(t){ydk._invoke("setWordBookCategory",n(t),t)},setWordBookPlan:function(t){ydk._invoke("setWordBookPlan",n(t),t)},minimizeWin:function(){ydk._invoke("minimizeWin",{},{})},setDebug:function(t){ydk._invoke("setDebug",n(t),t)},setWinMove:function(t){ydk._invoke("setWinMove",{},t)},showWin:function(t){ydk._invoke("showWin",{},t)},getOcrModelList:function(t){ydk._invoke("getOcrModelList",{},t)},downloadOcrModel:function(t){ydk._invoke("downloadOcrModel",n(t),t)},removeOcrModel:function(t){t=n(t),ydk._invoke("removeOcrModel",t,t)},onDownloadProgress:function(t){ydk._on("onDownloadProgress",{},t)},downloadBrowserPlugin:function(t){t=n(t),ydk._invoke("downloadBrowserPlugin",t,t)},onPageLoadStart:function(t){ydk._on("onPageLoadStart",{},t)},saveCache:function(t){t=n(t),ydk._invoke("saveCache",n(t),t)},getCache:function(t){ydk._invoke("getCache",n(t),t)},removeCache:function(t){t=n(t),ydk._invoke("removeCache",t,t)},clearCache:function(t){t=n(t),ydk._invoke("clearCache",t,t)},openWin:function(t){t=n(t),ydk._invoke("openWin",t,t)},playNativeVoice:function(t){t=n(t),ydk._invoke("playNativeVoice",t,t)},stopNativeVoice:function(t){ydk._invoke("stopNativeVoice",{},{})},setQueryFocus:function(t){ydk._invoke("setQueryFocus",{},{})},setQuerySelectAll:function(t){ydk._invoke("setQuerySelectAll",{},{})},onLoginStatusChanged:function(t){ydk._on("onLoginStatusChanged",{},t)},onHotKey:function(t){ydk._on("onHotKey",{},t)},updateWinZOrder:function(t){ydk._invoke("updateWinZOrder",{},t)},getOfflineLexiconList:function(t){ydk._invoke("getOfflineLexiconList",{},t)},removeOfflineLexicon:function(t){ydk._invoke("removeOfflineLexicon",{},t)},isVip:function(t){ydk._on("isVip",{},t)},clearHistory:function(t){ydk._invoke("clearHistory",{},t)}})},11:function(t,o){"use strict";ydk.onPageVisibilityChange({success:function(t){t.hidden&&ydk.stopVoice({})}})},12:function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=e(13),r=n(i),a=e(9),d=n(a);ydk.config({debug:!1,jsApiList:["checkJsApi","getClientInfo","getNetworkType","getOrientationStatus","onOrientationChange","share","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","onVoicePlayProgress","downloadImage","ajax","isLogin","login","getUserInfo","isVip","rlog","onPageVisibilityChange","onKeywordChanged","onNativeKeyDown","copyToClipboard","getNetworkType","onNetStatusChange","broadcast","onBroadcast","setHasHistory","onHistory","onCornerPopupShow","onStrokeResult","onSettingChange","onPageLoadStart","openWin","playNativeVoice","stopNativeVoice"]}),ydk.getClientInfo({success:function(t){d["default"].debug&&(t.debug=!0),ydk.client=t,r["default"].trigger("ydk.ready",t)}})},13:function(t,o){"use strict";var e={},n=function(t,o){for(var e=t.length,n=[],i=o;i<e;i++)n.push(t[i]);return n};t.exports={one:function(t,o){e[t]?e[t][0].push(o):e[t]=[[o],[]]},bind:function(t,o){e[t]?e[t][1].push(o):e[t]=[[],[o]]},trigger:function(t){var o=n(arguments,1),i=e[t];if(i){var r=this;$.each(i[0],function(t,e){e.apply(r,o)}),$.each(i[1],function(t,e){e.apply(r,o)}),i[0]=[]}}}},14:function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){if(t.debug){var o=$('<a href="frame:mainFrame://ydk.html" class="_dev_flag"></a>');o.text(new Date(c["default"].version).format("yyyy-MM-dd HH:mm:ss")).appendTo(document.body)}}var r=e(13),a=n(r),d=e(9),c=n(d);a["default"].one("ydk.ready",i)},51:function(t,o,e){"use strict";function n(t){if(t&&t.__esModule)return t;var o={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e]);return o["default"]=t,o}function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,o){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"local";switch(e){case"local":u["default"].trigger("modules/broadcast/"+t,o);break;case"frame":l.trigger("modules/broadcast/"+t,o);break;case"top":l.triggerTop("modules/broadcast/"+t,o);break;case"all":k.trigger("modules/broadcast/"+t,o)}}function a(t,o){u["default"].bind("modules/broadcast/"+t,o)}function d(t,o){u["default"].one("modules/broadcast/"+t,o)}Object.defineProperty(o,"__esModule",{value:!0}),o.emit=r,o.on=a,o.one=d;var c=e(13),u=i(c),s=e(52),l=n(s),f=e(53),k=n(f)},52:function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(){var t=l(arguments);d["default"].trigger.apply(this,t),u?f(JSON.stringify(t)):top.postMessage({_seq:++s,dictbroadcast:JSON.stringify(t)},"/")}function r(){var t=l(arguments);top!=c&&top.postMessage({_seq:++s,scope:"top",dictbroadcast:JSON.stringify(t)},"/")}Object.defineProperty(o,"__esModule",{value:!0}),o.trigger=i,o.triggerTop=r;var a=e(13),d=n(a),c=window,u=c==top,s=(new Date).getTime()+1e5*Math.random(),l=function(t){for(var o=t.length,e=new Array(o);o--;)e[o]=t[o];return e},f=function(t){for(var o=c.frames.length,e=0;e<o;e++)try{c.frames[e].postMessage({_seq:++s,dictbroadcast:t},"/")}catch(n){console.error(n)}};c.addEventListener("message",function(t){if(t.data.dictbroadcast){var o=c.frames.length;if(u){for(var e=!1,n=0;n<o;n++)if(t.source==c.frames[n]){e=!0;break}if(!e&&location.protocol!=t.source.location.protocol)return}else if(t.source!=top&&location.protocol!=t.source.location.protocol)return;try{d["default"].trigger.apply(this,JSON.parse(t.data.dictbroadcast))}catch(t){console.error(t)}"top"!=t.data.scope&&f(t.data.dictbroadcast)}},!1)},53:function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=e(13),r=n(i);o.trigger=function(t,o){ydk.broadcast({type:t,data:o})},$(function(){ydk.onBroadcast({success:function(t){r["default"].trigger.call(null,t.data.type,t.data.data)}})})},245:function(t,o){"use strict";function e(t){return"zh-CHS"==t||"zh-CHT"==t}Object.defineProperty(o,"__esModule",{value:!0}),o.isZH=e;o.map={auto:"自动检测语言","zh-CHS":"中文简体","zh-CHT":"中文繁体",en:"英文",de:"德文",ar:"阿拉伯文",et:"爱沙尼亚文",bg:"保加利亚文",pl:"波兰文",fa:"波斯文","bs-Latn":"波斯尼亚文",da:"丹麦文",ru:"俄文",fi:"芬兰文",fr:"法文",ko:"韩文",ht:"海地文",nl:"荷兰文",cs:"捷克文",ca:"加泰罗尼亚文",tlh:"克林贡文",hr:"克罗地亚文",lv:"拉脱维亚文",lt:"立陶宛文",ro:"罗马尼亚文",ms:"马来文",mt:"马耳他文",no:"挪威文",pt:"葡萄牙文",ja:"日文",sv:"瑞典文",sw:"斯瓦西里文",sl:"斯洛文尼亚文",th:"泰文",tr:"土耳其文",uk:"乌克兰文",cy:"威尔士文",he:"希伯来文",el:"希腊文",hu:"匈牙利文",es:"西班牙文",hi:"印地文",it:"意大利文",vi:"越南文",id:"印度尼西亚文"}},305:function(t,o,e){"use strict";function n(t){if(t&&t.__esModule)return t;var o={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e]);return o["default"]=t,o}function i(t){l.emit("dialog.open",t,f==top?"local":"top")}function r(){l.emit("dialog.close",null,f==top?"local":"top")}function a(t){l.emit("dialog.setSize",t,window==top?null:"top")}function d(t){var o="alert_"+_.now(),e=t.success,n=t.cancel,i=t.complete;"string"==typeof t&&(t={msg:t}),t.success=void 0,t.cancel=void 0,t.complete=void 0,t.callbackId=o,l.emit("dialog.alert",t,"top"),l.one(o,function(t){"success"==t.type?(e&&e(),i&&i()):(n&&n(),i&&i())})}function c(t){var o="confirm_"+_.now(),e=t.success,n=t.cancel,i=t.complete;"string"==typeof t&&(t={msg:t}),t.success=void 0,t.cancel=void 0,t.complete=void 0,t.callbackId=o,l.emit("dialog.confirm",t,"top"),l.one(o,function(t){"success"==t.type?(e&&e(),i&&i()):(n&&n(),i&&i())}),top.focus()}function u(){Vue.nextTick(function(){a({width:y.width(),height:k.height()})})}Object.defineProperty(o,"__esModule",{value:!0}),o.open=i,o.close=r,o.setSize=a,o.alert=d,o.confirm=c,o.autoSize=u;var s=e(51),l=n(s),f=window,k=$("html"),y=$(document)},340:function(t,o,e){"use strict";function n(t){if(t&&t.__esModule)return t;var o={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e]);return o["default"]=t,o}function i(t){return t&&t.__esModule?t:{"default":t}}e(2);var r=e(9),a=i(r),d=e(305),c=n(d);e(341);var u=e(343),s=i(u);e(344);var l=e(51),f=n(l);a["default"].pageId="setting/dialog/ocr",new Vue({el:"#main",template:(0,s["default"])(),data:{data:[]},ready:function(){var t=this;ydk.getOcrModelList({success:function(o){t.data=o.data,c.autoSize()}}),ydk.onDownloadProgress({success:function(t){var o=$("#tr-"+t.lang),e=o.find(".download");e.find(".cur").css({width:t.rate+"%"}),100==t.rate&&(e.hide(),o.find("a.delete").show(),f.emit("ocr.update",null,"frame"))}})},methods:{deleteOcr:function(t,o){ydk.removeOcrModel({lang:t});var e=$(o.target).parents("tr");e.find(".delete").hide(),e.find(".add").show(),f.emit("ocr.update",null,"frame")},downloadOcr:function(t,o){ydk.downloadOcrModel({lang:t}),$(o.target).parents("td").find(".download").show(),$(o.target).hide()},closeDialog:function(){c.close()}}})},341:function(t,o){},343:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<!-- 为屏幕取词添加语言 -->\r\n<div class="setting-dialog-ocr">\r\n\t<table>\r\n\t<!-- 英文不显示；已下载无更新不显示 -->\r\n\t\t<tr v-for="item in data" id="tr-{{item.lang}}" \r\n\t\t\tv-if="item.lang !== \'en\' && (!item.hasDownload || item.hasUpdate)">\r\n\t\t\t<td>{{item.lang|langFullCN}}</td>\r\n\t\t\t<td>{{(item.size/1024).toFixed(2)}}M</td>\r\n\t\t\t<td>\r\n\t\t\t\t<a class="update" \r\n\t\t\t\t\t@click="downloadOcr(item.lang , $event)" \r\n\t\t\t\t\tv-if="item.hasUpdate" \r\n\t\t\t\t\thref="javascript:;">更新</a>\r\n\t\t\t\t<a class="add" \r\n\t\t\t\t\t@click="downloadOcr(item.lang , $event)" \r\n\t\t\t\t\tv-if="!item.hasDownload" \r\n\t\t\t\t\thref="javascript:;">添加</a>\r\n\t\t\t\t<a class="delete" \r\n\t\t\t\t\t@click="deleteOcr(item.lang , $event)"\r\n\t\t\t\t\thref="javascript:;">删除</a>\r\n\t\t\t\t<div class="download">\r\n\t\t\t\t\t<div class="cur" style="width:0%"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n\t<div class="clear-fix">\r\n\t\t<a @click="closeDialog" class="btn g-btn-normal">取消</a>\r\n\t\t<a @click="closeDialog" class="btn g-btn-red">确定</a>\r\n\t</div>\r\n</div>';return __p}},344:function(t,o,e){"use strict";function n(t){if(t&&t.__esModule)return t;var o={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e]);return o["default"]=t,o}var i=e(245),r=n(i);Vue.filter("langFullCN",function(t){return r.map[t]})}});