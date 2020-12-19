class Hamster {
    stomach;
    activities = {};
    constructor(name) {
        this.name = name;
    }
    eat(food) {
        this.stomach.push(food);
    }
    train(activity) {
        if (Object.keys(this.activities).includes(activity)) {
            this.activities[activity]++;
        } else {
            this.activities[activity] = 1;
        }
    }
    startTraining(activity, ms) {
        console.log(`${this.name} is in ${activity} training`);
        this.timer = setInterval(() => this.train(activity), ms);
    }
    stopTraining() {
        clearInterval(this.timer);
    }
}

export default Hamster;
