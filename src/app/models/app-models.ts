export interface AllSports {
    name : string,
	pictogram : string,
	isimportant : boolean
}
export interface eventname {
    name: string,
    category?: string,
    totalentries?: string,
    qualificationstandard?: string,
    maxentriesperNOC?: string,
    NR?: string, 
    WR?: string
}
export interface SportDetails {
	name: string,
	Medals: string,
	doc_pdf: string,
	image: string,
	description: string,
	events:{
        man?: eventname[],
        women?: eventname[],
        mixed?: eventname[],
        unisex?: eventname[],
    };
}
export interface Calendar {
    name : string,
	sportname : string,
	startdate : number,
	enddate : number,
	venue : string
}
export interface Athletes {
    name : string,
	sportname : string,
	event : string,
	qualificationEvent : string,
	image : string,
	date_qualified : number
}
export interface Shows {
    name : string,
	description : string,
	image?: string,
	youtube_id : string,
	imdb_id : string
}