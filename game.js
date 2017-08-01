
function GhostMan(name, health, sprite, hits){
    var ghostman = 
        this.name = name; 
        this.health = health; 
        this.sprite = sprite; 
        this.hits = hits;
}

var ghost1 = new GhostMan ('Ghostman', 100, "http://i.imgur.com/GKSfYIL.png",0)

function attack( input ){
    if (ghost1.health > 0 && input === 'flash'){
        ghost1.health -= 1
        draw()
    } else if (ghost1.health > 0 && input === 'zap'){
        ghost1.health -= 5
        draw()
    } else if (ghost1.health > 0 && input === 'magic'){
        ghost1.health -= 10
        draw()
    } else if (ghost1.health <= 0){
        alert('Ghost has been eliminated')
    } else draw()
}

function draw() {
    var display = ''
display += `<div id="gamerender" class="container-fluid">
        <div class="row">
            <div class="col-xs-12 main-game-content">
                 <h>Ghostland</h>
                <img id="ghostman" class="center-block" src="${ghost1.sprite}"></img>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class=" col-xs-12 attackpanel" role="group" aria-label="...">
                <div class="attackbuttons">
                    <div id=>
                        <p>Health: ${ghost1.health} Hits: ${ghost1.hits}</p>
                    </div>
                    <span><span >
                    <div id="health" class="progress">
                        <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                            aria-valuemax="100" style="width: ${ghost1.health}%">
                    </span>
                </div>
            </div>
            <button type="button" onclick="attack('flash')" class="btn btn-default attackbuttons"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Flashlight</button>
            <button type="button" onclick="attack('zap')" class="btn btn-default attackbuttons"><i class="fa fa-bolt" aria-hidden="true"></i> Zapper</button>
            <button type="button" onclick="attack('magic')" class="btn btn-default attackbuttons"><i class="fa fa-magic" aria-hidden="true"></i> Magic Wand</button> 
        </div>
    </div>
    </div>
    </div>`
    {
    document.getElementById('gamerender').innerHTML = display
    }
}

draw()