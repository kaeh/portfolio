import { DatePipe, NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ProfessionalExperience } from "@kaeh/cv/models";

@Component({
  selector: 'kaeh-professional-experiences',
  standalone: true,
  imports: [DatePipe, NgIf, NgFor],
  templateUrl: './professional-experiences.component.html',
  styleUrls: ['./professional-experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalExperiencesComponent {
	@Input() data!: ProfessionalExperience[];
}
