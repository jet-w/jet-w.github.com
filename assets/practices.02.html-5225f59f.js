import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as t}from"./app-85bd57df.js";const a={},s=t(`<h2 id="week-7-latent-dirichlet-allocation-practical-6" tabindex="-1"><a class="header-anchor" href="#week-7-latent-dirichlet-allocation-practical-6" aria-hidden="true">#</a> Week 7: Latent Dirichlet Allocation (Practical 6)</h2><p>In this practical, we will process the text data that includes the abstracts of all papers in the Journal of Statistical Software (JSS), up to 08/05/2010.<br> The JSS data is available as a list matrix in the package corpus.JSS.papers which can be<br> installed and loaded by:</p><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>### Download the collection of abstracts of the Journal of Statistical Software (JSS)
if(!require(corpus.JSS.papers))
    install.packages(&quot;corpus.JSS.papers&quot;, repos =&quot;http://datacube.wu.ac.at/&quot;, type=&quot;source&quot;)

data(&quot;JSS_papers&quot;, package = &quot;corpus.JSS.papers&quot;)
View(JSS_papers[1:2,])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="i-processing-text-data" tabindex="-1"><a class="header-anchor" href="#i-processing-text-data" aria-hidden="true">#</a> I. Processing text data</h3><p>In this section, we use the <code>tm</code> and <code>XML</code> packages to process the JSS dataset.</p><ol><li>Install the tm and XML packages.</li></ol><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>#I. Processing text data
# 1. Install the tm and XML packages
if(!require(tm))
    install.packages(&quot;tm&quot;)
if(!require(XML))
    install.packages(&quot;XML&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>We use only abstracts published up to 2010-08-05 and omit those containing nonASCII characters in the abstracts.</li></ol><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>#2. We use only abstracts published up to 2010-08-05
JSS_papers &lt;- JSS_papers[JSS_papers[,&quot;date&quot;] &lt; &quot;2010-08-05&quot;,]
# and omit those containing non-ASCII characters in the abstracts.
JSS_papers &lt;- JSS_papers[sapply(JSS_papers[, &quot;description&quot;], Encoding) == &quot;unknown&quot;,]
dim(JSS_papers)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Install SnowballC</p><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>if(!require(SnowballC))
    install.packages(&quot;SnowballC&quot;)
# Load libraries
library(&quot;tm&quot;)
library(&quot;XML&quot;)
library(&quot;SnowballC&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>We may want to create a function to remove any html markup. Following examples show how to do use XML to extract text only. (This part is only for demonstrative purposes and does not form part of the practical)</p></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>### Suppose you think some abstracts include html markups
## (e.g. sentence 1 &lt;a&gt;text&lt;/a&gt; sentence 2 &lt;div&gt;another text&lt;/div&gt;)
## you can use XML package to extract only text
dummyExample &lt;- &quot;sentence 1 &lt;a&gt;text&lt;/a&gt; sentence 2 &lt;div&gt;another text&lt;/div&gt;&quot;
doc &lt;- htmlTreeParse(dummyExample, asText = TRUE, trim = FALSE)
doc &lt;- xmlValue(xmlRoot(doc))
doc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># note: if text include math symbol &lt;, it will be confused by html markups
# causing a potential lost of text
dummyExample &lt;- &quot;number a &lt; number b&quot;
doc &lt;- htmlTreeParse(dummyExample, asText = TRUE, trim = FALSE)
doc &lt;- xmlValue(xmlRoot(doc))
doc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>The final data set contains 342 documents. Before analysis we transform it to a &quot;Corpus&quot; using package tm . HTML markup in the abstracts for greek letters, subscripting, etc., is removed using package XML . Install tm , XML and SnowballC packages to perform this task.</li></ol><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># following function remove any html markup in a character object
remove_HTML_markup &lt;- function(s) tryCatch({
        doc &lt;- htmlTreeParse(paste(&quot;&quot;, s), asText = TRUE, trim = FALSE),
        xmlValue(xmlRoot(doc))
    }, 
    error = function(s) 
s)
# create a corpus (def. A text corpus is a large and unstructured set of texts)
corpus &lt;- Corpus(VectorSource(sapply(JSS_papers[, &quot;description&quot;], remove_HTML_markup)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>The corpus is exported to a document-term matrix using function <code>DocumentTermMatrix()</code> from package <code>tm</code>. The terms are stemmed and the stop words, punctuation, numbers and terms of length less than 3 are removed using the control argument</li></ol><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># Create a Document Term Matrix (def. A document-term matrix is a
# mathematical matrix that describes the frequency of terms that
# occur in a collection of documents.)
Sys.setlocale(&quot;LC_COLLATE&quot;, &quot;C&quot;)
#this is just to make sure we will have the same results
JSS_dtm &lt;- DocumentTermMatrix(corpus
    , control = list(stemming = TRUE
        , stopwords = TRUE
        , minWordLength = 3
        , removeNumbers = TRUE
        , removePunctuation = TRUE))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>The mean term frequency-inverse document frequency (tf-idf) over documents containing this term is used to select the vocabulary. This measure allows to omit terms which have low frequency as well as those occurring in many documents. In this step, we need to install the package <code>stam</code>.</li></ol><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># Use the mean term frequency-inverse document frequency (tf-idf)
# to select the vocabulary
# In this step, we may need to install the package stam.
library(&quot;slam&quot;)
summary(col_sums(JSS_dtm))
term_tfidf &lt;- tapply(JSS_dtm$v/row_sums(JSS_dtm)[JSS_dtm$i],
                     JSS_dtm$j, mean) * log2(nDocs(JSS_dtm)/col_sums(JSS_dtm &gt; 0))
summary(term_tfidf)
# We only include terms which have a tf-idf value of at least 0.1
# which is a bit less than the median and ensures that the very
# frequent terms are omitted
JSS_dtm &lt;- JSS_dtm[,term_tfidf &gt;= 0.1]
JSS_dtm &lt;- JSS_dtm[row_sums(JSS_dtm) &gt; 0,]
summary(col_sums(JSS_dtm))
dim(JSS_dtm)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now we have 342 documents and 1690 terms</p><h3 id="ii-fitting-the-latent-dirichlet-allocation-lda-model" tabindex="-1"><a class="header-anchor" href="#ii-fitting-the-latent-dirichlet-allocation-lda-model" aria-hidden="true">#</a> II. Fitting the Latent Dirichlet Allocation (LDA) model</h3><p>In this section, we fit an LDA model with 30 unknown topics to the dataset using the topicmodels package. We need to install the topicmodels package to perform this step.</p><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>#II. Fitting the Latent Dirichlet Allocation (LDA) model
# fit an LDA model with 30 unknown topics to the dataset using the
# topicmodels package
if(!require(topicmodels))
    install.packages(&quot;topicmodels&quot;)
library(&quot;topicmodels&quot;)
k &lt;- 30
SEED &lt;- 2010
jss_TM &lt;- LDA(
    JSS_dtm, 
    k = k, 
    method = &quot;Gibbs&quot;, 
    control = list(seed = SEED, burnin = 1000, thin = 100, iter = 1000)
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>The most likely topic for each document is obtained by:</li></ol><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>#The most likely topic for each document is obtained by:
Topic &lt;- topics(jss_TM,1)
Topic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>In this case, the topic number 3 is the most likely topic for document number 6 (this can change due to randomness in the process)</p></div><ol start="2"><li>The five most frequent terms of each topic</li></ol><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>#The five most frequent terms of each topic
Terms &lt;- terms(jss_TM, 5)
Terms[,1:5] #list the frequent terms of the first 5 topics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),l=[s];function d(r,o){return i(),n("div",null,l)}const m=e(a,[["render",d],["__file","practices.02.html.vue"]]);export{m as default};
