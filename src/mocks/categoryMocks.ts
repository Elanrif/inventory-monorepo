
export type CategoryType = {
  id: string
  CategoryName: string
  status: "In stock" | "Out of stock" | "Low stock"
  imageUrl: string
}

export const categoryMocks: CategoryType[] = [
  {
    id: "m5gr84i9",
    CategoryName: "Electronics",
    status: "In stock",
    imageUrl: "/images/iphone16.jpg",
  },
  {
    id: "3u1reuv4",
    CategoryName: "Electronics",
    status: "In stock",
    imageUrl: "/images/pc gaming.jpg",
  },
  {
    id: "derv1ws0",
    CategoryName: "Apparel",
    status: "Out of stock",
    imageUrl: "/images/vetements.jpg",
  },
  {
    id: "5kma53ae",
    CategoryName: "Apparel",
    status: "Low stock",
    imageUrl: "/images/children apparel.jpg",
  },
  {
    id: "bhqecj4p",
    CategoryName: "Wellness",
    status: "In stock",
    imageUrl: "/images/crème.jpg",
  },
]
