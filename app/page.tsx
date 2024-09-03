import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="hero">
        <h2>Велинград - Българското кътче от рая</h2>
        <p>
        Велинград е водеща СПА дестинация в България, известна с лечебните си минерални извори и красива природа. Открийте най-добрите СПА хотели във Велинград и се насладете на релакс и комфорт. Разгледайте забележителностите на Велинград, включително уникалните паркове, исторически места и красиви езера. Планувайте незабравима почивка в СПА столицата на Балканите и се потопете в спокойствието на Велинград.
        </p>
        <Link href="/blog" className="btn home-btn">
          Вижте публикациите за Велинград
        </Link>
      </div>
    </section>
  );
}
