import { inject, Injectable } from "@angular/core";
import { CvDataService } from "@kaeh/cv/data-access";
import { map, share } from "rxjs";

@Injectable({providedIn: 'root'})
export class CvDataStore {
	private readonly _getCvData = inject(CvDataService).getCvData().pipe(share());

	public readonly identity$ = this._getCvData.pipe(map(({ identity }) => identity));
	public readonly asideContent$ = this._getCvData.pipe(map(({ asideContent }) => asideContent));
	public readonly mainContent$ = this._getCvData.pipe(map(({ mainContent }) => mainContent));
}
