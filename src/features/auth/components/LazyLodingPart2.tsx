import React from 'react'

export default function LazyLodingPart2() {
    return (
       <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100">

      {/* Animation */}
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
          }

          .skeleton {
            background: linear-gradient(
              90deg,
              #e2e8f0 25%,
              #f8fafc 50%,
              #e2e8f0 75%
            );
            background-size: 1000px 100%;
            animation: shimmer 2s infinite linear;
          }

          .floating {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="skeleton h-5 w-36 rounded-lg" />
      </div>

      {/* Main Product */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">

            {/* Product Image */}
            <div className="flex items-center justify-center">

              <div className="w-full max-w-xl floating">

                <div className="skeleton h-[520px] rounded-3xl" />

              </div>

            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <div className="skeleton h-4 w-32 rounded mb-5" />

              {/* Title */}
              <div className="space-y-3">

                <div className="skeleton h-10 w-full rounded-xl" />

                <div className="skeleton h-10 w-4/5 rounded-xl" />

              </div>

              {/* Rating */}
              <div className="flex gap-3 mt-6">

                <div className="skeleton h-5 w-28 rounded" />

                <div className="skeleton h-5 w-10 rounded" />

                <div className="skeleton h-5 w-24 rounded" />

              </div>

              {/* Price */}
              <div className="flex gap-4 mt-7">

                <div className="skeleton h-10 w-28 rounded-xl" />

                <div className="skeleton h-6 w-20 rounded-lg mt-2" />

              </div>

              {/* Description */}
              <div className="space-y-3 mt-7">

                <div className="skeleton h-4 w-full rounded" />

                <div className="skeleton h-4 w-full rounded" />

                <div className="skeleton h-4 w-4/5 rounded" />

              </div>

              <hr className="my-7" />

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">

                <div className="skeleton h-20 rounded-xl" />

                <div className="skeleton h-20 rounded-xl" />

                <div className="skeleton h-20 rounded-xl" />

                <div className="skeleton h-20 rounded-xl" />

              </div>

              {/* Quantity */}
              <div className="mt-7">

                <div className="skeleton h-5 w-20 rounded" />

                <div className="flex gap-4 mt-3">

                  <div className="skeleton h-11 w-11 rounded-full" />

                  <div className="skeleton h-11 w-8 rounded" />

                  <div className="skeleton h-11 w-11 rounded-full" />

                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <div className="skeleton h-14 flex-1 rounded-xl" />

                <div className="skeleton h-14 flex-1 rounded-xl" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Product Details */}
      <section className="max-w-7xl mx-auto px-6 pb-12">

        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-10">

          <div className="skeleton h-8 w-56 rounded-xl" />

          <div className="skeleton h-4 w-80 rounded mt-3" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            <div className="skeleton h-24 rounded-2xl" />

            <div className="skeleton h-24 rounded-2xl" />

            <div className="skeleton h-24 rounded-2xl" />

            <div className="skeleton h-24 rounded-2xl" />

          </div>

          <div className="mt-10 space-y-3">

            <div className="skeleton h-6 w-32 rounded" />

            <div className="skeleton h-4 w-full rounded" />

            <div className="skeleton h-4 w-5/6 rounded" />

          </div>

        </div>

      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-10">

          <div className="skeleton h-8 w-64 rounded-xl" />

          <div className="skeleton h-4 w-80 rounded mt-3" />

          {/* Rating */}
          <div className="mt-10">

            <div className="skeleton h-12 w-20 rounded-xl" />

            <div className="skeleton h-5 w-28 rounded mt-3" />

          </div>

          {/* Reviews */}
          <div className="mt-10 space-y-8">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="border-t pt-7"
              >

                <div className="skeleton h-5 w-32 rounded" />

                <div className="skeleton h-4 w-24 rounded mt-3" />

                <div className="space-y-2 mt-4">

                  <div className="skeleton h-4 w-full rounded" />

                  <div className="skeleton h-4 w-4/5 rounded" />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
    )
}
