export const toast = (msg) => {
  const el = document.createElement('div');
  el.textContent = msg;
  el.style.position='fixed';
  el.style.bottom='24px';
  el.style.left='50%';
  el.style.transform='translateX(-50%)';
  el.style.padding='12px 16px';
  el.style.background='rgba(31,41,55,.95)';
  el.style.color='white';
  el.style.borderRadius='12px';
  el.style.zIndex='9999';
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 2200);
};
