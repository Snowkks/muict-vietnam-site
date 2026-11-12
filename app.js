// Menu toggle and live status of each admission round. No tracking or storage.
const menu=document.querySelector('.menu');
menu.addEventListener('click',()=>{const o=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!o));menu.textContent=o?'Menu':'Close'});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}));
const now=new Date(),fmt=d=>new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});let open=null;
document.querySelectorAll('tr[data-s]').forEach(r=>{const s=new Date(r.dataset.s),e=new Date(r.dataset.e+'T23:59:59'),b=r.querySelector('.badge');
if(now<s){b.textContent='Opens soon';b.className='badge soon'}else if(now<=e){b.textContent='Open now';b.className='badge open';open=open||[r.dataset.n,r.dataset.e]}else{b.textContent='Closed';b.className='badge'}});
const a=document.getElementById('status');if(open)a.innerHTML='<b>Round '+open[0]+' is open.</b> Apply by '+fmt(open[1])+' for the August 2027 intake.';
