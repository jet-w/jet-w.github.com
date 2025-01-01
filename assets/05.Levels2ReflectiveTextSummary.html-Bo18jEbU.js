import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as n}from"./app-BoSEJaB0.js";const l="/data/HS/data/fine-tuning-approach.png",o="/data/HS/reflection_classification/f2/1st.png",s="/data/HS/reflection_classification/f2/2nd.png",r="/data/HS/reflection_classification/f2/3rd.png",c="/data/HS/reflection_classification/f2/4th.png",d="/data/HS/reflection_classification/f2/5th.png",f="/data/HS/reflection_classification/f3/1st.png",g="/data/HS/reflection_classification/f3/2nd.png",p="/data/HS/reflection_classification/f3/3rd.png",h="/data/HS/reflection_classification/f3/4th.png",v="/data/HS/reflection_classification/f3/5th.png",u="/data/HS/reflection_classification/f4/1st.png",m="/data/HS/reflection_classification/f4/2nd.png",y="/data/HS/reflection_classification/f4/3rd.png",_="/data/HS/reflection_classification/f4/4th.png",b="/data/HS/reflection_classification/f4/5th.png",x={};function S(w,t){return n(),e("div",null,t[0]||(t[0]=[a('<h2 id="approaches-for-prompt-fine-tuning" tabindex="-1"><a class="header-anchor" href="#approaches-for-prompt-fine-tuning"><span>Approaches for prompt fine-tuning</span></a></h2><table><thead><tr><th>ID</th><th>Thought</th><th>Effect</th><th>Code</th></tr></thead><tbody><tr><td>1</td><td>Using the definition to do directly</td><td>Result is not good</td><td><a href="https://colab.research.google.com/drive/1EPxMGd9swV3lnJuVThK3cAepl6zrlX0w?usp=sharing" target="_blank" rel="noopener noreferrer">Code on Google Colab</a><br> <br><a href="05.Levels2ReflectiveText">More details</a></td></tr><tr><td>2</td><td>Decompose the level definition, then to find the best match as the result based on the definition of levels and the question. <br> Using lots of match methods to finetune.</td><td>Result is not good</td><td><a href="https://colab.research.google.com/drive/1ZIb76fPZZvqIpcJeZG81reGh9ftARau9?usp=sharing" target="_blank" rel="noopener noreferrer">Code on Google Colab</a><br> <br><a href="05.Levels2ReflectiveText">More details</a></td></tr><tr><td>3</td><td>Finetune the model on OpenAI, and then to identify the level based on level definition and question<br> Using three approaches to sample data for training, <br> 1. Sample data from the shifting level dataset (Grouped sampling from each level randomly) <br> 2. Sample data from overall dataset automatically (Grouped sampling from each level randomly) <br> 3. Group sample data from all data randomly.</td><td>Result is still not good enough</td><td><a href="https://colab.research.google.com/drive/1Sx37U_Yp_BBORjVw8o2vr3ETzc6gDD2-?usp=sharing" target="_blank" rel="noopener noreferrer">Code on Google Colab</a></td></tr><tr><td>4</td><td>Using the GPT to summarize the definition for levels, then using the new definitions to create new prompt for getting result</td><td>Done</td><td><a href="https://colab.research.google.com/drive/1jMRCks-97kDnceDAKg1Cjz-Wo7pG6q0j?usp=sharing" target="_blank" rel="noopener noreferrer">Code on Google Colab</a></td></tr><tr><td>5</td><td>Summarize the definition &amp; finetuning groups data</td><td>Under the way</td><td><a href="https://colab.research.google.com/drive/1Yumr8PVfMXH9P_ty5BcDwskDMP4tEtrm?usp=sharing" target="_blank" rel="noopener noreferrer">Code on Google Colab</a></td></tr></tbody></table><h2 id="prompt-fine-tuning-flowchart" tabindex="-1"><a class="header-anchor" href="#prompt-fine-tuning-flowchart"><span>Prompt fine-tuning flowchart</span></a></h2><figure><img src="'+l+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><h2 id="statistical-consistency" tabindex="-1"><a class="header-anchor" href="#statistical-consistency"><span>Statistical consistency</span></a></h2><p>This part will try to test the statistical consistency for different original levels.</p><h3 id="statistical-consistency-final-2" tabindex="-1"><a class="header-anchor" href="#statistical-consistency-final-2"><span>Statistical consistency (Final 2)</span></a></h3><div><div style="display:flex;"><div style="flex:1;"><figure><img src="'+o+'" alt="12.5%" tabindex="0" loading="lazy"><figcaption>12.5%</figcaption></figure></div><div style="flex:1;"><figure><img src="'+s+'" alt="2.5%" tabindex="0" loading="lazy"><figcaption>2.5%</figcaption></figure></div><div style="flex:1;"><figure><img src="'+r+'" alt="7.5%" tabindex="0" loading="lazy"><figcaption>7.5%</figcaption></figure></div></div></div><div><div style="display:flex;"><div style="flex:1;"><figure><img src="'+c+'" alt="7.5%" tabindex="0" loading="lazy"><figcaption>7.5%</figcaption></figure></div><div style="flex:1;"><figure><img src="'+d+'" alt="15%" tabindex="0" loading="lazy"><figcaption>15%</figcaption></figure></div><div style="flex:1;"></div></div></div> According to the graphs above, we can find the accuracy of classification for level 2 is very low. Most items shift from level 2 to level 3. Although the accuracy is low, the statistical result shows the shifting trend(<span style="color:orange;">most shifting from level 2 to level 3.</span>) is stable. <h3 id="statistical-consistency-final-3" tabindex="-1"><a class="header-anchor" href="#statistical-consistency-final-3"><span>Statistical consistency (Final 3)</span></a></h3><div><div style="display:flex;"><div style="flex:1;"><figure><img src="'+f+'" alt="57.5%" tabindex="0" loading="lazy"><figcaption>57.5%</figcaption></figure></div><div style="flex:1;"><figure><img src="'+g+'" alt="67.5%" tabindex="0" loading="lazy"><figcaption>67.5%</figcaption></figure></div><div style="flex:1;"><figure><img src="'+p+'" alt="65%" tabindex="0" loading="lazy"><figcaption>65%</figcaption></figure></div></div></div><div><div style="display:flex;"><div style="flex:1;"><figure><img src="'+h+'" alt="50%" tabindex="0" loading="lazy"><figcaption>50%</figcaption></figure></div><div style="flex:1;"><figure><img src="'+v+'" alt="67.5%" tabindex="0" loading="lazy"><figcaption>67.5%</figcaption></figure></div><div style="flex:1;"></div></div></div> According to the graphs above, we can find the accuracy of classification for level 3 is low but it can be accepted for the initial step. Most items keep the original level, for the shifting items, most of them shift from 3 to 4. According to the graphs above, most accuracy is around 60%, the statistical result for accuracy and shifting trend are consistent. <h3 id="statistical-consistency-final-4" tabindex="-1"><a class="header-anchor" href="#statistical-consistency-final-4"><span>Statistical consistency (Final 4)</span></a></h3><div><div style="display:flex;"><div style="flex:1;"><figure><img src="'+u+'" alt="60%" tabindex="0" loading="lazy"><figcaption>60%</figcaption></figure></div><div style="flex:1;"><figure><img src="'+m+'" alt="47.5%" tabindex="0" loading="lazy"><figcaption>47.5%</figcaption></figure></div><div style="flex:1;"><figure><img src="'+y+'" alt="57.5%" tabindex="0" loading="lazy"><figcaption>57.5%</figcaption></figure></div></div></div><div><div style="display:flex;"><div style="flex:1;"><figure><img src="'+_+'" alt="60%" tabindex="0" loading="lazy"><figcaption>60%</figcaption></figure></div><div style="flex:1;"><figure><img src="'+b+'" alt="62.5%" tabindex="0" loading="lazy"><figcaption>62.5%</figcaption></figure></div><div style="flex:1;"></div></div></div><p>According to the graphs above, we can find the accuracy of classification for level 4 is low but it can be accepted for the initial step (Actually, the accuracy decreases rapidly after integrating the level 3. The accuracy could reach 90% before integrating the level 3 prompt). Most items keep the original level. According to the graphs above, most accuracy is around 60%, so the accuracy of the statistical result is consistent.</p>',20)]))}const H=i(x,[["render",S],["__file","05.Levels2ReflectiveTextSummary.html.vue"]]),A=JSON.parse('{"path":"/work/Blueprint_AI/05.Levels2ReflectiveTextSummary.html","title":"06. Summary for Reflective Level","lang":"en-US","frontmatter":{"title":"06. Summary for Reflective Level","index":true,"icon":"circle-dot","author":"Haiyue","date":"2024-01-22T00:00:00.000Z","category":["work"],"feed":false,"seo":false,"gitInclude":[],"head":[]},"headers":[{"level":2,"title":"Approaches for prompt fine-tuning","slug":"approaches-for-prompt-fine-tuning","link":"#approaches-for-prompt-fine-tuning","children":[]},{"level":2,"title":"Prompt fine-tuning flowchart","slug":"prompt-fine-tuning-flowchart","link":"#prompt-fine-tuning-flowchart","children":[]},{"level":2,"title":"Statistical consistency","slug":"statistical-consistency","link":"#statistical-consistency","children":[{"level":3,"title":"Statistical consistency (Final 2)","slug":"statistical-consistency-final-2","link":"#statistical-consistency-final-2","children":[]},{"level":3,"title":"Statistical consistency (Final 3)","slug":"statistical-consistency-final-3","link":"#statistical-consistency-final-3","children":[]},{"level":3,"title":"Statistical consistency (Final 4)","slug":"statistical-consistency-final-4","link":"#statistical-consistency-final-4","children":[]}]}],"readingTime":{"minutes":2.06,"words":619},"filePathRelative":"work/Blueprint&AI/05.Levels2ReflectiveTextSummary.md","localizedDate":"January 22, 2024"}');export{H as comp,A as data};
