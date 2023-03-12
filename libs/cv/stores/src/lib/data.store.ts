import { inject, Injectable } from "@angular/core";
import { CvDataService } from "@kaeh/cv/data-access";
import { map, share } from "rxjs";

@Injectable({providedIn: 'root'})
export class CvDataStore {
	private readonly _getCvData = inject(CvDataService).getCvData().pipe(share());

	public readonly asideContent$ = this._getCvData.pipe(
		map(({ asideContent }) => asideContent),
	);
}
