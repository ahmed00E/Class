class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(vites) {
        this.speed += vites
    }

    brake(frein) {
        this.speed -= frein
    }

    describe(marcides, speedVoitur) {
        marcides= this.brand
        speedVoitur = this.speed
        console.log(`${marcides} running at ${speedVoitur}`);
    }



}

let ford = new Car("ford", 0)
ford.accelerate(22)
ford.describe()
ford.accelerate(22)
ford.describe()


let renaut = new Car("Renault", 0)
renaut.accelerate(100)
renaut.brake(40)
renaut.describe()
// console.log(renaut)
class tv {
    constructor(brand, channel, volume) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    volumeAd(valueVolume) {
        this.volume += valueVolume
        if (this.volume > 100) {
            this.volume = 100
        }
    }

    volumeDown(volumeshanal) {
        this.volume -= volumeshanal
        if (this.volume < 0) {
            this.volume = 0
        }

    }

    changeChannel(channelValue) {
        if (channelValue < 0) {
            console.log("chaine n' est pas là")
        } else if (channelValue > 50) {
            console.log("  chaine n' est pas là");
        } else(this.channel = channelValue)
    }

    reset(tv5) {
        this.brand = tv5
        this.channel = 1
        this.volume = 50
    }

    describe() {
        console.log(`la télévision ${this.brand} a un volume à ${this.volume} et nous sommes sur la chaine numéro :${this.channel}`);
    }
}

let sharab = new tv("sharab")

 
sharab.volume(2400)
sharab.changeChannel(4)
sharab.describe("sharab")
sharab.describe()



