import PropertyGrid from "@/components/properties/PropertyGrid";

export default function FeaturedProperties() {
  return (
    <section className="bg-[#FAF8F3] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#166534]">
            Featured Properties
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">
            Find Your Perfect Property
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our selection of quality properties in some of the best
            locations around Kigali.
          </p>
        </div>

        <PropertyGrid featuredOnly />
      </div>
    </section>
  );
}