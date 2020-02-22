let beers =0;
const drunk =10;
var doc =1;

while(beers < drunk){
   beers ++;

if (doc < 3) {

   const plural = (beers === 1) ? ' ' : 's';
   console.log(`Tomou ${beers} cerveja${plural}.`);

} else {

   const plural = (beers === 1) ? ' ' : 's';
   console.log(`Tomou ${beers} whisk${plural}.`);
}
 doc++;

}

console.log('Vá pra casa, você está bebado.');
let tot =();
console.log(`Voçê bebeu ${beers} cervejas`);