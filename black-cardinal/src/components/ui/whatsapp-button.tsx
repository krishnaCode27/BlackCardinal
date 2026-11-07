import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  if (!siteConfig.whatsapp) return null;
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Black Cardinal, I'd like to discuss a project.")}`;
  return <a className="whatsapp-float" href={url} target="_blank" rel="noreferrer" aria-label="Chat with Black Cardinal on WhatsApp"><MessageCircle size={22} /></a>;
}
