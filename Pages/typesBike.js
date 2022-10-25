/* Page: https://www.onroad.to/teorico/clases-autoescuela/usuarios-via/tipos-vehiculos/bicicletas/tipos-bicicletas */

let json = {};
json.title = document.querySelector('div > h2').textContent.trim();
json.subtitle = document.querySelector('div > p:nth-child(3)').textContent.trim();
json.Carretera = document.querySelector('div > h3').textContent.trim();
json.carreteraCaracteristica = document.querySelector("#__next > div > div:nth-child(3) > main > article > div.Content_3hCmKD > div:nth-child(4) > div > div > p:nth-child(2)").textContent.trim();
json.mountainBike = document.querySelector('div > h3:nth-child(7)').textContent.trim();
json.mountainCharacteristic = document.querySelector('div > div > p:nth-child(9)').textContent.trim();
json.gravelBike = document.querySelector('div > div > h3:nth-child(17)').textContent.trim();
json.gravelCharacteristic = document.querySelector('div > div > p:nth-child(18)').textContent.trim();
json.cicloCrossBike = document.querySelector('div > div > h3:nth-child(21)').textContent.trim();
json.cicloCharacteristic = document.querySelector('div > div > p:nth-child(22)').textContent.trim();
json.urbanBikes = document.querySelector('div > div > h3:nth-child(25)').textContent.trim();
json.urbanCharacteristics = document.querySelector(' div > div > p:nth-child(26)').textContent.trim();
json.stuntBikes = document.querySelector('div > div > h3:nth-child(30)').textContent.trim();
json.stuntCharacteristics = document.querySelector('div > div > p:nth-child(31)').textContent.trim();
json.electricBikes = document.querySelector('div > div > h3:nth-child(38)').textContent.trim();
json.electricCharacteristics = document.querySelector('div > div > p:nth-child(39)').textContent.trim();