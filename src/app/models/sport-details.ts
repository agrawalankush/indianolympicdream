export interface eventname {
    name?: string,
    totalentries?: string,
    qualificationstandard?: string,
    maxentriesperNOC?: string,
    NR?: string,
    WR?: string
}
export interface SportDetails {
	name?: string,
	Medals?: string,
	doc_pdf?: string,
	image?: string,
	description?: string,
	events?:{
        man?: eventname[],
        women?: eventname[],
        mixed?: eventname[],
        unisex?: eventname[],
    };
}
