      import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="mb-4">
                <img 
                  src="/solar-project-logo.png" 
                  alt="The SOLAR Project - Sex Offender Legal Advocacy & Reform" 
                  className="h-10 w-auto mb-4"
                />
              </div>
              <h3 className="text-xl font-bold">The SOLAR Project</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing relevant, accurate, and timely information for sex offenders and their loved ones, 
              while advocating for their rights and connecting them with specialized legal resources.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 The SOLAR Project. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              {/* Legal Directory temporarily suppressed */}
              {/* <li><Link to="/legal-directory" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">Legal Directory</Link></li> */}
              <li><Link to="/resources" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/advocacy" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            This website provides general information and should not be considered legal advice. 
            Please consult with qualified legal professionals for specific legal matters.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;