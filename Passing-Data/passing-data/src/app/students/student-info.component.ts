import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'student-info',
    template:`<div>
    <h2>{{student.name}}</h2>
    <div>Age: {{student.age}}</div>
    <div>Address: {{student.address}}</div>
    <div>Faculty: {{student.Faculty}}</div>
    <div>Grade => 
      <span>Score  : {{student.Grade.score}}</span>
      <!-- <span>Status  : {{student.Grade.status}}</span> -->
    </div>
    <button class="btn btn-primary" (click)="clickMe()">
        View Status!</button>
</div>
`
})
export class StudentInfoComponent{
    @Input() student:any;
    @Output() studentClick = new EventEmitter();
    clickMe(){
        console.log('Hello  ===>  Message From Parent To Child..')
        this.studentClick.emit(this.student.Grade.status);
    }

}