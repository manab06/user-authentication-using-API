import React from 'react'

export default function LazyLodingOfProductPage() {
    return (
        <div>
            export default function ProductSkeleton()
 
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Heading Skeleton */}
        <div className="mb-10">
          <div className="h-10 w-72 bg-slate-200 rounded-lg animate-pulse" />

          <div className="h-4 w-96 bg-slate-200 rounded mt-4 animate-pulse" />
        </div>


        {/* 4 x 4 Skeleton Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {Array.from({ length: 16 }).map((_, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100"
            >

              {/* Image */}
              <div className="relative h-56 bg-slate-200 overflow-hidden">

                {/* Shimmer */}
                <div
                  className="absolute inset-0
                  -translate-x-full
                  animate-[shimmer_2s_infinite]
                  bg-gradient-to-r
                  from-transparent
                  via-white/60
                  to-transparent"
                />

              </div>


              {/* Content */}
              <div className="p-5 space-y-4">

                {/* Category */}
                <div className="h-4 w-20 bg-slate-200 rounded animate-pulse" />

                {/* Title */}
                <div className="space-y-2">

                  <div className="h-5 w-full bg-slate-200 rounded animate-pulse" />

                  <div className="h-5 w-3/4 bg-slate-200 rounded animate-pulse" />

                </div>


                {/* Description */}
                <div className="space-y-2">

                  <div className="h-3 w-full bg-slate-200 rounded animate-pulse" />

                  <div className="h-3 w-5/6 bg-slate-200 rounded animate-pulse" />

                  <div className="h-3 w-2/3 bg-slate-200 rounded animate-pulse" />

                </div>


                {/* Price + Rating */}
                <div className="flex justify-between items-center pt-3">

                  <div className="h-7 w-24 bg-slate-200 rounded animate-pulse" />

                  <div className="h-5 w-14 bg-slate-200 rounded animate-pulse" />

                </div>


                {/* Button */}
                <div className="h-12 w-full bg-slate-200 rounded-xl animate-pulse" />

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

            
        </div>
    );
}
