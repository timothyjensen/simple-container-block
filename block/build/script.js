this["simple-container-block"]=this["simple-container-block"]||{},this["simple-container-block"].main=function(e){function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){!function(){e.exports=this.wp.editor}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),c=(n.n(r),n(3)),o=(n.n(c),n(0)),i=(n.n(o),n(4)),a=(n.n(i),n(5)),l=n(8);Object(c.registerBlockType)("timothyjensen/simple-container-block",{title:Object(r.__)("Simple Container","simple-container-block"),description:Object(r.__)("A simple container block.","simple-container-block"),keyword:[Object(r.__)("container","simple-container-block"),Object(r.__)("section","simple-container-block"),Object(r.__)("wrapper","simple-container-block")],icon:{src:"editor-contract"},category:"layout",attributes:{className:{type:"string",default:""},anchor:{type:"string",default:""}},supports:{className:!1,align:["wide","full"]},edit:a.a,save:l.a})},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){wp.i18n.setLocaleData({"":{}},"simple-container-block")},function(e,t,n){"use strict";var r=n(1),c=(n.n(r),n(6)),o=(n.n(c),n(7)),i=(n.n(o),n(0)),a=(n.n(i),function(e){return wp.element.createElement(o.Fragment,null,wp.element.createElement("div",{id:e.attributes.anchor,className:e.attributes.className},wp.element.createElement(i.InnerBlocks,null)),wp.element.createElement(i.InspectorAdvancedControls,null,wp.element.createElement(c.TextControl,{label:Object(r.__)("CSS ID","simple-container-block"),value:e.attributes.anchor||"",onChange:function(t){e.setAttributes({anchor:t})}})))});t.a=a},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){"use strict";var r=n(0),c=(n.n(r),function(e){var t={};return e.attributes.anchor&&e.attributes.anchor.length&&(t.id=e.attributes.anchor),function(t){return!t.id&&!e.attributes.className}(t)&&(t.className="scb-container"),wp.element.createElement("div",t,wp.element.createElement(r.InnerBlocks.Content,null))});t.a=c}]);