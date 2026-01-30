import{d as u}from"./index-BoQGnnIN.js";u({root:document.getElementById("cell-13"),expanded:[],variables:[]},{id:13,body:(n,e,d)=>{let t=0,o;const i=n(e.html`<div class="demo">${t}</div>`);function l(){i.textContent=t,t=++t%10}return o=setInterval(l,1e3),d.then(()=>clearInterval(o)),{count:t,intervalId:o,displayElement:i,updateCounter:l}},inputs:["display","htl","invalidation"],outputs:["count","intervalId","displayElement","updateCounter"],output:void 0,assets:void 0,autodisplay:!1,autoview:void 0,automutable:void 0});u({root:document.getElementById("cell-15"),expanded:[],variables:[]},{id:15,body:function*(){let e=0;for(;;)e>=1&&(e=0),yield e,e+=.02},inputs:[],outputs:void 0,output:"o",assets:void 0,autodisplay:!0,autoview:!1,automutable:!1});u({root:document.getElementById("cell-19"),expanded:[],variables:[]},{id:19,body:(n,e)=>n`<p class="demo" style=opacity:${e}>Blink</p>
<style>
  .demo {
    color:red;
    font-weight:bold;
    font-size:2vw;
  }
</style>`,inputs:["html","o"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:!1,automutable:void 0});u({root:document.getElementById("cell-14"),expanded:[],variables:[]},{id:14,body:function(e){let d=0;const t=e`<button>Count: ${d}`;return t.onclick=()=>{t.textContent=`Count: ${++d}`,t.dispatchEvent(new CustomEvent("input"))},t},inputs:["html"],outputs:void 0,output:"viewof$count",assets:void 0,autodisplay:!0,autoview:!0,automutable:!1});u({root:document.getElementById("cell-9"),expanded:[],variables:[]},{id:9,body:()=>document.getElementById("display").innerText=`This is the innerText of an HTML div element whose id is "display".
This text was put into the element by JavaScript in the following cell.`,inputs:[],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});
