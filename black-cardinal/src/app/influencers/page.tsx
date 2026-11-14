import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, MapPin, UsersRound } from "lucide-react";
import { influencers } from "@/data/influencers";

export const metadata: Metadata = {
  title: "Influencer Portfolio | Black Cardinal",
  description: "Meet creators and explore influencer campaign work curated by Black Cardinal.",
  alternates: { canonical: "/influencers" },
};

function CreatorCard({ creator }: { creator: (typeof influencers)[number] }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111216]">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#35131a] via-[#17151a] to-[#101116]">
        {creator.image ? (
          <Image src={creator.image} alt={creator.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        ) : (
          <div className="flex h-full items-center justify-center font-display text-7xl font-extrabold tracking-tight text-white/15" aria-hidden="true">
            {creator.name.slice(0, 1).toUpperCase()}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff737e]">{creator.niche}</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-white">{creator.name}</h2>
          {creator.profileUrl ? (
            <a href={creator.profileUrl} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm text-white/70 hover:text-white">
              {creator.handle}<ArrowUpRight size={13} />
            </a>
          ) : (
            <p className="mt-1 text-sm text-white/70">{creator.handle}</p>
          )}
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-sm leading-7 text-[#B8B8BE]">{creator.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {creator.platforms.map((platform) => (
            <span key={platform} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/75">{platform}</span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#A5A5A5]">
          {creator.audienceSize && <span className="inline-flex items-center gap-1.5"><UsersRound size={14} />{creator.audienceSize} audience</span>}
          {creator.location && <span className="inline-flex items-center gap-1.5"><MapPin size={14} />{creator.location}</span>}
        </div>
        {creator.featuredPosts.length > 0 && (
          <div className="mt-7 border-t border-white/10 pt-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Featured work</h3>
            <div className="mt-3 flex flex-col gap-2">
              {creator.featuredPosts.map((post) => (
                <a key={post.url} href={post.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-3 rounded-lg bg-white/[0.04] px-4 py-3 text-sm text-white/85 transition hover:bg-white/[0.08]">
                  <span className="flex min-w-0 items-center gap-2">
                    {post.image ? (
                      <Image src={post.image} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded object-cover" />
                    ) : (
                      <Instagram size={15} className="shrink-0 text-[#ff737e]" />
                    )}
                    <span className="truncate">{post.title}</span>
                    <span className="shrink-0 text-xs text-white/45">· {post.platform}</span>
                  </span>
                  <ArrowUpRight size={15} className="shrink-0 text-white/50 transition group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function InfluencersPage() {
  return (
    <main className="min-h-screen bg-[#08090B] px-5 pb-20 pt-32 text-white sm:px-8 sm:pt-36 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <section aria-labelledby="influencers-heading" className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[radial-gradient(ellipse_at_top_right,rgba(227,38,54,0.16),transparent_48%),linear-gradient(135deg,#111216,#090a0d)] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="section-label-wrap mb-5">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">CREATOR NETWORK</span>
          </div>
          <h1 id="influencers-heading" className="max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Influencer <span className="text-[#E32636]">Portfolio</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#B8B8BE] sm:text-base sm:leading-8">
            Meet the creators we collaborate with and explore their featured posts, platforms and areas of expertise.
          </p>
          <Link href="/services/influencer-marketing" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#E32636] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C91F2E]">
            Explore influencer marketing <ArrowUpRight size={16} />
          </Link>
        </section>

        <section aria-labelledby="creator-list-heading" className="mt-14 sm:mt-16">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E32636]">The people behind the posts</p>
              <h2 id="creator-list-heading" className="mt-2 font-display text-2xl font-bold sm:text-3xl">Featured creators</h2>
            </div>
            {influencers.length > 0 && <p className="text-sm text-[#A5A5A5]">{influencers.length} creator{influencers.length === 1 ? "" : "s"}</p>}
          </div>

          {influencers.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {influencers.map((creator) => <CreatorCard key={creator.handle} creator={creator} />)}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.025] px-6 py-12 text-center sm:px-10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E32636]/10 text-[#ff737e]"><Instagram size={21} /></div>
              <h3 className="mt-5 font-display text-xl font-bold">Creator profiles are on the way.</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-[#A5A5A5]">
                We&apos;re preparing the first creator profiles and featured posts for this portfolio. In the meantime, tell us who you want to reach and we&apos;ll help plan the right collaboration.
              </p>
              <Link href="/contact#contact-form" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#ff737e]">
                Discuss a creator campaign <ArrowUpRight size={15} />
              </Link>
            </div>
          )}
        </section>

        <section aria-label="Plan an influencer campaign" className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E32636]">Have a campaign in mind?</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">Let&apos;s find the right creators.</h2>
          </div>
          <Link href="/contact#contact-form" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#E32636] hover:bg-[#E32636]">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}
