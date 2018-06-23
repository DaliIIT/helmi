import {Component, OnInit, Renderer2} from '@angular/core';
import {CLASSROOM} from '../interfaces/classroom.interface';
import {ClassrromService} from '../services/classrrom.service';
import {STUDENTS} from '../interfaces/students';

@Component({
  selector: 'app-students-display',
  templateUrl: './students-display.component.html',
  styleUrls: ['./students-display.component.css']
})
export class StudentsDisplayComponent implements OnInit {

  classrooms: CLASSROOM[];
  currentField: string;
  students: STUDENTS[];
  currentStudent: STUDENTS;
  student: STUDENTS;

  constructor(private configService: ClassrromService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.configService.getClass()
      .subscribe((data: CLASSROOM[]) => {
        // this.field = data[0].field;
        // this.students = data[0].students;
        this.classrooms = data;
      });
  }

  cardBtnClicked(index, student, field, deleteModal, editModal) {
    if (index === 'DELETE') {
      this.currentStudent = student;
      this.currentField = field;
      this.renderer.setStyle(deleteModal, 'display', 'block');
    } else if (index === 'EDIT') {
      this.currentStudent = student;
      this.currentField = field;
      this.renderer.setStyle(editModal, 'display', 'block');
    }
  }

  editStudent(f) {
    this.student = f.value;

    // this.configService.update(this.student).subscribe(Response =>{
    //   console.log(Response);
    // });
  }

  getFieldIndex() {
    let i = 0;

    for (let classroom of this.classrooms) {
      if (classroom.field !== this.currentField) {
        i++;
      }
      return i;
    }
  }

}
