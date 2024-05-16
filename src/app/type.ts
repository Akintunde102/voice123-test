export interface PartialActorResponseItem {
    id: number;
    user_id: number;
    relevant_sample: {
        id: number;
        name: string;
        additional_info: string;
        display_order: number;
        file: string;
    };
    user: {
        id: number;
        name: string;
        username: string;
        picture_small: string;
        picture_medium: string;
        picture_large: string;
    }
    additional_details: string;
    summary: string;
    description: string;
    headline: string;
}


export interface PageMeta {
    pageSize: number;
    currentPage: number;
    totalPages: number;
    totalRows: number;
}
