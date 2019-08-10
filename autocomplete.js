document.onkeydown = KeyPress;
function gera_random(n) {
    let ranNum = Math.round(Math.random()*n);
    return ranNum;
}
function mod(dividendo,divisor) {
	return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}
function cpf() {
	let n = 9;
	let n1 = gera_random(n);
 	let n2 = gera_random(n);
 	let n3 = gera_random(n);
 	let n4 = gera_random(n);
 	let n5 = gera_random(n);
 	let n6 = gera_random(n);
 	let n7 = gera_random(n);
 	let n8 = gera_random(n);
 	let n9 = gera_random(n);
 	let d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
 	d1 = 11 - (mod(d1,11));
 	if (d1>=10) d1 = 0;
 	let d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
 	d2 = 11 - (mod(d2,11));
 	if (d2>=10) d2 = 0;
 	return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
}

function cnpj() {
	let n = 9;
	let n1  = gera_random(n);
 	let n2  = gera_random(n);
 	let n3  = gera_random(n);
 	let n4  = gera_random(n);
 	let n5  = gera_random(n);
 	let n6  = gera_random(n);
 	let n7  = gera_random(n);
 	let n8  = gera_random(n);
 	let n9  = 0;//gera_random(n);
 	let n10 = 0;//gera_random(n);
 	let n11 = 0;//gera_random(n);	
 	let n12 = 1;//gera_random(n);		
	let d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
 	d1 = 11 - ( mod(d1,11) );
 	if (d1>=10) d1 = 0;
 	let d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
 	d2 = 11 - ( mod(d2,11) );
 	if (d2>=10) d2 = 0;
	return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;
}
function onGot(item){
	console.log(item.color)
	console.log(item.color == 'blue')
	if (item.color == 'blue') {
		return '1'
	}
	return '0'
}
function onError(error) {
  console.log(`Error: ${error}`);
}
function KeyPress(e) {
	let color = null;
	let getting = browser.storage.sync.get('config')
    getting.then((obj) => {
    	if (obj.config.active == '0') {
    		return false
    	}
		let evtobj = window.event? event : e
	    if (evtobj.keyCode == 66 && evtobj.shiftKey) {
	      	let inputs = document.querySelectorAll("input, select")
		  	const divyArray = Array.from(inputs)
		  	let teste = divyArray.filter(function(input) {
		  		if (input.offsetWidth > 0 || input.offsetHeight > 0) {
					return input
		  		}
			});
			teste.forEach(function(el, idx) {
				switch (true) {
					case (el.name.search(/firstname/) > 0):
				   		el.value = 'Vagner'
				    break;
				    case (el.name.search(/lastname/) > 0):
				   		el.value = 'Grizoste'
				    break;
				    case (el.name.search(/email/) > 0):
				   		el.value = 'ctzquenaoexiste1@hotmail.com'
				    break;
				    case (el.name.search(/cpf/) > 0):
				   		el.value = cpf()
				    break;
				    case (el.name.search(/telephone/) > 0):
				   		el.value = '(43) 2345-6789'
				    break;
				    case (el.name.search(/fax/) > 0):
				   		el.value = '(43) 12345-6789'
				    break;
				    case (el.name.search(/pass/) > 0):
				   		el.value = '123456'
				    break;
				    case (el.name.search(/confirmpass/) > 0):
				   		el.value = '123456'
				    break;
				    case (el.name.search(/newsletter/) > 0):
				   		el.value = '0'
				    break;
				    case (el.name.search(/postcode/) > 0):
				   		el.value = '01010-000'
				   		el.focus();
				   		el.blur();
				    break;		    
				    // case (el.name.search(/\[street\]\[0\]/) > 0):
				   	// 	el.value = 'rua teste'
				    // break;		    
				    case (el.name.search(/\[street\]\[1\]/) > 0):
				   		el.value = '99'
				    break;		    
				    // case (el.name.search(/\[street\]\[2\]/) > 0):
				   	// 	el.value = 'casa'
				    // break;		    
				    // case (el.name.search(/\[street\]\[3\]/) > 0):
				   	// 	el.value = 'testando'
				    // break;		    
				    // case (el.name.search(/region_id/) > 0):
				   	// 	el.value = '499'
				    // break;
				    // case (el.name.search(/city/) > 0):
				   	// 	el.value = 'testado'
				    // break;		    
				    case (el.name.search(/reference/) > 0):
				   		el.value = 'blablabla'
				    break;
				}
			});
		}
	})
}


