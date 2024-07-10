import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,f as a}from"./app-344d19f2.js";const i={},t=a(`<h2 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h2><h3 id="step-1-run-docker-container" tabindex="-1"><a class="header-anchor" href="#step-1-run-docker-container" aria-hidden="true">#</a> Step 1: run docker container</h3><p><code>docker run -P -itd -v D:\\workspace\\10.Unisa\\HS-System:/home/hs --name da ubuntu</code></p><h3 id="step-2-install-python" tabindex="-1"><a class="header-anchor" href="#step-2-install-python" aria-hidden="true">#</a> Step 2: install python</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## Update repository</span>
<span class="token function">apt</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> software-properties-common
add-apt-repository ppa:deadsnakes/ppa 

<span class="token comment">## install python</span>
<span class="token function">apt</span> <span class="token function">install</span> python3.11
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/python3.11 /usr/bin/python3
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/python3 /usr/bin/python
<span class="token function">curl</span> https://bootstrap.pypa.io/get-pip.py <span class="token parameter variable">-o</span> get-pip.py
python get-pip.py
pip <span class="token function">install</span> poetry



<span class="token comment">## install node</span>
<span class="token comment">#https://nodejs.org/en/download/prebuilt-binaries</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[t];function l(o,r){return s(),e("div",null,p)}const u=n(i,[["render",l],["__file","11.dialog-agent-setup.html.vue"]]);export{u as default};
