!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("antd")):"function"==typeof define&&define.amd?define(["react","antd"],t):"object"==typeof exports?exports["blq-test"]=t(require("react"),require("antd")):e["blq-test"]=t(e[void 0],e[void 0])}(window,(function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=s(t).call(this,e),n=!o||"object"!==i(o)&&"function"!=typeof o?p(r):o,d(p(n),"getItemStyle",(function(e){var t=n.props.itemHeight;return{position:"absolute",top:t*e,height:t,width:"100%"}})),d(p(n),"reactList",(function(e,t,r){return n.setState({allHeight:e,startIndex:t,endIndex:r})}));var l=e.allHeight,u=e.startIndex,c=e.endIndex;return n.state={allHeight:l,startIndex:u,endIndex:c},n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e){this.props.allHeight!==e.allHeight&&this.setState({allHeight:this.props.allHeight})}},{key:"render",value:function(){var e=this,t=this.props.menu,n=this.state,r=n.startIndex,l=n.endIndex,i=n.allHeight;return o.a.cloneElement(t,{menuItems:t.props.menuItems.slice(r,l).map((function(t,n){var l=(r||0)+Number(n),i=e.getItemStyle(l);return"NOT_FOUND"===t.key&&delete i.height,o.a.cloneElement(t,{style:c({},t.props.style,{},i)})})),dropdownMenuStyle:c({},t.props.dropdownMenuStyle,{height:i,maxHeight:i,overflow:"hidden"})})}}])&&a(n.prototype,r),l&&a(n,l),t}(r.PureComponent);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I={small:24,large:40,default:32},j={40:"down",38:"up"},H=l.Select.Option,x=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=w(t).call(this,e),n=!o||"object"!==g(o)&&"function"!=typeof o?E(r):o,S(E(n),"scrollToValue",(function(){if(n.scrollEle){var e=n.props.children,t=n.state.value,r=e.findIndex((function(e){return e.key===t}))||0,o=n.ITEM_HEIGHT*r;n.scrollEle.scrollTop=o,setTimeout((function(){n.forceUpdate()}),0)}})),S(E(n),"getItemStyle",(function(e){return{position:"absolute",top:n.ITEM_HEIGHT*e,width:"100%",height:n.ITEM_HEIGHT}})),S(E(n),"addEvent",(function(){n.scrollEle=document.querySelector(".".concat(n.dropdownClassName)),n.scrollEle&&(n.scrollEle.addEventListener("scroll",n.onScroll,!1),n.inputEle=document.querySelector("#".concat(n.id)),n.inputEle&&n.inputEle.addEventListener("keydown",n.onKeyDown,!1))})),S(E(n),"onKeyDown",(function(e){var t=(e||{}).keyCode;setTimeout((function(){var e=document.querySelector(".".concat(n.dropdownClassName," .ant-select-dropdown-menu-item-active"));if(e){var r=e.offsetTop,o="up"===j[t],l="down"===j[t];if(r-n.prevTop>224&&o)return n.scrollEle.scrollTo(0,n.allHeight-224),void(n.prevTop=n.allHeight);if(n.prevTop>r+224&&l)return n.scrollEle.scrollTo(0,0),void(n.prevTop=0);n.prevTop=r,r>n.scrollEle.scrollTop+224-n.ITEM_HEIGHT+10&&l?n.scrollEle.scrollTo(0,n.scrollTop+n.ITEM_HEIGHT):r<n.scrollEle.scrollTop&&o&&n.scrollEle.scrollTo(0,n.scrollTop-n.ITEM_HEIGHT)}}),100)})),S(E(n),"onScroll",(function(){return n.throttleByHeight(n.onScrollReal)})),S(E(n),"onScrollReal",(function(){n.allList=n.getUseChildrenList();var e=n.getStartAndEndIndex(),t=e.startIndex,r=e.endIndex;n.prevScrollTop=n.scrollTop;var o=n.allList.length*n.ITEM_HEIGHT||100;n.wrap.reactList(o,t,r)})),S(E(n),"throttleByHeight",(function(){n.scrollTop=n.scrollEle.scrollTop;var e=n.prevScrollTop-n.scrollTop;(e=e<0?0-e:e)>n.reactDelta&&n.onScrollReal()})),S(E(n),"getUseChildrenList",(function(){return n.state.filterChildren||n.state.children})),S(E(n),"getStartAndEndIndex",(function(){var e=Number((n.scrollTop/n.ITEM_HEIGHT).toFixed(0));return{startIndex:e-30<0?0:e-15,endIndex:e+30}})),S(E(n),"setSuperDrowDownMenu",(function(e){if(e)if(n.allList=n.getUseChildrenList(),n.eventTimer){var t=n.allList.length*n.ITEM_HEIGHT||100,r=n.getStartAndEndIndex(),o=r.startIndex,l=r.endIndex;setTimeout((function(){n.wrap&&n.wrap.reactList(t,o,l)}),0)}else n.eventTimer=setTimeout((function(){return n.addEvent()}),0)})),S(E(n),"onDropdownVisibleChange",(function(e){var t=n.props.onDropdownVisibleChange;t&&t(e),e?(n.setDefaultScrollTop(),n.setSuperDrowDownMenu(e)):setTimeout((function(){n.setState({filterChildren:null})}))})),S(E(n),"onDeselect",(function(e){var t=n.props.onDeselect;t&&t(e)})),S(E(n),"onChange",(function(e,t){var r=n.props,o=r.showSearch,l=r.onChange,i=r.autoClearSearchValue;(o||n.isMultiple)&&!1!==i&&n.setState({filterChildren:null},(function(){n.setSuperDrowDownMenu(!0)})),n.setState({value:e}),l&&l(e,t)})),S(E(n),"onSearch",(function(e){var t=n.props,r=t.showSearch,o=t.onSearch,l=t.filterOption,i=t.children;if(r&&!1!==l){var u=null;"function"==typeof l?u=i.filter((function(t){return l(e,t)})):void 0===l&&(u=i.filter((function(t){return n.filterOption(e,t)}))),n.setState({filterChildren:""===e?null:u},(function(){setTimeout((function(){u&&(n.scrollTop=0),n.setSuperDrowDownMenu(!0)}),0)}))}o&&o(e)})),S(E(n),"filterOption",(function(e,t){var r=n.props.optionFilterProp||"value";return"".concat(t.props[r]).indexOf(e)>=0})),S(E(n),"setDefaultScrollTop",(function(){for(var e=n.state.value,t=n.props.children,r=0;r<t.length;r++){var o=t[r].props.value;if(o===e||Array.isArray(e)&&e.includes(o)){var l=function(){var e=r*n.ITEM_HEIGHT;return setTimeout((function(){n.scrollEle.scrollTo(0,e)}),100),{v:void 0}}();if("object"===g(l))return l.v}}})),S(E(n),"removeEvent",(function(){n.scrollEle&&(n.scrollEle.removeEventListener("scroll",n.onScroll,!1),n.inputEle&&n.inputEle.removeEventListener("keydown",n.onKeyDown,!1))}));var l=e.mode,i=e.defaultValue,u=e.value,c=e.optionHeight;n.isMultiple=["tags","multiple"].includes(l);var a=n.isMultiple?[]:"";return a=u||i||a,n.state={children:e.children||[],filterChildren:null,value:a},n.ITEM_HEIGHT=c||I[e.size||"default"],n.visibleDomHeight=30*n.ITEM_HEIGHT,n.reactDelta=n.visibleDomHeight/3,n.isStopReact=!1,n.prevScrollTop=0,n.prevTop=0,n.scrollTop=0,n.dropdownClassName="dc".concat(+new Date),n.id="sid".concat(+new Date),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.addEvent()}),500)}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,r=n.mode,o=n.defaultValue,l=n.value,i=n.children;if(e.children!==i&&(this.isMultiple=["tags","multiple"].includes(r),this.setState({children:i||[],filterChildren:null})),e.value!==l){var u=this.isMultiple?[]:"";u=l||o||u,this.setState({value:u},(function(){t.scrollToValue()}))}}},{key:"componentWillUnmount",value:function(){this.removeEvent()}},{key:"render",value:function(){var e=this,t=this.props,n=t.dropdownStyle,r=t.optionLabelProp,i=t.notFoundContent,u=m(t,["dropdownStyle","optionLabelProp","notFoundContent"]);this.allList=this.getUseChildrenList(),this.allHeight=this.allList.length*this.ITEM_HEIGHT||100;var c=this.getStartAndEndIndex(),a=c.startIndex,s=c.endIndex;n=b({maxHeight:"".concat(224,"px")},n,{overflow:"auto",position:"relative"});var p=this.state.value,f=b({},u);return delete f.value,f.value="string"!=typeof p||p?p:void 0,r=r||"children",o.a.createElement(l.Select,y({},f,{id:this.id,onSearch:this.onSearch,onChange:this.onChange,dropdownClassName:this.dropdownClassName,optionLabelProp:r,dropdownStyle:n,onDropdownVisibleChange:this.onDropdownVisibleChange,onDeselect:this.onDeselect,ref:function(t){return e.select=t},dropdownRender:function(t){return 0===e.allList.length?o.a.createElement("div",{style:{padding:"5px 12px"}},i):o.a.createElement(h,y({startIndex:a,endIndex:s,allHeight:e.allHeight,menu:t,itemHeight:e.ITEM_HEIGHT},{ref:function(t){e.wrap=t}}))}}),this.allList)}}])&&O(n.prototype,r),i&&O(n,i),t}(r.PureComponent);x.Option=H;var P=x;t.default=P}])}));