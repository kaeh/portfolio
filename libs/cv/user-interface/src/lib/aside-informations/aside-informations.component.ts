import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CvPersonalInformationsComponent } from "./personal-informations/personal-informations.component";
import { CvPhotoComponent } from "./photo/photo.component";

@Component({
  selector: 'kaeh-aside-informations',
  standalone: true,
  imports: [CvPhotoComponent, CvPersonalInformationsComponent],
  templateUrl: './aside-informations.component.html',
  styleUrls: ['./aside-informations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvAsideInformationsComponent {}
