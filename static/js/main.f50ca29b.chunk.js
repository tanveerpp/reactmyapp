(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{37:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(17),n=a.n(r),l=(a(37),a(0)),i=a(12),d=a(11),j=a(5),o=a(4),b=a.n(o),p=a(13),m=a(14),x=a.n(m),h=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),n=Object(j.a)(r,2),o=n[0],m=n[1],h=Object(c.useState)({name:"",price:0,cat:"",cmp:""}),u=Object(j.a)(h,2),f=u[0],O=u[1],v=Object(c.useState)({id:"",name:"",price:0,cat:"",cmp:""}),g=Object(j.a)(v,2),y=g[0],N=g[1];function w(e){O(Object(d.a)(Object(d.a)({},f),{},Object(i.a)({},e.target.name,e.target.value)))}function C(e){N(Object(d.a)(Object(d.a)({},y),{},Object(i.a)({},e.target.name,e.target.value)))}function M(){return(M=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.a.post("https://restapittt.herokuapp.com/products/",f);case 3:201===e.sent.status&&alert("product added sucessfully");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return P.apply(this,arguments)}function P(){return(P=Object(p.a)(b.a.mark((function e(t){var a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=function(){return(s=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restapittt.herokuapp.com/products/".concat(y.id,"/"),a);case 2:200===e.sent.status&&alert("product sucessfully updated");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},c=function(){return s.apply(this,arguments)},t.preventDefault(),a={method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(y)},c();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return(Z=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://restapittt.herokuapp.com/products/".concat(a));case 3:t=e.sent,m([t.data]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),window.alert("no records found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://restapittt.herokuapp.com/products/");case 2:t=e.sent,m(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("input",{type:"text",name:"id",value:a,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return Z.apply(this,arguments)},children:"serach"}),Object(l.jsxs)("table",{className:"table table-lg table-bordered table-hover",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"NAME"}),Object(l.jsx)("th",{children:"PRICE"}),Object(l.jsx)("th",{children:"CATEGORY"}),Object(l.jsx)("th",{children:"COMPANY"}),Object(l.jsx)("th",{children:"Delete"})]})}),Object(l.jsx)("tbody",{children:o.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.price}),Object(l.jsx)("td",{children:e.cat}),Object(l.jsx)("td",{children:e.cmp}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){function t(){return(t=Object(p.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("https://restapittt.herokuapp.com/products/".concat(e.id));case 2:204===t.sent.status&&alert("product deleted successfully");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},children:"Delete"})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:function(){N(e)},children:"update"}),Object(l.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(l.jsx)("div",{class:"modal-dialog",children:Object(l.jsxs)("div",{class:"modal-content",children:[Object(l.jsx)("div",{class:"modal-header",children:Object(l.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})}),Object(l.jsx)("div",{class:"modal-body",children:Object(l.jsxs)("form",{action:"",onSubmit:k,children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Product Name"}),Object(l.jsx)("input",{type:"text",name:"name",value:y.name,onChange:C,placeholder:"please enter product name",class:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Product Price"}),Object(l.jsx)("input",{type:"number",name:"price",value:y.price,onChange:C,placeholder:"please enter product price",class:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Product Category"}),Object(l.jsx)("input",{type:"text",name:"cat",value:y.cat,onChange:C,placeholder:"please enter product category",class:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Product Company"}),Object(l.jsx)("input",{type:"text",name:"cmp",value:y.cmp,onChange:C,placeholder:"please enter product Company",class:"form-control"})]}),Object(l.jsx)("button",{class:"btn btn-primary","data-bs-dismiss":"modal",children:"Update Product"})]})})]})})})]})]})}))})]}),Object(l.jsxs)("form",{action:"",onSubmit:function(e){return M.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Product Name"}),Object(l.jsx)("input",{type:"text",name:"name",value:f.name,onChange:w,placeholder:"please enter product name",class:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Product Price"}),Object(l.jsx)("input",{type:"number",name:"price",value:f.price,onChange:w,placeholder:"please enter product price",class:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Product Category"}),Object(l.jsx)("input",{type:"text",name:"cat",value:f.cat,onChange:w,placeholder:"please enter product category",class:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Product Company"}),Object(l.jsx)("input",{type:"text",name:"cmp",value:f.cmp,onChange:w,placeholder:"please enter product Company",class:"form-control"})]}),Object(l.jsx)("button",{class:"btn btn-primary",children:"Add Product"})]})]})})},u=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"col-sm-3",children:Object(l.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(l.jsx)("img",{src:"https://realbusinessda.s3.eu-west-2.amazonaws.com/wp-content/uploads/2015/02/media.caspianmedia.comimage97dd9a06edb37bc5c3ab75d27e1398b2-6350489d6aba5170ffba3c6780c7c7db9f8a94bc.jpg",className:"card-img-top",alt:"..."}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:e.name}),Object(l.jsx)("h5",{className:"card-title",children:e.price}),Object(l.jsx)("h5",{className:"card-title",children:e.cat}),Object(l.jsx)("h5",{className:"card-title",children:e.cmp}),Object(l.jsx)("a",{href:"https://www.paypal.com/in/signin",className:"btn btn-primary",children:"Buy Now"})]})]})})})},f=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://restapittt.herokuapp.com/products/");case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"row",children:a.map((function(e){return Object(l.jsx)(u,{name:e.name,price:e.price,cat:e.cat,cmp:e.cmp})}))})})},O=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container col-xxl-8 px-4 py-5",children:Object(l.jsxs)("div",{className:"row flex-lg-row-reverse align-items-center g-5 py-5",children:[Object(l.jsx)("div",{className:"col-10 col-sm-8 col-lg-6",children:Object(l.jsxs)("svg",{id:"f586cbbb-e0d2-42b7-9efb-39623a8fe6cc","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"400",height:"400",viewBox:"0 0 691 571.22835",children:[Object(l.jsx)("path",{d:"M944.5,200.38583h-689a1,1,0,0,1,0-2h689a1,1,0,0,1,0,2Z",transform:"translate(-254.5 -164.38583)",fill:"#cacaca"}),Object(l.jsx)("circle",{cx:"23.50787",cy:"11",r:"11",fill:"#3f3d56"}),Object(l.jsx)("circle",{cx:"61.50787",cy:"11",r:"11",fill:"#3f3d56"}),Object(l.jsx)("circle",{cx:"99.50787",cy:"11",r:"11",fill:"#3f3d56"}),Object(l.jsx)("path",{d:"M687.31346,302.20053H512.68654a8.22518,8.22518,0,0,1,0-16.45036H687.31346a8.22518,8.22518,0,1,1,0,16.45036Z",transform:"translate(-254.5 -164.38583)",fill:"#e4e4e4"}),Object(l.jsx)("path",{d:"M659.158,274.04511H540.842a8.22519,8.22519,0,0,1,0-16.45037H659.158a8.22518,8.22518,0,0,1,0,16.45037Z",transform:"translate(-254.5 -164.38583)",fill:"#e4e4e4"}),Object(l.jsx)("circle",{cx:"123.73228",cy:"297.22835",r:"73",fill:"#f0f0f0"}),Object(l.jsx)("circle",{cx:"595.73228",cy:"297.22835",r:"73",fill:"#f0f0f0"}),Object(l.jsx)("circle",{cx:"345.73228",cy:"297.22835",r:"73",fill:"#f0f0f0"}),Object(l.jsx)("path",{d:"M885.71169,493.25319a112.49294,112.49294,0,0,0-17.946-7.55226l-.78988-8.73-32.00552-3.44819-4.06751,11.15837-11.486,4.31035a5.60545,5.60545,0,0,0-1.16622.60705h-.01239a11.34228,11.34228,0,0,0-5.269,1.82128,11.66491,11.66491,0,0,0-2.81648,2.52552c1.554,1.17778,3.16807,2.27052,4.83166,3.31479l.07336.03633c.47354.29143.95947.58287,1.44445.86216.87467.522,1.77316,1.01985,2.67165,1.4934l.57073.29143c1.31105.67995,2.64688,1.32344,4.01891,1.91835.27917.12148.58311.24284.86228.36433.02382.01214.03621.01214.06.02429.64409.26714,1.28723.522,1.94276.76486a63.82618,63.82618,0,0,0,6.581,2.11272,67.67638,67.67638,0,0,0,17.44769,2.28267c2.14952,0,4.27426-.09718,6.37519-.30358a67.391,67.391,0,0,0,14.13289-2.85328c.01143,0,.02477-.01215.03621-.01215a66.31681,66.31681,0,0,0,8.48754-3.36327c.01144-.01215.03621-.01215.0486-.0243.61932-.29143,1.21386-.60705,1.8208-.91064l.29155-.14577c.48593-.25488.97186-.50987,1.45779-.777,1.21387-.6678,2.40392-1.372,3.58062-2.12487.32777-.19425.6441-.40065.97186-.6192.46116-.30358.92231-.6192,1.372-.94708C888.10321,494.60092,886.92555,493.90883,885.71169,493.25319Z",transform:"translate(-254.5 -164.38583)",fill:"#353258"}),Object(l.jsx)("circle",{cx:"595.21717",cy:"280.56667",r:"23.05088",fill:"#a0616a"}),Object(l.jsx)("path",{d:"M834.241,433.72488c2.38613,2.82385,6.42439,3.62069,10.14949,3.9474,7.56524.66349,18.566-.41275,25.95922-2.11971.52764,5.11434-.911,10.62883,2.10134,14.8359a68.873,68.873,0,0,0,2.44711-15.61333,14.94474,14.94474,0,0,0-.86494-6.68712,6.15027,6.15027,0,0,0-5.23918-3.8626,13.13088,13.13088,0,0,1,5.85723-2.5041l-7.31917-3.67816,1.87956-1.92965-13.25093-.81087,3.83795-2.43821a83.22226,83.22226,0,0,0-17.43528-.55038c-2.70028.19894-5.52345.579-7.71132,2.14353s-3.45208,4.67409-2.09386,6.97113a10.12191,10.12191,0,0,0-7.71382,6.1206,16.34045,16.34045,0,0,0-.58555,7.85429,55.67588,55.67588,0,0,0,2.91919,12.34966Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("circle",{id:"bfd52db7-3176-431c-b22d-4ccf50ae4673","data-name":"Ellipse 188",cx:"349.78151",cy:"247.9577",r:"9.74625",fill:"#2f2e41"}),Object(l.jsx)("path",{id:"b31e8c25-48a3-409d-90cd-0f3aa66812dd","data-name":"Path 969",d:"M595.8265,417.41438a9.74745,9.74745,0,0,1,3.5442-16.35922,9.7439,9.7439,0,1,0,4.51778,18.87613,9.72307,9.72307,0,0,1-8.06281-2.51769Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("circle",{id:"fe71adb6-1e7d-40f2-ae2d-2f206863ade9","data-name":"Ellipse 189",cx:"349.97817",cy:"281.77689",r:"28.63055",fill:"#2f2e41"}),Object(l.jsx)("path",{id:"e07a90a6-c331-41ef-a441-b6d8bd717078","data-name":"Path 970",d:"M579.00773,430.39912a28.6259,28.6259,0,0,1,39.67839-3.00246c-.23349-.22295-.467-.4471-.70858-.663a28.63055,28.63055,0,0,0-38.20772,42.64978q.08154.073.16359.14542c.24282.216.49262.42023.74128.62686a28.62587,28.62587,0,0,1-1.66582-39.75662Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("circle",{id:"fefa9ca9-d901-48cd-a772-63aab06ef99d","data-name":"Ellipse 190",cx:"349.73536",cy:"291.72509",r:"18.43954",fill:"#a0616a"}),Object(l.jsx)("path",{d:"M637.23228,504.15531v6.187c-1.13258.72375-2.27657,1.40084-3.44392,2.04287-.46683.25679-.93366.502-1.40049.74713l-.28043.14007c-.58368.29184-1.156.59537-1.751.87552-.0114.01168-.03534.01168-.04674.0233a63.74437,63.74437,0,0,1-8.16008,3.23359c-.0114,0-.0228.01169-.03477.01169a64.79794,64.79794,0,0,1-13.58818,2.74326c-2.0195.1985-4.06237.29183-6.12861.29183a65.05958,65.05958,0,0,1-16.77446-2.19463,63.16986,63.16986,0,0,1-8.19485-2.76663c-.02337-.01161-.03534-.01161-.05871-.02329-.26847-.11678-.56031-.23349-.82878-.35027-1.319-.572-2.60318-1.19065-3.864-1.84437l-.54834-.28015c-1.34292-.71214-2.66189-1.45919-3.9575-2.26467l-.07011-.03506a63.94175,63.94175,0,0,1-5.76666-4.05069c-.94563-.72375-1.85591-1.48256-2.7434-2.27635-.46683-.39693-.93366-.81716-1.37711-1.22571a63.19484,63.19484,0,0,1-4.845-4.99631,23.61669,23.61669,0,0,1,.88748-3.58379l.0114-.01169a5.24,5.24,0,0,1,.2451-.58368,4.655,4.655,0,0,1,.22173-.49026c2.08961-3.91062,5.87212-4.87954,10.56491-5.08966,2.64992-.11677,5.5797.01169,8.67365-.02337,1.63418-.01168,3.32651-.07,5.0194-.2218,10.68118-.96885,8.74376-7.2726,9.222-10.66964.4788-3.29188,3.44393-.44353,3.64228-.25678l.0114.01168a37.67235,37.67235,0,0,0,19.37821,3.397c1.144-.14007,2.288-.2218,3.432-.25678,3.01187-.03505,2.35808.82878,1.31954,1.54092a13.05522,13.05522,0,0,1-1.576.8872s-.4788,2.91839-.969,7.28428c-.46682,4.17908,14.25336,5.62666,17.137,6.53716h.0114A10.52719,10.52719,0,0,1,637.23228,504.15531Z",transform:"translate(-254.5 -164.38583)",fill:"#353258"}),Object(l.jsx)("ellipse",{id:"eb9de4e7-d719-4e1b-ab1d-c7fc470b1049","data-name":"Ellipse 191",cx:"331.05301",cy:"287.84364",rx:"1.45569",ry:"2.66857",fill:"#a0616a"}),Object(l.jsx)("ellipse",{id:"a295d86f-11aa-4df2-91d0-9ecb8f1fab78","data-name":"Ellipse 192",cx:"368.41888",cy:"287.84364",rx:"1.45569",ry:"2.66857",fill:"#a0616a"}),Object(l.jsx)("path",{d:"M354.87705,466.7261l3.50306,12.13477,44.76593-.78975-.39225-22.23389c-.31048-17.59891-12.7482-32.77758-30.34676-32.46711s-28.78858,15.18853-28.47811,32.78744l2.55657,22.91315,7.29877-.12876Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("circle",{cx:"119.90748",cy:"290.74031",r:"20.08534",fill:"#ffb6b6"}),Object(l.jsx)("path",{d:"M396.395,441.02268a7.7901,7.7901,0,0,0-1.3835-4.2984c-.09248-.13-.1854-.25068-.27833-.37137a7.827,7.827,0,0,0-6.27609-2.99865l-14.43612.25991-14.42707.25068a7.81655,7.81655,0,0,0-7.65913,7.93764l3.43519,6.91644,1.97734,3.9735.325-.18569c12.48644-7.01855,17.59253-7.11142,34.118-.58488l.33408.13,1.30917-3.35149,2.97054-7.60344Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("path",{d:"M414.38728,486.4483c-4.30823-4.29835-18.88366-2.59016-18.88366-2.59016L357.032,486.28125c-8.53235.63124-16.21937,7.46411-19.0043,10.23067.44518.43637.90056.86339,1.36528,1.27182a53.85271,53.85271,0,0,0,63.33295,6.016c4.12217-2.46028,9.39637-5.40993,12.70125-8.85424,1.30921-1.3554,2.35674-1.32842,3.51727-2.81381A11.58921,11.58921,0,0,0,414.38728,486.4483Z",transform:"translate(-254.5 -164.38583)",fill:"#353258"}),Object(l.jsx)("circle",{cx:"123.73228",cy:"498.22835",r:"73",fill:"#f0f0f0"}),Object(l.jsx)("circle",{cx:"595.73228",cy:"498.22835",r:"73",fill:"#f0f0f0"}),Object(l.jsx)("circle",{cx:"345.73228",cy:"498.22835",r:"73",fill:"#f0f0f0"}),Object(l.jsx)("circle",{cx:"122.53725",cy:"488.51829",r:"20.18141",fill:"#ffb8b8"}),Object(l.jsx)("path",{d:"M357.94449,659.21819s1.71468-3.01125,1.31605-13.07083,14.9197-4.37,27.71977-5.32963,10.09053,16.79472,10.09053,16.79472.92344-1.0554,2.90053-9.62417-2.512-17.1079-2.512-17.1079c-1.32209-9.00418-8.44726-6.11833-8.44726-6.11833,3.43139,1.33581,2.77235,4.19206,2.77235,4.19206-2.90455-5.09247-10.02971-2.20662-10.02971-2.20662-9.50292-5.96331-19.134,1.88962-19.134,1.88962-11.48,2.60544-4.74742,11.735-4.74742,11.735C346.32826,646.20649,357.94449,659.21819,357.94449,659.21819Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("path",{d:"M410.71169,700.26888a112.49294,112.49294,0,0,0-17.946-7.55226l-.78988-8.73-32.00552-3.44819-4.06751,11.15837-11.486,4.31035a5.60545,5.60545,0,0,0-1.16622.607h-.01239a11.34228,11.34228,0,0,0-5.269,1.82128,11.66512,11.66512,0,0,0-2.81648,2.52552c1.554,1.17778,3.16807,2.27052,4.83166,3.31479l.07336.03633c.47354.29144.95947.58287,1.44445.86216.87467.522,1.77316,1.01986,2.67165,1.4934l.57073.29144c1.31105.67994,2.64688,1.32344,4.01891,1.91834.27917.12148.58311.24285.86228.36433.02382.01215.03621.01215.06.02429.64409.26715,1.28723.522,1.94276.76487a63.82369,63.82369,0,0,0,6.581,2.11271,67.67638,67.67638,0,0,0,17.44769,2.28267c2.14952,0,4.27426-.09718,6.37519-.30358a67.391,67.391,0,0,0,14.13289-2.85328c.01143,0,.02477-.01215.03621-.01215A66.31681,66.31681,0,0,0,404.689,707.894c.01144-.01215.03621-.01215.0486-.02429.61932-.29144,1.21386-.60706,1.8208-.91064l.29155-.14578c.48593-.25488.97186-.50987,1.45779-.777,1.21387-.6678,2.40392-1.372,3.58062-2.12487.32777-.19425.6441-.40065.97186-.6192.46116-.30358.92231-.6192,1.372-.94708C413.10321,701.61661,411.92555,700.92452,410.71169,700.26888Z",transform:"translate(-254.5 -164.38583)",fill:"#353258"}),Object(l.jsx)("path",{d:"M627.98794,695.99956,615.83785,694.895l-7.27034-5.30973a.04144.04144,0,0,0-.00916-.02811l-.01878.00933-.29087-.21575-.03756.33771-12.27053,4.71871-12.60813-2.90811-4.36211,4.71865-19.42819,6.44481a9.87032,9.87032,0,0,0-2.42982,2.29814l.00131.01245c.81572.63837,1.65413,1.26751,2.50317,1.864a64.47429,64.47429,0,0,0,5.99464,3.84622,67.54019,67.54019,0,0,0,16.00419,6.57615q.75993.21111,1.51985.394c.88176.21581,1.77269.42216,2.66408.591q2.70163.56291,5.46924.88183a67.051,67.051,0,0,0,8.17089.48783q2.80059,0,5.54437-.21574a68.34591,68.34591,0,0,0,9.54965-1.45412c.11268-.02811.22537-.04689.338-.0844a67.548,67.548,0,0,0,13.95895-4.85939c.6848-.32837,1.3696-.66608,2.04478-1.01317q2.4914-1.28049,4.84079-2.758c1.18225-.7317,2.33611-1.51035,3.46156-2.31711.69442-.49722,1.37922-1.00378,2.0544-1.52912l-.0729-.15536A16.16256,16.16256,0,0,0,627.98794,695.99956Z",transform:"translate(-254.5 -164.38583)",fill:"#353258"}),Object(l.jsx)("path",{d:"M616.382,635.36265a22.34916,22.34916,0,0,0-4.756-3.593c-10.74152-5.92885-22.477-6.032-32.19618-.29081a30.30412,30.30412,0,0,0-6.55714,5.20649,30.68108,30.68108,0,0,0-8.52771,21.145V681.208H625.491V655.43819C625.491,648.53367,621.69187,640.541,616.382,635.36265Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("circle",{cx:"339.20981",cy:"494.09996",r:"22.08398",fill:"#ffb8b8"}),Object(l.jsx)("path",{d:"M616.36325,638.43962a2.7303,2.7303,0,0,0-1.54779-2.20454c-13.81832-6.45419-27.83361-6.28533-41.6336.50656H572.929l-.08475.34715c-2.72042,20.95732-2.33565,21.417-2.16708,21.60461a2.73,2.73,0,0,0,.96651.70359,2.64755,2.64755,0,0,0,1.07873.22513h31.50176l.07512-.35648a51.45456,51.45456,0,0,1,1.40716-5.55359A61.65932,61.65932,0,0,1,609.168,659.397l.131.22513h6.12611a2.17125,2.17125,0,0,0,.34721-.02811,2.62746,2.62746,0,0,0,1.64169-.85371C617.5826,658.56206,617.97654,658.13056,616.36325,638.43962Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("path",{d:"M866.74517,693.165l-.79553-8.832-32.42054-3.49257L829.42419,692.141l-11.63928,4.36117a5.68724,5.68724,0,0,0-1.19733.61255A11.75751,11.75751,0,0,0,810.242,699.693c.26518.21942.53036.42975.79553.64.05492.05486.11875.10056.17367.14627.74062.576,1.49955,1.14285,2.26741,1.68231.20134.14626.40267.29257.61294.42968a60.831,60.831,0,0,0,5.22947,3.31887q2.57813,1.46744,5.29375,2.7063a65.45832,65.45832,0,0,0,10.304,3.70285q.74063.20574,1.48125.384c.85938.21033,1.72768.41144,2.59643.576q2.633.54859,5.33036.85943a65.34835,65.34835,0,0,0,7.96339.47544q2.72948,0,5.40357-.21026a66.61105,66.61105,0,0,0,9.30715-1.41719c.10982-.0274.21964-.04571.32946-.08226a65.83246,65.83246,0,0,0,13.60447-4.736c.66741-.32,1.33482-.64916,1.99285-.98744q2.42812-1.248,4.71786-2.688c.54866-.33828,1.08795-.68571,1.62768-1.05139C880.98044,697.86445,868.93937,693.869,866.74517,693.165Z",transform:"translate(-254.5 -164.38583)",fill:"#353258"}),Object(l.jsx)("circle",{id:"e8fe815c-89b6-45a1-8f09-a3d9b2d7a5fa","data-name":"Ellipse 109",cx:"593.97253",cy:"487.5152",r:"23.34625",fill:"#a0616a"}),Object(l.jsx)("path",{id:"b463a6a0-335d-4c85-b501-8d2679f87106","data-name":"Path 696",d:"M832.80236,640.5269c2.4169,2.86018,6.50628,3.66685,10.27915,3.99489,7.66249.67222,18.80362-.41793,26.29172-2.14648.53779,5.17952-.9219,10.76466,2.12806,15.02613a69.75922,69.75922,0,0,0,2.47838-15.81361,15.1462,15.1462,0,0,0-.87582-6.77287,6.22847,6.22847,0,0,0-5.30626-3.91192,1.94735,1.94735,0,0,0,.42741-2.03654,6.62182,6.62182,0,0,0-5.02016-4.974l-8.40443-2.02557s-7.88625-3.459-13.7778-3.02455c-2.735.20128-5.59436.58617-7.81,2.17106s-3.49631,4.73392-2.12036,7.06019a10.25145,10.25145,0,0,0-7.81231,6.199,16.54932,16.54932,0,0,0-.59307,7.9552,56.38522,56.38522,0,0,0,2.95623,12.50783Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("path",{d:"M624.15611,441.9999a8.976,8.976,0,0,0-4.3916-5.27014,25.04331,25.04331,0,0,0-6.62354-2.32849,43.58215,43.58215,0,0,0-12.40478-1.69782c-4.18359.20557-8.46045,1.64954-11.30273,4.72632s-3.896,7.96173-1.82569,11.60285l-.229.94116a17.28487,17.28487,0,0,0,16.89306-8.32062,15.78,15.78,0,0,0,14.93506,7.25653,6.99709,6.99709,0,0,0,2.667-.76715A5.549,5.549,0,0,0,624.15611,441.9999Z",transform:"translate(-254.5 -164.38583)",fill:"#2f2e41"}),Object(l.jsx)("path",{d:"M921.73228,171.11417h-27a2,2,0,0,1,0-4h27a2,2,0,0,1,0,4Z",transform:"translate(-254.5 -164.38583)",fill:"#3f3d56"}),Object(l.jsx)("path",{d:"M921.73228,178.61417h-27a2,2,0,0,1,0-4h27a2,2,0,0,1,0,4Z",transform:"translate(-254.5 -164.38583)",fill:"#3f3d56"}),Object(l.jsx)("path",{d:"M921.73228,186.11417h-27a2,2,0,0,1,0-4h27a2,2,0,0,1,0,4Z",transform:"translate(-254.5 -164.38583)",fill:"#3f3d56"})]})}),Object(l.jsxs)("div",{className:"col-lg-6",children:[Object(l.jsx)("h1",{className:"display-5 fw-bold lh-1 mb-3",children:"About"}),Object(l.jsx)("p",{className:"lead",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ad voluptas minus libero rem ipsam, magni quos sit. Nulla aliquam rerum placeat suscipit, consectetur quaerat? Quasi dignissimos ab itaque magnam."}),Object(l.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-start"})]})]})})})},v=function(e){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:e.name}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"container col-6",children:Object(l.jsxs)("form",{className:"row g-3",children:[Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Full Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"exampleInputEmail",placeholder:"Alex","aria-describedby":"emailHelp"})]}),Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"alexisamazing@email,.com","aria-describedby":"emailHelp"}),Object(l.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(l.jsxs)("div",{className:"col-12",children:[Object(l.jsx)("label",{for:"inputAddress",className:"form-label",children:"Subject"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"inputAddress",placeholder:"Product is good"})]}),Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:"Message"}),Object(l.jsx)("textarea",{placeholder:"i cant explain that how good is the product",class:"form-control",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Message Us"})})]})}),Object(l.jsx)("div",{className:" container col-4"})]})]})},g=a(2),y=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{children:"404 Page Not Found"})})},N=a(10),w=function(){var e=Object(g.f)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)(N.b,{exact:!0,to:"/",className:"navbar-brand",activeClassName:"active",children:"Home"}),Object(l.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{class:"navbar-toggler-icon"})}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)(N.b,{exact:!0,to:"/",activeClassName:"active",className:"nav-link active",children:"Home"}),Object(l.jsx)(N.b,{exact:!0,to:"/about",activeClassName:"active",className:"nav-link active",children:"About"}),Object(l.jsx)(N.b,{exact:!0,to:"/contact",activeClassName:"active",className:"nav-link active",children:"Contact"}),Object(l.jsx)(N.b,{exact:!0,to:"/images/programmers/point",activeClassName:"active",className:"nav-link active",children:"Images"}),Object(l.jsx)("button",{className:"nav-link active",onClick:function(){e.push("/")},children:"Back"})]})})]})})})},C=function(e){var t=Object(g.g)(),a=Object(g.h)(),c=a.iname,s=a.lname;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{children:[e.name," Image component is running"]}),Object(l.jsx)("h2",{children:t.pathname}),Object(l.jsxs)("h2",{children:[c," ",s]}),"tanveer"===c?Object(l.jsx)("h2",{children:"my data"}):null]})};var M=function(){var e=Object(c.useState)({id:"",pwd:""}),t=Object(j.a)(e,2),a=t[0],r=t[1];function o(e){r(Object(d.a)(Object(d.a)({},a),{},Object(i.a)({},e.target.name,e.target.value)))}return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),"admin"===a.id&&"12345"===a.pwd?n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N.a,{children:Object(l.jsx)(h,{})})}),document.getElementById("root")):alert("Invalid id and password")},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"ID"}),Object(l.jsx)("input",{type:"text",name:"id",value:a.id,onChange:o,className:"form-control",placeholder:"please enter Id"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"PASSWORD"}),Object(l.jsx)("input",{type:"password",value:a.pwd,name:"pwd",onChange:o,className:"form-control",placeholder:"please enter Password"})]}),Object(l.jsx)("button",{className:"btn btn-primary",children:"Login"})]})})})},k=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(w,{}),Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{exact:!0,path:"/",component:f}),Object(l.jsx)(g.a,{exact:!0,path:"/about",component:O}),Object(l.jsx)(g.a,{exact:!0,path:"/contact",component:function(){return Object(l.jsx)(v,{name:"abhishek"})}}),Object(l.jsx)(g.a,{exact:!0,path:"/images/:iname/:lname",render:function(){return Object(l.jsx)(C,{name:"pp.jpg"})}}),Object(l.jsx)(g.a,{exact:!0,path:"/admin",component:M}),Object(l.jsx)(g.a,{exact:!0,path:"/ahome",component:h}),Object(l.jsx)(g.a,{component:y})]})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};a(64);n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N.a,{children:Object(l.jsx)(k,{})})}),document.getElementById("root")),P()}},[[65,1,2]]]);
//# sourceMappingURL=main.f50ca29b.chunk.js.map