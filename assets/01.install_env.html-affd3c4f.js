import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c,b as n,d as e,e as a,f as i}from"./app-8263ff01.js";const r={},d={id:"install-norminette",tabindex:"-1"},p=n("a",{class:"header-anchor",href:"#install-norminette","aria-hidden":"true"},"#",-1),m={href:"https://github.com/42School/norminette",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># The plugin only avaliable on vim</span>
<span class="token comment"># If you machine has no vim editor, you&#39;d better install it firstly</span>
<span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">vim</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3-pip

<span class="token comment"># upgrade pip and setuptools</span>
<span class="token function">sudo</span> python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip setuptools

<span class="token comment"># install norminette </span>
<span class="token function">sudo</span> python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> norminette

<span class="token comment"># update norminette</span>
python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> norminette
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={id:"install-header",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#install-header","aria-hidden":"true"},"#",-1),b={href:"https://github.com/42Paris/42header",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/42Paris/42header.git 42header

<span class="token builtin class-name">cd</span> 42header
./set_header.sh

<span class="token comment"># confiture the email and name</span>
<span class="token function">vi</span> ~/.zshrc
<span class="token comment"># USER=you name here</span>
<span class="token comment"># export USER</span>
<span class="token comment"># MAIL=you mail here</span>
<span class="token comment"># export MAIL</span>
<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure-ssh" tabindex="-1"><a class="header-anchor" href="#configure-ssh" aria-hidden="true">#</a> configure ssh</h2><p>If you want use machine A to connect machine B without input password</p><ol><li>create key files pair</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># create key files pair</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>copy public key file(id_rsa.pub) to machine B</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> id_rsa.pub <span class="token operator">&gt;&gt;</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li></li></ol>`,8);function f(_,g){const s=l("ExternalLinkIcon");return o(),c("div",null,[n("h2",d,[p,e(),n("a",m,[e("Install Norminette"),a(s)])]),u,n("h2",v,[h,e(),n("a",b,[e("Install Header"),a(s)])]),k])}const I=t(r,[["render",f],["__file","01.install_env.html.vue"]]);export{I as default};
