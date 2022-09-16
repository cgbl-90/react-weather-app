export default function MonthDayHour(value) {
  let timeStamp = value.value * 1000;
  var dateObj = timeStamp > 0 ? new Date(timeStamp) : new Date();
  var month = dateObj.getUTCMonth();
  var day = dateObj.getDay();
  var year = dateObj.getUTCFullYear();
  var minutes =
    dateObj.getMinutes() < 10
      ? `0` + dateObj.getMinutes()
      : dateObj.getMinutes();
  var hour =
    dateObj.getHours() < 10 ? `0` + dateObj.getHours() : dateObj.getHours();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (timeStamp > 0) {
    return `${days[day]} ${hour}:${minutes}`;
  }
  return `${months[month]} ${days[day]}, ${year} ${hour}:${minutes}`;
}
