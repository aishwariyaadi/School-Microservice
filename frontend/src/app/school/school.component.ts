import { Component,Inject } from '@angular/core';
import { SchoolService } from '../school.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
export interface School {
  id?: number;
  name: string;
  location: string;
}
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class SchoolComponent {
  schools: School[] = [];
  newSchool: School = { name: '', location: '' };

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.loadSchools();
  }

  loadSchools() {
    this.schoolService.getSchools().subscribe({
      next: (data) => {
        this.schools = data;
      },
      error: (error) => {
        console.error('Error loading schools:', error);
      }
    });
  }

  addSchool() {
    this.schoolService.addSchool(this.newSchool).subscribe(school => {
      this.schools.push(school);
      this.newSchool = { name: '', location: '' };
    }, error => {
      console.error('Error adding school:', error);
    });
  }
}
