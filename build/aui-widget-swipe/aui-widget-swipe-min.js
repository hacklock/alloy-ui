YUI.add("aui-widget-swipe",function(e,t){function r(){}var n=e.getClassName("widget","swipe");r.prototype={WIDGET_INDEX_ATTRIBUTE:"index",WIDGET_ITEM_SELECTOR:"img",initializer:function(){e.onceAfter(this._afterWidgetUISetVisible,this,"_uiSetVisible"),this.on("responsive",this._onResponsiveSwipe),this.after({responsive:this._afterResponsiveSwipe,swipeChange:this._uiSetSwipe})},destructor:function(){this._scrollView&&(this._scrollView.destroy(),this._scrollView=null,this._detachSwipeEvents())},_afterIndexChange:function(e){this.get(this.WIDGET_INDEX_ATTRIBUTE)!==e.newVal&&this.set(this.WIDGET_INDEX_ATTRIBUTE,e.newVal)},_afterResponsiveSwipe:function(){this._scrollView&&!this._scrollView.get("disabled")&&(this.get("boundingBox").addClass(n),e.soon(e.bind(this._syncScrollUI,this)))},_afterWidgetIndexChange:function(e){this._scrollView&&e.newVal!==this._scrollView.pages.get("index")&&this._scrollToCurrentIndex()},_afterWidgetUISetVisible:function(){this.get("visible")&&(this._uiSetSwipe(),this._syncScrollUI())},_attachSwipeEvents:function(){this._swipeEventHandles||(this._swipeEventHandles=[e.after("windowresize",e.bind(this._syncScrollUI,this))],this._scrollView.pages&&this._swipeEventHandles.push(this._scrollView.pages.after("indexChange",e.bind(this._afterIndexChange,this)),this.after(this.WIDGET_INDEX_ATTRIBUTE+"Change",this._afterWidgetIndexChange)))},_detachSwipeEvents:function(){this._swipeEventHandles&&((new e.EventHandle(this._swipeEventHandles)).detach(),this._swipeEventHandles=null)},_disableScrollView:function(){this._scrollView&&(this._scrollView.set("disabled",!0),this.get("boundingBox").removeClass(n),this._detachSwipeEvents())},_enableScrollView:function(){this.get("boundingBox").addClass(n);if(this._scrollView){this._scrollView.set("disabled",!1),this._attachSwipeEvents();return}if(!this.get("visible"))return;this._scrollView=new e.ScrollView(this.get("swipe")),this._plugPaginator(),this._scrollView.render(),this._attachSwipeEvents()},_onResponsiveSwipe:function(){this.get("boundingBox").removeClass(n)},_plugPaginator:function(){this.get("useScrollViewPaginator")&&this._scrollView.plug(e.Plugin.ScrollViewPaginator,{index:this.get(this.WIDGET_INDEX_ATTRIBUTE),selector:this.WIDGET_ITEM_SELECTOR})},_setSwipe:function(t){if(e.Lang.isBoolean(t)){if(!t)return!1;t={}}return e.merge({axis:"x",contentBox:this.get("contentBox"),flick:{minDistance:10,minVelocity:.3,axis:"x"}},t)},_scrollToCurrentIndex:function(){this._scrollView.pages&&this._scrollView.pages.scrollToIndex(this.get(this.WIDGET_INDEX_ATTRIBUTE),0)},_syncScrollUI:function(){this._scrollView&&(this._scrollView.syncUI(),this._scrollToCurrentIndex())},_uiSetSwipe:function(){this.get("swipe")?this._enableScrollView():this._disableScrollView()}},r.ATTRS={swipe:{setter:"_setSwipe",value:{}},useScrollViewPaginator:{value:!0}},e.WidgetSwipe=r},"3.1.0-deprecated.21",{requires:["classnamemanager","scrollview-base","scrollview-paginator","timers"]});
