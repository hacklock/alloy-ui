if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-boolean-data-editor/aui-boolean-data-editor.js']) {
   __coverage__['build/aui-boolean-data-editor/aui-boolean-data-editor.js'] = {"path":"build/aui-boolean-data-editor/aui-boolean-data-editor.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":54}}},"2":{"name":"(anonymous_2)","line":33,"loc":{"start":{"line":33,"column":17},"end":{"line":33,"column":28}}},"3":{"name":"(anonymous_3)","line":56,"loc":{"start":{"line":56,"column":39},"end":{"line":56,"column":55}}},"4":{"name":"(anonymous_4)","line":66,"loc":{"start":{"line":66,"column":32},"end":{"line":66,"column":43}}},"5":{"name":"(anonymous_5)","line":79,"loc":{"start":{"line":79,"column":29},"end":{"line":79,"column":40}}},"6":{"name":"(anonymous_6)","line":90,"loc":{"start":{"line":90,"column":32},"end":{"line":90,"column":48}}},"7":{"name":"(anonymous_7)","line":101,"loc":{"start":{"line":101,"column":33},"end":{"line":101,"column":49}}},"8":{"name":"(anonymous_8)","line":111,"loc":{"start":{"line":111,"column":34},"end":{"line":111,"column":45}}},"9":{"name":"(anonymous_9)","line":124,"loc":{"start":{"line":124,"column":25},"end":{"line":124,"column":37}}},"10":{"name":"(anonymous_10)","line":139,"loc":{"start":{"line":139,"column":17},"end":{"line":139,"column":31}}},"11":{"name":"(anonymous_11)","line":154,"loc":{"start":{"line":154,"column":23},"end":{"line":154,"column":45}}},"12":{"name":"(anonymous_12)","line":171,"loc":{"start":{"line":171,"column":20},"end":{"line":171,"column":38}}},"13":{"name":"(anonymous_13)","line":183,"loc":{"start":{"line":183,"column":22},"end":{"line":183,"column":36}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":271,"column":82}},"2":{"start":{"line":9,"column":0},"end":{"line":11,"column":108}},"3":{"start":{"line":22,"column":0},"end":{"line":268,"column":3}},"4":{"start":{"line":34,"column":8},"end":{"line":34,"column":35}},"5":{"start":{"line":36,"column":8},"end":{"line":36,"column":56}},"6":{"start":{"line":38,"column":8},"end":{"line":38,"column":103}},"7":{"start":{"line":40,"column":8},"end":{"line":46,"column":11}},"8":{"start":{"line":57,"column":8},"end":{"line":57,"column":46}},"9":{"start":{"line":67,"column":8},"end":{"line":69,"column":9}},"10":{"start":{"line":68,"column":12},"end":{"line":68,"column":60}},"11":{"start":{"line":80,"column":8},"end":{"line":80,"column":56}},"12":{"start":{"line":91,"column":8},"end":{"line":91,"column":63}},"13":{"start":{"line":102,"column":8},"end":{"line":102,"column":64}},"14":{"start":{"line":112,"column":8},"end":{"line":114,"column":9}},"15":{"start":{"line":113,"column":12},"end":{"line":113,"column":62}},"16":{"start":{"line":125,"column":8},"end":{"line":128,"column":85}},"17":{"start":{"line":140,"column":8},"end":{"line":142,"column":9}},"18":{"start":{"line":141,"column":12},"end":{"line":141,"column":37}},"19":{"start":{"line":144,"column":8},"end":{"line":144,"column":19}},"20":{"start":{"line":155,"column":8},"end":{"line":155,"column":57}},"21":{"start":{"line":157,"column":8},"end":{"line":162,"column":9}},"22":{"start":{"line":158,"column":12},"end":{"line":158,"column":60}},"23":{"start":{"line":161,"column":12},"end":{"line":161,"column":62}},"24":{"start":{"line":172,"column":8},"end":{"line":172,"column":85}},"25":{"start":{"line":184,"column":8},"end":{"line":184,"column":65}}},"branchMap":{"1":{"line":67,"type":"if","locations":[{"start":{"line":67,"column":8},"end":{"line":67,"column":8}},{"start":{"line":67,"column":8},"end":{"line":67,"column":8}}]},"2":{"line":112,"type":"if","locations":[{"start":{"line":112,"column":8},"end":{"line":112,"column":8}},{"start":{"line":112,"column":8},"end":{"line":112,"column":8}}]},"3":{"line":140,"type":"if","locations":[{"start":{"line":140,"column":8},"end":{"line":140,"column":8}},{"start":{"line":140,"column":8},"end":{"line":140,"column":8}}]},"4":{"line":157,"type":"if","locations":[{"start":{"line":157,"column":8},"end":{"line":157,"column":8}},{"start":{"line":157,"column":8},"end":{"line":157,"column":8}}]},"5":{"line":184,"type":"binary-expr","locations":[{"start":{"line":184,"column":15},"end":{"line":184,"column":35}},{"start":{"line":184,"column":39},"end":{"line":184,"column":64}}]}},"code":["(function () { YUI.add('aui-boolean-data-editor', function (A, NAME) {","","/**"," * The Boolean Data Editor Component"," *"," * @module aui-boolean-data-editor"," */","","var CSS_BOOLEAN_DATA_EDITOR = A.getClassName('boolean', 'data', 'editor'),","    CSS_BOOLEAN_DATA_EDITOR_CONTENT = A.getClassName('boolean', 'data', 'editor', 'content'),","    CSS_BOOLEAN_DATA_EDITOR_SWITCH_BUTTON = A.getClassName('boolean', 'data', 'editor', 'switch', 'button');","","/**"," * A base class for Boolean Data Editor."," *"," * @class A.BooleanDataEditor"," * @extends A.DataEditor"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.BooleanDataEditor = A.Base.create('boolean-data-editor', A.DataEditor, [], {","    TPL_EDITOR_CONTENT: '<div class=\"' + CSS_BOOLEAN_DATA_EDITOR + '\">' +","        '<div><div class=\"' + CSS_BOOLEAN_DATA_EDITOR_CONTENT + '\"></div>' +","        '<div class=\"' + CSS_BOOLEAN_DATA_EDITOR_SWITCH_BUTTON + '\"></div></div></div>',","","    /**","     * Constructor for the `A.BooleanDataEditor`. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        this._createSwitchButton();","","        this._uiSetEditedValue(this.get('editedValue'));","","        this._buttonSwitch.on('activatedChange', A.bind(this._afterButtonSwitchActivatedChange, this));","","        this.after({","            checkedContentChange: this._afterCheckedContentChange,","            editedValueChange: this._afterEditedValueChange,","            innerLabelLeftChange: this._afterInnerLabelLeftChange,","            innerLabelRightChange: this._afterInnerLabelRightChange,","            uncheckedContentChange: this._afterUncheckedContentChange","        });","    },","","    /**","     * Fired after the checkbox is clicked.","     *","     * @method _afterButtonSwitchActivatedChange","     * @param {CustomEvent} event The fired event","     * @protected","     */","    _afterButtonSwitchActivatedChange: function(event) {","        this.set('editedValue', event.newVal);","    },","","    /**","     * Fired after the `checkedContent` attribute is set.","     *","     * @method _afterCheckedContentChange","     * @protected","     */","    _afterCheckedContentChange: function() {","        if (this.get('editedValue')) {","            this._updateContent(this.get('checkedContent'));","        }","    },","","    /**","     * Fired after the `editedValue` attribute is set.","     *","     * @method _afterEditedValueChange","     * @param {CustomEvent} event The fired event","     * @protected","     */","    _afterEditedValueChange: function() {","        this._uiSetEditedValue(this.get('editedValue'));","    },","","    /**","     * Fired after the `innerLabelLeft` attribute is set.","     *","     * @method _afterInnerLabelLeftChange","     * @param {CustomEvent} event The fired event","     * @protected","     */","    _afterInnerLabelLeftChange: function(event) {","        this._buttonSwitch.set('innerLabelLeft', event.newVal);","    },","","    /**","     * Fired after the `innerLabelRight` attribute is set.","     *","     * @method _afterInnerLabelRightChange","     * @param {CustomEvent} event The fired event","     * @protected","     */","    _afterInnerLabelRightChange: function(event) {","        this._buttonSwitch.set('innerLabelRight', event.newVal);","    },","","    /**","     * Fired after the `uncheckedContent` attribute is set.","     *","     * @method _afterUncheckedContentChange","     * @protected","     */","    _afterUncheckedContentChange: function() {","        if (!this.get('editedValue')) {","            this._updateContent(this.get('uncheckedContent'));","        }","    },","","    /**","     * Returns the switch button instance.","     *","     * @method _createSwitchButton","     * @return {Object}","     * @protected","     */","    _createSwitchButton: function () {","        this._buttonSwitch = new A.ButtonSwitch({","            innerLabelLeft: this.get('innerLabelLeft'),","            innerLabelRight: this.get('innerLabelRight')","        }).render(this.get('node').one('.' + CSS_BOOLEAN_DATA_EDITOR_SWITCH_BUTTON));","    },","","    /**","     * Sets content attributes like `checkedContent` and `uncheckedContent`.","     *","     * @method _setContent","     * @param {String | Node} val","     * @return {Node}","     * @protected","     */","    _setContent: function(val) {","        if (A.Lang.isString(val)) {","            val = A.Node.create(val);","        }","","        return val;","    },","","    /**","     * Updates the ui according to the value of the `editedValue` attribute.","     *","     * @method _uiSetEditedValue","     * @param editedValue","     * @protected","     */","    _uiSetEditedValue: function(editedValue) {","        this._buttonSwitch.set('activated', editedValue);","","        if (editedValue) {","            this._updateContent(this.get('checkedContent'));","        }","        else {","            this._updateContent(this.get('uncheckedContent'));","        }","    },","","    /**","     * Updates the boolean data editor with the given content.","     *","     * @method _updateContent","     * @protected","     */","    _updateContent: function(content) {","        this.get('node').one('.' + CSS_BOOLEAN_DATA_EDITOR_CONTENT).setHTML(content);","    },","","    /**","     * Validates content attributes like `checkedContent` and `uncheckedContent`.","     *","     * @method _validateContent","     * @param {*} val","     * @return {Boolean}","     * @protected","     */","    _validateContent: function(val) {","        return A.Lang.isString(val) || A.instanceOf(val, A.Node);","    }","}, {","    /**","     * Static property used to define the default attribute configuration","     * for the `A.BooleanDataEditor`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * Optional content that should show up when the data editor is in the","         * checked state.","         *","         * @attribute checkedContent","         * @default null","         * @type String | Node","         */","        checkedContent: {","            setter: '_setContent',","            validator: '_validateContent',","            value: ''","        },","","        /**","         * The value after edition.","         *","         * @attribute editedValue","         * @default false","         * @type Boolean","         */","        editedValue: {","            value: false","        },","","        /**","         * The label to be used on button left side.","         *","         * @attribute innerLabelLeft","         * @type String","         */","        innerLabelLeft: {","            validator: A.Lang.isString,","            value: ''","        },","","        /**","         * The label to be used on button right side.","         *","         * @attribute innerLabelRight","         * @type String","         */","        innerLabelRight: {","            validator: A.Lang.isString,","            value: ''","        },","","        /**","         * The value to be edited.","         *","         * @attribute originalValue","         * @default false","         * @type Boolean","         */","        originalValue: {","            value: false","        },","","        /**","         * Optional content that should show up when the data editor is in the","         * unchecked state.","         *","         * @attribute uncheckedContent","         * @default null","         * @type String | Node","         */","        uncheckedContent: {","            setter: '_setContent',","            validator: '_validateContent',","            value: ''","        }","    }","});","","","}, '3.1.0-deprecated.21', {\"requires\": [\"aui-button-switch\", \"aui-data-editor\"]});","","}());"]};
}
var __cov_ejWiVJolQwA$DXY2P9CiEA = __coverage__['build/aui-boolean-data-editor/aui-boolean-data-editor.js'];
__cov_ejWiVJolQwA$DXY2P9CiEA.s['1']++;YUI.add('aui-boolean-data-editor',function(A,NAME){__cov_ejWiVJolQwA$DXY2P9CiEA.f['1']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['2']++;var CSS_BOOLEAN_DATA_EDITOR=A.getClassName('boolean','data','editor'),CSS_BOOLEAN_DATA_EDITOR_CONTENT=A.getClassName('boolean','data','editor','content'),CSS_BOOLEAN_DATA_EDITOR_SWITCH_BUTTON=A.getClassName('boolean','data','editor','switch','button');__cov_ejWiVJolQwA$DXY2P9CiEA.s['3']++;A.BooleanDataEditor=A.Base.create('boolean-data-editor',A.DataEditor,[],{TPL_EDITOR_CONTENT:'<div class="'+CSS_BOOLEAN_DATA_EDITOR+'">'+'<div><div class="'+CSS_BOOLEAN_DATA_EDITOR_CONTENT+'"></div>'+'<div class="'+CSS_BOOLEAN_DATA_EDITOR_SWITCH_BUTTON+'"></div></div></div>',initializer:function(){__cov_ejWiVJolQwA$DXY2P9CiEA.f['2']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['4']++;this._createSwitchButton();__cov_ejWiVJolQwA$DXY2P9CiEA.s['5']++;this._uiSetEditedValue(this.get('editedValue'));__cov_ejWiVJolQwA$DXY2P9CiEA.s['6']++;this._buttonSwitch.on('activatedChange',A.bind(this._afterButtonSwitchActivatedChange,this));__cov_ejWiVJolQwA$DXY2P9CiEA.s['7']++;this.after({checkedContentChange:this._afterCheckedContentChange,editedValueChange:this._afterEditedValueChange,innerLabelLeftChange:this._afterInnerLabelLeftChange,innerLabelRightChange:this._afterInnerLabelRightChange,uncheckedContentChange:this._afterUncheckedContentChange});},_afterButtonSwitchActivatedChange:function(event){__cov_ejWiVJolQwA$DXY2P9CiEA.f['3']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['8']++;this.set('editedValue',event.newVal);},_afterCheckedContentChange:function(){__cov_ejWiVJolQwA$DXY2P9CiEA.f['4']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['9']++;if(this.get('editedValue')){__cov_ejWiVJolQwA$DXY2P9CiEA.b['1'][0]++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['10']++;this._updateContent(this.get('checkedContent'));}else{__cov_ejWiVJolQwA$DXY2P9CiEA.b['1'][1]++;}},_afterEditedValueChange:function(){__cov_ejWiVJolQwA$DXY2P9CiEA.f['5']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['11']++;this._uiSetEditedValue(this.get('editedValue'));},_afterInnerLabelLeftChange:function(event){__cov_ejWiVJolQwA$DXY2P9CiEA.f['6']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['12']++;this._buttonSwitch.set('innerLabelLeft',event.newVal);},_afterInnerLabelRightChange:function(event){__cov_ejWiVJolQwA$DXY2P9CiEA.f['7']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['13']++;this._buttonSwitch.set('innerLabelRight',event.newVal);},_afterUncheckedContentChange:function(){__cov_ejWiVJolQwA$DXY2P9CiEA.f['8']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['14']++;if(!this.get('editedValue')){__cov_ejWiVJolQwA$DXY2P9CiEA.b['2'][0]++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['15']++;this._updateContent(this.get('uncheckedContent'));}else{__cov_ejWiVJolQwA$DXY2P9CiEA.b['2'][1]++;}},_createSwitchButton:function(){__cov_ejWiVJolQwA$DXY2P9CiEA.f['9']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['16']++;this._buttonSwitch=new A.ButtonSwitch({innerLabelLeft:this.get('innerLabelLeft'),innerLabelRight:this.get('innerLabelRight')}).render(this.get('node').one('.'+CSS_BOOLEAN_DATA_EDITOR_SWITCH_BUTTON));},_setContent:function(val){__cov_ejWiVJolQwA$DXY2P9CiEA.f['10']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['17']++;if(A.Lang.isString(val)){__cov_ejWiVJolQwA$DXY2P9CiEA.b['3'][0]++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['18']++;val=A.Node.create(val);}else{__cov_ejWiVJolQwA$DXY2P9CiEA.b['3'][1]++;}__cov_ejWiVJolQwA$DXY2P9CiEA.s['19']++;return val;},_uiSetEditedValue:function(editedValue){__cov_ejWiVJolQwA$DXY2P9CiEA.f['11']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['20']++;this._buttonSwitch.set('activated',editedValue);__cov_ejWiVJolQwA$DXY2P9CiEA.s['21']++;if(editedValue){__cov_ejWiVJolQwA$DXY2P9CiEA.b['4'][0]++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['22']++;this._updateContent(this.get('checkedContent'));}else{__cov_ejWiVJolQwA$DXY2P9CiEA.b['4'][1]++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['23']++;this._updateContent(this.get('uncheckedContent'));}},_updateContent:function(content){__cov_ejWiVJolQwA$DXY2P9CiEA.f['12']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['24']++;this.get('node').one('.'+CSS_BOOLEAN_DATA_EDITOR_CONTENT).setHTML(content);},_validateContent:function(val){__cov_ejWiVJolQwA$DXY2P9CiEA.f['13']++;__cov_ejWiVJolQwA$DXY2P9CiEA.s['25']++;return(__cov_ejWiVJolQwA$DXY2P9CiEA.b['5'][0]++,A.Lang.isString(val))||(__cov_ejWiVJolQwA$DXY2P9CiEA.b['5'][1]++,A.instanceOf(val,A.Node));}},{ATTRS:{checkedContent:{setter:'_setContent',validator:'_validateContent',value:''},editedValue:{value:false},innerLabelLeft:{validator:A.Lang.isString,value:''},innerLabelRight:{validator:A.Lang.isString,value:''},originalValue:{value:false},uncheckedContent:{setter:'_setContent',validator:'_validateContent',value:''}}});},'3.1.0-deprecated.21',{'requires':['aui-button-switch','aui-data-editor']});
