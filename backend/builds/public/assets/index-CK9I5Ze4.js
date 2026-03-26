(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const v="_breadcrumbs_14gk0_1",w={breadcrumbs:v};function _(e){return`
    <div class="${w.breadcrumbs}">
      <a href='/public'>Расписание занятий</a>
      ${e.map(t=>t.type==="ref"?`<span>/</span>
            <a href="${t.href}">${t.text}</a>`:`<span>/</span><span>${t.text}</span>`).join("")}
    </div>
  `}function k(e=0){const t=new Date,r=t.getDay(),a=r===0?6:r-1;t.setDate(t.getDate()-a+e*7);const s=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${s}-${n}-${o}`}function T(e,t){const r=new Date(e);r.setDate(r.getDate()+(t-1));const a=String(r.getDate()).padStart(2,"0"),s=String(r.getMonth()+1).padStart(2,"0"),n=r.getFullYear();return`${a}.${s}.${n}`}function D(e,t){function r(b){const[y,g]=b.split(":").map(Number);return y*60+g}const a=r(e),n=r(t)-a,o=Math.floor(n/60),m=n%60;return`${o} ч. ${m} минут`}async function M(){try{const e=await fetch("/apiv1/teachers");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw new Error("cannot connect to server",{cause:e})}}async function j(){try{const e=await fetch("/apiv1/groups");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw new Error("cannot connect to server",{cause:e})}}async function C(){const e=new URL(window.location.href).pathname.split("/")[3],t=k();try{const r=await fetch(`/apiv1/teachers/lessons?teacher=${e}&date=${t}`);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(r){console.error("Fetch error:",r)}}const x="_teacherName_12m8n_1",L={teacherName:x};function P(e){return`
  <a href="/public/teachers/${e.id}/lessons"><h5 class=${L.teacherName}>${e.name}</h5></a>`}async function S(){const t=(await M()).map(r=>P(r)).join(`
`);return`
    ${_([{type:"ref",href:"/public/teachers",text:"Преподаватели"}])}
    <div>${t}</div>
  `}const B="_card_rb9eq_2",E="_header_rb9eq_10",N="_subheader_rb9eq_19",G="_date_rb9eq_24",H="_table_rb9eq_29",d={card:B,header:E,subheader:N,date:G,table:H},O="_time_1cv5k_1",q="_info_1cv5k_11",A="_subject_1cv5k_15",F="_groups_1cv5k_22",R="_window_1cv5k_29",c={time:O,info:q,subject:A,groups:F,window:R};function I(e){return e.type==="window"?`
    <tr>
      <td>
        <td class="${c.time}">
        </td>
        <td class="${c.info}">
          <div class="${c.window}">Окно: ${e.totalTime}</div>
        </td>
      </td>
    </tr>`:`
      <tr>
      <td>
        <td class="${c.time}">
          <div>${e.startTime}</div>
          <div>${e.endTime}</div>
        </td>
        <td class="${c.info}">
          <div class="${c.subject}">${e.subject.name}</div>
          <div class="${c.groups}">${e.unionGroups.map(({group:t})=>t.name).join(", ")}</div>
        </td>
      </td>
  </tr > `}function U(e){const t={1:"Понедельник",2:"Вторник",3:"Среда",4:"Четверг",5:"Пятница",6:"Суббота",7:"Воскресенье"},{lessons:r,startDate:a}=e,s=r[0].weekday;return`
  <div class="${d.card}">
    <div class="${d.header}">
      <h3 class="${d.subheader}">${t[s]}</h3>
      <span class="${d.date}">${T(a,s)}</span>
    </div>
    <table class="${d.table}">
      <tbody>
        ${r.map(n=>I(n)).join(`
`)}
      </tbody>
    </table>
  </div>
  `}const W=e=>{const t=[];for(let r=0;r<e.length-1;r+=1){const a=e[r],s=e[r+1],n=s.lesson-a.lesson;t.push(e[r]),n>1&&t.push({type:"window",totalTime:D(a.endTime,s.startTime)})}return t.concat(e.at(-1))},Y=e=>Array.from(new Set(e.map(r=>r.weekday))).sort().reduce((r,a)=>{const s=e.filter(n=>n.weekday===a).sort((n,o)=>n.lesson>o.lesson?1:-1);return{...r,[a]:s}},{}),K="_scheduleDashboard_55lss_1",z="_scheduleGrid_55lss_8",J="_scheduleHeader_55lss_18",h={scheduleDashboard:K,scheduleGrid:z,scheduleHeader:J},Q="_navigation_19n0x_2",V="_button_19n0x_10",X="_date_19n0x_27",u={navigation:Q,button:V,date:X};function Z(){return`
    <div class="${u.navigation}">
      <a class="${u.button}">Предыдущая неделя</a>
      <div class="${u.date}">23.03.2026 - 29.03.2026</div>
      <a class="${u.button}">Следующая неделя</a>
    </div>
  `}async function ee(){const{startDate:e,lessons:t}=await C(),r=Y(t),a=Object.keys(r),s=t[0].teachers[0].fio,n=[{type:"ref",href:"/public/teachers",text:"Преподаватели"},{text:s}];return`
  ${Z()}
  ${_(n)}
    <div class=${h.scheduleDashboard}>
      <h1 class=${h.scheduleHeader}>Страница с расписанием</h1>
      <div class=${h.scheduleGrid}>
        ${a.map(o=>U({lessons:W(r[o]),startDate:e})).join(`
`)}
      </div>
    </div>
  `}const te="_card_1tun1_1",re="_header_1tun1_18",se="_description_1tun1_24",p={card:te,header:re,description:se};function $({name:e,description:t,href:r}){return`
    <a class="${p.card}" href=${r}
      <h1 class="${p.header}">${e}</h1>
      <h2 class="${p.description}">${t}</h2>  
    </a>
  `}const ne="_main_19ba6_1",ae="_header_19ba6_7",oe="_subheader_19ba6_14",ce="_cardsContainer_19ba6_22",l={main:ne,header:ae,subheader:oe,cardsContainer:ce};function ie(){return`
    <div class="${l.main}">
      <h1 class="${l.header}">Расписание занятий</h1>
      <h2 class="${l.subheader}">Выберите категорию для просмотра</h2>
      <div class="${l.cardsContainer}">
        ${$({name:"Преподаватели",description:"Расписание по преподавателям",href:"/public/teachers"})}
        ${$({name:"Группы",description:"Расписание по группам",href:"/public/groups"})}
      </div>
    </div>
  `}const de="_errorPage_1ypo4_1",ue="_errorContent_1ypo4_9",le="_errorCode_1ypo4_17",he="_errorTitle_1ypo4_25",pe="_errorMessage_1ypo4_32",fe="_errorBackBtn_1ypo4_38",i={errorPage:de,errorContent:ue,errorCode:le,errorTitle:he,errorMessage:pe,errorBackBtn:fe};function $e(){return`
  <div class="${i.errorPage}">
    <div class="${i.errorContent}">
      <h1 class="${i.errorCode}">404</h1>
      <h2 class="${i.errorTitle}">Страница не найдена</h2>
      <p class="${i.errorMessage}">Указанный путь ошибочен или страница была удалена</p>
      <a href="back" class="${i.errorBackBtn}">← Вернуться назад</a>
    </div>
  </div>
`}const _e={};function me(e){return`<a href="${`${e.id}/lessons`}"><h5 class=${_e.groupName}>${e.name}</h5></a>`}async function be(){return`
    <div>
    <h2>Группы</h2>
      ${(await j()).map(t=>me(t)).join("")}
    </div>
  `}console.log("load");const ye=[{path:"/public",component:ie},{path:"/public/teachers",component:S},{path:"/public/groups",component:be},{path:"/public/teachers/:id/lessons",component:ee}],ge=e=>{for(const t of ye){const r=t.path.replace(/:[^/]+/g,"([^/]+)")+"/?$";if(new RegExp("^"+r).test(e))return t.component}return $e},f=async()=>{const e=window.location.href.replace(/\/+$/,"");window.location.href.at(-1)==="/"&&history.replaceState({},"",e);const{pathname:t}=new URL(e),r=ge(t),a=document.querySelector("#app");a.innerHTML=await r()};document.addEventListener("click",async e=>{const t=e.target.closest("a");if(t){const r=t.getAttribute("href");if(e.preventDefault(),r==="back"){history.back();return}history.pushState({},"",`${r}`),f()}});window.addEventListener("popstate",()=>f());f();
