var cadena = '';
		var cadenaInvertida = '';
		cadena=prompt('Ingrese una palabra para invertir','');
		maximo=cadena.length;
		for(i=cadena.length;i>0;i--){
			cadenaInvertida = cadenaInvertida + cadena[i];
		}
		console.log(cadenaInvertida);
	}