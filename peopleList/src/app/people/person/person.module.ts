export class Person {
  name: string;
  lastname: string;
  job: string;
  constructor(name: string, lastname: string, job: string) {
    this.name = name;
    this.lastname = lastname;
    this.job = job;
  }

  /**
   sintaxis simplificada 
   constructor(
     public name: string,
     public lastname: string,
     public job: string
   ) {}
    */
}
