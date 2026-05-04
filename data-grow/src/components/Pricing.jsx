import { FaCheckCircle, FaRocket, FaChartLine, FaHeadset } from 'react-icons/fa';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      icon: <FaChartLine className="text-blue-500 text-4xl" />,
      monthly: 29,
      annual: 290,
      features: [
        'Up to 1,000 data points/month',
        'Basic analytics dashboard',
        'Email support (48hr response)',
        '1 team member',
        'Data export (CSV)',
        '30-day data history'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      icon: <FaRocket className="text-purple-500 text-4xl" />,
      monthly: 79,
      annual: 790,
      features: [
        'Up to 10,000 data points/month',
        'Advanced analytics + AI insights',
        'Priority support (24hr response)',
        '5 team members',
        'Real-time API access',
        '1-year data history',
        'Custom reports',
        'Team collaboration tools'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: <FaHeadset className="text-orange-500 text-4xl" />,
      monthly: 199,
      annual: 1990,
      features: [
        'Unlimited data points',
        'Custom AI models',
        '24/7 dedicated support',
        'Unlimited team members',
        'SLA guarantee (99.9% uptime)',
        'Unlimited data history',
        'White-label reporting',
        'SSO & advanced security',
        'On-premise deployment'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Pricing Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Choose the Plan That Fits Your Growth
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Start for free, scale with confidence. No hidden fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-800' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-800' : 'text-slate-500'}`}>
              Annual 
              <span className="text-green-600 ml-1 text-xs font-semibold">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  🔥 Most Popular
                </div>
              )}
              
              {/* Plan Content */}
              <div className="p-8">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-center text-slate-800 mb-4">
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-slate-800">
                    ${isAnnual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-slate-500">/{isAnnual ? 'year' : 'month'}</span>
                  {isAnnual && (
                    <p className="text-sm text-green-600 mt-1">
                      Save ${(plan.monthly * 12) - plan.annual}/year
                    </p>
                  )}
                </div>
                
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {plan.buttonText}
                </button>
                
                {/* Extra Note */}
                {plan.name === 'Basic' && (
                  <p className="text-xs text-center text-slate-400 mt-4">
                    No credit card required
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            All plans include a 14-day free trial. No commitment, cancel anytime.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default Pricing;