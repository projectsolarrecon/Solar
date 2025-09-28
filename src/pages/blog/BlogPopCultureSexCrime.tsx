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
          If society truly believed that depictions of sexual exploitation were intolerable,
          our bookshelves and cultural touchstones would look very different. Yet the literary
          canon has long embraced works that normalize, glamorize, or at the very least linger
          upon sexual encounters between children and adults.
        </p>

        <p>
          These same depictions, if acted upon in real life, would be criminal offenses resulting
          in prison and a lifetime on the registry. <strong>The hypocrisy is staggering.</strong>
        </p>

        <PullQuote>
          “The same society that demands ‘zero tolerance’ for sex crimes has no problem elevating
          works that center underage sexuality as cultural treasures.”
        </PullQuote>

        <p>
          Take <strong><i>Lolita</i></strong> (1955) by Vladimir Nabokov, routinely hailed as one
          of the greatest novels of the 20th century. Critics praise it for its prose style, its
          unreliable narration, and its cultural impact. But at its core, it is the story of a
          37-year-old man’s sexual relationship with a 12-year-old girl.
        </p>

        <p>
          Entire essays and think pieces are dedicated to parsing its meaning. It sits on “100
          greatest novels” lists. It has been adapted multiple times for film.{" "}
          <a
            className={linkCls}
            href="https://www.britannica.com/topic/Lolita-novel-by-Nabokov"
            target="_blank"
            rel="noopener"
          >
            Britannica overview →
          </a>
        </p>

        <Callout variant="info" title="Literary Contradiction" icon="📘">
          <p>
            <i>Lolita</i> is banned in some countries, yet widely embraced in the U.S. and Europe as
            a “masterpiece.” This inconsistency underscores how morality shifts depending on framing.
          </p>
        </Callout>

        <p>
          Another staple: <strong><i>Brave New World</i></strong> (1932) by Aldous Huxley. Famous
          for its dystopian critique of conformity and technology, it also depicts a society in
          which children are deliberately sexualized from a young age, encouraged by the state to
          experiment sexually long before adulthood.
        </p>

        <p>
          Lauded as prescient social satire, the book rarely sparks acknowledgment that its dystopia
          normalizes child sexuality as background detail.{" "}
          <a
            className={linkCls}
            href="https://www.britannica.com/topic/Brave-New-World"
            target="_blank"
            rel="noopener"
          >
            Britannica entry →
          </a>
        </p>

        <p>
          The point is not that these books are dangerous in themselves, but that they reveal a
          profound cultural double standard. When framed as “art,” the same material is protected,
          discussed, even celebrated. When the exact same dynamics appear in police reports or
          courtrooms, the people involved are locked away, then exiled onto registries for life.
        </p>

        <p>
          Consider <strong><i>It</i></strong> (1986) by Stephen King. One of its most controversial
          scenes depicts a sexual encounter among 11-year-olds — so infamous that it was
          deliberately excised from the blockbuster film adaptations in 2017 and 2019.
        </p>

        <p>
          Millions of readers encounter it in the novel, but Hollywood knew that showing it onscreen
          would be a scandal.{" "}
          <a
            className={linkCls}
            href="https://www.theatlantic.com/entertainment/archive/2017/09/stephen-kings-most-controversial-scene/539529/"
            target="_blank"
            rel="noopener"
          >
            The Atlantic coverage →
          </a>
        </p>

        <p>
          George R.R. Martin’s <strong><i>A Song of Ice and Fire</i></strong> series
          (1996–present), adapted into HBO’s <strong><i>Game of Thrones</i></strong>, pushes the
          same contradiction. On the page, Daenerys Targaryen is 13 and Sansa Stark 11 when their
          sexual encounters begin. Onscreen, HBO aged them up: Daenerys to ~17 and Sansa to mid-teens.
        </p>

        <p>
          Readers consume the books without widespread scandal; the showrunners knew they had to
          sanitize for television.{" "}
          <a
            className={linkCls}
            href="https://time.com/5627052/game-of-thrones-book-vs-show-characters/"
            target="_blank"
            rel="noopener"
          >
            Time: Why HBO aged up its characters →
          </a>
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
          Even mass-market “inspirational fiction” crosses this line. <strong><i>The Art of Racing
          in the Rain</i></strong> (2008) by Garth Stein, a New York Times bestseller later adapted
          into a Disney-backed film, includes a subplot where a 15-year-old girl aggressively
          pursues the adult protagonist.
        </p>

        <p>
          Described through the family dog narrator, the scene dwells on her physicality and desire.
          It becomes a turning point in the novel, jeopardizing the protagonist’s custody battle and
          his future.{" "}
          <a
            className={linkCls}
            href="https://www.litcharts.com/lit/the-art-of-racing-in-the-rain/characters/annika"
            target="_blank"
            rel="noopener"
          >
            LitCharts: Annika analysis →
          </a>
        </p>

        <p>
          In the 2019 film, the entire subplot was quietly erased. Disney knew audiences would
          recoil at seeing it onscreen. Yet the book remained a beloved bestseller, embraced by
          millions of readers as “inspirational” and heartwarming.
        </p>

        <Callout variant="success" title="Publishing Reality" icon="🐾">
          <p>
            Publishers and studios know audiences will forgive what they <i>read</i> but condemn
            what they <i>see</i>. That selective outrage reveals hypocrisy, not principle.
          </p>
        </Callout>

        <p>
          This is the contradiction that undercuts the moral absolutism of sex-crime policy.
        </p>

        <p>
          Society accepts and even venerates depictions of child sexuality in literature — whether
          packaged as a classic, a horror novel, a fantasy epic, or a heart-tugging family story —
          while simultaneously insisting that anyone who so much as possesses or writes similar
          material in another context be branded, monitored, and ostracized for life.
        </p>

        <p>
          The issue is not whether these books should be banned, but whether society can honestly
          admit that its outrage is selective.{" "}
          <strong>
            If the line between art and crime is so porous that <i>Lolita</i> can be a masterpiece
            while registrants are condemned as monsters, then what we are really enforcing is not
            morality but hypocrisy.
          </strong>
        </p>

        <Divider label="Deep Dive" />
      </article>
    </BlogLayout>
  );
}
