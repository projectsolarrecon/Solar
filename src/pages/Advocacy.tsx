import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SEO from "../components/SEO";

function Advocacy() {
  // Contact Congress Widget State
  const [role, setRole] = useState("registrant");
  const [issue, setIssue] = useState("residency");
  const [currentTab, setCurrentTab] = useState("phone");
  const [script, setScript] = useState("");
  const [copied, setCopied] = useState(false);

  // Script data
  const scriptData = {
    "phone": {
      "registrant": {
        "residency": "Hello, my name is [YOUR NAME], and I live in [CITY, ZIP]. I'm a registrant calling to ask the Senator/Representative to oppose blanket residency bans and similar distance restrictions. Peer-reviewed research and federal guidance show these rules don't prevent harm but do increase homelessness and instability. Please support policies that focus on prevention, treatment access, and individualized risk—not one-size-fits-all bans. Thank you.",
        "evidence": "Hello, my name is [YOUR NAME] from [CITY, ZIP]. I'm asking you to support evidence-based reforms to sex-offense policy: invest in effective treatment, individualized assessments, and targeted supervision; and avoid ineffective public-facing punishments. The data show very low sexual re-offense rates compared to common assumptions. Please advance prevention over fear.",
        "retroactive": "Hello, this is [YOUR NAME] in [CITY, ZIP]. I urge you to oppose retroactive expansions of registry or supervision rules. Punishing people after their sentence undermines constitutional principles and successful reentry. Please choose policies that are lawful, targeted, and effective.",
        "reentry": "Hello, my name is [YOUR NAME] in [CITY, ZIP]. Please support reentry measures that actually reduce harm: stable housing, employment access, family reunification, and realistic compliance rules. These proven supports increase safety and reduce recidivism.",
        "transparency": "Hello, this is [YOUR NAME] from [CITY, ZIP]. Please support transparent, high-quality data collection and public reporting on sex-offense policies so lawmakers and the public can see what actually works to prevent harm."
      },
      "family": {
        "residency": "Hello, I'm [YOUR NAME] in [CITY, ZIP], a family member of someone on the registry. Blanket residency bans have pushed our family toward homelessness and instability without improving safety. Please oppose these ineffective rules and support prevention, treatment, and individualized decisions.",
        "evidence": "Hello, I'm [YOUR NAME] from [CITY, ZIP]. Please support evidence-based sex-offense policy: treatment access, risk-focused supervision, and prevention. Broad punitive rules don't reduce harm but do hurt families and children.",
        "retroactive": "Hello, this is [YOUR NAME] in [CITY, ZIP]. Please oppose retroactive registry expansions that punish families long after court sentences. Stability and lawful policy make communities safer.",
        "reentry": "Hello, I'm [YOUR NAME], [CITY, ZIP]. Reentry supports—housing, jobs, family connection—lower recidivism. Please invest in these proven measures instead of blanket restrictions.",
        "transparency": "Hello, this is [YOUR NAME] from [CITY, ZIP]. Please require transparent data and outcome reporting on sex-offense policies so decisions are guided by facts, not fear."
      },
      "ally": {
        "residency": "Hello, my name is [YOUR NAME], a constituent in [CITY, ZIP]. I'm calling as an ally to oppose blanket residency bans that research shows are ineffective and destabilizing. Please prioritize prevention and evidence-based policy.",
        "evidence": "Hello, this is [YOUR NAME] in [CITY, ZIP]. Please support data-driven reforms—treatment, tailored supervision, prevention—over broad, symbolic punishments.",
        "retroactive": "Hello, [YOUR NAME] from [CITY, ZIP]. I urge you to oppose retroactive registry expansions. Uphold constitutional norms and focus on what prevents harm.",
        "reentry": "Hello, this is [YOUR NAME], [CITY, ZIP]. Please support reentry policies that improve stability and safety: housing, employment, and family support.",
        "transparency": "Hello, [YOUR NAME] from [CITY, ZIP]. Please require rigorous data collection and public reporting on these policies to guide future reforms."
      },
      "citizen": {
        "residency": "Hello, my name is [YOUR NAME] in [CITY, ZIP]. As a constituent, I oppose blanket residency restrictions that don't improve safety and instead cause homelessness and instability. Please pursue effective, prevention-focused approaches.",
        "evidence": "Hello, this is [YOUR NAME] from [CITY, ZIP]. Please support evidence-based reforms centered on prevention, treatment access, and individualized assessment.",
        "retroactive": "Hello, [YOUR NAME], [CITY, ZIP]. Please oppose retroactive expansions of registry rules and focus on lawful, effective solutions.",
        "reentry": "Hello, this is [YOUR NAME] in [CITY, ZIP]. Please support reentry measures that reduce recidivism—stable housing, jobs, and family connection.",
        "transparency": "Hello, I'm [YOUR NAME] from [CITY, ZIP]. Please strengthen data transparency so we can evaluate what truly keeps communities safe."
      }
    },
    "email": {
      "registrant": {
        "residency": "Subject: Please oppose blanket residency bans and distance restrictions\n\nDear [TITLE LASTNAME],\n\nI'm a constituent in [CITY, ZIP] and a registrant. I'm asking you to oppose blanket residency and distance restrictions. Evidence shows these rules do not prevent sexual harm, but they do increase homelessness and instability, making compliance and reintegration harder. Policies work best when they are individualized, targeted to risk, and focused on prevention and treatment access.\n\nPlease prioritize evidence-based approaches, invest in services that prevent harm, and avoid one-size-fits-all restrictions.\n\nThank you for your consideration,\n[YOUR NAME]\n[ADDRESS (optional)]",
        "evidence": "Subject: Support evidence-based reforms to reduce sexual harm\n\nDear [TITLE LASTNAME],\n\nI am a constituent in [CITY, ZIP]. Research shows that prevention, treatment, and individualized supervision are more effective than broad public punishments. Please support legislation that funds treatment access, uses validated risk assessments, and removes ineffective collateral consequences that undermine stability.\n\nThank you,\n[YOUR NAME]",
        "retroactive": "Subject: Please oppose retroactive expansions of registry/supervision rules\n\nDear [TITLE LASTNAME],\n\nI'm a constituent in [CITY, ZIP]. Retroactive expansions punish people after their sentence and strain families without demonstrated safety benefits. Please support constitutional, prospective policy focused on prevention and reintegration.\n\nRespectfully,\n[YOUR NAME]",
        "reentry": "Subject: Strengthen reentry supports that actually improve safety\n\nDear [TITLE LASTNAME],\n\nAs a constituent in [CITY, ZIP], I urge you to support policies that enable stable housing, employment, and family connection for people returning to the community. These measures reduce recidivism and improve public safety.\n\nSincerely,\n[YOUR NAME]",
        "transparency": "Subject: Improve data transparency on sex-offense policies\n\nDear [TITLE LASTNAME],\n\nPlease support rigorous, public data collection and evaluation of sex-offense policies so decisions are guided by evidence rather than fear.\n\nThank you,\n[YOUR NAME]"
      },
      "family": {
        "residency": "Subject: Oppose blanket residency bans that harm families\n\nDear [TITLE LASTNAME],\n\nI'm a constituent in [CITY, ZIP] and a family member of someone on the registry. Residency bans have pushed our family toward housing instability without evidence of improved safety. Please oppose these policies and support prevention, treatment access, and individualized decisions.\n\nSincerely,\n[YOUR NAME]",
        "evidence": "Subject: Please support evidence-based sex-offense policy\n\nDear [TITLE LASTNAME],\n\nAs a constituent in [CITY, ZIP], I urge you to advance data-driven reforms—treatment, tailored supervision, and prevention—over broad punitive measures.\n\nThank you,\n[YOUR NAME]",
        "retroactive": "Subject: Oppose retroactive registry expansions\n\nDear [TITLE LASTNAME],\n\nRetroactive rules extend punishment beyond the sentence and harm children and families. Please focus on lawful, prospective policy that supports safe reintegration.\n\nRespectfully,\n[YOUR NAME]",
        "reentry": "Subject: Invest in reentry supports that reduce recidivism\n\nDear [TITLE LASTNAME],\n\nPlease back policies that expand housing and employment opportunities and reduce unnecessary barriers for people reentering society. These supports improve safety for everyone.\n\nSincerely,\n[YOUR NAME]",
        "transparency": "Subject: Require transparent data on policy outcomes\n\nDear [TITLE LASTNAME],\n\nPlease require better data collection and public reporting so the public and lawmakers can see what works to prevent harm.\n\nThank you,\n[YOUR NAME]"
      },
      "ally": {
        "residency": "Subject: Oppose ineffective residency bans\n\nDear [TITLE LASTNAME],\n\nI'm a constituent in [CITY, ZIP] and an advocate for effective public safety policy. Research shows blanket residency bans do not reduce sexual harm and instead drive instability. Please oppose these measures and support prevention-focused solutions.\n\nSincerely,\n[YOUR NAME]",
        "evidence": "Subject: Advance evidence-based reforms\n\nDear [TITLE LASTNAME],\n\nPlease support reforms grounded in data: treatment access, validated risk tools, and individualized conditions that promote stability.\n\nThank you,\n[YOUR NAME]",
        "retroactive": "Subject: Oppose retroactive registry expansions\n\nDear [TITLE LASTNAME],\n\nRetroactive punishments undermine fairness without clear safety gains. Please prioritize constitutional, forward-looking policies.\n\nRespectfully,\n[YOUR NAME]",
        "reentry": "Subject: Support reentry measures that improve safety\n\nDear [TITLE LASTNAME],\n\nStable housing, work, and family connection reduce recidivism. Please invest in these proven supports.\n\nSincerely,\n[YOUR NAME]",
        "transparency": "Subject: Improve transparency and data quality\n\nDear [TITLE LASTNAME],\n\nPlease strengthen data collection and public reporting so lawmakers can craft policies that truly prevent harm.\n\nThank you,\n[YOUR NAME]"
      },
      "citizen": {
        "residency": "Subject: Please oppose blanket residency restrictions\n\nDear [TITLE LASTNAME],\n\nI'm a constituent in [CITY, ZIP]. Broad residency bans don't improve safety and do increase homelessness and instability. Please focus on prevention and evidence-based policy.\n\nSincerely,\n[YOUR NAME]",
        "evidence": "Subject: Support evidence-based sex-offense policy\n\nDear [TITLE LASTNAME],\n\nPlease support reforms grounded in research—treatment, individualized assessment, and realistic, targeted supervision.\n\nThank you,\n[YOUR NAME]",
        "retroactive": "Subject: Oppose retroactive expansions of registry rules\n\nDear [TITLE LASTNAME],\n\nRetroactive policy undermines fairness without proven safety benefits. Please focus on lawful, effective measures.\n\nRespectfully,\n[YOUR NAME]",
        "reentry": "Subject: Strengthen reentry supports to improve safety\n\nDear [TITLE LASTNAME],\n\nPlease back policies that expand housing and employment opportunities and reduce unnecessary barriers to reintegration.\n\nSincerely,\n[YOUR NAME]",
        "transparency": "Subject: Improve transparency and data\n\nDear [TITLE LASTNAME],\n\nPlease require rigorous data collection and public reporting on sex-offense policies so we can evaluate what works.\n\nThank you,\n[YOUR NAME]"
      }
    },
    "letter": {
      "registrant": {
        "residency": "[DATE]\n[TITLE FIRST LAST]\n[ADDRESS LINE 1]\n[ADDRESS LINE 2]\n\nRe: Oppose blanket residency bans and distance restrictions\n\nDear [TITLE LASTNAME],\n\nI live in [CITY, ZIP] and am on the registry. Blanket residency and distance restrictions have not been shown to prevent sexual harm, yet they create homelessness and instability that make compliance and reintegration harder. Public safety improves when policy is individualized and focused on prevention, treatment access, and stable housing and employment.\n\nI respectfully ask you to oppose blanket bans and support evidence-based approaches.\n\nSincerely,\n[YOUR NAME]\n[ADDRESS]\n[PHONE/EMAIL]",
        "evidence": "[DATE]\n[TITLE FIRST LAST]\n[ADDRESS LINE 1]\n[ADDRESS LINE 2]\n\nRe: Support evidence-based reform to reduce sexual harm\n\nDear [TITLE LASTNAME],\n\nPlease advance reforms centered on prevention, treatment, and individualized risk assessment rather than broad punitive measures. These approaches are supported by research and improve community safety.\n\nRespectfully,\n[YOUR NAME]",
        "retroactive": "[DATE]\n[TITLE FIRST LAST]\n[ADDRESS LINE 1]\n[ADDRESS LINE 2]\n\nRe: Oppose retroactive expansions of registry/supervision rules\n\nDear [TITLE LASTNAME],\n\nRetroactive policy undermines fairness and stability without clear safety benefits. Please support constitutional, prospective, prevention-focused measures.\n\nSincerely,\n[YOUR NAME]",
        "reentry": "[DATE]\n[TITLE FIRST LAST]\n[ADDRESS LINE 1]\n[ADDRESS LINE 2]\n\nRe: Support reentry and reintegration measures that improve safety\n\nDear [TITLE LASTNAME],\n\nPlease invest in policies that enable housing, employment, and family stability—key factors in reducing recidivism and enhancing public safety.\n\nRespectfully,\n[YOUR NAME]",
        "transparency": "[DATE]\n[TITLE FIRST LAST]\n[ADDRESS LINE 1]\n[ADDRESS LINE 2]\n\nRe: Improve data transparency on sex-offense policy outcomes\n\nDear [TITLE LASTNAME],\n\nPlease support rigorous, public data collection and evaluation so policies are guided by evidence.\n\nSincerely,\n[YOUR NAME]"
      },
      "family": {
        "residency": "[DATE]\n[TITLE FIRST LAST]\n[ADDRESS LINE 1]\n[ADDRESS LINE 2]\n\nRe: Oppose blanket residency bans\n\nDear [TITLE LASTNAME],\n\nAs a family member of someone on the registry in [CITY, ZIP], I've seen how blanket restrictions harm families and do not improve safety. Please oppose these policies and support prevention and individualized decisions.\n\nSincerely,\n[YOUR NAME]",
        "evidence": "[DATE]\n...\nRe: Support evidence-based policy\n\nDear [TITLE LASTNAME],\n\nPlease advance treatment access, targeted supervision, and prevention over broad public punishments.\n\nRespectfully,\n[YOUR NAME]",
        "retroactive": "[DATE]\n...\nRe: Oppose retroactive expansions\n\nDear [TITLE LASTNAME],\n\nRetroactive rules extend punishment to families without proven safety gains.\n\nSincerely,\n[YOUR NAME]",
        "reentry": "[DATE]\n...\nRe: Strengthen reentry supports\n\nDear [TITLE LASTNAME],\n\nHousing, jobs, and family stability reduce recidivism. Please invest in these supports.\n\nRespectfully,\n[YOUR NAME]",
        "transparency": "[DATE]\n...\nRe: Require better data transparency\n\nDear [TITLE LASTNAME],\n\nTransparent data will help craft policies that prevent harm.\n\nThank you,\n[YOUR NAME]"
      },
      "ally": {
        "residency": "[DATE]\n...\nRe: Oppose ineffective residency bans\n\nDear [TITLE LASTNAME],\n\nAs an advocate in [CITY, ZIP], I urge you to reject measures that research shows are ineffective and destabilizing.\n\nSincerely,\n[YOUR NAME]",
        "evidence": "[DATE]\n...\nRe: Advance evidence-based reforms\n\nDear [TITLE LASTNAME],\n\nPlease support data-driven approaches—treatment, validated risk tools, individualized conditions.\n\nRespectfully,\n[YOUR NAME]",
        "retroactive": "[DATE]\n...\nRe: Oppose retroactive registry expansions\n\nDear [TITLE LASTNAME],\n\nPlease uphold constitutional norms and focus on effective prevention.\n\nSincerely,\n[YOUR NAME]",
        "reentry": "[DATE]\n...\nRe: Support reentry measures that improve safety\n\nDear [TITLE LASTNAME],\n\nStable housing, work, and family connection are key to safety.\n\nRespectfully,\n[YOUR NAME]",
        "transparency": "[DATE]\n...\nRe: Improve transparency and data quality\n\nDear [TITLE LASTNAME],\n\nBetter data will enable policies that truly prevent harm.\n\nThank you,\n[YOUR NAME]"
      },
      "citizen": {
        "residency": "[DATE]\n...\nRe: Oppose blanket residency restrictions\n\nDear [TITLE LASTNAME],\n\nAs a constituent in [CITY, ZIP], I ask you to oppose broad restrictions that do not improve safety and instead cause instability.\n\nSincerely,\n[YOUR NAME]",
        "evidence": "[DATE]\n...\nRe: Support evidence-based policy\n\nDear [TITLE LASTNAME],\n\nPlease advance prevention, treatment, and individualized assessment.\n\nRespectfully,\n[YOUR NAME]",
        "retroactive": "[DATE]\n...\nRe: Oppose retroactive registry rules\n\nDear [TITLE LASTNAME],\n\nRetroactive policy undermines fairness without proven safety gains.\n\nSincerely,\n[YOUR NAME]",
        "reentry": "[DATE]\n...\nRe: Strengthen reentry supports\n\nDear [TITLE LASTNAME],\n\nPlease expand housing and employment opportunities that reduce recidivism.\n\nRespectfully,\n[YOUR NAME]",
        "transparency": "[DATE]\n...\nRe: Improve transparency and data\n\nDear [TITLE LASTNAME],\n\nPlease require rigorous data collection and public reporting.\n\nThank you,\n[YOUR NAME]"
      }
    }
  };

  // Update script when role, issue, or tab changes
  useEffect(() => {
    const newScript = scriptData[currentTab]?.[role]?.[issue] || '';
    setScript(newScript);
  }, [role, issue, currentTab]);

  // Copy to clipboard function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      alert('Copy failed—please select and copy manually.');
    }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Advocacy & Reform - SOLAR Position Statement | The SOLAR Project"
        description="The SOLAR Project's official position on sex offender registry reform. Learn why registries are ineffective, harmful, and unconstitutional. Join our evidence-based advocacy for justice and human rights."
        keywords="SOLAR position statement, sex offender registry reform, registry ineffective harmful, constitutional rights advocacy, evidence-based policy reform, registry abolition, criminal justice reform, human rights advocacy, registry discrimination, public safety policy"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-600/90 to-slate-500/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-slate-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                Join the Movement
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get Involved
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Join us in advocating for justice, reform, and human rights
            </p>
            
            <p className="text-lg text-slate-100 mb-8 max-w-3xl mx-auto">
              Your voice matters. Together, we can create meaningful change and ensure fair treatment for all individuals.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-500 to-slate-400"></div>

      {/* SOLAR Position Statement */}
      <section id="position-statement" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SOLAR Position Statement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our advocacy is grounded in evidence, constitutional principles, and a commitment to human dignity. 
              These core beliefs drive every aspect of our reform efforts.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 font-medium">
                  At SOLAR — <strong>S</strong>ex <strong>O</strong>ffenses: <strong>L</strong>earning, <strong>A</strong>dvocacy, and <strong>R</strong>esources — we are <strong>S</strong>upporting, <strong>O</strong>rganizing, <strong>L</strong>eading, <strong>A</strong>dvancing, and <strong>R</strong>eforming. We believe:
                </p>
              </div>

              <div className="space-y-8">
                {/* Position 1 */}
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">
                    The sex offender registry system is ineffective, harmful, and rooted in misinformation.
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    It does not prevent crime. The vast majority of sex offenses are committed by individuals not on any registry, 
                    and empirical evidence consistently shows lower recidivism rates for people convicted of sex offenses than 
                    for any other felony class.
                  </p>
                </div>

                {/* Position 2 */}
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">
                    Registry systems cause lasting harm to individuals, families, and communities.
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    Rather than increasing safety, registries foster fear, isolation, discrimination, and vigilante violence. 
                    Children of registrants often suffer social and psychological consequences through no fault of their own.
                  </p>
                </div>

                {/* Position 3 */}
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">
                    The real risk to children often lies closer to home.
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    Authority figures—including family members, teachers, coaches, clergy, and community leaders—are far more 
                    likely to perpetrate sexual harm than strangers. Yet public registry systems misleadingly focus attention 
                    on "the stranger danger" myth.
                  </p>
                </div>

                {/* Position 4 */}
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">
                    Other types of crime present a greater and more consistent danger to public safety.
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    Crimes involving guns, domestic violence, drugs, alcohol, and property damage are far more prevalent and 
                    harmful to children and communities than most sex offenses, but do not carry lifelong public punishment 
                    or surveillance.
                  </p>
                </div>

                {/* Position 5 */}
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">
                    Registries are punitive in practice, not administrative in nature.
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    They often violate basic constitutional protections and amount to extra-judicial punishment after a sentence 
                    has been served. In this way, registries stand in tension with principles of due process, proportionality, 
                    and fairness.
                  </p>
                </div>

                {/* Position 6 */}
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">
                    One-size-fits-all registry laws are fundamentally flawed.
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    Applying blanket restrictions across vastly different cases ignores individual risk factors and undermines 
                    both public trust and true safety. Policies should be evidence-based, individualized, and focused on 
                    prevention—not punishment.
                  </p>
                </div>

                {/* Position 7 */}
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">
                    Registries create a permanent underclass.
                  </h3>
                  <p className="text-yellow-700 leading-relaxed">
                    They block access to housing, employment, education, and financial services, stripping people of the tools 
                    necessary to rebuild their lives. This contradicts the ideals of redemption, reintegration, and equal protection.
                  </p>
                </div>
              </div>

              {/* Call to Action within Position Statement */}
              <div className="mt-12 text-center bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-8 border border-yellow-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why This Matters for Advocacy
                </h3>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  These position statements form the foundation of our advocacy work. Every campaign, every policy proposal, 
                  and every reform effort is guided by these evidence-based principles. We believe that effective advocacy 
                  must be rooted in truth, compassion, and constitutional law—not fear or political expedience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/blog"
                    className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors shadow-md"
                  >
                    Read Our Research
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-slate-600 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Join Our Advocacy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Campaigns - moved below Position Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Advocacy Campaigns</h2>
            <p className="text-lg text-gray-600">
              Join our active efforts to create meaningful change
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* RECON Campaign - Coming Soon */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">RECON Initiative</h3>
                <p className="text-lg text-blue-800 font-semibold mb-4">Register Every Convict or None</p>
              </div>
              
              <div className="max-w-2xl mx-auto mb-6">
                <p className="text-gray-700 mb-4">
                  Our groundbreaking campaign challenges the current registry system by advocating for true equality: 
                  if public safety requires registries, then all convicted individuals should be registered—not just those 
                  convicted of sex offenses.
                </p>
                <p className="text-gray-700">
                  This bold approach exposes the discriminatory nature of current registry laws and pushes for 
                  evidence-based policies that truly serve public safety rather than perpetuating stigma.
                </p>
              </div>

              <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Congress Widget */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="max-w-3xl mx-auto my-10 p-6 rounded-2xl shadow ring-1 ring-slate-200 bg-white">
            <header className="mb-6">
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 11V7a4 4 0 014-4h1.5M21 11V7a4 4 0 00-4-4h-1.5M3 11v2a4 4 0 004 4h1.5m12.5-6v2a4 4 0 01-4 4h-1.5M7 21h2a2 2 0 002-2v-1M15 21h2a2 2 0 002-2v-1M9 17v4M15 17v4" />
                </svg>
                Contact Your Members of Congress
              </h2>
              <p className="text-slate-600 mt-2">
                Use this tool to choose your perspective and issue, then copy a script and send it via{' '}
                <a href="https://democracy.io/?utm_source=solar&utm_medium=advocacy&utm_campaign=contact_congress" target="_blank" rel="noopener" className="text-amber-600 underline">Democracy.io</a>.
                Your message will reach both U.S. Senators and your Representative.
              </p>
            </header>

            <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <h3 className="font-semibold text-blue-900 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L4.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Why we ask for your role
              </h3>
              <p className="text-sm text-blue-800 mt-1">
                Lawmakers pay closer attention when they see how policies affect different groups.
                A message from someone <strong>on the registry</strong> highlights lived experience;
                from a <strong>family member</strong>, the collateral impact; from an <strong>ally</strong>, broader support;
                and from a <strong>concerned citizen</strong>, the principle of justice. Choose what best reflects your perspective.
              </p>
            </div>

            <label htmlFor="solar-role" className="block text-sm font-medium text-slate-700">Your role</label>
            <select 
              id="solar-role" 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 mb-4 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-slate-500"
            >
              <option value="registrant">Registrant</option>
              <option value="family">Family Member</option>
              <option value="ally">Ally / Advocate</option>
              <option value="citizen">Concerned Citizen</option>
            </select>

            <label htmlFor="solar-issue" className="block text-sm font-medium text-slate-700">Issue</label>
            <select 
              id="solar-issue" 
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="mt-1 mb-6 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-slate-500"
            >
              <option value="residency">Oppose blanket residency bans</option>
              <option value="evidence">Support evidence-based reform</option>
              <option value="retroactive">Oppose retroactive expansions</option>
              <option value="reentry">Strengthen reentry & reintegration</option>
              <option value="transparency">Improve data & transparency</option>
            </select>

            <div className="mb-2 flex gap-2" role="tablist" aria-label="Script type">
              <button 
                type="button" 
                onClick={() => setCurrentTab('phone')}
                className={`px-3 py-1.5 rounded-lg text-sm ${
                  currentTab === 'phone' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-800'
                }`}
              >
                Phone
              </button>
              <button 
                type="button" 
                onClick={() => setCurrentTab('email')}
                className={`px-3 py-1.5 rounded-lg text-sm ${
                  currentTab === 'email' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-800'
                }`}
              >
                Email
              </button>
              <button 
                type="button" 
                onClick={() => setCurrentTab('letter')}
                className={`px-3 py-1.5 rounded-lg text-sm ${
                  currentTab === 'letter' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-800'
                }`}
              >
                Letter
              </button>
            </div>

            <div className="relative">
              <textarea 
                id="solar-script" 
                value={script}
                readOnly
                className="w-full h-56 p-4 font-medium rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-slate-500"
                aria-label="Advocacy script" 
                spellCheck="false"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <button 
                  onClick={handleCopy}
                  type="button" 
                  className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700"
                >
                  Copy Script
                </button>
                <a 
                  href="https://democracy.io/?utm_source=solar&utm_medium=advocacy&utm_campaign=contact_congress"
                  target="_blank" 
                  rel="noopener"
                  className="px-4 py-2 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400"
                >
                  Open Democracy.io to Send
                </a>
                {copied && (
                  <span className="text-sm text-emerald-600" aria-live="polite">
                    Copied!
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-3">
                <strong>Tip:</strong> Personalize your first lines with your name, city/ZIP, and one sentence about your experience or concern—unique messages get read first.
              </p>
            </div>

            <details className="mt-6 group">
              <summary className="cursor-pointer flex items-center gap-2 select-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-600 group-open:rotate-90 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h7a2 2 0 012 2v12a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm11 0h7a1 1 0 011 1v12a1 1 0 01-1 1h-7" />
                </svg>
                <span className="font-semibold text-slate-800">Why these talking points (open for sources)</span>
              </summary>
              <div className="mt-3 space-y-3 text-sm text-slate-700">
                <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <p className="font-medium text-yellow-900">Evidence-based policy over blanket bans</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      <a className="underline text-slate-800" href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/9-case-law-update-2018-residency-restrictions.pdf" target="_blank" rel="noopener">
                        DOJ SMART Office—Residency Restrictions: Case Law Update (2018)
                      </a> (summarizes constitutional concerns & mixed outcomes).
                    </li>
                    <li>
                      <a className="underline text-slate-800" href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf" target="_blank" rel="noopener">
                        DOJ SMART Office—Recidivism of Adult Sexual Offenders (Przybylski, 2015)
                      </a> (context on reoffense patterns; cautions against assumption-driven policy).
                    </li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="font-medium text-emerald-900">Recidivism facts to counter common myths</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      <a className="underline text-slate-800" href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" target="_blank" rel="noopener">
                        Bureau of Justice Statistics—Recidivism of Sex Offenders Released from State Prison: 9-Year Follow-Up (2005–2014)
                      </a> (large cohort; detailed re-arrest outcomes).
                    </li>
                    <li>
                      <a className="underline text-slate-800" href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/smartwatch/09_january/mythfact.html" target="_blank" rel="noopener">
                        SMART Office—Myth vs. Fact (registration & notification)
                      </a> (useful clarifications on what registries do—and don't—do).
                    </li>
                    <li>
                      <a className="underline text-slate-800" href="https://www.sentencingproject.org/press-releases/new-report-from-the-sentencing-project-reveals-low-rates-of-recidivism-among-people-convicted-of-crimes-of-a-sexual-nature/" target="_blank" rel="noopener">
                        The Sentencing Project (2024) summary: low reoffense rates and long-term decline
                      </a>.
                    </li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200">
                  <p className="font-medium text-cyan-900">Tools for state lookups (if you want to add them later)</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      <a className="underline text-slate-800" href="https://open.pluralpolicy.com/find_your_legislator/" target="_blank" rel="noopener">
                        Open States / Plural — Find Your Legislator
                      </a> (free address-based state lookup; API available).
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500">
                  Federal messages send via <a className="underline" target="_blank" rel="noopener" href="https://democracy.io/">Democracy.io</a> (EFF's open-source tool for emailing your two U.S. Senators + House member in one go).
                </p>
              </div>
            </details>
          </section>
        </div>
      </section>

      {/* Ways to Get Involved - remains the same */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Make a Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              There are many ways to support our mission and help create positive change in the system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spread Awareness</h3>
              <p className="text-gray-600 mb-4">
                Share our content, educate others about the issues, and help combat stigma through informed dialogue.
              </p>
              <Link to="/blog" className="text-blue-700 font-semibold hover:text-blue-900 transition-colors">
                Read & Share →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Advocacy</h3>
              <p className="text-gray-600 mb-4">
                Contact legislators, support reform bills, and advocate for evidence-based policies that promote rehabilitation.
              </p>
              <a href="#" className="text-blue-700 font-semibold hover:text-blue-900 transition-colors">
                Take Action →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600 mb-4">
                Volunteer with local organizations, mentor individuals, or provide support to families in need.
              </p>
              <Link to="/contact" className="text-blue-700 font-semibold hover:text-blue-900 transition-colors">
                Get Connected →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Share Your Story</h3>
              <p className="text-gray-600 mb-4">
                Help others by sharing your experiences, insights, or expertise to build understanding and hope.
              </p>
              <Link to="/contact" className="text-blue-700 font-semibold hover:text-blue-900 transition-colors">
                Submit Story →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Support</h3>
              <p className="text-gray-600 mb-4">
                Offer your professional skills in law, counseling, research, or other areas to support our mission.
              </p>
              <Link to="/contact" className="text-blue-700 font-semibold hover:text-blue-900 transition-colors">
                Volunteer Skills →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Every voice matters in the fight for justice and reform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Advocacy;