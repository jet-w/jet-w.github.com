import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c,b as e,d as a,e as t,w as u,f as s}from"./app-94fe83fe.js";const m={},h=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),a(" Requirements")],-1),p={href:"https://lo.unisa.edu.au/mod/assign/view.php?id=3365817",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"instructions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#instructions","aria-hidden":"true"},"#"),a(" Instructions")],-1),b={class:"hint-container details"},g=e("summary",null,"Instructions",-1),f=s(`<p>Use <code>Rmarkdown</code> to do the following tasks(2). Please note that the presentation of the document and the range of <code>Rmarkdown</code> features/functions used are matter.</p><h2 id="_1-describe-a-real-world-application-that-uses-topic-modelling-and-explain-how-the-topic-model-works-4" tabindex="-1"><a class="header-anchor" href="#_1-describe-a-real-world-application-that-uses-topic-modelling-and-explain-how-the-topic-model-works-4" aria-hidden="true">#</a> 1. Describe a <span style="color:orange;font-weight:bold;">real-world application</span> that uses <span style="color:orange;font-weight:bold;">topic modelling</span> and <span style="color:orange;font-weight:bold;">explain how the topic model works</span>. <span style="color:red;font-weight:bold;">(4)</span></h2><pre><code>The &lt;span style=&quot;color:orange;font-weight:bold&quot;&gt;recommendation system&lt;/span&gt; could use topic modelling to work. The key work is to calculate the similarity. All the works could be processed with three steps.

1.  Calculating the distribution of topics for two items.
2.  Calculating the similarity (Kullback-Leibler divergence could be used) between two items based on the distribution of topics.
3.  The item with higher similarity will get a higher chance for recommendation.
</code></pre><h2 id="_2-download-the-twitter-dataset-rdmtweets-201306-rdata-from-the-course-website-and-do-the-following-8" tabindex="-1"><a class="header-anchor" href="#_2-download-the-twitter-dataset-rdmtweets-201306-rdata-from-the-course-website-and-do-the-following-8" aria-hidden="true">#</a> 2. Download the Twitter dataset (rdmTweets-201306.RData) from the course website and do the following. <span style="color:red;font-weight:bold;">(8)</span></h2><pre><code>\`\`\` R
if(!require(twitteR))
    install.packages(&quot;twitteR&quot;)
if(!require(tm))
    install.packages(&quot;tm&quot;)
if(!require(wordcloud))
    install.packages(&quot;wordcloud&quot;)

library(tm)
library(wordcloud)
library(dplyr)
library(stringr)
library(tidyverse)

load(&#39;rdmTweets-201306.RData&#39;)
\`\`\`
</code></pre><h3 id="a-text-cleaning-remove-urls-convert-to-lower-case-and-remove-non-english-letters-or-space" tabindex="-1"><a class="header-anchor" href="#a-text-cleaning-remove-urls-convert-to-lower-case-and-remove-non-english-letters-or-space" aria-hidden="true">#</a> a. <span style="color:orange;font-weight:bold;">Text cleaning</span>: remove URLs, convert to lower case, and remove non-English letters or space.</h3><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>text_clean &lt;- function(x) {
    text &lt;- x$text
    # remove urls with header
    text &lt;- gsub(&quot;https?://\\\\S+|www\\\\.\\\\S+&quot;, &quot;&quot;, text)
    # remove urls without header
    text &lt;- gsub(&quot;\\\\bwww[1-9a-zA-Z]*\\\\.\\\\S+&quot;, &quot;&quot;, text)
    # convert to lower case and remove non-English letters and space
    text &lt;- tolower(gsub(&quot;\\\\s+&quot;, &quot; &quot;, gsub(&quot;[^a-zA-Z ]&quot;, &quot; &quot;, text)))
    # remove the space
    trimws(text)
}
tweet_texts &lt;- unlist(lapply(tweets, text_clean))
tweet_texts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b-count-the-frequency-of-words-data-and-mining" tabindex="-1"><a class="header-anchor" href="#b-count-the-frequency-of-words-data-and-mining" aria-hidden="true">#</a> b. <span style="color:orange;font-weight:bold;">Count the frequency</span> of words “data” and “mining”.</h3><p><em><strong>method 1</strong></em></p>`,9),w=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{r:"",warning:"FALSE",class:"language-text"},[e("code",null,`freq.words <- data.frame(
  "data" = unlist(lapply(tweet_texts, function(x){
      words <- unlist(strsplit(x, "\\\\s+"))
      sum(words == "data")
    })) , 
  "mining" = unlist(lapply(tweet_texts, function(x){
      words <- unlist(strsplit(x, "\\\\s+"))
      sum(words == "mining")
    }))
)

freq <- freq.words %>% summarize(across(everything(), sum, na.rm=TRUE))
freq
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("p",null,[e("em",null,[e("strong",null,"method 2")])],-1),_=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{r:"",class:"language-text"},[e("code",null,`# concatenate all string into one
text_data <- paste(tweet_texts, collapse=" ")

# Create a corpus and perform text cleaning
text_corpus <- Corpus(VectorSource(text_data))
dtm <- DocumentTermMatrix(text_corpus)
dtm_matrix <- as.matrix(dtm)

freq <- gather(as.data.frame(dtm_matrix), key="col", value="c") %>% 
  filter(col %in% c("data", "mining"))
freq
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("h3",{id:"c-plot-the-word-cloud",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#c-plot-the-word-cloud","aria-hidden":"true"},"#"),a(" c. "),e("span",{style:{color:"orange","font-weight":"bold"}},"Plot the word cloud"),a(".")],-1),q=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{r:"",warning:"FALSE",class:"language-text"},[e("code",null,`# concatenate all string into one
text_data <- paste(tweet_texts, collapse=" ")

# Create a corpus and perform text cleaning
text_corpus <- Corpus(VectorSource(text_data))

# Remove the meaningless words
custom_stopwords <- c("the", "a", "an", "in", "on", "of", "to", "for", "with", "by", "and")
text_corpus <- tm_map(text_corpus, removeWords, custom_stopwords)

#text_corpus <- tm_map(text_corpus, content_transformer(tolower))
text_corpus <- tm_map(text_corpus, removePunctuation)

# Create a term-document matrix and calculate word frequencies
tdm <- TermDocumentMatrix(text_corpus)
word_freq <- rowSums(as.matrix(tdm))

# Create the word cloud
wordcloud(names(word_freq), 
          freq = word_freq, 
          scale = c(3, 0.5), 
          min.freq = 3, 
          colors = brewer.pal(8, "Dark2")
)
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=s(`<h3 id="d-use-a-topic-modelling-algorithm-to-fit-the-twitter-data-to-8-topics-find-the-top-6-frequent-terms-words-in-each-topic" tabindex="-1"><a class="header-anchor" href="#d-use-a-topic-modelling-algorithm-to-fit-the-twitter-data-to-8-topics-find-the-top-6-frequent-terms-words-in-each-topic" aria-hidden="true">#</a> d. Use a <span style="color:orange;font-weight:bold;">topic modelling</span> algorithm to fit the Twitter data to 8 topics. Find the top 6 frequent terms (words) in each topic.</h3><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>if(!require(topicmodels))
    install.packages(&quot;topicmodels&quot;)
library(&quot;topicmodels&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>dtm &lt;- DocumentTermMatrix(text_corpus)
# Specify the number of topics (k)
k &lt;- 8

# Fit the LDA model
lda_model &lt;- LDA(dtm, 
                 k = k, 
                 method = &quot;Gibbs&quot;, 
                 control = list(seed = 9999, 
                                burnin = 1000, 
                                thin = 100, 
                                iter = 1000)
                 )

top_words &lt;- terms(lda_model, 6)

lda_model
top_words 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-provide-a-real-world-example-of-a-system-or-an-application-that-utilises-stream-data-in-your-example-explain-the-challenges-faced-by-algorithms-in-analysing-stream-data-and-suggest-some-ideas-to-address-those-challenges-6" tabindex="-1"><a class="header-anchor" href="#_3-provide-a-real-world-example-of-a-system-or-an-application-that-utilises-stream-data-in-your-example-explain-the-challenges-faced-by-algorithms-in-analysing-stream-data-and-suggest-some-ideas-to-address-those-challenges-6" aria-hidden="true">#</a> 3. Provide a <span style="color:orange;font-weight:bold;">real-world example</span> of a system or an application that <span style="color:orange;font-weight:bold;">utilises stream-data</span>. In your example, <span style="color:orange;font-weight:bold;">explain the challenges</span> faced by algorithms in analysing stream data and <span style="color:orange;font-weight:bold;">suggest some ideas to address those challenges</span> <span style="color:red;font-weight:bold;">(6)</span></h2><pre><code>\`StockSight\` is an application that has been used for many organization. It uses the dataset from     Twitter and news headlines data for stocks to analysis the sentiment of the author. Normally, Twitter and other news platforms     owns a huge amount of data; more even, the data will be posted rapidly, especially on Twitter; some people also will add some     slang, emojis, etc. that will make more challenging for analyzing; Lots of unrelated data exist, etc. All the problems are the     challenges for implementation. The items listed below are some of my ideas for dealing with all the challenges.

1.  Using stream sampling algorithm to deal with huge amount of data and rapid posting data.
2.  Using NLP techniques to deal with the text, such as slang, emojis, etc.
3.  Using classification method to deal with unrelated data.

**References**
&lt;https://github.com/shirosaidev/stocksight&gt;
</code></pre><h2 id="_4-create-a-data-stream-of-two-dimensions-data-points-the-data-points-will-follow-gaussian-distribution-with-5-noise-and-belong-to-4-clusters-compare-the-performance-of-the-following-clustering-methods-in-terms-of-precision-recall-and-f1-6" tabindex="-1"><a class="header-anchor" href="#_4-create-a-data-stream-of-two-dimensions-data-points-the-data-points-will-follow-gaussian-distribution-with-5-noise-and-belong-to-4-clusters-compare-the-performance-of-the-following-clustering-methods-in-terms-of-precision-recall-and-f1-6" aria-hidden="true">#</a> 4. Create a <span style="color:orange;font-weight:bold;">data stream</span> of <span style="color:orange;font-weight:bold;">two dimensions data points</span>. The data points will <span style="color:orange;font-weight:bold;">follow Gaussian distribution</span> with <span style="color:orange;font-weight:bold;">5% noise</span> and <span style="color:orange;font-weight:bold;">belong to 4 clusters</span>. <span style="color:orange;font-weight:bold;">Compare the performance</span> of the following clustering methods in terms of precision, recall, and F1. <span style="color:red;font-weight:bold;">(6)</span></h2><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>if(!require(stream))
  install.packages(&quot;stream&quot;)  
library(stream)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>stream &lt;- DSD_Gaussians(k = 4, d = 2, noise = .05, p = c(0.9, .5, .3, .1))
stream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="a-use-reservoir-sampling-to-sample-200-data-points-from-500-data-points-of-the-stream-use-k-means-to-cluster-the-points-in-the-reservoir-into-5-groups-and-use-100-points-from-the-stream-to-evaluate-the-performance-of-k-means" tabindex="-1"><a class="header-anchor" href="#a-use-reservoir-sampling-to-sample-200-data-points-from-500-data-points-of-the-stream-use-k-means-to-cluster-the-points-in-the-reservoir-into-5-groups-and-use-100-points-from-the-stream-to-evaluate-the-performance-of-k-means" aria-hidden="true">#</a> <strong>a.</strong> Use <span style="color:orange;font-weight:bold;">Reservoir sampling</span> to <span style="color:orange;font-weight:bold;">sample 200 data points</span> from 500 data points of the stream. Use <span style="color:orange;font-weight:bold;">K-means</span> to cluster the points in the reservoir into <span style="color:orange;font-weight:bold;">5 groups</span>, and use <span style="color:orange;font-weight:bold;">100 points</span> from the stream to <span style="color:orange;font-weight:bold;">evaluate the performance of K-means</span>.</h3><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>Reservoir_Kmeans = DSC_TwoStage(
  micro = DSC_Sample(k = 200), 
  macro = DSC_Kmeans(k = 4)
)
update(Reservoir_Kmeans, stream, n=500)
plot(Reservoir_Kmeans)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>evaluate_static(Reservoir_Kmeans, 
                stream, 
                measure =c(&quot;f1&quot;, &quot;precision&quot;, &quot;recall&quot;), 
                n =100
)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b-use-windowing-method-to-get-200-data-points-from-500-data-points-of-the-stream-use-k-means-to-cluster-the-points-in-the-window-into-5-groups-and-use-100-points-from-the-stream-to-evaluate-the-performance-of-k-means" tabindex="-1"><a class="header-anchor" href="#b-use-windowing-method-to-get-200-data-points-from-500-data-points-of-the-stream-use-k-means-to-cluster-the-points-in-the-window-into-5-groups-and-use-100-points-from-the-stream-to-evaluate-the-performance-of-k-means" aria-hidden="true">#</a> <strong>b.</strong> Use <span style="color:orange;font-weight:bold;">Windowing method</span> to <span style="color:orange;font-weight:bold;">get 200 data points</span> from 500 data points of the stream. Use <span style="color:orange;font-weight:bold;">K-means</span> to cluster the points in the window into <span style="color:orange;font-weight:bold;">5 groups</span>, and use <span style="color:orange;font-weight:bold;">100 points</span> from the stream to <span style="color:orange;font-weight:bold;">evaluate the performance of K-means.</span></h3><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>Window_Kmeans = DSC_TwoStage(
  micro = DSC_Window(horizon = 200), 
  macro = DSC_Kmeans(k = 5)
)
update(Window_Kmeans, stream, n=500)
#Window_Kmeans

plot(Window_Kmeans, stream)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>evaluate_static(
  Window_Kmeans, 
  stream,
  measure = c(&quot;f1&quot;,&quot;precision&quot;,&quot;recall&quot;), 
  n =100
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-apply-the-d-stream-clustering-method-to-500-points-from-the-stream-with-gridsize-0-1-and-use-100-points-from-the-stream-to-evaluate-the-performance-of-d-stream" tabindex="-1"><a class="header-anchor" href="#c-apply-the-d-stream-clustering-method-to-500-points-from-the-stream-with-gridsize-0-1-and-use-100-points-from-the-stream-to-evaluate-the-performance-of-d-stream" aria-hidden="true">#</a> <strong>c.</strong> Apply the <span style="color:orange;font-weight:bold;">D-Stream clustering method</span> to 500 points from the stream with <code>gridsize=0.1</code>, and use 100 points from the stream to <span style="color:orange;font-weight:bold;">evaluate the performance</span> of D-stream.</h3><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>dstream &lt;- DSC_DStream(gridsize = .1, Cm = 1.2)
update(dstream, stream, n = 500)
plot(dstream, stream)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>evaluate_static(
  dstream, 
  stream,
  measure = c(&quot;f1&quot;,&quot;precision&quot;,&quot;recall&quot;), 
  n =100
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-explain-a-real-world-application-of-geographical-information-system-4" tabindex="-1"><a class="header-anchor" href="#_5-explain-a-real-world-application-of-geographical-information-system-4" aria-hidden="true">#</a> 5. Explain a <span style="color:orange;font-weight:bold;">real-world application of geographical information system</span>. <span style="color:red;font-weight:bold;">(4)</span></h2><pre><code>QGIS (Quantum GIS) is a powerful and open-source Geographical Information System (GIS) software that provides a comprehensive set     of tools for managing, analyzing, and visualizing geographic and spatial data.

It is widely used for a variety of applications, from mapping and cartography to spatial analysis and data management.

Qgis allows users to import and manage kinds of data, and also provides a wide range of geospatial analysis tools for spatial     queries, buffer analysis, spatial joins, proximity analysis, etc. Users can also create high-quality maps with symbols, labels and     styling options. Besides, Qgis is also high customizable that allow users to adapt it to their specific needs.

The most important is that the Qgis is also an open source and community-driven software. It is freely available for everyone.     Another important point is that it&#39;s a cross-platform that is available for multiple operating system.
</code></pre><h2 id="_6-use-spatial-data-analysis-packages-in-r-do-the-following-tasks-10" tabindex="-1"><a class="header-anchor" href="#_6-use-spatial-data-analysis-packages-in-r-do-the-following-tasks-10" aria-hidden="true">#</a> 6. Use spatial data analysis packages in R do the following tasks. <span style="color:red;font-weight:bold;">(10)</span></h2><h3 id="a-draw-a-map-of-australia-where-each-city-is-represented-as-a-dot-highlight-cities-with-population-more-than-one-million-people-map-should-have-only-the-borders-at-country-and-state-levels" tabindex="-1"><a class="header-anchor" href="#a-draw-a-map-of-australia-where-each-city-is-represented-as-a-dot-highlight-cities-with-population-more-than-one-million-people-map-should-have-only-the-borders-at-country-and-state-levels" aria-hidden="true">#</a> a. <span style="color:orange;font-weight:bold;">Draw a map</span> of Australia where each <span style="color:orange;font-weight:bold;">city is represented as a dot</span>. <span style="color:orange;font-weight:bold;">Highlight cities</span> with <span style="color:orange;font-weight:bold;">population more than one million people</span>. Map should have only the <span style="color:orange;font-weight:bold;">borders at country and state levels</span>.</h3><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>if(!require(terra))
  install.packages(&quot;terra&quot;)
library(terra)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/data/unisa/AdvancedAnalytic2/assignment2/Australia_population.zip">Population shapefile</a></p><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>filename &lt;- paste0(getwd(),&quot;/SA2_2021_AUST_SHP_GDA2020/SA2_2021_AUST_GDA2020.shp&quot;)
#basename(filename)
ausvec &lt;- vect(filename)
# filter out all empty geometry
ausvec &lt;- ausvec[!is.na(ausvec$AREASQKM21)]

# dissolve based states level
ausvecAgg &lt;- aggregate(ausvec, by=&quot;STE_NAME21&quot;)

#load population data
auspop &lt;- vect(paste0(getwd(),&quot;/Australia_population.shp&quot;))

#plot Australia with borders at country and state levels
plot(ausvecAgg)

# plot cities with less than 1 million population
plot(auspop[as.integer(auspop$population) &lt; 1000000], add=TRUE, cex = 0.1)
# plot cities with greater than 1 million population, and highlight
plot(auspop[as.integer(auspop$population) &gt;= 1000000], add=TRUE, col=&quot;red&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b-use-the-shapefile-provided-in-the-course-website-to-draw-a-map-of-south-australia-keep-all-borders-in-the-map-use-a-colour-palette-to-highlight-the-statistical-areas-level-4-sa4" tabindex="-1"><a class="header-anchor" href="#b-use-the-shapefile-provided-in-the-course-website-to-draw-a-map-of-south-australia-keep-all-borders-in-the-map-use-a-colour-palette-to-highlight-the-statistical-areas-level-4-sa4" aria-hidden="true">#</a> b. Use the <span style="color:orange;font-weight:bold;">shapefile</span> provided in the course website to <span style="color:orange;font-weight:bold;">draw a map of “South Australia”</span>. <span style="color:orange;font-weight:bold;">Keep all borders in the map</span>. Use a colour palette to <span style="color:orange;font-weight:bold;">highlight the statistical areas level 4 (SA4)</span>.</h3><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># Plot South Australia
# select data of South Australia
sa &lt;- ausvec[ausvec$STE_NAME21 == &quot;South Australia&quot;]
plot(sa, c(&#39;SA4_NAME21&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-create-a-spatial-vector-of-greater-adelaide-aggregate-the-polygons-to-draw-a-map-that-shows-only-the-borders-for-statistical-areas-level-3-sa3" tabindex="-1"><a class="header-anchor" href="#c-create-a-spatial-vector-of-greater-adelaide-aggregate-the-polygons-to-draw-a-map-that-shows-only-the-borders-for-statistical-areas-level-3-sa3" aria-hidden="true">#</a> c. <span style="color:orange;font-weight:bold;">Create a spatial vector of “Greater Adelaide”</span>. Aggregate the polygons to draw a map that shows <span style="color:orange;font-weight:bold;">only the borders</span> for statistical areas <span style="color:orange;font-weight:bold;">level 3 (SA3)</span>.</h3><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>greater_adelaide &lt;- ausvec[ausvec$GCC_NAME21 == &quot;Greater Adelaide&quot;]
# dissolve based on SA4 level
greater_adelaide.sa3Agg &lt;- aggregate(greater_adelaide, by=&quot;SA3_NAME21&quot;)

#plot only the level 3 border of Greater Adelaide
plot(greater_adelaide.sa3Agg)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="d-for-this-point-you-need-to-check-the-data-in-crimecounts-csv-available-in-the-course-website" tabindex="-1"><a class="header-anchor" href="#d-for-this-point-you-need-to-check-the-data-in-crimecounts-csv-available-in-the-course-website" aria-hidden="true">#</a> d. For this point you need to check the data in “crimeCounts.csv” available in the course website.</h3><h4 id="a-use-the-variable-sa3-name21-to-obtain-a-spatial-vector-of-salisbury" tabindex="-1"><a class="header-anchor" href="#a-use-the-variable-sa3-name21-to-obtain-a-spatial-vector-of-salisbury" aria-hidden="true">#</a> a. Use the variable <span style="color:orange;font-weight:bold;">“SA3_NAME21”</span> to obtain a spatial vector of “Salisbury”.</h4><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>## a
salibury &lt;- ausvec[ausvec$SA3_NAME21 == &quot;Salisbury&quot;]
plot(salibury)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="b-create-a-new-attribute-with-the-name-crimecounts-containing-the-offence-count-july-2022-–-june-2023-for-the-suburbs-in-salisbury-spatial-vector" tabindex="-1"><a class="header-anchor" href="#b-create-a-new-attribute-with-the-name-crimecounts-containing-the-offence-count-july-2022-–-june-2023-for-the-suburbs-in-salisbury-spatial-vector" aria-hidden="true">#</a> b. <span style="color:orange;font-weight:bold;">Create a new attribute</span> with the name crimeCounts containing the offence count (July 2022 – June 2023) for the suburbs in Salisbury spatial vector.</h4><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>## b
# load crime data
crime_count &lt;- read.csv(&#39;crimeCounts.csv&#39;)
# rename columns
names(crime_count) &lt;- c(&#39;id&#39;, &#39;suburb&#39;, &#39;crimeCounts&#39;)
# convert to lower case for easy to compare
crime_count$lowerSub &lt;- tolower(crime_count$suburb)

# create a suburb dataframe for merging
suburb.df &lt;- data.frame(
  &quot;lowerSub&quot; = tolower(salibury$SA2_NAME21)
)
suburb.df &lt;- left_join(suburb.df, crime_count, by=&quot;lowerSub&quot;)

#assign crimeCounts for the suburbs in Salisbury
salibury$crimeCounts &lt;- suburb.df$crimeCounts

# show the count and suburbs
data.frame(
  &quot;suburb&quot; = salibury$SA2_NAME21,
  &quot;crimeCounts&quot; = salibury$crimeCounts
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c-create-a-spatial-raster-to-display-the-crimecounts-in-salisbury-select-a-colour-palette-so-that-high-crimecounts-are-represented-in-red-colour" tabindex="-1"><a class="header-anchor" href="#c-create-a-spatial-raster-to-display-the-crimecounts-in-salisbury-select-a-colour-palette-so-that-high-crimecounts-are-represented-in-red-colour" aria-hidden="true">#</a> c. <span style="color:orange;font-weight:bold;">Create a spatial raster</span> to <span style="color:orange;font-weight:bold;">display the crimeCounts</span> in Salisbury. Select a colour palette so that <span style="color:orange;font-weight:bold;">high crimeCounts</span> are represented <span style="color:orange;font-weight:bold;">in red colour</span>.</h4><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>
## c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="d-show-salisbury-suburb-names-and-borders-in-the-map" tabindex="-1"><a class="header-anchor" href="#d-show-salisbury-suburb-names-and-borders-in-the-map" aria-hidden="true">#</a> d. Show <span style="color:orange;font-weight:bold;">Salisbury</span> suburb <span style="color:orange;font-weight:bold;">names</span> and <span style="color:orange;font-weight:bold;">borders</span> in the map.</h4><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>## d
plot(salibury, c(&#39;SA2_NAME21&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="e-create-a-html-page-with-an-interactive-map-containing-the-markers-of-yourtop-5-restaurants-in-adelaide-include-in-your-report-a-screenshot-of-the-interactive-map-upload-thehtml-as-additional-file-in-your-submission" tabindex="-1"><a class="header-anchor" href="#e-create-a-html-page-with-an-interactive-map-containing-the-markers-of-yourtop-5-restaurants-in-adelaide-include-in-your-report-a-screenshot-of-the-interactive-map-upload-thehtml-as-additional-file-in-your-submission" aria-hidden="true">#</a> e. Create a <span style="color:orange;font-weight:bold;">html page</span> with an <span style="color:orangefont-weight:bold;">interactive map</span> containing the <span style="color:orange;font-weight:bold;">markers</span> of your<span style="color:orange;font-weight:bold;">top 5 restaurants in Adelaide</span>. Include in your <span style="color:orangefont-weight:bold;">report a screenshot of the interactive map</span>. <span style="color:orange;font-weight:bold;">Upload thehtml</span> as additional file in your submission.</h3><p>I implemented using two methods, both of the approaches are based on leaflet library.</p><ol><li>Using leaflet package in R to create an interactive map.</li><li>Using leaflet library to create a single web page app.</li></ol><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>if(!require(leaflet))
  install.packages(&quot;leaflet&quot;)
if(!require(sf))
  install.packages(&quot;sf&quot;)

library(sf)
library(leaflet)

# Create a leaflet map
leaflet() %&gt;%
  addTiles() %&gt;%  # Add a basemap
  addMarkers(lng = 138.60956081250663,lat = -34.92074609311045,popup = &quot;Schnithouse Rundle St&quot;) %&gt;%
  addMarkers(lng = 138.59883250622383,lat = -34.924407169226825,popup = &quot;GEORGES&quot;) %&gt;%
  addMarkers(lng = 138.5941120067306,lat = -34.92806706283753,popup = &quot;Nu Thai Restaurant&quot;) %&gt;%
  addMarkers(lng = 138.6006364073467, lat = -34.932289053377616, popup = &quot;La Trattoria Restaurant &amp; Pizza Bar&quot;) %&gt;%
  addMarkers(lng = 138.61282628115364, lat = -34.93249827609448, popup = &quot;Ballaboosta&quot;) %&gt;%
  addMarkers(lng = 138.62167389866696, lat = -34.944179031545026, popup = &quot;Fumo Restaurant&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/data/unisa/AdvancedAnalytic2/assignment2/assign2-notebook.Rmd">Final Result</a></p>`,42);function k(A,S){const i=n("ExternalLinkIcon"),o=n("PDF"),l=n("RouterLink");return d(),c("div",null,[h,e("p",null,[e("a",p,[a("Assignment 2 - Student Portal"),t(i)])]),v,e("details",b,[g,t(o,{url:"/data/unisa/AdvancedAnalytic2/assignment2/Assignment 2_Oct2023.pdf",ratio:"1.4"})]),f,w,y,_,x,q,R,e("p",null,[t(l,{to:"/data/unisa/AdvancedAnalytic2/assignment2/assign2-notebook.html"},{default:u(()=>[a("Final Result HTML")]),_:1})])])}const D=r(m,[["render",k],["__file","assignment2.html.vue"]]);export{D as default};
