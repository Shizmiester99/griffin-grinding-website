// Mobile burger
const burger=document.querySelector('.burger');
const menu=document.querySelector('.menu');
if(burger&&menu){burger.addEventListener('click',()=>menu.classList.toggle('open'));}

// Accordion/reveal behaviour on home products
(function(){
  const grid=document.getElementById('productsGrid');
  if(!grid) return;
  grid.querySelectorAll('.reveal').forEach(card=>{
    const btn=card.querySelector('button');
    const panel=card.querySelector('.panel');
    btn.addEventListener('click',()=>{
      const isOpen=card.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
      panel.setAttribute('aria-hidden', !isOpen);
    });
    // Hover open on devices with fine pointer
    if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
      card.addEventListener('mouseenter',()=>{card.classList.add('open');btn.setAttribute('aria-expanded','true');panel.setAttribute('aria-hidden','false');});
      card.addEventListener('mouseleave',()=>{card.classList.remove('open');btn.setAttribute('aria-expanded','false');panel.setAttribute('aria-hidden','true');});
    }
  });
})();

// Product detail renderer + chart PNG detection
(function(){
  const root=document.getElementById('product-detail-root');
  if(!root) return;
  const q=new URLSearchParams(location.search);
  const key=(q.get('product')||'grinding-balls').toLowerCase();
  const products={
    'grinding-balls':{
      title:'Grinding Balls (Ball Mill / SAG Mill)',
      desc:'Our Forged Steel Balls are engineered for high-impact, heavy-duty applications. With a dense, uniform structure, exceptional hardness, and superior wear resistance, they are ideal for SAG mills and large ball mills, delivering long service life, low breakage, and maximum efficiency.',
      image:'assets/img/grinding-balls.jpg',
      specs:[['Size Range','20–125 mm'],['Hardness (HRC)','58–65'],['Chemistry','Low/High Chrome'],['Applications','Ball & SAG mills']]
    },
    'chrome-cast-balls':{
      title:'Chrome Cast Balls',
      desc:'Chrome cast steel balls designed to deliver reliable performance and long service life across a range of grinding applications. Available in low, medium, and high chromium grades to suit different mill types and operational needs.',
      image:'assets/img/chrome-cast-balls.jpg',
      specs:[['Cr Content','Low / Medium / High'],['Hardness','As specified'],['Applications','Wide range of mills']]
    },
    'cast-grinding-cylpebs':{
      title:'Cast Grinding Cylpebs',
      desc:'Cast grinding cylpebs combine the advantages of grinding balls and grinding rods, offering excellent wear resistance while preventing over‑grinding of the ore.',
      image:'assets/img/cast-grinding-cylpebs.jpg',
      specs:[['Size Range','Project‑specific'],['Hardness','Project‑specific']]
    },
    'grinding-rods':{
      title:'Grinding Rods',
      desc:'Grinding rods deliver efficient, reliable performance in rod mills, combining high hardness and excellent wear resistance. They help maximize milling efficiency, reduce breakage, and lower operating costs.',
      image:'assets/img/grinding-rods.jpg',
      specs:[['Diameter','40–100 mm'],['Length','2–6 m'],['Hardness','45–55 HRC']]
    }
  };
  const data=products[key]||products['grinding-balls'];
  document.title=data.title+' | Griffin Grinding';
  root.querySelectorAll('[data-title]').forEach(n=>n.textContent=data.title);
  root.querySelector('[data-desc]').textContent=data.desc;
  const img=root.querySelector('[data-image]'); img.src=data.image; img.alt=data.title;

  const chart=document.getElementById('spec-chart');
  const table=document.getElementById('spec-table');
  const candidates=[`assets/img/${key}-spec.png`,`assets/img/${key}-specs.png`,`assets/img/${key}_spec.png`];
  if(key==='grinding-balls') candidates.unshift('assets/img/griding-balls-spec.png');
  function tryNext(i){
    if(i>=candidates.length){ chart.style.display='none'; table.style.display='table'; return; }
    const src=candidates[i]; const probe=new Image();
    probe.onload=()=>{ chart.src=src; chart.style.display='block'; table.style.display='none'; };
    probe.onerror=()=>tryNext(i+1); probe.src=src;
  }
  tryNext(0);

  const tbody=table.querySelector('tbody'); tbody.innerHTML='';
  for(const [k,v] of (data.specs||[])){ const tr=document.createElement('tr'); tr.innerHTML=`<th scope="row">${k}</th><td>${v}</td>`; tbody.appendChild(tr); }
})();
