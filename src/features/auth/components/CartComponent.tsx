import { toast } from "react-toastify";
import { useCartProductStore } from "../store/CartStore";
import { Button } from '../../../components/UI/button/Button';
import { Link } from "react-router-dom";

export default function CartComponent() {
  const cart = useCartProductStore((state) => state.cart);
  const increaseQuantity = useCartProductStore(
    (state) => state.increaseQuantity
    
  );
  const decreaseQuantity = useCartProductStore(
    (state) => state.decreaseQuantity
  );
  const removeFromCart = useCartProductStore(
    (state) => state.removeFromCart
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold text-slate-800">
              🛒 Shopping Cart
            </h1>

            <p className="text-gray-500 mt-2">
              {cart.length} Item{cart.length !== 1 ? "s" : ""} in your cart
            </p>
          </div>
           <Link to="/products">
          <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Continue Shopping
          </Button>
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-20 text-center">
            <div className="text-8xl">🛒</div>

            <h2 className="text-3xl font-bold mt-6">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Looks like you haven't added anything yet.
            </p>

            <Button className="mt-8 bg-sky-600 text-white px-8 py-3 rounded-xl hover:bg-sky-700 transition">
              Shop Now
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left */}

            <div className="lg:col-span-2 space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-44 h-44 rounded-2xl object-cover"
                  />

                  <div className="flex-1 flex flex-col">

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Premium quality product with modern design.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

                      <span className="text-3xl font-bold text-sky-600">
                        Rs-{item.price * 98}
                      </span>

                      <div className="flex items-center gap-3">

                        <Button
                          onClick={() =>{ decreaseQuantity(item.id);
                                    toast.success("Item removed");
                          }}
                          className="w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 text-xl"
                        >
                          -
                        </Button>

                        <span className="text-xl font-semibold w-8 text-center">
                          {item.quantity}
                        </span>

                        <Button
                          onClick={() =>{ increaseQuantity(item.id);
                                toast.success("Item added")}}
                          className="w-10 h-10 rounded-full bg-sky-600 text-white hover:bg-sky-700"
                        >
                          +
                        </Button>

                      </div>

                      <Button
                        onClick={() =>{ removeFromCart(item.id)
                               toast.success("Item deleted")
                        }}
                        className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                      >
                       Delete
                      </Button>

                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* Right */}

            <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-10">

              <h2 className="text-3xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between text-lg">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>Tax</span>
                  <span>10%</span>
                </div>

                <hr />

                <div className="flex justify-between text-3xl font-bold">
                  <span>Total</span>
                  <span className="text-sky-600">
                    Rs-{total + 20}
                  </span>
                </div>

                <Button className="w-full mt-8 bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-4 rounded-2xl text-lg font-bold hover:opacity-90 transition">
                  Proceed to Checkout
                </Button>
                
                <Link to="/products">
                <Button className="w-full border-2 border-sky-600 text-sky-600 py-4 rounded-2xl text-lg font-semibold hover:bg-sky-50 transition">
                  Continue Shopping
                </Button>
                </Link>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}