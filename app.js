/* Upfinity OS · app */
(function(){
"use strict";
var $=function(s,r){return (r||document).querySelector(s);};
var $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s));};

/* ---------- mini-markdown ---------- */
function esc(s){return (s||"").replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c];});}
function inline(t){
  t=esc(t);
  t=t.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");
  t=t.replace(/(^|[^*])\*(?!\*)([^*]+?)\*(?!\*)/g,"$1<i>$2</i>");
  t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,function(_,a,u){return "<a href=\""+u+"\" target=\"_blank\" rel=\"noopener\">"+a+"</a>";});
  t=t.replace(/\[([^\]]{1,70}?)\]/g,"<span class=\"ph\">[$1]</span>");
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
      out.push("<div class=\"prompt\"><button class=\"prompt-copy\" type=\"button\">Kopírovat</button><pre>"+pb.join("\n")+"</pre></div>");continue;}
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
function workDays(){return allDays().filter(function(d){return !d.off;});}
function stats(){var a=workDays();var dn=a.filter(function(d){return done(d.n);}).length;return {done:dn,total:a.length,pct:a.length?Math.round(dn/a.length*100):0};}
function nextDay(){var a=workDays();for(var i=0;i<a.length;i++){if(!done(a[i].n))return a[i];}return null;}
function weekDone(wi){var days=UPF.plan[wi].days.filter(function(d){return !d.off;});return days.length>0&&days.every(function(d){return done(d.n);});}

function dayDate(n){
  var parts=(UPF.startDate||"2026-07-24").split("-");
  var base=new Date(+parts[0],+parts[1]-1,+parts[2]);
  base.setDate(base.getDate()+(n-1));
  var dow=["ne","po","út","st","čt","pá","so"][base.getDay()];
  return dow+" "+base.getDate()+". "+(base.getMonth()+1)+".";
}

function sectionUnlocked(id){
  var after=UPF.unlocks[id];
  if(after===undefined||after===0)return true;
  var need=workDays().filter(function(d){return d.n<=after;});
  return need.every(function(d){return done(d.n);});
}
function unlockLabel(id){
  var after=UPF.unlocks[id],wi=0;
  for(var i=0;i<UPF.plan.length;i++){if(UPF.plan[i].days.some(function(d){return d.n===after;})){wi=i;break;}}
  return "Odemkne se po splnění všech úkolů: "+UPF.plan[wi].week;
}

var PB_NAV={vyzkum:"vyzkum",trychtyr:"trychtyr",reklamy:"reklamy",prodej:"prodej",doruceni:"doruceni"};

/* ---------- render ---------- */
function renderPrehled(){
  var s=stats(),nx=nextDay();
  var miles=UPF.milestones.map(function(m){
    var ok=m.weeks.every(weekDone);
    return "<div class=\"mile"+(ok?" done":"")+"\"><span class=\"dot\"></span><div class=\"ml\">"+esc(m.label)+"</div></div>";
  }).join("");
  var today=nx
    ? "<div class=\"today reveal\"><div class=\"e\">Dnešní krok · Den "+nx.n+" · "+dayDate(nx.n)+"</div><div class=\"t\">"+inline(nx.task.split("\n")[0])+"</div>"+(nx.submit?"<div class=\"d\">Do WhatsAppu: "+esc(nx.submit)+"</div>":"")+"<button class=\"btn\" data-goday=\""+nx.n+"\">Otevřít dnešní den →</button></div>"
    : "<div class=\"today reveal\"><div class=\"e\">Hotovo</div><div class=\"t\">Celý plán splněn. Gratulace 🎉</div></div>";
  return ""
   +"<div class=\"hero reveal\"><div>"
   +"<p class=\"eyebrow\">Upfinity OS · systém Nejlepší agentury</p>"
   +"<h1>Prodávej tak, aby ses <span class=\"g\">už nikdy nebál o peníze</span>.</h1>"
   +"<p class=\"lead\">Kompletní know-how, tvoje poznámky a každodenní plán. Vlevo panel, tady výsledky. Materiály se odemykají, jak plníš týdny.</p>"
   +"</div><img class=\"hero-mark\" src=\"assets/mark.svg\" alt=\"Upfinity\"></div>"
   +"<div class=\"progwrap reveal\"><div class=\"progwrap-top\"><span class=\"eyebrow\" style=\"margin:0\">Fáze programu</span><span class=\"progpct\"><b id=\"ov-pct\">"+s.pct+"</b>% · "+s.done+"/"+s.total+" dní</span></div>"
   +"<div class=\"shimmer-bar\"><i id=\"ov-fill\" style=\"width:"+s.pct+"%\"><span class=\"shine\"></span></i></div>"
   +"<div class=\"miles\">"+miles+"</div></div>"
   +today
   +"<h2 class=\"reveal\">Rychlá navigace</h2><div class=\"quick reveal\">"
   +"<a href=\"#vyzkum\" data-nav=\"vyzkum\"><b>🔎 Zákaznický výzkum</b><span>Nika, ChatGPT výzkum, volání</span></a>"
   +"<a href=\"#trychtyr\" data-nav=\"trychtyr\"><b>🧲 Konverzní stránka</b><span>Claude prompty, Pixel + CAPI</span></a>"
   +"<a href=\"#reklamy\" data-nav=\"reklamy\"><b>🎬 Reklamy</b><span>KDO CO PROČ JAK + vzory</span></a>"
   +"<a href=\"#prodej\" data-nav=\"prodej\"><b>📞 Prodejní hovor</b><span>Celý scénář + námitky</span></a>"
   +"<a href=\"#doruceni\" data-nav=\"doruceni\"><b>🤝 Doručení služby</b><span>Faktura, představení, plán</span></a>"
   +"<a href=\"#poznamky\" data-nav=\"poznamky\"><b>📝 Moje poznámky</b><span>Openery, otázky, pitch</span></a>"
   +"</div>";
}

