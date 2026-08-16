import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Bath,
  Bed,
  CheckCircle2,
  Home,
  MapPin,
  Ruler,
} from "lucide-react";

import { properties } from "@/lib/data/properties";

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  const property = properties.find((item) => item.id === id);

  if (!property) {
    notFound();
  }

  const galleryLabels = [
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Bathroom",
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      {/* Top Navigation */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#166534] transition hover:text-[#14532D]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Properties
        </Link>
      </section>

      {/* Property Header */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-7 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E7F0E9] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#166534]">
                <Home className="h-3.5 w-3.5" />
                {property.type}
              </span>

              {property.featured && (
                <span className="rounded-full bg-[#D4A373] px-3 py-1.5 text-xs font-bold text-[#1F2937]">
                  Featured
                </span>
              )}
            </div>

            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl lg:text-5xl">
              {property.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5 text-[#166534]" />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="lg:text-right">
            <p className="text-sm font-medium text-gray-500">
              Monthly Rent
            </p>

            <p className="mt-1 text-2xl font-bold text-[#166534] sm:text-3xl">
              {property.price}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2">
          {/* Main Image */}
          <div className="group relative min-h-[380px] overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 md:min-h-[580px]">
            <Image
              src={property.gallery[0]}
              alt={`${property.title} exterior`}
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

            {/* Main Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#14532D] backdrop-blur-sm">
                Main View
              </span>

              <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
                {property.title}
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm text-white/85">
                <MapPin className="h-4 w-4" />
                <span>{property.location}</span>
              </div>
            </div>
          </div>

          {/* Supporting Images */}
          {property.gallery.slice(1, 5).map((image, index) => (
            <div
              key={image}
              className="group relative min-h-[190px] overflow-hidden rounded-3xl md:min-h-[285px]"
            >
              <Image
                src={image}
                alt={`${property.title} ${galleryLabels[index]}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold text-white">
                  {galleryLabels[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Left Content */}
          <div>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white sm:grid-cols-4">
              <div className="p-5">
                <Bed className="mb-3 h-5 w-5 text-[#166534]" />

                <p className="text-sm text-gray-500">
                  Bedrooms
                </p>

                <p className="mt-1 text-lg font-bold text-[#1F2937]">
                  {property.bedrooms}
                </p>
              </div>

              <div className="border-t border-[#E8E2D8] p-5 sm:border-l sm:border-t-0">
                <Bath className="mb-3 h-5 w-5 text-[#166534]" />

                <p className="text-sm text-gray-500">
                  Bathrooms
                </p>

                <p className="mt-1 text-lg font-bold text-[#1F2937]">
                  {property.bathrooms}
                </p>
              </div>

              <div className="border-t border-[#E8E2D8] p-5 sm:border-l sm:border-t-0">
                <Ruler className="mb-3 h-5 w-5 text-[#166534]" />

                <p className="text-sm text-gray-500">
                  Area
                </p>

                <p className="mt-1 text-lg font-bold text-[#1F2937]">
                  {property.area}
                </p>
              </div>

              <div className="border-t border-[#E8E2D8] p-5 sm:border-l sm:border-t-0">
                <MapPin className="mb-3 h-5 w-5 text-[#166534]" />

                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-lg font-bold text-[#1F2937]">
                  {property.location}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-12">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#166534]">
                About the property
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl">
                A space designed for comfortable living.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-12">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#166534]">
                Property features
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl">
                Everything you need
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 rounded-xl border border-[#E8E2D8] bg-white p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#166534]" />

                    <span className="text-sm font-medium text-gray-700">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <aside>
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-[#D8CDBB] bg-white shadow-lg">
              {/* Card Header */}
              <div className="bg-[#14532D] p-6 text-white">
                <p className="text-sm font-medium text-[#DDE9DF]">
                  Interested in this property?
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Let&apos;s arrange a viewing.
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#DDE9DF]">
                  Speak with our team and get more information about this
                  property.
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-6 rounded-xl bg-[#FAF8F3] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Monthly Rent
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#166534]">
                    {property.price}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#166534] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#14532D]"
                >
                  Contact Agent

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="mt-3 flex w-full items-center justify-center rounded-xl border border-[#166534] px-5 py-3.5 text-sm font-semibold text-[#166534] transition hover:bg-[#E7F0E9]"
                >
                  Schedule Viewing
                </Link>

                <p className="mt-5 text-center text-xs leading-5 text-gray-500">
                  Our property team will help you arrange a convenient viewing
                  time.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}