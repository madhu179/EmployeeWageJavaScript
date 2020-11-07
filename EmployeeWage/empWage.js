const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WRK_DAYS = 20;
const MAX_WRK_HRS = 160;


function getWorkHRs(empCheck)
{
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HRS;

    case IS_FULL_TIME:
        return FULL_TIME_HRS;

    default:
        return 0;
}
}

function calculateDailyWage(hrs)
{
    return hrs * WAGE_PER_HR;
}
let empHRS = 0,empWage = 0,empCheck = 0,days=1;
let empDailyWageArray = new Array();
let totalEmpHrs = 0;
let totalWage = 0;
let empDailyWageMap = new Map();
let empDailyHrMap = new Map();

while(days<=NO_OF_WRK_DAYS && totalEmpHrs<=MAX_WRK_HRS)
{
empCheck = Math.floor(Math.random() * 10) % 3;
empHRS = getWorkHRs(empCheck);
totalEmpHrs += empHRS;
empDailyWageArray.push(calculateDailyWage(empHRS));
empDailyWageMap.set(days,calculateDailyWage(empHRS));
empDailyHrMap.set(days,empHRS);
days++;
}

//7

//a
function calculateTotalWage(dailyWage)
{
     totalWage += dailyWage; 
}
empDailyWageArray.forEach(calculateTotalWage);
console.log("Wage = "+totalWage+" WorkHrs = "+totalEmpHrs);

function totalWageReduce(totalWages,wage)
{
    return wage+totalWages;
}
console.log("Wage = "+empDailyWageArray.reduce(totalWageReduce,0)+" WorkHrs = "+totalEmpHrs);

//b
let dayCount = 0;
function showDayWithWage(wage)
{
    dayCount++;
    return dayCount+" -> "+wage;
}
let dayWithWage = empDailyWageArray.map(showDayWithWage);
console.log(dayWithWage);

//c
function showDayWithFullTime(wage)
{
    return wage.includes("160");
}
let daysWithFullTime = dayWithWage.filter(showDayWithFullTime);
console.log(daysWithFullTime);

//d
function firstFulltime(wage)
{
    return wage.includes("160");
}
let firstDayFullTime = dayWithWage.find(showDayWithFullTime);
console.log(firstDayFullTime);

//e
function checkFullTime(wage)
{
    return wage.includes("160");
}
console.log(dayWithWage.every(checkFullTime));

//f
function checkPartTime(wage)
{
    return wage.includes("80");
}
console.log(dayWithWage.some(checkPartTime));

//g
function totalDaysWorked(totalDays,dailyWage)
{
    if(dailyWage>0)
    totalDays++;
    return totalDays;
}
let daysTotal = empDailyWageArray.reduce(totalDaysWorked,0);
console.log("Total Days Worked = "+daysTotal);


//8
function totalWageCalculate(totalwage,wage)
{
    return totalwage+wage;
}

console.log("Total wage = "+Array.from(empDailyWageMap.values()).reduce(totalWageCalculate,0));

//9

const findTotal = (totalValue,dailyValue)=>{
    return totalValue+dailyValue;
}

let totalHours = Array.from(empDailyHrMap.values()).reduce(findTotal,0);
let totalWageinMap = empDailyWageArray.filter(dwage=>dwage>0).reduce(findTotal,0);
console.log("Total Wage = "+totalWageinMap+" Total Hrs = "+totalHours);

let fullWorkDays = new Array();
let partWorkDays = new Array();
let noWorkDays  = new Array();

empDailyHrMap.forEach((value,key)=>{
    if(value==0)
    noWorkDays.push(key);
    else if(value==4)
    partWorkDays.push(key);
    else
    fullWorkDays.push(key);
});

console.log("Full Work Days are "+fullWorkDays);
console.log("Part Work Days are "+partWorkDays);
console.log("No Work Days are "+noWorkDays);

//10
let empDailyWageArrayObject = new Array();
days=1;
totalEmpHrs=0;
while(days<=NO_OF_WRK_DAYS && totalEmpHrs<=MAX_WRK_HRS)
{
empCheck = Math.floor(Math.random() * 10) % 3;
empHRS = getWorkHRs(empCheck);
totalEmpHrs += empHRS;
empDailyWageArrayObject.push(
    {
    day:days,
    dailyHours:empHRS,
    dailyWage:calculateDailyWage(empHRS),
    toString()
    {
        return "\nDay"+this.day+" => hours worked = "+this.dailyHours+" wage earned = "+this.dailyWage
    },
    });
days++;
}

console.log("Array with all data in form of object is "+empDailyWageArrayObject);

//10a
let Totalwage = empDailyWageArrayObject.filter(e=>e.dailyHours>0).reduce((totalWage,e)=>totalWage+=e.dailyWage,0);
console.log("Total wage using arrow functions : "+Totalwage);

let Totalhrs = empDailyWageArrayObject.filter(e=>e.dailyHours>0).reduce((totalHrs,e)=>totalHrs+=e.dailyHours,0);
console.log("Total hours using arrow functions : "+Totalhrs);

//10b
let str = " ";
empDailyWageArrayObject.filter(e=>e.dailyHours==8).forEach(e=>str = str+e.day+" ,");
console.log("Full Working days : "+str);

//10c
let partWorkingDays =empDailyWageArrayObject.filter(e=>e.dailyHours==4).map(e=>e.toString());
console.log("Part Working days : "+partWorkingDays);

//10d

let noWorkingDays =empDailyWageArrayObject.filter(e=>e.dailyHours==0).map(e=>e.day);
console.log("Part Working days : "+noWorkingDays);