import{c}from"/mystmosa/build/_shared/chunk-RAQ24GF6.js";var u=c((g,i)=>{function r(n){return n?typeof n=="string"?n:n.source:null}function l(...n){return n.map(t=>r(t)).join("")}function o(n){let e="HTTP/(2|1\\.[01])",s={className:"attribute",begin:l("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},a=[s,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+e+" \\d{3})",end:/$/,contains:[{className:"meta",begin:e},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:a}},{begin:"(?=^[A-Z]+ (.*?) "+e+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:e},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:a}},n.inherit(s,{relevance:0})]}}i.exports=o});export{u as a};