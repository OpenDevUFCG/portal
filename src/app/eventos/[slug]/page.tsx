/* eslint-disable @next/next/no-img-element */
import { CMS } from "@/interfaces/CMS";
import { EventsCMS } from "@/interfaces/Events";

import "./styles.css";
import { RedirectType, redirect } from "next/navigation";

import GallerySection from "./gallery";
import SponsorsSection from "./sponsors";
import TestimonialsSection from "./testimonials";
import { resolveImagePath } from "@/utils/image";

export async function generateStaticParams() {
  const content: CMS<EventsCMS> = await import(`@/content/${"events"}.md`);
  const slugs = content.attributes.events.map((event) => event.slug);

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const eventsContent: CMS<EventsCMS> = await import(
    `@/content/${"events"}.md`
  );
  const event = eventsContent.attributes.events.find(
    (ev) => ev.slug === params.slug
  );

  if (!event) {
    redirect("/events", RedirectType.replace);
  }

  return (
    <div className="page-box">
      <div className="section-box">
        {event.banner && (
          <img
            width="100%"
            height="auto"
            src={resolveImagePath(event.banner)}
            alt="Imagem principal do evento"
          />
        )}
        <h1 className="banner-title">{event.name}</h1>
      </div>

      <div className="section-box">
        <h2 className="section-title">SOBRE O EVENTO</h2>
        <p>{event.description}</p>
      </div>

      {event.sponsors?.length > 0 && (
        <SponsorsSection sponsors={event.sponsors} />
      )}

      {event.testimonials?.length > 0 && (
        <TestimonialsSection testimonials={event.testimonials} />
      )}

      <GallerySection images={event.gallery ?? []} />
    </div>
  );
}
