import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as n,c as s,b as t,d as r,e as i,f as l}from"./app-214704b2.js";const d={},p=l('<p>This is the first part of the Assignment 2. It is worth <span style="color:orange;font-weight:bold;">20 points</span> of your final grade. Your task is to</p><ol><li><span style="color:orange;font-weight:bold;">prepare the data</span>,</li><li><span style="color:orange;font-weight:bold;">run an analysis</span>,</li><li><span style="color:orange;font-weight:bold;">answer research questions below</span> and</li><li><span style="color:orange;font-weight:bold;">write a brief report</span> with your findings.</li></ol><h2 id="dataset" tabindex="-1"><a class="header-anchor" href="#dataset" aria-hidden="true">#</a> Dataset</h2><p>You are provided with the data set having information on credit card customers. Please check data description at the end of this document for variables description.</p><h2 id="research-questions" tabindex="-1"><a class="header-anchor" href="#research-questions" aria-hidden="true">#</a> Research questions</h2><ol><li>Load and prepare the data, <ul><li>make decisions <span style="color:orange;font-weight:bold;">what variables to include or exclude</span> from the model.</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Most probably you will <span style="color:orange;font-weight:bold;">need some data transformation/feature engineering</span> before you start building your model.</p></div><ul><li><span style="color:orange;font-weight:bold;">Report and explain your decisions</span>.</li></ul></li><li>Prepare <span style="color:orange;font-weight:bold;">Credit Scoring model</span> and <span style="color:orange;font-weight:bold;">Credit Scorecard</span>. <ul><li><span style="color:orange;font-weight:bold;">Report decisions made</span> during model development stage,</li><li><span style="color:orange;font-weight:bold;">final scorecard</span>,</li><li><span style="color:orange;font-weight:bold;">statistical summary of results</span>,</li><li><span style="color:orange;font-weight:bold;">discuss quality</span> of the model.</li></ul></li><li>Use any other tool / predictive model to <ul><li><span style="color:orange;font-weight:bold;">predict “bad” customers</span>,</li><li><span style="color:orange;font-weight:bold;">discuss quality</span> of the model.</li></ul></li><li>Provide a discussion <ul><li><span style="color:orange;font-weight:bold;">comparing credit score and predictive models</span>.</li><li><span style="color:orange;font-weight:bold;">Compare quality</span> of models.</li><li><span style="color:orange;font-weight:bold;">Compare potential application</span> of these models – <span style="color:orange;font-weight:bold;">how good or bad</span> each of them would serve the business.</li><li>Tell <span style="color:orange;font-weight:bold;">something about the population</span>.</li></ul></li></ol><h2 id="submission" tabindex="-1"><a class="header-anchor" href="#submission" aria-hidden="true">#</a> Submission</h2><p>You must submit a formal report in MS Word or PDF format. Your report will include:</p><ol><li><span style="color:orange;font-weight:bold;">Introduction</span> (7 marks).</li><li><span style="color:orange;font-weight:bold;">Dataset description</span> and <span style="color:orange;font-weight:bold;">data preparation discussion</span> (10 marks).</li><li><span style="color:orange;font-weight:bold;">Credit Scoring model</span> with related discussion (40 marks).</li><li><span style="color:orange;font-weight:bold;">Predictive model</span> with related discussion (30 marks).</li><li>Discussion <span style="color:orange;font-weight:bold;">comparing two models</span> (8 marks).</li><li><span style="color:orange;font-weight:bold;">Conclusion</span> (5 marks).</li><li>Appendix with some extra information, if required.</li></ol><p>Your report should demonstrate completeness in covering all research questions and brevity as no one loves reading long reports. “A picture is worth a thousand words” – use data visualisations to illustrate and support your research findings.</p><p>There is a page limit: <span style="color:red;font-weight:bold;">no more than 8 pages from the beginning of Introduction to the end of Conclusion</span>. Cover page, content list, appendix, references are not included.</p><p>Students should not try to cheat. <span style="color:orange;font-weight:bold;">Too small fonts, too small pictures will be ignored</span>, so that would be missing information or mistake. It should be very easy for the reader to read and understand what you do and why you do that.</p><p>Appendix will not be considered for marking – all important stuff should be in the main report.</p><p>Don’t use generative AIs (ChatGPT, etc.) – they waste too much space and don’t deliver any information value to your reports.</p><h2 id="software" tabindex="-1"><a class="header-anchor" href="#software" aria-hidden="true">#</a> Software</h2><p>It is expected that students will use <span style="color:orange;font-weight:bold;">SAS Enterprise Miner</span> for this assessment and <span style="color:orange;font-weight:bold;">follow in-class presentation as a guideline</span>. If you don’t have access to SAS Enterprise Miner, then you can use other tools, for example <span style="color:orange;font-weight:bold;">“scorecard” package in R</span> or <span style="color:orange;font-weight:bold;">“scorecardpy” package in Python</span>. However, support will be limited for alternative tools, and SAS-based presentation remains the guideline for important steps, decisions and results.<br> If you have any questions – feel free to ask on the forum or by email. You can discuss this exercise with me and other students. <span style="color:orange;font-weight:bold;">You are encouraged to share ideas but not solutions</span>. Remember about academic integrity.</p><h2 id="data-description" tabindex="-1"><a class="header-anchor" href="#data-description" aria-hidden="true">#</a> Data description</h2><p>The data set represents the information about credit cards from the Republic of China (Taiwan) and uses New Taiwan (NT) dollar as a currency. Current change rate is roughly 20 NT dollars per 1 AUD, so some accounts in the data are large, however not too large to be unrealistic. This is real data.</p><p>There are <strong>25 variables</strong>. First 6 variables are IDs and demographic information. Remaining variables are history of repayments, and it is a bit confusing – see extra comments after the list of variables.</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>ID</td><td>ID of each client</td></tr><tr><td>LIMIT_BAL</td><td>Amount of given credit in NT dollars (includes individual and family/supplementary credit</td></tr><tr><td>SEX</td><td>Gender (1=male, 2=female)</td></tr><tr><td>EDUCATION</td><td>(1=graduate school, 2=university, 3=high school, 4=others, 5=unknown, 6=unknown)</td></tr><tr><td>MARRIAGE</td><td>Marital status (1=married, 2=single, 3=others)</td></tr><tr><td>AGE</td><td>Age in years</td></tr><tr><td>PAY_0</td><td>Repayment status in September, 2005 (-2=there is nothing to pay, -1=pay duly, 0=partial repayment, 1=payment delay for one month, 2=payment delay for two months, … 8=payment delay for eight months, 9=payment delay for nine months and above)</td></tr><tr><td>PAY_2</td><td>Repayment status in August, 2005 (scale same as above)</td></tr><tr><td>PAY_3</td><td>Repayment status in July, 2005 (scale same as above)</td></tr><tr><td>PAY_4</td><td>Repayment status in June, 2005 (scale same as above)</td></tr><tr><td>PAY_5</td><td>Repayment status in May, 2005 (scale same as above)</td></tr><tr><td>PAY_6</td><td>Repayment status in April, 2005 (scale same as above)</td></tr><tr><td>BILL_AMT1</td><td>Amount of bill statement in September, 2005 (NT dollar)</td></tr><tr><td>BILL_AMT2</td><td>Amount of bill statement in August, 2005 (NT dollar)</td></tr><tr><td>BILL_AMT3</td><td>Amount of bill statement in July, 2005 (NT dollar)</td></tr><tr><td>BILL_AMT4</td><td>Amount of bill statement in June, 2005 (NT dollar)</td></tr><tr><td>BILL_AMT5</td><td>Amount of bill statement in May, 2005 (NT dollar)</td></tr><tr><td>BILL_AMT6</td><td>Amount of bill statement in April, 2005 (NT dollar)</td></tr><tr><td>PAY_AMT1</td><td>Amount of previous payment in September, 2005 (NT dollar)</td></tr><tr><td>PAY_AMT2</td><td>Amount of previous payment in August, 2005 (NT dollar)</td></tr><tr><td>PAY_AMT3</td><td>Amount of previous payment in July, 2005 (NT dollar)</td></tr><tr><td>PAY_AMT4</td><td>Amount of previous payment in June, 2005 (NT dollar)</td></tr><tr><td>PAY_AMT5</td><td>Amount of previous payment in May, 2005 (NT dollar)</td></tr><tr><td>PAY_AMT6</td><td>Amount of previous payment in April, 2005 (NT dollar)</td></tr><tr><td>default.payment</td><td>Customer defaulted payment on the next month (1=yes, 0=no)</td></tr></tbody></table><p><strong>Comments for the history:</strong></p><ol><li>History in the data goes from right to left.</li><li>Payments should be done on the next month, e.g. April bill should be paid in May (BILL_AMT6 should be paid in PAY_AMT5).</li><li>Bill Amount includes past debt plus new expenses. So, if there were no payments in April, bill amount for May goes up.</li><li>Negative bill amount (BILL_AMT) is not a mistake, it means that the previous payment was larger that the actual bill and the account has extra cash in it (no debt at all). Negative payment (PAY_AMT) would be a mistake in the data but I have not seen any.</li><li>Variable payment status (PAY_) shows the customer’s status with respect to the same month bill. For example, PAY_6 shows of BILL_AMT6 was paid, however respected payment would be recorded in PAY_AMT5. In general, I found payment status (PAY_) inconsistent and illogical.</li></ol><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',23),h={href:"https://lo.unisa.edu.au/mod/assign/view.php?id=3646202",target:"_blank",rel:"noopener noreferrer"};function u(c,m){const e=a("ExternalLinkIcon");return n(),s("div",null,[p,t("p",null,[t("a",h,[r("Assignment"),i(e)])])])}const y=o(d,[["render",u],["__file","Assignment2.html.vue"]]);export{y as default};
