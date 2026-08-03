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
    if(/^!hl /.test(ln)){out.push("<div class=\"hl\">"+inline(ln.slice(4))+"</div>");i++;continue;}
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

/* ---------- state (hromadné bloky, bez dnů a dat) ---------- */
function done(id){try{return localStorage.getItem("upf-task-"+id)==="1";}catch(e){return false;}}
function setDone(id,v){try{localStorage.setItem("upf-task-"+id,v?"1":"0");}catch(e){}}
function allTasks(){var a=[];UPF.blocks.forEach(function(b){b.tasks.forEach(function(t){a.push(t);});});return a;}
function stats(){var a=allTasks();var dn=a.filter(function(t){return done(t.id);}).length;return {done:dn,total:a.length,pct:a.length?Math.round(dn/a.length*100):0};}
function nextTask(){var a=allTasks();for(var i=0;i<a.length;i++){if(!done(a[i].id))return a[i];}return null;}
function blockOf(tid){for(var i=0;i<UPF.blocks.length;i++){if(UPF.blocks[i].tasks.some(function(t){return t.id===tid;}))return UPF.blocks[i];}return null;}
function blockDone(bi){var ts=UPF.blocks[bi].tasks;return ts.length>0&&ts.every(function(t){return done(t.id);});}
function sectionUnlocked(){return true;}

var PB_NAV={vyzkum:"vyzkum",trychtyr:"trychtyr",reklamy:"reklamy",prodej:"prodej",doruceni:"doruceni"};

/* ---------- render ---------- */
function renderPrehled(){
  var s=stats(),nx=nextTask();
  var miles=UPF.milestones.map(function(m){
    var ok=m.blocks.every(blockDone);
    return "<div class=\"mile"+(ok?" done":"")+"\"><span class=\"dot\"></span><div class=\"ml\">"+esc(m.label)+"</div></div>";
  }).join("");
  var nb=nx?blockOf(nx.id):null;
  var today=nx
    ? "<div class=\"today reveal\"><div class=\"e\">Další krok · "+esc(nb?nb.name:"")+"</div><div class=\"t\">"+inline(nx.task.split("\n")[0])+"</div>"+(nx.submit?"<div class=\"d\">Do WhatsAppu: "+esc(nx.submit)+"</div>":"")+"<button class=\"btn\" data-gotask=\""+nx.id+"\">Otevřít úkol →</button></div>"
    : "<div class=\"today reveal\"><div class=\"e\">Hotovo</div><div class=\"t\">Celý plán splněn. Gratulace 🎉</div></div>";
  return ""
   +"<div class=\"hero reveal\"><div>"
   +"<p class=\"eyebrow\">Upfinity OS · systém Nejlepší agentury</p>"
   +"<h1>Prodávej tak, aby ses <span class=\"g\">už nikdy nebál o peníze</span>.</h1>"
   +"<p class=\"lead\">Kompletní know-how, tvoje poznámky a plán rozdělený do bloků. Žádné datumy – jdeš svým tempem, odškrtáváš hotové úkoly. Všechny materiály máš odemčené.</p>"
   +"</div><img class=\"hero-mark\" src=\"assets/mark.svg\" alt=\"Upfinity\"></div>"
   +"<div class=\"progwrap reveal\"><div class=\"progwrap-top\"><span class=\"eyebrow\" style=\"margin:0\">Fáze programu</span><span class=\"progpct\"><b id=\"ov-pct\">"+s.pct+"</b>% · "+s.done+"/"+s.total+" úkolů</span></div>"
   +"<div class=\"shimmer-bar\"><i id=\"ov-fill\" style=\"clip-path:inset(0 "+(100-s.pct)+"% 0 0 round 100px)\"><span class=\"shine\"></span></i></div>"
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
   +"<h1>Plán po <span class=\"g\">blocích</span></h1>"
   +"<p class=\"lead\">Žádné datumy ani dny. Jdi blok po bloku svým tempem, odškrtávej hotové úkoly a každý splněný pošli do WhatsAppu.</p>"
   +"<div class=\"quote reveal\">"+md(UPF.planIntro).replace(/^<p>|<\/p>$/g,"").replace(/<\/p>\n?<p>/g,"<br>")+"</div>";
  UPF.blocks.forEach(function(bl,bi){
    var dn=bl.tasks.filter(function(t){return done(t.id);}).length;
    var ok=dn===bl.tasks.length;
    h+="<section class=\"week reveal"+(ok?" wdone":"")+"\" id=\"block-"+bl.id+"\"><div class=\"week-head\"><h2>"+esc(bl.ico)+" "+esc(bl.name)+"</h2><span class=\"sub\">"+esc(bl.sub)+"</span><span class=\"cnt\" data-block=\""+bi+"\">"+dn+"/"+bl.tasks.length+"</span></div>";
    bl.tasks.forEach(function(t,ti){
      var lines=t.task.split("\n");
      var main=inline(lines[0]);
      var rest=lines.slice(1).map(function(x){return inline(x);}).join("<br>");
      var pb=t.pb?" &nbsp;<a class=\"pblink\" href=\"#"+PB_NAV[t.pb]+"\" data-nav=\""+PB_NAV[t.pb]+"\">📚 kapitola</a>":"";
      h+="<label class=\"day"+(done(t.id)?" done":"")+"\" id=\"task-"+t.id+"\" data-task=\""+t.id+"\">"
       +"<span class=\"num\">Úkol "+(ti+1)+"</span>"
       +"<span class=\"task\">"+main+(rest?"<br>"+rest:"")
       +(t.submit?"<span class=\"sub\"><b>Do WhatsAppu:</b> "+esc(t.submit)+"</span>":"")
       +pb+"</span>"
       +"<input type=\"checkbox\" "+(done(t.id)?"checked":"")+" data-t=\""+t.id+"\">"
       +"</label>";
    });
    h+="</section>";
  });
  return h;
}

