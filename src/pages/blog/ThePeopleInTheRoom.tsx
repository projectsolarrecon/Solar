import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, PullQuote, Divider } from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function ThePeopleInTheRoom(): JSX.Element {
  return (
    <BlogLayout
      title="The People in the Room"
      description="What we laugh at says more about child safety than any registry ever could."
      keywords="child safety, school board, boundary violations, misconduct, Tennessee, student safety, public meetings"
      date="Apr 12, 2026"
      readTime="6 min"
      badge="📝 BLOG"
      lede="What we laugh at says more about child safety than any registry ever could."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="urgent" title="What this post is about" icon="🚨">
          <p>
            This piece argues that child safety failures are often revealed not just by what is said,
            but by how adults in positions of authority respond in real time. In this case, an elected
            official sexualized a student in a public meeting, and the room laughed instead of stopping it.{" "}
            <a
              className={linkCls}
              href="https://www.wsmv.com/2026/04/06/god-youre-hot-tennessee-school-board-member-says-student-during-board-meeting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the source report
            </a>
            .
          </p>
        </Callout>

        <BandHeader title="What Happened" icon="🧭" />
        <p>
          At a recent school board meeting in Tennessee, a student approached the podium to speak.
        </p>
        <p>
          An elected official responded by saying, <em>“God, you’re hot,”</em> and asking where she
          went to school—comments made in a public forum, directed at a minor, in a room full of adults.
        </p>
        <p>
          According to WSMV’s reporting, the reaction in the room was not immediate intervention. It was
          laughter. Only afterward did officials describe the remarks as “grossly inappropriate” and move
          toward formal censure.
        </p>

        <PullQuote>
          “That’s not protection. That’s performance.”
        </PullQuote>

        <BandHeader title="The Most Important Detail Isn’t What Was Said" icon="🎯" />
        <p>It’s what happened next.</p>
        <p>
          No one stopped the meeting. No one immediately challenged the behavior. No one created a visible
          boundary in real time.
        </p>
        <p>People laughed.</p>
        <p>That moment matters more than any policy statement issued later.</p>
        <p>Because <strong>laughter is a signal</strong>:</p>
        <ul className="list-disc pl-6">
          <li>A signal that something is being minimized</li>
          <li>A signal that the speaker still holds social protection</li>
          <li>
            A signal—to the student—that this may not be a safe place to push back or report harm
          </li>
        </ul>
        <p>
          Kids don’t learn who is safe from written policies. They learn it from moments like this.
        </p>

        <Divider label="What this reveals" />

        <BandHeader title="The System We Built vs. The Reality We Ignore" icon="🏛️" />
        <p>
          For decades, public policy has focused on identifying and monitoring <em>known, labeled
          individuals</em>—people placed on registries, mapped, tracked, and restricted.
        </p>
        <p>
          The theory is simple: If we can see the risk, we can control it.
        </p>
        <p>
          But moments like this expose a different reality:
        </p>
        <Callout variant="warning" title="The blind spot" icon="⚠️">
          <p>
            Risk doesn’t always announce itself with a label. Sometimes it looks like authority.
            Sometimes it sounds like a joke. And sometimes, it gets a laugh.
          </p>
        </Callout>
        <p>
          We have built a system that is extremely effective at tracking people we already know about—and
          far less effective at confronting misconduct when it appears in familiar, trusted spaces.
        </p>

        <BandHeader title="Why This Keeps Happening" icon="🧱" />
        <p>This isn’t random. It’s structural.</p>
        <p>
          Local officials—school boards, town councils, community leaders—operate within a set of incentives:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Being “tough on sex offenders” is politically safe.</strong> It signals protection
            without requiring nuance or confrontation.
          </li>
          <li>
            <strong>Challenging peers in real time is socially and politically risky.</strong> It creates
            tension, backlash, and potential consequences.
          </li>
          <li>
            <strong>Familiarity creates leniency.</strong> When the person crossing the line is known,
            respected, or part of the group, behavior gets reframed as a mistake instead of treated as a
            boundary violation.
          </li>
        </ul>
        <p>The result is a predictable pattern:</p>
        <p>We punish abstract threats aggressively.</p>
        <p>
          And we soften, excuse, or ignore real-world boundary violations—especially when they come from insiders.
        </p>

<BandHeader title="When It Actually Mattered, They Did Nothing" icon="⏱️" />
        <p>
          It is almost inconceivable to believe that many of the people in that room do not publicly
          support “tough on sex offender” policies.
        </p>
        <p>
          They are elected officials. A school board. People who, in all likelihood, campaign on
          protecting children.
        </p>
        <p>And yet—</p>
        <p>
          When they were given a real, immediate opportunity to do exactly that—to protect a single
          child, in real time, from the words of a grown man in a position of authority—they did
          nothing.
        </p>
        <p>They didn’t intervene.</p>
        <p>They didn’t shut it down.</p>
        <p>
          They didn’t create distance or protection or even basic accountability in the moment.
        </p>
        <p>They laughed.</p>
        <p>Let that sit for a second.</p>

        <Callout variant="urgent" title="What real protection looks like" icon="🚨">
          <p>
            Real protection is immediate. It is uncomfortable. It requires someone to speak up,
            disrupt the room, and risk social friction.
          </p>
        </Callout>

        <p>And in that moment, none of that happened.</p>

        <Divider label="What that says" />

        <BandHeader title="The Kind of Protection We Prefer" icon="🎭" />
        <p>
          It is much easier to vote for laws that target people you will never meet.
        </p>
        <p>
          It is much easier to support policies that label, restrict, and stigmatize a distant,
          already-defined group.
        </p>
        <p>It feels like action.</p>
        <p>It sounds like protection.</p>
        <p>It comes with none of the discomfort of confrontation.</p>
        <p>But what happened in that room exposed something deeper:</p>

        <PullQuote>
          We are far more comfortable punishing strangers in the abstract than we are confronting
          misconduct in front of us.
        </PullQuote>

        <p>Because one requires courage.</p>
        <p>The other requires nothing at all.</p>

        <BandHeader title="What That Moment Revealed" icon="🔎" />
        <p>No legislation was needed in that moment.</p>
        <p>No registry.</p>
        <p>No database.</p>
        <p>No map.</p>
        <p>Just one adult willing to say: “That’s not appropriate. Stop.”</p>
        <p>And no one did.</p>

        <Callout variant="warning" title="The real gap" icon="⚠️">
          <p>
            That is the gap. Not in policy, but in practice. Not in awareness, but in action.
          </p>
        </Callout>

        <BandHeader title="The Cultural Blind Spot" icon="🪟" />
        <p>This dynamic isn’t limited to one school board meeting.</p>
        <p>It shows up in:</p>
        <ul className="list-disc pl-6">
          <li>Schools</li>
          <li>Churches</li>
          <li>Youth organizations</li>
          <li>Government bodies</li>
          <li>Detention and care settings</li>
        </ul>
        <p>
          Places where adults are trusted. Places where authority goes unquestioned. Places where discomfort
          is often avoided instead of confronted.
        </p>
        <p>
          The greatest risk to children has never been confined to a list. It exists in environments where
          adults feel comfortable crossing lines—and where other adults hesitate to stop them.
        </p>

        <BandHeader title="What This Actually Says About Child Safety" icon="🛡️" />
        <p>If we’re honest, this isn’t just about one comment.</p>
        <p>It’s about what we choose to prioritize.</p>
        <p>
          We invest enormous energy into systems that allow us to point at danger from a distance—maps,
          registries, labels.
        </p>
        <p>
          But when risk appears in front of us, in real time, in a form that challenges social comfort or
          hierarchy—we hesitate.
        </p>
        <p>We laugh. We move on. We deal with it later.</p>
        <p>
          Child safety isn’t failing because we don’t monitor enough people.
        </p>
        <p>
          It’s failing because we tolerate the wrong things, in the wrong places, from the wrong people—and
          call it something else.
        </p>

        <BandHeader title="The Difference Between Protection and Performance" icon="🎭" />
        <p>It’s easy to campaign against people on a map.</p>
        <p>It’s harder to confront the person sitting next to you.</p>
        <p>It’s easy to pass laws.</p>
        <p>
          It’s harder to create a culture where adults consistently enforce boundaries—even when it’s uncomfortable.
        </p>
        <p>
          We have built a system that rewards the appearance of protection while quietly tolerating behavior
          that undermines it.
        </p>

        <PullQuote>
          “The danger isn’t always where we’ve been told to look.”
        </PullQuote>

        <BandHeader title="The Reality We Don’t Want to Face" icon="📍" />
        <p>
          We can keep telling ourselves that the danger is neatly contained—visible, labeled, mapped.
        </p>
        <p>Or we can acknowledge what moments like this reveal:</p>
        <p>
          The danger isn’t always where we’ve been told to look.
        </p>
        <p>
          Sometimes, it’s sitting at the front of the room—and everyone is laughing.
        </p>

        <Divider />

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            WSMV —{" "}
            <a
              className={linkCls}
              href="https://www.wsmv.com/2026/04/06/god-youre-hot-tennessee-school-board-member-says-student-during-board-meeting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              “God, you’re hot”: Tennessee school board member says to student during board meeting
            </a>
          </li>
          <li>
            WSMV —{" "}
            <a
              className={linkCls}
              href="https://www.wsmv.com/2026/04/09/video-speaks-itself-school-board-member-censured-over-god-youre-hot-comment-toward-student-tennessee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              “The video speaks for itself.” School board member censured over comment toward student
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/community-ties">
              Community Ties
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/legislative-advocacy">
              Legislative Advocacy Guide
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/digital-safety">
              Digital Safety Guide
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}