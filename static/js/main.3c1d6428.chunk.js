(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{171:function(n,e,t){},172:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),i=t(25),o=t.n(i),u=(t(67),t(2)),l=t(3),d=t(1);function s(n){var e=n.children,t=n.className;return Object(d.jsx)(j,{className:t,children:e})}var b,j=l.a.section(r||(r=Object(u.a)(["\n  padding: 0 20px;\n  margin: 0;\n"])));function p(n){var e=n.children,t=n.className;return Object(d.jsx)(h,{className:t,children:e})}var f,h=l.a.div(b||(b=Object(u.a)(["\n  padding: 0 10px;\n  margin: 0 auto;\n  width: 100%;\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    min-width: 320px;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n    width: 768px;\n    padding-left: 75px;\n    padding-right: 75px;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 1024px;\n    padding-left: 71px;\n    padding-right: 71px;\n  }\n"])));function x(n){var e=n.title,t=n.className;return Object(d.jsx)(m,{className:t,children:e})}x.defaultProps={title:"Section title"};var O,m=l.a.h2(f||(f=Object(u.a)(["\n  color: var(--yellow);\n  font-size: 32px;\n  font-family: var(--big);\n  text-align: center;\n"]))),g=t(34),v=t(8),w=t(58),y=function(n){return n.items},k=function(n){return n.filter},C=function(n){return n.loading},N=t.n(w)()((function(n){var e=y(n),t=k(n);return function(n){var e=t.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}(e)}));function z(n){var e=n.content,t=n.type,r=n.handleClick,a=n.disabled;return Object(d.jsx)(A,{type:t,onClick:r,disabled:a,children:e})}z.defaultPtops={type:"button",disabled:!0};var A=l.a.button(O||(O=Object(u.a)(["\n  border: 1px solid rgb(255, 252, 252);\n  border-radius: 10px;\n  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);\n  background-color: rgb(245, 250, 245);\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 250ms ease-in;\n  font-family: var(--font);\n  :hover {\n    cursor: pointer;\n    color: var(--white);\n  }\n"]))),L=t(28),S=t(14),F=t.n(S),P=t(5),B=t(19),E=t.n(B),J=t(62);E.a.defaults.baseURL="https://61e6b687ce3a2d001735938f.mockapi.io/api";var T,V,W,Z=Object(P.c)("contacts/fetch",function(){var n=Object(L.a)(F.a.mark((function n(e,t){var r,a,c;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,E.a.get("/contacts");case 4:return a=n.sent,c=a.data,n.abrupt("return",c);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",r(n.t0));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}()),q=Object(P.c)("contacts/add",function(){var n=Object(L.a)(F.a.mark((function n(e,t){var r,a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,a={name:e.name,phone:e.number,id:Object(J.a)()},n.prev=2,n.next=5,E.a.post("/contacts",a);case 5:return n.abrupt("return",a);case 8:return n.prev=8,n.t0=n.catch(2),n.abrupt("return",r(n.t0));case 11:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e,t){return n.apply(this,arguments)}}()),D=Object(P.c)("contacts/delete",function(){var n=Object(L.a)(F.a.mark((function n(e,t){var r;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,E.a.delete("/contacts/".concat(e));case 4:return n.abrupt("return",e);case 7:return n.prev=7,n.t0=n.catch(1),n.abrupt("return",r(n.t0));case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e,t){return n.apply(this,arguments)}}());function M(){var n=Object(v.c)(y),e=Object(v.b)(),t=Object(a.useState)(""),r=Object(g.a)(t,2),c=r[0],i=r[1],o=Object(a.useState)(""),u=Object(g.a)(o,2),l=u[0],b=u[1],j=function(n){var e=n.currentTarget,t=e.name,r=e.value;"name"===t&&i(r),"number"===t&&b(r)},f=function(){i(""),b("")};return Object(d.jsx)(s,{children:Object(d.jsxs)(p,{children:[Object(d.jsx)(x,{title:"Phonebook"}),Object(d.jsxs)(G,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r={name:c,number:l},a=function(n,e,t){return t.some((function(e){return e.name===n}))?(alert('"'.concat(n,'" is already in contacts!')),!1):!t.some((function(n){return n.number===e}))||(alert('"'.concat(e,'" is already in contacts!')),!1)}(c,l,n);a&&(!function(n,t){e(q(n,t))}(r),f())},children:[Object(d.jsxs)(H,{children:["Name",Object(d.jsx)(K,{type:"text",name:"name",value:c,placeholder:"Enter fullname",onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(d.jsxs)(H,{children:["Number",Object(d.jsx)(K,{type:"tel",name:"number",value:l,placeholder:"Enter phone number",onChange:j,minLength:"7",maxLength:"17",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(d.jsx)(z,{content:"Add contact",type:"submit",disabled:""===c||""===l})]})]})})}var I,R,U,$,G=l.a.form(T||(T=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  padding: 5px;\n  margin: 0 auto;\n  width: 100%;\n  font-family: var(--font);\n  button {\n    margin: 0 auto;\n    width: 200px;\n    padding: 5px 20px;\n    :hover {\n      background-color: var(--green);\n      border: 1px solid var(--light-blue);\n    }\n    :disabled:hover {\n      cursor: not-allowed;\n      color: var(--red);\n      background-color: var(--white);\n      border: 1px solid var(--red);\n    }\n  }\n"]))),H=l.a.label(V||(V=Object(u.a)(["\n  margin: 0 0 2px 0;\n  font-family: var(--font);\n  font-size: 18px;\n  font-weight: 600;\n"]))),K=l.a.input(W||(W=Object(u.a)(["\n  padding: 5px 20px;\n  margin-bottom: 20px;\n  width: 100%;\n  border-radius: 10px;\n"]))),Q=t(4),X=Object(P.b)("contacts/addFilter"),Y=Object(P.d)("",Object(Q.a)({},X,(function(n,e){return e.payload})));function _(){var n=Object(v.b)(),e=Object(v.c)(k);return Object(d.jsxs)(an,{children:[Object(d.jsxs)(cn,{children:["Find contacts by ",Object(d.jsx)(on,{children:"name"})]}),Object(d.jsx)(un,{type:"search",name:"search",value:e,onChange:function(e){return n(X(e.currentTarget.value))}})]})}var nn,en,tn,rn,an=l.a.label(I||(I=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),cn=l.a.p(R||(R=Object(u.a)(["\n  margin: 5px 0;\n  color: var(--white);\n  font-family: var(--font);\n  font-size: 18px;\n  line-height: 1.5;\n"]))),on=l.a.span(U||(U=Object(u.a)(["\n  color: var(--yellow);\n"]))),un=l.a.input($||($=Object(u.a)(["\n  color: var(--light-blue);\n"]))),ln=t(59);t(170),t(171);function dn(){return Object(d.jsx)("div",{className:"loader-box",children:Object(d.jsx)(ln.Bars,{heigth:"100",width:"100",color:"#f6f4f3",ariaLabel:"loading"})})}function sn(){var n=Object(v.b)(),e=Object(v.c)(N),t=Object(v.c)(C);return Object(d.jsxs)(d.Fragment,{children:[t&&Object(d.jsx)(dn,{}),Object(d.jsxs)(bn,{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)(jn,{children:[Object(d.jsx)(pn,{children:"Name"}),Object(d.jsx)(pn,{children:"Phone"}),Object(d.jsx)(pn,{children:"Action"})]})}),Object(d.jsx)("tbody",{children:e.map((function(e){return Object(d.jsxs)(jn,{children:[Object(d.jsx)(fn,{children:e.name}),Object(d.jsx)(fn,{children:e.phone}),Object(d.jsx)(fn,{children:Object(d.jsx)(z,{content:"Delete",handleClick:function(){return n(D(e.id))}})})]},e.id)}))})]})]})}var bn=l.a.table(nn||(nn=Object(u.a)(["\n  margin-top: 25px;\n  width: 100%;\n  border-radius: 5px;\n  box-shadow: 2px 2px 1px 0px #7c7c7c;\n"]))),jn=l.a.tr(en||(en=Object(u.a)(["\n  background-color: rgb(231, 231, 231);\n  :nth-of-type(2n + 1) {\n    background-color: #fff;\n  }\n"]))),pn=l.a.th(tn||(tn=Object(u.a)(["\n  height: 50px;\n  text-transform: uppercase;\n  color: var(--yellow);\n  background-color: var(--light-blue);\n"]))),fn=l.a.td(rn||(rn=Object(u.a)(["\n  padding: 7px 10px 7px 10px;\n  text-align: center;\n  text-transform: capitalize;\n  color: lightslategray;\n  outline: 0.1px solid rgb(243, 237, 237);\n\n  Button {\n    margin: 0;\n    padding: 2px 0;\n    width: 100%;\n    height: auto;\n    border: none;\n    border-radius: 0;\n    box-shadow: none;\n    background-color: transparent;\n    :hover {\n      background-color: var(--light-blue);\n    }\n  }\n"])));function hn(){var n=Object(v.b)();return Object(a.useEffect)((function(){return n(Z())}),[n]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M,{}),Object(d.jsx)(s,{children:Object(d.jsxs)(p,{children:[Object(d.jsx)(x,{title:"Contacts"}),Object(d.jsx)(_,{}),Object(d.jsx)(sn,{})]})})]})}var xn,On,mn=t(15),gn=t(60),vn=Object(gn.createLogger)({predicate:function(){return!1},colors:{title:function(n){return"orange"},prevState:function(n){return"cyan"},action:function(n){return"violet"},nextState:function(n){return"lawngreen"},error:function(n,e){return"red"}}}),wn=t(7),yn=t(61),kn=Object(P.d)([],(xn={},Object(Q.a)(xn,Z.fulfilled,(function(n,e){return e.payload})),Object(Q.a)(xn,q.fulfilled,(function(n,e){return[e.payload].concat(Object(yn.a)(n))})),Object(Q.a)(xn,D.fulfilled,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),xn)),Cn=Object(P.d)(!1,(On={},Object(Q.a)(On,Z.pending,(function(){return!0})),Object(Q.a)(On,Z.fulfilled,(function(){return!1})),Object(Q.a)(On,Z.rejected,(function(){return!1})),Object(Q.a)(On,q.pending,(function(){return!0})),Object(Q.a)(On,q.fulfilled,(function(){return!1})),Object(Q.a)(On,q.rejected,(function(){return!1})),Object(Q.a)(On,D.pending,(function(){return!0})),Object(Q.a)(On,D.fulfilled,(function(){return!1})),Object(Q.a)(On,D.rejected,(function(){return!1})),On)),Nn=Object(P.d)(null,{}),zn=Object(wn.b)({items:kn,filter:Y,loading:Cn,error:Nn}),An={serializableCheck:{ignoredActions:[mn.a,mn.f,mn.b,mn.c,mn.d,mn.e]}},Ln=Object(P.a)({reducer:zn,devTools:!1,middleware:function(n){return n(An).concat(vn)}});o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v.a,{store:Ln,children:Object(d.jsx)(hn,{})})}),document.getElementById("root"))},67:function(n,e,t){}},[[172,1,2]]]);
//# sourceMappingURL=main.3c1d6428.chunk.js.map