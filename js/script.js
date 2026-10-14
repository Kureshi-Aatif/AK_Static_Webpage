// ===== EDIT YOUR DETAILS HERE =====
const C={phone:"917698450003",phoneShow:"+91 76984 50003",email:"AKdigitalstudio.org@gmail.com",insta:"https://instagram.com/ak.digital_studio?xtok=MTl6Y255c2FubTAwOQ%3D%3D",
greet:"Hi AK Digital Studio, I would like to know more about your services."};
// ==================================
const wa=t=>`https://wa.me/${C.phone}?text=${encodeURIComponent(t)}`;
document.querySelectorAll('.wa-link').forEach(a=>a.href=wa(a.dataset.msg||C.greet));
document.querySelectorAll('.tel-link').forEach(a=>a.href='tel:+'+C.phone);
document.querySelectorAll('.email-link').forEach(a=>a.href='mailto:'+C.email);
document.querySelectorAll('.ig-link').forEach(a=>a.href=C.insta);
document.querySelectorAll('.email-text').forEach(e=>e.textContent=C.email);
document.querySelectorAll('.phone-text').forEach(e=>e.textContent=C.phoneShow);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
const links=[...document.querySelectorAll('nav a[href^="#"]:not(.btn)')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(s=>so.observe(s));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('open')));
const f=document.getElementById('qform');
const msg=()=>{const d=new FormData(f);return `Hi AK Digital Studio, I'm ${d.get('n')}${d.get('b')?' from '+d.get('b'):''}. I'm interested in: ${d.get('p')}.${d.get('m')?'\n\n'+d.get('m'):''}`};
f.addEventListener('submit',e=>{e.preventDefault();window.open(wa(msg()),'_blank')});
document.getElementById('viaMail').onclick=()=>{if(f.reportValidity())location.href=`mailto:${C.email}?subject=${encodeURIComponent('Quote request: '+f.p.value)}&body=${encodeURIComponent(msg())}`};
