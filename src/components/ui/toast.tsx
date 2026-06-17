"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, X } from "lucide-react";

type ToastType = "success" | "error";
type ToastVariant = "default" | "email-copy";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  variant: ToastVariant;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, options?: { variant?: ToastVariant }) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: ToastType = "success", options?: { variant?: ToastVariant }) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => [...prev, { id, message, type, variant: options?.variant ?? "default" }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 1000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast 容器 - 顶部居中 */}
      <div className="pointer-events-none fixed top-24 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col gap-3 px-4">
        <AnimatePresence>
          {toasts.map((toast) => {
            const isEmailCopySuccess = toast.variant === "email-copy" && toast.type === "success";
            const isDefaultSuccess = toast.type === "success" && !isEmailCopySuccess;

            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`pointer-events-auto relative isolate overflow-hidden rounded-2xl border px-4 py-3 backdrop-blur-xl ${
                  isEmailCopySuccess
                    ? "border-primary/15 bg-white text-slate-900 shadow-[0_16px_38px_rgba(15,23,42,0.10)]"
                    : isDefaultSuccess
                      ? "border-primary/15 bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(8,12,20,0.94))] text-white shadow-[0_18px_46px_rgba(2,6,23,0.4)]"
                      : "border-rose-400/18 bg-[linear-gradient(180deg,rgba(38,10,18,0.95),rgba(20,8,12,0.92))] text-white shadow-[0_18px_46px_rgba(127,29,29,0.28)]"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 ${
                    isEmailCopySuccess
                      ? "bg-white"
                      : isDefaultSuccess
                        ? "bg-[linear-gradient(135deg,rgba(59,130,246,0.08)_0%,transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_100%)]"
                        : "bg-[linear-gradient(135deg,rgba(251,113,133,0.08)_0%,transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_100%)]"
                  }`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-y-3 left-0 w-[2px] rounded-full ${
                    isEmailCopySuccess
                      ? "bg-[linear-gradient(180deg,rgba(59,130,246,0.98),rgba(139,92,246,0.86),rgba(16,185,129,0.72))]"
                      : isDefaultSuccess
                        ? "bg-primary/70"
                        : "bg-rose-300/65"
                  }`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ${
                    isEmailCopySuccess ? "ring-white/75" : "ring-white/8"
                  }`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-5 top-0 h-px ${
                    isEmailCopySuccess
                      ? "bg-[linear-gradient(90deg,rgba(59,130,246,0.48),rgba(139,92,246,0.3),rgba(16,185,129,0.2),rgba(255,255,255,0))]"
                      : isDefaultSuccess
                        ? "bg-primary/20"
                        : "bg-rose-300/20"
                  }`}
                />

                <div className="relative z-10 flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.05, type: "spring", stiffness: 260, damping: 18 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                      isEmailCopySuccess
                        ? "border-primary/20 bg-white text-primary shadow-[0_1px_3px_rgba(59,130,246,0.14)]"
                        : isDefaultSuccess
                          ? "border-primary/15 bg-primary/10 text-primary"
                          : "border-rose-400/18 bg-rose-400/10 text-rose-100"
                    }`}
                  >
                    {isEmailCopySuccess ? (
                      <Mail className="h-4.5 w-4.5" />
                    ) : isDefaultSuccess ? (
                      <Check className="h-4.5 w-4.5" />
                    ) : (
                      <X className="h-4.5 w-4.5" />
                    )}
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-medium leading-5 tracking-[0.01em] ${isEmailCopySuccess ? "text-slate-900" : "text-white/92"}`}>
                      {toast.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
