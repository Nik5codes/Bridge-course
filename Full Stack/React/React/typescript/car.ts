class Car {
    name : string
    model: number

constructor (name:string,model:number)
{
    this.name=name;
    this.model=model;
}

displayInfo()
{
    console.log(`${this.name}`);
    console.log(`${this.model}`);
    
    
}

}
const car1= new Car("bmw",2020);
car1.displayInfo();