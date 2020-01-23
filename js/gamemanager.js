let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
        
    },

    resetPlayer: function (classType) {
        switch (classType) {
            case 'Warrior':
                player = new Player(classType, 200, 0, 400, 100, 50);
                break;
            case 'Werewolf':
                player = new Player(classType, 200, 100, 300, 100, 80);
                break;
            case 'Dwarf':
                player = new Player(classType, 100, 50, 200, 500, 150);
                break;
            case 'Rogue':
                player = new Player(classType, 200, 100, 300, 100, 80);
                break;
                //chooses player



        }
        let getInterface = document.querySelector('.interface');
        getInterface.innerHTML = '<img src="images/' + classType.toLowerCase() +
            '.jpg" ><div><h3>' + classType + '</h3><p class="health-player">health:' + player.health + '</p><p>mana:' + player.mana + '</p><p>strength:' + player.strength + '</p><p>agility:' + player.agility + '</p><p>speed:' + player.speed + '</p>';

//changes interface to reflect player chosen
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Find Enemy!</a>';
        getArena.style.visibility = "visible";

    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //this creates an enemy
        let enemy00 = new Enemy("Goblin", 100, 50, 120, 50, 100);
        let enemy01 = new Enemy("Troll", 100, 50, 80, 100, 78);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        //controls which enemy is chosen at random
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
      getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()"GameManager.setFight()">Attack!</a>';

        getEnemy.innerHTML = '<img src="images/' + enemy.enemyType +
            '.jpg" ><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">health:' + enemy.health + '</p><p>mana:' + enemy.mana + '</p><p>strength:' + enemy.strength + '</p><p>agility:' + enemy.agility + '</p><p>speed:' + enemy.speed + '</p></div>';
            //controls enemy image shown based on selected enemy





    }
  
     



}