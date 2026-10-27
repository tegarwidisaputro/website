(function(){
var d=document,r=matchMedia('(prefers-reduced-motion:reduce)').matches;
var nav=d.querySelector('.nav'),b=d.querySelector('.menu-btn'),n=d.querySelector('.links');
function sc(){nav.classList.toggle('scrolled',scrollY>30)}sc();addEventListener('scroll',sc,{passive:true});
if(b){b.addEventListener('click',function(){var o=n.classList.toggle('open');nav.classList.toggle('open',o);b.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.closest('a')){n.classList.remove('open');nav.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
var els=d.querySelectorAll('.rv');
if(r||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('on')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}
var hi=d.querySelector('.hero-img');
if(hi&&!r){var mx=0,my=0,t=false;
var u=function(){hi.style.transform='translate3d('+(mx*-16)+'px,'+(scrollY*.12+my*-10)+'px,0) scale(1.05)';t=false};
var q=function(){if(!t){t=true;requestAnimationFrame(u)}};
addEventListener('scroll',q,{passive:true});
addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;q()},{passive:true});u()}
var fb=d.querySelectorAll('[data-filter]');
fb.forEach(function(x){x.addEventListener('click',function(){var f=x.dataset.filter;
fb.forEach(function(y){y.setAttribute('aria-pressed',y===x)});
d.querySelectorAll('.card').forEach(function(c){c.hidden=!(f==='all'||c.dataset.cat===f)})})});
var tw=d.querySelector('.tabs-wrap');
if(tw){tw.classList.add('on');var tb=[].slice.call(tw.querySelectorAll('[role=tab]')),tp=[].slice.call(tw.querySelectorAll('[role=tabpanel]'));
var sel=function(i,f){tb.forEach(function(x,j){x.setAttribute('aria-selected',i===j);x.tabIndex=i===j?0:-1;tp[j].hidden=i!==j});if(f)tb[i].focus()};
tb.forEach(function(x,i){x.addEventListener('click',function(){sel(i)});x.addEventListener('keydown',function(e){
if(e.key==='ArrowRight')sel((i+1)%tb.length,1);else if(e.key==='ArrowLeft')sel((i+tb.length-1)%tb.length,1)})});sel(0)}
if(!r)d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');
if(!a||a.target||a.hasAttribute('download')||e.metaKey||e.ctrlKey||e.shiftKey||a.origin!==location.origin||a.pathname===location.pathname)return;
e.preventDefault();d.body.style.transition='opacity .25s';d.body.style.opacity=0;setTimeout(function(){location.href=a.href},250)});
addEventListener('pageshow',function(e){if(e.persisted)d.body.style.opacity=1});
})();
