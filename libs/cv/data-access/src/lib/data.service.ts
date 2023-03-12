import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { CvData } from "@kaeh/cv/models";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class CvDataService {
	private readonly _http = inject(HttpClient);

	getCvData(): Observable<CvData> {
		return this._http.get<CvData>("assets/data.json");
	}
}
