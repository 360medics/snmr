// ===========================================================================================
//      Scripts communs à toutes les pages
// ===========================================================================================

// Retourne les valeurs cochées sur boutons radios
function f_GetRadioValue(id)
{
	var radios = document.getElementsByName(id);
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			return radios[i].value * 1;
		}
	}
	return 0;
}

// QIF (AM)
function f_GetRadioValueById(id)
{
	var radios = document.getElementsById(id);
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			return radios[i].value * 1;
		}
	}
	return 0;
}

// Retourne le nom de la page HTML en cours de visualisation
function f_GetFilename() {
	var url = window.location.pathname;
	return url.substring(url.lastIndexOf('/')+1);
}

// Analyse une date et renvoie un variant type date, null si erreur
function f_ParseDate(szDate) {
	var szDateElt = szDate.split(new RegExp("[/.;,:*-]"));
	var nMois = szDateElt[1]*1-1;
	var nJour = szDateElt[0]*1;
	var nAnnee = szDateElt[2]*1;
	if(szDateElt[0]*1 > 31) {
		nJour = szDateElt[2]*1;
		nAnnee = szDateElt[0]*1;
	}
	if(nJour < 1 || nJour > 31 || nMois > 11 || nMois < 0 || nAnnee < 1900)
		return null;

	 return new Date(nAnnee, nMois, nJour);
}

// Choix de la feuille de style en fonction du navigateur
function f_ChooseCss() {
	document.writeln('<link rel="stylesheet" href="styles.css" />');
}
