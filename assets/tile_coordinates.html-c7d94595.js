import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-e17a1835.js";const e={},p=t(`<h2 id="tile-coordinates" tabindex="-1"><a class="header-anchor" href="#tile-coordinates" aria-hidden="true">#</a> Tile Coordinates</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math

<span class="token triple-quoted-string string">&#39;&#39;&#39;
The code of quad
-------
3  |  2
-------
0  |  1
-------
The first layer of the earth will be split into 
| 0 | 1 |


---------------------------------------------------
The code of WMTS will start from the left-top corner.
The zero layer will split into

| 0-0-0 | 0-1-0 |

The first layer 
| 1-0-0 | 1-1-0 | 1-2-0 | 1-3-0 |
---------------------------------
| 1-0-1 | 1-1-1 | 1-2-1 | 1-3-1 |
&#39;&#39;&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">tile_util</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__getGeojsonTemplate__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;FeatureCollection&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> name<span class="token punctuation">,</span>
            <span class="token string">&quot;crs&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;urn:ogc:def:crs:OGC:1.3:CRS84&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&quot;features&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    
    <span class="token keyword">def</span> <span class="token function">WMTS2Quad</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> ilayer<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        @desc Convert WMTS index into quad index
        @param ilayer WMTS layer number (from 0)
        @param row    WMTS layer tiley number
        @param col    WMTS layer tilex number
        @return The quad index correspond to wmts index
        &#39;&#39;&#39;</span>
        offset <span class="token operator">=</span> <span class="token number">180</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">**</span>ilayer
        lat <span class="token operator">=</span> <span class="token number">90</span> <span class="token operator">-</span> <span class="token punctuation">(</span>row<span class="token operator">+</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token operator">*</span>offset
        lng <span class="token operator">=</span> <span class="token punctuation">(</span>col<span class="token operator">+</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token operator">*</span>offset <span class="token operator">-</span> <span class="token number">180</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>getTileQuad<span class="token punctuation">(</span>lng<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> ilayer<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">Quad2WMTS</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> quad<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        @desc Convert quad index into WMTS index
        @parm quad quad index
        @return The WMTS index (layer, col/x, row/y)
        &#39;&#39;&#39;</span>
        tilew <span class="token operator">=</span> <span class="token number">360</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">**</span><span class="token builtin">len</span><span class="token punctuation">(</span>quad<span class="token punctuation">)</span><span class="token punctuation">)</span>
        centerx <span class="token operator">=</span> <span class="token number">0</span>
        centery <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>quad<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            tilew <span class="token operator">=</span> <span class="token number">360</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">**</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> quad<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span>
                    centerx <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">90</span>
                    centery <span class="token operator">=</span> <span class="token number">0</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    centerx <span class="token operator">=</span> <span class="token number">90</span>
                    centery <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> quad<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span>
                    centerx <span class="token operator">-=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                    centery <span class="token operator">-=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                <span class="token keyword">if</span> quad<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span>
                    centerx <span class="token operator">+=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                    centery <span class="token operator">-=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                <span class="token keyword">if</span> quad<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span>
                    centerx <span class="token operator">+=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                    centery <span class="token operator">+=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                <span class="token keyword">if</span> quad<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">:</span>
                    centerx <span class="token operator">-=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                    centery <span class="token operator">+=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
        wmtsl <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>quad<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
        wmts_tilew <span class="token operator">=</span> <span class="token number">180</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">**</span>wmtsl<span class="token punctuation">)</span>
        <span class="token comment">#print(centerx, centery, wmts_tilew)</span>
        tilex <span class="token operator">=</span> math<span class="token punctuation">.</span>floor<span class="token punctuation">(</span><span class="token punctuation">(</span>centerx<span class="token operator">+</span><span class="token number">180</span><span class="token punctuation">)</span><span class="token operator">/</span>wmts_tilew<span class="token punctuation">)</span>
        tiley <span class="token operator">=</span> math<span class="token punctuation">.</span>floor<span class="token punctuation">(</span><span class="token operator">-</span><span class="token punctuation">(</span>centery<span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token operator">/</span>wmts_tilew<span class="token punctuation">)</span>
        <span class="token keyword">return</span> wmtsl<span class="token punctuation">,</span> tilex<span class="token punctuation">,</span> tiley
    
    <span class="token comment"># Get the sub block list of quad until the specified level</span>
    <span class="token keyword">def</span> <span class="token function">getWMTSSubTile</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> quad<span class="token punctuation">,</span> level<span class="token punctuation">)</span><span class="token punctuation">:</span>
        rc <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>quad<span class="token punctuation">)</span> <span class="token operator">&lt;</span> level<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
            rc<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>self<span class="token punctuation">.</span>getWMTSSubTile<span class="token punctuation">(</span>quad<span class="token operator">+</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> level<span class="token punctuation">)</span><span class="token punctuation">)</span>
            rc<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>self<span class="token punctuation">.</span>getWMTSSubTile<span class="token punctuation">(</span>quad<span class="token operator">+</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> level<span class="token punctuation">)</span><span class="token punctuation">)</span>
            rc<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>self<span class="token punctuation">.</span>getWMTSSubTile<span class="token punctuation">(</span>quad<span class="token operator">+</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> level<span class="token punctuation">)</span><span class="token punctuation">)</span>
            rc<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>self<span class="token punctuation">.</span>getWMTSSubTile<span class="token punctuation">(</span>quad<span class="token operator">+</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> level<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> rc
        <span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>quad<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> level<span class="token punctuation">:</span>
            <span class="token keyword">return</span> rc
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>quad <span class="token operator">+</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> quad <span class="token operator">+</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> quad <span class="token operator">+</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> quad <span class="token operator">+</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
    
    <span class="token comment"># Get the quad number on specified level according to latitude and longtitude.</span>
    <span class="token keyword">def</span> <span class="token function">getTileQuad</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> lng<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> level<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">#level += 1 # Because of quad start from 0, thus the number of quad should plus 1</span>
        minx <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">180</span>
        maxx <span class="token operator">=</span> <span class="token number">180</span>
        miny <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">90</span>
        maxy <span class="token operator">=</span> <span class="token number">90</span>
        
        centerx <span class="token operator">=</span> <span class="token number">0</span>
        centery <span class="token operator">=</span> <span class="token number">0</span>
        tilew <span class="token operator">=</span> <span class="token number">180</span>
        ret <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token keyword">for</span> l <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> l <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> lng <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    centerx <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">90</span>
                    centery <span class="token operator">=</span> <span class="token number">0</span>
                    ret <span class="token operator">+=</span> <span class="token string">&#39;0&#39;</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    centerx <span class="token operator">=</span> <span class="token number">90</span>
                    centery <span class="token operator">=</span> <span class="token number">0</span>
                    ret <span class="token operator">+=</span> <span class="token string">&#39;1&#39;</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> lng <span class="token operator">&lt;</span> centerx <span class="token keyword">and</span> lat <span class="token operator">&lt;</span> centery<span class="token punctuation">:</span>
                    ret <span class="token operator">+=</span> <span class="token string">&#39;0&#39;</span>
                    centerx <span class="token operator">-=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                    centery <span class="token operator">-=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                <span class="token keyword">elif</span> lng <span class="token operator">&gt;</span> centerx <span class="token keyword">and</span> lat <span class="token operator">&lt;</span> centery<span class="token punctuation">:</span>
                    ret <span class="token operator">+=</span> <span class="token string">&#39;1&#39;</span>
                    centerx <span class="token operator">+=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                    centery <span class="token operator">-=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                <span class="token keyword">elif</span> lng <span class="token operator">&gt;</span> centerx <span class="token keyword">and</span> lat <span class="token operator">&gt;</span> centery<span class="token punctuation">:</span>
                    ret <span class="token operator">+=</span> <span class="token string">&#39;2&#39;</span>
                    centerx <span class="token operator">+=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                    centery <span class="token operator">+=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    ret <span class="token operator">+=</span> <span class="token string">&#39;3&#39;</span>
                    centerx <span class="token operator">-=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
                    centery <span class="token operator">+=</span> tilew<span class="token operator">/</span><span class="token number">2</span>
            tilew <span class="token operator">/=</span> <span class="token number">2</span>
        <span class="token keyword">return</span> ret
    
    <span class="token keyword">def</span> <span class="token function">getBoundingBox</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> quad<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Get the bounding box of quad block
        &#39;&#39;&#39;</span>
        l<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token operator">=</span> self<span class="token punctuation">.</span>Quad2WMTS<span class="token punctuation">(</span>quad<span class="token punctuation">)</span>
        tilew  <span class="token operator">=</span> <span class="token number">180</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">**</span>l<span class="token punctuation">)</span>
        maxx <span class="token operator">=</span> x<span class="token operator">*</span>tilew <span class="token operator">+</span> tilew <span class="token operator">-</span> <span class="token number">180</span>
        minx <span class="token operator">=</span> x<span class="token operator">*</span>tilew <span class="token operator">+</span> <span class="token number">0</span> <span class="token operator">-</span><span class="token number">180</span>
        maxy <span class="token operator">=</span> <span class="token number">90</span> <span class="token operator">-</span> <span class="token punctuation">(</span>y<span class="token operator">*</span>tilew <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">)</span>
        miny <span class="token operator">=</span> <span class="token number">90</span> <span class="token operator">-</span> <span class="token punctuation">(</span>y<span class="token operator">*</span>tilew <span class="token operator">+</span> tilew<span class="token punctuation">)</span>
        <span class="token keyword">return</span> minx<span class="token punctuation">,</span> maxx<span class="token punctuation">,</span> miny<span class="token punctuation">,</span> maxy 
    
    <span class="token keyword">def</span> <span class="token function">getGeojson</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> quad<span class="token punctuation">,</span> targetLevel <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Get the geojson of quad if the targetLevel is not specified.
        Get the geojson for all sub block until targetLevel regard as quad as a base block
        &#39;&#39;&#39;</span>
        rc <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">if</span> targetLevel<span class="token punctuation">:</span>
            rc <span class="token operator">=</span> self<span class="token punctuation">.</span>__getGeojsonTemplate__<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>quad<span class="token punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token punctuation">{</span>targetLevel<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
            subs <span class="token operator">=</span> self<span class="token punctuation">.</span>getWMTSSubTile<span class="token punctuation">(</span>quad<span class="token punctuation">,</span> targetLevel<span class="token punctuation">)</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> subs<span class="token punctuation">:</span>
                rc<span class="token punctuation">[</span><span class="token string">&#39;features&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>__getFeatureJson__<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            rc <span class="token operator">=</span> self<span class="token punctuation">.</span>__getGeojsonTemplate__<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>quad<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
            rc<span class="token punctuation">[</span><span class="token string">&#39;features&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>__getFeatureJson__<span class="token punctuation">(</span>quad<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> rc
    
    <span class="token keyword">def</span> <span class="token function">__getFeatureJson__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> quad<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Get the geojson of quad
        &#39;&#39;&#39;</span>
        ret <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Feature&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&quot;geometry&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;coordinates&quot;</span><span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        minx<span class="token punctuation">,</span> maxx<span class="token punctuation">,</span> miny<span class="token punctuation">,</span> maxy  <span class="token operator">=</span> self<span class="token punctuation">.</span>getBoundingBox<span class="token punctuation">(</span>quad<span class="token punctuation">)</span>
        ret<span class="token punctuation">[</span><span class="token string">&#39;geometry&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;coordinates&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>minx<span class="token punctuation">,</span> miny<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>minx<span class="token punctuation">,</span> maxy<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>maxx<span class="token punctuation">,</span> maxy<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>maxx<span class="token punctuation">,</span> miny<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>minx<span class="token punctuation">,</span> miny<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        ret<span class="token punctuation">[</span><span class="token string">&#39;properties&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;quad&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> quad
        ret<span class="token punctuation">[</span><span class="token string">&#39;properties&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;wmts&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>Quad2WMTS<span class="token punctuation">(</span>quad<span class="token punctuation">)</span>
        <span class="token keyword">return</span> ret

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function l(c,i){return s(),a("div",null,o)}const k=n(e,[["render",l],["__file","tile_coordinates.html.vue"]]);export{k as default};
