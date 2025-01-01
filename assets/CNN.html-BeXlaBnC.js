import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o as r}from"./app-BoSEJaB0.js";const a="/assets/LocalRespectiveFields-Ch3gsee8.png",i={};function l(s,e){return r(),t("div",null,e[0]||(e[0]=[n('<h2 id="convolutional-neural-networks-cnn" tabindex="-1"><a class="header-anchor" href="#convolutional-neural-networks-cnn"><span>Convolutional Neural Networks(CNN)</span></a></h2><p>Convolutional Neural networks are designed to process data through multiple layers of arrays. This type of neural networks are used in applications like image recognition or face recognition.</p><p>The primary difference between CNN and any other ordinary neural network is that CNN takes input as a two dimensional array and operates directly on the images rather than focusing on feature extraction which other neural networks focus on.</p><p>The dominant approach of CNN includes solution for problems of recognition. Top companies like Google and Facebook have invested in research and development projects of recognition projects to get activities done with greater speed.</p><p>Every convolutional neural network includes three basic ideas −</p><ul><li>Local respective fields</li><li>Convolution</li><li>Pooling</li></ul><h3 id="local-respective-fields" tabindex="-1"><a class="header-anchor" href="#local-respective-fields"><span>Local Respective Fields</span></a></h3><p>CNN utilize spatial correlations that exists within the input data. Each in the concurrent layers of neural networks connects of some input neurons. This specific region is called Local Receptive Field. It only focusses on hidden neurons. The hidden neuron will process the input data inside the mentioned field not realizing the changes outside the specific boundary.</p><p>The diagram representation of generating local respective fields is mentioned below −<br><img src="'+a+'" alt="Alt text" loading="lazy"></p><h3 id="convolution" tabindex="-1"><a class="header-anchor" href="#convolution"><span>Convolution</span></a></h3><p>In the above figure, we observe that each connection learns a weight of hidden neuron with an associated connection with movement from one layer to another. Here, individual neurons perform a shift from time to time. This process is called <code>convolution</code>.</p><p>The mapping of connections from the input layer to the hidden feature map is defined as “shared weights” and bias included is called “shared bias”.</p><h3 id="pooling" tabindex="-1"><a class="header-anchor" href="#pooling"><span>Pooling</span></a></h3><p>Convolutional neural networks use pooling layers which are positioned immediately after CNN declaration. It takes the input from the user as a feature map which comes out convolutional networks and prepares a condensed feature map. Pooling layers help in creating layers with neurons of previous layers.</p><p>Implementation of PyTorch<br> Following steps are used to create a Convolutional Neural Network using PyTorch.</p><p>Step 1<br> Import the necessary packages for creating a simple neural network.</p><p>from torch.autograd import Variable<br> import torch.nn.functional as F<br> Step 2<br> Create a class with batch representation of convolutional neural network. Our batch shape for input x is with dimension of (3, 32, 32).</p><p>class SimpleCNN(torch.nn.Module):<br> def <strong>init</strong>(self):<br> super(SimpleCNN, self).<strong>init</strong>()<br> #Input channels = 3, output channels = 18<br> self.conv1 = torch.nn.Conv2d(3, 18, kernel_size = 3, stride = 1, padding = 1)<br> self.pool = torch.nn.MaxPool2d(kernel_size = 2, stride = 2, padding = 0)<br> #4608 input features, 64 output features (see sizing flow below)<br> self.fc1 = torch.nn.Linear(18 * 16 * 16, 64)<br> #64 input features, 10 output features for our 10 defined classes<br> self.fc2 = torch.nn.Linear(64, 10)<br> Step 3<br> Compute the activation of the first convolution size changes from (3, 32, 32) to (18, 32, 32).</p><p>Size of the dimension changes from (18, 32, 32) to (18, 16, 16). Reshape data dimension of the input layer of the neural net due to which size changes from (18, 16, 16) to (1, 4608).</p><p>Recall that -1 infers this dimension from the other given dimension.</p><p>def forward(self, x):<br> x = F.relu(self.conv1(x))<br> x = self.pool(x)<br> x = x.view(-1, 18 * 16 *16)<br> x = F.relu(self.fc1(x))<br> #Computes the second fully connected layer (activation applied later)<br> #Size changes from (1, 64) to (1, 10)<br> x = self.fc2(x)<br> return(x)</p><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2><p><a href="https://www.tutorialspoint.com/pytorch/pytorch_convolutional_neural_network.htm" target="_blank" rel="noopener noreferrer">PyTorch - Loading Data</a><br><a href="https://colab.research.google.com/drive/12YuZGPx5SK-sVn92IB_pBAxcAqHJx_cu?usp=sharing" target="_blank" rel="noopener noreferrer">My Practice</a></p>',23)]))}const h=o(i,[["render",l],["__file","CNN.html.vue"]]),u=JSON.parse(`{"path":"/techniques/coding/python/pytorch/CNN.html","title":"PyTorch - CNN","lang":"en-US","frontmatter":{"title":"PyTorch - CNN","date":"2024-12-27T00:00:00.000Z","author":"Haiyue","icon":"circle-dot","category":["pytorch"],"star":false,"sticky":false,"description":"Convolutional Neural Networks(CNN) Convolutional Neural networks are designed to process data through multiple layers of arrays. This type of neural networks are used in applica...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://jet-w.github.io/techniques/coding/python/pytorch/CNN.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"PyTorch - CNN"}],["meta",{"property":"og:description","content":"Convolutional Neural Networks(CNN) Convolutional Neural networks are designed to process data through multiple layers of arrays. This type of neural networks are used in applica..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:published_time","content":"2024-12-27T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PyTorch - CNN\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-27T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Convolutional Neural Networks(CNN)","slug":"convolutional-neural-networks-cnn","link":"#convolutional-neural-networks-cnn","children":[{"level":3,"title":"Local Respective Fields","slug":"local-respective-fields","link":"#local-respective-fields","children":[]},{"level":3,"title":"Convolution","slug":"convolution","link":"#convolution","children":[]},{"level":3,"title":"Pooling","slug":"pooling","link":"#pooling","children":[]}]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"readingTime":{"minutes":1.92,"words":577},"filePathRelative":"techniques/coding/python/pytorch/CNN.md","localizedDate":"December 27, 2024","excerpt":"<h2>Convolutional Neural Networks(CNN)</h2>\\n<p>Convolutional Neural networks are designed to process data through multiple layers of arrays. This type of neural networks are used in applications like image recognition or face recognition.</p>\\n<p>The primary difference between CNN and any other ordinary neural network is that CNN takes input as a two dimensional array and operates directly on the images rather than focusing on feature extraction which other neural networks focus on.</p>","autoDesc":true}`);export{h as comp,u as data};
