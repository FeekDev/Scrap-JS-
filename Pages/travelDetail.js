/* Page: https://blogturistico.com/muralla-chinamuestra-de-una-cultura/ */
let json = {}; 
json = document.querySelector('head > title:nth-child(6)').tritextContent.trim();
json.desciptionion = document.querySelector('head > meta:nth-child(12)').content.trim();
json.posted = document.querySelector('#rop > small').textContent.split('posted').pop();