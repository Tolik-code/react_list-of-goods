(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),s=n.n(o),i=n(3),l=n(4),c=n(7),u=n(5),b=n(6),p=function(e){var t=e.goodsList,n=e.isReverse,r=e.isSort,o=e.sortBy,s=Object(b.a)(t);return r&&s.sort((function(e,t){switch(o){case"alphabetically":return e.localeCompare(t);case"length":return e.length-t.length}})),n&&s.reverse(),a.a.createElement("ul",null,s.map((function(e){return a.a.createElement("li",{key:e},e)})))},h=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),m=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={goodsList:h,visibleGoods:!1,isReverse:!1,isSort:!1,sortBy:"alphabetically"},e.isReverse=function(){e.setState((function(e){return{isReverse:!e.isReverse}}))},e.isSort=function(t){e.setState((function(e){return{isSort:!e.isSort,sortBy:t}}))},e.reset=function(){e.setState((function(){return{isReverse:!1,isSort:!1}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),h.length),this.state.visibleGoods?a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:this.isReverse},"Reverse"),a.a.createElement("button",{type:"button",onClick:function(){return e.isSort("alphabetically")}},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),a.a.createElement("button",{type:"button",onClick:function(){return e.isSort("length")}},"Sort by length"),a.a.createElement(p,this.state)):a.a.createElement("button",{type:"button",onClick:function(){return e.setState({visibleGoods:!0})}},"start"))}}]),n}(a.a.PureComponent);s.a.render(a.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.49a31ff4.chunk.js.map