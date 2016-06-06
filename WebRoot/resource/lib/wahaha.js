

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

 















// Underscore.js 1.7.0
// http://underscorejs.org
// (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &
// Editors
// Underscore may be freely distributed under the MIT license.

(function () {

// Baseline setup
// --------------

// Establish the root object, `window` in the browser, or `exports` on the
// server.
var root = this;

// Save the previous value of the `_` variable.
var previousUnderscore = root._;

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

// Create quick reference variables for speed access to core prototypes.
var 
push = ArrayProto.push,
slice = ArrayProto.slice,
concat = ArrayProto.concat,
toString = ObjProto.toString,
hasOwnProperty = ObjProto.hasOwnProperty;

// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var 
nativeIsArray = Array.isArray,
nativeKeys = Object.keys,
nativeBind = FuncProto.bind;

// Create a safe reference to the Underscore object for use below.
var _ = function (obj) {
 if (obj instanceof _) return obj;
 if (!(this instanceof _)) return new _(obj);
 this._wrapped = obj;
};

// Export the Underscore object for **Node.js**, with
// backwards-compatibility for the old `require()` API. If we're in
// the browser, add `_` as a global object.
if (typeof exports !== 'undefined') {
 if (typeof module !== 'undefined' && module.exports) {
     exports = module.exports = _;
 }
 exports._ = _;
} else {
 root._ = _;
}

// Current version.
_.VERSION = '1.7.0';

// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var createCallback = function (func, context, argCount) {
 if (context === void 0) return func;
 switch (argCount == null ? 3 : argCount) {
     case 1: return function (value) {
         return func.call(context, value);
     };
     case 2: return function (value, other) {
         return func.call(context, value, other);
     };
     case 3: return function (value, index, collection) {
         return func.call(context, value, index, collection);
     };
     case 4: return function (accumulator, value, index, collection) {
         return func.call(context, accumulator, value, index, collection);
     };
 }
 return function () {
     return func.apply(context, arguments);
 };
};

// A mostly-internal function to generate callbacks that can be applied
// to each element in a collection, returning the desired result — either
// identity, an arbitrary callback, a property matcher, or a property accessor.
_.iteratee = function (value, context, argCount) {
 if (value == null) return _.identity;
 if (_.isFunction(value)) return createCallback(value, context, argCount);
 if (_.isObject(value)) return _.matches(value);
 return _.property(value);
};

// Collection Functions
// --------------------

// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
_.each = _.forEach = function (obj, iteratee, context) {
 if (obj == null) return obj;
 iteratee = createCallback(iteratee, context);
 var i, length = obj.length;
 if (length === +length) {
     for (i = 0; i < length; i++) {
         iteratee(obj[i], i, obj);
     }
 } else {
     var keys = _.keys(obj);
     for (i = 0, length = keys.length; i < length; i++) {
         iteratee(obj[keys[i]], keys[i], obj);
     }
 }
 return obj;
};

// Return the results of applying the iteratee to each element.
_.map = _.collect = function (obj, iteratee, context) {
 if (obj == null) return [];
 iteratee = _.iteratee(iteratee, context);
 var keys = obj.length !== +obj.length && _.keys(obj),
 length = (keys || obj).length,
 results = Array(length),
 currentKey;
 for (var index = 0; index < length; index++) {
     currentKey = keys ? keys[index] : index;
     results[index] = iteratee(obj[currentKey], currentKey, obj);
 }
 return results;
};

var reduceError = 'Reduce of empty array with no initial value';

// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
_.reduce = _.foldl = _.inject = function (obj, iteratee, memo, context) {
 if (obj == null) obj = [];
 iteratee = createCallback(iteratee, context, 4);
 var keys = obj.length !== +obj.length && _.keys(obj),
 length = (keys || obj).length,
 index = 0, currentKey;
 if (arguments.length < 3) {
     if (!length) throw new TypeError(reduceError);
     memo = obj[keys ? keys[index++] : index++];
 }
 for (; index < length; index++) {
     currentKey = keys ? keys[index] : index;
     memo = iteratee(memo, obj[currentKey], currentKey, obj);
 }
 return memo;
};

// The right-associative version of reduce, also known as `foldr`.
_.reduceRight = _.foldr = function (obj, iteratee, memo, context) {
 if (obj == null) obj = [];
 iteratee = createCallback(iteratee, context, 4);
 var keys = obj.length !== +obj.length && _.keys(obj),
 index = (keys || obj).length,
 currentKey;
 if (arguments.length < 3) {
     if (!index) throw new TypeError(reduceError);
     memo = obj[keys ? keys[--index] : --index];
 }
 while (index--) {
     currentKey = keys ? keys[index] : index;
     memo = iteratee(memo, obj[currentKey], currentKey, obj);
 }
 return memo;
};

// Return the first value which passes a truth test. Aliased as `detect`.
_.find = _.detect = function (obj, predicate, context) {
 var result;
 predicate = _.iteratee(predicate, context);
 _.some(obj, function (value, index, list) {
     if (predicate(value, index, list)) {
         result = value;
         return true;
     }
 });
 return result;
};

// Return all the elements that pass a truth test.
// Aliased as `select`.
_.filter = _.select = function (obj, predicate, context) {
 var results = [];
 if (obj == null) return results;
 predicate = _.iteratee(predicate, context);
 _.each(obj, function (value, index, list) {
     if (predicate(value, index, list)) results.push(value);
 });
 return results;
};

// Return all the elements for which a truth test fails.
_.reject = function (obj, predicate, context) {
 return _.filter(obj, _.negate(_.iteratee(predicate)), context);
};

// Determine whether all of the elements match a truth test.
// Aliased as `all`.
_.every = _.all = function (obj, predicate, context) {
 if (obj == null) return true;
 predicate = _.iteratee(predicate, context);
 var keys = obj.length !== +obj.length && _.keys(obj),
 length = (keys || obj).length,
 index, currentKey;
 for (index = 0; index < length; index++) {
     currentKey = keys ? keys[index] : index;
     if (!predicate(obj[currentKey], currentKey, obj)) return false;
 }
 return true;
};

// Determine if at least one element in the object matches a truth test.
// Aliased as `any`.
_.some = _.any = function (obj, predicate, context) {
 if (obj == null) return false;
 predicate = _.iteratee(predicate, context);
 var keys = obj.length !== +obj.length && _.keys(obj),
 length = (keys || obj).length,
 index, currentKey;
 for (index = 0; index < length; index++) {
     currentKey = keys ? keys[index] : index;
     if (predicate(obj[currentKey], currentKey, obj)) return true;
 }
 return false;
};

// Determine if the array or object contains a given value (using `===`).
// Aliased as `include`.
_.contains = _.include = function (obj, target) {
 if (obj == null) return false;
 if (obj.length !== +obj.length) obj = _.values(obj);
 return _.indexOf(obj, target) >= 0;
};

// Invoke a method (with arguments) on every item in a collection.
_.invoke = function (obj, method) {
 var args = slice.call(arguments, 2);
 var isFunc = _.isFunction(method);
 return _.map(obj, function (value) {
     return (isFunc ? method : value[method]).apply(value, args);
 });
};

// Convenience version of a common use case of `map`: fetching a property.
_.pluck = function (obj, key) {
 return _.map(obj, _.property(key));
};

// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
_.where = function (obj, attrs) {
 return _.filter(obj, _.matches(attrs));
};

// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
_.findWhere = function (obj, attrs) {
 return _.find(obj, _.matches(attrs));
};

// Return the maximum element (or element-based computation).
_.max = function (obj, iteratee, context) {
 var result = -Infinity, lastComputed = -Infinity,
 value, computed;
 if (iteratee == null && obj != null) {
     obj = obj.length === +obj.length ? obj : _.values(obj);
     for (var i = 0, length = obj.length; i < length; i++) {
         value = obj[i];
         if (value > result) {
             result = value;
         }
     }
 } else {
     iteratee = _.iteratee(iteratee, context);
     _.each(obj, function (value, index, list) {
         computed = iteratee(value, index, list);
         if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
             result = value;
             lastComputed = computed;
         }
     });
 }
 return result;
};

// Return the minimum element (or element-based computation).
_.min = function (obj, iteratee, context) {
 var result = Infinity, lastComputed = Infinity,
 value, computed;
 if (iteratee == null && obj != null) {
     obj = obj.length === +obj.length ? obj : _.values(obj);
     for (var i = 0, length = obj.length; i < length; i++) {
         value = obj[i];
         if (value < result) {
             result = value;
         }
     }
 } else {
     iteratee = _.iteratee(iteratee, context);
     _.each(obj, function (value, index, list) {
         computed = iteratee(value, index, list);
         if (computed < lastComputed || computed === Infinity && result === Infinity) {
             result = value;
             lastComputed = computed;
         }
     });
 }
 return result;
};

// Shuffle a collection, using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
_.shuffle = function (obj) {
 var set = obj && obj.length === +obj.length ? obj : _.values(obj);
 var length = set.length;
 var shuffled = Array(length);
 for (var index = 0, rand; index < length; index++) {
     rand = _.random(0, index);
     if (rand !== index) shuffled[index] = shuffled[rand];
     shuffled[rand] = set[index];
 }
 return shuffled;
};

// Sample **n** random values from a collection.
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
_.sample = function (obj, n, guard) {
 if (n == null || guard) {
     if (obj.length !== +obj.length) obj = _.values(obj);
     return obj[_.random(obj.length - 1)];
 }
 return _.shuffle(obj).slice(0, Math.max(0, n));
};

// Sort the object's values by a criterion produced by an iteratee.
_.sortBy = function (obj, iteratee, context) {
 iteratee = _.iteratee(iteratee, context);
 return _.pluck(_.map(obj, function (value, index, list) {
     return {
         value: value,
         index: index,
         criteria: iteratee(value, index, list)
     };
 }).sort(function (left, right) {
     var a = left.criteria;
     var b = right.criteria;
     if (a !== b) {
         if (a > b || a === void 0) return 1;
         if (a < b || b === void 0) return -1;
     }
     return left.index - right.index;
 }), 'value');
};

// An internal function used for aggregate "group by" operations.
var group = function (behavior) {
 return function (obj, iteratee, context) {
     var result = {};
     iteratee = _.iteratee(iteratee, context);
     _.each(obj, function (value, index) {
         var key = iteratee(value, index, obj);
         behavior(result, value, key);
     });
     return result;
 };
};

// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
_.groupBy = group(function (result, value, key) {
 if (_.has(result, key)) result[key].push(value); else result[key] = [value];
});

// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
_.indexBy = group(function (result, value, key) {
 result[key] = value;
});

// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
_.countBy = group(function (result, value, key) {
 if (_.has(result, key)) result[key]++; else result[key] = 1;
});

// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
_.sortedIndex = function (array, obj, iteratee, context) {
 iteratee = _.iteratee(iteratee, context, 1);
 var value = iteratee(obj);
 var low = 0, high = array.length;
 while (low < high) {
     var mid = low + high >>> 1;
     if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
 }
 return low;
};

// Safely create a real, live array from anything iterable.
_.toArray = function (obj) {
 if (!obj) return [];
 if (_.isArray(obj)) return slice.call(obj);
 if (obj.length === +obj.length) return _.map(obj, _.identity);
 return _.values(obj);
};

// Return the number of elements in an object.
_.size = function (obj) {
 if (obj == null) return 0;
 return obj.length === +obj.length ? obj.length : _.keys(obj).length;
};

// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
_.partition = function (obj, predicate, context) {
 predicate = _.iteratee(predicate, context);
 var pass = [], fail = [];
 _.each(obj, function (value, key, obj) {
     (predicate(value, key, obj) ? pass : fail).push(value);
 });
 return [pass, fail];
};

// Array Functions
// ---------------

// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
_.first = _.head = _.take = function (array, n, guard) {
 if (array == null) return void 0;
 if (n == null || guard) return array[0];
 if (n < 0) return [];
 return slice.call(array, 0, n);
};

// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N. The **guard** check allows it to work with
// `_.map`.
_.initial = function (array, n, guard) {
 return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
};

// Get the last element of an array. Passing **n** will return the last N
// values in the array. The **guard** check allows it to work with `_.map`.
_.last = function (array, n, guard) {
 if (array == null) return void 0;
 if (n == null || guard) return array[array.length - 1];
 return slice.call(array, Math.max(array.length - n, 0));
};

// Returns everything but the first entry of the array. Aliased as `tail` and
// `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array. The **guard**
// check allows it to work with `_.map`.
_.rest = _.tail = _.drop = function (array, n, guard) {
 return slice.call(array, n == null || guard ? 1 : n);
};

// Trim out all falsy values from an array.
_.compact = function (array) {
 return _.filter(array, _.identity);
};

// Internal implementation of a recursive `flatten` function.
var flatten = function (input, shallow, strict, output) {
 if (shallow && _.every(input, _.isArray)) {
     return concat.apply(output, input);
 }
 for (var i = 0, length = input.length; i < length; i++) {
     var value = input[i];
     if (!_.isArray(value) && !_.isArguments(value)) {
         if (!strict) output.push(value);
     } else if (shallow) {
         push.apply(output, value);
     } else {
         flatten(value, shallow, strict, output);
     }
 }
 return output;
};

// Flatten out an array, either recursively (by default), or just one level.
_.flatten = function (array, shallow) {
 return flatten(array, shallow, false, []);
};

// Return a version of the array that does not contain the specified value(s).
_.without = function (array) {
 return _.difference(array, slice.call(arguments, 1));
};

// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// Aliased as `unique`.
_.uniq = _.unique = function (array, isSorted, iteratee, context) {
 if (array == null) return [];
 if (!_.isBoolean(isSorted)) {
     context = iteratee;
     iteratee = isSorted;
     isSorted = false;
 }
 if (iteratee != null) iteratee = _.iteratee(iteratee, context);
 var result = [];
 var seen = [];
 for (var i = 0, length = array.length; i < length; i++) {
     var value = array[i];
     if (isSorted) {
         if (!i || seen !== value) result.push(value);
         seen = value;
     } else if (iteratee) {
         var computed = iteratee(value, i, array);
         if (_.indexOf(seen, computed) < 0) {
             seen.push(computed);
             result.push(value);
         }
     } else if (_.indexOf(result, value) < 0) {
         result.push(value);
     }
 }
 return result;
};

// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
_.union = function () {
 return _.uniq(flatten(arguments, true, true, []));
};

// Produce an array that contains every item shared between all the
// passed-in arrays.
_.intersection = function (array) {
 if (array == null) return [];
 var result = [];
 var argsLength = arguments.length;
 for (var i = 0, length = array.length; i < length; i++) {
     var item = array[i];
     if (_.contains(result, item)) continue;
     for (var j = 1; j < argsLength; j++) {
         if (!_.contains(arguments[j], item)) break;
     }
     if (j === argsLength) result.push(item);
 }
 return result;
};

// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
_.difference = function (array) {
 var rest = flatten(slice.call(arguments, 1), true, true, []);
 return _.filter(array, function (value) {
     return !_.contains(rest, value);
 });
};

// Zip together multiple lists into a single array -- elements that share
// an index go together.
_.zip = function (array) {
 if (array == null) return [];
 var length = _.max(arguments, 'length').length;
 var results = Array(length);
 for (var i = 0; i < length; i++) {
     results[i] = _.pluck(arguments, i);
 }
 return results;
};

// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values.
_.object = function (list, values) {
 if (list == null) return {};
 var result = {};
 for (var i = 0, length = list.length; i < length; i++) {
     if (values) {
         result[list[i]] = values[i];
     } else {
         result[list[i][0]] = list[i][1];
     }
 }
 return result;
};

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
_.indexOf = function (array, item, isSorted) {
 if (array == null) return -1;
 var i = 0, length = array.length;
 if (isSorted) {
     if (typeof isSorted == 'number') {
         i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
     } else {
         i = _.sortedIndex(array, item);
         return array[i] === item ? i : -1;
     }
 }
 for (; i < length; i++) if (array[i] === item) return i;
 return -1;
};

