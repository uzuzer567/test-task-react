export const getParsedDate = (date: string): number => {
    const [day, month, year] = date.split('.').map(datePart => +datePart);
    return new Date(year, month - 1, day).getTime();
};

export function getFormattedDate(date: string): string {
    const dateDigits = date.replace(/\D/g, '');
    const dateParts: string[] = [];

    if (dateDigits.length > 0) {
        dateParts.push(dateDigits.substring(0, 2));
    }
    if (dateDigits.length > 2) {
        dateParts.push(dateDigits.substring(2, 4));
    }
    if (dateDigits.length > 4) {
        dateParts.push(dateDigits.substring(4, 8));
    }
    return dateParts.join('.');
};

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

export function isValidDate(date: string): boolean {
    const dateParts = date.split('.').map(part => +part);
    if (dateParts.length !== 3) {
        return false;
    }

    const [day, month, year] = dateParts;
    if (day < 1 || (month < 1 || month > 12) ||
        (!/^\d{2}$/.test(day.toString()) || !/^\d{2}$/.test(month.toString()) || !/^\d{4}$/.test(year.toString()))
    ) {
        return false;
    }

    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return day <= daysInMonth[month - 1];
}
