import { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is DataGrow and how does it work?',
      answer: 'DataGrow is an AI-powered analytics platform that connects to your data sources (databases, CRMs, spreadsheets) and provides real-time insights. Our system automatically processes your data and displays it on easy-to-understand dashboards.'
    },
    {
      id: 2,
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial on all plans. No credit card required. You get full access to all Pro features during the trial period.'
    },
    {
      id: 3,
      question: 'Can I switch plans or cancel anytime?',
      answer: 'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      id: 4,
      question: 'What kind of support do you offer?',
      answer: 'Basic plan includes email support (48hr response). Pro includes priority support (24hr response). Enterprise customers get 24/7 dedicated support with a 1hr SLA.'
    },
    {
      id: 5,
      question: 'Is my data secure?',
      answer: 'Security is our top priority. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are GDPR and CCPA compliant with regular third-party audits.'
    },
    {
      id: 6,
      question: 'Do you offer custom integrations?',
      answer: 'Yes! Enterprise customers get custom API integrations. We can build connectors for your specific tools and data sources.'
    }
  ];

  const toggleAccordion = (index) => {
    // If clicking the same item, close it. Otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);

  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Everything you need to know about DataGrow.
          </p>
        </div>

        {/* FAQ Grid - 2 columns on desktop */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-md' : 'shadow-sm'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaQuestionCircle className="text-blue-500 text-lg flex-shrink-0" />
                    <span className="font-semibold text-slate-800 pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-blue-500 flex-shrink-0">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {/* Answer Panel - Conditionally rendered */}
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0 border-t border-gray-200">
                    <div className="pt-3 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-800 mb-2"> 
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-4">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
              Contact Support →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQ;