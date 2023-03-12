import { Component } from "@angular/core";
import { CvAsideInformationsComponent } from "@kaeh/cv/user-interface";

@Component({
  standalone: true,
  imports: [CvAsideInformationsComponent],
  selector: 'kaeh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
