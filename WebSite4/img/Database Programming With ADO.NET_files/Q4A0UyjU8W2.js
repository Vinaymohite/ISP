/*!CK:208514748!*//*1456170288,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["zHp69"]); }

__d('getDOMImageSize',['EncryptedImg','URI'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(o){o.onload=null;o.onerror=null;o.onreadystatechange=null;o._callback=null;o._thisObj=null;o._srcStr=null;o.parentNode&&o.parentNode.removeChild(o);}function k(){var o=this;if(o._callback)o._callback.call(o._thisObj,o.naturalWidth||o.width,o.naturalHeight||o.height,o._srcStr);j(o);}function l(){var o=this;if(o.readyState==='complete')k.call(o);}function m(){var o=this;if(o._callback)o._callback.call(o._thisObj,0,0,o._srcStr);j(o);}function n(o,p,q){q=q||null;if(!o){p.call(q,0,0,'');return;}var r=document.body;if(!r){setTimeout(n.bind(this,o,p,q),500);return;}var s;if(typeof o==='string'){s=o;}else if(typeof o==='object')if(typeof o.width==='number'&&typeof o.height==='number'){if(typeof o.src==='string'){s=o.src;if(o.naturalWidth&&o.naturalHeight){p.call(q,o.naturalWidth,o.naturalHeight,s);return;}}if(typeof o.uri==='string'){s=o.uri;if(o.width&&o.height){p.call(q,o.width,o.height,s);return;}}}else if(o instanceof i)s=o.toString();if(!s){p(0,0,o);return;}var t=document.createElement('img');t.onreadystatechange=l;t.onload=k;t.onerror=m;t._callback=p;t._thisObj=q;t._srcStr=s;if(h.isEncrypted(s)){h.insertIntoDOM(s,t);}else t.src=s;t.style.cssText='\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  '.replace(/\s+/,' ');r.insertBefore(t,r.firstChild);}f.exports=n;},null);
__d('CachedDOMImageSizePool',['debounce','getDOMImageSize'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l){'use strict';this.$CachedDOMImageSizePool1={};this.$CachedDOMImageSizePool2=l;this.$CachedDOMImageSizePool3=0;this.$CachedDOMImageSizePool4=k;this.$CachedDOMImageSizePool5=h(this.$CachedDOMImageSizePool6,5000,this);this.$CachedDOMImageSizePool7={};this.$CachedDOMImageSizePool8={};}j.prototype.get=function(k,l,m){'use strict';if(!k){l.call(m,0,0,k);return;}var n=this.$CachedDOMImageSizePool1[k];if(n){n.lastAccessTime=Date.now();l.call(m,n.width,n.height,n.src);}else if(this.$CachedDOMImageSizePool7[k]){this.$CachedDOMImageSizePool7[k].push(l);this.$CachedDOMImageSizePool8[k].push(m);}else{this.$CachedDOMImageSizePool7[k]=[l];this.$CachedDOMImageSizePool8[k]=[m];i(k,this.$CachedDOMImageSizePool9,this);}};j.prototype.set=function(k,l,m){'use strict';if(this.$CachedDOMImageSizePool3>this.$CachedDOMImageSizePool4)this.$CachedDOMImageSizePool5();var n=this.$CachedDOMImageSizePool1;if(k&&!n[k]){var o={width:l,height:m,src:k,lastAccessTime:Date.now()};n[k]=o;this.$CachedDOMImageSizePool3++;}};j.prototype.$CachedDOMImageSizePool9=function(k,l,m){'use strict';this.set(m,k,l);var n=this.$CachedDOMImageSizePool7[m],o=this.$CachedDOMImageSizePool8[m];for(var p=0,q=n.length;p<q;p++)n[p].call(o[p],k,l,m);delete this.$CachedDOMImageSizePool7[m];delete this.$CachedDOMImageSizePool8[m];};j.prototype.$CachedDOMImageSizePool6=function(){'use strict';var k=Date.now(),l=this.$CachedDOMImageSizePool1,m=this.$CachedDOMImageSizePool3,n=this.$CachedDOMImageSizePool2;for(var o in l){var p=l[o];if(k-p.lastAccessTime>n){delete l[o];m--;}}this.$CachedDOMImageSizePool3=m;};f.exports=j;},null);
__d('BackgroundImage.react',['CachedDOMImageSizePool','Image.react','React','XUISpinner.react','cx','invariant','joinClasses','clamp'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=j.PropTypes,q='(-?(\\d+\\.)?\\d+(px|\\%))',r=new RegExp('^'+q+'?(\\s'+q+')?$','g'),s=new h(50,10*60*1000),t=j.createClass({displayName:'BackgroundImage',propTypes:{src:p.string,width:p.number.isRequired,height:p.number.isRequired,backgroundSize:p.oneOf(['contain','cover','containinside','coverinside']),loadingIndicatorStyle:p.oneOf(['none','large','small']),backgroundPosition:function(u,v,w){var x=u[v];if(x){!(typeof x==='string')?m(0):undefined;!x.match(r)?m(0):undefined;}!(u.backgroundFocus==null||u.backgroundPosition==null)?m(0):undefined;},backgroundFocus:function(u,v,w){var x=u[v];if(x){!(typeof x==='string')?m(0):undefined;!x.match(r)?m(0):undefined;}!(u.backgroundFocus==null||u.backgroundPosition==null)?m(0):undefined;},onImageLoad:p.func,optimizeResizeSpeed:p.bool,onContextMenu:p.func},getInitialState:function(){return {imageWidth:null,imageHeight:null,imageSrc:this.props.src,loading:true};},getDefaultProps:function(){return {optimizeResizeSpeed:false,loadingIndicatorStyle:'none'};},componentDidMount:function(){this._resolveImageSize();},componentDidUpdate:function(u){if(this.props.src!==this.state.imageSrc)this.setState({imageWidth:0,imageHeight:0,imageSrc:this.props.src,loading:true},this._resolveImageSize);},_resolveImageSize:function(){var u=this.state.imageSrc;if(u)s.get(u,this._onImageSizeResolved,this);},render:function(){var u={width:this.props.width+'px',height:this.props.height+'px'},v=n(this.props.className,"_5f0d");return (j.createElement('div',babelHelpers['extends']({},this.props,{className:n(this.props.className,v),style:babelHelpers['extends']({},this.props.style||{},u),onContextMenu:this.props.onContextMenu}),this._renderImage(),this._renderContent(),this._renderLoadingIndicator()));},_renderLoadingIndicator:function(){if(!this.state.loading||this.props.loadingIndicatorStyle==='none')return null;return (j.createElement('div',{className:"_1qe- _5lar"},j.createElement('div',{className:"_1qe_"},j.createElement('div',{className:"_1qf0"},j.createElement(k,{size:this.props.loadingIndicatorStyle})))));},_renderContent:function(){if(this.props.children)return (j.createElement('div',{className:"_1qe-"},j.createElement('div',{className:"_1qe_"},j.createElement('div',{className:"_1qf0"},this.props.children))));},_renderImage:function(){if(!this.state.imageWidth||!this.state.imageHeight)return;var u=this.props.width,v=this.props.height,w,x;switch(this.props.backgroundSize){case 'cover':w='cover';x=false;break;case 'coverinside':w='cover';x=true;break;case 'contain':w='contain';x=false;break;case 'containinside':w='contain';x=true;}var y=this.state.imageWidth,z=this.state.imageHeight,aa=u/v,ba=y/z;if(w==='contain')if((y>u||!x)&&ba>=aa){y=u;z=y/ba;}else if(z>v||!x){z=v;y=z*ba;}if(w==='cover')if((y>u||!x)&&ba>=aa){z=v;y=z*ba;}else if(z>v||!x){y=u;z=y/ba;}var ca=this._getImageStyle(y,z);return (j.createElement(i,{alt:'',className:"_5i4g"+(this.props.optimizeResizeSpeed?' '+"_5sjv":''),style:ca,src:this.state.imageSrc}));},_getImageStyle:function(u,v){var w=['50%','50%'],x=this._getBackgroundPositionPxValue;if(this.props.backgroundPosition){w=this.props.backgroundPosition.split(' ');}else if(this.props.backgroundFocus){w=this.props.backgroundFocus.split(' ');x=this._getBackgroundFocusPxValue;}return {width:Math.round(u)+'px',height:Math.round(v)+'px',left:x(w[0],u,this.props.width),top:x(w[1]||w[0],v,this.props.height)};},_getBackgroundPositionPxValue:function(u,v,w){var x=parseFloat(u),y=u.substr(x.toString().length);if(y==='px')return u;return Math.round((w-v)*(x/100))+'px';},_getBackgroundFocusPxValue:function(u,v,w){var x=parseFloat(u),y=u.substr(x.toString().length);if(v<w)return '0';var z=y==='px'?x:Math.round(v*(x/100)),aa=z-w/2;aa=o(aa,0,v-w);return -aa+'px';},_onImageSizeResolved:function(u,v,w){if(!this.isMounted()||this.state.imageSrc!==w)return;var x=this.props.onImageLoad?this.props.onImageLoad.bind(null,u,v):null;this.setState({imageWidth:u,imageHeight:v,loading:false},x);}});f.exports=t;},null);
__d('CloseButton.react',['React','Image.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.createClass({displayName:'CloseButton',render:function(){var n=this.props,o=n.size||'medium',p=n.appearance||'normal',q=o==='small',r=o==='huge',s=p==='dark',t=p==='inverted',u=n.ajaxify||null,v=n.rel||null,w="uiCloseButton"+(q?' '+"uiCloseButtonSmall":'')+(r?' '+"uiCloseButtonHuge":'')+(q&&s?' '+"uiCloseButtonSmallDark":'')+(q&&t?' '+"uiCloseButtonSmallInverted":'')+(!q&&s?' '+"uiCloseButtonDark":'')+(!q&&t?' '+"uiCloseButtonInverted":''),x=k._("Close");return (h.createElement('a',babelHelpers['extends']({},this.props,{ajaxify:u,href:'#',role:'button','aria-label':n.ariaLabel||x,'data-hover':n.tooltip&&'tooltip','data-skipchecker':null,'data-tooltip-alignh':n.tooltip&&'center','data-tooltip-content':n.tooltip,className:l(this.props.className,w),rel:v}),h.createElement(i,{className:'uiCloseButtonHighContrast',src:'/images/chat/tab/close.png'})));}});f.exports=m;},null);
__d('TypeaheadViewPropTypes',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h.PropTypes,j={ariaOwneeID:i.string,highlightedEntry:i.object,entries:i.array.isRequired,onSelect:i.func.isRequired,onHighlight:i.func,onRenderHighlight:i.func,role:i.string};f.exports=j;},null);
__d('XUITypeaheadViewContainer.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUITypeaheadViewContainer',render:function(){return (h.createElement('ul',{className:j("_599r",this.props.className),id:this.props.arieaOwneeID,role:this.props.role},this.props.children));}});f.exports=k;},null);
__d('XUITypeaheadViewItem.react',['BackgroundImage.react','Badge.react','ImageBlock.react','React','TextWithEmoticons.react','TypeaheadViewItem','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=k.PropTypes,q=k.createClass({displayName:'XUITypeaheadViewItem',mixins:[m.Mixin],propTypes:babelHelpers['extends']({},m.propTypes,{splitText:p.bool}),render:function(){var r=this.props.entry,s=this.props.splitSubtext?r.getSubtitle().split(' \u00b7 ')[0]:r.getSubtitle(),t=s?k.createElement('div',{className:"_599q"},s):null,u=r.getPhoto()?k.createElement(h,{width:32,height:32,backgroundSize:'cover',src:r.getPhoto()}):k.createElement('span',null),v=r.getAuxiliaryData(),w=null;if(v&&v.verified)w=k.createElement(i,null);var x="_599m"+(!t?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":'');x=o(x,this.props.className);return (k.createElement('li',{'aria-selected':this.props.highlighted,className:x,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role},k.createElement(j,{spacing:'medium'},u,k.createElement('div',null,k.createElement('div',{className:"_599p"},k.createElement(l,{renderEmoticons:false,renderEmoji:true,text:r.getTitle()}),w),t))));}});f.exports=q;},null);
__d('XUITypeaheadView.react',['React','TypeaheadViewPropTypes','XUITypeaheadViewContainer.react','XUITypeaheadViewItem.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.createClass({displayName:'XUITypeaheadView',propTypes:i,getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(n){var o=n===this.props.highlightedEntry;return (h.createElement(k,{key:n.getUniqueID(),entry:n,highlighted:o,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function(){var n=!this.props.entries.length?"_599s":'';return (h.createElement(j,{className:n,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this._renderItem)));}});f.exports=m;},null);
__d('Grid.react',['React','ReactChildren','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'Grid',propTypes:{cols:l.number.isRequired,fixed:l.bool,alignv:l.oneOf(['top','middle','bottom']),alignh:l.oneOf(['left','center','right']),spacing:l.string},render:function(){var o=this.props,p=o.alignh,q=o.alignv,r=o.children,s=o.cols,t=o.fixed,u=o.spacing,v=i.count(r),w=[],x=[],y=0;i.forEach(r,function(z,aa){if(z===null||z===undefined)return;var ba=z.type===n;y+=ba?Math.max(z.props.colSpan||0,1):1;var ca=y===s?"_51mw":'';if(!ba){z=h.createElement(n,{alignh:p,alignv:q,className:k(u,ca),key:z.key||aa},z);}else z=h.cloneElement(z,{key:z.key||aa,alignh:z.props.alignh||p,alignv:z.props.alignv||q,className:k(z.props.className,u,ca)});x.push(z);if(y%s===0||aa+1===v){if(t&&y<s){for(var da=y;da<s;da++)x.push(h.createElement(n,{key:aa+da}));y=s;}w.push(h.createElement('tr',{className:"_51mx",key:aa},x));x=[];y=0;}});return (h.createElement('table',babelHelpers['extends']({},this.props,{className:k(this.props.className,"uiGrid"+(' '+"_51mz")+(t?' '+"_5f0n":'')),cellSpacing:'0',cellPadding:'0'}),h.createElement('tbody',null,w)));}}),n=h.createClass({displayName:'GridItem',propTypes:{alignv:l.oneOf(['top','middle','bottom']),alignh:l.oneOf(['left','center','right'])},render:function(){var o=k(this.props.className,"_51m-"+(this.props.alignv==='top'?' '+"vTop":'')+(this.props.alignv==='middle'?' '+"vMid":'')+(this.props.alignv==='bottom'?' '+"vBot":'')+(this.props.alignh==='left'?' '+"hLeft":'')+(this.props.alignh==='center'?' '+"hCent":'')+(this.props.alignh==='right'?' '+"hRght":''));return (h.createElement('td',babelHelpers['extends']({},this.props,{className:o})));}});m.GridItem=n;f.exports=m;},null);
__d('AbstractSearchSource',['Promise'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();i.prototype.bootstrap=function(j){'use strict';if(!this.$AbstractSearchSource1)this.$AbstractSearchSource1=new h(function(k){this.bootstrapImpl(k);}.bind(this));return this.$AbstractSearchSource1.then(j);};i.prototype.search=function(j,k,l){'use strict';this.searchImpl(j,k,l);};i.prototype.bootstrapImpl=function(j){'use strict';j();};i.prototype.searchImpl=function(j,k,l){'use strict';throw new Error('Abstract method #searchImpl is not implemented.');};i.prototype.clearBootstrappedData=function(){'use strict';this.$AbstractSearchSource1=null;};function i(){'use strict';}f.exports=i;},null);
__d('SearchSourceQueryStatus',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ACTIVE:'ACTIVE',COMPLETE:'COMPLETE'};f.exports=h;},null);
__d('SearchSourceCallbackManager',['SearchSourceQueryStatus','createObjectFrom','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.ACTIVE,l=h.COMPLETE;function m(o){'use strict';this.$SearchSourceCallbackManager1=o.parseFn;!(typeof this.$SearchSourceCallbackManager1==='function')?j(0):undefined;this.$SearchSourceCallbackManager2=o.matchFn;!(typeof this.$SearchSourceCallbackManager2==='function')?j(0):undefined;this.$SearchSourceCallbackManager3=o.alwaysPrefixMatch||false;this.$SearchSourceCallbackManager4=o.indexFn||n;this.reset();}m.prototype.search=function(o,p,q){'use strict';var r=this.$SearchSourceCallbackManager5(o,p,q);if(r)return 0;this.$SearchSourceCallbackManager6.push({queryString:o,callback:p,options:q});var s=this.$SearchSourceCallbackManager6.length-1;this.$SearchSourceCallbackManager7.push(s);return s;};m.prototype.$SearchSourceCallbackManager5=function(o,p,q){'use strict';var r=this.$SearchSourceCallbackManager8(o),s=!!this.$SearchSourceCallbackManager9[o];if(!r.length){p([],o,s?l:k);return s;}var t=r.map(function(u){return this.$SearchSourceCallbackManager10[u];},this);p(t,o,s?l:k);return s;};m.prototype.$SearchSourceCallbackManager11=function(){'use strict';var o=this.$SearchSourceCallbackManager7;this.$SearchSourceCallbackManager7=[];o.forEach(this.$SearchSourceCallbackManager12,this);};m.prototype.$SearchSourceCallbackManager12=function(o){'use strict';var p=this.$SearchSourceCallbackManager6[o];if(!p)return;var q=this.$SearchSourceCallbackManager5(p.queryString,p.callback,p.options);if(q){delete this.$SearchSourceCallbackManager6[o];return;}this.$SearchSourceCallbackManager7.push(o);};m.prototype.reset=function(){'use strict';this.$SearchSourceCallbackManager10={};this.$SearchSourceCallbackManager13={};this.$SearchSourceCallbackManager14={};this.$SearchSourceCallbackManager15={};this.$SearchSourceCallbackManager9={};this.$SearchSourceCallbackManager7=[];this.$SearchSourceCallbackManager6=[undefined];};m.prototype.addLocalEntries=function(o){'use strict';o.forEach(function(p){var q=p.getUniqueID(),r=this.$SearchSourceCallbackManager4(p);this.$SearchSourceCallbackManager10[q]=p;this.$SearchSourceCallbackManager13[q]=r;var s=this.$SearchSourceCallbackManager1(r);s.tokens.forEach(function(t){if(!this.$SearchSourceCallbackManager14.hasOwnProperty(t))this.$SearchSourceCallbackManager14[t]={};this.$SearchSourceCallbackManager14[t][q]=true;},this);},this);this.$SearchSourceCallbackManager11();};m.prototype.addQueryEntries=function(o,p,q){'use strict';if(q===l)this.setQueryStringAsExhausted(p);var r=this.$SearchSourceCallbackManager8(p),s=this.$SearchSourceCallbackManager1(p).flatValue;this.$SearchSourceCallbackManager15[s]=i(r,true);o.forEach(function(t){var u=t.getUniqueID();this.$SearchSourceCallbackManager10[u]=t;this.$SearchSourceCallbackManager13[u]=this.$SearchSourceCallbackManager4(t);this.$SearchSourceCallbackManager15[s][u]=true;},this);this.$SearchSourceCallbackManager11();};m.prototype.unsubscribe=function(o){'use strict';delete this.$SearchSourceCallbackManager6[o];};m.prototype.removeEntry=function(o){'use strict';delete this.$SearchSourceCallbackManager10[o];};m.prototype.getAllEntriesMap=function(){'use strict';return this.$SearchSourceCallbackManager10;};m.prototype.setQueryStringAsExhausted=function(o){'use strict';this.$SearchSourceCallbackManager9[o]=true;};m.prototype.unsetQueryStringAsExhausted=function(o){'use strict';delete this.$SearchSourceCallbackManager9[o];};m.prototype.$SearchSourceCallbackManager8=function(o){'use strict';var p=this.$SearchSourceCallbackManager16(o,this.$SearchSourceCallbackManager17(o)),q=this.$SearchSourceCallbackManager16(o,this.$SearchSourceCallbackManager18(o)),r=p.concat(q),s={},t=[];r.forEach(function(u){if(!s[u]&&this.$SearchSourceCallbackManager10[u]!==undefined){t.push(u);s[u]=true;}},this);return t;};m.prototype.$SearchSourceCallbackManager16=function(o,p){'use strict';var q=this.$SearchSourceCallbackManager19(o,p),r=this.$SearchSourceCallbackManager10;function s(t,u){if(q[t]!==q[u])return q[t]?-1:1;var v=r[t],w=r[u];if(v.getOrder()!==w.getOrder())return v.getOrder()-w.getOrder();var x=v.getTitle().length,y=w.getTitle().length;if(x!==y)return x-y;return v.getUniqueID()-w.getUniqueID();}return p.sort(s).slice();};m.prototype.$SearchSourceCallbackManager19=function(o,p){'use strict';var q={};p.forEach(function(r){q[r]=this.$SearchSourceCallbackManager2(o,this.$SearchSourceCallbackManager13[r]);},this);return q;};m.prototype.$SearchSourceCallbackManager17=function(o){'use strict';var p=this.$SearchSourceCallbackManager1(o,this.$SearchSourceCallbackManager3),q=this.$SearchSourceCallbackManager3?p.sortedTokens:p.tokens,r=q.length,s=p.isPrefixQuery?r-1:null,t={},u={},v={},w=false,x={},y=0;q.forEach(function(aa,ba){if(x.hasOwnProperty(aa))return;y++;x[aa]=true;for(var ca in this.$SearchSourceCallbackManager14){var da=ca===aa&&!t.hasOwnProperty(ca),ea=false;if(!da)ea=(this.$SearchSourceCallbackManager3||s===ba)&&ca.indexOf(aa)===0;if(!da&&!ea)continue;if(ca===aa){if(u.hasOwnProperty(ca))w=true;t[ca]=true;}else{if(t.hasOwnProperty(ca)||u.hasOwnProperty(ca))w=true;u[ca]=true;}for(var fa in this.$SearchSourceCallbackManager14[ca])if(ba===0||v.hasOwnProperty(fa)&&v[fa]==y-1)v[fa]=y;}},this);var z=Object.keys(v).filter(function(aa){return v[aa]==y;});if(w||y<r)z=this.$SearchSourceCallbackManager20(o,z);return z;};m.prototype.$SearchSourceCallbackManager18=function(o){'use strict';var p=this.$SearchSourceCallbackManager1(o).flatValue,q=this.$SearchSourceCallbackManager21(p);if(this.$SearchSourceCallbackManager15.hasOwnProperty(p))return q;return this.$SearchSourceCallbackManager20(o,q);};m.prototype.$SearchSourceCallbackManager21=function(o){'use strict';var p=0,q=null,r=this.$SearchSourceCallbackManager15;Object.keys(r).forEach(function(s){if(o.indexOf(s)===0&&s.length>p){p=s.length;q=s;}});return (r.hasOwnProperty(q)?Object.keys(r[q]):[]);};m.prototype.$SearchSourceCallbackManager20=function(o,p){'use strict';return p.filter(function(q){return this.$SearchSourceCallbackManager2(o,this.$SearchSourceCallbackManager13[q]);},this);};function n(o){return [o.getTitle(),o.getKeywordString()].join(' ');}f.exports=m;},null);
__d('AbstractAsyncSearchSource',['AbstractSearchSource','SearchSourceCallbackManager','SearchSourceQueryStatus','SearchableEntry','TokenizeUtil','emptyFunction','isValidUniqueID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p;if(c.__markCompiled)c.__markCompiled();var q=j.ACTIVE,r=j.COMPLETE;o=babelHelpers.inherits(s,h);p=o&&o.prototype;function s(t,u,v){'use strict';p.constructor.call(this);this.$AbstractAsyncSearchSource1=t.bootstrapRequests;this.$AbstractAsyncSearchSource2=t.queryRequests;this.$AbstractAsyncSearchSource3=t.auxiliaryFields;this.$AbstractAsyncSearchSource4=t.asyncErrorHandler||m;this.$AbstractAsyncSearchSource5=t.packageFn||this.$AbstractAsyncSearchSource6;this.$AbstractAsyncSearchSource7=t.requestData||{};this.$AbstractAsyncSearchSource8=t.getAllForEmptyQuery;this.$AbstractAsyncSearchSource9=[];this.$AbstractAsyncSearchSource10=new i({parseFn:l.parse,matchFn:l.isQueryMatch,indexFn:t.indexFn});this.$AbstractAsyncSearchSource11=u;this.$AbstractAsyncSearchSource12=v;}s.prototype.bootstrapImpl=function(t){'use strict';if(!this.$AbstractAsyncSearchSource1||!this.$AbstractAsyncSearchSource1.length){t();return;}var u=this.$AbstractAsyncSearchSource1.length,v=0;this.$AbstractAsyncSearchSource1.forEach(function(w){this.$AbstractAsyncSearchSource13(this.$AbstractAsyncSearchSource7,w,function(x){this.$AbstractAsyncSearchSource10.addLocalEntries(x);this.$AbstractAsyncSearchSource9=this.$AbstractAsyncSearchSource9.concat(x);v++;if(v===u){t();t=null;}}.bind(this));}.bind(this));};s.prototype.searchImpl=function(t,u,v){'use strict';if(this.$AbstractAsyncSearchSource8&&t===''){this.getBootstrappedEntries(function(ba){u(ba,t);});return;}var w=null,x={},y=this.$AbstractAsyncSearchSource10.search(t,function(ba,ca,da){if(v&&v.waitForAllResults&&da!==r)return;if(!w){w=ba;w.forEach(function(ea){x[ea.getUniqueID()]=true;});}else ba.forEach(function(ea){var fa=ea.getUniqueID();if(!x[fa]){w.push(ea);x[fa]=true;}});u(w,ca,da);},v);if(!y||!this.$AbstractAsyncSearchSource2||!this.$AbstractAsyncSearchSource2.length)return;var z=babelHelpers['extends']({value:t,existing_ids:w&&w.map(function(ba){return ba.getUniqueID();}).join(',')},this.$AbstractAsyncSearchSource7),aa=this.$AbstractAsyncSearchSource2.length;this.$AbstractAsyncSearchSource2.forEach(function(ba){this.$AbstractAsyncSearchSource13(z,ba,function(ca){aa--;this.$AbstractAsyncSearchSource14(ca,t,aa?q:r);}.bind(this));},this);};s.prototype.getBootstrappedEntries=function(t){'use strict';return this.bootstrap(function(){return t(this.$AbstractAsyncSearchSource9||[]);}.bind(this));};s.prototype.getAllEntriesMap=function(){'use strict';return this.$AbstractAsyncSearchSource10.getAllEntriesMap();};s.prototype.setRequestData=function(t){'use strict';this.$AbstractAsyncSearchSource7=t;};s.prototype.$AbstractAsyncSearchSource13=function(t,u,v){'use strict';this.$AbstractAsyncSearchSource11(t,u,function(w){return (v(this.$AbstractAsyncSearchSource12(w,this.$AbstractAsyncSearchSource5).filter(function(x){return !!x;})));}.bind(this),this.$AbstractAsyncSearchSource4);};s.prototype.$AbstractAsyncSearchSource15=function(t){'use strict';this.$AbstractAsyncSearchSource10.addLocalEntries(t);};s.prototype.$AbstractAsyncSearchSource14=function(t,u,v){'use strict';this.$AbstractAsyncSearchSource10.addQueryEntries(t,u,v);};s.prototype.$AbstractAsyncSearchSource6=function(t,u){'use strict';var v=t.title||t.text,w=t.uniqueID||t.uid;if(!v||!n(w))return null;return new k({uniqueID:w,order:t.order||t.index||u,title:v,subtitle:t.subtitle||t.category||t.subtext,keywordString:t.keywordString||t.tokens,type:t.type,photo:t.photo,uri:t.uri||t.path,auxiliaryData:this.$AbstractAsyncSearchSource16(t)});};s.prototype.$AbstractAsyncSearchSource16=function(t){'use strict';var u;if(this.$AbstractAsyncSearchSource3){u={};for(var v in this.$AbstractAsyncSearchSource3){var w=this.$AbstractAsyncSearchSource3[v];u[v]=t[w];}}if(t.aux_data)u=babelHelpers['extends']({},u,t.aux_data);return u;};f.exports=s;},null);
__d("TypeaheadNavigation",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={moveUp:function(i,j,k){var l=i.indexOf(j),m=l==-1?i.length-1:l-1;k(m==-1?null:i[m]);},moveDown:function(i,j,k){var l=i.indexOf(j)+1;k(l==i.length?null:i[l]);}};f.exports=h;},null);
__d('WebAsyncSearchSourceUtils',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={normalizeResponse:function(i,j){var k=i.getPayload(),l;if(Array.isArray(k)){l=k;}else if(k&&k.entries){l=k.entries;}else l=[];return l.map(j,this);}};f.exports=h;},null);
__d('WebAsyncSearchSource',['AbstractAsyncSearchSource','AbstractSearchSource','AsyncRequest','WebAsyncSearchSourceUtils'],function a(b,c,d,e,f,g,h,i,j,k){var l,m;if(c.__markCompiled)c.__markCompiled();l=babelHelpers.inherits(n,i);m=l&&l.prototype;function n(o){'use strict';m.constructor.call(this);this.$WebAsyncSearchSource1=new h(o,this.$WebAsyncSearchSource2,k.normalizeResponse);}n.prototype.bootstrapImpl=function(o){'use strict';this.$WebAsyncSearchSource1.bootstrap(o);};n.prototype.searchImpl=function(o,p,q){'use strict';this.$WebAsyncSearchSource1.search(o,p,q);};n.prototype.getBootstrappedEntries=function(o){'use strict';return this.$WebAsyncSearchSource1.getBootstrappedEntries(o);};n.prototype.getAllEntriesMap=function(){'use strict';return this.$WebAsyncSearchSource1.getAllEntriesMap();};n.prototype.setRequestData=function(o){'use strict';this.$WebAsyncSearchSource1.setRequestData(o);};n.prototype.$WebAsyncSearchSource2=function(o,p,q,r){'use strict';new j(p.uri).setData(babelHelpers['extends']({},o,p.data)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(q).setErrorHandler(r).send();};f.exports=n;},null);