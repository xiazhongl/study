/* generated @ 2017-06-29 11:37:46*/
!function(e){function o(t){if(n[t])return n[t].exports;var i=n[t]={exports:{},id:t,loaded:!1};return e[t].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var n={};return o.m=e,o.c=n,o.p="",o(0)}({0:function(e,o,n){e.exports=n(221)},2:function(e,o,n){"use strict";n(3),n(8),n(10),n(11),n(12),n(14)},3:function(e,o){},8:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function i(e){var o;e.jquery?(o=e,e=e[0]):o=$(e);var n={keyfrom:"deskdict.main"};_.each(e.attributes,function(e){var t=e.name;if(/^data-log-/.test(t)){var i=e.value;if(!i)return;var r=t.substring(9);if("^"==i){var a=o.parents("["+t+"]");if(0==a.length)return void(e.value="");i=a[0].getAttribute(t),e.value=i,n[r]=i}else n[r]=i}}),ydk.rlog(n)}Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=i;var r=n(9),a=t(r);$(document).on("click","[data-log-action]",function(){i(this)}),$(function(){a["default"].pageId&&setTimeout(function(){ydk.rlog({show:a["default"].pageId,version:new Date(a["default"].version).format("yyyy-MM-dd HH:mm:ss")})},100)})},9:function(e,o){"use strict";e.exports={version:1498707467994,debug:!1,platform:"win",serverInfoLine:"http://dict.youdao.com/infoline",swPathPrefix:"frame:mainFrame://"}},10:function(e,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e){return _.omit(e,function(e){return _.isFunction(e)})};ydk.extend({rlog:function(e){ydk._invoke("rlog",t(e),e)},getInfoLineData:function(e){ydk._invoke("getInfoLineData",e.data,e)},setKeyword:function(e){ydk._invoke("setKeyword",e,e)},getKeyword:function(e){ydk._invoke("getKeyword",e,e)},onKeywordChanged:function(e){ydk._on("onKeywordChanged",{},e)},onKeywordSubmit:function(e){ydk._on("onKeywordSubmit",{},e)},getDictResult:function(e){ydk._invoke("getDictResult",e.data,e)},getTranslateResult:function(e){ydk._invoke("getTranslateResult",e.data,e)},getSimsentResult:function(e){ydk._invoke("getSimsentResult",e.data,e)},onTriggerNativeEvent:function(e){ydk._on("onTriggerNativeEvent",{},e)},getSetting:function(e){ydk._invoke("getSetting",{},e)},saveSetting:function(e){ydk._invoke("saveSetting",{setting:e.setting},e)},closeSuggest:function(e){ydk._invoke("closeSuggest",{},e)},onNativeKeyDown:function(e){ydk._on("onNativeKeyDown",{},e)},copyToClipboard:function(e){ydk._invoke("copyToClipboard",{content:e.content},e)},onBroadcast:function(e){e._complete=function(e){"json"==e.data.format&&"string"==typeof e.data.data&&(e.data.data=JSON.parse(e.data.data))},ydk._on("onBroadcast",{},e)},broadcast:function(e){var o=e.data,t="string";"object"==("undefined"==typeof o?"undefined":n(o))&&(o=JSON.stringify(o),t="json"),ydk._invoke("broadcast",{type:e.type,format:t,data:o},e)},onHistory:function(e){ydk._on("onHistory",{},e)},setHasHistory:function(e){ydk._invoke("setHasHistory",{has:e.has},e)},onCornerPopupShow:function(e){ydk._on("onCornerPopupShow",{},e)},showCornerPopup:function(e){ydk._invoke("showCornerPopup",{},e)},onStrokeResult:function(e){ydk._on("onStrokeResult",{},e)},setStroke:function(e){ydk._invoke("setStroke",t(e),e)},closeWin:function(e){ydk._invoke("closeWin",{},e)},checkUpdate:function(e){ydk._invoke("checkUpdate",{},e)},setWinHeight:function(e){ydk._invoke("setWinHeight",t(e),e)},setWinSize:function(e){ydk._invoke("setWinSize",t(e),e)},onSettingChange:function(e){ydk._on("onSettingChange",{},e)},setTop:function(e){ydk._invoke("setTop",{},e)},checkWordBook:function(e){ydk._invoke("checkWordBook",{word:e.word,lang:e.lang},e)},removeFromWordBook:function(e){ydk._invoke("removeFromWordBook",t(e),e)},addToWordBook:function(e){ydk._invoke("addToWordBook",t(e),e)},updateToWordBook:function(e){ydk._invoke("updateToWordBook",t(e),e)},syncWordBook:function(e){ydk._invoke("syncWordBook",{},e)},queryWordBook:function(e){ydk._invoke("queryWordBook",t(e),e)},onWordBookChanged:function(e){ydk._on("onWordBookChanged",{},e)},queryWordBookCategory:function(e){ydk._invoke("queryWordBookCategory",t(e),e)},addWordBookCategory:function(e){ydk._invoke("addWordBookCategory",t(e),e)},updateWordBookCategory:function(e){ydk._invoke("updateWordBookCategory",t(e),e)},removeWordBookCategory:function(e){ydk._invoke("removeWordBookCategory",t(e),e)},importToWordBook:function(e){ydk._invoke("importToWordBook",t(e),e)},queryWordBookForReview:function(e){ydk._invoke("queryWordBookForReview",t(e),e)},reviewWordBook:function(e){ydk._invoke("reviewWordBook",t(e),e)},exportFromWordBook:function(e){ydk._invoke("exportFromWordBook",t(e),e)},cancleExportFromWordBook:function(e){ydk._invoke("cancleExportFromWordBook",t(e),e)},setWordBookCategory:function(e){ydk._invoke("setWordBookCategory",t(e),e)},setWordBookPlan:function(e){ydk._invoke("setWordBookPlan",t(e),e)},minimizeWin:function(){ydk._invoke("minimizeWin",{},{})},setDebug:function(e){ydk._invoke("setDebug",t(e),e)},setWinMove:function(e){ydk._invoke("setWinMove",{},e)},showWin:function(e){ydk._invoke("showWin",{},e)},getOcrModelList:function(e){ydk._invoke("getOcrModelList",{},e)},downloadOcrModel:function(e){ydk._invoke("downloadOcrModel",t(e),e)},removeOcrModel:function(e){e=t(e),ydk._invoke("removeOcrModel",e,e)},onDownloadProgress:function(e){ydk._on("onDownloadProgress",{},e)},downloadBrowserPlugin:function(e){e=t(e),ydk._invoke("downloadBrowserPlugin",e,e)},onPageLoadStart:function(e){ydk._on("onPageLoadStart",{},e)},saveCache:function(e){e=t(e),ydk._invoke("saveCache",t(e),e)},getCache:function(e){ydk._invoke("getCache",t(e),e)},removeCache:function(e){e=t(e),ydk._invoke("removeCache",e,e)},clearCache:function(e){e=t(e),ydk._invoke("clearCache",e,e)},openWin:function(e){e=t(e),ydk._invoke("openWin",e,e)},playNativeVoice:function(e){e=t(e),ydk._invoke("playNativeVoice",e,e)},stopNativeVoice:function(e){ydk._invoke("stopNativeVoice",{},{})},setQueryFocus:function(e){ydk._invoke("setQueryFocus",{},{})},setQuerySelectAll:function(e){ydk._invoke("setQuerySelectAll",{},{})},onLoginStatusChanged:function(e){ydk._on("onLoginStatusChanged",{},e)},onHotKey:function(e){ydk._on("onHotKey",{},e)},updateWinZOrder:function(e){ydk._invoke("updateWinZOrder",{},e)},getOfflineLexiconList:function(e){ydk._invoke("getOfflineLexiconList",{},e)},removeOfflineLexicon:function(e){ydk._invoke("removeOfflineLexicon",{},e)},isVip:function(e){ydk._on("isVip",{},e)},clearHistory:function(e){ydk._invoke("clearHistory",{},e)}})},11:function(e,o){"use strict";ydk.onPageVisibilityChange({success:function(e){e.hidden&&ydk.stopVoice({})}})},12:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var i=n(13),r=t(i),a=n(9),d=t(a);ydk.config({debug:!1,jsApiList:["checkJsApi","getClientInfo","getNetworkType","getOrientationStatus","onOrientationChange","share","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","onVoicePlayProgress","downloadImage","ajax","isLogin","login","getUserInfo","isVip","rlog","onPageVisibilityChange","onKeywordChanged","onNativeKeyDown","copyToClipboard","getNetworkType","onNetStatusChange","broadcast","onBroadcast","setHasHistory","onHistory","onCornerPopupShow","onStrokeResult","onSettingChange","onPageLoadStart","openWin","playNativeVoice","stopNativeVoice"]}),ydk.getClientInfo({success:function(e){d["default"].debug&&(e.debug=!0),ydk.client=e,r["default"].trigger("ydk.ready",e)}})},13:function(e,o){"use strict";var n={},t=function(e,o){for(var n=e.length,t=[],i=o;i<n;i++)t.push(e[i]);return t};e.exports={one:function(e,o){n[e]?n[e][0].push(o):n[e]=[[o],[]]},bind:function(e,o){n[e]?n[e][1].push(o):n[e]=[[],[o]]},trigger:function(e){var o=t(arguments,1),i=n[e];if(i){var r=this;$.each(i[0],function(e,n){n.apply(r,o)}),$.each(i[1],function(e,n){n.apply(r,o)}),i[0]=[]}}}},14:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(e.debug){var o=$('<a href="frame:mainFrame://ydk.html" class="_dev_flag"></a>');o.text(new Date(u["default"].version).format("yyyy-MM-dd HH:mm:ss")).appendTo(document.body)}}var r=n(13),a=t(r),d=n(9),u=t(d);a["default"].one("ydk.ready",i)},32:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),n(33),o["default"]=function(e){return{props:{filter:Function,data:Object},template:"<template-scope>"+e()+"</template-scope>",created:function(){var e=this,o=e._scope||e.$parent,n=e.data;if(e.$refs=o.$refs,e.$els=o.$els,n){e.filter&&(n=e.filter(n));var t=Object.create(o);t.$refs=Object.create(o.$refs),t.$els=Object.create(o.$els),t.$parent=o,t=_.extend(t,n),e._scope=t}else n=o;n&&(Vue["delete"](e,"data"),Vue["delete"](e,"filter"),e.$data=n)}}}},33:function(e,o){"use strict";var n=Vue.FragmentFactory,t=(Vue.util.remove,Vue.util.before,Vue.util.replace),i=(Vue.util.defineReactive,Vue.util.createAnchor),r=(Vue.util.extractContent,Vue.elementDirective("slot"));Vue.directive("if");Vue.elementDirective("template-scope",{priority:r.priority,bind:function(){var e=this;e._html=e.el.innerHTML,e.anchor=i("v-template-scope"),t(e.el,e.anchor),e.insert()},unbind:function(){var e=this;e.unlink&&e.unlink(),e.frag&&e.frag.destroy()},insert:function(){var e=this;e.factory=new n(e.vm,e._html);var o=e.vm._scope;e.frag=e.factory.create(e._host,o,e._frag),e.frag.before(e.anchor)}})},45:function(e,o){},50:function(e,o){"use strict";function n(e){var o=e,n={};if(!o)return n;o=o.replace(/^[?]{1}|[#]{1}.*$/g,"").split("&");for(var t=0,i=o.length;t<i;t++){var r=o[t].split("=");n[r[0]]=decodeURIComponent(r[1])}return n}Object.defineProperty(o,"__esModule",{value:!0});var t=n(window.location.search);o.get=n;o["default"]=t},221:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}n(2);var i=n(9),r=t(i),a=n(32),d=t(a),u=n(50),c=t(u),f=n(222),s=t(f),l=n(223),k=t(l);n(232),r["default"].pageId="error/index";var y=s["default"][c["default"].code]||"default";Vue.component("error",(0,d["default"])(k["default"][y])),new Vue({el:"#main",data:{code:y},template:"<div><error></error></div>"})},222:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={"-2":"ERR_FAILED","-3":"ERR_ABORTED","-7":"ERR_TIMED_OUT","-104":"ERR_CONNECTION_FAILED","-105":"ERR_NAME_NOT_RESOLVED","-106":"ERR_INTERNET_DISCONNECTED","-108":"ERR_ADDRESS_INVALID","-109":"ERR_ADDRESS_UNREACHABLE","-300":"ERR_INVALID_URL"}},223:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=n(224),r=t(i),a=n(228),d=t(a);o["default"]={ERR_NAME_NOT_RESOLVED:d["default"],ERR_INTERNET_DISCONNECTED:d["default"],ERR_CONNECTION_FAILED:d["default"],"default":r["default"]}},224:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=n(225),r=t(i);n(226),o["default"]=r["default"]},225:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+="<div>\r\n  \r\n</div>";return __p}},226:function(e,o){},228:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0}),n(45);var i=n(229),r=t(i);n(230),o["default"]=r["default"]},229:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="m-network-unreachable error-offline"><div class="inline-block vam tips">\r\n    <p>当前无网络连接</p>\r\n    <em>{{ code }}</em>\r\n  </div>\r\n</div>';return __p}},230:function(e,o){},232:function(e,o){}});