(this.webpackJsonptradeapp=this.webpackJsonptradeapp||[]).push([[0],{25:function(e,t,a){},32:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),o=a.n(r),c=a(11),s=(a(25),a(12)),i=a(31);var m={names:["ACC","ADANIENT","ADANIPORTS","ADANIPOWER","AMARAJABAT","AMBUJACEM","APOLLOHOSP","APOLLOTYRE","ASHOKLEY","ASIANPAINT","AUROPHARMA","AXISBANK","BAJAJ-AUTO","BAJAJFINSV","BAJFINANCE","BALKRISIND","BANKBARODA","BANKNIFTY","BATAINDIA","BEL","BERGEPAINT","BHARATFORG","BHARTIARTL","BHEL","BIOCON","BOSCHLTD","BPCL","BRITANNIA","CADILAHC","CANBK","CENTURYTEX","CESC","CHOLAFIN","CIPLA","COALINDIA","COLPAL","CONCOR","CUMMINSIND","DABUR","DIVISLAB","DLF","DRREDDY","EICHERMOT","EQUITAS","ESCORTS","EXIDEIND","FEDERALBNK","GAIL","GLENMARK","GMRINFRA","GODREJCP","GRASIM","HAVELLS","HCLTECH","HDFC","HDFCBANK","HEROMOTOCO","HINDALCO","HINDPETRO","HINDUNILVR","IBULHSGFIN","ICICIBANK","ICICIPRULI","IDEA","IDFCFIRSTB","IGL","INDIGO","INDUSINDBK","INFRATEL","INFY","IOC","ITC","JINDALSTEL","JSWSTEEL","JUBLFOOD","JUSTDIAL","KOTAKBANK","L&TFH","LICHSGFIN","LT","LUPIN","M&M","M&MFIN","MANAPPURAM","MARICO","MARUTI","MCDOWELL-N","MFSL","MGL","MINDTREE","MOTHERSUMI","MRF","MUTHOOTFIN","NATIONALUM","NCC","NESTLEIND","NIFTY","NIFTYIT","NIITTECH","NMDC","NTPC","ONGC","PAGEIND","PEL","PETRONET","PFC","PIDILITIND","PNB","POWERGRID","PVR","RAMCOCEM","RBLBANK","RECLTD","RELIANCE","SAIL","SBIN","SHREECEM","SIEMENS","SRF","SRTRANSFIN","SUNPHARMA","SUNTV","TATACHEM","TATACONSUM","TATAMOTORS","TATAPOWER","TATASTEEL","TCS","TECHM","TITAN","TORNTPHARM","TORNTPOWER","TVSMOTOR","UBL","UJJIVAN","ULTRACEMCO","UPL","VEDL","VOLTAS","WIPRO","YESBANK","ZEEL"]};console.log(m.names);var d=m.names.map((function(e){return{value:e+"20JUNFUT",name:e+"20JUNFUT"}})),u=window.html2canvas,E={container:"w-full h-10 z-0",options:"list-none z-40 resize-none",row:"block",option:"bg-white w-full p-2 text-left cursor-pointer outline-none ease-in-out duration-400 z-0 resize-none",input:"z-0 border text-gray-700 h-10 px-2 w-48 bg-white text-sm resize-none",select:"-select border shadow-xl z-50 h-64 w-full overflow-y-scroll resize-none",value:"-value z-0","has-focus":"bg-blue-100","is-loading":"hidden","is-selected":"bg-blue-200"},h="https://api.telegram.org/bot1071828300:AAHyJaaX-J56lV3KSSYvcqEc2RhFbuoxqR4/sendPhoto?chat_id=-1001256116935",N="https://minilabz.github.io/FastTrade/",p=function(e){return{inline_keyboard:[[{text:"upstox",url:N+"upstox?"+e},{text:"zerodha",url:N+"zerodha?"+e},{text:"dailygong",url:N+"dailygong?"+e}]]}},A={check:!1,action:!1,tradingsymbol:"",exchange:"NFO",order_type:"M",quantity:"1",variety:"S",validity:"D"};function g(e,t,a){var n=new FormData;n.append("chat_id","-1001256116935"),n.append("photo",function(e){for(var t=atob(e.split(",")[1]),a=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),l=new Uint8Array(n),r=0;r<t.length;r++)l[r]=t.charCodeAt(r);return new Blob([n],{type:a})}(t)),n.append("reply_markup",JSON.stringify(p(a))),console.log(JSON.stringify(p(a))),fetch(e,{method:"POST",body:n}).then(console.log("Done"))}function b(){for(var e=document.getElementById("rows"),t=0;t<e.children.length;t++){var a=e.children[t];a.children[0].children[0].checked||a.classList.toggle("hidden")}document.querySelectorAll("#orderTable td:nth-child(1),th:nth-child(1)").forEach((function(e){return e.classList.toggle("hidden")})),document.querySelectorAll("#orderTable td:last-child,th:last-child").forEach((function(e){return e.classList.toggle("hidden")}))}var x=function(){return l.a.createElement("div",{className:"bg-gray-100 w-full h-screen"},l.a.createElement("h1",{className:"text-4xl text-gray-600 m-auto w-full text-center"},"mybillion.in - Messenger"),l.a.createElement(s.c,{initialValues:{order:new Array(10).fill(A)},onSubmit:function(e){b();var t=[],a=[],n=[];e.values.order.forEach((function(l,r){if("undefined"!=typeof l){var o=Object.assign({},e.order[r],l);a=a.concat(Object.keys(o)),n.push(Object.values(o)),t.push(o)}})),a=Object(c.a)(new Set(a));var l=n.map((function(e){return e.join("|")})),r="keys=".concat(a.join("|"),"&values=").concat(l.join("||"),"&time=").concat((new Date).toISOString()),o=document.getElementById("orderTable");u(o).then((function(e){b();var t=e.toDataURL();g(h,t,r)}))}},(function(e){var t=e.values,a=(e.touched,e.errors,e.dirty,e.isSubmitting,e.setFieldValue);return l.a.createElement(s.b,null,l.a.createElement("table",{className:"table-fixed m-auto text-black bg-white px-10 border-1 border-gray-100 shadow-md z-0",id:"orderTable"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"text-xl text-blue-900 bg-white"},l.a.createElement("th",{className:"w-auto px-2 py-2 text-sm",title:"Buy or Sell"},l.a.createElement("input",{type:"checkbox",id:"checkAll",onChange:function(e){for(var n=e.target.checked,l=0;l<t.order.length;l++)a("values.order.".concat(l,".check"),n)}})),l.a.createElement("th",{className:"w-auto px-2 py-2 text-sm",title:"Buy or Sell"},"Do"),l.a.createElement("th",{className:"w-auto px-4 text-sm",title:"Stock Symbol"},"Symbol"),l.a.createElement("th",{className:"w-auto px-4 text-sm hidden",title:"Exchange"},"Exch.."),l.a.createElement("th",{className:"w-auto px-4 text-sm",title:"Order Type"},"Order"),l.a.createElement("th",{className:"w-auto px-4 text-sm"},"Qty"),l.a.createElement("th",{className:"w-auto px-4 text-sm"}," Send "))),l.a.createElement("tbody",{id:"rows"},t.order.map((function(e,n){return l.a.createElement("tr",{id:"row",key:n},l.a.createElement("td",{className:"w-auto px-2 text-sm"},l.a.createElement(s.a,{name:"values.order.".concat(n,".check"),type:"checkbox"})),l.a.createElement("td",{label:"action"},l.a.createElement(s.a,{id:"values.order.".concat(n,".action"),name:"values.order.".concat(n,".action"),className:"hidden",type:"checkbox"}),function(e,t){e.values&&Object.assign({},e,e.values);var a=e.order[t].action;e.values&&e.values.order&&e.values.order[t]&&"undefined"!=typeof e.values.order[t].action&&(a=e.values.order[t].action);return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement("label",{className:"select-none py-2 px-4 rounded-sm text-white bg-red-400",htmlFor:"values.order.".concat(t,".action")},"Sell"),!a&&l.a.createElement("label",{className:"select-none py-2 px-4 rounded-sm text-white bg-green-400",htmlFor:"values.order.".concat(t,".action")},"Buy"))}(t,n)),l.a.createElement("td",{className:"text-sm",label:"tradingsymbol"},l.a.createElement("div",{className:""},l.a.createElement(i.a,{options:d,defaultValue:t.order[n].tradingsymbol,onChange:function(e){a("values.order.".concat(n,".tradingsymbol"),e)},className:function(e){var t=E[e];return"undefined"==typeof t&&(window.MissingClass=window.MissingClass||{},window.MissingClass[e]=!1),t},search:!0,placeholder:"Search by Symbol"}))),l.a.createElement("td",{className:"text-sm hidden",label:"exchange"},l.a.createElement(s.a,{name:"values.order.".concat(n,".exchange"),as:"select",className:"border text-gray-700 h-10 w-20 bg-white",defaultValue:t.order[n].exchange},l.a.createElement("option",{value:"NSE",title:"Market"},"NSE"),l.a.createElement("option",{value:"BSE",title:"BSE"},"BSE"),l.a.createElement("option",{value:"NFO",title:"NFO"},"NFO"))),l.a.createElement("td",{className:"text-sm",label:"order_type"},l.a.createElement(s.a,{name:"values.order.".concat(n,".order_type"),as:"select",className:"border text-gray-700 h-10 px-2 w-20 bg-white",defaultValue:t.order[n].order_type},l.a.createElement("option",{value:"M",title:"Market"},"M"),l.a.createElement("option",{value:"L",title:"Limit"},"L"),l.a.createElement("option",{value:"SL",title:"Stop Loss",disabled:!0},"SL"),l.a.createElement("option",{value:"SLM",title:"Stop Loss - Limit",disabled:!0},"SL-L"))),l.a.createElement("td",{className:"text-sm",label:"quantity"},l.a.createElement(s.a,{type:"number",className:"p-2 w-20 border",name:"values.order.".concat(n,".quantity"),min:1,defaultValue:t.order[n].quantity})),l.a.createElement("td",{className:"text-sm"},l.a.createElement("button",{type:"button",className:"select-none py-2 px-4 mx-4 rounded-sm text-white bg-indigo-500"},"Send")))})))),l.a.createElement("div",{className:"flex items-center justify-center h-24"},l.a.createElement("button",{type:"submit",id:"send",className:"select-none bg-indigo-800 text-white font-bold rounded-md border shadow-lg px-5 py-2"},"Send")))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(){return l.a.createElement("div",{className:"w-full h-screen bg-gray-100 flex"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);console.log(t)},className:" w-1/4 mx-auto h-64 border-1 px-10 bg-white content-center items-center shadow-md mt-32 mb-32 py-16"},l.a.createElement("h1",{className:"text-2xl text-indigo-700 text-center"}," FastTrade Login"),l.a.createElement("div",{className:"flex flex-row py-4"},l.a.createElement("label",{htmlFor:"email",className:"flex-1 text-xl"},"Mobile No"),l.a.createElement("input",{className:"flex-1 text-md border",type:"phone",id:"phone",name:"phone"})),l.a.createElement("div",{className:"flex"},l.a.createElement("button",{className:"border rounded-md bg-indigo-600 text-white px-4 py-2 m-auto text-xl"},"OTP"))))}var y=a(20),f=a(2);function T(e){var t=e.title,a=e.subtitle,n=e.showHome,r=void 0===n||n;return l.a.createElement("div",{className:"flex bg-gray-100 w-full h-screen m-auto"},l.a.createElement("div",{className:"flex flex-col bg-gray border-2 rounded-lg shadow-lg m-auto w-1/3 p-10 bg-white"},l.a.createElement("h2",{className:"text-xl text-center text-indigo-600"},a),l.a.createElement("h1",{className:"text-4xl text-red-500 text-center"},t),r&&l.a.createElement("div",{className:"mt-10 flex justify-center"},l.a.createElement("a",{href:"/",className:"px-4 py-2 bg-indigo-900 text-white text-center rounded-sm text-md"},"Go Back Home "))))}var v="f35jttucf2u49ld9",S=5;function L(e){var t=new URLSearchParams(Object(f.f)().search),a=!1,n=[];if(t.has("keys")&&t.has("values")&&t.has("time")){var r=t.get("keys").split("|"),o=t.get("values").split("||");(function(e){var t=new Date-new Date(e),a=0;return t>6e4&&(a=Math.floor(t/6e4)),a})(t.get("time"))<Number(S)&&(o.forEach((function(e){var t={};e.split("|").forEach((function(e,a){console.log(a,e,r[a]),t[r[a]]=e})),n.push(function(e){var t=e.action,a=e.tradingsymbol,n=e.exchange,l=e.order_type,r=e.quantity,o=e.price,c=e.validity,s=e.dis_qty,i=e.variety;console.log(arguments),l="L"==(l="M"==l?"MARKET":l)?"LIMIT":l,c="D"==c?"DAY":"IOC";var m=t?"BUY":"SELL";return{variety:i="S"==i?"regular":i,tradingsymbol:decodeURI(a),exchange:n,transaction_type:m,order_type:l,quantity:parseInt(r),readonly:!1,price:o?parseFloat(o):0,disclosed_quantity:s?parseInt(s):0,validity:c}}(t))})),console.log(n),a=!0)}var c=JSON.stringify(n);return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{showHome:!1,subtitle:"Please wait while redirecting to Zerodha ..."}),l.a.createElement("form",{method:"post",id:"basket-form",action:"https://kite.zerodha.com/connect/basket"},l.a.createElement("input",{type:"hidden",name:"api_key",value:v}),l.a.createElement("input",{type:"hidden",id:"basket",name:"data",value:c})),setTimeout((function(){document.getElementById("basket-form").submit()}),1e3)),!a&&l.a.createElement(T,{title:"Invalid Order",subtitle:"Timeout \ud83d\udd50"}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y.a,null,l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/"},l.a.createElement(x,null)),l.a.createElement(f.a,{path:"/zerodha"},l.a.createElement(L,null)),l.a.createElement(f.a,{path:"/upstox"},l.a.createElement(I,null)),l.a.createElement(f.a,{path:"*"},l.a.createElement(T,{title:"Your are lost !",subtitle:"Minilabz Oy"}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.204b2d65.chunk.js.map