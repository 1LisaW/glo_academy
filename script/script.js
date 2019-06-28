let num = "266219";
let acc = 1;


console.log( num );

for ( let i = 0; i < num.length; i++ ){
    acc *= num[i];
}

console.log( acc );
console.log( String( acc**3 ) );
console.log( String( acc**3 ).slice(0,2) );