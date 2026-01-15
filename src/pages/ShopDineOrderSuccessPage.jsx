import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Receipt, ArrowRight } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { formatLkr } from '../data/shopDineProducts';

const ORDERS_KEY = 'cmb_orders_v1';

function loadOrders() {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export default function ShopDineOrderSuccessPage() {
  const [params] = useSearchParams();
  const orderId = params.get('orderId');

  const order = useMemo(() => {
    const list = loadOrders();
    return list.find((o) => o?.id === orderId);
  }, [orderId]);

  return (
    <PageTransition>
      <Container className="py-14">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl border border-slate-100 shadow-xl p-10 text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Order Confirmed</h1>
            <p className="text-slate-500 mt-2">Your request has been submitted successfully (demo).</p>

            <div className="mt-8 text-left bg-slate-50 rounded-2xl border border-slate-100 p-6">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <Receipt className="w-5 h-5" /> Order Details
              </div>
              <div className="mt-3 text-sm text-slate-600">
                <div><span className="font-bold text-slate-800">Order ID:</span> {orderId || '—'}</div>
                {order?.totals ? (
                  <div className="mt-2"><span className="font-bold text-slate-800">Total:</span> {formatLkr(order.totals.totalLkr)}</div>
                ) : null}
              </div>

              {order?.items?.length ? (
                <div className="mt-5 space-y-3">
                  {order.items.slice(0, 5).map((it) => (
                    <div key={it.id} className="flex items-center justify-between gap-3">
                      <div className="text-sm font-bold text-slate-900">{it.name} <span className="text-slate-500 font-medium">x{it.quantity}</span></div>
                      <div className="text-sm font-bold text-slate-900">{formatLkr(it.priceLkr * it.quantity)}</div>
                    </div>
                  ))}
                  {order.items.length > 5 ? (
                    <div className="text-xs text-slate-500">+ {order.items.length - 5} more item(s)</div>
                  ) : null}
                </div>
              ) : (
                <div className="mt-4 text-sm text-slate-500">Order details not found (localStorage cleared).</div>
              )}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/shop-dine" className="rounded-xl">
                Continue Shopping <ArrowRight className="w-4 h-4" />
              </Button>
              <Button to="/contact" variant="outline" className="rounded-xl">
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </PageTransition>
  );
}
