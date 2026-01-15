import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'cmb_cart_v1';

function safeParse(json, fallback) {
  try {
    const value = JSON.parse(json);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function normalizeItem(product, quantity) {
  return {
    id: product.id,
    name: product.name,
    priceLkr: Number(product.priceLkr) || 0,
    image: product.image,
    category: product.category,
    vendor: product.vendor,
    quantity: Number(quantity) || 1,
  };
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return safeParse(raw, []);
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const api = useMemo(() => {
    function addItem(product, quantity = 1) {
      setItems((prev) => {
        const idx = prev.findIndex((it) => it.id === product.id);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = { ...next[idx], quantity: next[idx].quantity + Number(quantity || 1) };
          return next;
        }
        return [...prev, normalizeItem(product, quantity)];
      });
    }

    function removeItem(id) {
      setItems((prev) => prev.filter((it) => it.id !== id));
    }

    function setQuantity(id, quantity) {
      const q = Math.max(1, Math.min(99, Number(quantity) || 1));
      setItems((prev) => prev.map((it) => (it.id === id ? { ...it, quantity: q } : it)));
    }

    function clear() {
      setItems([]);
    }

    const count = items.reduce((sum, it) => sum + (Number(it.quantity) || 0), 0);
    const subtotalLkr = items.reduce(
      (sum, it) => sum + (Number(it.priceLkr) || 0) * (Number(it.quantity) || 0),
      0
    );

    return {
      items,
      addItem,
      removeItem,
      setQuantity,
      clear,
      count,
      subtotalLkr,
      totalLkr: subtotalLkr,
    };
  }, [items]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
