import{b as i}from"/mystmosa/build/_shared/chunk-RAQ24GF6.js";function y(n){let t=[],r=-1;for(;++r<n.length;)t[r]=f(n[r]);return o(e);function e(...l){let u=-1;for(;++u<t.length;)if(t[u].call(this,...l))return!0;return!1}}function a(n){return o(t);function t(r){let e;for(e in n)if(r[e]!==n[e])return!1;return!0}}function p(n){return o(t);function t(r){return r&&r.type===n}}function o(n){return t;function t(r,...e){return Boolean(r&&typeof r=="object"&&"type"in r&&Boolean(n.call(this,r,...e)))}}function h(){return!0}var f,c=i(()=>{f=function(n){if(n==null)return h;if(typeof n=="string")return p(n);if(typeof n=="object")return Array.isArray(n)?y(n):a(n);if(typeof n=="function")return o(n);throw new Error("Expected function, string, or object as test")}});var s=i(()=>{c()});export{f as a,s as b};
