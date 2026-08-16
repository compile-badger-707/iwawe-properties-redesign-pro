export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  status: "For Sale" | "For Rent";
  featured: boolean;
};