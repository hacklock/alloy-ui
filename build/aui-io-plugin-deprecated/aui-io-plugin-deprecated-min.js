YUI.add("aui-io-plugin-deprecated",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isString,s=function(t){return t instanceof e.Node},o=e.WidgetStdMod,u="Node",a="Widget",f="",l="failure",c="failureMessage",h="host",p="icon",d="io",v="IOPlugin",m="loading",g="loadingMask",y="node",b="outer",w="parseContent",E="queue",S="rendered",x="section",T="showLoading",N="success",C="type",k="where",L=e.getClassName,A=L(p,m),O=e.Component.create({NAME:v,NS:d,ATTRS:{node:{value:null,getter:function(t){var n=this;if(!t){var r=n.get(h),i=n.get(C);if(i==u)t=r;else if(i==a){var s=n.get(x);r.getStdModNode(s)||r.setStdModContent(s,f),t=r.getStdModNode(s)}}return e.one(t)},validator:s},failureMessage:{value:"Failed to retrieve content",validator:i},loadingMask:{value:{}},parseContent:{value:!0,validator:r},showLoading:{value:!0,validator:r},section:{value:o.BODY,validator:function(e){return!e||e==o.BODY||e==o.HEADER||e==o.FOOTER}},type:{readOnly:!0,valueFn:function(){var t=this,n=u;return t.get(h)instanceof e.Widget&&(n=a),n},validator:i},where:{value:o.REPLACE,validator:function(e){return!e||e==o.AFTER||e==o.BEFORE||e==o.REPLACE||e==b}}},EXTENDS:e.IORequest,prototype:{bindUI:function(){var e=this;e.on("activeChange",e._onActiveChange),e.on(N,e._successHandler),e.on(l,e._failureHandler);if(e.get(C)==a&&e.get(T)){var t=e.get(h);t.after("heightChange",e._syncLoadingMaskUI,e),t.after("widthChange",e._syncLoadingMaskUI,e)}},_autoStart:function(){var e=this;e.bindUI(),O.superclass._autoStart.apply(this,arguments)},_bindParseContent:function(){var t=this,n=t.get(y);n&&!n.ParseContent&&t.get(w)&&n.plug(e.Plugin.ParseContent)},hideLoading:function(){var e=this,t=e.get(y);t.loadingmask&&t.loadingmask.hide()},setContent:function(e){var t=this;t._bindParseContent(),t._getContentSetterByType().apply(t,[e]),t.overlayMaskBoundingBox&&t.overlayMaskBoundingBox.remove()},showLoading:function(){var t=this,n=t.get(y);n.loadingmask?t.overlayMaskBoundingBox&&n.append(t.overlayMaskBoundingBox):(n.plug(e.LoadingMask,t.get(g)),t.overlayMaskBoundingBox=n.loadingmask.overlayMask.get("boundingBox")),n.loadingmask.show()},start:function(){var e=this,t=e.get(h);t.get(S)||t.after("render",function(){e._setLoadingUI(!0)}),O.superclass.start.apply(e,arguments)},_getContentSetterByType:function(){var t=this,n={Node:function(t){var n=this,r=n.get(y);t instanceof e.NodeList&&(t=t.toFrag()),t instanceof e.Node&&(t=t._node);var i=n.get(k);i==b?r.replace(t):r.insert(t,i)},Widget:function(e){var t=this,n=t.get(h);n.setStdModContent.apply(n,[t.get(x),e,t.get(k)])}};return n[this.get(C)]},_setLoadingUI:function(e){var t=this;t.get(T)&&(e?t.showLoading():t.hideLoading())},_syncLoadingMaskUI:function(){var e=this;e.get(y).loadingmask.refreshMask()},_successHandler:function(e,t,n){var r=this;r.setContent(this.get("responseData"))},_failureHandler:function(e,t,n){var r=this;r.setContent(r.get(c))},_onActiveChange:function(e){var t=this,n=t.get(h),r=t.get(C)==a;(!r||r&&n&&n.get(S))&&t._setLoadingUI(e.newVal)}}});e.Node.prototype.load=function(t,r,i){var s=this,o=t.indexOf(" "),u;o>0&&(u=t.slice(o,t.length),t=t.slice(0,o)),n.isFunction(r)&&(i=r,r=null),r=r||{},i&&(r.after=r.after||{},r.after.success=i);var a=r.where;return r.uri=t,r.where=a,u&&(r.selector=u,r.where=a||"replace"),s.plug(e.Plugin.IO,r),s},e.namespace("Plugin").IO=O},"3.1.0-deprecated.1",{requires:["aui-overlay-base-deprecated","aui-parse-content","aui-io-request","aui-loading-mask-deprecated"]});
