const menu=document.getElementById('menu'),links=document.getElementById('navlinks');
if(menu&&links){
  menu.addEventListener('click',()=>{
    const open=menu.getAttribute('aria-expanded')==='true';
    menu.setAttribute('aria-expanded',String(!open));
    links.classList.toggle('open',!open);
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    links.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
  }));
}
document.getElementById('year').textContent=new Date().getFullYear();

const amountButtons=[...document.querySelectorAll('.amount')],amountText=document.getElementById('amountText'),customAmount=document.getElementById('customAmount');
if(amountText){
  amountButtons.forEach(b=>{
    amountButtons.forEach(x=>{
      x.classList.remove('selected');
      x.setAttribute('aria-pressed','false');
    });
    b.classList.add('selected');
    b.setAttribute('aria-pressed','true');
    customAmount.value='';
    amountText.textContent=`Selection: UGX ${Number(b.dataset.amount).toLocaleString('en-UG')}.`;
  });
  customAmount.addEventListener('input',()=>{
    amountButtons.forEach(x=>{
      x.classList.remove('selected');
      x.setAttribute('aria-pressed','false');
    });
    if(customAmount.value){
      amountText.textContent=`Selection: UGX ${Number(customAmount.value).toLocaleString('en-UG')}.`;
    }else{
      amountText.textContent='Selection: UGX 50,000.';
    }
  });
}
const giveButton=document.getElementById('giveButton');
if(giveButton){
  giveButton.addEventListener('click',()=>{
    const s=document.getElementById('giveStatus');
    const amt=customAmount.value?`UGX ${Number(customAmount.value).toLocaleString('en-UG')}`:'UGX 50,000';
    s.hidden=false;
    s.className='status success';
    s.textContent=`Demo only: ${amt} was entered. No payment was started, and no money was collected. A bank API or payment processor is needed to actually receive donations.`;
  });
}

const form=document.getElementById('contactForm'),status=document.getElementById('formStatus');
if(form){
  form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    status.hidden=false;
    if(!form.reportValidity()){
      status.className='status error';
      status.textContent='Please complete each field with a valid email address.';
      return;
    }
    const button=form.querySelector('button[type=submit]');
    button.disabled=true;
    button.setAttribute('aria-busy','true');
    button.textContent='Sending…';
    status.className='status';
    status.textContent='Sending your message…';
    try{
      const formData=new FormData(form);
      const response=await fetch(form.action,{method:'POST',body:formData,headers:{'Accept':'application/json'}});
      if(response.ok){
        button.disabled=false;
        button.removeAttribute('aria-busy');
        button.textContent='Review message';
        status.className='status success';
        status.textContent='Thank you! Your message has been sent.';
        form.reset();
      }else{
        throw new Error('Submission failed');
      }
    }catch(err){
      button.disabled=false;
      button.removeAttribute('aria-busy');
      button.textContent='Review message';
      status.className='status error';
      status.textContent='Sorry, something went wrong. Please try again or email us directly.';
    }
  });
}

const wa=document.createElement('a');wa.href='https://wa.me/256778802972';wa.target='_blank';wa.rel='noopener';wa.textContent='WhatsApp';wa.style.cssText='position:fixed;bottom:20px;right:20px;background:#25D366;color:#fff;padding:12px 16px;border-radius:999px;font-weight:800;text-decoration:none;z-index:50;box-shadow:0 4px 12px rgba(0,0,0,.2)';document.body.appendChild(wa);
const timers=new Map();
counters.forEach(el=>{
  const target=+el.getAttribute('data-target');
  const suffix=target==76?'%':'';
  let start=0;
  const duration=2000;
  const stepTime=duration/target;
  const timer=setInterval(()=>{start++;el.textContent=start+suffix;if(start>=target){clearInterval(timer)}},stepTime);
});
