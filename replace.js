window.onload = function() {
	// add pitempricevalue 
	try {
		document.getElementById('pconfirmtotalprice').classList.add('pitempricevalue');
	} catch(e) {}

	// add pitempricevalue
	try {
		document.getElementById('ptotalpricevalue').classList.add('pitempricevalue');
	} catch (e) {}
	
	
	// ALL pitempricevalue +руб.
	try {
		var prices = document.getElementsByClassName('pitempricevalue');
		for (var i = 0; i < prices.length; ++i) {
			var item = prices[i];  
			item.innerText += " руб.";
		}
	} catch (e) {}


	try {
		var aTags = document.getElementsByTagName("a");
		var searchText = "Выбрать";
		
		for (var i = 0; i < aTags.length; i++) {
			if (aTags[i].textContent == searchText) {
				found = aTags[i];
				found.classList.add('major_button');
			}
		}
	} catch (e) {}

	
	var btns = document.getElementsByClassName('major_button');
	for (var i = 0; i < btns.length; ++i) {
		var item = btns[i];  
		item.classList.add('recoloredBtn');
	}
	
	try {
		document.getElementById("capplaces").innerText = "Число кошек";
	} catch (e) {}


	try {
		var links = document.querySelectorAll('a');
		for (var i = 0; i < links.length; i++) {
			if (links[i].textContent.includes('Другие варианты')) {
				links[i].style.color = '#000000'; // Черный цвет
				links[i].style.fontSize = '125%'; // Увеличение
				links[i].style.fontWeight = 'bold'; // Жирный шрифт для улучшения читаемости
				break;
			}
		}
	} catch (e) {
		console.error('Error modifying "Другие варианты" link:', e);
	}
}
