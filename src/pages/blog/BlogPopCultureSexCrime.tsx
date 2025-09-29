import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
  ShareBar,
} from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function BlogPopCultureSexCrime(): JSX.Element {
  return (
    <BlogLayout
      title="Red Carpets and Registries: Classics and Cancel Culture"
      description="Exploring the hypocrisy of how pop culture celebrates depictions of sexual exploitation while punishing individuals with lifelong stigma."
      keywords="pop culture, hypocrisy, sex offenses, cancel culture, media criticism"
      date="Sep 29, 2025"
      readTime="9 min"
      badge="📝 BLOG"
      lede="From *Lolita* to *Euphoria*, our culture rewards art that depicts exploitation — even as it condemns individuals to registries for life. This post asks why we tolerate one and banish the other."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>
            Pop culture has long thrived on depictions of child sexuality,
            underage relationships, and exploitative dynamics — from{" "}
            <strong><em>Lolita</em></strong> to{" "}
            <strong><em>Game of Thrones</em></strong>, from{" "}
            <strong><em>Taxi Driver</em></strong> to{" "}
            <strong><em>Euphoria</em></strong>, from Beatles lyrics to Karol G’s{" "}
            “+57.” These works are celebrated as classics, given awards, and
            sold by the millions.
          </p>
          <p>
            Yet ordinary people who commit or even imagine similar acts face
            prison, public registries, and lifelong exile.
          </p>
          <p>
            The issue is not whether these works should be censored — it’s the
            hypocrisy of a society that tolerates exploitation when wrapped in
            art, while demanding absolute condemnation when lived by the
            powerless.
          </p>
        </Callout>

        <BandHeader title="Introduction" icon="🎬" />

        <p>
          Sex crimes are serious. They cause harm, and there is no excuse for
          them. Nothing in this piece asks you to forget that or to instantly
          forgive everything anyone has ever done. What this piece does ask is
          that we confront a hypocrisy most people would rather ignore.
        </p>

        <p>
          We live in a culture that condemns certain people to registries,
          surveillance, and lifelong stigma — while at the same time celebrating
          art, film, television, and music that contain the very same themes
          society claims to abhor. Nabokov’s{" "}
          <strong><em>Lolita</em></strong> is treated as a literary masterpiece.{" "}
          <strong><em>Taxi Driver</em></strong> and{" "}
          <strong><em>Pretty Baby</em></strong> are fixtures of film history.{" "}
          <strong><em>Euphoria</em></strong> wins Emmys. Songs about teenage
          girls fill our playlists. Elvis is still “The King.” These are not
          obscure examples; they are pillars of modern culture.
        </p>

        <p>
          The contradiction is unavoidable. If depictions of exploitation are
          truly intolerable, then our shelves, playlists, and watchlists would
          be stripped bare. But they aren’t. We don’t cancel the books, the
          movies, or the music — because we don’t really want to. We find ways
          to excuse them, or we pretend not to notice.
        </p>

        <PullQuote>
          “Our outrage is selective, our punishments inconsistent, and our moral
          compass bends under the weight of convenience.”
        </PullQuote>

        <p>
          That is the point. The issue is not whether these works should be
          banned or burned. It is that society chooses to tolerate them, even to
          adore them, while denying that same possibility of tolerance to the
          people whose names appear on registries. If we can accept these works
          as part of our culture, then at the very least, we owe it to ourselves
          to be honest.
        </p>

        <Divider label="Deep Dive" />

        <BandHeader title="Literature: When ‘Art’ Excuses the Inexcusable" icon="📚" />

        <p>
          If society truly believed that depictions of sexual exploitation were
          intolerable, our bookshelves and cultural touchstones would look very
          different. Yet the literary canon has long embraced works that
          normalize, glamorize, or at the very least linger upon sexual
          encounters between children and adults. These same depictions, if
          acted upon in real life, would be criminal offenses resulting in
          prison and a lifetime on the registry. The hypocrisy is staggering.
        </p>

        <Callout variant="neutral" title="Pull Quote" icon="⚖️">
          <p>
            “The same society that demands ‘zero tolerance’ for sex crimes has
            no problem elevating works that center underage sexuality as
            cultural treasures.”
          </p>
        </Callout>

        <p>
          Take Vladimir Nabokov’s{" "}
          <strong><em>Lolita</em> (1955)</strong>, routinely hailed as one of
          the greatest novels of the 20th century. Critics praise it for its
          prose style, its unreliable narration, and its cultural impact, but at
          its core it is the story of a 37-year-old man’s sexual relationship
          with a 12-year-old girl{" "}
          <a
            className={linkCls}
            href="https://www.britannica.com/topic/Lolita-novel-by-Nabokov"
            target="_blank"
            rel="noopener"
          >
            (Britannica)
          </a>
          .
        </p>

        <Callout variant="info" title="Literary Note" icon="📘">
          <p>
            <em>Lolita</em> is banned in some countries, yet widely embraced in
            the U.S. and Europe as a “masterpiece.” <br />
            This inconsistency underscores how morality shifts depending on
            framing.
          </p>
        </Callout>

        <p>
          Aldous Huxley’s{" "}
          <strong><em>Brave New World</em> (1932)</strong> is another staple,
          famous for its dystopian critique of conformity and technology. Yet
          tucked inside is a society in which children are deliberately
          sexualized from a young age{" "}
          <a
            className={linkCls}
            href="https://www.britannica.com/topic/Brave-New-World"
            target="_blank"
            rel="noopener"
          >
            (Britannica)
          </a>
          .
        </p>

        <p>
          Stephen King’s{" "}
          <strong><em>It</em> (1986)</strong> devotes one of its most
          controversial scenes to a sexual encounter among children — a group of
          11-year-olds — that was so infamous it was deliberately excised from
          the blockbuster film adaptations{" "}
          <a
            className={linkCls}
            href="https://www.theatlantic.com/entertainment/archive/2017/09/stephen-kings-most-controversial-scene/539529/"
            target="_blank"
            rel="noopener"
          >
            (The Atlantic)
          </a>
          .
        </p>

        <p>
          George R.R. Martin’s{" "}
          <strong><em>A Song of Ice and Fire</em></strong> series (1996–present)
          includes Daenerys at 13 and Sansa at 11 when their sexual encounters
          begin. HBO aged them up for{" "}
          <strong><em>Game of Thrones</em></strong>{" "}
          <a
            className={linkCls}
            href="https://time.com/5627052/game-of-thrones-book-vs-show-characters/"
            target="_blank"
            rel="noopener"
          >
            (Time magazine)
          </a>
          .
        </p>

        <Callout variant="research" title="Comparison" icon="🔎">
          <p>
            <strong>Book vs. Screen Ages</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Daenerys: 13 in the novel → ~17 onscreen</li>
            <li>Sansa: 11 in the novel → mid-teens onscreen</li>
          </ul>
        </Callout>

        <p>
          Even mass-market “inspirational fiction” crosses this line. Garth
          Stein’s{" "}
          <strong><em>The Art of Racing in the Rain</em> (2008)</strong> —
          later adapted into a Disney-backed film — includes a disturbing
          subplot in which a 15-year-old girl aggressively comes on to the adult
          protagonist{" "}
          <a
            className={linkCls}
            href="https://www.goodreads.com/review/show/6999113"
            target="_blank"
            rel="noopener"
          >
            (Goodreads review)
          </a>
          .
        </p>

        <Callout variant="success" title="Pro Tip" icon="🐾">
          <p>
            Publishers and studios know audiences will forgive what they{" "}
            <em>read</em> but condemn what they <em>see</em>. <br />
            That selective outrage reveals hypocrisy, not principle.
          </p>
        </Callout>

        <p>
          This is the contradiction that undercuts the moral absolutism of
          sex-crime policy. Society accepts and even venerates depictions of
          child sexuality in literature — while simultaneously insisting that
          anyone who so much as possesses or writes similar material in another
          context be branded, monitored, and ostracized for life.
        </p>

<BandHeader title="Film & TV: Hollywood’s Double Standard" icon="🎬" />

        <p>
          If literature whispers hypocrisy, film and television project it in
          high definition. Hollywood has often placed young characters — and
          sometimes young performers — in situations with adult themes, then
          framed those works as groundbreaking or prestigious. What would be
          treated as criminal in everyday life has repeatedly been reframed as
          “art” on the screen.
        </p>

        <p>
          Take <strong><em>Taxi Driver</em> (1976)</strong>. Jodie Foster was
          only <strong>12 years old</strong> when she played Iris, a runaway
          child forced into prostitution. She has spoken about how unsettling
          the role was{" "}
          <a
            className={linkCls}
            href="https://www.independent.co.uk/arts-entertainment/films/news/jodie-foster-details-how-uncomfortable-it-was-playing-a-prostitute-aged-12-in-taxi-driver-a7040016.html"
            target="_blank"
            rel="noopener"
          >
            (Independent)
          </a>
          . The film was nominated for four Academy Awards and is now considered
          a classic{" "}
          <a
            className={linkCls}
            href="https://en.wikipedia.org/wiki/Taxi_Driver"
            target="_blank"
            rel="noopener"
          >
            (Wikipedia)
          </a>
          , yet its central portrayal involved placing an actual child into a
          highly sexualized role.
        </p>

        <p>
          Two years later, <strong><em>Pretty Baby</em> (1978)</strong> cast{" "}
          <strong>11-year-old Brooke Shields</strong> as the daughter of a sex
          worker in early 20th-century New Orleans. The film contained nudity
          involving Shields, which has remained controversial for decades, but
          it premiered at Cannes and was defended as art{" "}
          <a
            className={linkCls}
            href="https://en.wikipedia.org/wiki/Pretty_Baby_(1978_film)"
            target="_blank"
            rel="noopener"
          >
            (Wikipedia)
          </a>
          .
        </p>

        <p>
          In 1980, Shields starred in{" "}
          <strong><em>The Blue Lagoon</em> (1980)</strong>. At{" "}
          <strong>14 years old</strong>, she was presented as part of a
          romance-drama survival story. The production relied on body doubles for
          certain scenes, but Shields herself was still promoted as the central
          object of desire{" "}
          <a
            className={linkCls}
            href="https://www.latimes.com/entertainment-arts/story/2023-04-12/brooke-shields-blue-lagoon-director-sexual-awakening"
            target="_blank"
            rel="noopener"
          >
            (Los Angeles Times)
          </a>
          . The film earned nearly $60 million, proving that controversy could
          be a commercial asset.
        </p>

        <Callout variant="warning" title="Genre Note" icon="🎥">
          <p>
            The <strong>slasher genre</strong> — from{" "}
            <em>Halloween</em> (1978) to <em>Friday the 13th</em> (1980) and
            countless sequels — often sexualized teenagers and then punished them
            with death, creating the notorious “sex equals death” formula{" "}
            <a
              className={linkCls}
              href="https://news.unl.edu/article/slicing-and-dicing-the-sociology-of-slasher-movies"
              target="_blank"
              rel="noopener"
            >
              (University of Nebraska)
            </a>
            .
          </p>
        </Callout>

        <p>
          Fast forward to the present:{" "}
          <strong><em>Cuties</em> (*Mignonnes*, 2020)</strong> sparked global
          backlash for its depiction of preteen girls in a dance troupe. Netflix
          defended it as a critique of the sexualization of children in media,
          and the film even won awards at Sundance, but its very existence
          underlined the paradox{" "}
          <a
            className={linkCls}
            href="https://www.theguardian.com/film/2020/sep/14/cuties-review-netflixs-controversial-child-exploitation-film-is-bold-flawed-and-misunderstood"
            target="_blank"
            rel="noopener"
          >
            (Guardian)
          </a>
          .
        </p>

        <p>
          In <strong><em>Licorice Pizza</em> (2021)</strong>, the main plot
          follows a romance between a <strong>15-year-old boy</strong> and a{" "}
          <strong>25-year-old woman</strong>. Critics lauded its nostalgic tone,
          and the film received three Academy Award nominations, including Best
          Picture. Outside the frame of cinema, the same relationship would not
          be met with applause.
        </p>

        <p>
          Even biographical dramas reinforce selective outrage. Sofia Coppola’s{" "}
          <strong><em>Priscilla</em> (2023)</strong> recounts how Elvis Presley
          began his relationship with Priscilla when she was{" "}
          <strong>14</strong>. The movie reignited discussion about Elvis’s
          legacy, but his music, brand, and myth remain largely untouched{" "}
          <a
            className={linkCls}
            href="https://www.npr.org/2023/11/02/1209612367/priscilla-movie-sofia-coppola-elvis-presley"
            target="_blank"
            rel="noopener"
          >
            (NPR)
          </a>
          .
        </p>

        <p>
          And then there is prestige television. HBO’s{" "}
          <strong><em>Euphoria</em> (2019–present)</strong> depicts high school
          students — explicitly written as minors — in graphic sexual and
          drug-related scenarios. The show is celebrated as fearless, even
          decorated with Emmy Awards{" "}
          <a
            className={linkCls}
            href="https://www.vulture.com/2019/06/euphoria-hbo-recap-episode-1-pilot.html"
            target="_blank"
            rel="noopener"
          >
            (Vulture)
          </a>
          , but its narrative fixation on minors would be treated very
          differently outside of a TV script.
        </p>

        <PullQuote>
          “These aren’t marginal works. They dominate award circuits, shape
          careers, and enter the cultural canon. What society embraces on screen
          as art, it condemns in life as unforgivable.”
        </PullQuote>

        {/* Data Sources and Related Reading will be added at the end */}
      </article>
    </BlogLayout>
  );
}