_.lastIndexOf = function (array, item, from) {
 if (array == null) return -1;
 var idx = array.length;
 if (typeof from == 'number') {
     idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
 }
 while (--idx >= 0) if (array[idx] === item) return idx;
 return -1;
};

// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python
// documentation](http://docs.python.org/library/functions.html#range).
_.range = function (start, stop, step) {
 if (arguments.length <= 1) {
     stop = start || 0;
     start = 0;
 }
 step = step || 1;

 var length = Math.max(Math.ceil((stop - start) / step), 0);
 var range = Array(length);

 for (var idx = 0; idx < length; idx++, start += step) {
     range[idx] = start;
 }

 return range;
};

// Function (ahem) Functions
// ------------------

// Reusable constructor function for prototype setting.
var Ctor = function () { };

// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
_.bind = function (func, context) {
 var args, bound;
 if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
 if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
 args = slice.call(arguments, 2);
 bound = function () {
     if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
     Ctor.prototype = func.prototype;
     var self = new Ctor;
     Ctor.prototype = null;
     var result = func.apply(self, args.concat(slice.call(arguments)));
     if (_.isObject(result)) return result;
     return self;
 };
 return bound;
};

// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder, allowing any combination of arguments to be pre-filled.
_.partial = function (func) {
 var boundArgs = slice.call(arguments, 1);
 return function () {
     var position = 0;
     var args = boundArgs.slice();
     for (var i = 0, length = args.length; i < length; i++) {
         if (args[i] === _) args[i] = arguments[position++];
     }
     while (position < arguments.length) args.push(arguments[position++]);
     return func.apply(this, args);
 };
};

// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
_.bindAll = function (obj) {
 var i, length = arguments.length, key;
 if (length <= 1) throw new Error('bindAll must be passed function names');
 for (i = 1; i < length; i++) {
     key = arguments[i];
     obj[key] = _.bind(obj[key], obj);
 }
 return obj;
};

// Memoize an expensive function by storing its results.
_.memoize = function (func, hasher) {
 var memoize = function (key) {
     var cache = memoize.cache;
     var address = hasher ? hasher.apply(this, arguments) : key;
     if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
     return cache[address];
 };
 memoize.cache = {};
 return memoize;
};

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
_.delay = function (func, wait) {
 var args = slice.call(arguments, 2);
 return setTimeout(function () {
     return func.apply(null, args);
 }, wait);
};

// Defers a function, scheduling it to run after the current call stack has
// cleared.
_.defer = function (func) {
 return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
};

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_.throttle = function (func, wait, options) {
 var context, args, result;
 var timeout = null;
 var previous = 0;
 if (!options) options = {};
 var later = function () {
     previous = options.leading === false ? 0 : _.now();
     timeout = null;
     result = func.apply(context, args);
     if (!timeout) context = args = null;
 };
 return function () {
     var now = _.now();
     if (!previous && options.leading === false) previous = now;
     var remaining = wait - (now - previous);
     context = this;
     args = arguments;
     if (remaining <= 0 || remaining > wait) {
         clearTimeout(timeout);
         timeout = null;
         previous = now;
         result = func.apply(context, args);
         if (!timeout) context = args = null;
     } else if (!timeout && options.trailing !== false) {
         timeout = setTimeout(later, remaining);
     }
     return result;
 };
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
_.debounce = function (func, wait, immediate) {
 var timeout, args, context, timestamp, result;

 var later = function () {
     var last = _.now() - timestamp;

     if (last < wait && last > 0) {
         timeout = setTimeout(later, wait - last);
     } else {
         timeout = null;
         if (!immediate) {
             result = func.apply(context, args);
             if (!timeout) context = args = null;
         }
     }
 };

 return function () {
     context = this;
     args = arguments;
     timestamp = _.now();
     var callNow = immediate && !timeout;
     if (!timeout) timeout = setTimeout(later, wait);
     if (callNow) {
         result = func.apply(context, args);
         context = args = null;
     }

     return result;
 };
};

// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
_.wrap = function (func, wrapper) {
 return _.partial(wrapper, func);
};

// Returns a negated version of the passed-in predicate.
_.negate = function (predicate) {
 return function () {
     return !predicate.apply(this, arguments);
 };
};

// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
_.compose = function () {
 var args = arguments;
 var start = args.length - 1;
 return function () {
     var i = start;
     var result = args[start].apply(this, arguments);
     while (i--) result = args[i].call(this, result);
     return result;
 };
};

// Returns a function that will only be executed after being called N times.
_.after = function (times, func) {
 return function () {
     if (--times < 1) {
         return func.apply(this, arguments);
     }
 };
};

// Returns a function that will only be executed before being called N times.
_.before = function (times, func) {
 var memo;
 return function () {
     if (--times > 0) {
         memo = func.apply(this, arguments);
     } else {
         func = null;
     }
     return memo;
 };
};

// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
_.once = _.partial(_.before, 2);

// Object Functions
// ----------------

// Retrieve the names of an object's properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`
_.keys = function (obj) {
 if (!_.isObject(obj)) return [];
 if (nativeKeys) return nativeKeys(obj);
 var keys = [];
 for (var key in obj) if (_.has(obj, key)) keys.push(key);
 return keys;
};

// Retrieve the values of an object's properties.
_.values = function (obj) {
 var keys = _.keys(obj);
 var length = keys.length;
 var values = Array(length);
 for (var i = 0; i < length; i++) {
     values[i] = obj[keys[i]];
 }
 return values;
};

// Convert an object into a list of `[key, value]` pairs.
_.pairs = function (obj) {
 var keys = _.keys(obj);
 var length = keys.length;
 var pairs = Array(length);
 for (var i = 0; i < length; i++) {
     pairs[i] = [keys[i], obj[keys[i]]];
 }
 return pairs;
};

// Invert the keys and values of an object. The values must be serializable.
_.invert = function (obj) {
 var result = {};
 var keys = _.keys(obj);
 for (var i = 0, length = keys.length; i < length; i++) {
     result[obj[keys[i]]] = keys[i];
 }
 return result;
};

// Return a sorted list of the function names available on the object.
// Aliased as `methods`
_.functions = _.methods = function (obj) {
 var names = [];
 for (var key in obj) {
     if (_.isFunction(obj[key])) names.push(key);
 }
 return names.sort();
};

// Extend a given object with all the properties in passed-in object(s).
_.extend = function (obj) {
 if (!_.isObject(obj)) return obj;
 var source, prop;
 for (var i = 1, length = arguments.length; i < length; i++) {
     source = arguments[i];
     for (prop in source) {
         if (hasOwnProperty.call(source, prop)) {
             obj[prop] = source[prop];
         }
     }
 }
 return obj;
};

// Return a copy of the object only containing the whitelisted properties.
_.pick = function (obj, iteratee, context) {
 var result = {}, key;
 if (obj == null) return result;
 if (_.isFunction(iteratee)) {
     iteratee = createCallback(iteratee, context);
     for (key in obj) {
         var value = obj[key];
         if (iteratee(value, key, obj)) result[key] = value;
     }
 } else {
     var keys = concat.apply([], slice.call(arguments, 1));
     obj = new Object(obj);
     for (var i = 0, length = keys.length; i < length; i++) {
         key = keys[i];
         if (key in obj) result[key] = obj[key];
     }
 }
 return result;
};

// Return a copy of the object without the blacklisted properties.
_.omit = function (obj, iteratee, context) {
 if (_.isFunction(iteratee)) {
     iteratee = _.negate(iteratee);
 } else {
     var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
     iteratee = function (value, key) {
         return !_.contains(keys, key);
     };
 }
 return _.pick(obj, iteratee, context);
};

// Fill in a given object with default properties.
_.defaults = function (obj) {
 if (!_.isObject(obj)) return obj;
 for (var i = 1, length = arguments.length; i < length; i++) {
     var source = arguments[i];
     for (var prop in source) {
         if (obj[prop] === void 0) obj[prop] = source[prop];
     }
 }
 return obj;
};

// Create a (shallow-cloned) duplicate of an object.
_.clone = function (obj) {
 if (!_.isObject(obj)) return obj;
 return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
};

// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
_.tap = function (obj, interceptor) {
 interceptor(obj);
 return obj;
};

// Internal recursive comparison function for `isEqual`.
var eq = function (a, b, aStack, bStack) {
 // Identical objects are equal. `0 === -0`, but they aren't identical.
 // See the [Harmony `egal`
	// proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
 if (a === b) return a !== 0 || 1 / a === 1 / b;
 // A strict comparison is necessary because `null == undefined`.
 if (a == null || b == null) return a === b;
 // Unwrap any wrapped objects.
 if (a instanceof _) a = a._wrapped;
 if (b instanceof _) b = b._wrapped;
 // Compare `[[Class]]` names.
 var className = toString.call(a);
 if (className !== toString.call(b)) return false;
 switch (className) {
     // Strings, numbers, regular expressions, dates, and booleans are
		// compared by value.
     case '[object RegExp]':
         // RegExps are coerced to strings for comparison (Note: '' + /a/i
			// === '/a/i')
     case '[object String]':
         // Primitives and their corresponding object wrappers are
			// equivalent; thus, `"5"` is
         // equivalent to `new String("5")`.
         return '' + a === '' + b;
     case '[object Number]':
         // `NaN`s are equivalent, but non-reflexive.
         // Object(NaN) is equivalent to NaN
         if (+a !== +a) return +b !== +b;
         // An `egal` comparison is performed for other numeric values.
         return +a === 0 ? 1 / +a === 1 / b : +a === +b;
     case '[object Date]':
     case '[object Boolean]':
         // Coerce dates and booleans to numeric primitive values. Dates are
			// compared by their
         // millisecond representations. Note that invalid dates with
			// millisecond representations
         // of `NaN` are not equivalent.
         return +a === +b;
 }
 if (typeof a != 'object' || typeof b != 'object') return false;
 // Assume equality for cyclic structures. The algorithm for detecting cyclic
 // structures is adapted from ES 5.1 section 15.12.3, abstract operation
	// `JO`.
 var length = aStack.length;
 while (length--) {
     // Linear search. Performance is inversely proportional to the number of
     // unique nested structures.
     if (aStack[length] === a) return bStack[length] === b;
 }
 // Objects with different constructors are not equivalent, but `Object`s
 // from different frames are.
 var aCtor = a.constructor, bCtor = b.constructor;
 if (
aCtor !== bCtor &&
 // Handle Object.create(x) cases
'constructor' in a && 'constructor' in b &&
!(_.isFunction(aCtor) && aCtor instanceof aCtor &&
 _.isFunction(bCtor) && bCtor instanceof bCtor)
) {
     return false;
 }
 // Add the first object to the stack of traversed objects.
 aStack.push(a);
 bStack.push(b);
 var size, result;
 // Recursively compare objects and arrays.
 if (className === '[object Array]') {
     // Compare array lengths to determine if a deep comparison is necessary.
     size = a.length;
     result = size === b.length;
     if (result) {
         // Deep compare the contents, ignoring non-numeric properties.
         while (size--) {
             if (!(result = eq(a[size], b[size], aStack, bStack))) break;
         }
     }
 } else {
     // Deep compare objects.
     var keys = _.keys(a), key;
     size = keys.length;
     // Ensure that both objects contain the same number of properties before
		// comparing deep equality.
     result = _.keys(b).length === size;
     if (result) {
         while (size--) {
             // Deep compare each member
             key = keys[size];
             if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
         }
     }
 }
 // Remove the first object from the stack of traversed objects.
 aStack.pop();
 bStack.pop();
 return result;
};

// Perform a deep comparison to check if two objects are equal.
_.isEqual = function (a, b) {
 return eq(a, b, [], []);
};

// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
_.isEmpty = function (obj) {
 if (obj == null) return true;
 if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
 for (var key in obj) if (_.has(obj, key)) return false;
 return true;
};

// Is a given value a DOM element?
_.isElement = function (obj) {
 return !!(obj && obj.nodeType === 1);
};

// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
_.isArray = nativeIsArray || function (obj) {
 return toString.call(obj) === '[object Array]';
};

// Is a given variable an object?
_.isObject = function (obj) {
 var type = typeof obj;
 return type === 'function' || type === 'object' && !!obj;
};

// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate,
// isRegExp.
_.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (name) {
 _['is' + name] = function (obj) {
     return toString.call(obj) === '[object ' + name + ']';
 };
});

// Define a fallback version of the method in browsers (ahem, IE), where
// there isn't any inspectable "Arguments" type.
if (!_.isArguments(arguments)) {
 _.isArguments = function (obj) {
     return _.has(obj, 'callee');
 };
}

// Optimize `isFunction` if appropriate. Work around an IE 11 bug.
if (typeof /./ !== 'function') {
 _.isFunction = function (obj) {
     return typeof obj == 'function' || false;
 };
}

// Is a given object a finite number?
_.isFinite = function (obj) {
 return isFinite(obj) && !isNaN(parseFloat(obj));
};

// Is the given value `NaN`? (NaN is the only number which does not equal
// itself).
_.isNaN = function (obj) {
 return _.isNumber(obj) && obj !== +obj;
};

// Is a given value a boolean?
_.isBoolean = function (obj) {
 return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
};

// Is a given value equal to null?
_.isNull = function (obj) {
 return obj === null;
};

// Is a given variable undefined?
_.isUndefined = function (obj) {
 return obj === void 0;
};

// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
_.has = function (obj, key) {
 return obj != null && hasOwnProperty.call(obj, key);
};

// Utility Functions
// -----------------

// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
// previous owner. Returns a reference to the Underscore object.
_.noConflict = function () {
 root._ = previousUnderscore;
 return this;
};

// Keep the identity function around for default iteratees.
_.identity = function (value) {
 return value;
};

// Predicate-generating functions. Often useful outside of Underscore.
_.constant = function (value) {
 return function () {
     return value;
 };
};

_.noop = function () { };

_.property = function (key) {
 return function (obj) {
     return obj[key];
 };
};

// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
_.matches = function (attrs) {
 var pairs = _.pairs(attrs), length = pairs.length;
 return function (obj) {
     if (obj == null) return !length;
     obj = new Object(obj);
     for (var i = 0; i < length; i++) {
         var pair = pairs[i], key = pair[0];
         if (pair[1] !== obj[key] || !(key in obj)) return false;
     }
     return true;
 };
};

// Run a function **n** times.
_.times = function (n, iteratee, context) {
 var accum = Array(Math.max(0, n));
 iteratee = createCallback(iteratee, context, 1);
 for (var i = 0; i < n; i++) accum[i] = iteratee(i);
 return accum;
};

// Return a random integer between min and max (inclusive).
_.random = function (min, max) {
 if (max == null) {
     max = min;
     min = 0;
 }
 return min + Math.floor(Math.random() * (max - min + 1));
};

// A (possibly faster) way to get the current timestamp as an integer.
_.now = Date.now || function () {
 return new Date().getTime();
};

// List of HTML entities for escaping.
var escapeMap = {
 '&': '&amp;',
 '<': '&lt;',
 '>': '&gt;',
 '"': '&quot;',
 "'": '&#x27;',
 '`': '&#x60;'
};
var unescapeMap = _.invert(escapeMap);

// Functions for escaping and unescaping strings to/from HTML interpolation.
var createEscaper = function (map) {
 var escaper = function (match) {
     return map[match];
 };
 // Regexes for identifying a key that needs to be escaped
 var source = '(?:' + _.keys(map).join('|') + ')';
 var testRegexp = RegExp(source);
 var replaceRegexp = RegExp(source, 'g');
 return function (string) {
     string = string == null ? '' : '' + string;
     return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
 };
};
_.escape = createEscaper(escapeMap);
_.unescape = createEscaper(unescapeMap);

