//♣1. Write a function getFullDaysBeforeNewYear for counting the number of full days before the New Year, including the current date. It should count these days from the date and month numbers passed as parameters.
//  This function takes one parameter: date - a number representing some day of the month (1-31) month - a number representing a month (1-12)
//  The function should return the number of full days before the New Year, beginning with date and month, passed as parameters.
//  If some invalid numbers are passed (negative value, NaN, Infinity, -Infinity) or a function is called without parameters, it should return null.
export function getFullDaysBeforeNewYear(date, month) {
    let dateOfNewYear = new Date(2023, 11, 31);
    if (
        date & month &&
        (month & date) !== (NaN || Infinity || -Infinity) &&
        month > 0 &&
        date > 0
    ) {
        let date1 = new Date(2023, month - 1, date);
        let difOfDates = (dateOfNewYear - date1) / 1000 / 60 / 60 / 24; //it's in miliseconds, and we have to do the math
        let finalResult = difOfDates + 1; //we add 1 day because if the years ends on 31 dec, and we receive the parameters of 31 dec, we will still have a while day 'till midnight
        return finalResult;
    } else {
        return null;
    }
}

//♣2. Write a function formatWithWeekday for formatting the passed Date object to a string with a weekday name similar to this: 'Monday, 14, December 2022'.
//  This function takes one parameter: date - a date object for formatting
//  The function should be a string with the format <WEEKDAY NAME>, <number>, <Month> <Year>.
//  The names of weekdays: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
//  The months are: January, February, March, April, May, June, July, August, September, October, November, and December.
//  If the date is not passed or is null or undefined, the function should return an empty string.
export function formatWithWeekday(date) {
    if (date && date != null) {
        // Get day
        let dd = date.getDate();
        if (dd < 10) dd = dd;
        //Get month
        let mm = date.getMonth() + 1;
        if (mm < 10) mm = "0" + mm;
        //Get year
        let yyyy = date.getFullYear();

        let stringDateDefaultFormat = date.toDateString();
        let breakDefaultDateFormat = stringDateDefaultFormat.split(" ");
        let [dayAbbreviation, monthAbbreviation, dayNumber, yearNumber] =
            breakDefaultDateFormat;

        //Transform abbreviation of dates to whole word
        let daysWholeName = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];

        for (const day of daysWholeName) {
            if (dayAbbreviation[0] == day[0]) {
                if (dayAbbreviation[1] == day[1]) {
                    dayAbbreviation = day;
                }
            }
        }

        //Transform abbreviation of months to whole word
        let monthWholeName = [
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
        for (const month of monthWholeName) {
            if (monthAbbreviation[0] == month[0]) {
                if (monthAbbreviation[1] == month[1]) {
                    if (monthAbbreviation[2] == month[2]) {
                        monthAbbreviation = month;
                    }
                }
            }
        }

        return (
            dayAbbreviation + ", " + dd + ", " + monthAbbreviation + " " + yyyy
        );
    } else {
        return "";
    }
}

//♣3. Write a function isValidDate for checking if a date is valid. It returns true if it is valid and false if not.
//  This function takes two parameters: date - a date object
//  The function should return true if a date is valid.
//  The function should return false if a date is invalid.
//  The function should return false if a date is undefined or not a Date object at all.
export function isValidDate(date) {
    if (date && date != null && date instanceof Date && !isNaN(date)) {
        return true;
    } else {
        return false;
    }
}

//♣4. Write a function isAfter, which takes two dates as parameters, for checking if the first date is after the second date. It returns true if it is after and false if not.
//  This function takes two parameters: date - a Date object dateToCompare - a Date object
//  The function should return true if the date is after dateToCompare.
//  It should return false if the date is before dateToCompare.
//  It should return false if any of the dates are invalid.

export function isAfter(date, dateToCompare) {
    //First we check if "date" and "dateToCompare" are invalid. We do that by using isNan(), which returns true if the value is NaN, and false if it is a number (or can be converted to a number).
    //If we use "typeof" on date and dateToCompare it will not help us, as it will tell us that they are objects. To check if the two are numbers (or can be converted to numbers), we have to use getTime() method
    if (!isNaN(dateToCompare) && !isNaN(date)) {
        if (date.getTime() > dateToCompare.getTime()) {
            return true;
        } else {
            return false;
        }
    }
    //If the dates are invalid:
    else {
        return false;
    }
}

//5. Write a function formatDistanceToNow, which returns the distance between a given date and now in words.
//  This function takes one parameter: date - a Date object for formatting
//  If the date is 0 to 30 seconds before now, the function should return the string 'less than a minute'.
//  If the date is '30 secsto1 min 30 secsbefore now, the function should return the string'1 minute'`.
//  If the date is 1 min 30 secs to '44 mins 30 secsbefore now, the function should return the string[2..44] minutes`.
//  If the date is '44 mins 30 secs to '89 mins 30 secs before now, the function should return the string about 1 hour.
//  Otherwise, it should return the full date in the format DD.MM.YYYY HH:mm:ss. That is: day.month.year hours:minutes:seconds, all in two-digit format, e.g., 01.06.2016 09:07:24. Please note you should add 0 to a one-digit number in months, dates, hours, minutes, and seconds.
//  If the date object is undefined or null, it should return the string Date is unknown.
export function formatDistanceToNow(date) {
    if (date != null && date instanceof Date && !isNaN(date)) {
        let difBetweenDates = -(date - new Date());
        if (
            44 * 60 * 1000 + 30 * 1000 < difBetweenDates &&
            difBetweenDates <= 89 * 60 * 1000 + 30 * 1000
        ) {
            return "about 1 hour";
        } else if (
            90 * 1000 < difBetweenDates &&
            difBetweenDates <= 44 * 60 * 1000 + 30 * 1000
        ) {
            let result = Math.round(difBetweenDates / 1000 / 60);
            return `${result}` + " minutes";
        } else if (
            30 * 1000 < difBetweenDates &&
            difBetweenDates <= 90 * 1000
        ) {
            return "1 minute";
        } else if (0 <= difBetweenDates && difBetweenDates <= 30 * 1000) {
            return "less than a minute";
        } else {
            let dd = date.getDate();
            if (dd < 10) dd = "0" + dd;
            let mm = date.getMonth() + 1;
            if (mm < 10) mm = "0" + mm;
            let yyyy = date.getFullYear();

            let h = date.getHours();
            if (h < 10) h = "0" + h;

            let min = date.getMinutes();
            if (min < 10) min = "0" + min;

            let sec = date.getSeconds();
            if (sec < 10) sec = "0" + sec;

            return dd + "." + mm + "." + yyyy + " " + h + ":" + min + ":" + sec;
        }
    } else {
        return "Date is unknown";
    }
}
