import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-1b1e072e.js";const t={},i=e(`<h2 id="classification" tabindex="-1"><a class="header-anchor" href="#classification" aria-hidden="true">#</a> Classification</h2><p>拦截器一共四类</p><ol><li>请求成功拦截</li><li>请求失败拦截</li><li>响应成功拦截</li><li>响应失败拦截</li></ol><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//请求拦截的作用</span>
    <span class="token comment">//1. 修改config中的一些配置信息</span>
    <span class="token comment">//2. 发送请求时在界面中显示图标</span>
    <span class="token comment">//3. 某些网络请求（如登录），需添加特殊信息</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[i];function p(o,l){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","04.Interceptor.html.vue"]]);export{d as default};
