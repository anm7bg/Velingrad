import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Забележителности Велинград - Velingrad24.com",
    template: "Забележителности Велинград - Velingrad24.com",
  },
  description: "Категория Забележителности Велиинград представя най-добрите туристически атракции и природни красоти в СПА столицата на Балканите.",
  icons: {
    icon: "/new-favicon.ico",
  },
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-[100%] px-[20px] text-center justify-center">
        {children}
      </div>
    </section>
  );
}
