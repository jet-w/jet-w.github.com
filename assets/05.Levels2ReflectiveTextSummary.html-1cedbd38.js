import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as a,b as e,d as t,e as n}from"./app-e568439e.js";const d={},i=e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Thought"),e("th",null,"Effect"),e("th",null,"Code")])],-1),h=e("td",null,"1",-1),c=e("td",null,"Using the definition to do directly",-1),u=e("td",null,"Result is not good",-1),_={href:"https://colab.research.google.com/drive/1EPxMGd9swV3lnJuVThK3cAepl6zrlX0w?usp=sharing",target:"_blank",rel:"noopener noreferrer"},m=e("td",null,"2",-1),f=e("td",null,[t("Decompose the level definition, then to find the best match as the result based on the definition of levels and the question. "),e("br"),t(" Using lots of match methods to finetune.")],-1),p=e("td",null,"Result is not good",-1),g={href:"https://colab.research.google.com/drive/1ZIb76fPZZvqIpcJeZG81reGh9ftARau9?usp=sharing",target:"_blank",rel:"noopener noreferrer"},b=e("td",null,"3",-1),v=e("td",null,[t("Finetune the model on OpenAI, and then to identify the level based on level definition and question"),e("br"),t(" Using three approaches to sample data for training, "),e("br"),t(" 1. Sample data from the shifting level dataset (Grouped sampling from each level randomly) "),e("br"),t(" 2. Sample data from overall dataset automatically (Grouped sampling from each level randomly) "),e("br"),t(" 3. Group sample data from all data randomly.")],-1),C=e("td",null,"Result is still not good enough",-1),G={href:"https://colab.research.google.com/drive/1Sx37U_Yp_BBORjVw8o2vr3ETzc6gDD2-?usp=sharing",target:"_blank",rel:"noopener noreferrer"},y=e("td",null,"4",-1),k=e("td",null,"Using the GPT to summarize the definition for levels, then using the new definitions to create new prompt for getting result",-1),x=e("td",null,"On the way",-1),R={href:"https://colab.research.google.com/drive/1jMRCks-97kDnceDAKg1Cjz-Wo7pG6q0j?usp=sharing",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"Prompt finetuning over many times.",-1);function w(D,E){const o=r("ExternalLinkIcon");return s(),a("div",null,[e("table",null,[i,e("tbody",null,[e("tr",null,[h,c,u,e("td",null,[e("a",_,[t("Code on Google Colab"),n(o)])])]),e("tr",null,[m,f,p,e("td",null,[e("a",g,[t("Code on Google Colab"),n(o)])])]),e("tr",null,[b,v,C,e("td",null,[e("a",G,[t("Code on Google Colab"),n(o)])])]),e("tr",null,[y,k,x,e("td",null,[e("a",R,[t("Code on Google Colab"),n(o)])])])])]),T])}const B=l(d,[["render",w],["__file","05.Levels2ReflectiveTextSummary.html.vue"]]);export{B as default};
