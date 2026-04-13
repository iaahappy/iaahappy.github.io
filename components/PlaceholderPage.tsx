export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
      <h1 className="font-myeongjo text-3xl font-bold tracking-tight text-cm-deep md:text-4xl">
        {title}
      </h1>
      <p className="mt-10 text-lg text-cm-moss">준비 중입니다.</p>
    </div>
  );
}
