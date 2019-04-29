class DateFormatt {

    static dayOfWeekAndMonth = aDate => {
        const weekdays = ['Sun', 'Mon', 'Tu', 'Wed', 'Th', 'Fr', 'Sat']
        const months =['Jan.','Feb.','Mar.','May.','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.',]
        return weekdays[aDate.getDay()] + ', ' + months[aDate.getMonth()] + " " + aDate.getDay()
    }

    static startToEnd = (startTime, endTime) => {
        const reformatt = time =>{
            let mins = ('0'+time.getMinutes()).slice(-2)
            return time.getHours() > 12? time.getHours() - 12 + ":" + mins + "pm" : time.getHours() + ":" + mins + "am"
        }
        return (reformatt(startTime) + ' - ' + reformatt(endTime))
    }
}

export default DateFormatt