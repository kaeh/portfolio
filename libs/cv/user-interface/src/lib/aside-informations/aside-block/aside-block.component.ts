import { NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { AsideBlock } from "@kaeh/cv/models";
import { TextWithIconComponent } from "@kaeh/cv/shared";

@Component({
  selector: 'kaeh-aside-block',
  standalone: true,
  imports: [
    // Angular
    NgFor,
    // Cv Libraries
    TextWithIconComponent
  ],
  templateUrl: './aside-block.component.html',
  styleUrls: ['./aside-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvAsideBlockComponent {
	@Input() data!: AsideBlock[];
}
