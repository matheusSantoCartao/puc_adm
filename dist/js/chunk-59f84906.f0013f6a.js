(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59f84906"],{"0dd0":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));a("ac1f"),a("1276"),a("5319"),a("a15b"),a("d81d"),a("fb6a"),a("d3b7"),a("25f0"),a("a9e3");var o=function(e){var t=e.split(".")[1],a=t.replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(a).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(o)},l=function(e){var t=function(e){var t=0;if(!e)return t;for(var a=new Object,o=0;o<e.length;o++)a[e[o]]=(a[e[o]]||0)+1,t+=5/a[e[o]];var l={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},r=0;for(var c in l)r+=1==l[c]?1:0;return t+=10*(r-1),Number(t)},a=t(e);return a>80?"Forte":a>60?"Moderada":a>30||a<=30?"Fraca":""}},"159b":function(e,t,a){var o=a("da84"),l=a("fdbc"),r=a("17c2"),c=a("9112");for(var n in l){var u=o[n],s=u&&u.prototype;if(s&&s.forEach!==r)try{c(s,"forEach",r)}catch(i){s.forEach=r}}},"17c2":function(e,t,a){"use strict";var o=a("b727").forEach,l=a("a640"),r=l("forEach");e.exports=r?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},"1afe":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));a("159b"),a("4fad");var o=function(e){var t=[];Object.entries(e).forEach((function(e){""!==e[1]&&"0"!==e[1]||t.push(e[0])}));var a="";return t.forEach((function(e){"password"==e&&(e="senha"),a+="* O campo <b>".concat(e,"</b> está vazio <br/>")})),a},l=function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())}},"25f0":function(e,t,a){"use strict";var o=a("6eeb"),l=a("825a"),r=a("d039"),c=a("ad6d"),n="toString",u=RegExp.prototype,s=u[n],i=r((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),d=s.name!=n;(i||d)&&o(RegExp.prototype,n,(function(){var e=l(this),t=String(e.source),a=e.flags,o=String(void 0===a&&e instanceof RegExp&&!("flags"in u)?c.call(e):a);return"/"+t+"/"+o}),{unsafe:!0})},"4fad":function(e,t,a){var o=a("23e7"),l=a("6f53").entries;o({target:"Object",stat:!0},{entries:function(e){return l(e)}})},5817:function(e,t,a){"use strict";a("7fb2")},"6e65":function(e,t,a){"use strict";var o=a("7a23");function l(e,t,a,l,r,c){return Object(o["openBlock"])(),Object(o["createBlock"])("button",{type:"button",class:"btn-outline-primary \n    transition duration-300 ease-in-out \n    bg-".concat(a.color," text-white\n    focus:outline-none focus:shadow-outline border\n    font-bold py-2 w-5/4 px-4 text-sm rounded-md flex items-center")},Object(o["toDisplayString"])(a.text),3)}var r={props:{color:String||null,text:String||null},setup:function(e){return{props:e}}};r.render=l;t["a"]=r},"6f53":function(e,t,a){var o=a("83ab"),l=a("df75"),r=a("fc6a"),c=a("d1e7").f,n=function(e){return function(t){var a,n=r(t),u=l(n),s=u.length,i=0,d=[];while(s>i)a=u[i++],o&&!c.call(n,a)||d.push(e?[a,n[a]]:n[a]);return d}};e.exports={entries:n(!0),values:n(!1)}},7713:function(e,t,a){"use strict";var o=a("7a23"),l={key:0,class:"block relative"},r={class:"text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"},c={key:1,class:"block relative"},n={class:"text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"},u={key:0,class:"font-bold text-gray-800 mt-1 text-right"},s=Object(o["createTextVNode"])(" Nível: "),i={key:2,class:"block relative"},d={class:"text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"},p={value:"0",selected:"",disabled:""},b={key:3,class:"block relative"},m={class:"text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"},f={key:4,class:"block relative"},j={class:"text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"},O={key:5,class:"block relative"},g={class:"text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"},v={key:6,class:"block relative"},h={class:"bg-primary rounded-md shadow-md transform hover:scale-105 px-5 py-2 absolute flex justify-center items-center font-bold",style:{bottom:"20px",left:"20px"}},y=Object(o["createTextVNode"])(),V=Object(o["createVNode"])("i",{class:"ml-3 text-white gg-camera"},null,-1),x={key:7,class:"block relative"},w={class:"text-gray-700 bg-white rounded-sm px-3 -top-2 left-4 absolute text-sm"};function k(e,t,a,k,N,S){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,["default"==a.type?(Object(o["openBlock"])(),Object(o["createBlock"])("label",l,[Object(o["createVNode"])("span",r,Object(o["toDisplayString"])(a.label),1),a.readonly?(Object(o["openBlock"])(),Object(o["createBlock"])("input",{key:0,class:"border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full",type:a.type,placeholder:a.placeholder,value:a.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)}),readonly:""},null,40,["type","placeholder","value"])):(Object(o["openBlock"])(),Object(o["createBlock"])("input",{key:1,class:"border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full",type:a.type,placeholder:a.placeholder,value:a.modelValue,onInput:t[2]||(t[2]=function(t){return e.$emit("update:modelValue",t.target.value)}),autocomplete:a.autocomplete},null,40,["type","placeholder","value","autocomplete"]))])):Object(o["createCommentVNode"])("",!0),"password"==a.type?(Object(o["openBlock"])(),Object(o["createBlock"])("label",c,[Object(o["createVNode"])("span",n,Object(o["toDisplayString"])(a.label),1),Object(o["createVNode"])("input",{class:"border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full",type:a.type,placeholder:a.placeholder,value:a.modelValue,onInput:t[3]||(t[3]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["type","placeholder","value"]),a.modelValue.length>0&&a.showTip?(Object(o["openBlock"])(),Object(o["createBlock"])("p",u,[s,Object(o["createVNode"])("span",{class:"Forte"==k.passwordStrength(a.modelValue)?"text-green-400":"Moderada"==k.passwordStrength(a.modelValue)?"text-yellow-400":"text-red-400"},Object(o["toDisplayString"])(k.passwordStrength(a.modelValue)),3)])):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0),"select"==a.type?(Object(o["openBlock"])(),Object(o["createBlock"])("label",i,[Object(o["createVNode"])("span",d,Object(o["toDisplayString"])(a.label),1),Object(o["createVNode"])("select",{value:a.modelValue,onChange:t[4]||(t[4]=function(t){return e.$emit("update:modelValue",t.target.value)}),class:"border rounded-lg bg-white py-4 focus:outline-white form-input mt-1 pl-6 block w-full px-4 form-select"},[Object(o["createVNode"])("option",p,Object(o["toDisplayString"])(a.placeholder),1),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.data,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("option",{key:e.label,value:e.value},Object(o["toDisplayString"])(e.label),9,["value"])})),128))],40,["value"])])):Object(o["createCommentVNode"])("",!0),"date"==a.type?(Object(o["openBlock"])(),Object(o["createBlock"])("label",b,[Object(o["createVNode"])("span",m,Object(o["toDisplayString"])(a.label),1),Object(o["createVNode"])("input",{class:"border rounded-lg py-4 appearance-none focus:outline-white form-input mt-1 pl-6 pr-4 block w-full",type:a.type,placeholder:a.placeholder,value:a.modelValue,max:a.maxDate,min:a.minDate,onInput:t[5]||(t[5]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["type","placeholder","value","max","min"])])):Object(o["createCommentVNode"])("",!0),"money"==a.type?(Object(o["openBlock"])(),Object(o["createBlock"])("label",f,[Object(o["createVNode"])("span",j,Object(o["toDisplayString"])(a.label),1),Object(o["createVNode"])("input",{class:"border rounded-lg py-4 appearance-none focus:outline-white form-input mt-1 pl-6 block w-full",placeholder:a.placeholder,value:a.modelValue,onKeyup:t[6]||(t[6]=function(t){return e.$emit("update:modelValue",k.formaterMoney(t.target.value))})},null,40,["placeholder","value"])])):Object(o["createCommentVNode"])("",!0),"textarea"==a.type?(Object(o["openBlock"])(),Object(o["createBlock"])("label",O,[Object(o["createVNode"])("span",g,Object(o["toDisplayString"])(a.label),1),Object(o["createVNode"])("textarea",{class:"border rounded-lg py-4 appearance-none focus:outline-white form-input mt-1 pl-6 block w-full",placeholder:a.placeholder,value:a.modelValue,onChange:t[7]||(t[7]=function(t){return e.$emit("update:modelValue",t.target.value)})},"\r\n    ",40,["placeholder","value"])])):Object(o["createCommentVNode"])("",!0),"image"==a.type?(Object(o["openBlock"])(),Object(o["createBlock"])("div",v,[Object(o["createVNode"])("img",{class:a.width?"w-".concat(a.width," rounded-lg shadow-lg"):"flex-auto rounded-lg shadow-lg",src:k.tempImage?k.readURL(k.tempImage):"https://via.placeholder.com/700x300"},null,10,["src"]),Object(o["createVNode"])("button",h,[Object(o["createVNode"])("label",{class:"text-white",for:a.label},Object(o["toDisplayString"])(a.placeholder?"".concat(a.placeholder):"Adicionar"),9,["for"]),y,V,Object(o["createVNode"])("input",{onChange:t[8]||(t[8]=function(t){e.$emit("update:modelValue",t.target.files[0]),k.tempImage=t.target.files[0]}),class:"absolute hidden",id:a.label,type:"file"},null,40,["id"])])])):Object(o["createCommentVNode"])("",!0),"color"==a.type?(Object(o["openBlock"])(),Object(o["createBlock"])("label",x,[Object(o["createVNode"])("span",w,Object(o["toDisplayString"])(a.label),1),Object(o["createVNode"])("input",{class:"border w-full p-1 py-1 h-16 rounded-md ",placeholder:a.placeholder,value:a.modelValue,type:"color",onChange:t[9]||(t[9]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["placeholder","value"])])):Object(o["createCommentVNode"])("",!0)],64)}a("a9e3"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("ac1f"),a("5319");var N=a("0dd0"),S={props:{label:String||null,placeholder:String||null,type:String||null,modelValue:String,data:Array||null,showTip:Boolean,width:Number||null,maxDate:String||null,minDate:String||null,readonly:Boolean||null,autocomplete:String||null},setup:function(e,t){var a=t.emit,l=Object(o["ref"])();Object(o["computed"])({get:function(){return e.modelValue},set:function(e){return a("update:modelValue",e)}}),Object(o["onRenderTracked"])((function(){"image"==e.type&&(l.value=e.modelValue)}));var r=function(e){return"string"==typeof e?e:window.URL.createObjectURL(e)},c=function(e){if(e){var t=e;return t+="",t=parseInt(t.replace(/[\D]+/g,"")),t+="",t=t.replace(/([0-9]{2})$/g,",$1"),t.length>6&&(t=t.replace(/([0-9]{3}),([0-9]{2}$)/g,".$1,$2")),t}return""};return{props:e,passwordStrength:N["b"],formaterMoney:c,tempImage:l,readURL:r}}};S.render=k;t["a"]=S},"7fb2":function(e,t,a){},a15b:function(e,t,a){"use strict";var o=a("23e7"),l=a("44ad"),r=a("fc6a"),c=a("a640"),n=[].join,u=l!=Object,s=c("join",",");o({target:"Array",proto:!0,forced:u||!s},{join:function(e){return n.call(r(this),void 0===e?",":e)}})},e6b4:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),l={class:"my-6 flex items-center justify-between"},r={class:"font-bold"},c=Object(o["createTextVNode"])(" Editar usuário > "),n={class:"text-primary"},u=Object(o["createVNode"])("span",{class:"text-sm text-gray-500"},[Object(o["createTextVNode"])("Verifique as informações abaixo e clique no botão "),Object(o["createVNode"])("b",null,"salvar"),Object(o["createTextVNode"])(" para editar para confirmar as modificações. ")],-1),s={class:"flex justify-end my-5"},i={class:"card rounded-lg bg-white shadow-sm border p-8"},d=Object(o["createVNode"])("div",{class:"mb-6"},[Object(o["createVNode"])("span",{class:"text-sm text-gray-500"},"Informações básicas: ")],-1),p={class:"flex"},b={class:"flex-1 mr-3"},m={class:"flex-1 mr-3"},f={class:"flex-1"},j={class:"flex mt-5"},O={class:"flex-1 "};function g(e,t,a,g,v,h){var y=Object(o["resolveComponent"])("Button"),V=Object(o["resolveComponent"])("Input");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",null,[Object(o["createVNode"])("h3",r,[c,Object(o["createVNode"])("span",n,Object(o["toDisplayString"])(g.user.nome),1)]),u])]),Object(o["createVNode"])("div",s,[Object(o["createVNode"])(y,{onClick:g.edit,color:"primary",text:"Salvar"},null,8,["onClick"])]),Object(o["createVNode"])("div",i,[d,Object(o["createVNode"])("div",p,[Object(o["createVNode"])("div",b,[Object(o["createVNode"])(V,{modelValue:g.user.nome,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.user.nome=e}),type:"default",label:"Nome",placeholder:"Nome do Usuário"},null,8,["modelValue"])]),Object(o["createVNode"])("div",m,[Object(o["createVNode"])(V,{modelValue:g.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return g.user.email=e}),type:"default",label:"Email",placeholder:"Email",readonly:!0,autocomplete:"off"},null,8,["modelValue"])]),Object(o["createVNode"])("div",f,[Object(o["createVNode"])(V,{modelValue:g.user.tipo,"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.user.tipo=e}),type:"select",data:[{label:"Adminstrador",value:"ADM"},{label:"Usuário",value:"USER"}],label:"Tipo",placeholder:"Selecione um tipo"},null,8,["modelValue"])])]),Object(o["createVNode"])("div",j,[Object(o["createVNode"])("div",O,[Object(o["createVNode"])(V,{modelValue:g.user.status,"onUpdate:modelValue":t[4]||(t[4]=function(e){return g.user.status=e}),type:"select",data:[{label:"Ativo",value:"ATIVADO"},{label:"Inativo",value:"DESATIVADO"}],label:"Status",placeholder:"Selecione um status"},null,8,["modelValue"])])])])],64)}var v=a("1da1"),h=(a("99af"),a("fb6a"),a("96cf"),a("7713")),y=a("6e65"),V=a("0e9d"),x=a("1afe"),w=a("6c02"),k={name:"editUsers",components:{Input:h["a"],Button:y["a"]},setup:function(){var e=Object(w["c"])(),t=Object(w["d"])(),a=Object(o["inject"])("loading"),l=Object(o["inject"])("alert"),r=Object(o["inject"])("modal"),c=Object(o["ref"])({nome:"",email:"",tipo:"",status:"",created_at:"",updated_at:"",perfis_count:0});Object(o["onMounted"])(Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.open(),t.next=3,Object(V["b"])("users/".concat(e.params.id));case 3:c.value=t.sent,a.close();case 5:case"end":return t.stop()}}),t)}))));var n=function(){var o=Object(v["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:n=Object(x["b"])(c.value),n?l.open("Atenção!",n,"warning"):r.open("Atenção","Deseja realmente editar esse item?","warning","Sim",Object(v["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,a.open(),o.next=4,Object(V["e"])("users/".concat(e.params.id),c.value);case 4:r=o.sent,l.open("Sucesso!","".concat(r.nome," foi editado com sucesso!"),"success"),a.close(),t.push("/usuarios"),o.next=14;break;case 10:o.prev=10,o.t0=o["catch"](0),a.close(),l.open("Atenção!","".concat(o.t0.charAt(0).toUpperCase()).concat(o.t0.slice(1)),"warning");case 14:case"end":return o.stop()}}),o,null,[[0,10]])}))),r.close());case 2:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();return{edit:n,user:c}}};a("5817");k.render=g;t["default"]=k}}]);
//# sourceMappingURL=chunk-59f84906.f0013f6a.js.map