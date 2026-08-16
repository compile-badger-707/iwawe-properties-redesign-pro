import { properties } from "@/lib/data/properties";
import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  featuredOnly?: boolean;
}

export default function PropertyGrid({
  featuredOnly = false,
}: PropertyGridProps) {
  const displayedProperties = featuredOnly
    ? properties.filter((property) => property.featured)
    : properties;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {displayedProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}