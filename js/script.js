/*  Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
        } else if (score >= 70 && score < 80) {
        return 'B';
        } else if (score >= 60 && score < 70) {
        return 'C';
        } else if (score >= 50 && score < 60) {
        return 'D';
        } else if (score >= 0 && score < 50) {
        return 'F';
        } else {
        return 'Invalid score';
        }
    }

    /*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer  */
    function getSeason(month) {
        month = month.toLowerCase();
        if (month === 'september' || month === 'october' || month === 'november') {
        return 'Autumn';
        } else if (month === 'december' || month === 'january' || month === 'february') {
        return 'Winter';
        } else if (month === 'march' || month === 'april' || month === 'may') {
        return 'Spring';
        } else if (month === 'june' || month === 'july' || month === 'august') {
        return 'Summer';
        } else {
        return 'Invalid month';
        }
    }
    
/*  Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day. */
function getDayType(day) {
    day = day.toLowerCase();
    if (day === 'saturday' || day === 'sunday') {
        return 'weekend';
    } else if (
        day === 'monday' ||
        day === 'tuesday' ||
        day === 'wednesday' ||
        day === 'thursday' ||
        day === 'friday'
        ) {
        return 'working day';
        } else {
        return 'Invalid day';
        }
}

    const studentScore = 75;
    const grade = getGrade(studentScore);
    console.log('Grade:', grade);
    
    const currentMonth = 'October';
    const season = getSeason(currentMonth);
    console.log('Season:', season);
    
    const currentDay = 'Saturday';
    const dayType = getDayType(currentDay);
    console.log('Day type:', dayType);



/* Write a program which tells the number of days in a month.
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
  February has 28 days */
    function getNumberOfDays(month) {
        month = month.toLowerCase();
        switch (month) {
            case 'january':
                return 31;
            case 'february':
                return 28;
            case 'march':
                return 31;
            case 'april':
                return 30;
            case 'may':
                return 31;
            case 'june':
                return 30;
            case 'july':
                return 31;
            case 'august':
                return 31;
            case 'september':
                return 30;
            case 'october':
                return 31;
            case 'november':
                return 30;
            case 'december':
                return 31;
            default:
                return 'Invalid month';
            }
        }
        
        // Example usage
        const month = 'February';
        const numberOfDays = getNumberOfDays(month);
        console.log(`${month} has ${numberOfDays} days.`);