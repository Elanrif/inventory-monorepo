
export type CategoryType = {
  id: string
  name: string
  status: "active" | "inactive"
  description: string
  isfeatured: string
  imageUrl: string
}

export const categoryMocks: CategoryType[] = [
  {
    id: "m5gr84i9",
    name: "Electronics",
    status: "active",
    description:"description de la categorie",
    isfeatured:"Yes",
    imageUrl: "/images/iphone16.jpg",
  },
  {
    id: "3u1reuv4",
    name: "Electronics",
    status: "active",
    description:"description de la categorie",
    isfeatured:"Yes",
    imageUrl: "/images/pc gaming.jpg",
  },
  {
    id: "derv1ws0",
    name: "Apparel",
    status: "inactive",
    description:"description de la categorie",
    isfeatured:"No",
    imageUrl: "/images/vetements.jpg",
  },
  {
    id: "5kma53ae",
    name: "Apparel",
    status: "active",
    description:"description de la categorie",
    isfeatured:"No",
    imageUrl: "/images/children apparel.jpg",
  },
  {
    id: "bhqecj4p",
    name: "Wellness",
    status: "inactive",
    description:"description de la categorie",
    isfeatured:"Yes",
    imageUrl: "/images/crème.jpg",
  },
]