// If the value of the named `property` is a function then invoke it with the
// `object` as context; otherwise, return it.
_.result = function (object, property) {
 if (object == null) return void 0;
 var value = object[property];
 return _.isFunction(value) ? object[property]() : value;
};

// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
_.uniqueId = function (prefix) {
 var id = ++idCounter + '';
 return prefix ? prefix + id : id;
};

// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
_.templateSettings = {
 evaluate: /<%([\s\S]+?)%>/g,
 interpolate: /<%=([\s\S]+?)%>/g,
 escape: /<%-([\s\S]+?)%>/g
};

// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
 "'": "'",
 '\\': '\\',
 '\r': 'r',
 '\n': 'n',
 '\u2028': 'u2028',
 '\u2029': 'u2029'
};

var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

var escapeChar = function (match) {
 return '\\' + escapes[match];
};

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
_.template = function (text, settings, oldSettings) {
 if (!settings && oldSettings) settings = oldSettings;
 settings = _.defaults({}, settings, _.templateSettings);

 // Combine delimiters into one regular expression via alternation.
 var matcher = RegExp([
(settings.escape || noMatch).source,
(settings.interpolate || noMatch).source,
(settings.evaluate || noMatch).source
].join('|') + '|$', 'g');

 // Compile the template source, escaping string literals appropriately.
 var index = 0;
 var source = "__p+='";
 text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
     source += text.slice(index, offset).replace(escaper, escapeChar);
     index = offset + match.length;

     if (escape) {
         source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
     } else if (interpolate) {
         source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
     } else if (evaluate) {
         source += "';\n" + evaluate + "\n__p+='";
     }

     // Adobe VMs need the match returned to produce the correct offest.
     return match;
 });
 source += "';\n";

 // If a variable is not specified, place data values in local scope.
 if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

 source = "var __t,__p='',__j=Array.prototype.join," +
"print=function(){__p+=__j.call(arguments,'');};\n" +
source + 'return __p;\n';

 try {
     var render = new Function(settings.variable || 'obj', '_', source);
 } catch (e) {
     e.source = source;
     throw e;
 }

 var template = function (data) {
     return render.call(this, data, _);
 };

 // Provide the compiled source as a convenience for precompilation.
 var argument = settings.variable || 'obj';
 template.source = 'function(' + argument + '){\n' + source + '}';

 return template;
};

// Add a "chain" function. Start chaining a wrapped Underscore object.
_.chain = function (obj) {
 var instance = _(obj);
 instance._chain = true;
 return instance;
};

// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.

// Helper function to continue chaining intermediate results.
var result = function (obj) {
 return this._chain ? _(obj).chain() : obj;
};

// Add your own custom functions to the Underscore object.
_.mixin = function (obj) {
 _.each(_.functions(obj), function (name) {
     var func = _[name] = obj[name];
     _.prototype[name] = function () {
         var args = [this._wrapped];
         push.apply(args, arguments);
         return result.call(this, func.apply(_, args));
     };
 });
};

// Add all of the Underscore functions to the wrapper object.
_.mixin(_);

// Add all mutator Array functions to the wrapper.
_.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
 var method = ArrayProto[name];
 _.prototype[name] = function () {
     var obj = this._wrapped;
     method.apply(obj, arguments);
     if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
     return result.call(this, obj);
 };
});

// Add all accessor Array functions to the wrapper.
_.each(['concat', 'join', 'slice'], function (name) {
 var method = ArrayProto[name];
 _.prototype[name] = function () {
     return result.call(this, method.apply(this._wrapped, arguments));
 };
});

// Extracts the result from a wrapped and chained object.
_.prototype.value = function () {
 return this._wrapped;
};

// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
if (typeof define === 'function' && define.amd) {
 define('underscore', [], function () {
     return _;
 });
}
window._=_;
} .call(this));
 


// ///////////////////////////////////////////////////////////////////////////////////////
//
//
//
// Backbone
//
//
//
// ///////////////////////////////////////////////////////////////////////////////////////
// Backbone.js 1.1.2

// (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &
// Editors
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org

(function(root, factory) {

// Set up Backbone appropriately for the environment. Start with AMD.
if (typeof define === 'function' && define.amd) {
define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
// Export global even in AMD case in case this script is loaded with
// others that may still expect a global Backbone.
root.Backbone = factory(root, exports, _, $);
});

// Next for Node.js or CommonJS. jQuery may not be needed as a module.
} else if (typeof exports !== 'undefined') {
var _ = require('underscore');
factory(root, exports, _);

// Finally, as a browser global.
} else {
root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
}

}(this, function(root, Backbone, _, $) {

// Initial Setup
// -------------

// Save the previous value of the `Backbone` variable, so that it can be
// restored later on, if `noConflict` is used.
var previousBackbone = root.Backbone;

// Create local references to array methods we'll want to use later.
var array = [];
var push = array.push;
var slice = array.slice;
var splice = array.splice;

// Current version of the library. Keep in sync with `package.json`.
Backbone.VERSION = '1.1.2';

// For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
// the `$` variable.
Backbone.$ = $;

// Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
// to its previous owner. Returns a reference to this Backbone object.
Backbone.noConflict = function() {
root.Backbone = previousBackbone;
return this;
};

// Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
// will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method`
// parameter and
// set a `X-Http-Method-Override` header.
Backbone.emulateHTTP = false;

// Turn on `emulateJSON` to support legacy servers that can't deal with direct
// `application/json` requests ... will encode the body as
// `application/x-www-form-urlencoded` instead and will send the model in a
// form param named `model`.
Backbone.emulateJSON = false;

// Backbone.Events
// ---------------

// A module that can be mixed in to *any object* in order to provide it with
// custom events. You may bind with `on` or remove with `off` callback
// functions to an event; `trigger`-ing an event fires all callbacks in
// succession.
//
// var object = {};
// _.extend(object, Backbone.Events);
// object.on('expand', function(){ alert('expanded'); });
// object.trigger('expand');
//
var Events = Backbone.Events = {

// Bind an event to a `callback` function. Passing `"all"` will bind
// the callback to all events fired.
on: function(name, callback, context) {
if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
this._events || (this._events = {});
var events = this._events[name] || (this._events[name] = []);
events.push({callback: callback, context: context, ctx: context || this});
return this;
},

// Bind an event to only be triggered a single time. After the first time
// the callback is invoked, it will be removed.
once: function(name, callback, context) {
if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
var self = this;
var once = _.once(function() {
 self.off(name, once);
 callback.apply(this, arguments);
});
once._callback = callback;
return this.on(name, once, context);
},

// Remove one or many callbacks. If `context` is null, removes all
// callbacks with that function. If `callback` is null, removes all
// callbacks for the event. If `name` is null, removes all bound
// callbacks for all events.
off: function(name, callback, context) {
var retain, ev, events, names, i, l, j, k;
if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
if (!name && !callback && !context) {
 this._events = void 0;
 return this;
}
names = name ? [name] : _.keys(this._events);
for (i = 0, l = names.length; i < l; i++) {
 name = names[i];
 if (events = this._events[name]) {
   this._events[name] = retain = [];
   if (callback || context) {
     for (j = 0, k = events.length; j < k; j++) {
       ev = events[j];
       if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
           (context && context !== ev.context)) {
         retain.push(ev);
       }
     }
   }
   if (!retain.length) delete this._events[name];
 }
}

return this;
},

// Trigger one or many events, firing all bound callbacks. Callbacks are
// passed the same arguments as `trigger` is, apart from the event name
// (unless you're listening on `"all"`, which will cause your callback to
// receive the true name of the event as the first argument).
trigger: function(name) {
if (!this._events) return this;
var args = slice.call(arguments, 1);
if (!eventsApi(this, 'trigger', name, args)) return this;
var events = this._events[name];
var allEvents = this._events.all;
if (events) triggerEvents(events, args);
if (allEvents) triggerEvents(allEvents, arguments);
return this;
},

// Tell this object to stop listening to either specific events ... or
// to every object it's currently listening to.
stopListening: function(obj, name, callback) {
var listeningTo = this._listeningTo;
if (!listeningTo) return this;
var remove = !name && !callback;
if (!callback && typeof name === 'object') callback = this;
if (obj) (listeningTo = {})[obj._listenId] = obj;
for (var id in listeningTo) {
 obj = listeningTo[id];
 obj.off(name, callback, this);
 if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
}
return this;
}

};

// Regular expression used to split event strings.
var eventSplitter = /\s+/;

// Implement fancy features of the Events API such as multiple event
// names `"change blur"` and jQuery-style event maps `{change: action}`
// in terms of the existing API.
var eventsApi = function(obj, action, name, rest) {
if (!name) return true;

// Handle event maps.
if (typeof name === 'object') {
for (var key in name) {
 obj[action].apply(obj, [key, name[key]].concat(rest));
}
return false;
}

// Handle space separated event names.
if (eventSplitter.test(name)) {
var names = name.split(eventSplitter);
for (var i = 0, l = names.length; i < l; i++) {
 obj[action].apply(obj, [names[i]].concat(rest));
}
return false;
}

return true;
};

// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy (most internal
// Backbone events have 3 arguments).
var triggerEvents = function(events, args) {
var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
switch (args.length) {
case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
}
};

var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

// Inversion-of-control versions of `on` and `once`. Tell *this* object to
// listen to an event in another object ... keeping track of what it's
// listening to.
_.each(listenMethods, function(implementation, method) {
Events[method] = function(obj, name, callback) {
var listeningTo = this._listeningTo || (this._listeningTo = {});
var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
listeningTo[id] = obj;
if (!callback && typeof name === 'object') callback = this;
obj[implementation](name, callback, this);
return this;
};
});

// Aliases for backwards compatibility.
Events.bind   = Events.on;
Events.unbind = Events.off;

// Allow the `Backbone` object to serve as a global event bus, for folks who
// want global "pubsub" in a convenient place.
_.extend(Backbone, Events);

// Backbone.Model
// --------------

// Backbone **Models** are the basic data object in the framework --
// frequently representing a row in a table in a database on your server.
// A discrete chunk of data and a bunch of useful, related methods for
// performing computations and transformations on that data.

// Create a new model with the specified attributes. A client id (`cid`)
// is automatically generated and assigned for you.
var Model = Backbone.Model = function(attributes, options) {
var attrs = attributes || {};
options || (options = {});
this.cid = _.uniqueId('c');
this.attributes = {};
if (options.collection) this.collection = options.collection;
if (options.parse) attrs = this.parse(attrs, options) || {};
attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
this.set(attrs, options);
this.changed = {};
this.initialize.apply(this, arguments);
};

// Attach all inheritable methods to the Model prototype.
_.extend(Model.prototype, Events, {

// A hash of attributes whose current and previous value differ.
changed: null,

// The value returned during the last failed validation.
validationError: null,

// The default name for the JSON `id` attribute is `"id"`. MongoDB and
// CouchDB users may want to set this to `"_id"`.
idAttribute: 'id',

// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize: function(){},

// Return a copy of the model's `attributes` object.
toJSON: function(options) {
return _.clone(this.attributes);
},

// Proxy `Backbone.sync` by default -- but override this if you need
// custom syncing semantics for *this* particular model.
sync: function() {
return Backbone.sync.apply(this, arguments);
},

// Get the value of an attribute.
get: function(attr) {
return this.attributes[attr];
},

// Get the HTML-escaped value of an attribute.
escape: function(attr) {
return _.escape(this.get(attr));
},

// Returns `true` if the attribute contains a value that is not null
// or undefined.
has: function(attr) {
return this.get(attr) != null;
},

// Set a hash of model attributes on the object, firing `"change"`. This is
// the core primitive operation of a model, updating the data and notifying
// anyone who needs to know about the change in state. The heart of the beast.
set: function(key, val, options) {
var attr, attrs, unset, changes, silent, changing, prev, current;
if (key == null) return this;

// Handle both `"key", value` and `{key: value}` -style arguments.
if (typeof key === 'object') {
 attrs = key;
 options = val;
} else {
 (attrs = {})[key] = val;
}

options || (options = {});

// Run validation.
if (!this._validate(attrs, options)) return false;

// Extract attributes and options.
unset           = options.unset;
silent          = options.silent;
changes         = [];
changing        = this._changing;
this._changing  = true;

if (!changing) {
 this._previousAttributes = _.clone(this.attributes);
 this.changed = {};
}
current = this.attributes, prev = this._previousAttributes;

// Check for changes of `id`.
if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

// For each `set` attribute, update or delete the current value.
for (attr in attrs) {
 val = attrs[attr];
 if (!_.isEqual(current[attr], val)) changes.push(attr);
 if (!_.isEqual(prev[attr], val)) {
   this.changed[attr] = val;
 } else {
   delete this.changed[attr];
 }
 unset ? delete current[attr] : current[attr] = val;
}

// Trigger all relevant attribute changes.
if (!silent) {
 if (changes.length) this._pending = options;
 for (var i = 0, l = changes.length; i < l; i++) {
   this.trigger('change:' + changes[i], this, current[changes[i]], options);
 }
}

// You might be wondering why there's a `while` loop here. Changes can
// be recursively nested within `"change"` events.
if (changing) return this;
if (!silent) {
 while (this._pending) {
   options = this._pending;
   this._pending = false;
   this.trigger('change', this, options);
 }
}
this._pending = false;
this._changing = false;
return this;
},

// Remove an attribute from the model, firing `"change"`. `unset` is a noop
// if the attribute doesn't exist.
unset: function(attr, options) {
return this.set(attr, void 0, _.extend({}, options, {unset: true}));
},

// Clear all attributes on the model, firing `"change"`.
clear: function(options) {
var attrs = {};
for (var key in this.attributes) attrs[key] = void 0;
return this.set(attrs, _.extend({}, options, {unset: true}));
},

// Determine if the model has changed since the last `"change"` event.
// If you specify an attribute name, determine if that attribute has changed.
hasChanged: function(attr) {
if (attr == null) return !_.isEmpty(this.changed);
return _.has(this.changed, attr);
},

// Return an object containing all the attributes that have changed, or
// false if there are no changed attributes. Useful for determining what
// parts of a view need to be updated and/or what attributes need to be
// persisted to the server. Unset attributes will be set to undefined.
// You can also pass an attributes object to diff against the model,
// determining if there *would be* a change.
changedAttributes: function(diff) {
if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
var val, changed = false;
var old = this._changing ? this._previousAttributes : this.attributes;
for (var attr in diff) {
 if (_.isEqual(old[attr], (val = diff[attr]))) continue;
 (changed || (changed = {}))[attr] = val;
}
return changed;
},

// Get the previous value of an attribute, recorded at the time the last
// `"change"` event was fired.
previous: function(attr) {
if (attr == null || !this._previousAttributes) return null;
return this._previousAttributes[attr];
},

// Get all of the attributes of the model at the time of the previous
// `"change"` event.
previousAttributes: function() {
return _.clone(this._previousAttributes);
},

// Fetch the model from the server. If the server's representation of the
// model differs from its current attributes, they will be overridden,
// triggering a `"change"` event.
fetch: function(options) {
options = options ? _.clone(options) : {};
if (options.parse === void 0) options.parse = true;
var model = this;
var success = options.success;
options.success = function(resp) {
 if (!model.set(model.parse(resp, options), options)) return false;
 if (success) success(model, resp, options);
 model.trigger('sync', model, resp, options);
};
wrapError(this, options);
return this.sync('read', this, options);
},

// Set a hash of model attributes, and sync the model to the server.
// If the server returns an attributes hash that differs, the model's
// state will be `set` again.
save: function(key, val, options) {
var attrs, method, xhr, attributes = this.attributes;

// Handle both `"key", value` and `{key: value}` -style arguments.
if (key == null || typeof key === 'object') {
 attrs = key;
 options = val;
} else {
 (attrs = {})[key] = val;
}

options = _.extend({validate: true}, options);

// If we're not waiting and attributes exist, save acts as
// `set(attr).save(null, opts)` with validation. Otherwise, check if
// the model will be valid when the attributes, if any, are set.
if (attrs && !options.wait) {
 if (!this.set(attrs, options)) return false;
} else {
 if (!this._validate(attrs, options)) return false;
}

// Set temporary attributes if `{wait: true}`.
if (attrs && options.wait) {
 this.attributes = _.extend({}, attributes, attrs);
}

// After a successful server-side save, the client is (optionally)
// updated with the server-side state.
if (options.parse === void 0) options.parse = true;
var model = this;
var success = options.success;
options.success = function(resp) {
 // Ensure attributes are restored during synchronous saves.
 model.attributes = attributes;
 var serverAttrs = model.parse(resp, options);
 if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
 if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
   return false;
 }
 if (success) success(model, resp, options);
 model.trigger('sync', model, resp, options);
};
wrapError(this, options);

method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
if (method === 'patch') options.attrs = attrs;
xhr = this.sync(method, this, options);

// Restore attributes.
if (attrs && options.wait) this.attributes = attributes;

return xhr;
},

// Destroy this model on the server if it was already persisted.
// Optimistically removes the model from its collection, if it has one.
// If `wait: true` is passed, waits for the server to respond before removal.
destroy: function(options) {
options = options ? _.clone(options) : {};
var model = this;
var success = options.success;

var destroy = function() {
 model.trigger('destroy', model, model.collection, options);
};

options.success = function(resp) {
 if (options.wait || model.isNew()) destroy();
 if (success) success(model, resp, options);
 if (!model.isNew()) model.trigger('sync', model, resp, options);
};

if (this.isNew()) {
 options.success();
 return false;
}
wrapError(this, options);

var xhr = this.sync('delete', this, options);
if (!options.wait) destroy();
return xhr;
},

// Default URL for the model's representation on the server -- if you're
// using Backbone's restful methods, override this to change the endpoint
// that will be called.
url: function() {
var base =
 _.result(this, 'urlRoot') ||
 _.result(this.collection, 'url') ||
 urlError();
if (this.isNew()) return base;
return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
},

// **parse** converts a response into the hash of attributes to be `set` on
// the model. The default implementation is just to pass the response along.
parse: function(resp, options) {
return resp;
},

// Create a new model with identical attributes to this one.
clone: function() {
return new this.constructor(this.attributes);
},

// A model is new if it has never been saved to the server, and lacks an id.
isNew: function() {
return !this.has(this.idAttribute);
},

// Check if the model is currently in a valid state.
isValid: function(options) {
return this._validate({}, _.extend(options || {}, { validate: true }));
},

// Run validation against the next complete set of model attributes,
// returning `true` if all is well. Otherwise, fire an `"invalid"` event.
_validate: function(attrs, options) {
if (!options.validate || !this.validate) return true;
attrs = _.extend({}, this.attributes, attrs);
var error = this.validationError = this.validate(attrs, options) || null;
if (!error) return true;
this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
return false;
}

});

