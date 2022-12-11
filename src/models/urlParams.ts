export interface ParamTypes {
    id: string;
    municipality: string;
    type: string;
    undergroundType: string;
}

export interface QueryParams {
    page: number,
    per_page: number,
    category: string,
    filter: string,
    id: string
}