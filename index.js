/* Your Code Here */

function createEmployeeRecord(employeeData) {
    const [firstName, familyName, title, payPerHour] = employeeData;
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeDataList) {
    return employeeDataList.map(createEmployeeRecord);
}

function createTimeInEvent(timestamp) {
    const [date, time] = timestamp.split(" ");
    const hour = parseInt(time, 10);
    this.timeInEvents.push({
        type: "TimeIn",
        hour,
        date
    });
    return this;
}

function createTimeOutEvent(timestamp) {
    const [date, time] = timestamp.split(" ");
    const hour = parseInt(time, 10);
    this.timeOutEvents.push({
        type: "TimeOut",
        hour,
        date
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);

    if (!timeInEvent || !timeOutEvent) {
        return 0;
    }
    
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

const allWagesFor = function () {
    return this.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate.call(this, event.date);
    }, 0);
};

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => {
        return total + allWagesFor.call(record);
    }, 0);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

/*const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}*/

