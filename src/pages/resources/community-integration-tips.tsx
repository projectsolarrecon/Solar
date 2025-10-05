import React from "react"; import { Link } from "react-router-dom"; import GuideLayout from "../../components/layouts/GuideLayout"; import { SectionBand, SectionCard, Callout, Checklist, SourcesOffline, TOC, ShareBar, } from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function CommunityIntegrationGuide(): JSX.Element { return ( <GuideLayout
title="Community Integration Tips"
description="Practical advice for rebuilding relationships and becoming an active member of your community after incarceration or registration."
keywords="reentry, community integration, stigma, relationships, rehabilitation"
date="Oct 5, 2025"
readTime="18 min"
badge="📘 RESOURCE GUIDE"
lede="Practical, evidence-based strategies to rebuild trust, navigate stigma, and engage meaningfully in community life."
showTOC={true}
> <div className="mb-6"> <TOC /> </div>

{/* I. Introduction */}
  <SectionBand title="Introduction: The Challenge of Rebuilding a Life" emblem="🌱" />
  <SectionCard>
    <Callout variant="success" title="Positive" icon="🌿">
      <p>
        Reintegration is a process, not a test. Small, consistent actions (showing up on time, keeping promises) rebuild trust more than speeches. See the idea of “belonging as practice” echoed in research on being seen as a person, not a label. {" "}
        <a className={linkCls} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5962031/" target="_blank" rel="noopener">Evidence</a>.
      </p>
    </Callout>
    <Callout variant="info" title="Info" icon="ℹ️">
      <p>
        Expect friction: stigma, self-doubt, and social awkwardness are common. Research shows stigma—including self-stigma—undermines mental health and participation; naming it helps counter it. {" "}
        <a className={linkCls} href="https://onlinelibrary.wiley.com/doi/full/10.1002/cbm.2326" target="_blank" rel="noopener">Overview</a>.
      </p>
    </Callout>
    <Callout variant="reminder" title="Reminder" icon="🕒">
      <p>Progress is uneven. Anchor to routines (sleep, meals, movement) so setbacks don’t derail you.</p>
    </Callout>
  </SectionCard>

  {/* II. Understanding Social Reintegration */}
  <SectionBand title="Understanding Social Reintegration" emblem="🤝" />
  <SectionCard>
    <Callout variant="info" title="Info" icon="💬">
      <p>“Community” = relationships + roles + routines. It’s less about convincing everyone, more about safe participation and contribution.</p>
    </Callout>
    <Callout variant="success" title="Positive" icon="🌱">
      <p>
        Evidence links pro-social ties—mentors, peer groups, service circles—with improved adjustment and lower risk. {" "}
        <a className={linkCls} href="https://cjil.sog.unc.edu/resource/research-on-the-effectiveness-of-reentry-treatments/" target="_blank" rel="noopener">Summary</a> {" | "}
        <a className={linkCls} href="https://www.continuumct.org/files/news/Sells%20et%20al%202020%20Mentors%20Reduce%20Recidivism%20SCPS%20pg%205.pdf" target="_blank" rel="noopener">Peer-Mentor RCT</a>.
      </p>
    </Callout>
    <Callout variant="reminder" title="Reminder" icon="🕒">
      <p>Pair social goals with housing, health, and transport supports. Integrated (“wraparound”) help outperforms single-issue services.</p>
    </Callout>
  </SectionCard>

  {/* III. Rebuilding Relationships */}
  <SectionBand title="Rebuilding Relationships" emblem="💬" />
  <SectionCard>
    <Callout variant="success" title="Positive" icon="🤗">
      <p>Start small: one or two trusted friends or shared-activity peers. Boundaries are healthy; you don’t owe full disclosure to everyone.</p>
    </Callout>
    <Callout variant="info" title="Info" icon="👪">
      <p>Family bonds: reliability beats speeches. Counseling or mediation helps restore trust.</p>
    </Callout>
    <Callout variant="privacy" title="Privacy" icon="🔒">
      <p>
        Limit contact with people who pry or gossip. Protecting your peace reduces stress that undermines engagement. {" "}
        <a className={linkCls} href="https://www.sciencedirect.com/science/article/abs/pii/S0277953619306136" target="_blank" rel="noopener">Background</a>.
      </p>
    </Callout>
  </SectionCard>

  {/* IV. Dating and Romantic Relationships */}
  <SectionBand title="Dating and Romantic Relationships" emblem="💞" />
  <SectionCard>
    <Callout variant="info" title="Info" icon="💬">
      <p>Build confidence in non-romantic interactions first. CBT-style emotional regulation helps manage stress. {" "}
        <a className={linkCls} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8376657/" target="_blank" rel="noopener">Overview</a>.
      </p>
    </Callout>
    <Callout variant="privacy" title="Privacy" icon="🔒">
      <p>Be honest when disclosure is required—but keep it calm and brief. Focus on who you are now.</p>
    </Callout>
    <Callout variant="warning" title="Boundaries" icon="⚠️">
      <p>Anyone who pressures you to hide, rush intimacy, or break rules is unsafe. Move on without guilt.</p>
    </Callout>
  </SectionCard>

  {/* Additional sections would continue here following the same pattern... */}

  <SectionBand title="Data Sources" emblem="📚" />
  <SectionCard>
    <ul className="list-disc pl-6">
      <li>
        NIH – Belonging and Reintegration {" "}
        <a className={linkCls} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5962031/" target="_blank" rel="noopener">https://pmc.ncbi.nlm.nih.gov/articles/PMC5962031/</a>
      </li>
      <li>
        Wiley – Self-Stigma & Health {" "}
        <a className={linkCls} href="https://onlinelibrary.wiley.com/doi/full/10.1002/cbm.2326" target="_blank" rel="noopener">https://onlinelibrary.wiley.com/doi/full/10.1002/cbm.2326</a>
      </li>
      <li>
        CJIL – Reentry Effectiveness {" "}
        <a className={linkCls} href="https://cjil.sog.unc.edu/resource/research-on-the-effectiveness-of-reentry-treatments/" target="_blank" rel="noopener">https://cjil.sog.unc.edu/resource/research-on-the-effectiveness-of-reentry-treatments/</a>
      </li>
    </ul>
  </SectionCard>

  <SectionBand title="Related Reading" emblem="🔗" />
  <SectionCard>
    <ul className="list-disc pl-6">
      <li>
        <Link className={linkCls} to="/blog/community-ties">Community Ties (Blog)</Link>
      </li>
      <li>
        <Link className={linkCls} to="/guides/employment-rights">Employment Rights Guide</Link>
      </li>
    </ul>
  </SectionCard>

  <div className="mt-10">
    <ShareBar />
  </div>
</GuideLayout>

); }

