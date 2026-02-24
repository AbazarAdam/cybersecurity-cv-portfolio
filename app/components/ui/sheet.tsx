"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Sheet Context                                                      */
/* ------------------------------------------------------------------ */

interface SheetContextValue {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

function useSheet() {
    const ctx = React.useContext(SheetContext);
    if (!ctx) throw new Error("Sheet components must be used within <Sheet />");
    return ctx;
}

/* ------------------------------------------------------------------ */
/*  Root                                                               */
/* ------------------------------------------------------------------ */

interface SheetProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

function Sheet({ children, open: controlledOpen, onOpenChange }: SheetProps) {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const open = controlledOpen ?? internalOpen;
    const setOpen = React.useCallback(
        (v: React.SetStateAction<boolean>) => {
            const next = typeof v === "function" ? v(open) : v;
            setInternalOpen(next);
            onOpenChange?.(next);
        },
        [open, onOpenChange]
    );

    return (
        <SheetContext.Provider value={{ open, setOpen }}>
            {children}
        </SheetContext.Provider>
    );
}

/* ------------------------------------------------------------------ */
/*  Trigger                                                            */
/* ------------------------------------------------------------------ */

const SheetTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ onClick, ...props }, ref) => {
    const { setOpen } = useSheet();
    return (
        <button
            ref={ref}
            type="button"
            onClick={(e) => {
                setOpen((prev) => !prev);
                onClick?.(e);
            }}
            {...props}
        />
    );
});
SheetTrigger.displayName = "SheetTrigger";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

interface SheetContentProps {
    children: React.ReactNode;
    className?: string;
    side?: "top" | "right" | "bottom" | "left";
}

function SheetContent({
    children,
    className,
    side = "top",
}: SheetContentProps) {
    const { open, setOpen } = useSheet();

    const variants = {
        top: { hidden: { y: "-100%" }, visible: { y: 0 } },
        bottom: { hidden: { y: "100%" }, visible: { y: 0 } },
        left: { hidden: { x: "-100%" }, visible: { x: 0 } },
        right: { hidden: { x: "100%" }, visible: { x: 0 } },
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    {/* Panel */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants[side]}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className={cn(
                            "fixed z-50 bg-background/95 border-b border-neon-blue/10 backdrop-blur-xl shadow-2xl",
                            side === "top" && "inset-x-0 top-0",
                            side === "bottom" && "inset-x-0 bottom-0",
                            side === "left" && "inset-y-0 left-0",
                            side === "right" && "inset-y-0 right-0",
                            className
                        )}
                    >
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 rounded-full p-1.5 text-foreground-secondary transition-colors hover:bg-neon-blue/10 hover:text-neon-blue"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/* ------------------------------------------------------------------ */
/*  Close                                                              */
/* ------------------------------------------------------------------ */

const SheetClose = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ onClick, ...props }, ref) => {
    const { setOpen } = useSheet();
    return (
        <button
            ref={ref}
            type="button"
            onClick={(e) => {
                setOpen(false);
                onClick?.(e);
            }}
            {...props}
        />
    );
});
SheetClose.displayName = "SheetClose";

export { Sheet, SheetTrigger, SheetContent, SheetClose };
