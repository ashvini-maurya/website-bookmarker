function localStoreData(){
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem === null) {
			console.log("nothing in the localStorage");
		}
		else {
			var websiteName = document.getElementById('websiteName').value;
			var websiteURL = document.getElementById('websiteURL').value;

			var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
			var regex = new RegExp(expression);

			if (websiteURL.match(regex) && websiteName !== "") {
			  localStorage.setItem(websiteName, websiteURL);
			} else {
			  console.log("Please enter valid website Name and URL");
			}			
		}
	}
	else {
		document.getElementById("getWebsiteName").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}


function getLocalStoredData() {
	localStoreData();
	var localStoredWebsiteName = localStorage.getItem(websiteName);
	var localStoredWebsiteURL = localStorage.getItem(websiteURL);
	document.getElementById('getWebsiteName').innerHTML = '';
	document.getElementById('getWebsiteUrl').innerHTML = '';

	Object.keys(localStorage).forEach(function(x) { 
		var name = document.createElement('h4');
		var url = document.createElement('h4');
		name.innerHTML = x;
		url.innerHTML = localStorage[x];
		document.getElementById('getWebsiteName').appendChild(name);
		document.getElementById('getWebsiteUrl').appendChild(url);
	})	
}

window.onload = getLocalStoredData;
document.getElementById('addWebsite').onclick = getLocalStoredData;