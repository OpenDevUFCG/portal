export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>{params.slug}</div>;
}
