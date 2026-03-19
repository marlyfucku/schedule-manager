(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function d(){return"<h1>Звонки</h1>"}function l(){return`<div class="main">
    ${d()}
  </div>`}const i={id:0,getId:function(){return++this.id}},h=()=>{document.querySelector("#app").addEventListener("click",e=>{const{id:n}=e.target.dataset;n&&i[n]()})};function f(){return"<h1>Аудитории</h1>"}function p(){return"<h1>Группы</h1>"}function m(){return"<h1>Предметы</h1>"}function y(e){return`
    <div class="modal-overlay hidden ${e}">
      <div class="modal">
        Содержимое модалки
      </div>
    </div>
  `}async function b(){async function e(){try{const r=await fetch("/apiv1/teachers");if(console.log(11,r.json()),!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(r){console.error("Fetch error:",r)}}await e();const n=()=>{document.querySelector(".modal-teachers").classList.remove("hidden")},s=i.getId();return i[s]=n,`
  <h1 class="page-title">Преподаватели</h1>
    <table class="teachers-table">
      <thead>
        <tr>
          <th>Преподаватель</th>
          <th>Сокращение</th>
          <th>Должность</th>
          <th>Цвет</th>
        </tr>  
      </thead>
      <tbody>
        <tr>
          <td>Сизов Сергей Евгеньевич</td>
          <td>Сизов С.Е.</td>
          <td>Старший преподаватель</td>
          <td>Зеленый</td>
        </tr>  
      </tbody>
    </table>
    <button data-id=${s}>Добавить преподавателя</button>
  ${y("modal-teachers")}
    `}const g={routes:{Звонки:d,Группы:p,Предметы:m,Преподаватели:b,Аудитории:f},getRoute(e){return this.routes[e]?this.routes[e]():null}};function u(e,n){e.innerHTML=n}function c(e){const n=g.getRoute(e),s=()=>{u(document.querySelector(".main"),n)},r=i.getId();return i[r]=s,`<li data-id=${r} class='sidebar-category'>${e}</li>`}const $="_sidebar_1b9c6_1",v={sidebar:$};function L(){return`<ol class="${v.sidebar}">
      ${c("Звонки")}
      ${c("Группы")}
      ${c("Предметы")}
      ${c("Преподаватели")}
      ${c("Аудитории")}
    </ol>`}const S="_container_1iz5t_1",w={container:S};function O(){return`<div class="${w.container}">
      ${L()}
      ${l()}
  </div>`}const _=document.querySelector("#app");u(_,O());h();
