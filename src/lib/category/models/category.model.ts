export type CategoryDto = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};


