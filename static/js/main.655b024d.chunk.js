(this["webpackJsonpgithub-jobs-react-project"]=this["webpackJsonpgithub-jobs-react-project"]||[]).push([[0],{150:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(43),l=t.n(c),o=t(16),s=t(7),m=t(13),u=t(10),i=t.n(u),p="make-request",b="get-data",E="error",d="update-has-next-page",g="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";function h(e,a){switch(a.type){case p:return{loading:!0,jobs:[]};case b:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case E:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case d:return Object(s.a)(Object(s.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var f=t(153),j=t(155),y=t(151),v=t(152),k=t(44),N=t.n(k);function x(e){var a=e.job;return r.a.createElement(j.a,{className:"my-4 mx-auto shadow-sm border border-primary"},r.a.createElement(j.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement(j.a.Title,null,a.title," - ",r.a.createElement("span",{className:"text-muted"},a.company)),r.a.createElement(j.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(y.a,{variant:"primary",className:"mr-2"},a.type),r.a.createElement(y.a,{variant:"primary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"},className:"mt-3"},r.a.createElement(N.a,{source:a.description.slice(0,500)+"..."})))),r.a.createElement(j.a.Text,null,r.a.createElement(v.a,{href:a.url,target:"_blank",className:"mr-2"},"Full Details"),r.a.createElement(v.a,{href:a.url,target:"_blank"},"Apply Here"))))}var O=t(156);function C(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement(O.a,null,1!==a&&r.a.createElement(O.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(O.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&r.a.createElement(O.a.Ellipsis,null),a>2&&r.a.createElement(O.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(O.a.Item,{active:!0},a),n&&r.a.createElement(O.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(O.a.Next,{onClick:function(){return c(1)}}))}var P=t(154),w=t(45);function T(e){var a=e.params,t=e.onParamChange;return r.a.createElement(P.a,{className:"mb-4"},r.a.createElement(P.a.Row,{className:"align-items-end"},r.a.createElement(P.a.Group,{as:w.a},r.a.createElement(P.a.Label,null,"Keywords"),r.a.createElement(P.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),r.a.createElement(P.a.Group,{as:w.a},r.a.createElement(P.a.Label,null,"Location"),r.a.createElement(P.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})),r.a.createElement(P.a.Group,{as:w.a,xs:"auto",className:"ml-2"},r.a.createElement(P.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"}))))}var I=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),u=Object(m.a)(l,2),j=u[0],y=u[1],v=function(e,a){var t=Object(n.useReducer)(h,{jobs:[],loading:!0}),r=Object(m.a)(t,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=i.a.CancelToken.source();l({type:p}),i.a.get(g,{cancelToken:t.token,params:Object(s.a)({markdown:!0,page:a},e)}).then((function(e){l({type:b,payload:{jobs:e.data}})})).catch((function(e){i.a.isCancel(e)||l({type:E,payload:{error:e}})}));var n=i.a.CancelToken.source();return i.a.get(g,{cancelToken:n.token,params:Object(s.a)({markdown:!0,page:a+1},e)}).then((function(e){l({type:d,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){i.a.isCancel(e)||l({type:E,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,j),k=v.jobs,N=v.loading,O=v.error,P=v.hasNextPage;return r.a.createElement(f.a,{className:"my-4 col-lg-6"},r.a.createElement("h1",{className:"mb-3 display-4"},r.a.createElement("span",{className:"font-weight-bold"},"Git"),"Jobs"),r.a.createElement("h3",{className:"mb-3"},"Discover new jobs throught the GitHub API"),r.a.createElement(T,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;y(1),c((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(o.a)({},a,t))}))}}),r.a.createElement(C,{page:j,setPage:y,hasNextPage:P,className:"mx-auto"}),N&&r.a.createElement("h1",null,"Loading..."),O&&r.a.createElement("h1",null,"Error. Please refresh..."),k.map((function(e){return r.a.createElement(x,{key:e.id,job:e})})),r.a.createElement(C,{page:j,setPage:y,hasNextPage:P}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.655b024d.chunk.js.map