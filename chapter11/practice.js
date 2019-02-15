'use strict';
{

    class Player {

        constructor(name, gender) {

            this.name = name;

            this.gender = gender;

        }
        show_player_info(){
            console.log("name : "+ this.name + ",gender: "+this.gender);
        }
    }

    class SockerPlayer extends Player{
        constructor(name,gender,number){
            super(name,gender);
            this.number = number;
        }
        kick_ball(){
            console.log("Kick Off!");
        }
    }
 const player_yamada = new SockerPlayer("yamada","male",10);
 player_yamada.show_player_info();
 player_yamada.kick_ball();

}