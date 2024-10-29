import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { HttpClientModule } from '@angular/common/http';
import { SchoolService } from './school.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SchoolComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [SchoolService, HttpClientModule],

})
export class AppComponent {
  title = 'schoolapp';
}
