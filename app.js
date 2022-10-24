
function getRandomValue(min, max) {
    return Math.floor(Math.random(max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth : 100,
            monsterHealth: 100,
            currentRound : 0,
        }
    },
    watch : {
        playerHealth (value) {
            if(value <= 0) {
                alert("Yous Lose");
            }
            
        },
        monsterHealth(value) {
            if(value <= 0) {
                alert("Yous Win");
            }
        }
    },
    computed : {
        monterBarStyle() {
            return {
                width : this.monsterHealth + '%'
            }
        },
        playerBarStyle() {
            return {
                width : this.playerHealth + '%'
            }
        },
        mayUseSpecialAttck() {
            return this.currentRound < 3;
        },
        
    },
    methods: {
        attackMonter() {
            this.currentRound++;
            const acctackValue = getRandomValue(5,12);
            this.monsterHealth -= acctackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const acctackValue = getRandomValue(8,15);
            this.playerHealth -= acctackValue;
            if(this.playerHealth <= 0) {
                this.playerHealth = 0;
            } 
        },
        specialAttackMonster() {
            this.currentRound = 0;
            const acctackValue = getRandomValue(10,20);
            this.monsterHealth -= acctackValue;
          
        },
        healPlayer() {
            const acctackValue = getRandomValue(8,20);
            console.log(acctackValue);
            console.log(this.playerHealth );
            if(this.playerHealth + acctackValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += acctackValue
            }
            
        }
    },
    
});
app.mount('#game');