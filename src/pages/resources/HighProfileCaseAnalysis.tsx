  import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function HighProfileCaseAnalysis(): JSX.Element {
  return (
    <div>
      <SEO 
        title="High-Profile Case Analysis: Sex Offense Law & Registry Impacts | SOLAR Resource Guide"
        description="Concise, link-rich SOLAR guide to landmark U.S. cases and high-profile scandals shaping sex offense law and sex offender registries — with verified sources for further reading."
        keywords="high-profile sex crime cases, sex offender registry laws, Megan's Law, Adam Walsh Act, celebrity sex crimes, institutional abuse"
      />

      <style jsx>{`
        :root{
          --slate-900:#0f172a; --slate-800:#1e293b; --slate-700:#334155; --slate-600:#475569; --slate-500:#64748b; --slate-300:#cbd5e1; --slate-200:#e2e8f0; --slate-100:#f1f5f9;
          --blue-50:#eff6ff; --blue-600:#2563eb;
          --amber-50:#fffbeb; --amber-600:#b45309;
          --green-50:#ecfdf5; --green-600:#059669;
          --indigo-600:#4f46e5;
          --radius:18px;
        }
        html,body{margin:0;padding:0;background:#f8fafc;color:var(--slate-800);font:16px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
        .wrap{max-width:1100px;margin:0 auto;padding:0 16px 64px}
        /* Hero */
        header.hero{background:linear-gradient(135deg,var(--slate-800),var(--slate-700));color:#fff;padding:28px 0 32px;margin-bottom:18px}
        .hero .inner{max-width:1100px;margin:0 auto;padding:0 16px}
        .hero h1{margin:0 0 6px;font-weight:800;letter-spacing:-.01em;font-size:clamp(24px,3.5vw,36px)}
        .hero p{margin:0;color:var(--slate-300)}
        /* Cards */
        .grid{display:grid;grid-template-columns:1fr;gap:18px}
        @media (min-width: 768px) {
          .grid{grid-template-columns:1fr;}
        }
        .card{background:#fff;border:1px solid var(--slate-200);border-radius:var(--radius);box-shadow:0 6px 18px rgba(15,23,42,.06);overflow:hidden;width:100%;max-width:none}
        .card-header{display:flex;align-items:center;gap:10px;background:var(--slate-800);color:#fff;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}
        .card-header h2{margin:0;font-size:clamp(18px,2.1vw,22px);font-weight:700}
        .badge{display:inline-grid;place-items:center;width:28px;height:28px;border-radius:999px;background:#fff;color:var(--slate-800);font-weight:800;font-size:14px}
        .card-body{padding:16px 18px 14px}
        .list{margin:0;padding:0;list-style:none}
        .list li{padding:10px 0;border-top:1px dashed var(--slate-200)}
        .list li:first-child{border-top:0}
        .kv{display:inline-block;font-weight:700;color:var(--slate-700)}
        .subtle{color:var(--slate-600);font-size:.94rem}
        a{color:var(--indigo-600);text-decoration:underline}
        a:hover{filter:brightness(.9)}
        /* Callouts */
        .callout{display:flex;gap:10px;align-items:flex-start;margin:12px 0;padding:12px;border-radius:14px;border:1px solid var(--slate-200)}
        .callout .ico{flex:0 0 20px}
        .callout.info{background:var(--blue-50);border-left:6px solid var(--blue-600)}
        .callout.reminder{background:var(--amber-50);border-left:6px solid var(--amber-600)}
        .callout.tip{background:var(--green-50);border-left:6px solid var(--green-600)}
        /* Nav row */
        .cta-row{display:flex;flex-wrap:wrap;gap:10px;margin:16px 0 0}
        .btn{display:inline-block;padding:10px 14px;border-radius:10px;border:1px solid var(--slate-200);text-decoration:none}
        .btn--ghost{background:#fff;color:var(--slate-800)}
        .btn--ghost:hover{background:var(--slate-100)}
        .btn--solid{background:var(--slate-800);color:#fff;border-color:var(--slate-800)}
        .btn--solid:hover{opacity:.92}
        /* Print */
        @media print{
          .cta-row{display:none}
          header.hero{background:#fff;color:#000;border-bottom:1px solid var(--slate-200)}
          .hero p{color:#333}
          .card{box-shadow:none}
        }
      `}</style>

      {/* Hero */}
      <header className="hero">
        <div className="inner">
          <h1>High-Profile Case Analysis</h1>
          <p>Understanding how landmark cases shaped sex offense law and registry requirements</p>
        </div>
      </header>

      <main className="wrap">
        {/* Quick nav */}
        <div className="cta-row" aria-label="Section shortcuts">
          <a className="btn btn--ghost" href="#origins">Origins & Framework</a>
          <a className="btn btn--ghost" href="#celebrity">Celebrity Cases</a>
          <a className="btn btn--ghost" href="#religious">Religious Institutions</a>
          <a className="btn btn--ghost" href="#education">Education & Youth Orgs</a>
          <a className="btn btn--solid" href="#policy">Policy & International</a>
        </div>

        <section className="grid" aria-label="Guide sections">

          {/* 1. Origins */}
          <article className="card" id="origins">
            <div className="card-header"><span className="badge">1</span><h2>Origins & Framework</h2></div>
            <div className="card-body">
              <ul className="list">
                <li>
                  <span className="kv">Jacob Wetterling Act (1994)</span>
                  <div className="subtle">Precursor encouraging state registries; later supplanted by SORNA.</div>
                  <div>
                    <a href="https://www.reginfo.gov/public/do/eAgendaViewRule?ruleID=218462" target="_blank" rel="noopener">Reginfo summary</a> ·
                    <a href="https://www.justice.gov/archive/opa/pr/Pre_96/April95/199.txt.html" target="_blank" rel="noopener">DOJ 1995 guidance</a>
                  </div>
                  <div className="callout info">
                    <svg className="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 8h.01M12 10v6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                    <div><strong>Context:</strong> Initially law-enforcement–only; broad public notification arrived later via Megan's Law.</div>
                  </div>
                </li>
                <li>
                  <span className="kv">Megan's Law (1996)</span>
                  <div className="subtle">Required community notification / public access.</div>
                  <div>
                    <a href="https://www.congress.gov/bill/104th-congress/house-bill/2137/text/eh" target="_blank" rel="noopener">Statutory text</a> ·
                    <a href="https://www.justice.gov/archive/opa/pr/1997/April97/140vaw.htm" target="_blank" rel="noopener">DOJ guidelines (1997)</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Adam Walsh Act / SORNA (2006)</span>
                  <div className="subtle">Established federal baselines; expanded scope & offense-based tiers.</div>
                  <div>
                    <a href="https://smart.ojp.gov/sorna/current-law" target="_blank" rel="noopener">SMART Office: Current law</a> ·
                    <a href="https://smart.ojp.gov/sorna/current-law/legislative-history" target="_blank" rel="noopener">Legislative history</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Smith v. Doe (2003)</span> — retroactivity & "civil" label
                  <div>
                    <a href="https://supreme.justia.com/cases/federal/us/538/84/" target="_blank" rel="noopener">Opinion (Justia)</a> ·
                    <a href="https://www.oyez.org/cases/2002/01-729" target="_blank" rel="noopener">Oyez summary</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Does v. Snyder (6th Cir. 2016)</span> — punitive-effects analysis
                  <div>
                    <a href="https://law.justia.com/cases/federal/appellate-courts/ca6/15-1536/15-1536-2016-08-25.html" target="_blank" rel="noopener">Opinion (Justia)</a> ·
                    <a href="https://www.opn.ca6.uscourts.gov/opinions.pdf/16a0207p-06.pdf" target="_blank" rel="noopener">Sixth Circuit PDF (2016)</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Packingham v. North Carolina (2017)</span> — social media & the First Amendment
                  <div>
                    <a href="https://www.supremecourt.gov/opinions/16pdf/15-1194_08l1.pdf" target="_blank" rel="noopener">SCOTUS opinion (PDF)</a> ·
                    <a href="https://www.oyez.org/cases/2016/15-1194" target="_blank" rel="noopener">Oyez summary</a>
                  </div>
                </li>
              </ul>
              <div className="callout reminder">
                <svg className="ico" viewBox="0 0 24 24"><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                <div><strong>Reminder:</strong> Courts originally treated registries as regulatory. Newer decisions examine whether modern restrictions function as punishment.</div>
              </div>
            </div>
          </article>

          {/* 2. Celebrity */}
          <article className="card" id="celebrity">
            <div className="card-header"><span className="badge">2</span><h2>Celebrity Cases & Perceived Two-Tier Justice</h2></div>
            <div className="card-body">
              <ul className="list">
                <li>
                  <span className="kv">Roman Polanski (1977)</span>
                  <div>
                    <a href="https://ww2.lacourt.org/hp/sg0tt2fzb0h5rinbsj3p4xxt/1374562163.pdf" target="_blank" rel="noopener">LA Superior Court filing (PDF)</a> ·
                    <a href="https://en.wikipedia.org/wiki/Roman_Polanski_sexual_abuse_case" target="_blank" rel="noopener">Case overview</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Jeffrey Epstein (2007–08 NPA; 2019 arrest)</span>
                  <div>
                    <a href="https://www.documentcloud.org/documents/6184602-Jeffrey-Epstein-non-prosecution-agreement/" target="_blank" rel="noopener">2008 Non-Prosecution Agreement</a> ·
                    <a href="https://www.justice.gov/opr/page/file/1336471/dl" target="_blank" rel="noopener">DOJ OPR report (PDF)</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Bill Cosby (conviction vacated 2021)</span>
                  <div>
                    <a href="https://www.pacourts.us/Storage/media/pdfs/20210630/163038-june302021opinionwecht.pdf" target="_blank" rel="noopener">Pa. Supreme Court opinion (PDF)</a> ·
                    <a href="https://abcnews.go.com/US/bill-cosby-released-prison-conviction-vacated/story?id=78582000" target="_blank" rel="noopener">News explainer</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Harvey Weinstein</span> — NY conviction overturned (2024); LA conviction (2022); LA sentence (2023)
                  <div>
                    <a href="https://www.nycourts.gov/ctapps/Decisions/2024/Apr24/24opn24-Decision.pdf" target="_blank" rel="noopener">NY Court of Appeals opinion (PDF)</a> ·
                    <a href="https://lacounty.gov/2022/12/19/harvey-weinstein-convicted-of-sexual-assault/" target="_blank" rel="noopener">LA DA: conviction (2022)</a> ·
                    <a href="https://www.latimes.com/california/story/2023-02-23/harvey-weinstein-sentenced-to-xx-in-los-angeles-rape-case" target="_blank" rel="noopener">LA Times: 16-year sentence</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Brock Turner (2016)</span>
                  <div className="subtle">Lenient sentence → recall of Judge Persky.</div>
                  <div>
                    <a href="https://en.wikipedia.org/wiki/People_v._Turner" target="_blank" rel="noopener">Case overview</a> ·
                    <a href="https://harvardlawreview.org/print/vol-132/california-judge-recalled-for-sentence-in-sexual-assault-case/" target="_blank" rel="noopener">Judge recall analysis</a>
                  </div>
                </li>
                <li>
                  <span className="kv">R. Kelly</span> — federal sentences (2022–2023)
                  <div>
                    <a href="https://www.justice.gov/usao-edny/pr/r-kelly-sentenced-30-years-prison" target="_blank" rel="noopener">EDNY: 30-year sentence</a> ·
                    <a href="https://www.justice.gov/usao-ndil/pr/robert-kelly-sentenced-20-years" target="_blank" rel="noopener">NDIL: additional 20 years</a>
                  </div>
                </li>
              </ul>
              <div className="callout reminder">
                <svg className="ico" viewBox="0 0 24 24"><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                <div><strong>Reminder:</strong> Resources, visibility, and timing often drive outcomes in celebrity matters, which may differ from typical cases.</div>
              </div>
            </div>
          </article>

          {/* 3. Religious */}
          <article className="card" id="religious">
            <div className="card-header"><span className="badge">3</span><h2>Religious Institutions</h2></div>
            <div className="card-body">
              <ul className="list">
                <li>
                  <span className="kv">Catholic Church — Pennsylvania Grand Jury (2018)</span>
                  <div>
                    <a href="https://www.attorneygeneral.gov/report/" target="_blank" rel="noopener">AG landing page</a> ·
                    <a href="https://www.attorneygeneral.gov/wp-content/uploads/2023/05/INVESTIGATING-GRAND-JURY-REPORT-NO.-1_FINAL_May-2023_Redacted.pdf" target="_blank" rel="noopener">Report PDF (redacted)</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Southern Baptist Convention — Guidepost Report (2022)</span>
                  <div>
                    <a href="https://www.documentcloud.org/documents/22031737-final-guidepost-solutions-independent-investigation-report/" target="_blank" rel="noopener">Independent investigation (PDF)</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Warren Jeffs / FLDS (2011 conviction)</span>
                  <div>
                    <a href="https://inmate.tdcj.texas.gov/InmateSearch/viewDetail.action?sid=08888382" target="_blank" rel="noopener">TDCJ inmate record</a> ·
                    <a href="https://en.wikipedia.org/wiki/Warren_Jeffs" target="_blank" rel="noopener">Case overview</a>
                  </div>
                </li>
              </ul>
              <div className="callout info">
                <svg className="ico" viewBox="0 0 24 24"><path d="M3 7h18M6 12h12M8 17h8" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                <div><strong>Info:</strong> Many institutional cases surfaced years later, limiting prosecutions and registry entries despite extensive harm.</div>
              </div>
            </div>
          </article>

          {/* 4. Education & Youth Orgs */}
          <article className="card" id="education">
            <div className="card-header"><span className="badge">4</span><h2>Education & Youth Organizations</h2></div>
            <div className="card-body">
              <ul className="list">
                <li>
                  <span className="kv">Mary Kay Letourneau (1997)</span>
                  <div>
                    <a href="https://apnews.com/article/us-news-ap-top-news-seattle-wa-state-wire-0542b4631cb2e6f47c57dcc3de9e7dd9" target="_blank" rel="noopener">AP overview</a> ·
                    <a href="https://en.wikipedia.org/wiki/Mary_Kay_Letourneau" target="_blank" rel="noopener">Case overview</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Debra Lafave (2005–2006)</span>
                  <div>
                    <a href="https://www.tampabay.com/archive/2005/12/09/lafave-plea-deal-in-jeopardy/" target="_blank" rel="noopener">Tampa Bay Times (2005)</a> ·
                    <a href="https://www.tampabay.com/archive/2006/03/26/lafave-avoids-prison/" target="_blank" rel="noopener">Tampa Bay Times (2006)</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Jerry Sandusky / Penn State</span> — 2012 conviction; 2019 resentencing
                  <div>
                    <a href="https://www.espn.com/college-football/story/_/id/8087028/penn-state-nittany-lions-jerry-sandusky-convicted-45-counts-sex-abuse-trial" target="_blank" rel="noopener">ESPN: verdict report</a> ·
                    <a href="https://www.pbs.org/newshour/nation/jerry-sandusky-resentenced-to-30-to-60-years" target="_blank" rel="noopener">PBS: resentencing</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Larry Nassar / USA Gymnastics (2017–2018)</span>
                  <div>
                    <a href="https://www.justice.gov/usao-wdmi/pr/2017_1207_Nassar" target="_blank" rel="noopener">DOJ: 60-year federal sentence</a> ·
                    <a href="https://oig.justice.gov/reports/investigation-and-review-federal-bureau-investigations-handling-allegations-sexual-abuse" target="_blank" rel="noopener">DOJ OIG: FBI handling report</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Boy Scouts of America — abuse claims & settlement</span>
                  <div>
                    <a href="https://apnews.com/article/sexual-abuse-boy-scouts-of-america-c52a60cd7b0b3df5b6e9c6247837611c" target="_blank" rel="noopener">AP: $2.46B plan approved (2022)</a> ·
                    <a href="https://apnews.com/article/boy-scouts-new-name-scouting-america-d583f5712680f155b4f6b762128734d3" target="_blank" rel="noopener">AP: rebranding update (2024)</a>
                  </div>
                </li>
              </ul>
              <div className="callout tip">
                <svg className="ico" viewBox="0 0 24 24"><path d="M5 12h14M12 5v14" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                <div><strong>Pro tip:</strong> For youth-serving orgs, emphasize prevention protocols (two-adult rule, open-door policies, mandatory reporting training) alongside background checks.</div>
              </div>
            </div>
          </article>

          {/* 5. Policy & Intl */}
          <article className="card" id="policy">
            <div className="card-header"><span className="badge">5</span><h2>Policy Debates, "Stranger Danger," & International Context</h2></div>
            <div className="card-body">
              <ul className="list">
                <li>
                  <span className="kv">Effectiveness & harms</span>
                  <div>
                    <a href="https://www.hrw.org/report/2013/05/01/raised-registry/irreparable-harm-placing-children-sex-offender-registries-us" target="_blank" rel="noopener">HRW: Raised on the Registry</a> ·
                    <a href="https://www.hrw.org/news/2013/05/01/us-more-harm-good" target="_blank" rel="noopener">HRW: More Harm Than Good</a>
                  </div>
                </li>
                <li>
                  <span className="kv">UK — "Sarah's Law" (disclosure scheme, not a public registry)</span>
                  <div>
                    <a href="https://www.gov.uk/government/publications/child-sex-offender-disclosure-scheme-guidance" target="_blank" rel="noopener">Home Office: guidance</a> ·
                    <a href="https://www.gov.uk/guidance/find-out-if-a-person-has-a-record-for-child-sexual-offences" target="_blank" rel="noopener">How to apply</a>
                  </div>
                </li>
                <li>
                  <span className="kv">Canada — NSOR (police-only access)</span>
                  <div>
                    <a href="https://www.justice.gc.ca/eng/rp-pr/csj-sjc/jsp-sjp/arnsor-mlrnds/p2.html" target="_blank" rel="noopener">Justice Canada: NSOR overview</a> ·
                    <a href="https://laws-lois.justice.gc.ca/eng/acts/S-8.7/FullText.html" target="_blank" rel="noopener">SOIRA statute</a>
                  </div>
                </li>
              </ul>
              <div className="callout reminder">
                <svg className="ico" viewBox="0 0 24 24"><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                <div><strong>Key takeaways:</strong> U.S. registries grew from rare but high-profile cases and expanded via federal baselines. Other countries favor controlled police disclosure over broad public lists.</div>
              </div>
            </div>
          </article>

        </section>

        {/* bottom quick nav */}
        <div className="cta-row" style={{marginTop:'22px'}}>
          <a className="btn btn--ghost" href="#origins">Origins</a>
          <a className="btn btn--ghost" href="#celebrity">Celebrity</a>
          <a className="btn btn--ghost" href="#religious">Religious</a>
          <a className="btn btn--ghost" href="#education">Education</a>
          <a className="btn btn--solid" href="#policy">Policy</a>
        </div>

      </main>
    </div>
  );
}