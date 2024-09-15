const n=JSON.parse(`{"key":"v-34b5a643","path":"/techniques/coding/front-end/vue/02.instructor.html","title":"02. Directive","lang":"en-US","frontmatter":{"title":"02. Directive","date":"2023-11-11T00:00:00.000Z","icon":"circle-dot","author":"Haiyue","category":["VUE"],"tag":["skills"],"star":false,"sticky":false,"description":"Mustache &lt;div id=\\"app\\"&gt; \\t\\t&lt;h2 v-once&gt;{{message}}&lt;/h2&gt; &lt;/div&gt; &lt;script src=\\"https://unpkg.com/vue@3/dist/vue.global.js\\"&gt;&lt;/script&gt; &lt;script&gt; const app = Vue.createApp({ data() { return { message: \\"Hello World!\\" } } }) app.mount('#app') &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/coding/front-end/vue/02.instructor.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"02. Directive"}],["meta",{"property":"og:description","content":"Mustache &lt;div id=\\"app\\"&gt; \\t\\t&lt;h2 v-once&gt;{{message}}&lt;/h2&gt; &lt;/div&gt; &lt;script src=\\"https://unpkg.com/vue@3/dist/vue.global.js\\"&gt;&lt;/script&gt; &lt;script&gt; const app = Vue.createApp({ data() { return { message: \\"Hello World!\\" } } }) app.mount('#app') &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-15T22:50:45.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"skills"}],["meta",{"property":"article:published_time","content":"2023-11-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T22:50:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02. Directive\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-15T22:50:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Mustache","slug":"mustache","link":"#mustache","children":[]},{"level":2,"title":"Most Used Directives","slug":"most-used-directives","link":"#most-used-directives","children":[]},{"level":2,"title":"v-bind","slug":"v-bind","link":"#v-bind","children":[]},{"level":2,"title":"v-on","slug":"v-on","link":"#v-on","children":[{"level":3,"title":"Event Handling","slug":"event-handling","link":"#event-handling","children":[]}]},{"level":2,"title":"model","slug":"model","link":"#model","children":[]}],"git":{"createdTime":1700008188000,"updatedTime":1726440645000,"contributors":[{"name":"Haiyue","email":"nutterair1989@gmail.com","commits":3}]},"readingTime":{"minutes":7.88,"words":2364},"filePathRelative":"techniques/coding/front-end/vue/02.instructor.md","localizedDate":"November 11, 2023","excerpt":"<h2> Mustache</h2>\\n\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>app<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>h2</span> <span class=\\"token attr-name\\">v-once</span><span class=\\"token punctuation\\">&gt;</span></span>{{message}}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>h2</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>https://unpkg.com/vue@3/dist/vue.global.js<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n  <span class=\\"token keyword\\">const</span> app <span class=\\"token operator\\">=</span> Vue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createApp</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">data</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">message</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Hello World!\\"</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n  app<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">mount</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'#app'</span><span class=\\"token punctuation\\">)</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
