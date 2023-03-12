import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'kaeh-photo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvPhotoComponent {}
