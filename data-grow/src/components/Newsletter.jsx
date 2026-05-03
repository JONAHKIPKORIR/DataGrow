import { FiMail, FiSend, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';

const  Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate successful subscription
    setSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-700 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Icon */}
          <FiMail className="text-5xl mx-auto mb-4 text-blue-200" />
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead with Data Insights
          </h2>
          
          {/* Description */}
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get weekly analytics tips, industry trends, and exclusive offers 
            delivered straight to your inbox.
          </p>
          
          {/* Success Message */}
          {submitted && (
            <div className="bg-green-500 text-white p-3 rounded-lg mb-4 flex items-center justify-center gap-2">
              <FiCheckCircle className="text-xl" />
              <span>Thanks for subscribing! Check your inbox soon. </span>
            </div>
          )}
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              {error && (
                <p className="text-red-200 text-sm mt-2 text-left">{error}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2 group"
            >
              <span>Subscribe Now</span>
              <FiSend className="group-hover:translate-x-1 transition" />
            </button>
          </form>
          
          {/* Promise text */}
          <p className="text-blue-200 text-sm mt-6">
            No spam, unsubscribe anytime.
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default Newsletter;