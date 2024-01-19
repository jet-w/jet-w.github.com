import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c,b as e,d as s,e as i,w as a,f as t}from"./app-4805e6f1.js";const h="/data/HS/data/dataset.png",f="/data/HS/data/distribution_final.png",p="/data/HS/data/distribution_first.png",u="/data/HS/data/distribution_second.png",g="/data/HS/data/diff_1st.png",m="/data/HS/data/diff_2nd.png",v="/data/HS/data/dis_diff_final_1st.png",b="/data/HS/data/dis_diff_final_2nd.png",y={},w=e("h2",{id:"implementation-on-google-colab",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#implementation-on-google-colab","aria-hidden":"true"},"#"),s(" Implementation on google colab")],-1),x={href:"https://colab.research.google.com/drive/1EPxMGd9swV3lnJuVThK3cAepl6zrlX0w?usp=sharing",target:"_blank",rel:"noopener noreferrer"},_=t('<h2 id="dataset" tabindex="-1"><a class="header-anchor" href="#dataset" aria-hidden="true">#</a> Dataset</h2><p>The dataset is <a href="/data/HS/data/Manuallycoded.Answers.csv">Manuallycoded.Answers</a></p><p>There are 6 columns with this dataset, which are <code>module_id</code>, <code>student_id</code>, <code>Answers</code>, <code>Question</code>, <code>Group</code>, <code>Final</code> like the picture below.</p>',3),k=e("figure",null,[e("img",{src:h,alt:"Snap for datasets",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Snap for datasets")],-1),I=t(`<ol><li><code>module_id</code>: relative to question.</li><li><code>student_id</code>: student id</li><li><code>Answers</code>: The answer for the relative question, the data need to be classified.</li><li><code>Question</code>: The question for answer.</li><li><code>Group</code>: relative to question.</li><li><code>Final</code>: represent the levels, from 1 to 4 correspond to [<code>No-Reflection</code>, <code>Understanding</code>, <code>Simple Reflection</code>, <code>Critical Reflection</code>]</li></ol><p>Only <code>Answers</code>, <code>Question</code> and <code>Final</code> are related to our task.</p><h2 id="levels-definition" tabindex="-1"><a class="header-anchor" href="#levels-definition" aria-hidden="true">#</a> Levels definition</h2><ol><li><strong>No-Reflection</strong>: Professionals do not indicate any significant reflective thought processes and mainly mirror the words and phrases from the question or give a general comment.</li><li><strong>Understanding</strong>: Professionals indicate an understanding of concepts or topics from demonstrating a practical application of theory, yet lack specific details of professional or real-life experiences.</li><li><strong>Simple Reflection</strong>: Professionals indicate an understanding of the theory in unison with examples of practical application, yet only provide a vague explanation of future actions or outcomes. They do not provide concrete examples of action or application for the future.</li><li><strong>Critical Reflection</strong>: Besides relating the theory with examples from real-life experiences, professionals indicate what they are likely to do in the future or what they need to work on. In some cases, professionals might also reflect a change in their perspective.</li></ol><h2 id="tasks" tabindex="-1"><a class="header-anchor" href="#tasks" aria-hidden="true">#</a> Tasks</h2><p>Using openai to <strong>classify</strong> the <strong>answers</strong> to a specified level based on the level definitions and question.</p><p><em><strong>Parameters for openai</strong></em></p><ol><li>model: <code>gpt-4-0314</code></li><li>others: default values</li></ol><h2 id="prompt-result" tabindex="-1"><a class="header-anchor" href="#prompt-result" aria-hidden="true">#</a> Prompt &amp; result</h2><h3 id="prompt" tabindex="-1"><a class="header-anchor" href="#prompt" aria-hidden="true">#</a> Prompt</h3><p>The prompt should be defined as the content below:</p><p><strong>System prompt</strong></p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>There are four levels definition for reflection content as below.

Level definitions:
No-Reflection: Professionals do not indicate any significant reflective thought processes and mainly mirror the words and phrases from the question or give a general comment.
Understanding: Professionals indicate an understanding of concepts or topics from demonstrating a practical application of theory, yet lack specific details of professional or real-life experiences.
Simple Reflection: Professionals indicate an understanding of the theory in unison with examples of practical application, yet only provide a vague explanation of future actions or outcomes. They do not provide concrete examples of action or application for the future.
Critical Reflection: Besides relating the theory with examples from real-life experiences, professionals indicate what they are likely to do in the future or what they need to work on. In some cases, professionals might also reflect a change in their perspective.

Question:
&quot;&quot;&quot;[question]&quot;&quot;&quot;

Please define the level based on the level definitions and question above. The result should be json format, like 
{&quot;level&quot;: [The level result]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>User Prompt</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Answer text]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="result" tabindex="-1"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h3><p>The dataset has <span style="color:orange;">been processed with two times</span>. All the result will be listed below.</p><p>The distribution for the <code>final</code> column in the original dataset.</p>`,18),T=e("figure",null,[e("img",{src:f,alt:"Distribution of Final Column",width:"400",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Distribution of Final Column")],-1),R=t('<hr><p>The results for the distribution from the openai.</p><div style="display:flex;"><div style="flex:1;"><figure><img src="'+p+'" alt="Distribution of the First Time" tabindex="0" loading="lazy"><figcaption>Distribution of the First Time</figcaption></figure></div><div style="flex:1;"><figure><img src="'+u+'" alt="Distribution of the Second Time" tabindex="0" loading="lazy"><figcaption>Distribution of the Second Time</figcaption></figure></div></div><hr><p>If we regard <code>final</code> column as a baseline. The difference is the result from openai minus baseline. If the result is 0, it means the result remains the same with baseline. If the result is a positive value, it means the openai gives a higher level than baseline; else if the result is a negative value, it means the openai gives a lower level than baseline.</p><div style="display:flex;"><div style="flex:1;"><figure><img src="'+g+'" alt="Difference with the first time" tabindex="0" loading="lazy"><figcaption>Difference with the first time</figcaption></figure></div><div style="flex:1;"><figure><img src="'+m+'" alt="Difference with the second time" tabindex="0" loading="lazy"><figcaption>Difference with the second time</figcaption></figure></div></div><p>According to the results above, the level from openai normally give a higher level than baseline. The difference is mostly 1.</p><hr><p>Difference distribution on the final level</p><p>The following distribution descripe the openai result give a higher level for original 2 (Understanding) and 3 (Simple Reflection); the original level 1 and 2 (exist on relative lower o original level) will get 2 level higher from openai; the count of 3 level higher than baseline is quite small that could be ignored; 1 level lower than baseline focus on 2(Understanding) and 4 (Critical Reflection), it can be ignored because of the lower acount.</p><div style="display:flex;"><div style="flex:1;"><figure><img src="'+v+'" alt="Distribution of difference based on  (1st)" tabindex="0" loading="lazy"><figcaption>Distribution of difference based on <code>Final</code> (1st)</figcaption></figure></div><div style="flex:1;"><figure><img src="'+b+'" alt="Distribution of difference based on  (2nd)" tabindex="0" loading="lazy"><figcaption>Distribution of difference based on <code>Final</code> (2nd)</figcaption></figure></div></div><p>The different levels exist overlaps, the result will be different from the baseline even if a person judges sometimes, especially for the neighboring levels.</p><p>Based on the distributions of the results. So, I think it can work.</p><p>If want to get more accurate results need more investigation and fine-tuning.</p><h2 id="result-analysis" tabindex="-1"><a class="header-anchor" href="#result-analysis" aria-hidden="true">#</a> Result Analysis</h2><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h3><p><em><strong>Original</strong></em><br><strong>Question:</strong> Can you think of a time that you would have had a better experience or outcome if you had known about strategy? Is there an opportunity, by becoming more familiar with strategy, to align your efforts with it? Write 3-5 sentences on what you experienced and how it would go better if you knew the strategy framework you work within.<br><strong>Reflection:</strong> At one point in my life I was a Supplier Diversity Program Coordinator and my main goal was attract new businesses to our chamber of commerce. I focused too much on attracting businesses and not enough on aligning the businesses with our strategy. Had I focused more on strategy, I believe I would have had more luck attracting the businesses.<br><strong>Final:</strong> <span style="color:red;">1</span></p><p><em><strong>Result from OpenAI:</strong></em><br><strong>Result:</strong> Simple Reflection - <span style="color:red;">3</span><br><strong>Reason:</strong> The reflection provides an understanding of the situation and includes a personal experience, but doesn&#39;t provide prescriptions for the future.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>Comparing the explanation from Abhinava and the definition of levels, I think the result from OpenAI is more reasonable.</p></div><hr><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> <strong>Example 2</strong></h3><p><em><strong>Original</strong></em><br><strong>Question:</strong> Reflect and internalize the attributes of strategic thinkers. Have you seen these attributes in others around you? Look back at your identification activity at the beginning of this lesson. Pick out one that you would like to improve and develop a personal development plan. What 2 steps will you take to improve on that attribute? Write a few sentences outlining that plan. After you write your reflection, share your choice in the poll below, and explain your choice in the discussion below.<br><strong>Reflection:</strong> CreativitynI tend to look for opportunities and solutions within the scope of my experience and available tools.n2 stepsn1. I will focus on identifying at least one NEW idea when looking for solutions.n2. I will intentionally step back and divert my mind to other things before choosing a solution, with being mindful of the one new idea and giving myself the opportunity to come up with additional options.<br><strong>Final:</strong> <span style="color:red;">1</span></p><p><strong>Result from OpenAI:</strong></p><p><strong>Result:</strong> Simple Reflection - <span style="color:red;">3</span><br><strong>Reason:</strong> The reflection provides understanding and some reflection on a selected attribute and a plan to improve it without mentioning past experiences or prescribing for the future.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>Comparing the explanation from Abhinava and the definition of levels, I think the result from OpenAI is more reasonable.</p></div>',25);function S(q,A){const r=o("ExternalLinkIcon"),n=o("center");return d(),c("div",null,[w,e("p",null,[e("a",x,[s("Implementation on Google Colab"),i(r)])]),_,i(n,null,{default:a(()=>[k]),_:1}),I,i(n,null,{default:a(()=>[T]),_:1}),R])}const P=l(y,[["render",S],["__file","05.Levels2ReflectiveText.html.vue"]]);export{P as default};
