// ==UserScript==
// @name           RGD-QTL-RatMine
// @namespace      http://github.com/simont/RGD-Greasemonkey-Scripts
// @description    Adds RatMine links to RGD QTL page
// @include        http://rgd.mcw.edu/objectSearch/*
// @resource ratmineArrow http://ratmine.mcw.edu/ratmine/images/tmpl_arrow.png
// ==/UserScript==


var img = document.createElement('img');
img.src = 'http://ratmine.mcw.edu/ratmine/images/tmpl_arrow.png';
// document.body.appendChild(img);


var ratmine, newElement;
ratmine = document.getElementById('ratmine_genome');
if (relatedBlock) {
    newElement = document.createElement('p');
	newElement.innerHTML = 'Ratmine <img src="http://ratmine.mcw.edu/ratmine/images/tmpl_arrow.png"> RGD'
    relatedBlock.parentNode.insertBefore(newElement, relatedBlock.nextSibling);
	// relatedBlock.parentNode.insertBefore(img, relatedBlock.nextSibling);
}