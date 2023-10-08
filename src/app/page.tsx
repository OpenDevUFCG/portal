export default async function HomePage() {
  // importing markdown content
  const content = await import(`@/content/${"events"}.md`);

  return (
    <>
      <div>hello opendev</div>
    </>
  );
}
