import { AsyncPipe, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CvDataStore } from "@kaeh/cv/stores";
import { CvAsideBlockComponent } from "./aside-block/aside-block.component";
import { CvPhotoComponent } from "./photo/photo.component";

@Component({
  selector: 'kaeh-aside-informations',
  standalone: true,
  imports: [
    // Angular
    AsyncPipe,
    NgIf,
    // Cv libraries
    CvPhotoComponent,
    CvAsideBlockComponent
  ],
  templateUrl: './aside-informations.component.html',
  styleUrls: ['./aside-informations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvAsideInformationsComponent {
	protected readonly asideContent$ = inject(CvDataStore).asideContent$;
}
