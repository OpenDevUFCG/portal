export async function generateStaticParams() {
  const content = await import(`@/content/${"events"}.md`);
  const slugs = content.attributes.events.map((event: any) => event.slug);

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>{params.slug}</div>;
}
