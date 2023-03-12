import { AsyncPipe, NgIf, TitleCasePipe, UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CvDataService } from "@kaeh/cv/data-access";
import { ProfessionalExperience } from "@kaeh/cv/models";
import { map, share } from "rxjs";
import { ProfessionalExperiencesComponent } from "./professional-experiences";

@Component({
  selector: 'kaeh-main-content',
  standalone: true,
  imports: [
    // Angular
    NgIf,
    AsyncPipe,
    TitleCasePipe,
    UpperCasePipe,
    // Cv Libraries
    ProfessionalExperiencesComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvMainContentComponent {
	private readonly _cvData = inject(CvDataService).getCvData().pipe(share());

	protected readonly identity$ = this._cvData.pipe(map(({ identity }) => identity));
	protected readonly professionalExperiences$ = this._cvData.pipe(
		map(({ mainContent }) => mainContent.professionalExperience.map(replaceAsteriskInDescriptionBy("&bull;"))),
	);
}

const replaceAsteriskInDescriptionBy = (replacement: string) => (value: ProfessionalExperience): ProfessionalExperience => {
	return {
		...value,
		description: value.description.replace(/\*/gm, replacement),
	};
};
