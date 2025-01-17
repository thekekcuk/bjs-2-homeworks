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
        let beforeRemoveClock = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        let afterRemoveClock = this.alarmCollection.length;
        if (beforeRemoveClock !== afterRemoveClock) {
            return true;
        } else {
            return false;
        }
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
        let checkClock = (alarm) => {
            if (this.getCurrentFormattedTime() === alarm.time) {
                return alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(checkClock);
              }, 10000);
          }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.timerId = null;
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве:${this.alarmCollection.length}`);
        this.alarmCollection.forEach(element => {
            console.log(`Будильник № ${element.id} заведен на ${element.time}`);
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}


let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('00:14', () => console.log('Первый пошел'), 1);
phoneAlarm.addClock('00:15', () => console.log('Второй пошел'), 2);
phoneAlarm.addClock('00:16', () => console.log('Третий пошел'), 3);