// Underscore methods that we want to implement on the Model.
var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

// Mix in each Underscore method as a proxy to `Model#attributes`.
_.each(modelMethods, function(method) {
Model.prototype[method] = function() {
var args = slice.call(arguments);
args.unshift(this.attributes);
return _[method].apply(_, args);
};
});

// Backbone.Collection
// -------------------

// If models tend to represent a single row of data, a Backbone Collection is
// more analagous to a table full of data ... or a small slice or page of that
// table, or a collection of rows that belong together for a particular reason
// -- all of the messages in this particular folder, all of the documents
// belonging to this particular author, and so on. Collections maintain
// indexes of their models, both in order, and for lookup by `id`.

// Create a new **Collection**, perhaps to contain a specific type of `model`.
// If a `comparator` is specified, the Collection will maintain
// its models in sort order, as they're added and removed.
var Collection = Backbone.Collection = function(models, options) {
options || (options = {});
if (options.model) this.model = options.model;
if (options.comparator !== void 0) this.comparator = options.comparator;
this._reset();
this.initialize.apply(this, arguments);
if (models) this.reset(models, _.extend({silent: true}, options));
};

// Default options for `Collection#set`.
var setOptions = {add: true, remove: true, merge: true};
var addOptions = {add: true, remove: false};

// Define the Collection's inheritable methods.
_.extend(Collection.prototype, Events, {

// The default model for a collection is just a **Backbone.Model**.
// This should be overridden in most cases.
model: Model,

// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize: function(){},

// The JSON representation of a Collection is an array of the
// models' attributes.
toJSON: function(options) {
return this.map(function(model){ return model.toJSON(options); });
},

// Proxy `Backbone.sync` by default.
sync: function() {
return Backbone.sync.apply(this, arguments);
},

// Add a model, or list of models to the set.
add: function(models, options) {
return this.set(models, _.extend({merge: false}, options, addOptions));
},

// Remove a model, or a list of models from the set.
remove: function(models, options) {
var singular = !_.isArray(models);
models = singular ? [models] : _.clone(models);
options || (options = {});
var i, l, index, model;
for (i = 0, l = models.length; i < l; i++) {
 model = models[i] = this.get(models[i]);
 if (!model) continue;
 delete this._byId[model.id];
 delete this._byId[model.cid];
 index = this.indexOf(model);
 this.models.splice(index, 1);
 this.length--;
 if (!options.silent) {
   options.index = index;
   model.trigger('remove', model, this, options);
 }
 this._removeReference(model, options);
}
return singular ? models[0] : models;
},

// Update a collection by `set`-ing a new list of models, adding new ones,
// removing models that are no longer present, and merging models that
// already exist in the collection, as necessary. Similar to **Model#set**,
// the core operation for updating the data contained by the collection.
set: function(models, options) {
options = _.defaults({}, options, setOptions);
if (options.parse) models = this.parse(models, options);
var singular = !_.isArray(models);
models = singular ? (models ? [models] : []) : _.clone(models);
var i, l, id, model, attrs, existing, sort;
var at = options.at;
var targetModel = this.model;
var sortable = this.comparator && (at == null) && options.sort !== false;
var sortAttr = _.isString(this.comparator) ? this.comparator : null;
var toAdd = [], toRemove = [], modelMap = {};
var add = options.add, merge = options.merge, remove = options.remove;
var order = !sortable && add && remove ? [] : false;

// Turn bare objects into model references, and prevent invalid models
// from being added.
for (i = 0, l = models.length; i < l; i++) {
 attrs = models[i] || {};
 if (attrs instanceof Model) {
   id = model = attrs;
 } else {
   id = attrs[targetModel.prototype.idAttribute || 'id'];
 }

 // If a duplicate is found, prevent it from being added and
 // optionally merge it into the existing model.
 if (existing = this.get(id)) {
   if (remove) modelMap[existing.cid] = true;
   if (merge) {
     attrs = attrs === model ? model.attributes : attrs;
     if (options.parse) attrs = existing.parse(attrs, options);
     existing.set(attrs, options);
     if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
   }
   models[i] = existing;

 // If this is a new, valid model, push it to the `toAdd` list.
 } else if (add) {
   model = models[i] = this._prepareModel(attrs, options);
   if (!model) continue;
   toAdd.push(model);
   this._addReference(model, options);
 }

 // Do not add multiple models with the same `id`.
 model = existing || model;
 if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
 modelMap[model.id] = true;
}

// Remove nonexistent models if appropriate.
if (remove) {
 for (i = 0, l = this.length; i < l; ++i) {
   if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
 }
 if (toRemove.length) this.remove(toRemove, options);
}

// See if sorting is needed, update `length` and splice in new models.
if (toAdd.length || (order && order.length)) {
 if (sortable) sort = true;
 this.length += toAdd.length;
 if (at != null) {
   for (i = 0, l = toAdd.length; i < l; i++) {
     this.models.splice(at + i, 0, toAdd[i]);
   }
 } else {
   if (order) this.models.length = 0;
   var orderedModels = order || toAdd;
   for (i = 0, l = orderedModels.length; i < l; i++) {
     this.models.push(orderedModels[i]);
   }
 }
}

// Silently sort the collection if appropriate.
if (sort) this.sort({silent: true});

// Unless silenced, it's time to fire all appropriate add/sort events.
if (!options.silent) {
 for (i = 0, l = toAdd.length; i < l; i++) {
   (model = toAdd[i]).trigger('add', model, this, options);
 }
 if (sort || (order && order.length)) this.trigger('sort', this, options);
}

// Return the added (or merged) model (or models).
return singular ? models[0] : models;
},

// When you have more items than you want to add or remove individually,
// you can reset the entire set with a new list of models, without firing
// any granular `add` or `remove` events. Fires `reset` when finished.
// Useful for bulk operations and optimizations.
reset: function(models, options) {
options || (options = {});
for (var i = 0, l = this.models.length; i < l; i++) {
 this._removeReference(this.models[i], options);
}
options.previousModels = this.models;
this._reset();
models = this.add(models, _.extend({silent: true}, options));
if (!options.silent) this.trigger('reset', this, options);
return models;
},

// Add a model to the end of the collection.
push: function(model, options) {
return this.add(model, _.extend({at: this.length}, options));
},

// Remove a model from the end of the collection.
pop: function(options) {
var model = this.at(this.length - 1);
this.remove(model, options);
return model;
},

// Add a model to the beginning of the collection.
unshift: function(model, options) {
return this.add(model, _.extend({at: 0}, options));
},

// Remove a model from the beginning of the collection.
shift: function(options) {
var model = this.at(0);
this.remove(model, options);
return model;
},

// Slice out a sub-array of models from the collection.
slice: function() {
return slice.apply(this.models, arguments);
},

// Get a model from the set by id.
get: function(obj) {
if (obj == null) return void 0;
return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
},

// Get the model at the given index.
at: function(index) {
return this.models[index];
},

// Return models with matching attributes. Useful for simple cases of
// `filter`.
where: function(attrs, first) {
if (_.isEmpty(attrs)) return first ? void 0 : [];
return this[first ? 'find' : 'filter'](function(model) {
 for (var key in attrs) {
   if (attrs[key] !== model.get(key)) return false;
 }
 return true;
});
},

// Return the first model with matching attributes. Useful for simple cases
// of `find`.
findWhere: function(attrs) {
return this.where(attrs, true);
},

// Force the collection to re-sort itself. You don't need to call this under
// normal circumstances, as the set will maintain sort order as each item
// is added.
sort: function(options) {
if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
options || (options = {});

// Run sort based on type of `comparator`.
if (_.isString(this.comparator) || this.comparator.length === 1) {
 this.models = this.sortBy(this.comparator, this);
} else {
 this.models.sort(_.bind(this.comparator, this));
}

if (!options.silent) this.trigger('sort', this, options);
return this;
},

// Pluck an attribute from each model in the collection.
pluck: function(attr) {
return _.invoke(this.models, 'get', attr);
},

// Fetch the default set of models for this collection, resetting the
// collection when they arrive. If `reset: true` is passed, the response
// data will be passed through the `reset` method instead of `set`.
fetch: function(options) {
options = options ? _.clone(options) : {};
if (options.parse === void 0) options.parse = true;
var success = options.success;
var collection = this;
options.success = function(resp) {
 var method = options.reset ? 'reset' : 'set';
 collection[method](resp, options);
 if (success) success(collection, resp, options);
 collection.trigger('sync', collection, resp, options);
};
wrapError(this, options);
return this.sync('read', this, options);
},

// Create a new instance of a model in this collection. Add the model to the
// collection immediately, unless `wait: true` is passed, in which case we
// wait for the server to agree.
create: function(model, options) {
options = options ? _.clone(options) : {};
if (!(model = this._prepareModel(model, options))) return false;
if (!options.wait) this.add(model, options);
var collection = this;
var success = options.success;
options.success = function(model, resp) {
 if (options.wait) collection.add(model, options);
 if (success) success(model, resp, options);
};
model.save(null, options);
return model;
},

// **parse** converts a response into a list of models to be added to the
// collection. The default implementation is just to pass it through.
parse: function(resp, options) {
return resp;
},

// Create a new collection with an identical list of models as this one.
clone: function() {
return new this.constructor(this.models);
},

// Private method to reset all internal state. Called when the collection
// is first initialized or reset.
_reset: function() {
this.length = 0;
this.models = [];
this._byId  = {};
},

// Prepare a hash of attributes (or other model) to be added to this
// collection.
_prepareModel: function(attrs, options) {
if (attrs instanceof Model) return attrs;
options = options ? _.clone(options) : {};
options.collection = this;
var model = new this.model(attrs, options);
if (!model.validationError) return model;
this.trigger('invalid', this, model.validationError, options);
return false;
},

// Internal method to create a model's ties to a collection.
_addReference: function(model, options) {
this._byId[model.cid] = model;
if (model.id != null) this._byId[model.id] = model;
if (!model.collection) model.collection = this;
model.on('all', this._onModelEvent, this);
},

// Internal method to sever a model's ties to a collection.
_removeReference: function(model, options) {
if (this === model.collection) delete model.collection;
model.off('all', this._onModelEvent, this);
},

// Internal method called every time a model in the set fires an event.
// Sets need to update their indexes when models change ids. All other
// events simply proxy through. "add" and "remove" events that originate
// in other collections are ignored.
_onModelEvent: function(event, model, collection, options) {
if ((event === 'add' || event === 'remove') && collection !== this) return;
if (event === 'destroy') this.remove(model, options);
if (model && event === 'change:' + model.idAttribute) {
 delete this._byId[model.previous(model.idAttribute)];
 if (model.id != null) this._byId[model.id] = model;
}
this.trigger.apply(this, arguments);
}

});

// Underscore methods that we want to implement on the Collection.
// 90% of the core usefulness of Backbone Collections is actually implemented
// right here:
var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
'lastIndexOf', 'isEmpty', 'chain', 'sample'];

// Mix in each Underscore method as a proxy to `Collection#models`.
_.each(methods, function(method) {
Collection.prototype[method] = function() {
var args = slice.call(arguments);
args.unshift(this.models);
return _[method].apply(_, args);
};
});

// Underscore methods that take a property name as an argument.
var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

// Use attributes instead of properties.
_.each(attributeMethods, function(method) {
Collection.prototype[method] = function(value, context) {
var iterator = _.isFunction(value) ? value : function(model) {
 return model.get(value);
};
return _[method](this.models, iterator, context);
};
});

// Backbone.View
// -------------

// Backbone Views are almost more convention than they are actual code. A View
// is simply a JavaScript object that represents a logical chunk of UI in the
// DOM. This might be a single item, an entire list, a sidebar or panel, or
// even the surrounding frame which wraps your whole app. Defining a chunk of
// UI as a **View** allows you to define your DOM events declaratively, without
// having to worry about render order ... and makes it easy for the view to
// react to specific changes in the state of your models.

// Creating a Backbone.View creates its initial element outside of the DOM,
// if an existing element is not provided...
var View = Backbone.View = function(options) {
this.cid = _.uniqueId('view');
options || (options = {});
_.extend(this, _.pick(options, viewOptions));
this._ensureElement();
this.initialize.apply(this, arguments);
this.delegateEvents();
};

// Cached regex to split keys for `delegate`.
var delegateEventSplitter = /^(\S+)\s*(.*)$/;

// List of view options to be merged as properties.
var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

