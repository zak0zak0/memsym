(this["webpackJsonpmem-sim"]=this["webpackJsonpmem-sim"]||[]).push([[0],{38:function(e){e.exports=JSON.parse('{"name":"mem-sim","version":"1.1.1","private":true,"homepage":"http://zak0zak0.github.io/memsym","dependencies":{"@testing-library/jest-dom":"^5.11.6","@testing-library/react":"^11.2.1","@testing-library/user-event":"^12.2.2","bootstrap":"^4.5.3","react":"^17.0.1","react-bootstrap":"^1.4.0","react-dom":"^17.0.1","react-scripts":"4.0.3","web-vitals":"^0.2.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","deploy":"npm run build && robocopy /S .\\\\build .\\\\"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},44:function(e,t,r){},45:function(e,t,r){},52:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(12),i=r.n(c),s=(r(44),r(45),r(15)),l=r(2),o=a.a.createContext();function j(e){var t=e.memsym,r=e.children,a=Object(n.useState)(0),c=Object(s.a)(a,2)[1];return Object(l.jsx)(o.Provider,{value:{memsym:t,records:t.records,heapData:t.heapData,onUpdate:function(){c((function(e){return e>0?0:1}))}},children:r})}var d=r(62),u=r(36),b=r(65),h=0,O=1,v=2,f=3,p=4;function x(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),l=i[0],o=i[1];return{valid:r,message:l,setError:function(e){a(!e),o(e)}}}var m=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(O),i=Object(s.a)(c,2),j=i[0],h=i[1],m=Object(n.useState)(0),y=Object(s.a)(m,2),g=y[0],k=y[1],C=Object(n.useContext)(o),w=C.memsym,S=C.onUpdate,A=x(),T=x();return Object(l.jsxs)(d.a,{children:[Object(l.jsxs)(u.a,{children:[Object(l.jsx)(d.a.Label,{children:"Label"}),Object(l.jsx)(d.a.Control,{value:r,onChange:function(e){return a(e.target.value)},name:"name",type:"text",placeholder:"Label",isInvalid:!A.valid}),Object(l.jsx)(d.a.Control.Feedback,{type:"invalid",children:A.message})]}),Object(l.jsxs)(u.a,{children:[Object(l.jsx)(d.a.Label,{children:"Type"}),Object(l.jsxs)(d.a.Control,{as:"select",name:"type",value:j,onChange:function(e){return h(e.target.value)},children:[Object(l.jsx)("option",{value:O,children:"int"}),Object(l.jsx)("option",{value:f,children:"char"}),Object(l.jsx)("option",{value:v,children:"bool"}),Object(l.jsx)("option",{value:p,children:"string"})]})]}),Object(l.jsxs)(u.a,{children:[Object(l.jsx)(d.a.Label,{children:"Value"}),+j===v&&Object(l.jsxs)(d.a.Control,{as:"select",name:"value",value:g,onChange:function(e){return k(e.target.value)},children:[Object(l.jsx)("option",{value:"true",children:"true"}),Object(l.jsx)("option",{value:"false",children:"false"})]}),+j!==v&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d.a.Control,{value:g,onChange:function(e){return k(e.target.value)},name:"value",type:"text",placeholder:"Value",isInvalid:!T.valid}),Object(l.jsx)(d.a.Control.Feedback,{type:"invalid",children:T.message})]})]}),Object(l.jsx)(b.a,{variant:"primary",type:"button",onClick:function(){var e=g;+j===v&&"true"!==g&&"false"!==g&&(e="true");var t=!0;if(r||(A.setError("Label is required"),t=!1),t&&function(e,t){return!!e.records.find((function(e){return e.label===t}))}(w,r)&&(A.setError("Label is already defined"),t=!1),t&&!r.match(/^[_a-zA-Z][_a-zA-Z0-9]*$/)&&(A.setError("Label must start with '_' or letter (a-z, A-Z) and be following by '_' or letters (a-z, A-Z) or numbers (0-9)"),t=!1),t){A.setError("");var n=!0;0===e||e||(T.setError("Value is required"),n=!1),n&&+j===O&&(!e.match(/^-?\d+$/)||e<-128||e>127)&&(T.setError("Value must be a number in range [-128; 127]"),n=!1),n&&+j===f&&e.length>1&&(T.setError("Value must be only 1 character long"),n=!1),n&&(T.setError(""),w.declare(j,r,e),S())}},children:"Declare"})]})},y=r(10),g=r(11),k=r(30),C=r(27),w=r(57);function S(e){var t=new ArrayBuffer(1),r=new Uint8Array(t);return r[0]=+e,r[0].toString(2).padStart(8,"0")}var A=function(e){Object(k.a)(r,e);var t=Object(C.a)(r);function r(){var e;Object(y.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderBody=function(t){var r=t.records;return Object(l.jsxs)(w.a,{bordered:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"bin"}),Object(l.jsx)("th",{children:"value"}),Object(l.jsx)("th",{children:"label"}),Object(l.jsx)("th",{children:"type"})]})}),Object(l.jsx)("tbody",{children:r.map((function(t,r){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:e.renderBin(t.dataType,t.value)}),Object(l.jsx)("td",{children:t.value}),Object(l.jsx)("td",{children:t.label}),Object(l.jsx)("td",{children:e.renderType(t.dataType)})]},r)}))})]})},e.renderBin=function(e,t){return e===f&&(t=t.charCodeAt(0)),e===v&&(t="true"===t?1:0),S(t)},e.renderType=function(e){switch(+e){case O:return"int";case v:return"bool";case f:return"char";case p:return"string";case h:default:return""}},e}return Object(g.a)(r,[{key:"render",value:function(){return Object(l.jsx)(o.Consumer,{children:this.renderBody})}}]),r}(a.a.Component),T=r(59),B=r(63),z=r(60),E=r(37),L=r(64),D=r(8),F=r(17),V=function e(t,r,n){Object(y.a)(this,e),this.dataType=t,this.label=r,this.value=n},P=r(29),I=Object(F.a)("records"),_=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;Object(y.a)(this,e),Object.defineProperty(this,I,{writable:!0,value:void 0});for(var r=[],n=0;n<t;n++)r.push(new V(h,null,0));Object(D.a)(this,I)[I]=r}return Object(g.a)(e,[{key:"records",get:function(){return Object(P.a)(Object(D.a)(this,I)[I])}},{key:"push",value:function(e){for(var t=0,r=!1,n=Object(D.a)(this,I)[I];!r&&t<n.length;){if(n[t].dataType===h){r=!0;break}t++}r?n[t]=e:n.push(e)}}]),e}(),U=Object(F.a)("memory"),Z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:64;Object(y.a)(this,e),Object.defineProperty(this,U,{writable:!0,value:void 0}),this.size=t,Object(D.a)(this,U)[U]=Array(t).fill(0)}return Object(g.a)(e,[{key:"data",get:function(){return Object(P.a)(Object(D.a)(this,U)[U])}},{key:"read",value:function(e){var t=Object(D.a)(this,U)[U];if(e>=t.length)return"";if(0===t[e])return".";for(var r=[],n=0;n+e<t.length&&0!==t[n+e];)r[n]=t[n+e],n++;return r.join("")}},{key:"alloc",value:function(e){if("string"===typeof e){var t=e.length;if(!t)return-1;var r=Object(D.a)(this,U)[U],n=this.findFreeIndex(t);if(-1===n)return-1;for(var a=0;a<t;a++)r[a+n]=e[a];return n}alert("Unable to allocate non-string value")}},{key:"findFreeIndex",value:function(e){for(var t=0,r=Object(D.a)(this,U)[U];t<this.size;){var n=t;if(0===r[t]){for(;n<this.size&&n-t<e&&0===r[n];)n++;if(n===this.size)return-1;if(n-t<e||0!==r[n]){t=n+1;continue}return t>0?t+1:t}t++}}}]),e}(),J=Object(F.a)("stack"),M=Object(F.a)("heap"),N=function(){function e(){Object(y.a)(this,e),Object.defineProperty(this,J,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:void 0}),Object(D.a)(this,J)[J]=new _,Object(D.a)(this,M)[M]=new Z}return Object(g.a)(e,[{key:"declare",value:function(e,t,r){if(+e===f&&(r=r[0]),+e!==p||-1!==(r=Object(D.a)(this,M)[M].alloc(r))){var n=new V(+e,t,r);Object(D.a)(this,J)[J].push(n),console.log("var declared: ",n),console.log(this.records)}else alert("failed to alloc value")}},{key:"records",get:function(){return Object(D.a)(this,J)[J].records}},{key:"heapData",get:function(){return Object(D.a)(this,M)[M].data}}]),e}(),q=r(38),$=r.p+"static/media/logo_memsym.482cc514.svg",H=r(61),G=r(58),K=function(e){Object(k.a)(r,e);var t=Object(C.a)(r);function r(){var e;Object(y.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderBody=function(t){var r=t.heapData,n=Math.floor(r.length/8),a=e.to2DimArray(r,n,8),c=Array.from(Array(8).keys()).map((function(e){return e.toString(2).padStart(3,"0")}));return Object(l.jsxs)(w.a,{bordered:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#/#"}),c.map((function(e){return Object(l.jsx)("th",{children:e},e)}))]})}),Object(l.jsx)("tbody",{children:a.map((function(t,r){return Object(l.jsx)("tr",{children:t.map((function(t,r){return e.renderCell(t,r)}))},r)}))})]})},e}return Object(g.a)(r,[{key:"render",value:function(){return Object(l.jsx)(o.Consumer,{children:this.renderBody})}},{key:"renderCell",value:function(e,t){if(0===t)return Object(l.jsx)("td",{className:"bold",children:this.renderCellValue(e,t)},t);var r="string"===typeof e?"'".concat(e,"'"):e;return Object(l.jsx)(H.a,{overlay:Object(l.jsx)(G.a,{children:r}),children:Object(l.jsx)("td",{children:this.renderCellValue(e,t)},t)})}},{key:"renderCellValue",value:function(e,t){return 0===t?e.toString(2).padStart(3,"0"):("string"===typeof e&&(e=e.charCodeAt(0)),e.toString(2).padStart(8,"0"))}},{key:"to2DimArray",value:function(e,t,r){for(var n=[],a=0;a<t;a++){var c=[];c.push(a);for(var i=0;i<r;i++){var s=e[a*r+i];c.push(s)}n.push(c)}return n}}]),r}(a.a.Component),Q=new N;var R=function(){return Object(l.jsx)(j,{memsym:Q,children:Object(l.jsxs)(T.a,{children:[Object(l.jsxs)(B.a,{bg:"dark",variant:"dark",children:[Object(l.jsxs)(B.a.Brand,{children:[Object(l.jsx)("img",{alt:"",src:$,width:"30",height:"30",className:"d-inline-block align-top"})," "," MemSym"]}),Object(l.jsxs)(B.a.Text,{children:["v",q.version]})]}),Object(l.jsxs)(z.a,{children:[Object(l.jsx)(E.a,{xs:"12",sm:"6",md:"4",lg:"3",children:Object(l.jsx)(L.a,{children:Object(l.jsxs)(L.a.Body,{children:[Object(l.jsx)(L.a.Title,{children:"Declare variable"}),Object(l.jsx)(m,{})]})})}),Object(l.jsx)(E.a,{xs:"12",sm:"12",md:"8",lg:"5",children:Object(l.jsx)(L.a,{children:Object(l.jsxs)(L.a.Body,{children:[Object(l.jsx)(L.a.Title,{children:"Stack"}),Object(l.jsx)(A,{})]})})})]}),Object(l.jsx)(z.a,{children:Object(l.jsx)(E.a,{children:Object(l.jsx)(L.a,{children:Object(l.jsxs)(L.a.Body,{children:[Object(l.jsx)(L.a.Title,{children:"Heap"}),Object(l.jsx)(L.a.Text,{children:"hover over a cell to see the value"}),Object(l.jsx)(K,{})]})})})})]})})},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,66)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};r(51);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root")),W()}},[[52,1,2]]]);
//# sourceMappingURL=main.cb31d9b0.chunk.js.map