
var health = 100
var hits = 0

function attack(attackdamage) {
    health -= attackdamage;
    console.log(health);
    hits ++
    healthBar(health)
}

function healthBar(input) {
    document.getElementById("stats").innerHTML = `
    <div class="row">
            <div class=" col-xs-12 attackpanel" role="group" aria-label="...">
                <div class="attackbuttons">
                    <div id=><p>Health: ${health} Hits: ${hits}</p></div>
                    <span><span >
                    <div id="health" class="progress">
                        <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                            aria-valuemax="100" style="width: ${health}%">
                    </span>
                </div>
            </div>
            <button type="button" onclick="attack(1)" class="btn btn-default attackbuttons"><i class="fa fa-bolt" aria-hidden="true"></i> Zapper</button>
            <button type="button" onclick="attack(5)" class="btn btn-default attackbuttons"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Flashlight</button>
            <button type="button" onclick="attack(10)" class="btn btn-default attackbuttons"><i class="fa fa-flask" aria-hidden="true"></i> Anti-ghost Potion</button>
        </div>
    </div>
    </div>`
}

healthBar()

