(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);const r="block pt-12 md:flex",s="pb-6 md:w-full md:max-w-150 md:p-0",c="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",i="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20",m="text-blue-500 underline hover:text-blue-700 transition";t.a=e=>{let{title:t,children:a,id:n}=e;return l.a.createElement("div",{className:r,id:n},l.a.createElement("div",{className:s},l.a.createElement("h2",{className:c},l.a.createElement("a",{href:"#"+n,className:m},t))),l.a.createElement("div",{className:i},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l);const s="mb-6",c="font-semibold text-gray-900 pb-1",i="text-md text-gray-600 font-light";t.a=e=>{let t,{name:a,description:l,link:m=!1,internal:o=!1}=e;return t=o?r.a.createElement(n.Link,{to:m},a):r.a.createElement("a",{href:m},a),r.a.createElement("div",{className:s},r.a.createElement("h3",{className:`${c} ${m?"hover:underline hover:text-black":""}`},m?t:a),r.a.createElement("p",{className:i},l))}},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("6uTu"),c=a("ivnd");const i="text-lg font-bold",m="underline";t.default=()=>l.a.createElement(s.a,null,l.a.createElement(c.a,{title:"Not found"}),l.a.createElement("h1",{className:i},"404: Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist."," ",l.a.createElement(r.Link,{className:m,to:"/"},"Return to safety"),"."))},"xGn/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("STHm"),s=a("hbLQ");var c=e=>{let{posts:t}=e;return l.a.createElement(r.a,{title:"All Blog Posts"},t.map(e=>l.a.createElement(s.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})))},i=a("eNIv"),m=a("6uTu"),o=a("ivnd"),d=a("pssB");t.default=e=>{let{data:t}=e;const a=t.allMarkdownRemark.edges,n=!a||!a.length;return a&&a.length?l.a.createElement(m.a,null,l.a.createElement(o.a,{title:"Blog"}),l.a.createElement(i.a,{metadata:t.site.siteMetadata}),!n&&l.a.createElement(c,{posts:a})):l.a.createElement(d.default,null)}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-109e6c92e4f2eb50f5c6.js.map