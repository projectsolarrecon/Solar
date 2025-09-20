import React from "react"; import { Link } from "react-router-dom"; import BlogLayout from "src/components/layouts/BlogLayout"; import { BandHeader, Callout, PullQuote, Divider, ShareBar } from "src/components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function ResidencyRestrictionsHousing(): JSX.Element { return ( <BlogLayout
title="How Residency Restrictions Undermine Housing Stability"
description="How exclusion zones shrink housing options, increase homelessness, and fail to improve public safety."
keywords="residency restrictions, housing stability, homelessness, reentry, public safety, policy"
date="Sep 20, 2025"
readTime="10 min"
badge="📝 BLOG"
lede="Residency restrictions sound like safety policy—but they function like a housing ban, pushing people into instability without measurable safety gains."
> <article className="prose prose-slate max-w-none"> <Callout variant="info" title="TL;DR" icon="🔎"> <p> Residency restrictions limit where certain people may live (for example, setting 1,000–2,500 ft buffers around schools and parks). Evidence shows they rarely reduce re-offense, but they do increase homelessness and housing churn. Stable housing is protective; blanket exclusion is not. For organizing tips, see our {""} <Link className={linkCls} to="/resources/legislative-advocacy">Legislative Advocacy Guide</Link>. </p> </Callout>

<BandHeader title="What Are Residency Restrictions?" icon="🏠" />
    <p>
      These laws create geographic “no‑live” zones that can cover large portions of a city. In practice, they shrink the affordable housing map to a few pockets—often far from transit and services. Reviews published by the U.S. Department of Justice’s National Institute of Justice indicate such rules {""}
      <a className={linkCls} href="https://www.ojp.gov/pdffiles1/nij/222759.pdf" target="_blank" rel="noopener">destabilize housing without proven safety gains</a>.
    </p>

    <PullQuote>
      “Stable housing is one of the strongest predictors of successful reentry—and residency restrictions directly undermine it.”
    </PullQuote>

    <BandHeader title="How They Erode Stability" icon="📉" />
    <p>
      When entire neighborhoods are off‑limits, people compete for a tiny set of legal addresses. Landlords and screeners add private barriers. The result is frequent moves, doubled‑up living, or homelessness. The {""}
      <a className={linkCls} href="https://www.prisonpolicy.org/reports/housing.html" target="_blank" rel="noopener">Prison Policy Initiative</a> documents how reentry is already a gauntlet—residency bans compound the risk of eviction and unsheltered homelessness.
    </p>

    <BandHeader title="Do They Improve Safety?" icon="⚖️" />
    <p>
      Evidence from the DOJ’s {""}
      <a className={linkCls} href="https://smart.ojp.gov/" target="_blank" rel="noopener">SMART Office</a> and NIJ does not support population‑wide buffers as a crime‑prevention strategy. Instability and homelessness, by contrast, are associated with higher risk—meaning restrictions can be counterproductive.
    </p>

    <Divider label="Deep Dive" />

    <BandHeader title="Better Approaches" icon="🌱" />
    <p>
      Replace blanket buffers with individualized assessment, supportive housing, and Housing First models; pair with supervision and services tailored to risk and need. These approaches improve stability and align with constitutional limits that courts have applied to excessive exclusion.
    </p>

    <Callout variant="policy" title="Policy Note" icon="📜">
      Jurisdictions should require evidence that any restriction meaningfully advances safety and avoids de facto banishment. Many courts scrutinize broad zones that sever access to housing, work, and family.
    </Callout>

    <BandHeader title="Data Sources" icon="📚" />
    <ul className="list-disc pl-6">
      <li>
        U.S. Department of Justice, National Institute of Justice — {""}
        <a className={linkCls} href="https://www.ojp.gov/pdffiles1/nij/222759.pdf" target="_blank" rel="noopener">https://www.ojp.gov/pdffiles1/nij/222759.pdf</a>
      </li>
      <li>
        Prison Policy Initiative — {""}
        <a className={linkCls} href="https://www.prisonpolicy.org/reports/housing.html" target="_blank" rel="noopener">https://www.prisonpolicy.org/reports/housing.html</a>
      </li>
      <li>
        U.S. Department of Justice, SMART Office — {""}
        <a className={linkCls} href="https://smart.ojp.gov/" target="_blank" rel="noopener">https://smart.ojp.gov/</a>
      </li>
    </ul>

    <BandHeader title="Related Reading" icon="🔗" />
    <ul className="list-disc pl-6">
      <li>
        <Link className={linkCls} to="/blog/community-ties">Community Ties</Link>
      </li>
      <li>
        <Link className={linkCls} to="/resources/housing-first">Housing First (Resource Guide)</Link>
      </li>
      <li>
        <Link className={linkCls} to="/blog/reentry-barriers">Breaking Down Reentry Barriers</Link>
      </li>
    </ul>

    <div className="mt-10">
      <ShareBar />
    </div>
  </article>
</BlogLayout>

); }

