
export type CategoryType = {
  id: string
  Name: string
  status: "active" | "inactive"
  description: string
  is_featured: string
  imageUrl: string
}

export const categoryMocks: CategoryType[] = [
  {
    id: "m5gr84i9",
    Name: "Electronics",
    status: "active",
    description:"description de la categorie",
    is_featured:"Yes",
    imageUrl: "/images/iphone16.jpg",
  },
  {
    id: "3u1reuv4",
    Name: "Electronics",
    status: "active",
    description:"description de la categorie",
    is_featured:"Yes",
    imageUrl: "/images/pc gaming.jpg",
  },
  {
    id: "derv1ws0",
    Name: "Apparel",
    status: "inactive",
    description:"description de la categorie",
    is_featured:"No",
    imageUrl: "/images/vetements.jpg",
  },
  {
    id: "5kma53ae",
    Name: "Apparel",
    status: "active",
    description:"description de la categorie",
    is_featured:"No",
    imageUrl: "/images/children apparel.jpg",
  },
  {
    id: "bhqecj4p",
    Name: "Wellness",
    status: "inactive",
    description:"description de la categorie",
    is_featured:"Yes",
    imageUrl: "/images/crème.jpg",
  },
]
