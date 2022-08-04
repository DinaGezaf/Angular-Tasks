import { Component } from "@angular/core";

@Component({
    selector:'student-list',
    template:`
    <div>
        <h1>Upcoming Student Information</h1>
         <hr/>
         <student-info (studentClick)="displayInfo($event)"  [student]="student1"></student-info>
         <h3>{{message}}</h3>
    </div>`
})
export class StudentListComponent{
    message:string='';
    student1={
        id:1,
        name:'Ali Osama',
        age:25,
        address:'Cairo',
        Faculty:'Engineering',
        Grade:{
            score:3.6,
            status:'passed'
        }
    }
    displayInfo(data:any){
        this.message=data
        console.log('Hi  ===>  Message From Child To Parent..')
    }
}