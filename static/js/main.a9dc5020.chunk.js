(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={friend__list:"FriendList_friend__list__3Sm0q",item:"FriendList_item__-lYix",online:"FriendList_online__2Kfti",offline:"FriendList_offline__XKwl-",avatar:"FriendList_avatar__2fiZr",name:"FriendList_name__2fvFO"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,t,a){e.exports={"transaction-history":"TransactionHistory_transaction-history__1LQvk",thead__tr:"TransactionHistory_thead__tr__2xLYS",tbody__tr:"TransactionHistory_tbody__tr__1Ff9V"}},,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,,function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(12),i=a.n(s),r=a(2),l=a(3),o=a(5),d=a(4),b=(a(19),a(0)),j=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props;return Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("img",{src:e.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"avatar"}),Object(b.jsx)("p",{className:"name",children:e.name}),Object(b.jsxs)("p",{className:"tag",children:["@",e.tag]}),Object(b.jsx)("p",{className:"location",children:e.location})]}),Object(b.jsxs)("ul",{className:"stats",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"label",children:"Followers"}),Object(b.jsx)("span",{className:"quantity",children:e.stats.followers})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"label",children:"Views"}),Object(b.jsx)("span",{className:"quantity",children:e.stats.views})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"label",children:"Likes"}),Object(b.jsx)("span",{className:"quantity",children:e.stats.likes})]})]})]})}}]),a}(n.Component),p=a(11);var u={section:{textAlign:"center",marginBottom:40},item:{display:"inline-block",textAlign:"center",width:80,height:80,padding:20},label:{display:"block"}},m=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("section",{className:"statistics",style:u.section,children:[Object(b.jsx)("h2",{className:"title",children:this.props.title}),Object(b.jsx)("ul",{className:"stat-list",children:this.props.stats.length>0&&this.props.stats.map((function(e){return Object(b.jsxs)("li",{className:"item",style:Object(p.a)(Object(p.a)({},u.item),{},{backgroundColor:"".concat("#"+("0"+(256*Math.random()|0).toString(16)).slice(-2)+("0"+(256*Math.random()|0).toString(16)).slice(-2)+("0"+(256*Math.random()|0).toString(16)).slice(-2))}),children:[Object(b.jsx)("span",{className:"label",style:u.label,children:e.label}),Object(b.jsxs)("span",{className:"percentage",children:[e.percentage,"%"]})]},e.id)}))})]})}}]),a}(n.Component);m.defaultProps={title:"",stats:[]};var f=m,h=a(6),O=a.n(h),y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.friend;return Object(b.jsxs)("li",{className:O.a.item,children:[Object(b.jsx)("span",{className:!0===e.isOnline?O.a.online:O.a.offline,children:e.isOnline}),Object(b.jsx)("img",{className:O.a.avatar,src:e.avatar,alt:"avatar",width:"48"}),Object(b.jsx)("p",{className:O.a.name,children:e.name})]})}}]),a}(n.Component);y.defaultProps={friend:{}};var v=y,x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.friends;return Object(b.jsx)("ul",{className:O.a.friend__list,children:e.map((function(e){return Object(b.jsx)(v,{friend:e},e.id)}))})}}]),a}(n.Component),g=a(8),_=a.n(g),w=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("table",{className:_.a["transaction-history"],children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:_.a.thead__tr,children:[Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Amount"}),Object(b.jsx)("th",{children:"Currency"})]})}),Object(b.jsx)("tbody",{className:_.a.tbody,children:this.props.items.map((function(e){return Object(b.jsxs)("tr",{className:_.a.tbody__tr,children:[Object(b.jsx)("td",{children:e.type}),Object(b.jsx)("td",{children:e.amount}),Object(b.jsx)("td",{children:e.currency})]},e.id)}))})]})}}]),a}(n.Component);w.defaultProps={items:[]};var N=w,k=a(7),L=a(10),S=a(13),C=a(14);var F=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{name:k.name,tag:k.tag,location:k.location,avatar:k.avatar,stats:k.stats}),Object(b.jsx)(f,{stats:L,title:"Upload stats"}),Object(b.jsx)(f,{stats:L}),Object(b.jsx)(x,{friends:S}),Object(b.jsx)(N,{items:C})]})};a(21),a(22);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a9dc5020.chunk.js.map