import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

const  Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'DataGrow transformed how we analyze our business metrics. The real-time dashboard saved us over 20 hours per week on manual reporting!',
      rating: 5,
      image: null
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Analytics, RetailHub',
      content: 'Best analytics tool we have ever used. The AI predictions are surprisingly accurate and helped us increase revenue by 35%.',
      rating: 5,
      image: null
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthLabs',
      content: 'The team collaboration features are outstanding. My entire team can now make data-driven decisions in real-time.',
      rating: 4,
      image: null
    }
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`inline-block ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        } text-sm`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Trusted by Growing Teams
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers say about DataGrow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
              
              {/* Content */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Rating Stars */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-slate-600 text-sm">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-slate-600 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4.9</div>
              <div className="text-slate-600 text-sm">Average Rating</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;