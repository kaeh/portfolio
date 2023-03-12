import { AsideBlock } from "./aside-block.interface";
import { ProfessionalExperience } from "./professional-experience.interface";

export interface CvData {
	identity: { firstName: string; lastName: string };
	asideContent: AsideBlock[];
	mainContent: {
		professionalExperience: ProfessionalExperience[];
	};
}
