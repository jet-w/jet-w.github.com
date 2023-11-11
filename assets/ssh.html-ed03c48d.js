import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as o,b as s,d as n,e as a,f as c}from"./app-29ee2a7b.js";const r={},u=c(`<h2 id="how-to-install-ssh-server-in-ubuntu" tabindex="-1"><a class="header-anchor" href="#how-to-install-ssh-server-in-ubuntu" aria-hidden="true">#</a> How to install SSH server in Ubuntu</h2><p>The procedure to install a ssh server in Ubuntu Linux is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># install the openssh server</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-server

<span class="token comment"># Enable the ssh service by typing:</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">ssh</span>

<span class="token comment"># Enable and start the ssh service immediately</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">ssh</span> <span class="token parameter variable">--now</span>

<span class="token comment"># Start the ssh service by typing:</span>
<span class="token function">sudo</span> systemctl start <span class="token function">ssh</span>

<span class="token comment"># Test it by login into the system using:</span>
<span class="token function">ssh</span> userName@Your-server-name-IP

<span class="token function">ssh</span> user@ip

<span class="token comment"># Verify that ssh service running</span>
<span class="token function">sudo</span> systemctl status <span class="token function">ssh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-enable-ssh-authentication" tabindex="-1"><a class="header-anchor" href="#how-to-enable-ssh-authentication" aria-hidden="true">#</a> How to enable ssh authentication</h2>`,4),d={href:"https://www.ibm.com/docs/en/sia?topic=kbaula-enabling-rsa-key-based-authentication-unix-linux-operating-systems-3",target:"_blank",rel:"noopener noreferrer"},p=s("h2",{id:"references",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),n(" References")],-1),h={href:"https://www.cyberciti.biz/faq/ubuntu-linux-install-openssh-server/",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const e=i("ExternalLinkIcon");return l(),o("div",null,[u,s("p",null,[s("a",d,[n("https://www.ibm.com/docs/en/sia?topic=kbaula-enabling-rsa-key-based-authentication-unix-linux-operating-systems-3"),a(e)])]),p,s("ol",null,[s("li",null,[s("a",h,[n("Ubuntu Linux install OpenSSH server"),a(e)])])])])}const _=t(r,[["render",m],["__file","ssh.html.vue"]]);export{_ as default};
