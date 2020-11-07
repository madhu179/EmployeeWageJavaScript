class EmployeePayRollData{

    id;
    salary;

    constructor(id,name,salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
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
        return "Id = "+this.id+", Name = "+this.name+", Salary = "+this.salary;
    }

}

let employeeData = new EmployeePayRollData(1,"Tony",1300000);
console.log(employeeData.toString());
employeeData.name = "Steve";
console.log(employeeData.toString());