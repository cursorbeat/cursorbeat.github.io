(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3NEd":function(t,e,r){var n=r("f4rR");t.exports=function(t){if(Array.isArray(t))return n(t)}},NnVc:function(t,e,r){var n=r("QtK2");t.exports={MDXRenderer:n}},NsLs:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},OO0L:function(t,e,r){var n=r("f4rR");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},QYxZ:function(t,e,r){var n=r("NsLs"),i=r("iKJU");function o(e,r,a){return i()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,r){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return r&&n(o,r.prototype),o},o.apply(null,arguments)}t.exports=o},QtK2:function(t,e,r){var n=r("QYxZ"),i=r("YhQ9"),o=r("a+Ak"),a=r("HXSV");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r("PEXJ"),s=r("8asn").mdx,p=r("nthU").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,o=a(t,["scope","children"]),l=p(e),f=u.useMemo((function(){if(!r)return null;var t=c({React:u,mdx:s},l),e=Object.keys(t),o=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(i(e),[""+r])).apply(void 0,[{}].concat(i(o)))}),[r,e]);return u.createElement(f,c({},o))}},XIj2:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},YhQ9:function(t,e,r){var n=r("3NEd"),i=r("XIj2"),o=r("OO0L"),a=r("l9Wn");t.exports=function(t){return n(t)||i(t)||o(t)||a()}},"a+Ak":function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},f4rR:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},iKJU:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},l9Wn:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},veJt:function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,i="/"===a.charAt(0))}return(i?"/":"")+(e=r(n(e.split("/"),(function(t){return!!t})),!i).join("/"))||"."},e.normalize=function(t){var o=e.isAbsolute(t),a="/"===i(t,-1);return(t=r(n(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&a&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),a=Math.min(i.length,o.length),l=a,c=0;c<a;c++)if(i[c]!==o[c]){l=c;break}var u=[];for(c=l;c<i.length;c++)u.push("..");return(u=u.concat(o.slice(l))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,n=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!i){n=o;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var r=function(t){"string"!=typeof t&&(t+="");var e,r=0,n=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){r=e+1;break}}else-1===n&&(i=!1,n=e+1);return-1===n?"":t.slice(r,n)}(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,r=0,n=-1,i=!0,o=0,a=t.length-1;a>=0;--a){var l=t.charCodeAt(a);if(47!==l)-1===n&&(i=!1,n=a+1),46===l?-1===e?e=a:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){r=a+1;break}}return-1===e||-1===n||0===o||1===o&&e===n-1&&e===r+1?"":t.slice(e,n)};var i="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r("j6yd"))},yihx:function(t,e,r){"use strict";r.r(e),r.d(e,"BLOG_POST_QUERY",(function(){return h}));var n=r("PEXJ"),i=r.n(n),o=r("3yDT"),a=r("Wbzz"),l=r("GaSA"),c=r.n(l),u=r("owBe"),s=r.n(u),p=r("NnVc"),f=function(){var t=Object(a.useStaticQuery)("2947493452"),e=t.me.childMdx.frontmatter,r=e.name,n=e.miniBio;e.portrait,e.email,e.handle;return i.a.createElement("div",{className:"author"},i.a.createElement("div",{className:"portrait"},i.a.createElement(c.a,{fluid:t.portrait.childImageSharp.fluid,title:"Adrian Grimm",alt:"photo of Adrian Grimm",style:{height:"80px",width:"80px",borderRadius:"100%"}})),i.a.createElement("div",{className:"myInfo"},i.a.createElement("h3",null,"By: ",r),i.a.createElement("p",null,n)))},m=r("tLem").b.div.withConfig({displayName:"BlogPostStyles__BlogPostPageWrapper",componentId:"sc-1ixde6m-0"})(["margin-top:100px;transition:",";background-color:",";width:100%;h1{font-size:3rem;}h2{font-size:1.7rem;margin:10px 0;}.published{margin-bottom:3px;}.mainpostimage{max-height:380px;object-position:center;text-align:center;img{display:block;max-width:1000px;max-height:380px;width:auto !important;height:auto !important;border:0 !important;}}.author{display:flex;flex-direction:row;margin-bottom:10px;align-items:center;div{height:100px;padding:10px;}.portrait{align-self:flex-start;}.myInfo{height:auto;}h3{margin:0 0 10px;}p{font-size:0.9rem;max-width:680px;}}.articelBody{img{border:5px solid black;}}.closing{margin:40px 60px 0;svg{transition:",";fill:",";width:65vw;height:auto;max-width:400px;}h3{margin-top:15px;margin-left:35px;}}@media (max-width:620px){.author{margin-bottom:10px;p{margin-bottom:0;font-size:0.8rem;}}.closing{margin:30px 15px 10px;svg{width:80vw;height:auto;max-width:380px;}}}"],(function(t){return t.theme.transition}),(function(t){return t.theme.bgColor}),(function(t){return t.theme.transition}),(function(t){return t.theme.textColor})),h=(r("veJt"),e.default=function(t){var e,r=t.path,n=t.data,a=n.mdx.frontmatter,l=a.type,u=a.title,h=a.slug,d=a.subtitle,g=(a.image,a.imageTitle),b=a.imageAlt,x=a.date;a.tags;return"blogPost"===l?e={page:""+l,title:""+u,description:n.mdx.excerpt,url:"https://blog.cursorbeat.dev/"+h,imgUrl:n.file.publicURL,imgAlt:b,breadcrumbs:[{name:"Blog",path:"/blog"},{name:""+u,path:"/blog/"+h}]}:"tutorial"===l&&(e={page:""+l,title:""+u,description:n.mdx.excerpt,url:"https://blog.cursorbeat.dev/"+h,imgUrl:n.file.publicURL,imgAlt:b,breadcrumbs:[{name:"Tutorials",path:"/tutorials"},{name:""+u,path:"/tutorials/"+h}]}),i.a.createElement(o.a,{seo:e,path:r,style:{textAlign:"left"}},i.a.createElement(m,null,i.a.createElement("h1",null,u),i.a.createElement("h2",null,d),i.a.createElement("p",{className:"published"},"Published: ",i.a.createElement(s.a,{date:x,format:"MMM DD, YYYY"})),n.mdx.timeToRead&&("tutorial"===l?i.a.createElement("p",null,"Approx. ",n.mdx.timeToRead+5," minutes to complete"):i.a.createElement("p",null,n.mdx.timeToRead," minute read")),i.a.createElement(f,null),i.a.createElement(c.a,{className:"mainpostimage",style:{marginBottom:"25px"},fluid:n.file.childImageSharp.fluid,alt:b,title:g}),i.a.createElement("div",{className:"articelBody"},i.a.createElement(p.MDXRenderer,null,n.mdx.body)),i.a.createElement("div",{className:"closing"},i.a.createElement("h3",null,"- CursorBeat.dev Blog"))))},"1608198226")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0ba48fb1657e1f2ddac7.js.map