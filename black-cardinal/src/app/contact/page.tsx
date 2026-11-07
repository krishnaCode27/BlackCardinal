import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = { title: "Contact", description: "Start a conversation with Black Cardinal about your next digital project." };
export default function ContactPage() {
  return <><section className="page-hero"><div className="container"><p className="eyebrow">CONTACT / START A CONVERSATION</p><h1>Every good project<br/>starts with <span>a conversation.</span></h1><p className="hero-copy">Tell us what you&apos;re building, changing or figuring out. We&apos;ll take it from there.</p></div></section><section id="contact-form" className="section section-dark scroll-mt-24"><div className="container contact-grid"><div><p className="eyebrow">GET IN TOUCH</p><h2>Let&apos;s find your <span>next move.</span></h2><p className="muted">Use the form to tell us about your project. We&apos;ll respond using your preferred contact method.</p><div className="contact-detail"><span>EMAIL</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div><div className="contact-detail"><span>LOCATION</span><p>{siteConfig.location}</p></div></div><EnquiryForm/></div></section></>;
}
