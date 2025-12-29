export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      
      
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className=" text-4xl font-bold text-gray-900">
          About CareerCraft
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Empowering careers with AI-driven guidance
        </p>
      </section>

      
      <section className="max-w-4xl mx-auto text-gray-700 space-y-4 mb-16">
        <p>
          CareerCraft is an AI-powered career assistance platform designed to help
          individuals build stronger resumes, discover the right job opportunities,
          and grow professionally with confidence.
        </p>

        <p>
          Our goal is to simplify the job-seeking process by combining smart resume
          analysis, accurate job matching, and personalized career guidance in one
          unified platform.
        </p>

        <p>
          CareerCraft empowers students and professionals to understand their
          strengths, bridge skill gaps, and present themselves effectively in a
          competitive job market.
        </p>
      </section>
        
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm">
              To help job-seekers unlock better opportunities through AI-driven
              insights and career tools.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              AI-Powered Insights
            </h3>
            <p className="text-gray-600 text-sm">
              We use modern AI and NLP techniques to analyze resumes, match
              skills, and generate impactful documents.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              User-First Design
            </h3>
            <p className="text-gray-600 text-sm">
              CareerCraft is built with simplicity and clarity, ensuring an
              intuitive experience for every user.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Career Growth
            </h3>
            <p className="text-gray-600 text-sm">
              From resume optimization to skill improvement, we support
              continuous learning and growth.
            </p>
          </div>

        </div>
      </section>
           
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Journey
          </h2>

          <p className="text-gray-600 mb-8">
            CareerCraft is on a mission to make career growth smarter, simpler,
            and more accessible for everyone.
          </p>

          <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
      </section>


    </main>
  );
}
