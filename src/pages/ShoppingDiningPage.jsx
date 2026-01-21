import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Plus, ShoppingCart, Filter, X, Search, Sparkles } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { SHOP_DINE_CATEGORIES, SHOP_DINE_PRODUCTS, formatLkr } from '../data/shopDineProducts';
import { useCart } from '../context/CartContext';

export default function ShoppingDiningPage() {
  const cart = useCart();
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const FALLBACK_IMAGE = '/images/shop-dine/placeholder.svg';

  useEffect(() => {
    if (!selected) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(e) {
      if (e.key === 'Escape') setSelected(null);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selected]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SHOP_DINE_PRODUCTS.filter((p) => {
      const catOk = category === 'All' ? true : p.category === category;
      const qOk = !q
        ? true
        : `${p.name} ${p.vendor} ${p.category}`.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [category, query]);

  const showClear = query.trim().length > 0 || category !== 'All';

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative h-[46vh] min-h-[380px] bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${require('../constants/images').IMAGES.COMMON.HEADER_BG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />

        <Container className="h-full flex flex-col justify-center relative z-10 pt-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-extrabold text-xs tracking-widest mb-4">
              <Sparkles className="w-4 h-4 text-accent" /> RELAX & INDULGE
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">Shop & Dine</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              Curated food, souvenirs, and travel essentials — add to cart and checkout (demo).
            </p>
          </motion.div>
        </Container>
      </div>

      <Container className="py-14 pb-28 lg:pb-20">


        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelected(p);
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/70 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/15"
            >
              <div className="h-44 overflow-hidden bg-slate-100 relative">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
                <div className="absolute left-4 bottom-3 text-xs font-extrabold tracking-widest uppercase text-white/90">
                  View details
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{p.vendor} • {p.category}</div>
                <div className="text-lg font-bold text-slate-900 mt-1 leading-tight">{p.name}</div>
                <div className="text-slate-600 text-sm mt-1 line-clamp-2">{p.description}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-slate-900 font-extrabold">{formatLkr(p.priceLkr)}</div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      cart.addItem(p, 1);
                    }}
                    className="h-10 px-4 rounded-xl bg-slate-900 text-white font-extrabold text-sm hover:bg-primary transition-colors inline-flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10">
            <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-10 text-center shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Search className="w-7 h-7" />
              </div>
              <div className="mt-4 text-xl font-extrabold text-slate-900">No items found</div>
              <p className="mt-2 text-slate-600">
                Try a different search term or change the selected category.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setCategory('All');
                  }}
                  className="h-11 px-6 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-primary transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Product Details Popup */}
        {selected ? (
          <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
            <motion.button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-slate-900/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
              >
                <div className="flex items-center justify-between p-5 border-b border-slate-100">
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Item details</div>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="h-10 w-10 inline-flex items-center justify-center rounded-xl hover:bg-slate-50 text-slate-600"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-slate-100">
                    <img
                      src={selected.image}
                      alt={selected.name}
                      className="w-full h-64 md:h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{selected.vendor} • {selected.category}</div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-2 leading-tight">{selected.name}</h3>
                    <div className="text-slate-900 font-extrabold mt-3 text-lg">{formatLkr(selected.priceLkr)}</div>

                    <p className="text-slate-600 mt-4 leading-relaxed">
                      {selected.description}
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button
                        className="rounded-xl h-12 px-6"
                        onClick={() => {
                          cart.addItem(selected, 1);
                          setSelected(null);
                        }}
                      >
                        <Plus className="w-4 h-4" /> Add to Cart
                      </Button>

                      <Button
                        to="/shop-dine/cart"
                        variant="outline"
                        className="rounded-xl h-12 px-6"
                      >
                        <ShoppingCart className="w-4 h-4" /> Go to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : null}

        {/* Quick Cart Access (extra place) */}
        {cart.count > 0 ? (
          <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
            <div className="bg-white/90 backdrop-blur border border-slate-200 shadow-xl rounded-2xl p-3 flex items-center justify-between">
              <div className="text-sm font-bold text-slate-900">
                Cart: {cart.count} item{cart.count === 1 ? '' : 's'}
                <span className="text-slate-500 font-semibold"> • {formatLkr(cart.totalLkr)}</span>
              </div>
              <Button to="/shop-dine/cart" className="rounded-xl h-10 px-5">
                View Cart
              </Button>
            </div>
          </div>
        ) : (
          <div className="fixed bottom-5 right-5 z-40 lg:hidden">
            <Button to="/shop-dine/cart" variant="outline" className="rounded-2xl h-12 px-5 shadow-xl bg-white/90 backdrop-blur">
              <ShoppingCart className="w-5 h-5" /> Cart
            </Button>
          </div>
        )}

        <div className="hidden lg:block fixed bottom-6 right-6 z-40">
          <Button to="/shop-dine/cart" className="rounded-2xl h-12 px-6 shadow-2xl">
            <ShoppingCart className="w-5 h-5" /> Cart ({cart.count})
          </Button>
        </div>

      </Container>
    </PageTransition>
  );
}
