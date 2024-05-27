import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as n,b as e,d as s,e as i,f as l}from"./app-04fcae56.js";const d={},h=l('<p>INFS 5096 Customer Analytics in Large Organisations</p><h2 id="assignment-2-part-2-–-optimisation" tabindex="-1"><a class="header-anchor" href="#assignment-2-part-2-–-optimisation" aria-hidden="true">#</a> Assignment 2 part 2 – Optimisation</h2><p>This is the second part of the Assignment 2. It is worth 30 points of your final grade. Your task is to formulate the problem, prepare the data, run an analysis, answer research questions and write a brief report with your findings.</p><ol><li><p>Optimal manufacturing<br> You are a manager on a fully automated factory building rocket engines. Each rocket engine requires multiple parts: 1 unit of part A, 2 units of part B and 4 units of part C. The cost of materials for each part is following: $20 for part A, $15 for part B and $10 for part C. You sell your rocket engines for $300 each.</p><table><thead><tr><th>Part</th><th>Quantity Required</th><th>Cost</th></tr></thead><tbody><tr><td>A</td><td>1</td><td>$20</td></tr><tr><td>B</td><td>2</td><td>$15</td></tr><tr><td>C</td><td>4</td><td>$10</td></tr></tbody></table><p>You have two machines working for you 24 hours per day, 7 days a week. These machines can do any parts; however, they are not equally good in everything. Machine 1 takes 3 hours to make part A, 2 hours to make part B, and only 30 minutes to make part C. Machine 2 takes 2 hours to make part A, 1 hour to make part B, and 1 hour to make part C.</p><table><thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead><tbody><tr><td>Machine 1</td><td>3h</td><td>2h</td><td>0.5h</td></tr><tr><td>Machine 2</td><td>2h</td><td>1h</td><td>1h</td></tr></tbody></table><p>As any manager you want to maximise your profit. How would you do that and how high it can go?</p></li><li><p>Linear Programming for a caravan park management<br> In this case study you work as a manager of a small caravan park. The total area of the caravan park is 1800 sq.m. Your caravan park accepts caravans and tents. For a safety reasons, there are standards for allocated spaces: 160 sq.m. per caravan and 90 sq.m. per tent. Also, you are not allowed to have more than 6 caravans in your caravan park. There are also sanitary restrictions stating that there can be 4 people in the caravan and only 3 people in the tent. Total caravan park occupancy should not exceed 48 people.<br> You charge clients per night and prices are $30 for caravan and $15 for tent. What is the highest possible profit you can get per night? Use Excel Solver to solve this problem. From your Answer Report, describe the optimal solution.<br> Use Sensitivity Report from your optimal solution to consider the following scenarios (each one independently) and their effects on your solution and caravan park management:<br> You got greedy and decided to increase price for caravan by 100%.<br> You got very greedy and decided to increase price for tent by 100%.<br> Government relaxed restrictions for the number of caravans and allowed to have 50% more caravans.<br> Government implemented COVID-restrictions and did not allow more than 30 people in the caravan park.</p><p>Go bananas with optimisation<br> You are a fresh produce manager in the supermarket. Use historical data provided in the Excel-file “Q3_Bananas.xlsx” to choose optimal solutions for buying bananas for the supermarket for the two scenarios below:<br> You are a greedy manager, and you want to earn as much money as possible.<br> You are an environmentally minded manager, and you want to reduce the bananas wastage less than 1% per year of your total amount of bought bananas.<br> The Excel file has three columns:<br> Date of sales. It is not important for this problem.<br> Demand for bananas. This is a random variable, and you don’t know it when you make your decision about buying banana stock for your supermarket. Later you use it to calculate your profit or loss. For example, if demand is 400 kg, while your stock is 300 kg only, then you are able to sell all bananas, and part of the demand is not satisfied; however, if stock is 500 kg, then you sell 400 kg, the full demand is satisfied, but 100 kg of bananas are wasted. We assume, that bananas cannot be stored and should be sold on the next day. Unsold bananas go to waste.<br> Price is a selling price of bananas in the supermarket on a given day. The supermarket does not set their own prices. The supermarket follows the wholesale market and sells bananas with a fixed 25% margin. That, if the listed selling price for today is $1.25 then the cost of buying bananas on that day is $1, and the supermarket profit is 25 cents ($0.25) per one kilogram of bananas. Beware, cost is always 25% less than selling price.<br> As you know, demand has a negative relationship with the price – if price goes up, demand goes down, people don’t buy that much if the price is too high. Hence, as a smart manager, you are interested in a “flexible” solution where the quantity you buy varies from day to day and depends on the price.</p><p>Optimisation for a life of crime<br> Let’s assume that you decide to earn money by tickets scalping, that is, buying tickets for some events and then selling them at higher price. Disclaimer: ticket scalping is illegal; don’t try that at home; this is an optimisation exercise only.<br> You can buy tickets at official price of $150. Then you try sell them at any price you want. However, if your price is too high then there will be less people willing to buy tickets from you. Also, the number of buyers is a random variable, so you cannot be sure how many tickets you will be able to sell.<br> The number of tickets you can sell (demand) follows lognormal distribution with mean µ and standard deviation = 0.5. Note: The number of tickets sold will be not an integer, which does not make sense. It is OK for calculations as we talk about expectations, but it is not OK for reporting. Use common sense.<br> Value µ depends on your selected price and follows the following formula: µ=6-YourPrice/70<br> You can return all tickets you don’t sell, but you will get only one third of their official price.<br> How many tickets should you buy and what should be your selling price? What is a probability to make a profit in the case of the optimal solution? Is it worth to “do business”?<br> Hint: to get random numbers from some distribution in Excel, you need to use inverse functions. For example, for lognormal distribution the formula is =LOGNORM.INV(RAND(), mean, st.dev)</p></li></ol><p>Submission<br> Write and submit a report with solutions for all problems above. You should use not more than 3 pages per problem. No micro-fonts, mini-image, nano-tables. It should be easy to read the document and to see all details.<br> Your report should be brief but have all attributes of a proper business report. As there are four independent and absolutely disconnected problems, you don’t need one global introduction and then a conclusion. You will have four separate mini reports, each report will have its own introduction, problem formulation, discussion and conclusion.<br> All problems are equally weighted. That is, every problem is worth 25 points. You should provide correct results and correct interpretations.<br> You must submit your report in MS Word or PDF format and Excel workbook including all your Excel spread sheets. Submit only meaningful spread sheets – don’t include your tests and “work in progress”. Take care about meaningful names for all spread sheets. It should be easy for me to see what is what. It is OK to submit separate Excel file for each question.<br> If you have any questions – feel free to ask on the forum. You can discuss this exercise with me and other students. You are encouraged to share ideas but not solutions. Remember about academic integrity.</p><p>Important note<br> As this is the final piece of assessment, there is no provision for late submission. It is like an exam - if you are late, then the system closes, and you get zero for the assessment.<br> Please don’t send me anything by email. I cannot accept any submission by email. All submissions should go through LearnOnline.<br> Start early – finish early, be safe.</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',7),u={href:"https://lo.unisa.edu.au/mod/assign/view.php?id=3655946",target:"_blank",rel:"noopener noreferrer"};function c(p,m){const t=o("ExternalLinkIcon");return r(),n("div",null,[h,e("p",null,[e("a",u,[s("Assignment"),i(t)])])])}const y=a(d,[["render",c],["__file","Assignment2.2.html.vue"]]);export{y as default};
