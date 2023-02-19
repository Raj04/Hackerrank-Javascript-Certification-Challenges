# HackerRank Javascript Certification Challenge #1

###### Implement the function weekdayText such that:

- It takes a single argument, weekdays, which is an array of stings.
- It returns a new function that called getText that takes single integer argument, number, and does the following:
- It returns the value from the weekdays array at that 0-based index number.
- If number is out of range, the function throws an Error object with the message of "Invalid weekday number".
  For example, calling weekdayText(["Mon","Tue","Wed","Thur","Fri","Sat","Sun"]) must return a unction getText, such that calling getText(6) return "Sun". "Sun" is at index 6 in the array.
