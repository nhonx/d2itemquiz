// Initialize Phaser, and creates a 400x490px game

var game = new Phaser.Game(game_width, game_height, Phaser.CANVAS, 'game_div');
var game_state = {};
game_state.score = -1;
// Creates a new 'main' state that wil contain the game
game_state.loading = function () {

};
game_state.loading.prototype = {
    preload: function () {
        game_state.score = -1;
        var style = { font: "30px Arial", fill: "#ffffff" };
        this.label_score = this.game.add.text(120, 250, "Loading...", style);
        var c = 1;
        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(5, 0xffd900, 1);
        this.game.load.onFileComplete.add(function () {
            c++;
            graphics.drawRect(0, 0, Math.floor(game_width * c / ITEM_COUNT, 0), 5);
            if (c >= ITEM_COUNT) {
                graphics.destroy();
            }
        }, this);
        // for (var k in ITEMS) {
        //     this.game.load.image("item_" + k, 'dota/' + k + '.png');
        // }
        game.load.atlas('atlas', 'sprite/spritesheet.png', 'sprite/spritesheet.json');
        this.game.load.image('playbtn', 'assets/play.png');
    },
    create: function () {

    },
    update: function () {
        var tempSprite = game.add.sprite(game.world.randomX, game.world.randomY, 'playbtn');
        if (tempSprite != null)
            game.state.start('mainmenu');
    }
}

