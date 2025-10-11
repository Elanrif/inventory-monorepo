export type Category = {
    id: number;
    name: string;
    description: string;
    isFeatured: boolean;
    imageUrl: string;
    statusColors: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export interface CategoryReq {
    status: "ACTIVE" | "INACTIVE" | string ;
    name: string;
    description: string;
    isFeatured: boolean;
    imageUrl?: string;
}