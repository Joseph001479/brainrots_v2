// Efeito na barra de pesquisa
document.querySelector('.search input').addEventListener('focus', ()=>{
  document.querySelector('.search').style.boxShadow = '0 6px 20px rgba(0,0,0,0.6)';
});
