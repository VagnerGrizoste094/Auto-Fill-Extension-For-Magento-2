const nameList = [
	'Time','Past','Future','Dev',
	'Fly','Flying','Soar','Soaring','Power','Falling',
	'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
	'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
	'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
	'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
	'Mine','Your','Worst','Enemy','Hostile','Force','Video',
	'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
	'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
	'Script','Writer','Near','Close','Open','Cube','Circle',
	'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
	'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
	'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
	'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
	'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
	'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
	'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
	'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
	'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
	'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
	'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich',
	'Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey',   'Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy',
	 'Girl','Vortex','Paradox'
];

function generateRandomName() {
    return nameList[Math.floor( Math.random() * nameList.length )];
}

function generateRandomEmail(customEmailDomain) {
    let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for(let ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return string + '@' + customEmailDomain;
}

function generateRandomTelephone() {
    return Math.floor(100000000 + Math.random() * 900000000);
}

function generateFakeDob() {
    let day = Math.floor(1 + Math.random() * 31).toString();
    let month = Math.floor(1 + Math.random() * 12).toString();
    let year =  Math.floor(1930 + Math.random() * 70).toString();

    return ('0' + day).slice(-2) + "/" + ('0' + month).slice(-2) + "/" + year;
}

function generateRandom(n) {
    let ranNum = Math.round(Math.random()*n);
    return ranNum;
}

function mod(dividend,divisor) {
	return Math.round(dividend - (Math.floor(dividend/divisor)*divisor));
}
function generateFakeCpf() {
	let n = 9;
	let n1 = generateRandom(n);
 	let n2 = generateRandom(n);
 	let n3 = generateRandom(n);
 	let n4 = generateRandom(n);
 	let n5 = generateRandom(n);
 	let n6 = generateRandom(n);
 	let n7 = generateRandom(n);
 	let n8 = generateRandom(n);
 	let n9 = generateRandom(n);
 	let d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
 	d1 = 11 - (mod(d1,11));
 	if (d1>=10) d1 = 0;
 	let d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
 	d2 = 11 - (mod(d2,11));
 	if (d2>=10) d2 = 0;
 	return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
}

function generateFakeCnpj() {
	let n = 9;
	let n1  = generateRandom(n);
 	let n2  = generateRandom(n);
 	let n3  = generateRandom(n);
 	let n4  = generateRandom(n);
 	let n5  = generateRandom(n);
 	let n6  = generateRandom(n);
 	let n7  = generateRandom(n);
 	let n8  = generateRandom(n);
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