function renderPlan(){
  var h="<p class=\"eyebrow\">Akční plán pro Nejlepší agenturu</p>"
   +"<h1>Plán na <span class=\"g\">každý den</span></h1>"
   +"<p class=\"lead\">Odškrtávej. Kapitoly a materiály se odemykají, jak plníš týdny. Každý večer pošli splněný úkol do WhatsAppu.</p>"
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
      h+="<label class=\"day"+(d.off?" off":"")+(done(d.n)?" done":"")+"\" id=\"day-"+d.n+"\" data-day=\""+d.n+"\">"
       +"<span class=\"num\">Den "+d.n+"<span class=\"date\">"+(d.off?"":dayDate(d.n))+"</span></span>"
       +"<span class=\"task\">"+main+(rest?"<br>"+rest:"")
       +(d.submit?"<span class=\"sub\"><b>Do WhatsAppu:</b> "+esc(d.submit)+"</span>":"")
       +pb+"</span>"
       +(d.off?"<span></span>":"<input type=\"checkbox\" "+(done(d.n)?"checked":"")+" data-n=\""+d.n+"\">")
       +"</label>";
    });
    h+="</section>";
  });
  return h;
}

function renderSection(sec){
  if(!sectionUnlocked(sec.id)){
    return "<p class=\"eyebrow\">"+sec.eyebrow+"</p><h1>"+sec.title+"</h1>"
     +"<div class=\"locked-card reveal\"><div class=\"lock-ic\">🔒</div><div><b>Zatím zamčeno</b><p>"+unlockLabel(sec.id)+". Odškrtávej úkoly v Plánu a kapitola se odemkne sama.</p><button class=\"btn ghost\" data-nav=\"plan\">Otevřít plán →</button></div></div>";
  }
  return "<p class=\"eyebrow\">"+sec.eyebrow+"</p><h1>"+sec.title+"</h1>"
   +"<p class=\"lead\">"+esc(sec.lead)+"</p>"
   +"<div class=\"content reveal\">"+md(sec.md)+"</div>";
}
function sectionById(id){return UPF.sections.filter(function(s){return s.id===id;})[0];}

/* ---------- shell ---------- */
function navItems(){
  var items=[{id:"prehled",ico:"🏠",nav:"Přehled"},{id:"plan",ico:"📅",nav:"Plán"}];
  UPF.sections.forEach(function(s){items.push({id:s.id,ico:s.ico,nav:s.nav});});
  return items;
}
function buildSidebar(){
  var groups={prehled:"Start",plan:"Start",vyzkum:"Know-how · Vojta Kopecký",trychtyr:"",reklamy:"",prodej:"",doruceni:"",poznamky:"Moje",zdroje:""};
  var h="",lastG="";
  navItems().forEach(function(it){
    var g=groups[it.id];
    if(g&&g!==lastG){h+="<div class=\"sb-group\">"+g+"</div>";lastG=g;}
    var locked=(UPF.unlocks[it.id]!==undefined&&UPF.unlocks[it.id]>0&&!sectionUnlocked(it.id));
    h+="<div class=\"sb-link"+(locked?" locked":"")+"\" data-nav=\""+it.id+"\"><span class=\"ico\">"+it.ico+"</span>"+it.nav
      +(it.id==="plan"?"<span class=\"n\" id=\"sb-count\"></span>":(locked?"<span class=\"lk\">🔒</span>":""))+"</div>";
  });
  $("#sb-nav").innerHTML=h;
  $$(".sb-link").forEach(function(l){l.classList.toggle("active",l.dataset.nav===currentId);});
}
var currentId="prehled";
function show(id, gotoDay){
  currentId=id;
  $$(".page").forEach(function(p){p.classList.remove("on");});
  var pg=$("#page-"+id);if(!pg)return;
  if(id==="prehled")pg.innerHTML=renderPrehled();
  else if(id==="plan")pg.innerHTML=renderPlan();
  else if(UPF.unlocks[id]!==undefined)pg.innerHTML=renderSection(sectionById(id));
  pg.classList.add("on");
  buildSidebar();
  $(".sidebar").classList.remove("open");$(".scrim").classList.remove("on");
  if(gotoDay){
    var el=$("#day-"+gotoDay);
    if(el){el.scrollIntoView({behavior:"smooth",block:"center"});el.classList.add("flash");setTimeout(function(){el.classList.remove("flash");},1700);}
  } else window.scrollTo(0,0);
  if(history.replaceState)history.replaceState(null,"","#"+id);
  refreshCounts();reveal();requestAnimationFrame(reveal);setTimeout(reveal,90);setTimeout(reveal,320);
}

