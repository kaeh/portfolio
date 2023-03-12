export interface ProfessionalExperience {
	jobTitle: string;
	employer: string;
	contractType: string;
	date: {
		start: Date;
		end?: Date;
	};
	description: string;
}
