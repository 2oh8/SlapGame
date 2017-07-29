
var health = 100


function attack(attackdamage){
health -= attackdamage;
console.log(health);
}

function healthBar( input ){
    document.getElementById("health").innerHTML = `
    <div class="progress">
        <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0"
        aria-valuemax="100" style="width: ${ input }%">`
}


