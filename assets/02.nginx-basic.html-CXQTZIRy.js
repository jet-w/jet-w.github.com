import{_ as r,a as h,b as p}from"./Nginx_Http-PlZy0Gfw.js";import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,a as k,b as o,f as a,d as i,h as s,r as g,o as u}from"./app-DeGueop7.js";const v={};function m(A,e){const t=g("Tabs");return u(),c("div",null,[e[4]||(e[4]=k('<h2 id="folder-structure" tabindex="-1"><a class="header-anchor" href="#folder-structure"><span>Folder Structure</span></a></h2><figure><img src="'+r+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><h2 id="how-to-startup" tabindex="-1"><a class="header-anchor" href="#how-to-startup"><span>How to startup</span></a></h2><figure><img src="'+h+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><h2 id="nginx-http" tabindex="-1"><a class="header-anchor" href="#nginx-http"><span>Nginx &amp; Http</span></a></h2><figure><img src="'+p+`" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><h2 id="virtual-machine" tabindex="-1"><a class="header-anchor" href="#virtual-machine"><span>Virtual Machine</span></a></h2><p>server_name to match the domain name.<br><code>server_name</code>: the domain name of a server<br> Matching rules: (Please be careful of the order for domain matching)</p><ol><li>Name matching <ol><li><code>server_name www.why.com v.why.com;</code></li></ol></li><li>Wildcard matching <ol><li><code>server_name *.why.com;</code></li><li><code>server_name www.why.*;</code></li></ol></li><li>Regex Matching:<br><code>server_name ~^[0-9]+\\.why\\.com$;</code></li></ol><h2 id="reverse-proxy" tabindex="-1"><a class="header-anchor" href="#reverse-proxy"><span>Reverse Proxy</span></a></h2><p>Tunnel Model<br> LVS(DR) Model</p><p>using <code>proxy_pass</code> to config reverse proxy.<br><code>proxy_pass http://www.why.com;</code></p><h3 id="config-a-group-of-server" tabindex="-1"><a class="header-anchor" href="#config-a-group-of-server"><span>Config A group of server</span></a></h3><ol><li>Using polling<br> drawbacks:</li><li>can not keep session</li></ol><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">upstream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> httpds {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 192.168.1.101:80;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 192.168.1.102:80;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server_name </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">*.why.com;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">http://httpds;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Using weighting</li></ol><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">upstream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> httpds {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 192.168.1.101:80 </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">weight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  server 192.168.1.102:80 </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">weight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Using <code>down</code><br> sleep the machine</li></ol><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">upstream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> httpds {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 192.168.1.101:80 </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">weight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> done;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 192.168.1.102:80 </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">weight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Using <code>backup</code><br> the backup machine can be used when no others are available.</li></ol><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">upstream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> httpds {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 192.168.1.101:80 </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">weight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  server 192.168.1.102:80 </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">weight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> backup;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Using <code>ip_hash</code>: according to the ip of client to redirect requests to the same server</li><li>Using <code>least_conn</code>: the least connnection with server</li><li>Using <code>fair</code>: redirect requests based on the response time of back server. <ol><li>For accessing resource locate on different server.</li></ol></li><li>Using <code>url_hash</code>: According to the url to redirect requests.</li></ol><h2 id="separation-of-static-and-dynamic" tabindex="-1"><a class="header-anchor" href="#separation-of-static-and-dynamic"><span>Separation of static and dynamic</span></a></h2><p>Only suits for small website</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> why.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  location / {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    proxy_pass http://127.0.0.1:8080;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ~*/(js|img|css){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">html;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="urlrewrite" tabindex="-1"><a class="header-anchor" href="#urlrewrite"><span>URLRewrite</span></a></h2><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> why.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  location / {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    rewrite </span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">^(\\d+).html$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> index.jsp?pageNum=$</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> break;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    rewrite</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;"> ^([0-9]+).html$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> index.jsp?pageNum=$</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">http://127.0.0.1:8080;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>last: when match with the current pattern, will continue to find new location URI<br> break: when matching with the current pattern, will stop<br> redirect: # return 302 redirect, the browser will display the redirect URL<br> permanent: # return 301 permanent redirect, the browser will display the redirect URL</p><p><em>Difference between <code>redirect</code> and <code>permanent</code></em>: It&#39;s the same for users, but different for web crawler.</p></div><h2 id="how-to-make-a-high-availability" tabindex="-1"><a class="header-anchor" href="#how-to-make-a-high-availability"><span>How to make a high availability</span></a></h2><p>Using <code>[keepalived](https://www.keepalived.org/download.html)</code> to drift the virtual IP address.</p>`,30)),o(t,{id:"163",data:[{id:"Master Node"},{id:"Backup Node"}]},{title0:a(({value:n,isActive:l})=>e[0]||(e[0]=[s("Master Node")])),title1:a(({value:n,isActive:l})=>e[1]||(e[1]=[s("Backup Node")])),tab0:a(({value:n,isActive:l})=>e[2]||(e[2]=[i("div",{class:"language-/etc/keepalived/keepalived.conf line-numbers-mode","data-highlighter":"shiki","data-ext":"/etc/keepalived/keepalived.conf","data-title":"/etc/keepalived/keepalived.conf",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",null,"!Configuration File for keepalived")]),s(`
`),i("span",{class:"line"},[i("span")]),s(`
`),i("span",{class:"line"},[i("span",null,"global_defs {")]),s(`
`),i("span",{class:"line"},[i("span",null,"  router_id lb111")]),s(`
`),i("span",{class:"line"},[i("span",null,"}")]),s(`
`),i("span",{class:"line"},[i("span")]),s(`
`),i("span",{class:"line"},[i("span",null,"vrrp_instance why{")]),s(`
`),i("span",{class:"line"},[i("span",null,"  state MASTER")]),s(`
`),i("span",{class:"line"},[i("span",null,"  interface eth0")]),s(`
`),i("span",{class:"line"},[i("span",null,"  virtual_router_id 51")]),s(`
`),i("span",{class:"line"},[i("span",null,"  priority 100")]),s(`
`),i("span",{class:"line"},[i("span",null,"  advert_int 1")]),s(`
`),i("span",{class:"line"},[i("span",null,"  authentication {")]),s(`
`),i("span",{class:"line"},[i("span",null,"    auth_type PASS")]),s(`
`),i("span",{class:"line"},[i("span",null,"    auth_pass 1111")]),s(`
`),i("span",{class:"line"},[i("span",null,"  }")]),s(`
`),i("span",{class:"line"},[i("span",null,"  virtual_ipaddress {")]),s(`
`),i("span",{class:"line"},[i("span",null,"    192.168.1.200")]),s(`
`),i("span",{class:"line"},[i("span",null,"  }")]),s(`
`),i("span",{class:"line"},[i("span",null,"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:n,isActive:l})=>e[3]||(e[3]=[i("div",{class:"language-/etc/keepalived/keepalived.conf line-numbers-mode","data-highlighter":"shiki","data-ext":"/etc/keepalived/keepalived.conf","data-title":"/etc/keepalived/keepalived.conf",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",null,"!Configuration File for keepalived")]),s(`
`),i("span",{class:"line"},[i("span")]),s(`
`),i("span",{class:"line"},[i("span",null,"global_defs {")]),s(`
`),i("span",{class:"line"},[i("span",null,"  router_id lb110")]),s(`
`),i("span",{class:"line"},[i("span",null,"}")]),s(`
`),i("span",{class:"line"},[i("span")]),s(`
`),i("span",{class:"line"},[i("span",null,"vrrp_instance why{")]),s(`
`),i("span",{class:"line"},[i("span",null,"  state BACKUP")]),s(`
`),i("span",{class:"line"},[i("span",null,"  interface eth0")]),s(`
`),i("span",{class:"line"},[i("span",null,"  virtual_router_id 51")]),s(`
`),i("span",{class:"line"},[i("span",null,"  priority 50")]),s(`
`),i("span",{class:"line"},[i("span",null,"  advert_int 1")]),s(`
`),i("span",{class:"line"},[i("span",null,"  authentication {")]),s(`
`),i("span",{class:"line"},[i("span",null,"    auth_type PASS")]),s(`
`),i("span",{class:"line"},[i("span",null,"    auth_pass 1111")]),s(`
`),i("span",{class:"line"},[i("span",null,"  }")]),s(`
`),i("span",{class:"line"},[i("span",null,"  virtual_ipaddress {")]),s(`
`),i("span",{class:"line"},[i("span",null,"    192.168.1.200")]),s(`
`),i("span",{class:"line"},[i("span",null,"  }")]),s(`
`),i("span",{class:"line"},[i("span",null,"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),e[5]||(e[5]=i("p",null,[s("The "),i("code",null,"keepalived"),s(" detect whether the instace is alived to work.")],-1))])}const f=d(v,[["render",m],["__file","02.nginx-basic.html.vue"]]),x=JSON.parse(`{"path":"/techniques/Tools/nginx/02.nginx-basic.html","title":"02. Nginx Basic Usuage","lang":"en-US","frontmatter":{"title":"02. Nginx Basic Usuage","icon":"circle-dot","date":"2024-10-12T00:00:00.000Z","category":["nginx"],"tag":["proxy"],"star":false,"sticky":false,"description":"Folder Structure Alt textAlt text How to startup Alt textAlt text Nginx & Http Alt textAlt text Virtual Machine server_name to match the domain name. server_name: the domain nam...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://jet-w.github.io/techniques/Tools/nginx/02.nginx-basic.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"02. Nginx Basic Usuage"}],["meta",{"property":"og:description","content":"Folder Structure Alt textAlt text How to startup Alt textAlt text Nginx & Http Alt textAlt text Virtual Machine server_name to match the domain name. server_name: the domain nam..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"proxy"}],["meta",{"property":"article:published_time","content":"2024-10-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02. Nginx Basic Usuage\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\",\\"url\\":\\"https://jet-w.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"Folder Structure","slug":"folder-structure","link":"#folder-structure","children":[]},{"level":2,"title":"How to startup","slug":"how-to-startup","link":"#how-to-startup","children":[]},{"level":2,"title":"Nginx & Http","slug":"nginx-http","link":"#nginx-http","children":[]},{"level":2,"title":"Virtual Machine","slug":"virtual-machine","link":"#virtual-machine","children":[]},{"level":2,"title":"Reverse Proxy","slug":"reverse-proxy","link":"#reverse-proxy","children":[{"level":3,"title":"Config A group of server","slug":"config-a-group-of-server","link":"#config-a-group-of-server","children":[]}]},{"level":2,"title":"Separation of static and dynamic","slug":"separation-of-static-and-dynamic","link":"#separation-of-static-and-dynamic","children":[]},{"level":2,"title":"URLRewrite","slug":"urlrewrite","link":"#urlrewrite","children":[]},{"level":2,"title":"How to make a high availability","slug":"how-to-make-a-high-availability","link":"#how-to-make-a-high-availability","children":[]}],"readingTime":{"minutes":1.55,"words":464},"filePathRelative":"techniques/Tools/nginx/02.nginx-basic.md","localizedDate":"October 12, 2024","excerpt":"<h2>Folder Structure</h2>\\n<figure><figcaption>Alt text</figcaption></figure>\\n<h2>How to startup</h2>\\n<figure><figcaption>Alt text</figcaption></figure>\\n<h2>Nginx &amp; Http</h2>\\n<figure><figcaption>Alt text</figcaption></figure>\\n<h2>Virtual Machine</h2>\\n<p>server_name to match the domain name.<br>\\n<code>server_name</code>: the domain name of a server<br>\\nMatching rules: (Please be careful of the order for domain matching)</p>","autoDesc":true}`);export{f as comp,x as data};
