import{a as i}from"/mystmosa/build/_shared/chunk-QJ653JTH.js";import{a as o}from"/mystmosa/build/_shared/chunk-FEKTRG3M.js";import{c as r}from"/mystmosa/build/_shared/chunk-RAQ24GF6.js";var p=r((c,n)=>{var g=i(),s=o();n.exports=u;u.displayName="etlua";u.aliases=[];function u(a){a.register(g),a.register(s),function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",function(t){var l=/<%[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(t,"etlua",l)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"etlua")})}(a)}});export{p as a};