(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactItem:"ContactElem_contactItem__2m2cE",btnItem:"ContactElem_btnItem__3oo2u"}},18:function(t,e,n){t.exports={filterInput:"ContactFilter_filterInput__ZCB_A",filterInputBox:"ContactFilter_filterInputBox__3gqPo"}},22:function(t,e,n){t.exports={container:"Container_container__11hGV"}},37:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(9),i=n.n(o),s=n(4),u=n(2),l=n(3),b=n(5),d=Object(l.b)("contactsFilter"),j=Object(l.c)("",Object(b.a)({},d,(function(t,e){return e.payload}))),m=n(24),h=Object(l.b)("addContact"),f=Object(l.b)("contactDelete"),p=Object(l.b)("getContacts"),O=Object(l.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(b.a)(a,h,(function(t,e){var n=e.payload;return[].concat(Object(m.a)(t),[n])})),Object(b.a)(a,f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(b.a)(a,p,(function(t,e){return e.payload})),a)),C=n(6),x=n(20),g={key:"root",storage:n.n(x).a,blacklist:"filter"},v=Object(u.b)({contacts:O,filter:j}),_=Object(C.g)(g,v),y=Object(l.a)({reducer:_,middleware:Object(l.d)({serializableCheck:{ignoredActions:[C.a,C.f,C.b,C.c,C.d,C.e]}})}),I=Object(C.h)(y),F=n(21),A=(n(37),n(10)),k=n(11),w=n(14),N=n(13),S=n(22),D=n.n(S),B=n(1),z=function(t){var e=t.children;return Object(B.jsx)("div",{className:D.a.container,children:e})},E=n(12),Z=n.n(E),L=function(t){var e=t.name,n=t.number,a=t.onContactDelete;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("p",{children:[e,": ",n]}),Object(B.jsx)("button",{className:Z.a.btnItem,type:"button",onClick:a,children:"Delete"})]})},q=Object(s.b)(null,(function(t){return{onContactDelete:function(e){return t(f(e))}}}))((function(t){var e=t.contacts,n=t.onContactDelete;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(B.jsx)("li",{className:Z.a.contactItem,children:Object(B.jsx)(L,{name:a,number:c,onContactDelete:function(){n(e)}})},e)}))})})})),J=n(17),M=n(7),P=n.n(M),V=n(23),R=n.n(V),G=function(t){return t.contacts},H=function(t){return t.filter},K=function(t){Object(w.a)(n,t);var e=Object(N.a)(n);function n(){var t;Object(A.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.contacts.find((function(e){return e.name===t.state.name}));if(n)alert("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435");else{var a=Object(J.a)(Object(J.a)({},t.state),{},{id:R.a.generate()});t.props.onAddContact(a),t.setState({name:"",number:""})}},t}return Object(k.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(B.jsxs)("form",{onSubmit:this.handleSubmit,className:P.a.form,children:[Object(B.jsx)("label",{children:Object(B.jsx)("input",{className:P.a.roundedInput,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name:",required:!0,onChange:this.handleChange})}),Object(B.jsx)("label",{children:Object(B.jsx)("input",{className:P.a.roundedInput,type:"tel",value:n,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Tel:",required:!0,onChange:this.handleChange})}),Object(B.jsx)("button",{type:"submit",className:P.a.btnForm,children:"Add contact"})]})}}]),n}(c.Component),Q=Object(s.b)((function(t){return{contacts:G(t)}}),(function(t){return{onAddContact:function(e){return t(h(e))}}}))(K),T=n(18),$=n.n(T),U=Object(s.b)(null,(function(t){return{onChange:function(e){return t(d(e))}}}))((function(t){var e=t.onChange;return Object(B.jsx)("label",{className:$.a.filterInputBox,children:Object(B.jsx)("input",{className:$.a.filterInput,placeholder:"Find contacts by name",type:"text",onChange:function(t){return e(t.target.value)}})})})),W=function(t){Object(w.a)(n,t);var e=Object(N.a)(n);function n(){var t;Object(A.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).getVisibleContacts=function(){var e=t.props,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(k.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(B.jsxs)(z,{children:[Object(B.jsx)("h1",{children:"Phoneboock"}),Object(B.jsx)(Q,{}),Object(B.jsx)("h2",{children:"Contacts"}),Object(B.jsx)(U,{}),Object(B.jsx)(q,{contacts:t})]})}}]),n}(c.Component),X=Object(s.b)((function(t){return{contacts:G(t),filter:H(t)}}),(function(t){return{contactFromLS:function(e){return t(p(e))}}}))(W);i.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(s.a,{store:y,children:Object(B.jsx)(F.a,{loading:"Loading...",persistor:I,children:Object(B.jsx)(X,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__iwafZ",roundedInput:"ContactForm_roundedInput__2M8nQ",btnForm:"ContactForm_btnForm__3bR1v"}}},[[47,1,2]]]);
//# sourceMappingURL=main.47a79e74.chunk.js.map