import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextWithIconComponent } from "@kaeh/cv/shared";

@Component({
  selector: 'kaeh-personal-informations',
  standalone: true,
  imports: [TextWithIconComponent],
  templateUrl: './personal-informations.component.html',
  styleUrls: ['./personal-informations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvPersonalInformationsComponent {}
