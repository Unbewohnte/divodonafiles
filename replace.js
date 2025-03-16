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
}
