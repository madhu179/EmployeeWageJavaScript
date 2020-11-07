class EmployeePayRollData{

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.pinCode = params[5];
        this.email = params[6];
    }

    get id()
    {
        return this._id;
    }

    set id(id)
    {
        let idRegex = RegExp('[1-9]{1}[0-9]*');
        if(idRegex.test(id))
        this._id = id;
        else
        throw 'Id is incorrect';
    }

    get name()
    {
        return this._name;
    }

    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
        this._name = name;
        else 
        throw 'Name is incorrect';
    }

    get salary()
    {
        return this._salary;
    }

    set salary(salary)
    {
        let salaryRegex = RegExp('[1-9]{1}[0-9]*');
        if(salaryRegex.test(salary))
        this._salary = salary;
        else
        throw 'Salary is incorrect';
    }

    get gender()
    {
        return this._gender;
    }

    set gender(gender)
    {
        let genderRegex = RegExp('M|F');
        if(genderRegex.test(gender))
        this._gender = gender;
        else
        throw 'Gender is incorrect';
    }

    get startDate()
    {
        return this._startDate;
    }

    set startDate(startDate)
    {
        let datee = new Date();
        if(startDate<=datee)
        {
        this._startDate = startDate;
        }
        else
        throw 'StratDate is incorrect';
    }
    get pinCode()
    {
        return this._pinCode;
    }

    set pinCode(pinCode)
    {
        let pinRegex = RegExp('^[0-9]{3}[\\s]*[0-9]{3}$');
        if(pinRegex.test(pinCode))
        this._pinCode = pinCode;
        else
        throw 'Pin Code is incorrect';
    }

    get email()
    {
        return this._email;
    }

    set email(email)
    {
        let emailRegex = RegExp('^[a-zA-Z]+@[a-zA-Z]+[.][a-zA-z]+$');
        if(emailRegex.test(email))
        this._email = email;
        else
        throw 'Email is incorrect';
    }

    toString()
    {
        const format = {year:'numeric', month:'long', day:'numeric'};
        const date = this.startDate === undefined ? "undefined" :
                     this.startDate.toLocaleDateString("en-US",format);
        return "Id = "+this.id+", Name = "+this.name+", Salary = "+this.salary+
                ", Gender = "+this.gender+", StartDate = "+date+", Pin Code = "+this.pinCode+", Email = "+this.email;
    }

}

try{ 
let newEmployeeData = new EmployeePayRollData(1,"Strange",150000,'M',new Date(),"400088","abc@xyz.com");
newEmployeeData.email="abc@xyz";
console.log(newEmployeeData.toString());
}catch(e){
    console.error(e);
}