game_state.mainmenu = function () {

};
game_state.mainmenu.prototype = {
    preload: function () {
        this.game.stage.backgroundColor = "#71c5cf";
        game_state.score = -1;

    },
    create: function () {
        var style = { font: "bold 40pt Arial", fill: "#ffffff", align: "center", stroke: "#258acc", strokeThickness: 8 };
        this.label_score = this.game.add.text(50, 150, "D2Item Quiz", style);
        this.button = this.game.add.button(150, 300, 'playbtn', this.click, this);
    },
    click: function () {
        game.state.start('main');
    },
    update: function () {
    }
};
game_state.main = function () {
};
game_state.main.prototype = {
    preload: function () {
        // Function called first to load all the assets
        this.game.stage.backgroundColor = "#8C521F";
        this.game.stage.disableVisibilityChange = true;
        var keyItem = randomBuildItem();
        if (!keyItem) {
            game.stat.start('victory');
        }
        //this.game.load.image("mainitem", 'item/built/' + i + '.png');
        this.num_recipe = ITEM_REL[keyItem].length;
        this.answer = 0;
        this.recipe = [];
        this.othersitem = [];
        this.mainid = keyItem;//ITEMS[keyItem].index;
        game_state.score++;
        var p = 0;

        for (var j in ITEM_REL[keyItem]) {
            p++;
            this.recipe[p] = ITEM_REL[keyItem][j];
        }
        this.recipe = ITEM_REL[keyItem].map(x => x);
        for (i = 1 + this.num_recipe; i <= 9; i++) {
            var k = rand.pickIn(ITEMS_IN_ELEMENT);
            while (this.othersitem.includes(k))
                k = rand.pickIn(ITEMS_IN_ELEMENT);
            this.othersitem.push(k);
        }
        //this.game.time.events.remove(this.timer);

    },
    create: function () {
        // Fuction called after 'preload' to setup the game
        var subitemarr = [...this.recipe, ...this.othersitem];
        subitemarr = Phaser.Utils.shuffle(subitemarr);
        this.bird = this.game.add.sprite(this.game.width / 2 - 40, 50, 'atlas');
        this.bird.frameName = this.mainid + '.png';
        this.bird.inputEnabled = true;
        this.slot1 = this.game.add.sprite(this.game.width / 4 - 40, 200, 'atlas');
        this.slot1.frameName = subitemarr[0] + '.png';
        this.slot1.itemId = subitemarr[0];
        this.slot2 = this.game.add.sprite(this.game.width / 2 - 40, 200, 'atlas');
        this.slot2.frameName = subitemarr[1] + '.png';
        this.slot2.itemId = subitemarr[1];
        this.slot3 = this.game.add.sprite(this.game.width * 3 / 4 - 40, 200, 'atlas');
        this.slot3.frameName = subitemarr[2] + '.png';
        this.slot3.itemId = subitemarr[2];
        this.slot4 = this.game.add.sprite(this.game.width / 4 - 40, 300, 'atlas');
        this.slot4.frameName = subitemarr[3] + '.png';
        this.slot4.itemId = subitemarr[3];
        this.slot5 = this.game.add.sprite(this.game.width / 2 - 40, 300, 'atlas');
        this.slot5.frameName = subitemarr[4] + '.png';
        this.slot5.itemId = subitemarr[4];
        this.slot6 = this.game.add.sprite(this.game.width * 3 / 4 - 40, 300, 'atlas');
        this.slot6.frameName = subitemarr[5] + '.png';
        this.slot6.itemId = subitemarr[5];
        this.slot7 = this.game.add.sprite(this.game.width / 4 - 40, 400, 'atlas');
        this.slot7.frameName = subitemarr[6] + '.png';
        this.slot7.itemId = subitemarr[6];
        this.slot8 = this.game.add.sprite(this.game.width / 2 - 40, 400, 'atlas');
        this.slot8.frameName = subitemarr[7] + '.png';
        this.slot8.itemId = subitemarr[7];
        this.slot9 = this.game.add.sprite(this.game.width * 3 / 4 - 40, 400, 'atlas');
        this.slot9.frameName = subitemarr[8] + '.png';
        this.slot9.itemId = subitemarr[8];

        this.slot1.inputEnabled = true;
        this.slot2.inputEnabled = true;
        this.slot3.inputEnabled = true;
        this.slot4.inputEnabled = true;
        this.slot5.inputEnabled = true;
        this.slot6.inputEnabled = true;
        this.slot7.inputEnabled = true;
        this.slot8.inputEnabled = true;
        this.slot9.inputEnabled = true;
        this.game.input.onTap.add(this.select, this);
        var style = { font: "bold 40pt Arial", fill: "#ffffff", align: "center", stroke: "#258acc", strokeThickness: 8 };
        this.label_score = this.game.add.text(200, 500, "zxc", style);
        this.label_score.content = game_state.score;
        //this.timer=this.game.time.events.loop(100,this.timecount,this);
        this.time = 0;
        //var style = {font: "30px Arial", fill: "#ffffff"};
        //this.time_remain = this.game.add.text(10, 23, "zxc", style);
        //this.time_remain.content = this.time;     

    },
    select: function () {

        if (this.slot1.alpha != 0.5)
            if (this.slot1.input.checkPointerOver(this.input.activePointer) == true) {

                this.slot1.alpha = 0.5;
                if (this.recipe.indexOf(this.slot1.itemId) == -1)
                    game.state.start('gover');
                else
                    this.answer++;
                //this.recipe.splice(this.recipe.indexOf(this.slot1.key),1);
            }
        if (this.slot2.alpha != 0.5)
            if (this.slot2.input.checkPointerOver(this.input.activePointer) == true) {
                this.slot2.alpha = 0.5;

                if (this.recipe.indexOf(this.slot2.itemId) == -1)
                    game.state.start('gover');
                else
                    this.answer++;
            }
        if (this.slot3.alpha != 0.5)
            if (this.slot3.input.checkPointerOver(this.input.activePointer) == true) {
                this.slot3.alpha = 0.5;

                if (this.recipe.indexOf(this.slot3.itemId) == -1)
                    game.state.start('gover');
                else
                    this.answer++;
            }
        if (this.slot4.alpha != 0.5)
            if (this.slot4.input.checkPointerOver(this.input.activePointer) == true) {
                this.slot4.alpha = 0.5;

                if (this.recipe.indexOf(this.slot4.itemId) == -1)
                    game.state.start('gover');
                else
                    this.answer++;
            }
        if (this.slot5.alpha != 0.5)
            if (this.slot5.input.checkPointerOver(this.input.activePointer) == true) {
                this.slot5.alpha = 0.5;

                if (this.recipe.indexOf(this.slot5.itemId) == -1)
                    game.state.start('gover');
                else
                    this.answer++;
            }
        if (this.slot6.alpha != 0.5)
            if (this.slot6.input.checkPointerOver(this.input.activePointer) == true) {
                this.slot6.alpha = 0.5;

                if (this.recipe.indexOf(this.slot6.itemId) == -1)
                    game.state.start('gover');
                else
                    this.answer++;
            }
        if (this.slot7.alpha != 0.5)
            if (this.slot7.input.checkPointerOver(this.input.activePointer) == true) {
                this.slot7.alpha = 0.5;

                if (this.recipe.indexOf(this.slot7.itemId) == -1)
                    game.state.start('gover');
                else
                    this.answer++;
            }
        if (this.slot8.alpha != 0.5)
            if (this.slot8.input.checkPointerOver(this.input.activePointer) == true) {
                this.slot8.alpha = 0.5;

                if (this.recipe.indexOf(this.slot8.itemId) == -1)
                    game.state.start('gover');
                else
                    this.answer++;
            }
        if (this.slot9.alpha != 0.5)
            if (this.slot9.input.checkPointerOver(this.input.activePointer) == true) {
                this.slot9.alpha = 0.5;

                if (this.recipe.indexOf(this.slot9.itemId) == -1)
                    game.state.start('gover');
                else
                    this.answer++;
            }
        if (this.answer == this.recipe.length) {
            game.state.start('main');
        }
    },
    update: function () {
        this.time++;
        if (this.time > 240) {
            this.time = 0;
            game.state.start('gover');
        }
        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(10, 0xffd900, 1);
        graphics.drawRect(0, 0, Math.floor(game_width * this.time / 240, 0), 5);

    }
};
game_state.gameover = function () {
};
game_state.gameover.prototype = {
    preload: function () {

        this.game.stage.backgroundColor = "#71c5cf";

        this.game.load.image('revivebtn', 'assets/revive.png');
    },
    create: function () {
        var style = { font: "bold 30pt Arial", fill: "#ffffff", align: "center", stroke: "#258acc", strokeThickness: 8 };
        this.label_score = this.game.add.text(80, 150, "Game Over", style);
        this.finalscore = this.game.add.text(50, 200, "Your score: " + game_state.score, style);
        this.button = this.game.add.button(150, 300, 'playbtn', this.click, this);
        game_state.score = -1;
        HISTORY_ITEM = [];
    },
    click: function () {
        game.state.start('main');
    },
    update: function () {
    }
};
game_state.victory = function () {
};
game_state.victory.prototype = {
    preload: function () {

        this.game.stage.backgroundColor = "#71c5cf";

        this.game.load.image('revivebtn', 'assets/revive.png');
    },
    create: function () {
        var style = { font: "bold 30pt Arial", fill: "#ffffff", align: "center", stroke: "#258acc", strokeThickness: 8 };
        this.label_score = this.game.add.text(80, 150, "Congratulation", style);
        this.finalscore = this.game.add.text(50, 200, "Your score: " + game_state.score, style);
        this.button = this.game.add.button(150, 300, 'playbtn', this.click, this);
        game_state.score = -1;
        HISTORY_ITEM = [];
    },
    click: function () {
        game.state.start('main');
    },
    update: function () {
    }
};
// Add and start the 'main' state to start the game
game.state.add('loading', game_state.loading);
game.state.add('mainmenu', game_state.mainmenu);
game.state.add('main', game_state.main);
game.state.add('gover', game_state.gameover);
game.state.add('victory', game_state.victory);
game.state.start('loading');