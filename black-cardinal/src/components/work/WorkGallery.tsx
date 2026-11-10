"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { WorkItem } from "@/data/work";
import styles from "./work-gallery.module.css";

type WorkType = WorkItem["type"];
type Filter = "all" | WorkType;

const filterLabels: Record<Filter, string> = {
  all: "All",
  image: "Images",
  video: "Videos",
  product: "Products",
};

function WorkVideo({ item }: { item: WorkItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setNearViewport(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "240px" });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.videoFrame}>
      <video
        aria-label={item.title}
        controls
        preload="metadata"
        playsInline
        muted
        poster={nearViewport ? item.poster : undefined}
        className={styles.video}
      >
        {nearViewport && <source src={item.src} type="video/mp4" />}
        Your browser does not support HTML video.
      </video>
    </div>
  );
}

function WorkCard({ item, onOpenImage }: { item: WorkItem; onOpenImage: (item: WorkItem) => void }) {
  return (
    <article className={styles.card}>
      {item.type === "video" ? (
        <WorkVideo item={item} />
      ) : (
        <>
          {item.type === "image" && (
            <div className={styles.browserBar} aria-hidden="true">
              <span className={styles.browserDotRed} />
              <span className={styles.browserDot} />
              <span className={styles.browserDot} />
            </div>
          )}
          <button
            type="button"
            className={styles.imageButton}
            onClick={() => onOpenImage(item)}
            aria-label={`Open ${item.title} image in a larger view`}
          >
            <Image
              src={item.src}
              alt={item.title}
              width={1600}
              height={1200}
              loading="lazy"
              className={styles.image}
            />
          </button>
        </>
      )}
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{item.title}</h2>
        {item.description && <p className={styles.description}>{item.description}</p>}
        {item.result && <p className={styles.result}>{item.result}</p>}
      </div>
    </article>
  );
}

export function WorkGallery({ workItems }: { workItems: WorkItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeImage, setActiveImage] = useState<WorkItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (activeImage && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [activeImage]);

  const availableFilters = (Object.keys(filterLabels) as Filter[]).filter((value) =>
    value === "all" ? workItems.length > 0 : workItems.some((item) => item.type === value)
  );
  const visibleItems = filter === "all" ? workItems : workItems.filter((item) => item.type === filter);

  if (workItems.length === 0) {
    return (
      <div className={styles.emptyState}>
        <span className={styles.emptyEyebrow}>PORTFOLIO IN PROGRESS</span>
        <h2>Our projects are coming soon.</h2>
        <p>Want to talk about a project of your own?</p>
        <Link className={styles.primaryLink} href="/contact">Let&apos;s Talk</Link>
      </div>
    );
  }

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter work by type">
        {availableFilters.map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={filter === value}
            className={`${styles.filterButton}${filter === value ? ` ${styles.filterButtonActive}` : ""}`}
            onClick={() => setFilter(value)}
          >
            {filterLabels[value]}
          </button>
        ))}
      </div>
      <div id="work-results" className={styles.grid}>
        {visibleItems.map((item, index) => (
          <WorkCard key={`${item.type}-${item.src}-${index}`} item={item} onOpenImage={setActiveImage} />
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Work image preview"
        onClose={() => setActiveImage(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className={styles.dialogPanel}>
          <button type="button" className={styles.closeButton} onClick={() => dialogRef.current?.close()} autoFocus>
            Close
          </button>
          {activeImage && (
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              width={1600}
              height={1200}
              loading="lazy"
              className={styles.dialogImage}
            />
          )}
          {activeImage && <p className={styles.dialogCaption}>{activeImage.title}</p>}
        </div>
      </dialog>
    </>
  );
}
