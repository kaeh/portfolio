import { Component } from "@angular/core";
import { CvAsideInformationsComponent, CvMainContentComponent } from "@kaeh/cv/user-interface";

@Component({
  standalone: true,
  imports: [CvAsideInformationsComponent, CvMainContentComponent],
  selector: 'kaeh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
