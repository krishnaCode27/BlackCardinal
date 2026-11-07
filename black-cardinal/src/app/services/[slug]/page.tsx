import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/config/services";
import { EnquiryForm } from "@/components/forms/enquiry-form";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: service.short } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <>
    <section className="page-hero"><div className="container"><p className="eyebrow">BLACK CARDINAL / SERVICES</p><h1>{service.title.split(" ").slice(0, -1).join(" ")} <span>{service.title.split(" ").slice(-1)}</span></h1><p className="hero-copy">{service.short}</p><Link className="button" href="#enquiry">Discuss this service ↗</Link></div></section>
    <section className="section"><div className="container two-col"><div><p className="eyebrow">THE OPPORTUNITY</p><h2>Make your next move <span>more intentional.</span></h2></div><p className="lead">{service.intro}</p></div></section>
    <section className="section section-dark"><div className="container content-grid"><div><p className="eyebrow">WHAT&apos;S INCLUDED</p><h2>Thoughtful work.<br/><span>Clear direction.</span></h2></div><div className="content-list">{service.offerings.map((x,i)=><div className="list-row" key={x}><span>0{i+1}</span><h3>{x}</h3></div>)}</div></div></section>
    <section className="section"><div className="container"><p className="eyebrow">THE PROCESS</p><h2>A clear path from <span>brief to better.</span></h2><div className="process-grid">{service.process.map((x,i)=><article key={x}><span>0{i+1}</span><p>{x}</p></article>)}</div></div></section>
    <section className="section section-dark"><div className="container two-col"><div><p className="eyebrow">EXPECTED OUTCOMES</p><h2>Progress you can <span>work towards.</span></h2><p className="muted">Outcomes depend on your starting point, market and agreed scope. We focus on meaningful measures rather than promises.</p></div><ul className="outcome-list">{service.outcomes.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="section"><div className="container faq-wrap"><div><p className="eyebrow">GOOD TO KNOW</p><h2>Questions, <span>answered.</span></h2></div><div>{service.faqs.map(f=><details className="faq" key={f.question}><summary>{f.question}</summary><p className="muted">{f.answer}</p></details>)}</div></div></section>
    <section className="section section-dark" id="enquiry"><div className="container two-col"><div><p className="eyebrow">LET&apos;S TALK ABOUT {service.title.toUpperCase()}</p><h2>Tell us what you&apos;re <span>working towards.</span></h2><p className="muted">Share a little context. We&apos;ll use it to understand whether we&apos;re the right fit.</p></div><EnquiryForm initialService={service.title}/></div></section>
  </>;
}
