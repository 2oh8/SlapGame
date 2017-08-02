
function GameService(){

//PRIVATE

function GhostMan(name, health, sprite, hits){
    var ghostman = 
        this.name = name; 
        this.health = health; 
        this.sprite = sprite; 
        this.hits = hits;
}

var ghost1 = new GhostMan ('Ghostman', 100, "http://i.imgur.com/GKSfYIL.png",0)

this.attack = function attack( input ){
    if (ghost1.health > 0 && input === 'flash'){
        ghost1.health -= 1
        console.log(ghost1.health)
    } else if (ghost1.health > 0 && input === 'zap'){
        ghost1.health -= 5
    } else if (ghost1.health > 0 && input === 'magic'){
        ghost1.health -= 10
    } else if (ghost1.health <= 0){
        alert('Ghost has been eliminated')
    }
}

//PUBLIC

 this.getTarget = function getTarget(){
    var ghostCopy = JSON.parse(JSON.stringify(ghost1))
    return ghostCopy
  }

}