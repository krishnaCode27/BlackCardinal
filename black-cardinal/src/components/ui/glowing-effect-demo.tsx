"use client";

import React from "react";
import { Search, Sparkles, Lock, Settings, Box } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export interface BentoCardData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  itemClass: string;
}

const BENTO_CARDS: BentoCardData[] = [
  {
    id: "strategy-first",
    title: "Strategy First",
    description:
      "Every meaningful digital presence starts with a clear strategy built around your business goals.",
    icon: <Search className="h-5 w-5 text-[#E32636]" aria-hidden="true" />,
    itemClass: "bento-item-1 md:col-span-6 lg:col-span-4",
  },
  {
    id: "creative-thinking",
    title: "Creative Thinking",
    description:
      "Distinctive ideas and thoughtful design that help your brand stand out.",
    icon: <Sparkles className="h-5 w-5 text-[#E32636]" aria-hidden="true" />,
    itemClass: "bento-item-2 md:col-span-6 lg:col-span-4",
  },
  {
    id: "reliable-collaboration",
    title: "Reliable Collaboration",
    description:
      "Transparent communication and a collaborative approach at every stage.",
    icon: <Lock className="h-5 w-5 text-[#E32636]" aria-hidden="true" />,
    itemClass: "bento-item-3 md:col-span-6 lg:col-span-4",
  },
  {
    id: "digital-expertise",
    title: "Digital Expertise",
    description:
      "Connected digital services designed to strengthen your brand online.",
    icon: <Settings className="h-5 w-5 text-[#E32636]" aria-hidden="true" />,
    itemClass: "bento-item-4 md:col-span-6 lg:col-span-6",
  },
  {
    id: "built-for-growth",
    title: "Built for Growth",
    description:
      "Practical digital solutions focused on creating meaningful business opportunities.",
    icon: <Box className="h-5 w-5 text-[#E32636]" aria-hidden="true" />,
    itemClass: "bento-item-5 md:col-span-12 lg:col-span-6",
  },
];

interface GridItemProps {
  itemClass: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function GridItem({ itemClass, icon, title, description }: GridItemProps) {
  return (
    <li className={`list-none ${itemClass}`}>
      <div className="group relative h-full min-h-[200px] md:min-h-[220px] lg:h-[245px] rounded-[20px] border border-white/10 p-[1.5px] transition-all duration-300">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={1.5}
          blur={6}
          variant="default"
        />

        {/* Card Body - Natural top-aligned content flow */}
        <div className="relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-[18px] border border-white/5 bg-[#151515] p-6 md:p-7 transition-colors duration-300 group-hover:bg-[#1D1D20]/90">
          {/* Icon Badge */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#1D1D20] text-[#E32636] shadow-[0_0_14px_rgba(227,38,54,0.12)] transition-transform duration-300 group-hover:scale-105 group-hover:border-[#E32636]/40">
            {icon}
          </div>

          {/* Typography */}
          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold tracking-tight text-[#F5F5F5] md:text-xl transition-colors duration-200 group-hover:text-white">
              {title}
            </h3>
            <p className="font-body text-sm leading-relaxed text-[#A5A5A5]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export function GlowingEffectDemo() {
  return (
    <ul className="bento-grid grid grid-cols-1 gap-5 md:grid-cols-12">
      {BENTO_CARDS.map((card) => (
        <GridItem
          key={card.id}
          itemClass={card.itemClass}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </ul>
  );
}
