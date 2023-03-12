import { NgIf, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from "@angular/core";

const ContainsAssetsOrDotOrSlashRegexp = /assets|\.|\//;

@Component({
  selector: 'kaeh-text-with-icon',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './text-with-icon.component.html',
  styleUrls: ['./text-with-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextWithIconComponent implements OnInit {
	@Input() icon = "";
	protected isIcon = true;

	@HostBinding("class")
	protected readonly cssClasses = "text-with-icon";

	ngOnInit() {
		this.isIcon = !ContainsAssetsOrDotOrSlashRegexp.test(this.icon);
		console.log(this.icon, this.isIcon);
	}
}