function refreshCounts(){
  var s=stats();
  var c=$("#sb-count");if(c)c.textContent=s.done+"/"+s.total;
  var bar=$("#sb-bar i");if(bar)bar.style.transform="scaleX("+(s.pct/100)+")";
  var lb=$("#sb-pct");if(lb)lb.textContent=s.pct+"%";
  var ov=$("#ov-fill");if(ov)ov.style.width=s.pct+"%";
  var ovp=$("#ov-pct");if(ovp)ovp.textContent=s.pct;
  $$(".week-head .cnt").forEach(function(el){
    var wi=+el.dataset.week,days=UPF.plan[wi].days.filter(function(d){return !d.off;});
    el.textContent=days.filter(function(d){return done(d.n);}).length+"/"+days.length;
  });
}
function reveal(){$$(".reveal:not(.in)").forEach(function(el){var r=el.getBoundingClientRect();if(r.top<window.innerHeight-30)el.classList.add("in");});}

/* ---------- EASTER EGG: Mercedes CLA 45 S burnout ---------- */
function carEgg(){
  if($("#car-egg"))return;
  var wrap=document.createElement("div");wrap.id="car-egg";
  wrap.innerHTML=
    "<div class=\"skid\"></div>"
    +"<div class=\"car-rig\">"
    +"<div class=\"smoke s1\"></div><div class=\"smoke s2\"></div><div class=\"smoke s3\"></div><div class=\"smoke s4\"></div><div class=\"smoke s5\"></div><div class=\"smoke s6\"></div>"
    +"<img class=\"car-img\" src=\"assets/cla45s.png\" alt=\"Mercedes-AMG CLA 45 S\">"
    +"</div>";
  document.body.appendChild(wrap);
  try{var ac=new (window.AudioContext||window.webkitAudioContext)();
    var o=ac.createOscillator(),g=ac.createGain();
    o.type="sawtooth";o.frequency.setValueAtTime(60,ac.currentTime);
    o.frequency.exponentialRampToValueAtTime(260,ac.currentTime+2.4);
    o.frequency.exponentialRampToValueAtTime(90,ac.currentTime+2.9);
    g.gain.setValueAtTime(0.06,ac.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+3);
    o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+3);}catch(e){}
  setTimeout(function(){if(wrap.parentNode)wrap.parentNode.removeChild(wrap);},3400);
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded",function(){
  $("#main").innerHTML="<div class=\"page\" id=\"page-prehled\"></div><div class=\"page\" id=\"page-plan\"></div>"
    +UPF.sections.map(function(s){return "<div class=\"page\" id=\"page-"+s.id+"\"></div>";}).join("")
    +"<div class=\"foot\">Upfinity OS · systém Nejlepší agentury · know-how doslovně od Vojty Kopeckého</div>";

  document.addEventListener("click",function(e){
    if(e.target.closest(".sb-brand")||e.target.closest(".logo-egg")){carEgg();return;}
    var gd=e.target.closest("[data-goday]");
    if(gd){show("plan",+gd.dataset.goday);return;}
    var nv=e.target.closest("[data-nav]");
    if(nv){e.preventDefault();show(nv.dataset.nav);return;}
    var pc=e.target.closest(".prompt-copy");
    if(pc){var pre=pc.parentNode.querySelector("pre");navigator.clipboard.writeText(pre.textContent).then(function(){pc.textContent="Zkopírováno ✓";setTimeout(function(){pc.textContent="Kopírovat";},1600);});return;}
    if(e.target.matches(".day input[type=checkbox]")){
      var n=+e.target.dataset.n;setDone(n,e.target.checked);
      e.target.closest(".day").classList.toggle("done",e.target.checked);
      refreshCounts();buildSidebar();
    }
  });
  $("#burger").addEventListener("click",function(){$(".sidebar").classList.add("open");$(".scrim").classList.add("on");});
  $(".scrim").addEventListener("click",function(){$(".sidebar").classList.remove("open");$(".scrim").classList.remove("on");});
  window.addEventListener("scroll",reveal,{passive:true});
  window.addEventListener("hashchange",function(){var id=location.hash.slice(1);if($("#page-"+id))show(id);});

  var start=location.hash.slice(1);
  show($("#page-"+start)?start:"prehled");
});
})();
