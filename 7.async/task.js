class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Не указан ID')
        }
        if (this.alarmCollection.some((elem) => elem.id === id)) {
            console.error(`Будильник уже заведён`);
            return;
        }
        
        let alarm = {
            id,
            time,
            callback
        }
        this.alarmCollection.push(alarm);
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    }

    getCurrentFormattedTime() {
        let hour = new Date().getHours();
        let minut = new Date().getMinutes();
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minut < 10) {
            minut = "0" + minut;
        }
        return `${hour}:${minut}`;
    }

    start() {

    }

    stop() {

    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве:${this.alarmCollection.length}`);
        this.alarmCollection.forEach(element => {
            console.log(`Будильник № ${element.id} заведен на ${element.time}`);
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}

let test = new AlarmClock();