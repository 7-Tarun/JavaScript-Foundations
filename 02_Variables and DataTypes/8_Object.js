const Character = {
    name: `Sniper Wolf`,
    hp: 100,
    takeDamage: function(amount){
        this.hp -= amount;
        console.log(`Name: ${this.name}\nTook Damage: ${this.hp}`);
    }
};

Character.takeDamage(20);