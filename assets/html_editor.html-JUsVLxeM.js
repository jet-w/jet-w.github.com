import{_ as f}from"./plugin-vue_export-helper-DlAUqK2U.js";import{j as g,l as r,I as v,w as y,o as p,c as h,d as c,F as b,i as H,t as w,b as S}from"./app-rllTG9_X.js";const E=g({name:"CodeEditorPreview",props:{html_code:{type:String,default:"<h1>Hello, World!</h1>"},css_code:{type:String,default:"h1 { color: blue; }"},js_code:{type:String,default:'console.log("Hello from JS!");'}},setup(n){const e=r([{language:"HTML",code:r(n.html_code),mode:"text/html"},{language:"CSS",code:r(n.css_code),mode:"text/css"}]),a=r([]),o=r(null),l=r([]),i=()=>{const[s,t,u]=e.value.map(_=>_.code),m=`
        <html>
          <head>
            <style>${t}</style>
          </head>
          <body>
            ${s}
            <script>${u}<\/script>
          </body>
        </html>
      `;o.value.srcdoc=m},d=(s,t)=>{e.value[s].code=t,i()};return v(()=>{if(typeof window<"u"){let s=require("codemirror");e.value.forEach((t,u)=>{const m=s.fromTextArea(a.value[u],{mode:t.mode,lineNumbers:!0,theme:"default"});m.on("change",_=>{d(u,_.getValue())}),l.value.push(m)}),i()}}),y(e,i,{deep:!0}),{editors:e,editorRefs:a,previewFrame:o,updateCode:d}}}),T={class:"code-editor-preview"},$={class:"editors"},M=["value","onInput"],k={class:"preview"},C={ref:"previewFrame"};function P(n,e,a,o,l,i){return p(),h("div",T,[c("div",$,[(p(!0),h(b,null,H(n.editors,(d,s)=>(p(),h("div",{key:d.language,class:"editor-container"},[c("h3",null,w(d.language),1),c("textarea",{ref_for:!0,ref:t=>{t&&(n.editorRefs[s]=t)},value:d.code,onInput:t=>n.updateCode(s,t.target.value)},null,40,M)]))),128))]),c("div",k,[e[0]||(e[0]=c("h3",null,"Preview",-1)),c("iframe",C,null,512)])])}const j=f(E,[["render",P],["__scopeId","data-v-fe6db560"],["__file","html_editor.vue"]]),x={__name:"html_editor.html",setup(n,{expose:e}){e();const a=r(`
<html>
  <head></head>
  <body>
    <div>Hello World !!</div>
  </body>
</html>`),o=r(`div { 
  color: blue; 
  background: red
}
`),l={html:a,css:o,get HtmlEditor(){return j},ref:r};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function I(n,e,a,o,l,i){return p(),h("div",null,[S(o.HtmlEditor,{html_code:o.html,css_code:o.css},null,8,["html_code","css_code"])])}const q=f(x,[["render",I],["__file","html_editor.html.vue"]]),B=JSON.parse(`{"path":"/techniques/coding/front-end/css/html_editor.html","title":"HTML Editor","lang":"en-US","frontmatter":{"title":"HTML Editor","date":"2023-11-05T00:00:00.000Z","icon":"circle-dot","author":"Haiyue","category":["make"],"tag":["skills"],"star":false,"sticky":false,"gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://jet-w.github.io/techniques/coding/front-end/css/html_editor.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"HTML Editor"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"skills"}],["meta",{"property":"article:published_time","content":"2023-11-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML Editor\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.2,"words":60},"filePathRelative":"techniques/coding/front-end/css/html_editor.md","localizedDate":"November 5, 2023","excerpt":""}`);export{q as comp,B as data};
