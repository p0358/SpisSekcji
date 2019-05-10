<template>
  <pre
    style="color:#000000;background:#ffffff;"
  ><span style="color:#800000; font-weight:bold; ">var</span> sections<span style="color:#808030; ">,</span> taggroups<span style="color:#800080; ">;</span>
await fetch<span style="color:#808030; ">(</span>
        <span style="color:#800000; ">'</span><span
  style="color:#0000e6; "
>https://api.github.com/gists/e6fe59c222ff344652706429007c018b</span><span
  style="color:#800000; "
>'</span>
    <span style="color:#808030; ">)</span>
    <span style="color:#808030; ">.</span>then<span style="color:#808030; ">(</span>response <span style="color:#808030; ">=</span><span style="color:#808030; ">></span> response<span style="color:#808030; ">.</span>json<span style="color:#808030; ">(</span><span style="color:#808030; ">)</span><span style="color:#808030; ">)</span>
    <span style="color:#808030; ">.</span>then<span style="color:#808030; ">(</span>output <span style="color:#808030; ">=</span><span style="color:#808030; ">></span>
        <span style="color:#797997; ">JSON</span><span style="color:#808030; ">.</span><span style="color:#800000; font-weight:bold; ">parse</span><span style="color:#808030; ">(</span>output<span style="color:#808030; ">.</span>files<span style="color:#808030; ">[</span><span style="color:#800000; ">'</span><span style="color:#0000e6; ">sectionspreview.json</span><span style="color:#800000; ">'</span><span style="color:#808030; ">]</span><span style="color:#808030; ">.</span>content<span style="color:#808030; ">)</span>
    <span style="color:#808030; ">)</span>
    <span style="color:#808030; ">.</span>then<span style="color:#808030; ">(</span>output <span style="color:#808030; ">=</span><span style="color:#808030; ">></span> <span style="color:#808030; ">(</span>sections <span style="color:#808030; ">=</span> <span style="color:#797997; ">Array</span><span style="color:#808030; ">.</span>from<span style="color:#808030; ">(</span>output<span style="color:#808030; ">.</span>sections<span style="color:#808030; ">)</span><span style="color:#808030; ">)</span><span style="color:#808030; ">)</span>

await fetch<span style="color:#808030; ">(</span>
        <span style="color:#800000; ">'</span><span
  style="color:#0000e6; "
>https://api.github.com/gists/834ab2b54e4cbc39366402e619137d77</span><span
  style="color:#800000; "
>'</span>
    <span style="color:#808030; ">)</span>
    <span style="color:#808030; ">.</span>then<span style="color:#808030; ">(</span>response <span style="color:#808030; ">=</span><span style="color:#808030; ">></span> response<span style="color:#808030; ">.</span>json<span style="color:#808030; ">(</span><span style="color:#808030; ">)</span><span style="color:#808030; ">)</span>
    <span style="color:#808030; ">.</span>then<span style="color:#808030; ">(</span>output <span style="color:#808030; ">=</span><span style="color:#808030; ">></span>
        <span style="color:#797997; ">JSON</span><span style="color:#808030; ">.</span><span style="color:#800000; font-weight:bold; ">parse</span><span style="color:#808030; ">(</span>output<span style="color:#808030; ">.</span>files<span style="color:#808030; ">[</span><span style="color:#800000; ">'</span><span style="color:#0000e6; ">taggroupspreview.json</span><span style="color:#800000; ">'</span><span style="color:#808030; ">]</span><span style="color:#808030; ">.</span>content<span style="color:#808030; ">)</span>
    <span style="color:#808030; ">)</span>
    <span style="color:#808030; ">.</span>then<span style="color:#808030; ">(</span>output <span style="color:#808030; ">=</span><span style="color:#808030; ">></span> <span style="color:#808030; ">(</span>taggroups <span style="color:#808030; ">=</span> <span style="color:#797997; ">Array</span><span style="color:#808030; ">.</span>from<span style="color:#808030; ">(</span>output<span style="color:#808030; ">.</span>taggroups<span style="color:#808030; ">)</span><span style="color:#808030; ">)</span><span style="color:#808030; ">)</span>
</pre>
</template>
