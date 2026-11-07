import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
export const metadata: Metadata = { title: "Services", description: "Explore digital marketing, social media, SEO, website development, branding and local growth services." };
export default function ServicesPage() {
  return <><section className="page-hero"><div className="container"><p className="eyebrow">WHAT WE DO</p><h1>One partner.<br/><span>More ways forward.</span></h1><p className="hero-copy">Choose the support you need today. Build the connected strategy you need tomorrow.</p></div></section><section className="section section-dark"><div className="container"><div className="service-grid">{services.map((s,i)=><Link className="service-card" href={`/services/${s.slug}`} key={s.slug}><span className="card-index">0{i+1}</span><h3>{s.title}</h3><p>{s.short}</p><span className="card-link">Explore service <ArrowUpRight size={16}/></span></Link>)}</div></div></section></>;
}
