import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../config/routs'

function AboutUsComponent() {
    return (
        <div>
              <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800">
          About Us
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
          We believe technology should be simple, secure, and accessible to
          everyone. Our goal is to build reliable applications that make life
          easier and help people accomplish more.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt="Our Team"
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Our Story
            </h2>

            <p className="text-slate-600 leading-8 mb-6">
              Founded with a passion for innovation, our team focuses on
              developing secure, scalable, and user-friendly applications.
              Every project is built with quality, performance, and customer
              satisfaction in mind.
            </p>

            <p className="text-slate-600 leading-8">
              Whether you're an individual or a business, we strive to deliver
              solutions that create real value and long-lasting impact.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-600">5K+</h3>
            <p className="mt-2 text-slate-600">Happy Users</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-600">120+</h3>
            <p className="mt-2 text-slate-600">Projects</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-600">10+</h3>
            <p className="mt-2 text-slate-600">Years Experience</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-600">24/7</h3>
            <p className="mt-2 text-slate-600">Support</p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="text-5xl mb-4">🎯</div>

            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-8">
              To create secure, high-quality digital products that empower
              businesses and individuals through innovative technology.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="text-5xl mb-4">🚀</div>

            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Our Vision
            </h2>

            <p className="text-slate-600 leading-8">
              To become a trusted technology partner known for innovation,
              reliability, and delivering exceptional user experiences.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-5">🔒</div>

            <h3 className="text-2xl font-semibold mb-3">
              Secure
            </h3>

            <p className="text-slate-600">
              We prioritize your privacy and keep your information protected.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-5">⚡</div>

            <h3 className="text-2xl font-semibold mb-3">
              Fast
            </h3>

            <p className="text-slate-600">
              Optimized applications that deliver speed and smooth performance.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-5">💙</div>

            <h3 className="text-2xl font-semibold mb-3">
              Reliable
            </h3>

            <p className="text-slate-600">
              Trusted by thousands of users for consistent and dependable
              services.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-cyan-600 rounded-3xl text-center py-16 px-8 text-white shadow-xl">

          <h2 className="text-4xl font-bold">
            Let's Build Something Great Together
          </h2>

          <p className="mt-5 text-lg text-cyan-100 max-w-2xl mx-auto">
            Have an idea or want to know more about our services? We'd love to
            hear from you.
          </p>
          <Link to={ROUTES.PUBLIC.CONTACT}>
          <button className="mt-8 bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition">
            Contact Us
          </button>
          </Link>

        </div>
      </section>

    </main>
            
        </div>
    )
}

export default AboutUsComponent
