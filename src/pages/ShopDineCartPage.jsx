import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, ShoppingCart } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { formatLkr } from '../data/shopDineProducts';

export default function ShopDineCartPage() {
  const cart = useCart();
  const navigate = useNavigate();
  const FALLBACK_IMAGE = '/images/shop-dine/placeholder.svg';

  return (
    <PageTransition>
      <Container className="py-12">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div>
            <Link to="/shop-dine" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to Shop & Dine
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Your Cart</h1>
            <p className="text-slate-500 mt-1">Review items and proceed to checkout.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => cart.clear()}
              disabled={cart.items.length === 0}
              className="rounded-xl"
            >
              Clear
            </Button>
            <Button
              onClick={() => navigate('/shop-dine/checkout')}
              disabled={cart.items.length === 0}
              className="rounded-xl"
            >
              Checkout
            </Button>
          </div>
        </div>

        {cart.items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-10 text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-4">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <div className="text-xl font-bold text-slate-900">Cart is empty</div>
            <p className="text-slate-500 mt-2">Browse the marketplace and add items to purchase.</p>
            <div className="mt-6">
              <Button to="/shop-dine" className="rounded-xl">Go to Shop & Dine</Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-4">
              {cart.items.map((it, idx) => (
                <motion.div
                  key={it.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-md p-5 flex gap-4"
                >
                  <img
                    src={it.image}
                    alt={it.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                    className="w-24 h-24 rounded-2xl object-cover border border-slate-100"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{it.vendor} • {it.category}</div>
                        <div className="text-lg font-bold text-slate-900 mt-1">{it.name}</div>
                        <div className="text-slate-600 font-bold mt-1">{formatLkr(it.priceLkr)}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => cart.removeItem(it.id)}
                        className="h-10 w-10 inline-flex items-center justify-center rounded-xl hover:bg-slate-50 text-slate-500"
                        aria-label="Remove"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-sm font-bold text-slate-600">Qty</span>
                      <input
                        type="number"
                        min={1}
                        max={99}
                        value={it.quantity}
                        onChange={(e) => cart.setQuantity(it.id, e.target.value)}
                        className="w-24 rounded-xl bg-slate-50 border border-slate-200 px-3 h-10 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      <div className="ml-auto text-sm font-bold text-slate-900">
                        Line Total: {formatLkr(it.priceLkr * it.quantity)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-7 sticky top-24">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Summary</div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-slate-600 font-bold">Items</div>
                  <div className="text-slate-900 font-bold">{cart.count}</div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-slate-600 font-bold">Subtotal</div>
                  <div className="text-slate-900 font-bold">{formatLkr(cart.subtotalLkr)}</div>
                </div>
                <div className="mt-4 h-px bg-slate-100" />
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-slate-900 font-extrabold">Total</div>
                  <div className="text-slate-900 font-extrabold text-lg">{formatLkr(cart.totalLkr)}</div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button onClick={() => navigate('/shop-dine/checkout')} className="w-full rounded-xl">
                    Proceed to Checkout
                  </Button>
                  <Button to="/shop-dine" variant="outline" className="w-full rounded-xl">
                    Continue Shopping
                  </Button>
                </div>

                <div className="mt-6 text-xs text-slate-500">
                  Demo marketplace: orders are mock and do not charge real payments.
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </PageTransition>
  );
}
