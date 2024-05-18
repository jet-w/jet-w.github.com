import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as n,c as o,b as s,d as a,e as r,f as e}from"./app-214704b2.js";const h="/data/unisa/customer_analytic/w7/w7-f1.png",c="/data/unisa/customer_analytic/w7/VaR.png",p={},m=e('<h2 id="risk-and-uncertainty" tabindex="-1"><a class="header-anchor" href="#risk-and-uncertainty" aria-hidden="true">#</a> Risk and Uncertainty</h2><p>We make decisions every day. However, possible outcomes of these decisions are not always clear. We say we are making decisions in situations under risk or uncertainty.</p><ul><li><strong>Risk</strong> – an actual outcome is unknown but we can assign probabilities to each possible scenario. <ul><li>Expected value, Expected utility theory</li><li>Prospect theory [Reference point]</li></ul></li><li><strong>Uncertainty</strong> – we can not assign probabilities to each outcome. <ul><li>Game theory [e.g. Prisoner’s dilemma]<br><img src="'+h+'" alt="Alt text" height="200" loading="lazy"></li></ul></li></ul><h3 id="risk" tabindex="-1"><a class="header-anchor" href="#risk" aria-hidden="true">#</a> Risk</h3><ul><li>Credit: <ul><li>Customer has been given credit and may default. This could be an actual loan or credit card account or credit in terms of time to pay.</li></ul></li><li>Investments.</li><li>Fraud: insurance, warranty, deception.</li><li>System failure: partial or total.</li><li>Hostile attack causing damage.</li></ul><div class="hint-container note"><p class="hint-container-title">Note</p><blockquote><p><span style="color:orange;font-weight:bold;">Risk</span> is a measurable <span style="color:orange;font-weight:bold;">uncertainty</span>.<br><span style="color:orange;font-weight:bold;">Uncertainty</span> is an unmeasurable <span style="color:orange;font-weight:bold;">risk</span>.</p></blockquote><blockquote><p>A <span style="color:orange;font-weight:bold;">hazard</span> is something that has the <span style="color:orange;font-weight:bold;">potential</span> to harm you. risk is the <span style="color:orange;font-weight:bold;">likelihood</span> of a hazard causing harm.</p></blockquote></div><h2 id="risk-management" tabindex="-1"><a class="header-anchor" href="#risk-management" aria-hidden="true">#</a> Risk management</h2><p>In most commercial situations it is desirable to minimise risk by:</p><ul><li>‘Wise’ choices between alternative customers, investments, systems - <span style="color:orange;font-weight:bold;">diversification</span>.</li><li><span style="color:orange;font-weight:bold;">Financial precautions</span>, like loan insurance – [<span style="color:orange;font-weight:bold;">moral hazard</span>]</li><li><span style="color:orange;font-weight:bold;">Technical precautions</span>: system protection or backup.</li><li>Investigation to <span style="color:orange;font-weight:bold;">detect potential fraud or attacks</span>.</li></ul><h2 id="risk-measure" tabindex="-1"><a class="header-anchor" href="#risk-measure" aria-hidden="true">#</a> Risk measure</h2><ul><li>The return on investment can be represented by a <span style="color:orange;font-weight:bold;">probability distribution</span>.</li><li>This distribution is derived from <span style="color:orange;font-weight:bold;">historical data</span>, tempered by contemporary opinions of ‘experts’ with domain knowledge.</li><li>The <span style="color:orange;font-weight:bold;">expected value</span>, or <span style="color:orange;font-weight:bold;">mean</span>, of the <span style="color:orange;font-weight:bold;">distribution</span> is an obvious measure of proﬁtability and lack of risk.</li><li>But the <span style="color:orange;font-weight:bold;">expected value tells us nothing</span> about the <span style="color:orange;font-weight:bold;">spread of the consequences</span>. For example, distribution may be bimodal, with a decent mean but high probability of signiﬁcant loss.</li></ul><h3 id="volatility" tabindex="-1"><a class="header-anchor" href="#volatility" aria-hidden="true">#</a> Volatility</h3><ul><li>Volatility is a measure of the dispersion of returns for a given security.</li><li><span style="color:orange;font-weight:bold;">The higher the volatility, the riskier the security</span>.</li><li>Typically, volatility are measured by using the <span style="color:orange;font-weight:bold;">standard deviation</span> or <span style="color:orange;font-weight:bold;">variance</span> between returns from that security.</li></ul><h3 id="worst-outcomes" tabindex="-1"><a class="header-anchor" href="#worst-outcomes" aria-hidden="true">#</a> Worst outcomes</h3><ul><li>Decision makers are often interested in the probabilities of the worst things happening. (1% chance of getting nothing)</li><li>Information in the tails of the distribution is lost when we consider the expected value.</li></ul><h3 id="value-at-risk-var" tabindex="-1"><a class="header-anchor" href="#value-at-risk-var" aria-hidden="true">#</a> Value at Risk (VaR)</h3><div style="display:flex;"><div style="flex:1;"><ul><li>Timeframe</li><li>Confidence level</li><li>Loss amount</li></ul><p>The Value at Risk corresponding to 𝛼 is the largest value of 𝑥 for which the probability of a loss of at least 𝑥 is (at least) 𝛼.</p></div><div style="flex:2;"><figure><img src="'+c+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure></div></div><h3 id="var-estimation" tabindex="-1"><a class="header-anchor" href="#var-estimation" aria-hidden="true">#</a> VaR Estimation</h3>',18),d=s("ul",null,[s("li",null,[s("strong",null,"Historical method"),a(" – analyse historical data and find possible loss over the given time period")]),s("li",null,[s("strong",null,"Variance method"),a(" – fit a distribution of profits/losses, e.g. "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"N"),s("mo",{stretchy:"false"},"("),s("mi",null,"μ"),s("mo",{separator:"true"},","),s("msup",null,[s("mi",null,"σ"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"N(\\mu, \\sigma^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"μ"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a(", then find possible loss")]),s("li",null,[s("strong",null,"Monte Carlo (or bootstrapping) method"),a(" – build a model, run it to generate synthetic historical data and use statistical analysis to determine worth case loss.")])],-1),g=e('<h3 id="problems-with-var" tabindex="-1"><a class="header-anchor" href="#problems-with-var" aria-hidden="true">#</a> Problems with VaR</h3><ul><li><span style="color:orange;font-weight:bold;">Value at Risk</span> can be <span style="color:orange;font-weight:bold;">misleading</span>: false sense of security.</li><li><span style="color:orange;font-weight:bold;">VaR does not measure worst case loss</span> – it says there is 1% probability that loss will be greater than VaR value but it does not say how big that loss can be.</li><li>Value at Risk gets <span style="color:orange;font-weight:bold;">difficult to calculate</span> with <span style="color:orange;font-weight:bold;">large portfolios</span></li><li><span style="color:orange;font-weight:bold;">Value at Risk is not additive</span>. VaR for two assets does not equal the sum of individual VaRs.</li><li>The resulting VaR is only <span style="color:orange;font-weight:bold;">as good as</span> the <span style="color:orange;font-weight:bold;">inputs and assumptions</span>.</li><li><span style="color:orange;font-weight:bold;">Different Value</span> at Risk methods lead to <span style="color:orange;font-weight:bold;">different results</span>.</li></ul><h3 id="expected-tail-loss-etl" tabindex="-1"><a class="header-anchor" href="#expected-tail-loss-etl" aria-hidden="true">#</a> Expected Tail Loss (ETL)</h3>',3),u=s("ul",null,[s("li",null,"ETL has many other names, including Expected Shortfall, Conditional Value at Risk (CVaR) and Average Value at Risk."),s("li",null,"Uses a threshold probability 𝛼. Given that the probability of loss is less than 𝛼, what is the expected loss?"),s("li",null,[a("OR, given that the loss is at least "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"V"),s("mi",null,"a"),s("msub",null,[s("mi",null,"R"),s("mi",null,"α")])]),s("annotation",{encoding:"application/x-tex"},"VaR_\\alpha")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord mathnormal"},"Va"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0077em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a(", what is the expected loss?"),s("br"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"E"),s("mi",null,"T"),s("msub",null,[s("mi",null,"L"),s("mi",null,"α")]),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mi",null,"α")]),s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("msubsup",null,[s("mo",null,"∫"),s("mn",null,"0"),s("mi",null,"α")]),s("mi",null,"V"),s("mi",null,"a"),s("msub",null,[s("mi",null,"R"),s("mi",null,"β")]),s("mi",null,"d"),s("mi",null,"β")])]),s("annotation",{encoding:"application/x-tex"},"ETL_\\alpha = \\frac{1}{\\alpha}\\displaystyle\\int_{0}^{\\alpha}VaR_{\\beta}d\\beta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"ET"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"L"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3262em","vertical-align":"-0.9119em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol large-op",style:{"margin-right":"0.44445em",position:"relative",top:"-0.0011em"}},"∫"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4143em"}},[s("span",{style:{top:"-1.7881em","margin-left":"-0.4445em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{style:{top:"-3.8129em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.0037em"}},"α")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9119em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"Va"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0077em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05278em"}},"β")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"β")])])])]),s("li",null,"Use a sum for a discrete distributions")],-1),y=e('<h3 id="problems-with-var-and-etl" tabindex="-1"><a class="header-anchor" href="#problems-with-var-and-etl" aria-hidden="true">#</a> Problems with VaR and ETL</h3><ul><li>It can be <span style="color:orange;font-weight:bold;">very diﬃcult</span> (some say <span style="color:orange;font-weight:bold;">impossible</span>) to <span style="color:orange;font-weight:bold;">estimate the probability</span> of an <span style="color:orange;font-weight:bold;">extremely rare event</span>.</li><li><span style="color:orange;font-weight:bold;">‘Possible’ rare events</span> may have <span style="color:orange;font-weight:bold;">never happened in the past</span>.</li><li><span style="color:orange;font-weight:bold;">Unanticipated rare events</span> will <span style="color:orange;font-weight:bold;">not be accounted for</span>.</li></ul><h2 id="ltcm-hedge-fund" tabindex="-1"><a class="header-anchor" href="#ltcm-hedge-fund" aria-hidden="true">#</a> LTCM hedge fund</h2><ul><li>Long Term Capital Management (LTCM) hedge fund was formed in 1993 and was founded by renowned Salomon Brothers bond trader John Meriwether along with Nobel-prize winning Myron Scholes of the Black-Scholes model and Robert Merton</li><li>Started with more than $1 billion of capital</li><li>Arbitrage strategy with risk level close to zero</li><li>By 1998, LTCM had approximately $5 billion in assets, controlled over $100 billion and had trading positions worth over $1 trillion</li></ul><h2 id="can-risk-be-measured" tabindex="-1"><a class="header-anchor" href="#can-risk-be-measured" aria-hidden="true">#</a> Can risk be measured?</h2><ul><li><p>Risk:</p><ul><li>In some applications, there is a lot of data available and the extent of risk is limited, e.g. loans, credit cards etc.</li><li>Each customer can be assessed (e.g. credit scoring).</li></ul></li><li><p>Uncertainty:</p><ul><li>Don’t try to predict a Black Swan event</li><li>Be prepared to a Black Swan event and its consequences</li></ul></li></ul><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',7),b={href:"https://lo.unisa.edu.au/course/view.php?id=31025&sectionid=788071",target:"_blank",rel:"noopener noreferrer"};function f(v,w){const t=i("ExternalLinkIcon");return n(),o("div",null,[m,d,g,u,y,s("p",null,[s("a",b,[a("Tim's slides of Week 5"),r(t)])])])}const _=l(p,[["render",f],["__file","Week7.html.vue"]]);export{_ as default};
