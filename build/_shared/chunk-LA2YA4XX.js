import{a as u}from"/mystmosa/build/_shared/chunk-JIVCDPO2.js";import{a as s}from"/mystmosa/build/_shared/chunk-FEKTRG3M.js";import{c as p}from"/mystmosa/build/_shared/chunk-RAQ24GF6.js";var d=p((c,l)=>{var g=s(),o=u();l.exports=n;n.displayName="latte";n.aliases=[];function n(e){e.register(g),e.register(o),function(a){a.languages.latte={comment:/^\{\*[\s\S]*/,"latte-tag":{pattern:/(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,lookbehind:!0,alias:"important"},delimiter:{pattern:/^\{\/?|\}$/,alias:"punctuation"},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:a.languages.php}};var r=a.languages.extend("markup",{});a.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:a.languages.php}}}}}},r.tag),a.hooks.add("before-tokenize",function(t){if(t.language==="latte"){var i=/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;a.languages["markup-templating"].buildPlaceholders(t,"latte",i),t.grammar=r}}),a.hooks.add("after-tokenize",function(t){a.languages["markup-templating"].tokenizePlaceholders(t,"latte")})}(e)}});export{d as a};
