import{c as b}from"/mystmosa/build/_shared/chunk-RAQ24GF6.js";var f=b((E,i)=>{function m(e){return e?typeof e=="string"?e:e.source:null}function g(...e){return e.map(t=>m(t)).join("")}function h(e){let n={},t={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:g(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},t]});let s={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},o={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,s]};s.contains.push(a);let c={className:"",begin:/\\"/},r={className:"string",begin:/'/,end:/'/},l={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},p=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],u=e.SHEBANG({binary:`(${p.join("|")})`,relevance:10}),d={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z._-]+\b/,keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"},contains:[u,e.SHEBANG(),d,l,e.HASH_COMMENT_MODE,o,a,c,r,n]}}i.exports=h});export{f as a};
