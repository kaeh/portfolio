import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: 'kaeh-text-with-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-with-icon.component.html',
  styleUrls: ['./text-with-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextWithIconComponent {
	@Input() icon = "";
}
