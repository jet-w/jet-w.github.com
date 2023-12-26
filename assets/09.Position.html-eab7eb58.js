import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as u,e as k,w as a,f as e,d as s,b as n}from"./app-9af45965.js";const r={},d=e(`<h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> Position</h2><ul><li>定位（position） <ul><li>定位式以各种更加高级的布局手段</li><li>通过定位可以将元素摆放到页面的任意位置</li><li>使用position属性来设置定位<br> 可选值：<br> static 默认值，元素式静止的，没有开启定位<br> relative 开启相对定位<br> absolute 开启元素的绝对定位<br> fixed 开启元素的固定定位<br> sticky 开启元素的粘滞定位</li></ul></li></ul><h2 id="relative-position" tabindex="-1"><a class="header-anchor" href="#relative-position" aria-hidden="true">#</a> Relative Position</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./reset.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
      <span class="token comment">/*
      - 相对定位：
        - 当元素的position开哦其relative，开启相对定位
        - 特点：
          1. 若不设置偏移量，元素位置不会发生任何变化
          2. 相对定位式参考元素在文档流中的位置进行定位的
          3. 相对定位会提升元素的层级
          4. 相对定位不会使元素脱离文档流
          5. 相对定位不会改变元素的性质（块/行内）

        偏移量（offset）
          top
          bottom
          left
          right
      */</span>

      <span class="token selector">.box1</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box2</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token comment">/* bottom: 100px; */</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box3</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="absolute-position" tabindex="-1"><a class="header-anchor" href="#absolute-position" aria-hidden="true">#</a> Absolute Position</h2>`,5),v=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"doctype"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text/css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("./reset.css"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
      `),n("span",{class:"token comment"},`/*
      - 绝对定位：
        - 当元素的position开启absolute ，开启绝对定位
        - 特点：
          1. 开启绝对定位，若不设置偏移量，元素位置不会发生变化
          2. 元素从文档流中脱离
          3. 绝对定位会改变元素的性质，行内变成块，块的高度被内容撑开
          4. 绝对定位回使元素提升一个层级
          5. 绝对定位元素使相对于包含块进行定位
            包含块（containing block）：
                -- 正常情况下：
                   包含块使离当前元素最近的祖先块元素
                -- 绝对定位的包含块：
                   包含块使离当前元素最近的开启定位的祖先元素，若所有祖先元素均未开启定位，则相对于整个网页（根元素）
                -- html（根元素、初始包含块）

        偏移量（offset）
          top
          bottom
          left
          right
      */`),s(`

      `),n("span",{class:"token selector"},".box1"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s("100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #bfa"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token selector"},".box2"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" orange"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"/* top: 50px; */"),s(`
        `),n("span",{class:"token comment"},"/* bottom: 100px; */"),s(`
        `),n("span",{class:"token comment"},"/* left: 100px; */"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token selector"},".box3"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" yellow"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"doctype"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text/css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("./reset.css"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
      `),n("span",{class:"token comment"},`/*
        水平布局：
          包含块宽度 = left + margin-left + border-left+padding-left + width + padding-right + border-right + margin-right + right

        当开启了绝对定位后：
          水平方向的布局等式就需要添加left 和right两个值
            此时规则和之前使一样，知识多了以上两个值
              当发生过度约束
                如果9搁置中没有auto，则自动调整right值以使等式满足
                若有auto，则自动调整auto的值以使等式成立
              可设置auto的值：
                margin width left right
              应为left和right的值默认使auto，所以如果不知道left和right则等式不满足使，会自动调整这两个值

              垂直方向布局的等式也必须满足
                包含块高度 = top + margin-top/bottom + padding-top/bottom + border-top/bottom + height
       */`),s(`
      `),n("span",{class:"token selector"},".box1"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 500px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s("500px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #bfa"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token selector"},".box2"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" orange"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"/* top: 50px; */"),s(`
        `),n("span",{class:"token comment"},"/* bottom: 100px; */"),s(`
        `),n("span",{class:"token comment"},"/* left: 100px; */"),s(`
        `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token selector"},".box3"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" pink"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"/* top: 50px; */"),s(`
        `),n("span",{class:"token comment"},"/* bottom: 100px; */"),s(`
        `),n("span",{class:"token comment"},"/* left: 100px; */"),s(`
        `),n("span",{class:"token comment"},`/* left: 0;
        right: 0;
        top: 0;
        bottom: 0; */`),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=e(`<h2 id="fixed-position" tabindex="-1"><a class="header-anchor" href="#fixed-position" aria-hidden="true">#</a> Fixed Position</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./reset.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
      <span class="token comment">/*
      - 固定定位
        - 当元素的position开启fixed，开启固定定位
        固定定位也是一种绝对定位，所以固定定位的大部分特点都和绝对定位一样
        - 特点：
          1. 开启绝对定位，若不设置偏移量，元素位置不会发生变化
          2. 元素从文档流中脱离
          3. 绝对定位会改变元素的性质，行内变成块，块的高度被内容撑开
          4. 绝对定位回使元素提升一个层级
          5. 绝对定位元素使相对于视口进行定位
            固定定位的元素不会随网页滚动而滚动

        偏移量（offset）
          top
          bottom
          left
          right
      */</span>

      <span class="token selector">.box1</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box2</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token comment">/* top: 50px; */</span>
        <span class="token comment">/* bottom: 100px; */</span>
        <span class="token comment">/* left: 100px; */</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box3</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-layer-position" tabindex="-1"><a class="header-anchor" href="#the-layer-position" aria-hidden="true">#</a> The layer position</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./reset.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
      <span class="token comment">/*
        对于开启了定位元素，可以通过z-index属性来指定元素的层级
          z-index需要一个整数作为参数，值越大元素层级越高，层级越高越优先显示

          * 如果元素层级一样，则优先显示靠下的元素
          * 祖先元素永远不会盖住后代元素

       */</span>
      <span class="token selector">.box1</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box2</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box3</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token selector">.box4</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.box5</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      4
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(h,y){const o=c("CodeTabs");return i(),u("div",null,[d,k(o,{id:"34",data:[{id:"basic"},{id:"layout"}]},{title0:a(({value:t,isActive:p})=>[s("basic")]),title1:a(({value:t,isActive:p})=>[s("layout")]),tab0:a(({value:t,isActive:p})=>[v]),tab1:a(({value:t,isActive:p})=>[m]),_:1}),b])}const f=l(r,[["render",g],["__file","09.Position.html.vue"]]);export{f as default};