function renderSection(sec){
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
    h+="<div class=\"sb-link\" data-nav=\""+it.id+"\"><span class=\"ico\">"+it.ico+"</span>"+it.nav
      +(it.id==="plan"?"<span class=\"n\" id=\"sb-count\"></span>":"")+"</div>";
  });
  $("#sb-nav").innerHTML=h;
  $$(".sb-link").forEach(function(l){l.classList.toggle("active",l.dataset.nav===currentId);});
}
var currentId="prehled";
function show(id, gotoTask){
  currentId=id;
  $$(".page").forEach(function(p){p.classList.remove("on");});
  var pg=$("#page-"+id);if(!pg)return;
  if(id==="prehled")pg.innerHTML=renderPrehled();
  else if(id==="plan")pg.innerHTML=renderPlan();
  else if(UPF.unlocks[id]!==undefined)pg.innerHTML=renderSection(sectionById(id));
  pg.classList.add("on");
  buildSidebar();
  $(".sidebar").classList.remove("open");$(".scrim").classList.remove("on");
  if(gotoTask){
    var el=$("#task-"+gotoTask);
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
  var ov=$("#ov-fill");if(ov)ov.style.clipPath="inset(0 "+(100-s.pct)+"% 0 0 round 100px)";
  var ovp=$("#ov-pct");if(ovp)ovp.textContent=s.pct;
  $$(".week-head .cnt").forEach(function(el){
    var bi=+el.dataset.block,ts=UPF.blocks[bi].tasks;
    var dn=ts.filter(function(t){return done(t.id);}).length;
    el.textContent=dn+"/"+ts.length;
    var sec=el.closest(".week");if(sec)sec.classList.toggle("wdone",dn===ts.length);
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
    var gd=e.target.closest("[data-gotask]");
    if(gd){show("plan",gd.dataset.gotask);return;}
    var nv=e.target.closest("[data-nav]");
    if(nv){e.preventDefault();show(nv.dataset.nav);return;}
    var pc=e.target.closest(".prompt-copy");
    if(pc){var pre=pc.parentNode.querySelector("pre");navigator.clipboard.writeText(pre.textContent).then(function(){pc.textContent="Zkopírováno ✓";setTimeout(function(){pc.textContent="Kopírovat";},1600);});return;}
    if(e.target.matches(".day input[type=checkbox]")){
      var tid=e.target.dataset.t;setDone(tid,e.target.checked);
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
