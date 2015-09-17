var fs = require('fs');
fs.readFile(process.argv[2], function(err, res){
	var arrayLatters = res.toString().split('');

	arrayLatters.forEach(function(letra,indice){
		if(esVocal(letra)){
			arrayLatters[indice] = letra.toUpperCase();
		}
	});
});

fs.writeFile('Mayus' + process.argv[2], arrayLatters.join(''), function(err){
	if(err){
		return;
	}
	console.log('El archivo se escribio correctamente');
});

function esVocal(letra){
	//recorro el array en busca de vocales, y busco el indice de letra en node.
	if(['a','e','i','o','u'].indexOf(letra.toLowerCase()) != -1){
		return true;
	}else{
		return false;
	}
}