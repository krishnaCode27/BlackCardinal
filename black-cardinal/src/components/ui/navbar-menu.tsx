"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 12,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as const;

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  isActiveRoute = false,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  href?: string;
  isActiveRoute?: boolean;
  children?: React.ReactNode;
}) => {
  const isDropdown = Boolean(children);
  const isOpen = active === item;

  return (
    <div
      onMouseEnter={() => {
        if (isDropdown) setActive(item);
      }}
      className="relative"
    >
      {href && !isDropdown ? (
        <Link
          href={href}
          onClick={() => setActive(null)}
          className={cn(
            "relative flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-medium tracking-[0.2px] transition-colors duration-200 border-0 outline-none",
            "focus-visible:ring-1 focus-visible:ring-[#E32636] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090B] focus-visible:rounded-md",
            isActiveRoute ? "text-white" : "text-[#A5A5A5] hover:text-white"
          )}
        >
          <span>{item}</span>
          {isActiveRoute && (
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E32636] shadow-[0_0_8px_#E32636]"
              aria-hidden="true"
            />
          )}
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => setActive(isOpen ? null : item)}
          aria-expanded={isOpen}
          aria-haspopup="true"
          className={cn(
            "relative flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-medium tracking-[0.2px] transition-colors duration-200 cursor-pointer bg-transparent border-0 outline-none",
            "focus-visible:ring-1 focus-visible:ring-[#E32636] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090B] focus-visible:rounded-md",
            isActiveRoute || isOpen
              ? "text-white"
              : "text-[#A5A5A5] hover:text-white"
          )}
        >
          <span>{item}</span>
          <ChevronDown
            size={14}
            className={cn(
              "transition-transform duration-250 ease-out text-[#A5A5A5]",
              isOpen && "rotate-180 text-[#E32636]"
            )}
            aria-hidden="true"
          />
          {isActiveRoute && (
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E32636] shadow-[0_0_8px_#E32636]"
              aria-hidden="true"
            />
          )}
        </button>
      )}

      {/* Floating Borderless Dropdown */}
      <AnimatePresence>
        {isDropdown && isOpen && (
          <div className="absolute top-[calc(100%_+_0.85rem)] left-1/2 -translate-x-1/2 pt-2 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 6 }}
              transition={transition}
              className="relative overflow-hidden rounded-2xl bg-[#121316]/95 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.85)] border-0"
            >
              <div className="w-max max-w-[580px] p-5">
                {children}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative flex items-center justify-center gap-1",
        className
      )}
      aria-label="Main navigation"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...rest}
      className={cn(
        "group flex items-start gap-3 rounded-xl p-3 text-sm text-[#A5A5A5] transition-all duration-200 hover:bg-white/[0.04] hover:text-white border-0 outline-none focus-visible:ring-1 focus-visible:ring-[#E32636] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121316]",
        className
      )}
    >
      {children}
    </Link>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2 border-0 outline-none">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-base font-bold mb-1 text-white">{title}</h4>
        <p className="text-[#A5A5A5] text-xs max-w-[10rem]">{description}</p>
      </div>
    </Link>
  );
};
