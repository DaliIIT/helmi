import {Component, OnInit, Renderer2} from '@angular/core';
import {CLASSROOM} from '../interfaces/classroom.interface';
import {ClassrromService} from '../services/classrrom.service';
import {STUDENTS} from '../interfaces/students';
import {DataService} from '../../services/dataShare/data.service';
import {SAREDDATA} from '../../services/interfaces/sharedData.interface';
import {ALL} from 'tslint/lib/rules/completedDocsRule';

@Component({
  selector: 'app-students-display',
  templateUrl: './students-display.component.html',
  styleUrls: ['./students-display.component.css']
})
export class StudentsDisplayComponent implements OnInit {

  editModal;
  deleteModal;
  studentsdata: STUDENTS[];
  students: STUDENTS[];
  currentStudent: STUDENTS;
  student: STUDENTS;
  filters: SAREDDATA;
  currentFilterState: SAREDDATA = {name: '', gender: 'ALL', department: 'ALL', lang: 'EN'};

  constructor(private configService: ClassrromService,
              private renderer: Renderer2,
              private data: DataService) {
  }

  ngOnInit() {
    this.configService.getClass()
      .subscribe((data: STUDENTS[]) => {
        console.log(data);
        this.students = data;
      });
    this.data.currentMessage.subscribe(data => {
      this.filters = data;
      console.log(this.filters);
     // this.filterList();
    });
  }

  // checkName(obj: STUDENTS) {
  //   if (this.currentFilterState.name !== '' && (obj.firstName + '' + obj.lastName).indexOf(this.currentFilterState.name) > -1) {
  //     return true;
  //   }
  //   return false;
  // }
  //
  // checkGender(obj: STUDENTS) {
  //   if (this.currentFilterState.gender === 'ALL' || obj.gender === this.currentFilterState.gender) {
  //     return true;
  //   }
  //   return false;
  // }
  //
  // filterList() {
  //
  //   Object.assign({}, this.currentFilterState, this.filters.lang);
  //   for (let studnt of this.studentsdata) {
  //     if( this.checkName(studnt) &&   this.checkName(studnt) && this.checkGender(studnt) ){
  //       this.students.push(studnt);
  //     }
  //   }
  // }

  cardBtnClicked(index, student, deleteModal, editModal) {
    if (index === 'DELETE') {
      this.currentStudent = student;
      this.deleteModal = deleteModal;
      this.renderer.setStyle(deleteModal, 'display', 'block');
    } else if (index === 'EDIT') {
      this.currentStudent = student;
      this.editModal = editModal;
      this.renderer.setStyle(editModal, 'display', 'block');
    }
  }

  editStudent(f) {
    this.student = f.value;
    this.students[this.students.indexOf(this.students.filter(x => x.id === this.currentStudent.id)[0])] = Object.assign({}, this.currentStudent, f.value);
    this.configService.update(Object.assign({}, this.currentStudent, f.value));
    this.renderer.setStyle(this.editModal, 'display', 'none');
    // this.configService.update(this.student).subscribe(Response =>{
    //   console.log(Response);
    // });
  }

  deleteStudent() {
    this.students.splice(this.students.indexOf(this.students.filter(x => x.id === this.currentStudent.id)[0]), 1);
    this.renderer.setStyle(this.deleteModal, 'display', 'none');
  }

}
