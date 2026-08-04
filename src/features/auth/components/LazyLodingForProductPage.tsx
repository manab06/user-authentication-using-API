import { lazy, Suspense } from "react";
import { ProductPage } from "../../../pages/ProductPage";

function LazyLodingForProductPage() {
  //   const HeavyDashboard = lazy(() => import("../../../pages/ProductPage"));
  return (
    <div>
  <Suspense
    fallback={
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 overflow-hidden">

        {/* Animated background blobs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse [animation-delay:700ms]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-10">

          {/* ================= HERO ================= */}
          <div className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-r from-sky-200 via-cyan-100 to-sky-200 mb-10 shadow-xl">

            {/* Shimmer */}
            <div
              className="
                absolute inset-0
                -translate-x-full
                animate-[shimmer_2s_infinite]
                bg-gradient-to-r
                from-transparent
                via-white/60
                to-transparent
              "
            />

            <div className="absolute inset-0 p-10 flex flex-col justify-center">

              {/* Heading */}
              <div className="h-10 w-80 bg-white/60 rounded-xl animate-pulse" />

              {/* Description */}
              <div className="h-5 w-[500px] max-w-full bg-white/50 rounded-lg mt-5 animate-pulse" />

              <div className="h-5 w-80 bg-white/40 rounded-lg mt-3 animate-pulse" />

              {/* Search */}
              <div className="flex gap-4 mt-7">
                <div className="h-12 flex-1 max-w-xl bg-white/70 rounded-xl animate-pulse" />
                <div className="h-12 w-28 bg-white/60 rounded-xl animate-pulse" />
              </div>

            </div>
          </div>


          {/* ================= CATEGORY SKELETON ================= */}
          <div className="mb-12">

            <div className="h-6 w-32 bg-slate-200 rounded-lg mb-5 animate-pulse" />

            <div className="flex gap-3 flex-wrap">

              {[1, 2, 3, 4, 5, 6, 7].map((item) => (

                <div
                  key={item}
                  className={`
                    relative overflow-hidden
                    h-10
                    ${item % 2 === 0 ? "w-32" : "w-24"}
                    rounded-full
                    bg-white
                    shadow-md
                    animate-[float_2.5s_ease-in-out_infinite]
                  `}
                  style={{
                    animationDelay: `${item * 120}ms`,
                  }}
                >

                  {/* shimmer */}
                  <div
                    className="
                      absolute inset-0
                      -translate-x-full
                      animate-[shimmer_1.8s_infinite]
                      bg-gradient-to-r
                      from-transparent
                      via-slate-100
                      to-transparent
                    "
                  />

                </div>

              ))}

            </div>
          </div>


          {/* ================= PRODUCT GRID ================= */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {Array.from({ length: 12 }).map((_, index) => (

              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-3xl
                  shadow-lg
                  overflow-hidden
                  border border-slate-100
                  animate-[float_3s_ease-in-out_infinite]
                "
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >

                {/* Product Image */}
                <div className="relative h-56 bg-slate-200 overflow-hidden">

                  {/* shimmer */}
                  <div
                    className="
                      absolute inset-0
                      -translate-x-full
                      animate-[shimmer_1.7s_infinite]
                      bg-gradient-to-r
                      from-transparent
                      via-white/70
                      to-transparent
                    "
                    style={{
                      animationDelay: `${index * 80}ms`,
                    }}
                  />

                  {/* Fake category badge */}
                  <div className="absolute top-4 left-4 h-7 w-20 bg-white/70 rounded-full animate-pulse" />

                  {/* Fake heart */}
                  <div className="absolute top-4 right-4 w-9 h-9 bg-white/70 rounded-full animate-pulse" />

                </div>


                {/* Card Content */}
                <div className="p-5">

                  {/* Category */}
                  <div className="h-3 w-16 bg-slate-200 rounded-full mb-4 animate-pulse" />


                  {/* Title */}
                  <div className="space-y-2">

                    <div className="h-5 w-full bg-slate-200 rounded-lg animate-pulse" />

                    <div className="h-5 w-3/4 bg-slate-200 rounded-lg animate-pulse" />

                  </div>


                  {/* Description */}
                  <div className="space-y-2 mt-4">

                    <div className="h-3 w-full bg-slate-100 rounded animate-pulse" />

                    <div className="h-3 w-5/6 bg-slate-100 rounded animate-pulse" />

                    <div className="h-3 w-2/3 bg-slate-100 rounded animate-pulse" />

                  </div>


                  {/* Price + Rating */}
                  <div className="flex justify-between items-center mt-6">

                    <div className="h-8 w-24 bg-slate-200 rounded-lg animate-pulse" />

                    <div className="h-5 w-14 bg-slate-200 rounded-full animate-pulse" />

                  </div>


                  {/* Button */}
                  <div className="relative overflow-hidden h-12 w-full bg-gradient-to-r from-sky-200 to-cyan-200 rounded-xl mt-5">

                    <div
                      className="
                        absolute inset-0
                        -translate-x-full
                        animate-[shimmer_1.5s_infinite]
                        bg-gradient-to-r
                        from-transparent
                        via-white/60
                        to-transparent
                      "
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </div>
    }
  >
    <ProductPage />
  </Suspense>
</div>
  );
}

export { LazyLodingForProductPage };
