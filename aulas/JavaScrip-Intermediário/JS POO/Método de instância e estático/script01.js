class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumenarVolume() {
        this.volume += 2;
    } 

    diminuirVolume() {
        this.volume -=2;
    }

    //Método estático
    static soma(x, y) {
        return x + y
    }
} 


const controle1 = new ControleRemoto
controle1.aumenarVolume();
controle1.aumenarVolume();
controle1.aumenarVolume();
console.log(controle1)

console.log(ControleRemoto.soma(2, 7))