import{_ as v}from"./plugin-vue_export-helper-c27b6911.js";import{i as f,j as r,k as g,l as y,o as _,c as m,b as l,F as b,m as w,t as S,p as $,h as C,e as I,u as k}from"./app-c78d4e1a.js";const H=f({name:"CodeEditorPreview",props:{html_code:{type:String,default:"<h1>Hello, World!</h1>"},css_code:{type:String,default:"h1 { color: blue; }"},js_code:{type:String,default:'console.log("Hello from JS!");'}},setup(e){const o=r([{language:"HTML",code:r(e.html_code),mode:"text/html"},{language:"CSS",code:r(e.css_code),mode:"text/css"}]),a=r([]),c=r(null),h=r([]),n=()=>{const[s,t,i]=o.value.map(p=>p.code),u=`
        <html>
          <head>
            <style>${t}</style>
          </head>
          <body>
            ${s}
            <script>${i}<\/script>
          </body>
        </html>
      `;c.value.srcdoc=u},d=(s,t)=>{o.value[s].code=t,n()};return g(()=>{if(typeof window<"u"){let s=require("codemirror");o.value.forEach((t,i)=>{const u=s.fromTextArea(a.value[i],{mode:t.mode,lineNumbers:!0,theme:"default"});u.on("change",p=>{d(i,p.getValue())}),h.value.push(u)}),n()}}),y(o,n,{deep:!0}),{editors:o,editorRefs:a,previewFrame:c,updateCode:d}}}),x=e=>($("data-v-3eb22516"),e=e(),C(),e),E={class:"code-editor-preview"},F={class:"editors"},M=["value","onInput"],j={class:"preview"},B=x(()=>l("h3",null,"Preview",-1)),N={ref:"previewFrame"};function P(e,o,a,c,h,n){return _(),m("div",E,[l("div",F,[(_(!0),m(b,null,w(e.editors,(d,s)=>(_(),m("div",{key:d.language,class:"editor-container"},[l("h3",null,S(d.language),1),l("textarea",{ref_for:!0,ref:t=>{t&&(e.editorRefs[s]=t)},value:d.code,onInput:t=>e.updateCode(s,t.target.value)},null,40,M)]))),128))]),l("div",j,[B,l("iframe",N,null,512)])])}const V=v(H,[["render",P],["__scopeId","data-v-3eb22516"],["__file","html_editor.vue"]]),L={__name:"html_editor.html",setup(e){const o=r(`
<html>
  <head></head>
  <body>
    <div>Hello World !!</div>
  </body>
</html>`),a=r(`div { 
  color: blue; 
  background: red
}
`);return(c,h)=>(_(),m("div",null,[I(k(V),{html_code:o.value,css_code:a.value},null,8,["html_code","css_code"])]))}},W=v(L,[["__file","html_editor.html.vue"]]);export{W as default};
