(this.webpackJsonpfacerecoapp=this.webpackJsonpfacerecoapp||[]).push([[0],{280:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(41),r=a.n(i),l=(a(92),a(93),a(80)),c=a(81),m=a(86),u=a(85),s=function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement("nav",null,o.a.createElement("p",{className:"f3 black pa3"},o.a.createElement("h1",null,"Face Recognition App"))))},A=a(82),g=a.n(A),E=a(83),d=a.n(E),p=(a(94),function(){return o.a.createElement("div",{className:"ma4 mt0"},o.a.createElement(g.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},o.a.createElement("div",{className:"Tilt-inner pa3"},o.a.createElement("img",{style:{paddingTop:"5px"},src:d.a,alt:"brain"}))))}),h=(a(95),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"f3"},"This magic brain will detect faces in your pictures! Git it a try!"),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa4 br3 shadow-5"},o.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),o.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-dark-blue",onClick:a},"Detect"))))}),b=(a(96),function(e){var t=e.imageUrl,a=e.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputimage",src:t,alt:"",width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),R=a(84),f=a.n(R),w=a(42),N=a.n(w),T=(a(280),new N.a.App({apiKey:"d9d4c10e4fa34540a433530a3e82acea"})),C={particles:{number:{value:250,density:{enable:!0,value_area:1e3}}}},I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),o=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*o,rightCol:n-t.right_col*n,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),T.models.predict(N.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{}},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f.a,{className:"particles",params:C}),o.a.createElement(s,null),o.a.createElement(p,null),o.a.createElement(h,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),o.a.createElement(b,{box:this.state.box,imageUrl:this.state.imageUrl}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t){e.exports="data:image/png;base64,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"},87:function(e,t,a){e.exports=a(281)},92:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.f157011d.chunk.js.map