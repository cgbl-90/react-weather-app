import React from "react";

export default function MonthDayHour() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth();
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
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
  return `${months[month]} ${day}, ${year}`;
}
