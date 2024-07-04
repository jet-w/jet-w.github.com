import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c as i,b as t,d as e,e as r,f as d}from"./app-36a05399.js";const c="/data/techniques/AI/RAG/RAG.jpg",l={},u={href:"https://medium.com/@vladris/embeddings-and-vector-databases-732f9927b377",target:"_blank",rel:"noopener noreferrer"},h={href:"http://discussion.coggle.club/t/topic/30",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.youtube.com/watch?v=hjHN4TyBXt8",target:"_blank",rel:"noopener noreferrer"},g=t("br",null,null,-1),f={href:"https://huggingface.co/spaces/mteb/leaderboard",target:"_blank",rel:"noopener noreferrer"},p=d('<h2 id="how-rag-works" tabindex="-1"><a class="header-anchor" href="#how-rag-works" aria-hidden="true">#</a> How RAG Works</h2><figure><img src="'+c+'" alt="How RAG Works" tabindex="0" loading="lazy"><figcaption>How RAG Works</figcaption></figure><h2 id="categories-of-rag" tabindex="-1"><a class="header-anchor" href="#categories-of-rag" aria-hidden="true">#</a> Categories of RAG</h2><p>RAG can be classified into three classes according to the complexity, which are <code>Naive RAG</code>, <code>Advanced RAG</code> and <code>Modular RAG</code>.</p><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>Naive RAG</td><td>Naive RAG is the most basic form of RAG technology, also known as classic RAG. It <span style="color:orange;">includes three basic steps</span>: indexing, retrieval, and generation. The indexing stage divides the document library into short chunks and builds a vector index. The retrieval stage retrieves relevant document fragments based on the similarity between the question and the chunks. The generation stage generates answers to the questions based on the retrieved context.</td></tr><tr><td>Advanced RAG</td><td>Advanced RAG is an optimization and enhancement of Naive RAG. It <span style="color:orange;">includes additional processing steps, which are performed before and after data indexing and retrieval</span>. It includes more sophisticated data cleaning, document structure design, and metadata addition to improve text consistency, accuracy, and retrieval efficiency. It uses question rewriting, routing, and expansion to align semantic differences between questions and document blocks before retrieval. It avoids the &quot;Lost in the Middle&quot; phenomenon through re-ranking after retrieval, or shortens the window length through context filtering and compression.</td></tr><tr><td>Modular RAG</td><td>Modular RAG <span style="color:orange;">introduces more specific functional modules, such as query search engine, fusion of multiple answers, etc</span>. Technically, it integrates retrieval and fine-tuning, reinforcement learning, etc. In terms of process, RAG modules are designed and arranged, and a variety of different RAG modes appear. Providing greater flexibility, the system can select the appropriate combination of functional modules according to application requirements. The introduction of modular RAG makes the system more free and flexible, adapting to different scenarios and requirements.</td></tr></tbody></table><h2 id="key-components-in-rag" tabindex="-1"><a class="header-anchor" href="#key-components-in-rag" aria-hidden="true">#</a> Key Components in RAG</h2><table><thead><tr><th>Components</th><th>Description</th></tr></thead><tbody><tr><td>Intent Understanding</td><td>The Intent Understanding module is responsible for accurately grasping the user&#39;s queries, determining their intent and topic. It handles the ambiguity and non-standard nature of user questions, providing clear task objectives for subsequent processes.</td></tr><tr><td>Document Parsing</td><td>The Document Parsing module processes documents from various sources, including PDFs, PPTs, Neo4j, etc. This module converts document content into a structured format suitable for knowledge retrieval.</td></tr><tr><td>Document Indexing</td><td>The Document Indexing module segments parsed documents into short chunks and builds vector indexes or uses full-text indexing for text retrieval, enabling the system to quickly find document fragments relevant to user queries.</td></tr><tr><td>Vector Embedding</td><td>The Vector Embedding module maps content from document indexes into vector representations for similarity calculations. This helps the model understand relationships between documents better, improving the accuracy of knowledge retrieval.</td></tr><tr><td>Knowledge Retrieval</td><td>The Knowledge Retrieval module calculates similarity scores based on user queries and vector embeddings or text retrieval. This step ensures semantic relevance between queries and documents, ensuring accurate retrieval.</td></tr><tr><td>Re-ranking module</td><td>The Re-ranking module reorders the document library after knowledge retrieval to avoid the &quot;Lost in the Middle&quot; phenomenon, ensuring the most relevant document fragments appear first.</td></tr><tr><td>Large Model Answering</td><td>The Large Model Answering module uses large-scale language models to generate final answers. This module integrates retrieved contexts to produce coherent and accurate text responses.</td></tr><tr><td>Others</td><td>Additional functional modules can be introduced based on specific application requirements, such as query search engines, merging multiple answers, etc. Modular design enhances system flexibility, enabling selection of appropriate functional module combinations for different scenarios.</td></tr></tbody></table>',7);function b(v,y){const n=a("ExternalLinkIcon");return s(),i("div",null,[t("p",null,[e("All the RAG information refer to the "),t("a",u,[e("Document 1"),r(n)]),e(", "),t("a",h,[e("document 2"),r(n)]),e(" the "),t("a",m,[e("video"),r(n)])]),t("p",null,[e("The encoding is the key for the RAG."),g,t("a",f,[e("embedding solutions"),r(n)])]),p])}const x=o(l,[["render",b],["__file","RAG.html.vue"]]);export{x as default};
