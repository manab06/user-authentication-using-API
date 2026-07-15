import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactPageComponent () {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-white to-cyan-50">

      {/* Hero Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800">
            Get in Touch
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Have a question, feedback, or need assistance? We'd love to hear
            from you. Fill out the form below and our team will get back to you
            as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Side */}
            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Contact Information
              </h2>

              <p className="text-slate-600 text-lg leading-8 mb-10">
                Whether you have a question about our services, pricing,
                partnerships, or anything else, our team is always ready to
                answer your questions.
              </p>

              <div className="space-y-6">

                <div className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-xl">Address</h3>
                    <p className="text-slate-600 mt-2">
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-xl">Email</h3>
                    <p className="text-slate-600 mt-2">
                      support@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-xl">Phone</h3>
                    <p className="text-slate-600 mt-2">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50">
                  <div className="text-3xl">🕒</div>
                  <div>
                    <h3 className="font-semibold text-xl">Office Hours</h3>
                    <p className="text-slate-600 mt-2">
                      Monday – Friday
                    </p>
                    <p className="text-slate-600">
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-4xl font-bold text-slate-800 mb-8">
                Send us a Message
              </h2>

              <form className="space-y-6">

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 resize-none focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-600 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}