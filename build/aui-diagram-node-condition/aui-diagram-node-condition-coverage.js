if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-diagram-node-condition/aui-diagram-node-condition.js']) {
   __coverage__['build/aui-diagram-node-condition/aui-diagram-node-condition.js'] = {"path":"build/aui-diagram-node-condition/aui-diagram-node-condition.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":38},"end":{"line":1,"column":57}}},"2":{"name":"(anonymous_2)","line":84,"loc":{"start":{"line":84,"column":29},"end":{"line":84,"column":40}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":104,"column":68}},"2":{"start":{"line":12,"column":0},"end":{"line":99,"column":3}},"3":{"start":{"line":85,"column":12},"end":{"line":85,"column":32}},"4":{"start":{"line":87,"column":12},"end":{"line":89,"column":14}},"5":{"start":{"line":91,"column":12},"end":{"line":91,"column":39}},"6":{"start":{"line":92,"column":12},"end":{"line":92,"column":32}},"7":{"start":{"line":94,"column":12},"end":{"line":94,"column":28}},"8":{"start":{"line":101,"column":0},"end":{"line":101,"column":46}}},"branchMap":{},"code":["(function () { YUI.add('aui-diagram-node-condition', function (A, NAME) {","","/**"," * A base class for DiagramNodeCondition."," *"," * @class A.DiagramNodeCondition"," * @extends A.DiagramNodeState"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var DiagramNodeCondition = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'diagram-node',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.DiagramNodeCondition`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * The height of the node.","         *","         * @attribute height","         * @default 60","         * @type Number","         */","        height: {","            value: 60","        },","","        /**","         * The type of the node.","         *","         * @attribute type","         * @default 'condition'","         * @type String","         */","        type: {","            value: 'condition'","        },","","        /**","         * The width of the node.","         *","         * @attribute width","         * @default 60","         * @type Number","         */","        width: {","            value: 60","        }","    },","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type String","     * @static","     */","    EXTENDS: A.DiagramNodeState,","","    prototype: {","        hotPoints: A.DiagramNode.DIAMOND_POINTS,","","        /**","         * Renders the shape boundary.","         *","         * @method renderShapeBoundary","         */","        renderShapeBoundary: function() {","            var instance = this;","","            var boundary = instance.boundary = instance.get('graphic').addShape(","                instance.get('shapeBoundary')","            );","","            boundary.translate(10, 10);","            boundary.rotate(45);","","            return boundary;","        },","","        _valueShapeBoundary: A.DiagramNode.prototype._valueShapeBoundary","    }","});","","A.DiagramNodeCondition = DiagramNodeCondition;","","","}, '3.1.0-deprecated.42', {\"requires\": [\"aui-diagram-node-state\"]});","","}());"]};
}
var __cov_xCSIka6W4otHd8NCFmtDxw = __coverage__['build/aui-diagram-node-condition/aui-diagram-node-condition.js'];
__cov_xCSIka6W4otHd8NCFmtDxw.s['1']++;YUI.add('aui-diagram-node-condition',function(A,NAME){__cov_xCSIka6W4otHd8NCFmtDxw.f['1']++;__cov_xCSIka6W4otHd8NCFmtDxw.s['2']++;var DiagramNodeCondition=A.Component.create({NAME:'diagram-node',ATTRS:{height:{value:60},type:{value:'condition'},width:{value:60}},EXTENDS:A.DiagramNodeState,prototype:{hotPoints:A.DiagramNode.DIAMOND_POINTS,renderShapeBoundary:function(){__cov_xCSIka6W4otHd8NCFmtDxw.f['2']++;__cov_xCSIka6W4otHd8NCFmtDxw.s['3']++;var instance=this;__cov_xCSIka6W4otHd8NCFmtDxw.s['4']++;var boundary=instance.boundary=instance.get('graphic').addShape(instance.get('shapeBoundary'));__cov_xCSIka6W4otHd8NCFmtDxw.s['5']++;boundary.translate(10,10);__cov_xCSIka6W4otHd8NCFmtDxw.s['6']++;boundary.rotate(45);__cov_xCSIka6W4otHd8NCFmtDxw.s['7']++;return boundary;},_valueShapeBoundary:A.DiagramNode.prototype._valueShapeBoundary}});__cov_xCSIka6W4otHd8NCFmtDxw.s['8']++;A.DiagramNodeCondition=DiagramNodeCondition;},'3.1.0-deprecated.42',{'requires':['aui-diagram-node-state']});
