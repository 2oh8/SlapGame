
function GameController(){

//PRIVATE

var gameService = new GameService()

function draw() {
    
    var ghosts = gameService.getTarget()
    var display = ''
display += `<div id="gamerender" class="container-fluid">
        <div class="row">
            <div class="col-xs-12 main-game-content">
                 <h>Ghostland</h>
                <img id="ghostman" class="center-block" src="${ghosts.sprite}"></img>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class=" col-xs-12 attackpanel" role="group" aria-label="...">
                <div class="attackbuttons">
                    <div id=>
                        <p>Health: ${ghosts.health} Hits: ${ghosts.hits}</p>
                    </div>
                    <span><span >
                    <div id="health" class="progress">
                        <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                            aria-valuemax="100" style="width: ${ghosts.health}%">
                    </span>
                </div>
            </div>
            <button type="button" onclick="app.controllers.gameController.flash()" class="btn btn-default attackbuttons"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Flashlight</button>
            <button type="button" onclick="app.controllers.gameController.zap()" class="btn btn-default attackbuttons"><i class="fa fa-bolt" aria-hidden="true"></i> Zapper</button>
            <button type="button" onclick="app.controllers.gameController.magic()" class="btn btn-default attackbuttons"><i class="fa fa-magic" aria-hidden="true"></i> Magic Wand</button> 
        </div>
    </div>
    </div>
    </div>`
    {
    document.getElementById('gamerender').innerHTML = display
    }
}

draw()

//PUBLIC

this.flash = function flashAttack(){
 gameService.attack('flash')
 draw()
}
this.zap = function zapAttack(){
 gameService.attack('zap')
 draw()
}
this.magic = function magicAttack(){
 gameService.attack('magic')
 draw()
}
}