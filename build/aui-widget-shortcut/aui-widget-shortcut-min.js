YUI.add("aui-widget-shortcut",function(e,t){function r(){}var n="shortcut";r.prototype={initializer:function(){this.after("shortcutChange",this._afterShortcutChange),this._uiSetShortcut(this.get("shortcut"))},destructor:function(){r.unregisterShortcut(this)},_afterShortcutChange:function(){this._uiSetShortcut(this.get("shortcut"))},_setShortcut:function(t){return e.UA.mobile?!1:(t&&(t[e.UA.os]?t=t[e.UA.os]:t.defaultShortcut&&(t=t.defaultShortcut)),t)},_uiSetShortcut:function(e){e?r.registerShortcut(this):r.unregisterShortcut(this)}},r.ATTRS={shortcut:{setter:"_setShortcut",validator:function(t){return e.Lang.isBoolean(t)||e.Lang.isObject(t)},value:!1}},r.registerShortcut=function(t){r._shortcutItems.push(t),r._keypressEventHandle||(r._keypressEventHandle=e.one(e.config.doc).after("keydown",r._afterKeypress))},r.unregisterShortcut=function(t){var n=e.Array.indexOf(r._shortcutItems,t);n!==-1&&r._shortcutItems.splice(n,1)},r._afterKeypress=function(t){var i=String.fromCharCode(t.which),s=r._shortcutItems,o;for(var u=0;u<s.length;u++)o=s[u].get("shortcut"),o&&e.Array.indexOf(o.keys,i)!==-1&&(!o.altKey||o.altKey&&t.altKey)&&(!o.ctrlKey||o.ctrlKey&&t.ctrlKey)&&(!o.metaKey||o.metaKey&&t.metaKey)&&(!o.shiftKey||o.shiftKey&&t.shiftKey)&&(s[u].fire(n),t.preventDefault())},r._shortcutItems=[],e.WidgetShortcut=r},"3.0.3-deprecated.79",{requires:["base"]});
