import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-2f7aad97.js";const t={},i=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">import</span> csv

<span class="token comment"># Opening JSON file and loading the data</span>
<span class="token comment"># into the variable data</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;data.json&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> json_file<span class="token punctuation">:</span>
    data <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>json_file<span class="token punctuation">)</span>
 
employee_data <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">&#39;emp_details&#39;</span><span class="token punctuation">]</span>
 
<span class="token comment"># now we will open a file for writing</span>
data_file <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;data_file.csv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span>
 
<span class="token comment"># create the csv writer object</span>
csv_writer <span class="token operator">=</span> csv<span class="token punctuation">.</span>writer<span class="token punctuation">(</span>data_file<span class="token punctuation">)</span>
 
<span class="token comment"># Counter variable used for writing </span>
<span class="token comment"># headers to the CSV file</span>
count <span class="token operator">=</span> <span class="token number">0</span>
 
<span class="token keyword">for</span> emp <span class="token keyword">in</span> employee_data<span class="token punctuation">:</span>
    <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token comment"># Writing headers of CSV file</span>
        header <span class="token operator">=</span> emp<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
        csv_writer<span class="token punctuation">.</span>writerow<span class="token punctuation">(</span>header<span class="token punctuation">)</span>
        count <span class="token operator">+=</span> <span class="token number">1</span>
 
    <span class="token comment"># Writing data of CSV file</span>
    csv_writer<span class="token punctuation">.</span>writerow<span class="token punctuation">(</span>emp<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
data_file<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[i];function o(c,l){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","csv.html.vue"]]);export{d as default};
