
export type CategoryType = {
  id: string
  CategoryName: string
  status: "In stock" | "Out of stock" | "Low stock"
  description: string
  imageUrl: string
}

export const categoryMocks: CategoryType[] = [
  {
    id: "m5gr84i9",
    CategoryName: "Electronics",
    status: "In stock",
    description:"description de la categorie",
    imageUrl: "/images/iphone16.jpg",
  },
  {
    id: "3u1reuv4",
    CategoryName: "Electronics",
    status: "In stock",
    description:"description de la categorie",
    imageUrl: "/images/pc gaming.jpg",
  },
  {
    id: "derv1ws0",
    CategoryName: "Apparel",
    status: "Out of stock",
    description:"description de la categorie",
    imageUrl: "/images/vetements.jpg",
  },
  {
    id: "5kma53ae",
    CategoryName: "Apparel",
    status: "Low stock",
    description:"description de la categorie",
    imageUrl: "/images/children apparel.jpg",
  },
  {
    id: "bhqecj4p",
    CategoryName: "Wellness",
    status: "In stock",
    description:"description de la categorie",
    imageUrl: "/images/crème.jpg",
  },
]
