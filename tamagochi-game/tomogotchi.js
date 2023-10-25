const tomogotchi = {
    name : 'Bobik' ,
    meal : 3 ,
    energy : 5 ,
    mood : 5 ,
    getStatus : function() {
      return `Имя: ${this.name} , Еда: ${this.meal > 3 ? 'Я не голоден' : 'Я голоден'} , Энергия: ${this.energy} , Настроение: ${this.mood}. `

    } ,
    setName : function(newName) {
      if (newName !== this.name) {
        return newName;
      }
    } ,     
    eat : function() {
        if (this.meal < 5) {
            this.meal++;
            this.mood--;
        }
    } ,
    sleep : function() {  
        if (this.energy < 5) {
        this.energy++;
        this.meal--;
        }
    } ,
    play : function() {
        if (this.mood <  5) { 
        this.mood++;
        this.energy--;
        }
    } ,

    

}
