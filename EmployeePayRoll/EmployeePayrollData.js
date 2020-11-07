class EmployeePayRollData{

    id;
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name()
    {
        return this._name;
    }

    set name(name)
    {
        this._name = name;
    }

    toString()
    {
        const format = {year:'numeric', month:'long', day:'numeric'};
        const date = this.startDate === undefined ? "undefined" :
                     this.startDate.toLocaleDateString("en-US",format);
        return "Id = "+this.id+", Name = "+this.name+", Salary = "+this.salary+
                ", Gender = "+this.gender+", StartDate = "+date;
    }

}

let employeeData = new EmployeePayRollData(1,"Tony",1300000);
console.log(employeeData.toString());
employeeData.name = "Steve";
console.log(employeeData.toString());
let newEmployeeData = new EmployeePayRollData(2,"Strange",150000,"M",new Date());
console.log(newEmployeeData.toString());