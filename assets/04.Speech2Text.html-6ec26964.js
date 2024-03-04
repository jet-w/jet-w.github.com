import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as p,b as n,d as o,e as c,f as i}from"./app-394527c5.js";const l={},u=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSpeechSeq2Seq<span class="token punctuation">,</span> AutoProcessor<span class="token punctuation">,</span> pipeline
<span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset

device <span class="token operator">=</span> <span class="token string">&quot;cuda:0&quot;</span> <span class="token keyword">if</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token string">&quot;cpu&quot;</span>
torch_dtype <span class="token operator">=</span> torch<span class="token punctuation">.</span>float16 <span class="token keyword">if</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> torch<span class="token punctuation">.</span>float32

model_id <span class="token operator">=</span> <span class="token string">&quot;openai/whisper-large-v3&quot;</span>

model <span class="token operator">=</span> AutoModelForSpeechSeq2Seq<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>
    model_id<span class="token punctuation">,</span> torch_dtype<span class="token operator">=</span>torch_dtype<span class="token punctuation">,</span> low_cpu_mem_usage<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> use_safetensors<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>
model<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>

processor <span class="token operator">=</span> AutoProcessor<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>model_id<span class="token punctuation">)</span>

pipe <span class="token operator">=</span> pipeline<span class="token punctuation">(</span>
    <span class="token string">&quot;automatic-speech-recognition&quot;</span><span class="token punctuation">,</span>
    model<span class="token operator">=</span>model<span class="token punctuation">,</span>
    tokenizer<span class="token operator">=</span>processor<span class="token punctuation">.</span>tokenizer<span class="token punctuation">,</span>
    feature_extractor<span class="token operator">=</span>processor<span class="token punctuation">.</span>feature_extractor<span class="token punctuation">,</span>
    max_new_tokens<span class="token operator">=</span><span class="token number">128</span><span class="token punctuation">,</span>
    chunk_length_s<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">,</span>
    batch_size<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">,</span>
    return_timestamps<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    torch_dtype<span class="token operator">=</span>torch_dtype<span class="token punctuation">,</span>
    device<span class="token operator">=</span>device<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataset <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;distil-whisper/librispeech_long&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;clean&quot;</span><span class="token punctuation">,</span> split<span class="token operator">=</span><span class="token string">&quot;validation&quot;</span><span class="token punctuation">)</span>
sample <span class="token operator">=</span> dataset<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">]</span>
pipe<span class="token punctuation">(</span>sample<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


result <span class="token operator">=</span> pipe<span class="token punctuation">(</span><span class="token string">&quot;output1.mp3&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,3),r={href:"https://huggingface.co/openai/whisper-large-v3",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[o("openai/whisper-large-v3"),c(s)])])])])}const _=a(l,[["render",d],["__file","04.Speech2Text.html.vue"]]);export{_ as default};
