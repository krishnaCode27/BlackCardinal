import type { Metadata } from "next";
import Link from "next/link";
import { WorkGallery } from "@/components/work/WorkGallery";
import { workItems } from "@/data/work";

export const metadata: Metadata = {
  title: { absolute: "Our Work | Black Cardinal Digital Marketing Agency in Morena" },
  description: "Explore Black Cardinal projects, digital work, and products from Morena, Madhya Pradesh.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#08090B] px-5 pb-20 pt-32 text-white sm:px-8 sm:pt-36 lg:px-12">
      <div className="mx-auto max-w-[1300px]">
        <section aria-labelledby="work-heading" className="mb-10 sm:mb-14">
          <div className="section-label-wrap mb-4">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">SELECTED WORK</span>
          </div>
          <h1 id="work-heading" className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Our Work</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#A5A5A5] sm:text-base">
            Screenshots, videos and products from our projects.
          </p>
        </section>

        <WorkGallery workItems={workItems} />

        <section aria-label="Contact Black Cardinal" className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Want results like these? Let&apos;s talk.</h2>
          <Link href="/contact#contact-form" className="btn-primary rounded-lg no-underline">
            Let&apos;s talk
          </Link>
        </section>
      </div>
    </div>
  );
}
