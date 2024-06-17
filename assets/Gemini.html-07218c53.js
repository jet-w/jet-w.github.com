import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as p,b as n,d as o,e as i,f as c}from"./app-fe687785.js";const l={},u={href:"https://colab.research.google.com/drive/1cqvQ_0mXF8gQbxzChhzXjqCPfpjhmkZC?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r=c(`<h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> Text</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pathlib
<span class="token keyword">import</span> textwrap
<span class="token keyword">import</span> google<span class="token punctuation">.</span>generativeai <span class="token keyword">as</span> genai

<span class="token keyword">from</span> IPython<span class="token punctuation">.</span>display <span class="token keyword">import</span> display
<span class="token keyword">from</span> IPython<span class="token punctuation">.</span>display <span class="token keyword">import</span> Markdown

<span class="token comment"># Used to securely store your API key</span>
<span class="token keyword">from</span> google<span class="token punctuation">.</span>colab <span class="token keyword">import</span> userdata



<span class="token keyword">def</span> <span class="token function">to_markdown</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
  text <span class="token operator">=</span> text<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;•&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;  *&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> Markdown<span class="token punctuation">(</span>textwrap<span class="token punctuation">.</span>indent<span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token string">&#39;&gt; &#39;</span><span class="token punctuation">,</span> predicate<span class="token operator">=</span><span class="token keyword">lambda</span> <span class="token keyword">_</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Or use \`os.getenv(&#39;GOOGLE_API_KEY&#39;)\` to fetch an environment variable.</span>
GOOGLE_API_KEY<span class="token operator">=</span>userdata<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;PaLM_Key&#39;</span><span class="token punctuation">)</span>
genai<span class="token punctuation">.</span>configure<span class="token punctuation">(</span>api_key<span class="token operator">=</span>GOOGLE_API_KEY<span class="token punctuation">)</span>


<span class="token keyword">for</span> m <span class="token keyword">in</span> genai<span class="token punctuation">.</span>list_models<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> <span class="token string">&#39;generateContent&#39;</span> <span class="token keyword">in</span> m<span class="token punctuation">.</span>supported_generation_methods<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>name<span class="token punctuation">)</span>


model <span class="token operator">=</span> genai<span class="token punctuation">.</span>GenerativeModel<span class="token punctuation">(</span><span class="token string">&#39;gemini-pro&#39;</span><span class="token punctuation">)</span>
response <span class="token operator">=</span> model<span class="token punctuation">.</span>generate_content<span class="token punctuation">(</span><span class="token string">&quot;What is the meaning of life?&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> Image</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image
<span class="token keyword">import</span> io
<span class="token keyword">import</span> requests <span class="token keyword">as</span> req


img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>io<span class="token punctuation">.</span>BytesIO<span class="token punctuation">(</span>req<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://ai.google.dev/static/tutorials/python_quickstart_files/output_CjnS0vNTsVis_0.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>

model <span class="token operator">=</span> genai<span class="token punctuation">.</span>GenerativeModel<span class="token punctuation">(</span><span class="token string">&#39;gemini-pro-vision&#39;</span><span class="token punctuation">)</span>
response <span class="token operator">=</span> model<span class="token punctuation">.</span>generate_content<span class="token punctuation">(</span>img<span class="token punctuation">)</span>

to_markdown<span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>


response <span class="token operator">=</span> model<span class="token punctuation">.</span>generate_content<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;Write a short, engaging blog post based on this picture. It should include a description of the meal in the photo and talk about my journey meal prepping.&quot;</span><span class="token punctuation">,</span> img<span class="token punctuation">]</span><span class="token punctuation">,</span> stream<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
response<span class="token punctuation">.</span>resolve<span class="token punctuation">(</span><span class="token punctuation">)</span>

to_markdown<span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chat-conversation" tabindex="-1"><a class="header-anchor" href="#chat-conversation" aria-hidden="true">#</a> Chat conversation</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> genai<span class="token punctuation">.</span>GenerativeModel<span class="token punctuation">(</span><span class="token string">&#39;gemini-pro&#39;</span><span class="token punctuation">)</span>
chat <span class="token operator">=</span> model<span class="token punctuation">.</span>start_chat<span class="token punctuation">(</span>history<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
chat

response <span class="token operator">=</span> chat<span class="token punctuation">.</span>send_message<span class="token punctuation">(</span><span class="token string">&quot;In one sentence, explain how a computer works to a young child.&quot;</span><span class="token punctuation">)</span>
to_markdown<span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

chat<span class="token punctuation">.</span>history


response <span class="token operator">=</span> chat<span class="token punctuation">.</span>send_message<span class="token punctuation">(</span><span class="token string">&quot;Okay, how about a more detailed explanation to a high schooler?&quot;</span><span class="token punctuation">,</span> stream<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> chunk <span class="token keyword">in</span> response<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>chunk<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token operator">*</span><span class="token number">80</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> message <span class="token keyword">in</span> chat<span class="token punctuation">.</span>history<span class="token punctuation">:</span>
  display<span class="token punctuation">(</span>to_markdown<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;**</span><span class="token interpolation"><span class="token punctuation">{</span>message<span class="token punctuation">.</span>role<span class="token punctuation">}</span></span><span class="token string">**: </span><span class="token interpolation"><span class="token punctuation">{</span>message<span class="token punctuation">.</span>parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

model<span class="token punctuation">.</span>count_tokens<span class="token punctuation">(</span><span class="token string">&quot;What is the meaning of life?&quot;</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>count_tokens<span class="token punctuation">(</span>chat<span class="token punctuation">.</span>history<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function d(k,v){const s=t("ExternalLinkIcon");return e(),p("div",null,[n("p",null,[n("a",u,[o("Extract attributes"),i(s)])]),r])}const g=a(l,[["render",d],["__file","Gemini.html.vue"]]);export{g as default};
