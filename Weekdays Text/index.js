function weekdayText(weekdays) {
  return function (target) {
    if (target > weekdays.length || target < 0) {
      return "Error: Invalid weekday number";
    }
    return weekdays[target];
  };
}
