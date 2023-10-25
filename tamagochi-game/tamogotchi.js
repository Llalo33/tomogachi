const tomogotchi = {
    name: 'Bobik',
    meal: 3,
    energy: 5,
    mood: 5,
    getStatus: function () {
        if (this.meal === 0 || this.energy === 0 || this.mood === 0) {
            console.log(`${this.name} умер  :(`)
        } else {
            console.log(`Имя: ${this.name} , Еда: ${this.meal > 3 ? 'Я не голоден' : 'Я голоден'} , Энергия: ${this.energy > 3 ? 'Я не хочу спать' : 'Я хочу спать'} , Настроение: ${this.mood > 3 ? 'Мне весело' : 'Мне скучно'}.`)
        }
    },
    setName: function (newName) {
        if (newName !== this.name) {
            return newName;
        }
    },
    eat: function () {
        if (this.meal < 5) {
            this.meal++;
            this.mood--;
        }
    },
    sleep: function () {
        if (this.energy < 5) {
            this.energy++;
            this.meal--;
        }
    },
    play: function () {
        if (this.mood < 5) {
            this.mood++;
            this.energy--;
        }
    }
}
