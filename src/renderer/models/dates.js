export default class Dates {
  constructor() { }

  getMonthsText() {
    var month = new Array();
    month[0] = "JANUARY";
    month[1] = "FEBRUARY";
    month[2] = "MARCH";
    month[3] = "APRIL";
    month[4] = "MAY";
    month[5] = "JUNE";
    month[6] = "JULY";
    month[7] = "AUGUST";
    month[8] = "SEPTEMBER";
    month[9] = "OCTOBER";
    month[10] = "NOVEMBER";
    month[11] = "DECEMBER";
    return month;
  }

  TimeToSeconds(_time) {
    try {
      if (!_time)
        return;
      let totalSeconds = 0;
      let hours = 0, minutes = 0, seconds = 0;
      let time = _time.split(':');
      hours = (parseInt(time[0]) * 3600);
      minutes = (parseInt(time[1]) * 60);
      seconds = parseInt(time[2]);
      totalSeconds = (hours + minutes + seconds);
      console.log('[DATE][TIMETOSECONDS]', totalSeconds);
      return totalSeconds;
    } catch (error) {
      console.log('[DATE][TIMETOSECONDS] -> ERROR\n', error);
    }
  }

  SecondsToTime(_seconds) {
    try {
      const dateTime = new Date(null);
      dateTime.setSeconds(_seconds);
      let hours = dateTime.toISOString().substr(11, 8);
      console.log('[DATE][SECONDSTOTIME]', hours);
      return hours;
    } catch (error) {
      console.log('[DATE][SECONDSTOTIME] -> ERROR', error);
    }
  }


}