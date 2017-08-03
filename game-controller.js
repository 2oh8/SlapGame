
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
        <div>
            <button type="button" onclick="app.controllers.gameController.healthRecharge()" class="btn btn-default attackbuttons"><i class="fa fa-medkit" aria-hidden="true"></i> Health Recharge</button>
            <button type="button" onclick="app.controllers.gameController.equipMegaBattery()" class="btn btn-default attackbuttons"><i class="fa fa-battery-full" aria-hidden="true"></i> Mega Battery</button>
            <button type="button" onclick="app.controllers.gameController.equipPotion()" class="btn btn-default attackbuttons"><i class="fa fa-flask" aria-hidden="true"></i> Anit Ghost Potion</button> 
        </div>
    </div>
    </div>
    </div>`
    {
    document.getElementById('gamerender').innerHTML = display
    }
}

function drawModsMegaBattery() {
    
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
            <button type="button" onclick="app.controllers.gameController.megaFlash()" class="btn btn-default attackbuttons"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Flashlight</button>
            <button type="button" onclick="app.controllers.gameController.megaZap()" class="btn btn-default attackbuttons"><i class="fa fa-bolt" aria-hidden="true"></i> Zapper</button>
            <button type="button" onclick="app.controllers.gameController.magic()" class="btn btn-default attackbuttons"><i class="fa fa-magic" aria-hidden="true"></i> Magic Wand</button> 
        </div>
        <div>
            <button type="button" onclick="app.controllers.gameController.healthRecharge()" class="btn btn-default attackbuttons"><i class="fa fa-medkit" aria-hidden="true"></i> Health Recharge</button>
            <button type="button" onclick="" class="btn btn-default attackbuttons"><i class="fa fa-battery-full" aria-hidden="true"></i> Mega Battery</button>
            <button type="button" onclick="" class="btn btn-default attackbuttons"><i class="fa fa-flask" aria-hidden="true"></i> Anit Ghost Potion</button> 
        </div>
    </div>
    </div>
    </div>`
    {
    document.getElementById('gamerender').innerHTML = display
    }
}

function drawModsEquipPotion() {
    
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
            <button type="button" onclick="app.controllers.gameController.megaWand()" class="btn btn-default attackbuttons"><i class="fa fa-magic" aria-hidden="true"></i> Magic Wand</button> 
        </div>
        <div>
            <button type="button" onclick="app.controllers.gameController.healthRecharge()" class="btn btn-default attackbuttons"><i class="fa fa-medkit" aria-hidden="true"></i> Health Recharge</button>
            <button type="button" onclick="" class="btn btn-default attackbuttons"><i class="fa fa-battery-full" aria-hidden="true"></i> Mega Battery</button>
            <button type="button" onclick="" class="btn btn-default attackbuttons"><i class="fa fa-flask" aria-hidden="true"></i> Anit Ghost Potion</button> 
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
this.healthRecharge = function healthRecharge(){
gameService.attack('health')
    draw()
}
this.equipMegaBattery = function megaFlash(){
    drawModsMegaBattery()
    
}
this.equipPotion = function megaFlash(){
    drawModsEquipPotion()

}
this.megaFlash = function megaFlash(){
    gameService.attack('megaFlash')
    drawModsMegaBattery()
}
this.megaZap = function megaZap(){
    gameService.attack('megaZap')
    drawModsMegaBattery()
}
this.megaWand = function megaWand(){
    gameService.attack('ghostPotionActive')
    drawModsEquipPotion()
}
}