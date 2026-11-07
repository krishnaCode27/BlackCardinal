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
    icon: <Search className="h-5 w-5 text-[#E32636]" />,
    itemClass: "bento-item-1 md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    id: "creative-thinking",
    title: "Creative Thinking",
    description:
      "Distinctive ideas and thoughtful design that help your brand stand out.",
    icon: <Sparkles className="h-5 w-5 text-[#E32636]" />,
    itemClass: "bento-item-2 md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    id: "reliable-collaboration",
    title: "Reliable Collaboration",
    description:
      "Transparent communication and a collaborative approach at every stage.",
    icon: <Lock className="h-5 w-5 text-[#E32636]" />,
    itemClass: "bento-item-3 md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    id: "digital-expertise",
    title: "Digital Expertise",
    description:
      "Connected digital services designed to strengthen your brand online.",
    icon: <Settings className="h-5 w-5 text-[#E32636]" />,
    itemClass: "bento-item-4 md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    id: "built-for-growth",
    title: "Built for Growth",
    description:
      "Practical digital solutions focused on creating meaningful business opportunities.",
    icon: <Box className="h-5 w-5 text-[#E32636]" />,
    itemClass: "bento-item-5 md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
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
    <li className={`min-h-[14rem] list-none ${itemClass}`}>
      <div className="relative h-full rounded-2xl md:rounded-3xl border border-white/10 p-2 md:p-2.5 transition-all duration-300">
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

        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-white/5 bg-[#151515] p-6 md:p-7 transition-colors duration-300 hover:bg-[#1D1D20]">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            {/* Icon Bubble with Cardinal Red Glow */}
            <div className="w-fit rounded-lg border border-white/10 bg-[#1D1D20] p-2.5 shadow-inner">
              {icon}
            </div>

            {/* Typography */}
            <div className="space-y-2.5">
              <h3 className="font-display text-xl font-bold tracking-tight text-[#FFFFFF] md:text-2xl">
                {title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-[#A5A5A5] md:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export function GlowingEffectDemo() {
  return (
    <ul className="bento-grid grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 xl:max-h-[36rem] xl:grid-rows-2">
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