// Set up all inheritable **Backbone.View** properties and methods.
_.extend(View.prototype, Events, {

// The default `tagName` of a View's element is `"div"`.
tagName: 'div',

// jQuery delegate for element lookup, scoped to DOM elements within the
// current view. This should be preferred to global lookups where possible.
$: function(selector) {
return this.$el.find(selector);
},

// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize: function(){},

// **render** is the core function that your view should override, in order
// to populate its element (`this.el`), with the appropriate HTML. The
// convention is for **render** to always return `this`.
render: function() {
return this;
},

// Remove this view by taking the element out of the DOM, and removing any
// applicable Backbone.Events listeners.
remove: function() {
this.$el.remove();
this.stopListening();
return this;
},

// Change the view's element (`this.el` property), including event
// re-delegation.
setElement: function(element, delegate) {
if (this.$el) this.undelegateEvents();
this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
this.el = this.$el[0];
if (delegate !== false) this.delegateEvents();
return this;
},

// Set callbacks, where `this.events` is a hash of
//
// *{"event selector": "callback"}*
//
// {
// 'mousedown .title': 'edit',
// 'click .button': 'save',
// 'click .open': function(e) { ... }
// }
//
// pairs. Callbacks will be bound to the view, with `this` set properly.
// Uses event delegation for efficiency.
// Omitting the selector binds the event to `this.el`.
// This only works for delegate-able events: not `focus`, `blur`, and
// not `change`, `submit`, and `reset` in Internet Explorer.
delegateEvents: function(events) {
if (!(events || (events = _.result(this, 'events')))) return this;
this.undelegateEvents();
for (var key in events) {
 var method = events[key];
 if (!_.isFunction(method)) method = this[events[key]];
 if (!method) continue;

 var match = key.match(delegateEventSplitter);
 var eventName = match[1], selector = match[2];
 method = _.bind(method, this);
 eventName += '.delegateEvents' + this.cid;
 if (selector === '') {
   this.$el.on(eventName, method);
 } else {
   this.$el.on(eventName, selector, method);
 }
}
return this;
},

// Clears all callbacks previously bound to the view with `delegateEvents`.
// You usually don't need to use this, but may wish to if you have multiple
// Backbone views attached to the same DOM element.
undelegateEvents: function() {
this.$el.off('.delegateEvents' + this.cid);
return this;
},

// Ensure that the View has a DOM element to render into.
// If `this.el` is a string, pass it through `$()`, take the first
// matching element, and re-assign it to `el`. Otherwise, create
// an element from the `id`, `className` and `tagName` properties.
_ensureElement: function() {
if (!this.el) {
 var attrs = _.extend({}, _.result(this, 'attributes'));
 if (this.id) attrs.id = _.result(this, 'id');
 if (this.className) attrs['class'] = _.result(this, 'className');
 var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
 this.setElement($el, false);
} else {
 this.setElement(_.result(this, 'el'), false);
}
}

});

// Backbone.sync
// -------------

// Override this function to change the manner in which Backbone persists
// models to the server. You will be passed the type of request, and the
// model in question. By default, makes a RESTful Ajax request
// to the model's `url()`. Some possible customizations could be:
//
// * Use `setTimeout` to batch rapid-fire updates into a single request.
// * Send up the models as XML instead of JSON.
// * Persist models via WebSockets instead of Ajax.
//
// Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
// as `POST`, with a `_method` parameter containing the true HTTP method,
// as well as all requests with the body as `application/x-www-form-urlencoded`
// instead of `application/json` with the model in a param named `model`.
// Useful when interfacing with server-side languages like **PHP** that make
// it difficult to read the body of `PUT` requests.
Backbone.sync = function(method, model, options) {
var type = methodMap[method];

// Default options, unless specified.
_.defaults(options || (options = {}), {
emulateHTTP: Backbone.emulateHTTP,
emulateJSON: Backbone.emulateJSON
});

// Default JSON-request options.
var params = {type: type, dataType: 'json'};

// Ensure that we have a URL.
if (!options.url) {
params.url = _.result(model, 'url') || urlError();
}

// Ensure that we have the appropriate request data.
if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
params.contentType = 'application/json';
params.data = JSON.stringify(options.attrs || model.toJSON(options));
}

// For older servers, emulate JSON by encoding the request into an HTML-form.
if (options.emulateJSON) {
params.contentType = 'application/x-www-form-urlencoded';
params.data = params.data ? {model: params.data} : {};
}

// For older servers, emulate HTTP by mimicking the HTTP method with `_method`
// And an `X-HTTP-Method-Override` header.
if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
params.type = 'POST';
if (options.emulateJSON) params.data._method = type;
var beforeSend = options.beforeSend;
options.beforeSend = function(xhr) {
 xhr.setRequestHeader('X-HTTP-Method-Override', type);
 if (beforeSend) return beforeSend.apply(this, arguments);
};
}

// Don't process data on a non-GET request.
if (params.type !== 'GET' && !options.emulateJSON) {
params.processData = false;
}

// If we're sending a `PATCH` request, and we're in an old Internet Explorer
// that still has ActiveX enabled by default, override jQuery to use that
// for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
if (params.type === 'PATCH' && noXhrPatch) {
params.xhr = function() {
 return new ActiveXObject("Microsoft.XMLHTTP");
};
}

// Make the request, allowing the user to override any Ajax options.
var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
model.trigger('request', model, xhr, options);
return xhr;
};

