(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc6a"],{"456d":function(e,t,n){var r=n("4bf8"),a=n("0d58");n("5eda")("keys",function(){return function(e){return a(r(e))}})},"5eda":function(e,t,n){var r=n("5ca1"),a=n("8378"),c=n("79e5");e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*c(function(){n(1)}),"Object",u)}},a639:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  something went wrong\n")])},a=[],c=(n("456d"),n("ac6a"),n("96cf"),n("3040")),u=n("c93e"),o=(n("cadf"),n("551c"),n("097d"),n("3786")),s=n("2f62"),i={methods:Object(u["a"])({},Object(s["d"])("auth",["setToken","setUser"])),beforeRouteEnter:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t,n,r){var a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,Object.keys(t.query).forEach(function(e){a.append(e,t.query[e])}),e.prev=2,e.next=5,o["a"].getUserCredentials(a);case 5:c=e.sent,r(function(e){e.setToken(c.data.csrf),e.setUser(c.data.user),r("/user")}),e.next=12;break;case 9:throw e.prev=9,e.t0=e["catch"](2),new Error(e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t,n,r){return e.apply(this,arguments)}}()},f=i,d=n("2877"),p=Object(d["a"])(f,r,a,!1,null,null,null);p.options.__file="AuthHandler.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-dc6a.0e2c561d.js.map