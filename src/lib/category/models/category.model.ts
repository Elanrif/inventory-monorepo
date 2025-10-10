// DTO pour la récupération
export type CategoryDto = {
  id: number;
  name: string;
  description: string;
  image: string;
  status: "active" | "inactive";
  statusColors: string;
  isFeatured: boolean;
  created_at: string;
};

// DTO pour la modification
export interface CategoryReqDTO {
  name: string
  description: string
}


