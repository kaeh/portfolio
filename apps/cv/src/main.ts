import { registerLocaleData } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import localeFr from "@angular/common/locales/fr";
import { LOCALE_ID } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

registerLocaleData(localeFr, "fr");

bootstrapApplication(AppComponent, {
	providers: [provideHttpClient(), { provide: LOCALE_ID, useValue: "fr" }],
}).catch((err) => console.error(err));
