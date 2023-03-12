import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CvPhotoComponent } from "./photo/photo.component";

@Component({
  selector: 'kaeh-aside-informations',
  standalone: true,
  imports: [CvPhotoComponent],
  templateUrl: './aside-informations.component.html',
  styleUrls: ['./aside-informations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvAsideInformationsComponent {}
