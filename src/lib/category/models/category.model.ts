// DTO pour la récupération
export type CategoryDto = {
  imageUrl: string;
  id: number;
  name: string;
  description: string;
  image: string;
  status: "active" | "inactive";
  statusColors: string;
  isFeatured: boolean;
  createdAt: string;
};

// DTO pour la modification
export interface CategoryReqDTO {
  name: string
  description: string
}


