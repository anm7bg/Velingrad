import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Забележителности Велинград - Velingrad24.com",
    template: "Забележителности Велинград - Velingrad24.com",
  },
  description: "Тук ще опитаме да съберем и опишем, всички забележителности във и около Велинград.",
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
