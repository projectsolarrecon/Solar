import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
} from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function BlogPopCultureSexCrime(): JSX.Element {
  return (
    <BlogLayout
      title="Classics and Cancel Culture. Registries and Red Carpets."
      description="Exploring the double standard of sex crimes in pop culture, where some face registries while others walk red carpets."
      keywords="cancel culture, sex crimes, pop culture, hypocrisy, registries, celebrities"
      date="Sep 28, 2025"
      readTime="8 min"
      badge="📝 BLOG"
      lede="The double standard of sex crimes in pop culture — where ordinary people face registries, while celebrities still enjoy ovations."
    >
      <article className="prose prose-slate max-w-none">
        <BandHeader title="📚 Literature: When “Art” Excuses the Inexcusable" icon="📖" />
        <p>
          If society truly believed that depictions of sexual exploitation were intolerable, our
          bookshelves and cultural touchstones would look very different. Yet the literary canon has
          long embraced works that normalize, glamorize, or at the very least linger upon sexual
          encounters between children and adults. These same depictions, if acted upon in real life,
          would be criminal offenses resulting in prison and a lifetime on the registry. The hypocrisy
          is staggering.
        </p>

        <PullQuote>
          “The same society that demands ‘zero tolerance’ for sex crimes has no problem elevating
          works that center underage sexuality as cultural treasures.”
        </PullQuote>

        <p>
          Take Vladimir Nabokov’s <i>Lolita</i> (1955), routinely hailed as one of the greatest novels
          of the 20th century. Critics praise it for its prose style, its unreliable narration, and its
          cultural impact, but at its core it is the story of a 37-year-old man’s sexual relationship
          with a 12-year-old girl{" "}
          <a
            className={linkCls}
            href="https://www.britannica.com/topic/Lolita-novel-by-Nabokov"
            target="_blank"
            rel="noopener"
          >
            Britannica overview
          </a>
          . Entire essays and think pieces are dedicated to parsing its meaning. It sits on “100
          greatest novels” lists. It has been adapted multiple times for film. The same society that
          demands “zero tolerance” for sex crimes has no problem elevating <i>Lolita</i> as a cultural
          treasure.
        </p>

        <Callout variant="info" title="Literary Contradiction" icon="📘">
          <p>
            <i>Lolita</i> is banned in some countries, yet widely embraced in the U.S. and Europe as a
            “masterpiece.” This inconsistency underscores how morality shifts depending on framing.
          </p>
        </Callout>

        <p>
          Aldous Huxley’s <i>Brave New World</i> (1932) is another staple, famous for its dystopian
          critique of conformity and technology. Yet tucked inside is a society in which children are
          deliberately sexualized from a young age, encouraged by the state to experiment sexually long
          before adulthood{" "}
          <a
            className={linkCls}
            href="https://www.britannica.com/topic/Brave-New-World"
            target="_blank"
            rel="noopener"
          >
            Britannica: Brave New World
          </a>
          . It is lauded as prescient social satire, with little acknowledgment that its dystopia
          treats child sexuality as normalized background detail.
        </p>

        <p>
          The point is not that these books are dangerous in themselves, but that they reveal a
          profound cultural double standard. When framed as “art,” the same material is protected,
          discussed, even celebrated. When the exact same dynamics appear in police reports or
          courtrooms, the people involved are locked away, then exiled onto registries for life.
        </p>

        <p>
          Stephen King’s <i>It</i> (1986) devotes one of its most controversial scenes to a sexual
          encounter among children — a group of 11-year-olds — that was so infamous it was deliberately
          excised from the blockbuster film adaptations in 2017 and 2019{" "}
          <a
            className={linkCls}
            href="https://www.theatlantic.com/entertainment/archive/2017/09/stephen-kings-most-controversial-scene/539529/"
            target="_blank"
            rel="noopener"
          >
            The Atlantic coverage
          </a>
          . Millions of readers encounter it in the novel, but Hollywood knew that showing it onscreen
          would be a scandal. The written word is forgiven; the moving image is not.
        </p>

        <p>
          George R.R. Martin’s <i>A Song of Ice and Fire</i> series (1996–present), adapted into HBO’s{" "}
          <i>Game of Thrones</i>, pushes the same contradiction. On the page, characters like Daenerys
          Targaryen and Sansa Stark are barely in their teens when their sexual encounters begin. HBO
          aged them up — Daenerys from 13 in the book to roughly 16 or 17 onscreen, Sansa from 11 in
          the book to her mid-teens — because the network knew showing true-to-text versions would
          spark outrage{" "}
          <a
            className={linkCls}
            href="https://time.com/5627052/game-of-thrones-book-vs-show-characters/"
            target="_blank"
            rel="noopener"
          >
            Time: Why Game of Thrones Aged Up Its Characters
          </a>
          . Readers consume the books without widespread scandal; the showrunners were forced to
          sanitize for television. Again, the material is excused when cloaked in literary prestige.
        </p>

        <Callout variant="research" title="Book vs. Screen Ages" icon="🔎">
          <ul className="list-disc pl-6">
            <li>Daenerys: 13 in the novel → ~17 onscreen</li>
            <li>Sansa: 11 in the novel → mid-teens onscreen</li>
          </ul>
          <p>
            ⚠️ The adaptation quietly “corrected” what audiences would not tolerate — proof that
            literature and television play by different moral rules.
          </p>
        </Callout>

        <p>
          Even books sold in chain stores as mass-market “inspirational fiction” have crossed this
          line. Garth Stein’s <i>The Art of Racing in the Rain</i> (2008), a New York Times bestseller
          later adapted into a 2019 Disney-backed film, includes a disturbing subplot in which a
          15-year-old girl aggressively comes on to the adult protagonist. The encounter, described
          through the eyes of the family dog narrator, dwells on her physicality and her desire. It
          becomes a turning point in the novel, jeopardizing the protagonist’s custody battle and his
          future{" "}
          <a
            className={linkCls}
            href="https://www.litcharts.com/lit/the-art-of-racing-in-the-rain/characters/annika"
            target="_blank"
            rel="noopener"
          >
            LitCharts – Annika character analysis
          </a>
          . In the film version, the entire subplot was quietly erased. Disney knew audiences would
          recoil at seeing it onscreen. Yet the book remained a beloved bestseller, embraced by
          millions of readers as inspirational and heartwarming.
        </p>

        <Callout variant="success" title="Publishing Reality" icon="🐾">
          <p>
            Publishers and studios know audiences will forgive what they <i>read</i> but condemn what
            they <i>see</i>. That selective outrage reveals hypocrisy, not principle.
          </p>
        </Callout>

        <p>
          This is the contradiction that undercuts the moral absolutism of sex-crime policy. Society
          accepts and even venerates depictions of child sexuality in literature — whether packaged as
          a classic, a horror novel, a fantasy epic, or a heart-tugging family story — while
          simultaneously insisting that anyone who so much as possesses or writes similar material in
          another context be branded, monitored, and ostracized for life. The issue is not whether
          these books should be banned, but whether society can honestly admit that its outrage is
          selective. If the line between art and crime is so porous that <i>Lolita</i> can be a
          masterpiece while registrants are condemned as monsters, then what we are really enforcing is
          not morality but hypocrisy.
        </p>

        <Divider label="Deep Dive" />
      </article>
    </BlogLayout>
  );
      }
