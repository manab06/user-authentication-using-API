import { lazy, Suspense } from "react";
import { ProductPage } from "../../../pages/ProductPage";

function LazyLodingForProductPage() {
  //   const HeavyDashboard = lazy(() => import("../../../pages/ProductPage"));
  return (
    <div>
      <Suspense
        fallback={
          <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 p-8 animate-pulse">
            {/* Hero Skeleton */}
            <div className="max-w-7xl mx-auto">
              <div className="h-56 rounded-3xl bg-sky-200 mb-10"></div>

              {/* Category Buttons */}
              <div className="flex gap-3 mb-10">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="h-10 w-28 rounded-full bg-sky-200"
                  ></div>
                ))}
              </div>

              {/* Product Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    {/* Image */}
                    <div className="h-56 bg-slate-200"></div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="h-6 w-3/4 bg-slate-200 rounded mb-4"></div>
                      <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                      <div className="h-4 w-5/6 bg-slate-200 rounded mb-6"></div>

                      <div className="flex justify-between items-center mb-5">
                        <div className="h-7 w-20 bg-slate-200 rounded"></div>
                        <div className="h-5 w-12 bg-slate-200 rounded"></div>
                      </div>

                      <div className="h-12 w-full bg-sky-200 rounded-xl"></div>
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