var noXhrPatch =
typeof window !== 'undefined' && !!window.ActiveXObject &&
!(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

// Map from CRUD to HTTP for our default `Backbone.sync` implementation.
var methodMap = {
'create': 'POST',
'update': 'PUT',
'patch':  'PATCH',
'delete': 'DELETE',
'read':   'GET'
};

// Set the default implementation of `Backbone.ajax` to proxy through to `$`.
// Override this if you'd like to use a different library.
Backbone.ajax = function() {
return Backbone.$.ajax.apply(Backbone.$, arguments);
};

// Backbone.Router
// ---------------

// Routers map faux-URLs to actions, and fire events when routes are
// matched. Creating a new one sets its `routes` hash, if not set statically.
var Router = Backbone.Router = function(options) {
options || (options = {});
if (options.routes) this.routes = options.routes;
this._bindRoutes();
this.initialize.apply(this, arguments);
};

// Cached regular expressions for matching named param parts and splatted
// parts of route strings.
var optionalParam = /\((.*?)\)/g;
var namedParam    = /(\(\?)?:\w+/g;
var splatParam    = /\*\w+/g;
var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

// Set up all inheritable **Backbone.Router** properties and methods.
_.extend(Router.prototype, Events, {

// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize: function(){},

// Manually bind a single named route to a callback. For example:
//
// this.route('search/:query/p:num', 'search', function(query, num) {
// ...
// });
//
route: function(route, name, callback) {
if (!_.isRegExp(route)) route = this._routeToRegExp(route);
if (_.isFunction(name)) {
 callback = name;
 name = '';
}
if (!callback) callback = this[name];
var router = this;
Backbone.history.route(route, function(fragment) {
 var args = router._extractParameters(route, fragment);
 router.execute(callback, args);
 router.trigger.apply(router, ['route:' + name].concat(args));
 router.trigger('route', name, args);
 Backbone.history.trigger('route', router, name, args);
});
return this;
},

// Execute a route handler with the provided parameters. This is an
// excellent place to do pre-route setup or post-route cleanup.
execute: function(callback, args) {
if (callback) callback.apply(this, args);
},

// Simple proxy to `Backbone.history` to save a fragment into the history.
navigate: function(fragment, options) {
Backbone.history.navigate(fragment, options);
return this;
},

// Bind all defined routes to `Backbone.history`. We have to reverse the
// order of the routes here to support behavior where the most general
// routes can be defined at the bottom of the route map.
_bindRoutes: function() {
if (!this.routes) return;
this.routes = _.result(this, 'routes');
var route, routes = _.keys(this.routes);
while ((route = routes.pop()) != null) {
 this.route(route, this.routes[route]);
}
},

// Convert a route string into a regular expression, suitable for matching
// against the current location hash.
_routeToRegExp: function(route) {
route = route.replace(escapeRegExp, '\\$&')
            .replace(optionalParam, '(?:$1)?')
            .replace(namedParam, function(match, optional) {
              return optional ? match : '([^/?]+)';
            })
            .replace(splatParam, '([^?]*?)');
return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
},

// Given a route, and a URL fragment that it matches, return the array of
// extracted decoded parameters. Empty or unmatched parameters will be
// treated as `null` to normalize cross-browser behavior.
_extractParameters: function(route, fragment) {
var params = route.exec(fragment).slice(1);
return _.map(params, function(param, i) {
 // Don't decode the search params.
 if (i === params.length - 1) return param || null;
 return param ? decodeURIComponent(param) : null;
});
}

});

// Backbone.History
// ----------------

// Handles cross-browser history management, based on either
// [pushState](http://diveintohtml5.info/history.html) and real URLs, or
// [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
// and URL fragments. If the browser supports neither (old IE, natch),
// falls back to polling.
var History = Backbone.History = function() {
this.handlers = [];
_.bindAll(this, 'checkUrl');

// Ensure that `History` can be used outside of the browser.
if (typeof window !== 'undefined') {
this.location = window.location;
this.history = window.history;
}
};

// Cached regex for stripping a leading hash/slash and trailing space.
var routeStripper = /^[#\/]|\s+$/g;

// Cached regex for stripping leading and trailing slashes.
var rootStripper = /^\/+|\/+$/g;

// Cached regex for detecting MSIE.
var isExplorer = /msie [\w.]+/;

// Cached regex for removing a trailing slash.
var trailingSlash = /\/$/;

// Cached regex for stripping urls of hash.
var pathStripper = /#.*$/;

// Has the history handling already been started?
History.started = false;

// Set up all inheritable **Backbone.History** properties and methods.
_.extend(History.prototype, Events, {

// The default interval to poll for hash changes, if necessary, is
// twenty times a second.
interval: 50,

// Are we at the app root?
atRoot: function() {
return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
},

// Gets the true hash value. Cannot use location.hash directly due to bug
// in Firefox where location.hash will always be decoded.
getHash: function(window) {
var match = (window || this).location.href.match(/#(.*)$/);
return match ? match[1] : '';
},

// Get the cross-browser normalized URL fragment, either from the URL,
// the hash, or the override.
getFragment: function(fragment, forcePushState) {
if (fragment == null) {
 if (this._hasPushState || !this._wantsHashChange || forcePushState) {
   fragment = decodeURI(this.location.pathname + this.location.search);
   var root = this.root.replace(trailingSlash, '');
   if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
 } else {
   fragment = this.getHash();
 }
}
return fragment.replace(routeStripper, '');
},

// Start the hash change handling, returning `true` if the current URL matches
// an existing route, and `false` otherwise.
start: function(options) {
if (History.started) throw new Error("Backbone.history has already been started");
History.started = true;

// Figure out the initial configuration. Do we need an iframe?
// Is pushState desired ... is it available?
this.options          = _.extend({root: '/'}, this.options, options);
this.root             = this.options.root;
this._wantsHashChange = this.options.hashChange !== false;
this._wantsPushState  = !!this.options.pushState;
this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
var fragment          = this.getFragment();
var docMode           = document.documentMode;
var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

// Normalize root to always include a leading and trailing slash.
this.root = ('/' + this.root + '/').replace(rootStripper, '/');

if (oldIE && this._wantsHashChange) {
 var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
 this.iframe = frame.hide().appendTo('body')[0].contentWindow;
 this.navigate(fragment);
}

// Depending on whether we're using pushState or hashes, and whether
// 'onhashchange' is supported, determine how we check the URL state.
if (this._hasPushState) {
 Backbone.$(window).on('popstate', this.checkUrl);
} else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
 Backbone.$(window).on('hashchange', this.checkUrl);
} else if (this._wantsHashChange) {
 this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
}

// Determine if we need to change the base url, for a pushState link
// opened by a non-pushState browser.
this.fragment = fragment;
var loc = this.location;

// Transition from hashChange to pushState or vice versa if both are
// requested.
if (this._wantsHashChange && this._wantsPushState) {

 // If we've started off with a route from a `pushState`-enabled
 // browser, but we're currently in a browser that doesn't support it...
 if (!this._hasPushState && !this.atRoot()) {
   this.fragment = this.getFragment(null, true);
   this.location.replace(this.root + '#' + this.fragment);
   // Return immediately as browser will do redirect to new url
   return true;

 // Or if we've started out with a hash-based route, but we're currently
 // in a browser where it could be `pushState`-based instead...
 } else if (this._hasPushState && this.atRoot() && loc.hash) {
   this.fragment = this.getHash().replace(routeStripper, '');
   this.history.replaceState({}, document.title, this.root + this.fragment);
 }

}

if (!this.options.silent) return this.loadUrl();
},

// Disable Backbone.history, perhaps temporarily. Not useful in a real app,
// but possibly useful for unit testing Routers.
stop: function() {
Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
History.started = false;
},

// Add a route to be tested when the fragment changes. Routes added later
// may override previous routes.
route: function(route, callback) {
this.handlers.unshift({route: route, callback: callback});
},

// Checks the current URL to see if it has changed, and if it has,
// calls `loadUrl`, normalizing across the hidden iframe.
checkUrl: function(e) {
var current = this.getFragment();
if (current === this.fragment && this.iframe) {
 current = this.getFragment(this.getHash(this.iframe));
}
if (current === this.fragment) return false;
if (this.iframe) this.navigate(current);
this.loadUrl();
},

// Attempt to load the current URL fragment. If a route succeeds with a
// match, returns `true`. If no defined routes matches the fragment,
// returns `false`.
loadUrl: function(fragment) {
fragment = this.fragment = this.getFragment(fragment);
return _.any(this.handlers, function(handler) {
 if (handler.route.test(fragment)) {
   handler.callback(fragment);
   return true;
 }
});
},

// Save a fragment into the hash history, or replace the URL state if the
// 'replace' option is passed. You are responsible for properly URL-encoding
// the fragment in advance.
//
// The options object can contain `trigger: true` if you wish to have the
// route callback be fired (not usually desirable), or `replace: true`, if
// you wish to modify the current URL without adding an entry to the history.
navigate: function(fragment, options) {
if (!History.started) return false;
if (!options || options === true) options = {trigger: !!options};

var url = this.root + (fragment = this.getFragment(fragment || ''));

// Strip the hash for matching.
fragment = fragment.replace(pathStripper, '');

if (this.fragment === fragment) return;
this.fragment = fragment;

// Don't include a trailing slash on the root.
if (fragment === '' && url !== '/') url = url.slice(0, -1);

// If pushState is available, we use it to set the fragment as a real URL.
if (this._hasPushState) {
 this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

// If hash changes haven't been explicitly disabled, update the hash
// fragment to store history.
} else if (this._wantsHashChange) {
 this._updateHash(this.location, fragment, options.replace);
 if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
   // Opening and closing the iframe tricks IE7 and earlier to push a
   // history entry on hash-tag change. When replace is true, we don't
   // want this.
   if(!options.replace) this.iframe.document.open().close();
   this._updateHash(this.iframe.location, fragment, options.replace);
 }

// If you've told us that you explicitly don't want fallback hashchange-
// based history, then `navigate` becomes a page refresh.
} else {
 return this.location.assign(url);
}
if (options.trigger) return this.loadUrl(fragment);
},

// Update the hash location, either replacing the current entry, or adding
// a new one to the browser history.
_updateHash: function(location, fragment, replace) {
if (replace) {
 var href = location.href.replace(/(javascript:|#).*$/, '');
 location.replace(href + '#' + fragment);
} else {
 // Some browsers require that `hash` contains a leading #.
 location.hash = '#' + fragment;
}
}

});

// Create the default Backbone.history.
Backbone.history = new History;

// Helpers
// -------

// Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
var extend = function(protoProps, staticProps) {
var parent = this;
var child;

// The constructor function for the new subclass is either defined by you
// (the "constructor" property in your `extend` definition), or defaulted
// by us to simply call the parent's constructor.
if (protoProps && _.has(protoProps, 'constructor')) {
child = protoProps.constructor;
} else {
child = function(){ return parent.apply(this, arguments); };
}

// Add static properties to the constructor function, if supplied.
_.extend(child, parent, staticProps);

// Set the prototype chain to inherit from `parent`, without calling
// `parent`'s constructor function.
var Surrogate = function(){ this.constructor = child; };
Surrogate.prototype = parent.prototype;
child.prototype = new Surrogate;

// Add prototype properties (instance properties) to the subclass,
// if supplied.
if (protoProps) _.extend(child.prototype, protoProps);

// Set a convenience property in case the parent's prototype is needed
// later.
child.__super__ = parent.prototype;

return child;
};

// Set up inheritance for the model, collection, router, view and history.
Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

// Throw an error when a URL is needed, and none is supplied.
var urlError = function() {
throw new Error('A "url" property or function must be specified');
};

// Wrap an optional error callback with a fallback error event.
var wrapError = function(model, options) {
var error = options.error;
options.error = function(resp) {
if (error) error(model, resp, options);
model.trigger('error', model, resp, options);
};
};

return Backbone;

}));



/**
 * vim: et:ts=4:sw=4:sts=4
 * 
 * @license RequireJS 2.1.11 Copyright (c) 2010-2014, The Dojo Foundation All
 *          Rights Reserved. Available via the MIT or new BSD license. see:
 *          http://github.com/jrburke/requirejs for details
 */
// Not using strict: uneven strict support in browsers, #392, and causes
// problems with requirejs.exec()/transpiler plugins that may not be strict.
/* jslint regexp: true, nomen: true, sloppy: true */
/* global window, navigator, document, importScripts, setTimeout, opera */

var requirejs, require, define;
(function (global) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.1.11',
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        // PS3 indicates loaded and complete, but need to wait for complete
        // specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        // to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        // Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
	 * Helper function for iterating over an array. If the func returns a true
	 * value, it will break out of the loop.
	 */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
	 * Helper function for iterating over an array backwards. If the func
	 * returns a true value, it will break out of the loop.
	 */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
	 * Cycles over properties in an object and calls a function for each
	 * property value. If the function returns a truthy value, then the
	 * iteration is stopped.
	 */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
	 * Simple function to mix in properties from source into target, but only if
	 * target does not already have a property of the same name.
	 */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    // Similar to Function.prototype.bind, but the 'this' object is specified
    // first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    // Allow getting a global that is expressed in
    // dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
	 * Constructs an error with a pointer to an URL with more information.
	 * 
	 * @param {String}
	 *            id the error ID that maps to an ID on a web page.
	 * @param {String}
	 *            message human readable error.
	 * @param {Error}
	 *            [err] the original error, if there is one.
	 * 
	 * @returns {Error}
	 */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttp://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        // If a define is already in play via another AMD loader,
        // do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            // Do not overwrite and existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    // Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        // assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                // Defaults. Do not set a default for map
                // config to speed up normalize(), which
                // will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            // registry of just enabled modules, to speed
            // cycle breaking code when lots of modules
            // are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
		 * Trims the . and .. from an array of path segments. It will keep a
		 * leading path segment if a .. will become the first path segment, to
		 * help with module name lookups, which act like paths, but can be
		 * remapped. But the end result, all paths that use this function should
		 * look normalized. NOTE: this method MODIFIES the input array.
		 * 
		 * @param {Array}
		 *            ary the array of path segments.
		 */
        function trimDots(ary) {
            var i, part, length = ary.length;
            for (i = 0; i < length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    if (i === 1 && (ary[2] === '..' || ary[0] === '..')) {
                        // End of the line. Keep at least one non-dot
                        // path segment at the front so it can be mapped
                        // correctly to disk. Otherwise, there is likely
                        // no path mapping for a path starting with '..'.
                        // This can still fail, but catches the most reasonable
                        // uses of ..
                        break;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
		 * Given a relative module name, like ./something, normalize it to a
		 * real name that can be mapped to a path.
		 * 
		 * @param {String}
		 *            name the relative name
		 * @param {String}
		 *            baseName a real name that the name arg is relative to.
		 * @param {Boolean}
		 *            applyMap apply the map config to the value. Should only be
		 *            done if this normalization is for a dependency ID.
		 * @returns {String} normalized name
		 */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex,
                foundMap, foundI, foundStarMap, starI,
                baseParts = baseName && baseName.split('/'),
                normalizedBaseParts = baseParts,
                map = config.map,
                starMap = map && map['*'];

            // Adjust any relative paths.
            if (name && name.charAt(0) === '.') {
                // If have a base name, try to normalize against it,
                // otherwise, assume it is a top-level require that will
                // be relative to baseUrl in the end.
                if (baseName) {
                    // Convert baseName to array, and lop off the last part,
                    // so that . matches that 'directory' and not name of the
					// baseName's
                    // module. For instance, baseName of 'one/two/three', maps
					// to
                    // 'one/two/three.js', but we want the directory, 'one/two'
					// for
                    // this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = name.split('/');
                    lastIndex = name.length - 1;

                    // If wanting node ID compatibility, strip .js from end
                    // of IDs. Have to do this here, and not in nameToUrl
                    // because node allows either .js or non .js to map
                    // to same file.
                    if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                        name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                    }

                    name = normalizedBaseParts.concat(name);
                    trimDots(name);
                    name = name.join('/');
                } else if (name.indexOf('./') === 0) {
                    // No baseName, so this is ID is resolved relative
                    // to baseUrl, pull off the leading dot.
                    name = name.substring(2);
                }
            }

            // Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        // Find the longest baseName segment match in the
						// config.
                        // So, do joins on the biggest to smallest lengths of
						// baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            // baseName segment has config, find if it has one
							// for
                            // this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    // Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }

                    // Check for a star map match, but just hold on to it,
                    // if there is a shorter segment match later in a matching
                    // config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);

            return pkgMain ? pkgMain : name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                // Pop off the first array value, since it failed, and
                // retry
                pathConfig.shift();
                context.require.undef(id);
                context.require([id]);
                return true;
            }
        }

        // Turns a plugin!resource to [plugin, resource]
        // with the plugin being undefined if the name
        // did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
		 * Creates a module mapping that includes plugin prefix, module name,
		 * and path. If parentModuleMap is provided it will also normalize the
		 * name via require.normalize()
		 * 
		 * @param {String}
		 *            name the module name
		 * @param {String}
		 *            [parentModuleMap] parent module map for the module name,
		 *            used to resolve relative names.
		 * @param {Boolean}
		 *            isNormalized: is the ID already normalized. This is true
		 *            if this call is done for a define() module ID.
		 * @param {Boolean}
		 *            applyMap: apply the map config to the ID. Should only be
		 *            true if this map is for a dependency.
		 * 
		 * @returns {Object}
		 */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            // If no name, then it means it is a require call, generate an
            // internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            // Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (pluginModule && pluginModule.normalize) {
                        // Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        normalizedName = normalize(name, parentName, applyMap);
                    }
                } else {
                    // A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    // Normalized name may be a plugin ID due to map config
                    // application in normalize. The map config values must
                    // already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            // If the id is a plugin id that cannot be determined if it needs
            // normalization, stamp it with a unique ID so two matching relative
            // ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        // Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
		 * Internal method to transfer globalQueue items to this context's
		 * defQueue.
		 */
        function takeGlobalQueue() {
            // Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                // Array splice in the values since the context code has a
                // local var ref to defQueue, so cannot just reassign the one
                // on context.
                apsp.apply(defQueue,
                           [defQueue.length, 0].concat(globalDefQueue));
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return  getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };

        function cleanRegistry(id) {
            // Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    // Only force things that have not completed
                    // being defined, so still in the registry,
                    // and only if it has not been matched up
                    // in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); // pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                // It is possible to disable the wait interval by using
				// waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            // Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            // Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id;

                // Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    // If the module should be executed, and it has not
                    // been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            // No reason to keep looking for unfinished
                            // loading. If the only stillLoading is a
                            // plugin resource though, keep going,
                            // because it may be that a plugin resource
                            // is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                // If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            // Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            // If still waiting on loads, and the waiting load is something
            // other than a plugin resource, or there are still outstanding
            // scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                // Something is still waiting to load. Wait for it, but only
                // if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /*
			 * this.exports this.factory this.depMaps = [], this.enabled,
			 * this.fetched
			 */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                // Do not do more inits if already done. Can happen if there
                // are multiple define calls for the same module. That is not
                // a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    // Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    // If no errback already, but there are error listeners
                    // on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                // Do a copy of the dependency array, so that
                // source inputs are not modified. For example
                // "shim" deps are passed in here directly, and
                // doing a direct modification of the depMaps array
                // would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                // Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                // Could have option to init this module in enabled mode,
                // or could have been previously marked as enabled. However,
                // the dependencies are not known until init is called. So
                // if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    // Enable this module and dependencies.
                    // Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                // Because of cycles, defined callback for a given
                // export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                // If the manager is for a plugin managed resource,
                // ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    // Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                // Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
			 * Checks if the module is ready to define itself, and if so, define
			 * it.
			 */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    this.fetch();
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    // The factory could trigger another require call
                    // that would result in checking this module to
                    // define itself again. If already in the process
                    // of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            // If there is an error listener, favor passing
                            // to that instead of throwing an error. However,
                            // only do it for define()'d modules. require
                            // errbacks should not be called for failures in
                            // their callbacks (#699). However if a global
                            // onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            // Favor return value over exports. If node/cjs in
							// play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                } else if (this.usingExports) {
                                    // exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            // Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                req.onResourceLoad(context, this.map, this.depMaps);
                            }
                        }

                        // Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    // Finished the define stage. Allow calling check again
                    // to allow define notifications below in the case of a
                    // cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    // Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                // Mark this as a dependency for this plugin, so it
                // can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        bundleId = getOwn(bundlesMap, this.map.id),
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    // If current map is not normalized, wait for that
                    // normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        // Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        // prefix and name should already be normalized, no need
                        // for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            // Mark this as a dependency for this plugin, so it
                            // can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    // If a paths config, then just load that file instead to
                    // resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        // Remove temp unnormalized modules for this module,
                        // since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    // Allow plugins to load other code without having to know
					// the
                    // context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /* jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        // As of 2.1.0, support just passing the text, to
						// reinforce
                        // fromText only being called once per resource. Still
                        // support old style of passing moduleName but discard
                        // that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        // Turn off interactive script matching for IE for any
						// define
                        // calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        // Prime the system by creating a module instance for
                        // it.
                        getModule(moduleMap);

                        // Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        // Mark this as a dependency for the plugin
                        // resource
                        this.depMaps.push(moduleMap);

                        // Support anonymous modules.
                        context.completeLoad(moduleName);

                        // Bind the value of that module to the value for this
                        // resource ID.
                        localRequire([moduleName], load);
                    });

                    // Use parentName here since the plugin's name is not
					// reliable,
                    // could be some weird string with no path that actually
					// wants to
                    // reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                // Set flag mentioning that the module is enabling,
                // so that immediate calls to the defined callbacks
                // for dependencies do not trigger inadvertent load
                // with the depCount still being zero.
                this.enabling = true;

                // Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        // Dependency needs to be converted to a depMap
                        // and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    // Skip special modules like 'require', 'exports', 'module'
                    // Also, don't call enable if it is already enabled,
                    // important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                // Enable each plugin that is used in
                // a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    // Now that the error handler was triggered, remove
                    // the listeners, since this broken Module instance
                    // can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            // Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            // Favor detachEvent because of IE9
            // issue, see attachEvent/addEventListener comment elsewhere
            // in this file.
            if (node.detachEvent && !isOpera) {
                // Probably IE. If not it will throw an error, which will be
                // useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
		 * Given an event from a script node, get the requirejs info from it,
		 * and then removes the event listeners on the node.
		 * 
		 * @param {Event}
		 *            evt
		 * @returns {Object}
		 */
        function getScriptData(evt) {
            // Using currentTarget instead of target for Firefox 2.0's sake. Not
            // all old browsers will be supported, but this one was easy enough
            // to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            // Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            // Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            // Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' + args[args.length - 1]));
                } else {
                    // args are id, deps, factory. Should be normalized by the
                    // define() function.
                    callGetModule(args);
                }
            }
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
			 * Set a configuration for the context.
			 * 
			 * @param {Object}
			 *            cfg config object to integrate.
			 */
            configure: function (cfg) {
                // Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                // Save off the paths since they require special processing,
                // they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    } else {
                        config[prop] = value;
                    }
                });

                // Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }

                // Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        // Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                // Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;

                        pkgObj = typeof pkgObj === 'string' ? { name: pkgObj } : pkgObj;

                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }

                        // Save pointer to main module ID for pkg name.
                        // Remove leading dot in main, so main paths are
						// normalized,
                        // and remove any trailing .js, since different package
                        // envs have different conventions: some use a module
						// name,
                        // some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                                     .replace(currDirRegExp, '')
                                     .replace(jsSuffixRegExp, '');
                    });
                }

                // If there are any "waiting to execute" modules in the
				// registry,
                // update the maps for them, since their info, like URLs to
				// load,
                // may have changed.
                eachProp(registry, function (mod, id) {
                    // If module already has init called, since it is too
                    // late to modify them, and ignore unnormalized ones
                    // since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id);
                    }
                });

                // If a deps array or a config callback is specified, then call
                // require with those args. This is useful when require is
				// defined as a
                // config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            // Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        // If require|exports|module are requested, get the
                        // value for them from the special handlers. Caveat:
                        // this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        // Synchronous access to one module. If require.get is
                        // available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        // Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    // Grab defines waiting in the global queue.
                    intakeDefines();

                    // Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        // Some defines could have been added since the
                        // require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        // Store if map config should be applied to this require
                        // call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
					 * Converts a module name + .extension into an URL path.
					 * *Requires* the use of a module name. It does not support
					 * using plain URLs like nameToUrl.
					 */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        // Have a file extension alias, and it is not the
                        // dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                // Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        // Bind any waiting define() calls to this context,
                        // fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        // Clean queued defines too. Go backwards
                        // in array so that the splices do not
                        // mess up the iteration.
                        eachReverse(defQueue, function(args, i) {
                            if(args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });

                        if (mod) {
                            // Hold on to listeners in case the
                            // module will be attempted to be reloaded
                            // using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
			 * Called to enable a module if it is still in the registry awaiting
			 * enablement. A second arg, parent, the parent module, is passed in
			 * for context, when this method is overridden by the optimizer. Not
			 * shown here to keep code compact.
			 */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
			 * Internal method used by environment adapters to complete a load
			 * event. A load event could be a script load or just a load pass
			 * from a synchronous load call.
			 * 
			 * @param {String}
			 *            moduleName the name of the module to potentially
			 *            complete.
			 */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        // If already found an anonymous module and bound it
                        // to this name, then this is some other anon module
                        // waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        // Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }

                // Do this after the cycle of callGetModule in case the result
                // of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        // A script that does not call define(), so just
						// simulate
                        // the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
			 * Converts a module name to a file path. Supports cases where
			 * moduleName may actually be just an URL. Note that it **does not**
			 * call normalize on the moduleName, it is assumed to have already
			 * been normalized. This is an internal API, not a public one. Use
			 * toUrl for the public API.
			 */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url,
                    parentPath, bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName);

                if (pkgMain) {
                    moduleName = pkgMain;
                }

                bundleId = getOwn(bundlesMap, moduleName);

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }

                // If a colon is in the URL, it indicates a protocol is used and
				// it is just
                // an URL to a file, or if it starts with a slash, contains a
				// query arg (i.e. ?)
                // or ends with .js, then assume the user meant to use an url
				// and not a module id.
                // The slash is important for protocol-less URLs as well as full
				// paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    // Just a plain path, not module name lookup, so just return
					// it.
                    // Add extension if it is included. This is a bit wonky,
					// only non-.js things pass
                    // an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    // A module that needs to be converted to a path.
                    paths = config.paths;

                    syms = moduleName.split('/');
                    // For each module name segment, see if there is a path
                    // registered for it. Start with most specific name
                    // and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');

                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            // If an array, it means there are a few choices,
                            // Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }

                    // Join the path parts together, then figure out if baseUrl
					// is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs ? url +
                                        ((url.indexOf('?') === -1 ? '?' : '&') +
                                         config.urlArgs) : url;
            },

            // Delegates to req.load. Broken out as a separate function to
            // allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
			 * Executes a module callback function. Broken out as a separate
			 * function solely to allow the build system to sequence the files
			 * in the built layer in the right sequence.
			 * 
			 * @private
			 */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
			 * callback for script loads, used to check status of loading.
			 * 
			 * @param {Event}
			 *            evt the event from the browser for the script that was
			 *            loaded.
			 */
            onScriptLoad: function (evt) {
                // Using currentTarget instead of target for Firefox 2.0's sake.
				// Not
                // all old browsers will be supported, but this one was easy
				// enough
                // to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    // Reset interactive script so a script node is not held
					// onto for
                    // to long.
                    interactiveScript = null;

                    // Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
			 * Callback for script errors.
			 */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    return onError(makeError('scripterror', 'Script error for: ' + data.id, evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
	 * Main entry point.
	 * 
	 * If the only argument to require is a string, then the module that is
	 * represented by that string is fetched for the appropriate context.
	 * 
	 * If the first argument is an array, then it will be treated as an array of
	 * dependency string names to fetch. An optional function callback can be
	 * specified to execute when all of those dependencies are available.
	 * 
	 * Make a local req variable to help Caja compliance (it assumes things on a
	 * require that are not standardized), and to give a short name for
	 * minification/local scope use.
	 */
    req = requirejs = function (deps, callback, errback, optional) {

        // Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
	 * Support require.config() to make it easier to cooperate with other AMD
	 * loaders on globally agreed names.
	 */
    req.config = function (config) {
        return req(config);
    };

    /**
	 * Execute something after the current tick of the event loop. Override for
	 * other envs that have a better solution than setTimeout.
	 * 
	 * @param {Function}
	 *            fn function to execute later.
	 */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
	 * Export require as a global, but only if it does not already exist.
	 */
    if (!require) {
        require = req;
    }

    req.version = version;

    // Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    // Create default context.
    req({});

    // Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        // Reference from contexts instead of early binding to default context,
        // so that during builds, the latest instance of the default context
        // with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        // If BASE tag is in play, using appendChild is a problem for IE6.
        // When that browser dies, this can be removed. Details in this jQuery
		// bug:
        // http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
	 * Any errors that require explicitly generates will be passed to this
	 * function. Intercept/override it if you want custom error handling.
	 * 
	 * @param {Error}
	 *            err the error object.
	 */
    req.onError = defaultOnError;

    /**
	 * Creates the node for the load command. Only used in browser envs.
	 */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
	 * Does the request to load a module for the browser case. Make this a
	 * separate function to allow other environments to override it.
	 * 
	 * @param {Object}
	 *            context the require context to find state.
	 * @param {String}
	 *            moduleName the name of the module.
	 * @param {Object}
	 *            url the URL to the module.
	 */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            // In the browser so use a script tag
            node = req.createNode(config, moduleName, url);

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            // Set up load listener. Test attachEvent first because IE9 has
            // a subtle issue in its addEventListener and script onload firings
            // that do not match the behavior of all other browsers with
            // addEventListener support, which fire the onload event for a
            // script right after the script execution. See:
            // https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            // UNFORTUNATELY Opera implements attachEvent but does not follow
			// the script
            // script execution mode.
            if (node.attachEvent &&
                    // Check if node.attachEvent is artificially added by custom
					// script or
                    // natively supported by browser
                    // read https://github.com/jrburke/requirejs/issues/187
                    // if we can NOT find [native code] then it must NOT
					// natively supported.
                    // in IE8, node.attachEvent does not have toString()
                    // Note the test for "[native code" with no closing brace,
					// see:
                    // https://github.com/jrburke/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                // Probably IE. IE (at least 6-8) do not fire
                // script onload right after executing the script, so
                // we cannot tie the anonymous define call to a name.
                // However, IE reports the script as being in 'interactive'
                // readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                // It would be great to add an error handler here to catch
                // 404s in IE9+. However, onreadystatechange will fire before
                // the error handler, so that does not help. If addEventListener
                // is used, then IE will fire error before load, but we cannot
                // use that pathway given the connect.microsoft.com issue
                // mentioned above about not doing the 'script execute,
                // then fire the script load event listener before execute
                // next script' that other browsers do.
                // Best hope: IE10 fixes the issues,
                // and then destroys all installs of IE 6-9.
                // node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            // For some cache cases in IE 6-8, the script executes before the
			// end
            // of the appendChild execution, so to tie an anonymous define
            // call to the module name (which is stored on the node), hold on
            // to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                // In a web worker, use importScripts. This is not a very
                // efficient use of importScripts, importScripts will block
				// until
                // its script is downloaded and evaluated. However, if web
				// workers
                // are in play, the expectation that a build has been done so
				// that
                // only one script needs to be loaded anyway. This may need to
				// be
                // reevaluated if other use cases become common.
                importScripts(url);

                // Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    // Look for a data-main script attribute, which could also adjust the
	// baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        // Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            // Set the 'head' where we can append children by
            // using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            // Look for a data-main attribute to set main script for the page
            // to load. If it is there, the path to data main becomes the
            // baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                // Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                // Set final baseUrl if there is not already an explicit one.
                if (!cfg.baseUrl) {
                    // Pull off the directory of data-main for use as the
                    // baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                // Strip off any trailing .js since mainScript is now
                // like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                 // If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                // Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
	 * The function that handles definitions of modules. Differs from require()
	 * in that a string for the module should be the first argument, and the
	 * function to execute after dependencies are loaded should return a value
	 * to define the module corresponding to the first argument's name.
	 */
    define = function (name, deps, callback) {
        var node, context;

        // Allow for anonymous modules
        if (typeof name !== 'string') {
            // Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        // This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        // If no name, and callback is a function, then figure out if it a
        // CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            // Remove comments from the callback string,
            // look for require calls, and pull them into the dependencies,
            // but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, '')
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                // May be a CommonJS thing even without require calls, but still
                // could use exports, and module. Avoid doing exports and module
                // work though if it just needs require.
                // REQUIRES the function to expect the CommonJS variables in the
                // order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        // If in IE 6-8 and hit an anonymous define() call, do the interactive
        // work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        // Always save off evaluating the def call until the script onload
		// handler.
        // This allows multiple modules to be in a file without prematurely
        // tracing dependencies, and allows for anonymous module support,
        // where the module name is not known until the script onload event
        // occurs. If no context, use the global queue, and get it processed
        // in the onscript load callback.
        (context ? context.defQueue : globalDefQueue).push([name, deps, callback]);
    };

    define.amd = {
        jQuery: true
    };


    /**
	 * Executes the text. Normally just uses eval, but can be modified to use a
	 * better, environment-specific call. Only used for transpiling loader
	 * plugins, not for plain JS modules.
	 * 
	 * @param {String}
	 *            text the text to execute/evaluate.
	 */
    req.exec = function (text) {
        /* jslint evil: true */
        return eval(text);
    };

    // Set up with config info.
    req(cfg);
}(this)); 
 





// //////////////////////////////////text!!!!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////////////
//
//
//
//
//
//
//
//
//
// text!
//
//
//
//
//
//
//
//
//
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////



/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation
 *          All Rights Reserved. Available via the MIT or new BSD license. see:
 *          http://github.com/requirejs/text for details
 */
/* jslint regexp: true */
/*
 * global require, XMLHttpRequest, ActiveXObject, define, window, process,
 * Packages, java, location, Components, FileUtils
 */

define("text",['module'], function (module) {
    'use strict';

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.14',

        strip: function (content) {
            // Strips <?xml ...?> declarations so that external SVG and XML
            // documents can be added to a document without worry. Also, if the
			// string
            // is an HTML document, only the part inside the body tag is
			// returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            // Would love to dump the ActiveX crap in here. Need IE 6 to die
			// first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
		 * Parses a resource name into its component parts. Resource names look
		 * like: module/name.ext!strip, where the !strip part is optional.
		 * 
		 * @param {String}
		 *            name the resource name
		 * @returns {Object} with properties "moduleName", "ext" and "strip"
		 *          where strip is a boolean.
		 */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.lastIndexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                // Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
		 * Is an URL on another domain. Only works for browser use, returns
		 * false in non-browser environments. Only used to know if an optimized
		 * .js version of a text resource should be loaded instead.
		 * 
		 * @param {String}
		 *            url
		 * @returns Boolean
		 */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            // Name has format: some.module.filext!strip
            // The strip part is optional.
            // if strip is present, then that means only get the string contents
            // inside a body tag in an HTML string. For XML/SVG content it means
            // removing the <?xml ...?> declarations so the content can be
			// inserted
            // into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config && config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            // Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                // Need to fetch the resource across domains. Assume
                // the resource has been optimized into a JS module. Fetch
                // by the module name + extension, but do not include the
                // !strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                // Use a '.js' file name so that it indicates it is a
                // script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            // Leverage own load() method to load plugin value, but only
            // write out values that do not have the strip argument,
            // to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                // Use own write() method to construct full module value.
                // But need to create shell that translates writeFile's
                // write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'] &&
            !process.versions['atom-shell'])) {
        // Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                // Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file[0] === '\uFEFF') {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                if (errback) {
                    errback(e);
                }
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            // Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            // Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                // Do not explicitly handle errors, those should be
                // visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status || 0;
                    if (status > 399 && status < 600) {
                        // An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        if (errback) {
                            errback(err);
                        }
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        // Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0,
				// page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB
				// BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on
					// this file,
                    // and we plan to concatenating this buffer with others; the
					// BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                // Make sure we return a JavaScript string and not a Java
				// string.
                content = String(stringBuffer.toString()); // String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        // Avert your gaze!
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            // XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});










 
define("pageConfig",[],function(){
	$("[type='text/wahaha-config']")
	// console.log($("[type='text/wahaha-config']").text());
	var configStr=$("[type='text/wahaha-config']").text(),
		configObj,
		config;
	try{
		// configObj=eval("("+configStr+")");
		config=new Function("return ("+configStr+");")();	
	}catch(ex){
		
		console.error("解析json格式出错："+ex);
	}
	
	console.log(configObj);
	console.log(config);
	var pageConfig={
			initPageConfig:function(){
				
				this.loadCtrl();
				this.loadModel();
				this.loadTemplate();
			},
			loadCtrl:function(){
			 
				require([config.control],function(control){
					//console.log(control);
					UC.show(new control());
				});
			},
			loadModel:function(){
				
				
			},
			loadTemplate:function(){
				
				
			}
			
	};
	return pageConfig;
});

require(["pageConfig"],function(config){
	config.initPageConfig();
	
});





define("lib",[],function(){
	
	var Animate={
			Attention:"bounce flash pulse rubberBand shake swing tada wobble".split(" "),
			BouncingEntrances:"bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp".split(" "),
			BouncingExits:"bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp".split(" "),
			FadingEntrances:"fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig".split(" "),
			FadingExits:"fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig".split(" ")
			
	};
	
	var UC={
		params:[],// 锟斤拷锟矫匡拷锟絟ash 锟斤拷转时锟斤拷锟斤拷械牟锟斤拷锟�
		
		// 全锟斤拷
		pageInfo:{
			limit:20
			
		},
		// actionUrl:'http://192.168.1.104:8090/',
		actionUrl:'http://jinriwuliu.cn:8080/',
		 
		isLogin:function(){ 
			if(localStorage.getItem("username")&&localStorage.getItem("password")){ 
				return true;
			}
			return false;
		},
		getUser:function(){
			if(this.isLogin()){
				return {
					username:localStorage.getItem("username"),
					password:localStorage.getItem("password")
				};
			}
			return null;
		},
		PageViewMgr:{
			mapping:{},
			pageViewStack:[],
			add:function(pageView){
				if(!this.mapping[pageView.name]){
					this.mapping[pageView.name]=pageView; 
					this.pageViewStack.push(pageView);
				} 
			},
			isFront:function(currentPage,targetPage){
				var cindex,tindex;
				for(var i=0;i<this.pageViewStack.length;i++){
					if(this.pageViewStack[i].name==currentPage.name){
						cindex=i;
					}
					if(this.pageViewStack[i].name==targetPage.name){
						tindex=i;
					}
				}
				return cindex>tindex;
			},
			get:function(name){
				return this.mapping[name];
			},
			getCurrentShow:function(){
				var page;
				for(var pv in this.mapping){
					if(this.mapping[pv].status){
						page=this.mapping[pv];
					}
				}
				return page;
			}, 
		    // 閿�瘉鎸囧畾鐨刾ageView
		    destroyPageView:function(pageView){
		    	var index=-1;
		    	delete this.mapping[pageView.name];
		    	for(var i=0;i<this.pageViewStack.length;i++){
					if(this.pageViewStack[i].name==pageView.name){
						index=i;
					}
					 
				}
		    	if(index!=-1){
		    		this.pageViewStack.splice(index,1);
		    	}
		    	
		    	pageView.$pageEl.remove();
		    	
		    },
			
			
		}, 
		
		// 锟斤拷取页锟斤拷锟叫伙拷锟斤拷前锟斤拷锟角猴拷锟斤拷
		getDirection:function(currentPage,targetPage){
			var cindex,tindex,
				pageViewStack=UC.PageViewMgr.pageViewStack;
			for(var i=0;i<pageViewStack.length;i++){
				if(pageViewStack[i].name==currentPage.name){
					cindex=i;
				}
				if(pageViewStack[i].name==targetPage.name){
					tindex=i;
				}
			}
			if(cindex>tindex){
				return "back";
			}else{
				return "forward";
			}
		},
		
		show:function(pageView){
			var self=this;
			/**
			 * if(this.PageViewMgr.mapping[name]){ var
			 * currentPageView=this.PageViewMgr.getCurrentShow(),
			 * targetPageView=this.PageViewMgr.mapping[name];
			 * currentPageView.hideTips(); targetPageView.hideTips();
			 * if(self.getDirection(currentPageView,targetPageView)==="back"){
			 * self.back(currentPageView,targetPageView); }else
			 * if(self.getDirection(currentPageView,targetPageView)==="forward"){
			 * self.forward(currentPageView,targetPageView); }
			 * //this.PageViewMgr.mapping[name].goParam=goParam;
			 * 
			 * return; }else{ this.load(name); }
			 */ 
			pageView.onShow();
		},
		// 锟斤拷页模式锟斤拷页锟斤拷锟斤拷转
		/**
		 * param.anmi
		 */
		go:function(name,param){
			// this.goParam=param||this.goParam;
		
			if(!$.isEmptyObject(param)){
				$.extend(this.goParam,param);
			}else{
				param={
					anim:false,
					duration:300,
					easing:'linear'
				};
			}
			if(!this.duration){
				
				window.location.hash="#"+name;
			}
			
			// this.show(name);
		},
		//
		jump:function(){
			
			
		},
		//
		back:function(currentPageView,targetPageView){
			var self=this;
			if(self.goParam.anim){
				if(!self.duration){
					
					self.duration=true;
					targetPageView.show();
					targetPageView.onShow();
					targetPageView.status=true; 
					currentPageView.$pageEl.addClass("animated").addClass(self.animate.animateOut).show().one("webkitAnimationEnd", function(){
						self.duration=false;
						currentPageView.$pageEl.removeClass("animated").removeClass(self.animate.animateOut);
						currentPageView.hide();
						currentPageView.onHide();
						currentPageView.status=false; 
						
					});
				}
					
				
			}else{
				if(!self.duration){ 
					targetPageView.onShow();
					targetPageView.show();
					currentPageView.hide();
					currentPageView.status=false; 
					currentPageView.onHide();
					targetPageView.status=true; 

					
				}
			}
			
		},
		//
		forward:function(currentPageView,targetPageView){
			var self=this;
			if(self.goParam.anim){
				if(!self.duration){
					self.duration=true;
					targetPageView.onShow();
					targetPageView.$pageEl.addClass("animated").addClass(self.animate.animateIn).show().one("webkitAnimationEnd", function(){
						self.duration=false;
						targetPageView.$pageEl.removeClass("animated").removeClass(self.animate.animateIn);
						targetPageView.status=true;
						currentPageView.status=false;
						currentPageView.hide();
						currentPageView.onHide();
					});	
				}
					
			}else{
				if(!self.duration){ 
					targetPageView.onShow();
					targetPageView.show();
					targetPageView.status=true;
					currentPageView.hide();
					currentPageView.status=false;
					currentPageView.onHide();
				}
				
								
			}
			
		},
		load:function(pageViewName){
			var self=this,
			    currentPageView=this.PageViewMgr.getCurrentShow();
			require([pageViewName],function(pageView){ 
				 var pv=new pageView();
				 if(self.goParam.anim){
					 /**
						 * pv.$pageEl.animate({ left:'0px'
						 * },self.goParam.anim,self.goParam.easing,function(){
						 * //console.log(this); pv.status=true;
						 * currentPageView.hide(); currentPageView.status=false;
						 * 
						 * });
						 */
					 if(!self.duration){
						 self.duration=true;
						 pv.$pageEl.addClass("animated").addClass("fadeInRight").one("webkitAnimationEnd", function(){
							 self.duration=false;
							 pv.status=true;
							 if(currentPageView){
								 currentPageView.hide();
								 currentPageView.status=false;
								 currentPageView.onHide();
								 currentPageView.$pageEl.removeClass("animated").removeClass(self.animate.animateIn);
							 }
							 
							 pv.$pageEl.removeClass("animated").removeClass(self.animate.animateIn);
						 });
					 }
					 
				 }else{
					 if(!self.duration){
						 if(currentPageView){ 
							 currentPageView.hide();
							 currentPageView.onHide();
							 currentPageView.status=false;
						 }
						 self.PageViewMgr.mapping[pageViewName].show(); 
					 }
					 
					
					 // alert(123);
					 /**
						 * self.PageViewMgr.mapping[pageViewName].$pageEl.css({
						 * left:'0px' });
						 * self.PageViewMgr.mapping[pageViewName].$pageEl.show();
						 * if(currentPageView){ currentPageView.hide();
						 * currentPageView.status=false; }
						 */
					
				 }
			
			});
		},
		// 每锟斤拷锟斤拷转使锟斤拷锟斤拷转锟斤拷锟斤拷
		goParam:{
			anim:false,
			duration:300,
			easing:'linear'
		},
		// 全锟斤拷使锟斤拷
		animate:{
			anim:true,
			duration:300,
			// easing:'linear'
			animateIn:Animate.FadingEntrances[5],
			animateOut:Animate.FadingExits[5]
			
		},
		// 锟角凤拷锟斤拷锟斤拷效锟斤拷锟斤拷
		duration:false,
		// 锟斤拷要锟斤拷锟絘ndroid back 锟斤拷钮
	    hybridBack:function(){
	    	var currentPage= UC.PageViewMgr.getCurrentShow();
	    	currentPage.triggerBack();
	    	
	    },
	    previewImage:function(url,bakUrl){   
	    	$("#photograph").find("img").eq(0).attr("src",bakUrl);
	    	$("#photographIcon").hide();
	    	$("#photograph").data("url",url); 
	    	$("#photograph").data("bakUrl",bakUrl); 
	    	// UC.go('imageView',{url:url});
	    	window.Native.gotoPreviewImage(url); 
	    	// this.addYL(123, url);
	    },
	    hideLoading:function(id,url){
	    	
	    	/**
			 * var ylArray=JSON.parse(localStorage.getItem("ylArray"));
			 * if(!ylArray){ alert(123); ylArray=[]; } var ylObj={ id:id,
			 * url:url };
			 * 
			 * ylArray.push(ylObj);
			 * localStorage.setItem("ylArray",JSON.stringfy(ylArray));
			 * UC.PageViewMgr.mapping["yulu"].refreshDaiYuLu();
			 */
	    	// alert(UC.PageViewMgr.mapping["yulu"]);
	    	// alert(UC.PageViewMgr.mapping["yulu"].hideLoading);
	    	var pg=UC.PageViewMgr.mapping["yulu"];
	    	pg.hideLoading("");
	    	var count= parseInt( pg.$el.find("#prerecordCount").val())-1;
	    	pg.$el.find("#prerecordCount").val("count");
	    	$("#photograph").find("img").eq(0).attr("src","");
	    	$("#photographIcon").show();
	    	$("#photograph").data("url",""); 
	    	$("#photograph").data("bakUrl",""); 
	    	pg.showAlert("涓婁紶鎴愬姛.....");
	    	return;
	    },
	    removeYL:function(id){
	    	
	    },
	    hide:function(){
	    	
	    }
			
	};
	
	var Main=Backbone.Router.extend({
		
		routes: { 
			"*actions" : "defaultRoute"

			},

		defaultRoute : function(actions){
			/**
			 * var name, params=!actions?[]:actions.split("/");
			 * //console.log(actions);
			 * 
			 * if(window.location.hash){ name=params[0]; }
			 * 
			 * if(!name){ window.location.hash="login"; return; }
			 * UC.params=params; UC.show(name);
			 */

		},
		// 澶勭悊寮�満鐢婚潰
		procStartPage:function(){
			
		}
	});
	window.UC=UC;
	var main=new Main();
	Backbone.history.start();
});




define("alert",[],function(){
	
	var Alert=function(){
		 
		this.$alert;
		this.$confirm;
		this.$toast;
		this.$loading;
		
		/**
		 * param.title param.content param.autoHide
		 */
		Alert.prototype.alert=function(param){
			var self=this,
				param=param||"";
			self.maskHTML="<div class='error' style='overflow-y:hidden'><div class='error_text'>"+param+"</div><div class='error_button'></div></div>";
			if(self.$alert){
				return;
			}
			self.$alert=$(this.maskHTML).appendTo($("body"));
			Alert.prototype.adjust($(self.$alert[1]));
			self.$alert.click(function(){
				self.$alert.remove();
				self.$alert=null;
			});
			setTimeout(function(){
				if(self.$alert){
					self.$alert.remove();
					self.$alert=null;
				}
				
			},3000);
		};
		
		
		Alert.prototype.adjust=function($el){
			var screenWidth=$(document).width(),
				screenHeight=$(document).height(),
				elWidth=$el.width(),
				elHeight=$el.height();
			// console.log(screenWidth,elWidth);
			 $el.css({
				 left:(screenWidth-elWidth)/2
			 });
		};
		/**
		 * param.title param.cancel param.sure param.sureCallback
		 * param.cancelCallback param.autoHide
		 */
		Alert.prototype.confirm=function(param){
			var self=this;
			self.maskHTML="<div class='error'>" 
					     +"  <div class='error_text'>"+param.title+"</div>"
					     +"<div class='confirm_button'>"
					     +"<div class='confirm_button2' name='cancel'>"+param.cancel+"</div>"
					     +"<div class='confirm_button1' name='sure'>"+param.sure+"</div>"
					     +"</div>"
					     +"</div>";
			
			if(self.$confirm){
				return;
			}
			self.$confirm=$(this.maskHTML).appendTo($("body"));
			self.$confirm.addClass("animated").addClass("bounceIn");
			
			self.$confirm.find("[name='sure']").click(function(){
				self.$confirm.one('webkitAnimationEnd',function(){
					self.$confirm.remove();
				});
				self.$confirm.addClass("bounceOut"); 
				if(param.sureCallback){
					param.sureCallback();
				}
				
			});
			self.$confirm.find("[name='cancel']").click(function(){
				self.$confirm.one('webkitAnimationEnd',function(){
					self.$confirm.remove();
					self.$confirm=null;
				});
				self.$confirm.addClass("bounceOut");
				if(param.sureCallback){
					param.cancelCallback();
				}
			 
			});
			self.$confirm.on("click",function(){
				self.$confirm.one('webkitAnimationEnd',function(){
					if(self.$confirm){
						self.$confirm.remove();
						self.$confirm=null;
					}
					
				});
				self.$confirm.addClass("bounceOut");
				
			});
			
		}
		/**
		 * param.content param.duration param.callback param.autoHide
		 */
		Alert.prototype.toast=function(param){
			var self=this;
			self.maskHTML="<div class='cui-view cui-mask cui-opacitymask' style='position: absolute; left: 0px; top: 0px; width: 100%; height: "+$(document).height()+"px;  display: block;'><div></div></div>";
			self.toastHTML="<div class='cui-view cui-layer cui-toast' style='visibility: visible;  top: 50%; position: fixed;'><div class='cui-layer-padding'><div class='cui-layer-content'>"+param.content+"</div></div></div>";
			
			
			self.$toast=$(this.maskHTML+this.toastHTML).appendTo($("body"));
			Alert.prototype.adjust($(self.$toast[1]));
			$(window).on('resize',function(){
				self.adjust($(self.$toast[1]));
			});
			self.$toast.on("click",function(){
				self.$toast.remove();
			});
			 
			setTimeout(function(){
				
			},3000);
			 
		}
		/**
		 * param.duration param.autoHide
		 */
		Alert.prototype.loading=function(param){
			var self=this,
				height=$(document).height(),
				param=param||"";
			self.maskHTML="<div class='loading' style='height:"+height+"px'> <div class='loading_icon'><img src='res/images/loading.gif'></div><div class='loading_text'>"+param+"</div> </div>";
			 
			self.$loading=$(this.maskHTML).appendTo($("body"));
			
			// self.$loading.addClass("animated").addClass("bounceIn");
			/**
			 * Alert.prototype.adjust($(self.$loading[1]));
			 * $(window).on('resize',function(){
			 * self.adjust($(self.$loading[1])); });
			 * 
			 */
			self.$loading.on("click",function(){
				// self.$loading.addClass("animated").addClass("bounceOut");
				// self.$loading.remove();
			});
			// setTimeout(function(){},5000);
			 
			
		}
		Alert.prototype.hideLoading=function(param){
			var self=this;
			if(self.$loading){
				self.$loading.addClass("animated").addClass("bounceOut");
				self.$loading.remove();
			}
			
		}
		Alert.prototype.hide=function(){
			var self=this;
			if(self.$loading){
				self.$loading.remove();
			} 
			if(self.$toast){
				self.$toast.remove();			
			}
			if(self.$confirm){
				self.$confirm.remove();		
			}
			if(self.$alert){
				self.$alert.remove();		
			} 
		}
	}
	return Alert;
});




define("BaseView",['lib','text!TemplateHeader','alert'],function(lib,TemplateHeader,alert){
	var Header=function(param){
		this.title=param.title||"";
		this.back=param.back||false;
		this.home=param.home||false;
		this.view=param.view||false;
		this.pageView=param.pageView;
		this.$headerEl=null;
		this.$backBt=null;
		this.$homeBt=null;
		this.events={
			returnHandler:function(){
				
			},
			homeHandler:function(){
				 
			}
				
		};
		
		Header.prototype.set=function(param){
			 
			
		   if(param.view){
				this.$headerEl.show();
			}else{
				this.$headerEl.hide();
			}
		    if(!param.back){
		    	this.$headerEl.find("#headerBack").hide();
		    }
			this.$headerEl.find("#title").html(param.title);
			if(param.events){
				if(param.events.returnHandler){
					this.events.returnHandler=param.events.returnHandler;
				}
				if(param.events.homeHandler){
					this.events.homeHandler=param.events.homeHandler;
				}
			}
		 
			// this.render(param);
			this.eventSetUp();
		};
		Header.prototype.initTemplate=function(){
			 return _.template(TemplateHeader);
		};
		Header.prototype.render=function(param){
			 var self=this;
			 var data=param||{
				 title:self.title,
				 back:self.back,
				 home:self.home,
				 view:self.view
			 };
			 var tpl = this.initTemplate();
	         this.$headerEl=$(tpl({ "data": data })).prependTo(this.pageView.$pageEl);   
	         // this.eventSetUp();
	       	 // this.pageView.$el.html(tpl({ "data": param }));
		};
		
		Header.prototype.eventSetUp=function(){
			var self=this;
			 
			this.$backBt=this.$headerEl.find("#headerBack").on("click",this.events.returnHandler); 
			this.$homeBt=this.$headerEl.find("#headerHome").on("click",this.events.homeHandler); 
			 
		};
		
	}
	var BasePageView=Backbone.View.extend({
		// 閿熸枻鎷烽敓鎻鎷烽敓鏂Oゆ嫹閿熸枻鎷烽敓鏂ゆ嫹 閿熸枻鎷烽敓鏂ゆ嫹閿熸枻鎷穞itle
		$el:null,
		// 閿熸枻鎷烽敓鎻鎷烽敓锟�
		$pageEl:null,
		name:null,
		timestap:null,
		events:{},
		status:true,
		header:null, 
		alert:null, 
		initialize:function(){
			var self=this,
				$el,
				name=window.location.hash.substring(1),
				id=new Date().getTime();
			self.name=name;
			self.timestap=id;
			self.alert=new alert();
		
			var height= $(window).height()+48; 
			self.$pageEl= $("<div id='client_id_viewport_"+id+"' style='display:block;position:absolute;width:100%;height:100%;'page-url='"+name+"' data-view-name='"+name+"' ></div>").appendTo($("body"));
			
			self.$el=$("<div id='mian_viewport' style='height:100%;'></div>").appendTo(self.$pageEl);
			
			var header=new Header({pageView:self,title:'',back:false,home:false,view:false});
			header.render();
			self.header=header;
			self.onCreate();
				
					
			UC.PageViewMgr.add(self);
			self.onShow();
			
		},
		// 閿熸枻鎷烽敓鏂ゆ嫹header 閿熸枻鎷穊ack 閿熸枻鎷烽挳
		triggerBack:function(){
			this.header.$backBt.trigger("click");
		},
		show:function(){ 
			this.$pageEl.show();
			
		},
		hide:function(){
			
			this.$pageEl.hide();
		},
		onCreate:function(){
			
		},
		onShow:function(){
			console.log("show...............");
		},		
		onHide:function(){
			
			var self=this;
			self.hideLoading();
		},
		showAlert:function(param){
			this.alert.alert(param);
		},
		
		showConfirm:function(param){
			
			this.alert.confirm(param);
		},
		
		showToast:function(param){
			
			this.alert.toast(param);
		},
		showLoading:function(param){
			
			this.alert.loading(param);
		},
		hideAlert:function(param){
			this.alert.hideAlert(param);
		},
		
		hideConfirm:function(param){
			
			this.alert.hideConfirm(param);
		},
		
		hideToast:function(param){
			
			this.alert.hideToast(param);
		},
		hideLoading:function(param){
			alert("hide...");
			this.alert.hideLoading(param);
		},
		// 鍏抽棴鎵�湁鎻愮ず
		hideTips:function(){
			this.alert.hide();
		}, 
	    // 濉弧鑳屾櫙楂樺害
	    fullBGHeight:function(){
	    	var self=this,
	    		height=$(document).height();
	    	 
	    	console.log($(document).height());
	    }
		
	});
	return BasePageView;
});






