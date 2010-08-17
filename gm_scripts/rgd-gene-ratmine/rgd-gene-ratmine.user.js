// ==UserScript==
// @name           RGD-GENE-RatMine
// @namespace      http://github.com/simont/RGD-Greasemonkey-Scripts
// @description    Adds ratmine code to RGD Gene Reports
// @include        http://rgddev.mcw.edu/tools/genes/*
// @resource ratmineArrow http://ratmine.mcw.edu/ratmine/images/tmpl_arrow.png
// ==/UserScript==


var ratmine = document.getElementById("ratmine_genome");

var ratMineGeneSNP = "http://ratmine.mcw.edu/ratmine/loadQuery.do?skipBuilder=true&query=%3Cquery+name%3D%22%22+model%3D%22genomic%22+view%3D%22Gene.overlappingFeatures.primaryIdentifier+Gene.overlappingFeatures.chromosome.primaryIdentifier+Gene.overlappingFeatures.chromosomeLocation.start+Gene.overlappingFeatures.chromosomeLocation.end+Gene.overlappingFeatures.consequenceTypes.type%22+longDescription%3D%22Create+a+list+of+SNPs+associated+with+the+given+gene+or+list+of+genes.%22+sortOrder%3D%22Gene.overlappingFeatures.primaryIdentifier+asc%22%3E%3Cnode+path%3D%22Gene%22+type%3D%22Gene%22%3E%3Cconstraint+op%3D%22LOOKUP%22+value%3D%22" + "3001" + "%22+description%3D%22%22+identifier%3D%22%22+editable%3D%22true%22+code%3D%22B%22+extraValue%3D%22%22%3E%3C%2Fconstraint%3E%3C%2Fnode%3E%3Cnode+path%3D%22Gene.primaryIdentifier%22+type%3D%22String%22%3E%3C%2Fnode%3E%3Cnode+path%3D%22Gene.overlappingFeatures%22+type%3D%22SNP%22%3E%3C%2Fnode%3E%3Cnode+path%3D%22Gene.overlappingFeatures.chromosome%22+type%3D%22Chromosome%22%3E%3C%2Fnode%3E%3Cnode+path%3D%22Gene.overlappingFeatures.chromosomeLocation%22+type%3D%22Location%22%3E%3C%2Fnode%3E%3Cnode+path%3D%22Gene.overlappingFeatures.consequenceTypes%22+type%3D%22ConsequenceType%22%3E%3C%2Fnode%3E%3C%2Fquery%3E&trail=%7Cquery&method=xml";


if (ratmine) {
    // newElement = document.createElement('p');

	ratmine.innerHTML = '<ul>';
	ratmine.innerHTML +='<li><a href="'+ ratMineGeneSNP + '">Genes <img src="http://ratmine.mcw.edu/ratmine/images/tmpl_arrow.png" border="0"> SNPs</a></li>'
	// ratmine.innerHTML += "</ul>"
	
	list = ratmine.getElementsByTagName('ul');
	list[0].style.listStyleType = 'none';
    // relatedBlock.parentNode.insertBefore(newElement, relatedBlock.nextSibling);
	// relatedBlock.parentNode.insertBefore(img, relatedBlock.nextSibling);
}