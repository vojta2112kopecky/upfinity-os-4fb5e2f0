/* Upfinity OS · app */
(function(){
"use strict";
var $=function(s,r){return (r||document).querySelector(s);};
var $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s));};

/* ---------- mini-markdown renderer ---------- */
function esc(s){return (s||"").replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c];});}
function inline(t){
  t=esc(t);
  t=t.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");
  t=t.replace(/(^|[^*])\*(?!\*)([^*]+?)\*(?!\*)/g,"$1<i>$2</i>");
  t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,function(_,a,u){return "<a href=\""+u+"\" target=\"_blank\" rel=\"noopener\">"+a+"</a>";});
  t=t.replace(/\[([^\]]{1,60}?)\]/g,"<span class=\"ph\">[$1]</span>");
  return t;
}
function md(src){
  var out=[],lines=(src||"").split("\n"),i=0;
  function ul(re,tag){var b=[];while(i<lines.length&&re.test(lines[i])){b.push("<li>"+inline(lines[i].replace(re,""))+"</li>");i++;}out.push("<"+tag+">"+b.join("")+"</"+tag+">");}
  while(i<lines.length){
    var ln=lines[i];
    if(/^:::\s*\S/.test(ln)){var tt=ln.replace(/^:::\s*/,"");i++;var bd=[];
      while(i<lines.length&&!/^:::\s*$/.test(lines[i])){bd.push(lines[i]);i++;}i++;
      out.push("<details class=\"acc\"><summary>"+inline(tt)+"</summary><div class=\"acc-body\">"+md(bd.join("\n"))+"</div></details>");continue;}
    if(/^```/.test(ln)){i++;var pb=[];while(i<lines.length&&!/^```/.test(lines[i])){pb.push(esc(lines[i]));i++;}i++;
      out.push("<div class=\"prompt\">"+pb.join("<br>")+"</div>");continue;}
    if(/^!btn /.test(ln)){var m=ln.slice(5).match(/\[([^\]]+)\]\(([^)]+)\)/);
      if(m)out.push("<a class=\"btn primary\" href=\""+m[2]+"\" target=\"_blank\" rel=\"noopener\">"+esc(m[1])+"</a> ");i++;continue;}
    if(/^---\s*$/.test(ln)){out.push("<hr>");i++;continue;}
    if(/^#### /.test(ln)){out.push("<h4>"+inline(ln.slice(5))+"</h4>");i++;continue;}
    if(/^### /.test(ln)){out.push("<h3>"+inline(ln.slice(4))+"</h3>");i++;continue;}
    if(/^## /.test(ln)){out.push("<h2>"+inline(ln.slice(3))+"</h2>");i++;continue;}
    if(/^# /.test(ln)){out.push("<h2 style=\"font-size:28px\">"+inline(ln.slice(2))+"</h2>");i++;continue;}
    if(/^>\s?/.test(ln)){var q=[];while(i<lines.length&&/^>\s?/.test(lines[i])){q.push(inline(lines[i].replace(/^>\s?/,"")));i++;}
      out.push("<div class=\"quote\">"+q.join("<br>")+"</div>");continue;}
    if(/^- /.test(ln)){ul(/^- /,"ul");continue;}
    if(/^\d+\. /.test(ln)){ul(/^\d+\. /,"ol");continue;}
    if(/^\s*$/.test(ln)){i++;continue;}
    out.push("<p>"+inline(ln)+"</p>");i++;
  }
  return out.join("\n");
}

/* ---------- state ---------- */
function done(n){try{return localStorage.getItem("upf-day-"+n)==="1";}catch(e){return false;}}
function setDone(n,v){try{localStorage.setItem("upf-day-"+n,v?"1":"0");}catch(e){}}
function allDays(){var a=[];UPF.plan.forEach(function(w){w.days.forEach(function(d){a.push(d);});});return a;}
function stats(){
  var a=allDays().filter(function(d){return !d.off;});
  var dn=a.filter(function(d){return done(d.n);}).length;
  return {done:dn,total:a.length,pct:a.length?Math.round(dn/a.length*100):0};
}
function nextDay(){
  var a=allDays().filter(function(d){return !d.off;});
  for(var i=0;i<a.length;i++){if(!done(a[i].n))return a[i];}
  return null;
}
function weekDone(wi){
  var days=UPF.plan[wi].days.filter(function(d){return !d.off;});
  return days.length>0&&days.every(function(d){return done(d.n);});
}

/* ---------- pages ---------- */
var PB_NAV={vyzkum:"vyzkum",trychtyr:"trychtyr",reklamy:"reklamy",prodej:"prodej",doruceni:"doruceni"};

function renderPrehled(){
  var s=stats(),nx=nextDay();
  var miles=UPF.milestones.map(function(m){
    var ok=m.weeks.every(weekDone);
    return "<div class=\"mile"+(ok?" done":"")+"\"><span class=\"dot\"></span><div class=\"ml\">"+esc(m.label)+"</div></div>";
  }).join("");
  var today=nx
    ? "<div class=\"today reveal\"><div class=\"e\">Dnešní krok · Den "+nx.n+" ("+esc(nx.orig)+")</div><div class=\"t\">"+inline(nx.task.split("\n")[0])+"</div>"+(nx.submit&&nx.submit!=="-"?"<div class=\"d\">Předložíte na Slack: "+esc(nx.submit)+"</div>":"")+"<a class=\"btn\" href=\"#plan\" data-nav=\"plan\">Otevřít plán →</a></div>"
    : "<div class=\"today reveal\"><div class=\"e\">Hotovo</div><div class=\"t\">Všech 60 dní splněno. Gratulace 🎉</div></div>";
  return ""
   +"<div class=\"hero reveal\"><div>"
   +"<p class=\"eyebrow\">Upfinity OS · systém Nejlepšího Konverzkáře</p>"
   +"<h1>Prodávej tak, aby ses <span class=\"g\">už nikdy nebál o peníze</span>.</h1>"
   +"<p class=\"lead\">Kompletní know-how programu Nejlepší Konverzkář (doslovně od Honzy Nedvěda), tvoje poznámky a každodenní plán na 2 měsíce. Vlevo panel, tady výsledky.</p>"
   +"</div><img class=\"hero-mark\" src=\"assets/mark.svg\" alt=\"Upfinity\"></div>"
   +"<div class=\"stat-row reveal\">"
   +"<div class=\"stat\"><div class=\"v\"><span class=\"g\" id=\"st-done\">"+s.done+"</span>/"+s.total+"</div><div class=\"l\">splněných dní plánu</div></div>"
   +"<div class=\"stat\"><div class=\"v\" id=\"st-pct\">"+s.pct+"%</div><div class=\"l\">postup programem</div></div>"
   +"<div class=\"stat\"><div class=\"v\">"+UPF.sections.length+"</div><div class=\"l\">kapitol know-how</div></div>"
   +"</div>"
   +today
   +"<h2 class=\"reveal\">Fáze programu</h2><div class=\"miles reveal\">"+miles+"</div>"
   +"<h2 class=\"reveal\">Rychlá navigace</h2><div class=\"quick reveal\">"
   +"<a href=\"#vyzkum\" data-nav=\"vyzkum\"><b>🔎 Zákaznický výzkum</b><span>ChatGPT výzkum + volání živým lidem</span></a>"
   +"<a href=\"#trychtyr\" data-nav=\"trychtyr\"><b>🧲 Konverzní trychtýř</b><span>Šablony, video, e-book, 5 e-mailů</span></a>"
   +"<a href=\"#reklamy\" data-nav=\"reklamy\"><b>🎬 Reklamy</b><span>KDO CO PROČ JAK + vzory</span></a>"
   +"<a href=\"#prodej\" data-nav=\"prodej\"><b>📞 Prodejní hovor</b><span>Celý INIZIO scénář + námitky</span></a>"
   +"<a href=\"#doruceni\" data-nav=\"doruceni\"><b>🤝 Doručení služby</b><span>Faktura, představení, plán klientovi</span></a>"
   +"<a href=\"#poznamky\" data-nav=\"poznamky\"><b>📝 Moje poznámky</b><span>Openery, otázky, pitch</span></a>"
   +"</div>";
}

function renderPlan(){
  var h="<p class=\"eyebrow\">Akční plán pro Nejlepšího Konverzkáře</p>"
   +"<h1>Plán na <span class=\"g\">60 dní</span></h1>"
   +"<p class=\"lead\">Každodenní plán na 2 měsíce. Týdny 1-7 doslovně dle akčního plánu, týden 8 doručení služby. Odškrtávej.</p>"
   +"<div class=\"quote reveal\">"+md(UPF.planIntro).replace(/^<p>|<\/p>$/g,"").replace(/<\/p>\n?<p>/g,"<br>")+"</div>";
  UPF.plan.forEach(function(w,wi){
    var days=w.days.filter(function(d){return !d.off;});
    var dn=days.filter(function(d){return done(d.n);}).length;
    h+="<section class=\"week reveal\"><div class=\"week-head\"><h2>"+esc(w.week)+"</h2><span class=\"sub\">"+esc(w.sub)+"</span><span class=\"cnt\" data-week=\""+wi+"\">"+dn+"/"+days.length+"</span></div>";
    w.days.forEach(function(d){
      var lines=d.task.split("\n");
      var main=inline(lines[0]);
      var rest=lines.slice(1).map(function(x){return inline(x);}).join("<br>");
      var pb=d.pb?" &nbsp;<a class=\"pblink\" href=\"#"+PB_NAV[d.pb]+"\" data-nav=\""+PB_NAV[d.pb]+"\">📚 kapitola</a>":"";
      h+="<label class=\"day"+(d.off?" off":"")+(done(d.n)?" done":"")+"\" data-day=\""+d.n+"\">"
       +"<span class=\"num\">Den "+d.n+"</span>"
       +"<span class=\"task\"><span class=\"orig\">orig. "+esc(d.orig)+"</span>"+main+(rest?"<br>"+rest:"")
       +(d.submit&&d.submit!=="-"?"<span class=\"sub\"><b>Předložíte na Slack:</b> "+esc(d.submit)+"</span>":"")
       +pb+"</span>"
       +(d.off?"<span></span>":"<input type=\"checkbox\" "+(done(d.n)?"checked":"")+" data-n=\""+d.n+"\">")
       +"</label>";
    });
    h+="</section>";
  });
  return h;
}

function renderSection(sec){
  return "<p class=\"eyebrow\">"+sec.eyebrow+"</p>"
   +"<h1>"+sec.title+"</h1>"
   +"<p class=\"lead\">"+esc(sec.lead)+"</p>"
   +"<div class=\"content reveal\">"+md(sec.md)+"</div>";
}

/* ---------- shell ---------- */
function navItems(){
  var items=[{id:"prehled",ico:"🏠",nav:"Přehled"},{id:"plan",ico:"📅",nav:"Plán 60 dní"}];
  UPF.sections.forEach(function(s){items.push({id:s.id,ico:s.ico,nav:s.nav});});
  return items;
}
function buildSidebar(){
  var el=$("#sb-nav");
  var groups={prehled:"Start",plan:"Start",vyzkum:"Know-how · Honza Nedvěd",trychtyr:"",reklamy:"",prodej:"",doruceni:"",poznamky:"Moje",zdroje:""};
  var h="",lastG="";
  navItems().forEach(function(it){
    var g=groups[it.id];
    if(g&&g!==lastG){h+="<div class=\"sb-group\">"+g+"</div>";lastG=g;}
    h+="<div class=\"sb-link\" data-nav=\""+it.id+"\"><span class=\"ico\">"+it.ico+"</span>"+it.nav
      +(it.id==="plan"?"<span class=\"n\" id=\"sb-count\"></span>":"")+"</div>";
  });
  el.innerHTML=h;
}
function show(id){
  $$(".page").forEach(function(p){p.classList.remove("on");});
  var pg=$("#page-"+id);
  if(!pg)return;
  if(id==="prehled")pg.innerHTML=renderPrehled();
  if(id==="plan"&&!pg.dataset.built){pg.innerHTML=renderPlan();pg.dataset.built="1";}
  pg.classList.add("on");
  $$(".sb-link").forEach(function(l){l.classList.toggle("active",l.dataset.nav===id);});
  $(".sidebar").classList.remove("open");$(".scrim").classList.remove("on");
  window.scrollTo(0,0);
  if(history.replaceState)history.replaceState(null,"","#"+id);
  requestAnimationFrame(reveal);
}
function refreshCounts(){
  var s=stats();
  var c=$("#sb-count");if(c)c.textContent=s.done+"/"+s.total;
  var bar=$("#sb-bar i");if(bar)bar.style.width=s.pct+"%";
  var lb=$("#sb-pct");if(lb)lb.textContent=s.pct+"%";
  $$(".week-head .cnt").forEach(function(el){
    var wi=+el.dataset.week,days=UPF.plan[wi].days.filter(function(d){return !d.off;});
    el.textContent=days.filter(function(d){return done(d.n);}).length+"/"+days.length;
  });
}
function reveal(){
  $$(".reveal:not(.in)").forEach(function(el){
    var r=el.getBoundingClientRect();
    if(r.top<window.innerHeight-40)el.classList.add("in");
  });
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded",function(){
  var main=$("#main");
  main.innerHTML="<div class=\"page\" id=\"page-prehled\"></div><div class=\"page\" id=\"page-plan\"></div>"
    +UPF.sections.map(function(s){return "<div class=\"page\" id=\"page-"+s.id+"\">"+renderSection(s)+"</div>";}).join("")
    +"<div class=\"foot\">Upfinity OS · obsah doslovně: Nejlepší Konverzkář (Honza Nedvěd / INIZIO) + moje poznámky</div>";
  buildSidebar();

  document.addEventListener("click",function(e){
    var nv=e.target.closest("[data-nav]");
    if(nv){e.preventDefault();show(nv.dataset.nav);return;}
    if(e.target.matches(".day input[type=checkbox]")){
      var n=+e.target.dataset.n;
      setDone(n,e.target.checked);
      e.target.closest(".day").classList.toggle("done",e.target.checked);
      refreshCounts();
      if($("#page-prehled").classList.contains("on"))show("prehled");
    }
  });
  $("#burger").addEventListener("click",function(){$(".sidebar").classList.add("open");$(".scrim").classList.add("on");});
  $(".scrim").addEventListener("click",function(){$(".sidebar").classList.remove("open");$(".scrim").classList.remove("on");});
  window.addEventListener("scroll",reveal,{passive:true});
  window.addEventListener("hashchange",function(){var id=location.hash.slice(1);if($("#page-"+id))show(id);});

  var start=location.hash.slice(1);
  show($("#page-"+start)?start:"prehled");
  refreshCounts();
});
})();
