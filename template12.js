/* Template12: visual-only helper. No API/business logic changes. */
(function(){
  'use strict';
  function ready(){
    document.documentElement.classList.add('template12-ready');
    var hero=document.getElementById('home');
    var header=document.querySelector('.site-header');
    var overlay=document.getElementById('websiteHeroOverlay');
    if(hero) hero.setAttribute('data-template12-hero','1');
    if(header) header.setAttribute('data-template12-nav','1');
    if(overlay) overlay.setAttribute('data-template12-ellipse','1');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ready,{once:true});
  else ready();
})();
