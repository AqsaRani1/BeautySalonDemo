/* shared.js */
const NAV = `
<nav class="nav" id="snav">
  <div class="nav-inner">
    <a href="index.html" class="logo">
      <span class="logo-icon"><svg width="20" height="26" viewBox="0 0 20 26" fill="none"><path d="M10 1C10 1 2 7.5 2 15C2 19.8 5.6 24 10 25C14.4 24 18 19.8 18 15C18 7.5 10 1 10 1Z" fill="currentColor" opacity=".85"/><line x1="10" y1="25" x2="10" y2="9" stroke="white" stroke-width=".8" stroke-linecap="round"/></svg></span>
      <span class="logo-name">Lumière <em>Spa</em></span>
    </a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="gallery.html">Gallery</a>
      <a href="team.html">Our Team</a>
      <a href="pricing.html">Pricing</a>
      <a href="blog.html">Journal</a>
      <a href="contact.html">Contact</a>
    </div>
    <a href="booking.html" class="nav-cta">Book a Treatment</a>
    <button class="burger" id="burg" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mob-nav" id="mnav">
  <a href="index.html">Home</a>
  <a href="services.html">Services</a>
  <a href="gallery.html">Gallery</a>
  <a href="team.html">Our Team</a>
  <a href="pricing.html">Pricing</a>
  <a href="blog.html">Journal</a>
  <a href="contact.html">Contact</a>
  <a href="booking.html" class="mob-cta">Book a Treatment</a>
</div>`;

const FOOTER = `
<footer>
  <div class="ft-top">
    <div>
      <a href="index.html" class="logo"><span class="logo-icon" style="color:var(--sand)"><svg width="18" height="22" viewBox="0 0 20 26" fill="none"><path d="M10 1C10 1 2 7.5 2 15C2 19.8 5.6 24 10 25C14.4 24 18 19.8 18 15C18 7.5 10 1 10 1Z" fill="currentColor" opacity=".85"/><line x1="10" y1="25" x2="10" y2="9" stroke="white" stroke-width=".8" stroke-linecap="round"/></svg></span><span class="logo-name" style="color:var(--cream)">Lumière <em style="color:var(--sand)">Spa</em></span></a>
      <p class="ft-tagline">A sanctuary of botanical beauty<br>and holistic wellness, London.</p>
      <div class="ft-social">
        <a href="#" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg></a>
        <a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
        <a href="#" aria-label="Pinterest"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.5 2 2 6.5 2 12c0 3.9 2.2 7.2 5.4 8.9-.1-.7-.1-1.8.1-2.6.2-.7 1.2-4.9 1.2-4.9s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.8 0 1.2.6 1.2 1.4 0 .9-.5 2.2-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3-2.3 3-5 0-2.1-1.4-3.6-3.9-3.6-2.8 0-4.6 2.1-4.6 4.5 0 .8.2 1.4.6 1.8.2.2.2.3.1.5l-.5 1.8c-.1.2-.2.3-.4.2-1.2-.5-1.7-1.8-1.7-3.3 0-2.4 2-5.3 6-5.3 3.2 0 5.3 2.3 5.3 4.8 0 3.3-1.8 5.8-4.5 5.8-.9 0-1.7-.5-2-1l-.5 2.1c-.2.8-.7 1.8-1.1 2.4.8.3 1.7.4 2.6.4 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg></a>
      </div>
    </div>
    <div class="ft-cols">
      <div class="ft-col"><h5>Explore</h5><ul><li><a href="services.html">Services</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="team.html">Our Team</a></li><li><a href="pricing.html">Pricing</a></li><li><a href="blog.html">Journal</a></li><li><a href="booking.html">Book Now</a></li></ul></div>
      <div class="ft-col"><h5>Treatments</h5><ul><li><a href="services.html">Botanical Facials</a></li><li><a href="services.html">Ritual Massage</a></li><li><a href="services.html">Body Wraps</a></li><li><a href="services.html">Hair Studio</a></li><li><a href="services.html">Nail Artistry</a></li><li><a href="services.html">Bridal Packages</a></li></ul></div>
      <div class="ft-col"><h5>Visit Us</h5><p>14 Rosewood Lane<br>London, W1K 4PP</p><p style="margin-top:.5rem"><a href="tel:+442071234567">+44 207 123 4567</a></p><p><a href="mailto:hello@lumierespa.com">hello@lumierespa.com</a></p><p style="margin-top:.8rem;color:rgba(247,242,234,.3);font-size:.76rem">Mon–Sat: 9am–8pm<br>Sunday: 10am–6pm</p></div>
    </div>
  </div>
  <div class="ft-bottom">
    <p class="ft-copy">© ${new Date().getFullYear()} Lumière Spa. All rights reserved.</p>
    <div class="ft-legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
  </div>
</footer>`;

function boot() {
  // Inject
  const np = document.getElementById('nav-ph'); if(np) np.outerHTML = NAV;
  const fp = document.getElementById('ft-ph'); if(fp) fp.outerHTML = FOOTER;

  // Sticky nav
  const nav = document.getElementById('snav');
  if(nav){ const t=()=>nav.classList.toggle('solid',scrollY>40); addEventListener('scroll',t,{passive:true}); t(); }

  // Active link
  const pg = location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{ if(a.getAttribute('href')===pg) a.classList.add('active'); });

  // Burger
  const b=document.getElementById('burg'), m=document.getElementById('mnav');
  if(b&&m){
    b.addEventListener('click',()=>{ const o=b.classList.toggle('open'); m.classList.toggle('open',o); b.setAttribute('aria-expanded',o); document.body.style.overflow=o?'hidden':''; });
    m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ b.classList.remove('open'); m.classList.remove('open'); document.body.style.overflow=''; }));
  }

  // Fade up
  const els=document.querySelectorAll('.fu');
  if('IntersectionObserver' in window && els.length){
    const ob=new IntersectionObserver(en=>en.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('vis');ob.unobserve(e.target);} }),{threshold:.08,rootMargin:'0px 0px -25px 0px'});
    els.forEach((el,i)=>{ el.style.transitionDelay=`${(i%5)*.08}s`; ob.observe(el); });
  } else { els.forEach(e=>e.classList.add('vis')); }

  // 3D tilt on tilt-enabled cards
  document.querySelectorAll('.tilt3d').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(800px) rotateY(${x*12}deg) rotateX(${-y*12}deg) translateY(-6px)`;
      card.style.boxShadow=`${-x*20}px ${y*20+20}px 50px rgba(46,32,22,.2)`;
    });
    card.addEventListener('mouseleave',()=>{ card.style.transform=''; card.style.boxShadow=''; });
  });

  // Counter animation
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=parseFloat(el.dataset.count);
    const suffix=el.dataset.suffix||'';
    let start=null;
    const obs=new IntersectionObserver(([e])=>{
      if(!e.isIntersecting) return;
      obs.unobserve(el);
      const dur=1800;
      function step(ts){
        if(!start) start=ts;
        const p=Math.min((ts-start)/dur,1);
        const ease=1-Math.pow(1-p,3);
        const val=ease*target;
        el.textContent=(Number.isInteger(target)?Math.round(val):val.toFixed(0))+ suffix;
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    },{threshold:.5});
    obs.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', boot);
