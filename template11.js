/* Template11: visual-only helper. No API/business logic changes. */
(function(){
  'use strict';
  function ready(){
    document.documentElement.classList.add('template11-ready');
    var hero=document.getElementById('home');
    var header=document.querySelector('.site-header');
    if(hero && header){
      hero.setAttribute('data-template11-hero','1');
      header.setAttribute('data-template11-nav','1');
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ready,{once:true});
  else ready();
})();
