import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, CreditCard } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { formatLkr } from '../data/shopDineProducts';

const ORDERS_KEY = 'cmb_orders_v1';

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

function isPhone(value) {
  return /^\+?[0-9\s\-()]{7,}$/.test(String(value || '').trim());
}

export default function ShopDineCheckoutPage() {
  const cart = useCart();
  const navigate = useNavigate();
  const FALLBACK_IMAGE = '/images/shop-dine/placeholder.svg';

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    terminal: 'T1',
    notes: '',
    payment: 'counter',
  });

  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!values.fullName.trim()) e.fullName = 'Please enter your name.';
    if (!values.email.trim()) e.email = 'Please enter your email.';
    else if (!isEmail(values.email)) e.email = 'Enter a valid email.';
    if (!values.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!isPhone(values.phone)) e.phone = 'Enter a valid phone number.';
    return e;
  }, [values]);

  function onChange(field) {
    return (event) => setValues((v) => ({ ...v, [field]: event.target.value }));
  }

  function onBlur(field) {
    return () => setTouched((t) => ({ ...t, [field]: true }));
  }

  function saveOrder(order) {
    try {
      const raw = localStorage.getItem(ORDERS_KEY);
      const list = raw ? JSON.parse(raw) : [];
      localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...(Array.isArray(list) ? list : [])]));
    } catch {
      localStorage.setItem(ORDERS_KEY, JSON.stringify([order]));
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    setTouched({ fullName: true, email: true, phone: true });

    if (cart.items.length === 0) return;
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);

    const orderId = `CMB-${Date.now()}`;
    const order = {
      id: orderId,
      createdAt: new Date().toISOString(),
      customer: {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        terminal: values.terminal,
        notes: values.notes,
      },
      payment: values.payment,
      items: cart.items,
      totals: { subtotalLkr: cart.subtotalLkr, totalLkr: cart.totalLkr },
      status: 'submitted',
    };

    saveOrder(order);
    cart.clear();

    // simulate small delay for UX
    await new Promise((r) => setTimeout(r, 350));

    navigate(`/shop-dine/order-success?orderId=${encodeURIComponent(orderId)}`);
  }

  return (
    <PageTransition>
      <Container className="py-12">
        <div className="mb-8">
          <Link to="/shop-dine/cart" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-bold">
            <ArrowLeft className="w-4 h-4" /> Back to Cart
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Checkout</h1>
          <p className="text-slate-500 mt-1">Complete your purchase (demo checkout).</p>
        </div>

        {cart.items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-10 text-center">
            <div className="text-xl font-bold text-slate-900">Cart is empty</div>
            <p className="text-slate-500 mt-2">Add items before checking out.</p>
            <div className="mt-6">
              <Button to="/shop-dine" className="rounded-xl">Go to Shop & Dine</Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Customer Details</div>
                  <div className="text-lg font-bold text-slate-900">Who is placing this order?</div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                    <Input
                      value={values.fullName}
                      onChange={onChange('fullName')}
                      onBlur={onBlur('fullName')}
                      placeholder="Your name"
                      className="bg-slate-50 border-slate-200 focus:bg-white h-12"
                    />
                    {touched.fullName && errors.fullName ? <p className="text-sm text-red-500">{errors.fullName}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Phone</label>
                    <Input
                      value={values.phone}
                      onChange={onChange('phone')}
                      onBlur={onBlur('phone')}
                      placeholder="+94..."
                      className="bg-slate-50 border-slate-200 focus:bg-white h-12"
                    />
                    {touched.phone && errors.phone ? <p className="text-sm text-red-500">{errors.phone}</p> : null}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                  <Input
                    value={values.email}
                    onChange={onChange('email')}
                    onBlur={onBlur('email')}
                    placeholder="name@example.com"
                    className="bg-slate-50 border-slate-200 focus:bg-white h-12"
                  />
                  {touched.email && errors.email ? <p className="text-sm text-red-500">{errors.email}</p> : null}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Terminal</label>
                    <select
                      value={values.terminal}
                      onChange={onChange('terminal')}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white"
                    >
                      <option value="T1">Terminal 1</option>
                      <option value="T2">Terminal 2</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Payment</label>
                    <select
                      value={values.payment}
                      onChange={onChange('payment')}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white"
                    >
                      <option value="counter">Pay at Counter</option>
                      <option value="card_demo">Card (Demo)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Notes (optional)</label>
                  <textarea
                    rows={4}
                    value={values.notes}
                    onChange={onChange('notes')}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all resize-none"
                    placeholder="Any special instructions..."
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" disabled={submitting} className="rounded-xl h-12 px-8">
                    {submitting ? 'Placing order...' : 'Place Order'}
                  </Button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-50 text-slate-600 p-4 rounded-xl border border-slate-100 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Demo checkout: no real payments are processed.
                </motion.div>
              </form>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-7 sticky top-24">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Order Summary</div>
                <div className="mt-4 space-y-3">
                  {cart.items.map((it) => (
                    <div key={it.id} className="flex items-center gap-3">
                      <img
                        src={it.image}
                        alt={it.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = FALLBACK_IMAGE;
                        }}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-100"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-bold text-slate-900 leading-tight">{it.name}</div>
                        <div className="text-xs text-slate-500 font-medium">Qty {it.quantity}</div>
                      </div>
                      <div className="text-sm font-bold text-slate-900">{formatLkr(it.priceLkr * it.quantity)}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 h-px bg-slate-100" />
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-slate-600 font-bold">Subtotal</div>
                  <div className="text-slate-900 font-bold">{formatLkr(cart.subtotalLkr)}</div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-slate-900 font-extrabold">Total</div>
                  <div className="text-slate-900 font-extrabold text-lg">{formatLkr(cart.totalLkr)}</div>
                </div>

                <div className="mt-6">
                  <Button to="/shop-dine/cart" variant="outline" className="w-full rounded-xl">
                    Edit Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </PageTransition>
  );
}
