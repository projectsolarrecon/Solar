      import SEO from "../components/SEO";

function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Contact Us - Get Support & Information | The SOLAR Project"
        description="Contact The SOLAR Project for legal advocacy support, information requests, and questions about sex offender registry issues. We're here to help with confidential assistance."
        keywords="contact SOLAR project, legal advocacy help, sex offender support, registry questions, legal information request, confidential assistance"
      />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-slate-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                Get Support
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Contact Us</h1>
            
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              We're here to help. Reach out with questions, requests for information, 
              or to learn more about our advocacy work.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Contact Form - moved up, removing blue panel from here */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <form className="space-y-6" action="mailto:projectsolarrecon@gmail.com" method="post" encType="text/plain">
                <input type="hidden" name="subject" value="Contact Form - Contact Page" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="inquiryType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Information</option>
                    <option value="legal">Legal Directory Inquiry</option>
                    <option value="resources">Resource Request</option>
                    <option value="advocacy">Advocacy & Reform</option>
                    <option value="media">Media Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Please provide as much detail as possible about your inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacyAgreement"
                    required
                    className="mt-1 h-4 w-4 text-slate-600 focus:ring-slate-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    I acknowledge that I have read and agree to the{" "}
                    <a href="#" className="text-slate-600 hover:text-slate-800">Privacy Policy</a>{" "}
                    and understand that my information will be handled confidentially. *
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Do you provide legal advice?</h3>
                <p className="text-gray-600 text-sm">
                  We provide general information and resources, but we are not a law firm and 
                  cannot provide legal advice. We can help connect you with{' '}
                  <a 
                    href="/legal-directory" 
                    className="text-blue-600 hover:text-blue-800 underline font-semibold"
                  >
                    qualified attorneys
                  </a>.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Is my information confidential?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we treat all communications confidentially and will never share your 
                  personal information without your explicit consent.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Do you charge for your services?</h3>
                <p className="text-gray-600 text-sm">
                  Our information and advocacy services are provided free of charge. We are 
                  supported by donations and grants.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">How can I get involved?</h3>
                <p className="text-gray-600 text-sm">
                  We welcome volunteers and advocates! Contact us to learn about current 
                  opportunities to support our mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Contact Us Panel - moved to bottom */}
      <section className="bg-slate-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get the Support You Need</h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            We're here to help you navigate these complex issues and connect you with the resources you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Send Us a Message
            </button>
            <a
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors"
            >
              Browse Resources
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="bg-red-50 border-l-4 border-red-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Emergency Situations</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  If you are experiencing a mental health crisis or having thoughts of self-harm, 
                  please contact the National Suicide Prevention Lifeline at <strong>988</strong> 
                  or go to your nearest emergency room immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;