import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import Layout from "./components/Layout";
import ScrollToTop from './components/ScrollToTop';
import GoogleAnalytics from './components/GoogleAnalytics';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import LegalDirectory from "./pages/LegalDirectory";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Advocacy from "./pages/Advocacy";
import NotFound from "./pages/NotFound";

// Auto-discover weekly pages under /resources/legislative-tracker
import LegislativeTracker from './pages/resources/LegislativeTracker';
const weeklyModules = import.meta.glob('./pages/resources/legislative-tracker/*.tsx');

// --- your blog + resource imports follow ---
import RethinkingRegistry from './pages/blog/RethinkingRegistry';
import LifeOnRegistry from './pages/blog/LifeOnRegistry';
import LegalRights from './pages/blog/LegalRights';
import DangerousMyth from './pages/blog/DangerousMyth';
import PrivateVsPublicDefender from './pages/blog/PrivateVsPublicDefender';
import PleaVsTrial from './pages/blog/PleaVsTrial';
import RegisterAllFelons from './pages/blog/RegisterAllFelons';
import VigilantismRegistry from './pages/blog/VigilantismRegistry';
import WhenSomeoneYouLoveIsAccused from './pages/blog/WhenSomeoneYouLoveIsAccused';
import HiddenCostsRegistries from './pages/blog/HiddenCostsRegistries';
import FederalSexCrimeProcess from './pages/blog/FederalSexCrimeProcess';
import StateSexCrimeProcess from './pages/blog/StateSexCrimeProcess';
import KnowYourRights from './pages/resources/KnowYourRights';
import HousingSearchGuide from './pages/resources/HousingSearchGuide';
import JobSearchGuide from './pages/resources/JobSearchGuide';
import FederalProcessGuide from './pages/resources/FederalProcessGuide';
import StateProcessGuide from './pages/resources/StateProcessGuide';
import ReentryChecklist from './pages/resources/ReentryChecklist';
import MentalHealthDirectory from './pages/resources/MentalHealthDirectory';
import EmploymentDirectory from './pages/resources/EmploymentDirectory';
import FamilySupportGuide from './pages/resources/FamilySupportGuide';
import HighProfileCaseAnalysis from './pages/resources/HighProfileCaseAnalysis';
import ResearchDataResources from './pages/resources/ResearchDataResources';
import InterstateMovingGuide from './pages/resources/InterstateMovingGuide';
import InternationalTravelGuide from './pages/resources/InternationalTravelGuide';
import FinancialPlanningGuide from './pages/resources/FinancialPlanningGuide';
import FinancialSupportStrategies from './pages/resources/FinancialSupportStrategies';
import LegislativeAdvocacyGuide from './pages/resources/LegislativeAdvocacyGuide';
import HighProfileCasesStrangerDanger from './pages/blog/HighProfileCasesStrangerDanger';
import FindingWorkAfterRegistry from './pages/blog/FindingWorkAfterRegistry';
import PoliticsAndHypocrisy from './pages/blog/PoliticsAndHypocrisy';
import TheEnforcers from './pages/blog/TheEnforcers';
import PoliticalTheater from './pages/blog/PoliticalTheater';
import CustodyWithoutCages from './pages/blog/CustodyWithoutCages';
import SanctuaryAndSilence from './pages/blog/SanctuaryAndSilence';
import PlayingFieldsAndSchoolyards from './pages/blog/PlayingFieldsAndSchoolyards';
import CommunityBetrayal from './pages/blog/CommunityBetrayal';
import LegislativeAdvocacyGuide from "./pages/resources/LegislativeAdvocacyGuide";
import TwoMenOneReleaseDate from "./pages/blog/TwoMenOneReleaseDate";
import WhoIsSOLAR from './pages/blog/WhoIsSOLAR';
import TenantRightsGuide from './pages/resources/TenantRightsGuide';
import LegislativeTracker from './pages/resources/LegislativeTracker';
import LegislativeUpdate_2025_09_06 from './pages/resources/legislative-tracker/2025-09-06';
import WhenEverythingIsViolent from "./pages/blog/WhenEverythingIsViolent";
import BlogPost_DoNoHarm from './pages/blog/FirstDoNoHarm';
import CommunityTies from "./pages/blog/CommunityTies";
import ProfessionalLicensingGuide from "./pages/resources/ProfessionalLicensingGuide";
import ChildrenDisclosureToolkit from "./pages/resources/ChildrenDisclosureToolkit";
import InsideTheHouse from "./pages/blog/InsideTheHouse";
import AppealsGuide from "./pages/resources/AppealsGuide";
import SmallBusinessGuide from "./pages/resources/SmallBusinessGuide";
import ResidencyRestrictionsHousing from "./pages/blog/residency-restrictions-housing";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <GoogleAnalytics />
        <Layout>
          <main>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/advocacy" element={<Advocacy />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/political-theater" element={<PoliticalTheater />} />

              {/* Resource Routes */}
              <Route path="/resources/know-your-rights" element={<KnowYourRights />} />
              <Route path="/resources/housing-search-guide" element={<HousingSearchGuide />} />
              <Route path="/resources/job-search-guide" element={<JobSearchGuide />} />
              <Route path="/resources/federal-process-guide" element={<FederalProcessGuide />} />
              <Route path="/resources/state-process-guide" element={<StateProcessGuide />} />
              <Route path="/resources/reentry-checklist" element={<ReentryChecklist />} />
              <Route path="/resources/mental-health-directory" element={<MentalHealthDirectory />} />
              <Route path="/resources/employment-directory" element={<EmploymentDirectory />} />
              <Route path="/resources/family-support-guide" element={<FamilySupportGuide />} />
              <Route path="/resources/high-profile-case-analysis" element={<HighProfileCaseAnalysis />} />
              <Route path="/resources/research-data-resources" element={<ResearchDataResources />} />
              <Route path="/resources/interstate-moving-guide" element={<InterstateMovingGuide />} />
              <Route path="/resources/international-travel-guide" element={<InternationalTravelGuide />} />
              <Route path="/resources/financial-planning-guide" element={<FinancialPlanningGuide />} />
              <Route path="/resources/financial-support-strategies" element={<FinancialSupportStrategies />} />
              <Route path="/resources/legislative-advocacy-guide" element={<LegislativeAdvocacyGuide />} />
              <Route path="/resources/tenant-rights" element={<TenantRightsGuide />} />
              <Route path="/resources/legislative-tracker" element={<LegislativeTracker />} />
              <Route path="/resources/legislative-tracker" element={<LegislativeTracker />} />
              <Route path="/resources/legislative-tracker/:slug" element={<WeeklyUpdateLoader />} />
              <Route path="/resources/professional-licensing" element={<ProfessionalLicensingGuide />} />
              <Route path="/resources/children-disclosure-toolkit" element={<ChildrenDisclosureToolkit />} />
              <Route path="/resources/appeals-guide" element={<AppealsGuide />} />
              <Route path="/resources/small-business-guide" element={<SmallBusinessGuide />} />
          

              {/* Blog Routes */}
              <Route path="/blog/federal-sex-crime-process" element={<FederalSexCrimeProcess />} />
              <Route path="/blog/state-sex-crime-process" element={<StateSexCrimeProcess />} />
              <Route path="/blog/when-someone-you-love-is-accused" element={<WhenSomeoneYouLoveIsAccused />} />
              <Route path="/blog/hidden-costs-registries" element={<HiddenCostsRegistries />} />
              <Route path="/blog/plea-vs-trial" element={<PleaVsTrial />} />
              <Route path="/blog/private-vs-public-defender" element={<PrivateVsPublicDefender />} />
              <Route path="/blog/life-on-registry" element={<LifeOnRegistry />} />
              <Route path="/blog/rethinking-registry" element={<RethinkingRegistry />} />
              <Route path="/blog/legal-rights" element={<LegalRights />} />
              <Route path="/blog/dangerous-myth" element={<DangerousMyth />} />
              <Route path="/blog/register-all-felons" element={<RegisterAllFelons />} />
              <Route path="/blog/vigilantism-registry" element={<VigilantismRegistry />} />
              <Route path="/blog/high-profile-cases-stranger-danger" element={<HighProfileCasesStrangerDanger />} />
              <Route path="/blog/finding-work-after-registry" element={<FindingWorkAfterRegistry />} />
              <Route path="/blog/politics-and-hypocrisy" element={<PoliticsAndHypocrisy />} />
              <Route path="/blog/the-enforcers" element={<TheEnforcers />} />
              <Route path="/blog/custody-without-cages" element={<CustodyWithoutCages />} />
              <Route path="/blog/sanctuary-and-silence" element={<SanctuaryAndSilence />} />
              <Route path="/blog/playing-fields-and-schoolyards" element={<PlayingFieldsAndSchoolyards />} />
              <Route path="/blog/community-betrayal" element={<CommunityBetrayal />} />
              <Route path="/blog/two-men-one-release-date" element={<TwoMenOneReleaseDate />} />
              <Route path="/blog/who-is-solar" element={<WhoIsSOLAR />} />     
              <Route path="/blog/when-everything-is-violent" element={<WhenEverythingIsViolent />} />
              <Route path="/blog/first-do-no-harm" element={<BlogPost_DoNoHarm />} />
              <Route path="/blog/community-ties" element={<CommunityTies />} />
              <Route path="/blog/inside-the-house" element={<InsideTheHouse />} />
              <Route path="/blog/residency-restrictions-housing" element={<ResidencyRestrictionsHousing />} />
                      
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Layout>
      </div>
    </Router>
  );
}

function WeeklyUpdateLoader(): JSX.Element {
  const { slug } = useParams();
  if (!slug) return <div className="p-6">Update not found.</div>;

  const matchKey = Object.keys(weeklyModules).find(k => k.endsWith(`/${slug}.tsx`));
  if (!matchKey) return <div className="p-6">Update not found.</div>;

  // Lazy-load the matching weekly page component
  const LazyComp = lazy(weeklyModules[matchKey] as any);

  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <LazyComp />
    </Suspense>
  );
}

export default App;
