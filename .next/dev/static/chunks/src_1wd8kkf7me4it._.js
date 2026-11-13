(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimatedNumber.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedNumber",
    ()=>AnimatedNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AnimatedNumber({ value, decimals = 0, suffix = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedNumber.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (reduce) {
                el.textContent = value.toFixed(decimals) + suffix;
                from.current = value;
                return;
            }
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(from.current, value, {
                duration: 0.9,
                ease: "easeOut",
                onUpdate: {
                    "AnimatedNumber.useEffect.c": (v)=>{
                        el.textContent = v.toFixed(decimals) + suffix;
                        from.current = v;
                    }
                }["AnimatedNumber.useEffect.c"]
            });
            return ({
                "AnimatedNumber.useEffect": ()=>c.stop()
            })["AnimatedNumber.useEffect"];
        }
    }["AnimatedNumber.useEffect"], [
        value,
        decimals,
        suffix,
        reduce
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: 0..toFixed(decimals) + suffix
    }, void 0, false, {
        fileName: "[project]/src/components/AnimatedNumber.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_s(AnimatedNumber, "EmAJhK3xueTPEMBkh0bxJpA1BT8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = AnimatedNumber;
var _c;
__turbopack_context__.k.register(_c, "AnimatedNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/filter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Brand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Overview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Wall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Wall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Settings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Celebration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Celebration.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function App() {
    _s();
    const { ready, cards, owned, percent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("set");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [binder, setBinder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[view]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyView"])(cards, filter, sort, query)
    }["App.useMemo[view]"], [
        cards,
        filter,
        sort,
        query
    ]);
    const sigKey = `${filter}|${sort}|${query}`;
    const enterBinder = ()=>{
        setBinder(true);
        document.documentElement.requestFullscreen?.().catch(()=>{});
    };
    const exitBinder = ()=>{
        setBinder(false);
        if (document.fullscreenElement) document.exitFullscreen().catch(()=>{});
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!binder) return;
            const k = {
                "App.useEffect.k": (e)=>e.key === "Escape" && !openId && exitBinder()
            }["App.useEffect.k"];
            addEventListener("keydown", k);
            document.body.style.overflow = "hidden";
            return ({
                "App.useEffect": ()=>{
                    removeEventListener("keydown", k);
                    document.body.style.overflow = "";
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        binder,
        openId
    ]);
    const open = (c)=>setOpenId(c.id);
    const wall = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Wall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wall"], {
        cards: view,
        sort: sort,
        onOpen: open,
        sigKey: sigKey
    }, void 0, false, {
        fileName: "[project]/src/components/App.tsx",
        lineNumber: 46,
        columnNumber: 16
    }, this);
    const controls = (compact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {
            filter: filter,
            setFilter: setFilter,
            sort: sort,
            setSort: setSort,
            query: query,
            setQuery: setQuery,
            onBinder: compact ? exitBinder : enterBinder,
            count: view.length,
            compact: compact
        }, void 0, false, {
            fileName: "[project]/src/components/App.tsx",
            lineNumber: 48,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Background"], {}, void 0, false, {
                fileName: "[project]/src/components/App.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: !ready && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[70] flex flex-col items-center justify-center bg-void",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                scale: [
                                    1,
                                    1.15,
                                    1
                                ],
                                opacity: [
                                    0.6,
                                    1,
                                    0.6
                                ]
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 1.6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TigerEye"], {
                                className: "h-20 w-20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/App.tsx",
                                lineNumber: 57,
                                columnNumber: 132
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 font-display text-xs tracking-[0.5em] text-muted",
                            children: "UNLOCKING VAULT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/App.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 border-b border-line bg-void/80 backdrop-blur-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-2 px-4 pt-[env(safe-area-inset-top)] sm:h-[68px] sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-3 sm:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-display text-sm font-bold text-ink",
                                            children: [
                                                owned,
                                                " / ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/App.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] tracking-[0.25em] text-muted",
                                            children: [
                                                percent.toFixed(2),
                                                "% COMPLETE"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/App.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/App.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-9 w-1.5 flex-col justify-end overflow-hidden rounded bg-slab",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "w-full bg-tiger",
                                        initial: false,
                                        animate: {
                                            height: `${percent}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/App.tsx",
                                        lineNumber: 71,
                                        columnNumber: 98
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/App.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mr-1 text-right sm:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-display text-xs font-bold text-ink",
                                            children: [
                                                owned,
                                                "/",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/App.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] tracking-[0.15em] text-muted",
                                            children: [
                                                percent.toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/App.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/App.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                    fileName: "[project]/src/components/App.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSettings(true),
                                    "aria-label": "Settings",
                                    className: "rounded-lg border border-line p-2.5 text-silver transition hover:border-ember/60 hover:text-ember sm:p-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/App.tsx",
                                        lineNumber: 79,
                                        columnNumber: 194
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/App.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/App.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                        fileName: "[project]/src/components/App.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overview"], {
                        onOpen: open,
                        onShowMissing: ()=>{
                            setFilter("missing");
                            document.getElementById("wall")?.scrollIntoView({
                                behavior: "smooth"
                            });
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/App.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "wall",
                        className: "mx-auto max-w-[1500px] px-3 sm:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs tracking-[0.5em] text-ember",
                                        children: "THE WALL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/App.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display mt-2 text-xl font-black text-ink sm:text-3xl",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"],
                                            " SLABS · ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-tiger",
                                                children: [
                                                    owned,
                                                    " ILLUMINATED"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/App.tsx",
                                                lineNumber: 90,
                                                columnNumber: 110
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/App.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/App.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            controls(false),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: wall
                            }, void 0, false, {
                                fileName: "[project]/src/components/App.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/App.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/App.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/components/App.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: binder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[45] overflow-y-auto bg-void px-3 pb-16 pt-3 sm:px-6 sm:pt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-5 max-w-[1700px]",
                            children: controls(true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-[1700px]",
                            children: wall
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/App.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: openId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardModal"], {
                    id: openId,
                    onClose: ()=>setOpenId(null)
                }, openId, false, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 107,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/App.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: settings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings"], {
                    onClose: ()=>setSettings(false)
                }, void 0, false, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 108,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/App.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Celebration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Celebration"], {}, void 0, false, {
                fileName: "[project]/src/components/App.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/App.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(App, "dZke5BYHaoGu2PCUXEb9LWmWcHw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Background",
    ()=>Background
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Background() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Background.useEffect": ()=>{
            const canvas = ref.current;
            const ctx = canvas.getContext("2d");
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const mouse = {
                x: -9999,
                y: -9999
            };
            let w = 0, h = 0, raf = 0;
            let pts = [];
            const resize = {
                "Background.useEffect.resize": ()=>{
                    w = innerWidth;
                    h = innerHeight;
                    canvas.width = w * dpr;
                    canvas.height = h * dpr;
                    canvas.style.width = w + "px";
                    canvas.style.height = h + "px";
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    const n = Math.min(110, Math.floor(w * h / 14000));
                    pts = Array.from({
                        length: n
                    }, {
                        "Background.useEffect.resize": ()=>({
                                x: Math.random() * w,
                                y: Math.random() * h,
                                vx: (Math.random() - 0.5) * 0.4,
                                vy: (Math.random() - 0.5) * 0.4,
                                gold: Math.random() > 0.55
                            })
                    }["Background.useEffect.resize"]);
                }
            }["Background.useEffect.resize"];
            const draw = {
                "Background.useEffect.draw": (t)=>{
                    ctx.clearRect(0, 0, w, h);
                    const horizon = h * 0.55;
                    const off = t * 0.00006 % 1;
                    ctx.lineWidth = 1;
                    for(let i = 0; i < 18; i++){
                        const p = (i + off) / 18;
                        const y = horizon + Math.pow(p, 2.2) * (h - horizon);
                        ctx.strokeStyle = `rgba(255,138,50,${0.04 + p * 0.14})`;
                        ctx.beginPath();
                        ctx.moveTo(0, y);
                        ctx.lineTo(w, y);
                        ctx.stroke();
                    }
                    ctx.strokeStyle = "rgba(214,166,75,0.10)";
                    for(let i = -14; i <= 14; i++){
                        ctx.beginPath();
                        ctx.moveTo(w / 2 + i * 20, horizon);
                        ctx.lineTo(w / 2 + i * w * 0.09, h);
                        ctx.stroke();
                    }
                    for (const p of pts){
                        if (!reduce) {
                            p.x += p.vx;
                            p.y += p.vy;
                        }
                        if (p.x < 0 || p.x > w) p.vx *= -1;
                        if (p.y < 0 || p.y > h) p.vy *= -1;
                        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
                        if (d < 140 && d > 0) {
                            p.x += dx / d * 1.2;
                            p.y += dy / d * 1.2;
                        }
                    }
                    for(let i = 0; i < pts.length; i++){
                        for(let j = i + 1; j < pts.length; j++){
                            const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
                            if (d < 130) {
                                ctx.strokeStyle = `rgba(255,170,90,${0.2 * (1 - d / 130)})`;
                                ctx.beginPath();
                                ctx.moveTo(pts[i].x, pts[i].y);
                                ctx.lineTo(pts[j].x, pts[j].y);
                                ctx.stroke();
                            }
                        }
                        ctx.fillStyle = pts[i].gold ? "rgba(240,205,130,0.85)" : "rgba(255,160,90,0.85)";
                        ctx.beginPath();
                        ctx.arc(pts[i].x, pts[i].y, 1.4, 0, 7);
                        ctx.fill();
                    }
                    if (!reduce) raf = requestAnimationFrame(draw);
                }
            }["Background.useEffect.draw"];
            const move = {
                "Background.useEffect.move": (e)=>{
                    mouse.x = e.clientX;
                    mouse.y = e.clientY;
                }
            }["Background.useEffect.move"];
            resize();
            addEventListener("resize", resize);
            addEventListener("mousemove", move);
            raf = requestAnimationFrame(draw);
            return ({
                "Background.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    removeEventListener("resize", resize);
                    removeEventListener("mousemove", move);
                }
            })["Background.useEffect"];
        }
    }["Background.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-10 overflow-hidden bg-void",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb orb-a"
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb orb-b"
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 76,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb orb-c"
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 76,
                columnNumber: 65
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stripes absolute inset-0 opacity-70"
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: ref,
                className: "absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scanline"
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--c-void)_100%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Background.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(Background, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Background;
var _c;
__turbopack_context__.k.register(_c, "Background");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Brand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "TigerEye",
    ()=>TigerEye
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TigerEye({ className = "h-8 w-8" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 48 48",
        className: className,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "te",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#FF8A32"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Brand.tsx",
                            lineNumber: 6,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#D6A64B"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Brand.tsx",
                            lineNumber: 6,
                            columnNumber: 50
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Brand.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Brand.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 24C10 10 38 10 46 24C38 38 10 38 2 24Z",
                fill: "none",
                stroke: "url(#te)",
                strokeWidth: "2.2"
            }, void 0, false, {
                fileName: "[project]/src/components/Brand.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "24",
                cy: "24",
                rx: "5",
                ry: "11",
                fill: "url(#te)"
            }, void 0, false, {
                fileName: "[project]/src/components/Brand.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "24",
                cy: "24",
                rx: "1.6",
                ry: "9",
                fill: "#08090D"
            }, void 0, false, {
                fileName: "[project]/src/components/Brand.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 8l6 5M42 8l-6 5M4 40l7-4M44 40l-7-4",
                stroke: "#FF8A32",
                strokeWidth: "2",
                strokeLinecap: "round",
                opacity: ".7"
            }, void 0, false, {
                fileName: "[project]/src/components/Brand.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Brand.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = TigerEye;
function Logo({ size = "md" }) {
    const lg = size === "lg";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TigerEye, {
                className: lg ? "h-14 w-14" : "h-9 w-9"
            }, void 0, false, {
                fileName: "[project]/src/components/Brand.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "leading-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-tiger font-black ${lg ? "text-4xl" : "text-xl"}`,
                        style: {
                            fontFamily: "var(--font-kr)"
                        },
                        children: "호랑이"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Brand.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `font-display font-bold tracking-[0.35em] text-silver ${lg ? "mt-2 text-sm" : "mt-1 text-[10px]"}`,
                        children: "TIGER BINDER"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Brand.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Brand.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Brand.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = Logo;
var _c, _c1;
__turbopack_context__.k.register(_c, "TigerEye");
__turbopack_context__.k.register(_c1, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CardModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardModal",
    ()=>CardModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PsaSlab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PsaSlab.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const field = "w-full rounded-lg border border-line bg-void/70 px-3 py-2.5 text-base md:py-2 md:text-sm outline-none transition focus:border-ember/60";
const lab = "mb-1 block text-[11px] tracking-[0.25em] text-muted";
function CardModal({ id, onClose }) {
    _s();
    const { cards, update, setOwned, resetCard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const card = cards.find((c)=>c.id === id);
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(card.record.imageUrl ?? "");
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardModal.useEffect": ()=>{
            const k = {
                "CardModal.useEffect.k": (e)=>e.key === "Escape" && onClose()
            }["CardModal.useEffect.k"];
            addEventListener("keydown", k);
            return ({
                "CardModal.useEffect": ()=>removeEventListener("keydown", k)
            })["CardModal.useEffect"];
        }
    }["CardModal.useEffect"], [
        onClose
    ]);
    const r = card.record;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-50 flex justify-end",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/CardModal.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                role: "dialog",
                "aria-modal": true,
                "aria-label": card.displayName,
                initial: {
                    x: "100%"
                },
                animate: {
                    x: 0
                },
                exit: {
                    x: "100%"
                },
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 30
                },
                className: "relative h-full w-full max-w-[880px] overflow-y-auto border-l border-ember/30 bg-deep shadow-[-30px_0_80px_-20px_#ff8a3240] md:flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        "aria-label": "Close",
                        className: "absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2.5 text-silver hover:text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CardModal.tsx",
                            lineNumber: 33,
                            columnNumber: 154
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardModal.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center justify-center bg-gradient-to-b from-void to-deep p-5 pt-14 md:w-[360px] md:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                rotateY: 90,
                                opacity: 0
                            },
                            animate: {
                                rotateY: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.6
                            },
                            className: "w-full max-w-[230px] md:max-w-[300px] [perspective:900px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-[14px] ${card.owned ? "shadow-[0_0_60px_-8px_#ff8a32]" : ""}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PsaSlab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PsaSlab"], {
                                    card: card,
                                    large: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative aspect-[63/88] overflow-hidden rounded-[2px] slot-silhouette",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: card.image,
                                                alt: card.displayName,
                                                className: `h-full w-full object-cover ${card.owned ? "" : "locked-art"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this),
                                            !card.owned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-2 top-2 rounded-full bg-black/60 p-1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "h-4 w-4 text-ember"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CardModal.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 106
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 42,
                                                columnNumber: 35
                                            }, this),
                                            card.owned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "slab-shine absolute inset-0 overflow-hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 43,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CardModal.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, card.image + card.owned, false, {
                            fileName: "[project]/src/components/CardModal.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardModal.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-5 p-4 pb-[max(2rem,env(safe-area-inset-bottom))] sm:p-6 md:pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] tracking-[0.3em] text-ember",
                                        children: [
                                            card.category === "trainer" ? "TRAINER TAG TEAM" : "POKÉMON TAG TEAM",
                                            " · ",
                                            card.variant?.toUpperCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display mt-1 text-2xl font-bold text-ink",
                                        children: card.displayName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted",
                                        children: [
                                            card.setName,
                                            " · #",
                                            card.number,
                                            " · ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "text-xs",
                                                children: card.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 54,
                                                columnNumber: 81
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardModal.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOwned(card.id, true),
                                        className: `flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 font-bold tracking-wide transition ${card.owned ? "bg-tiger text-black shadow-[0_0_20px_#ff8a3280]" : "border border-ember/40 text-ember hover:bg-ember/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            card.owned ? "Owned" : "Mark as Owned"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOwned(card.id, false),
                                        className: `flex-1 rounded-lg py-2.5 font-bold tracking-wide transition ${!card.owned ? "bg-wash text-ink" : "border border-line text-silver hover:bg-wash"}`,
                                        children: card.owned ? "Mark as Missing" : "Missing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardModal.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex cursor-pointer items-center gap-3 rounded-lg border border-line bg-void/50 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: r.psa10,
                                        disabled: !card.owned,
                                        onChange: (e)=>update(card.id, {
                                                psa10: e.target.checked
                                            }),
                                        className: "h-4 w-4 accent-[#FF8A32]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "h-4 w-4 text-gold"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: [
                                            "Confirmed ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "PSA 10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 69,
                                                columnNumber: 49
                                            }, this),
                                            " Gem Mint slab ",
                                            !card.owned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted",
                                                children: "(mark owned first)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 69,
                                                columnNumber: 93
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardModal.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-3 min-[420px]:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: lab,
                                                children: "ACQUISITION DATE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 73,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                className: field,
                                                value: r.acquiredDate ?? "",
                                                onChange: (e)=>update(card.id, {
                                                        acquiredDate: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 73,
                                                columnNumber: 65
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: lab,
                                                children: "PURCHASE PRICE (OPTIONAL)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 74,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                step: "0.01",
                                                placeholder: "0.00",
                                                className: field,
                                                value: r.price ?? "",
                                                onChange: (e)=>update(card.id, {
                                                        price: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 74,
                                                columnNumber: 74
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardModal.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: lab,
                                        children: "CARD NAME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 76,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: field,
                                        value: r.nameOverride ?? card.name,
                                        onChange: (e)=>update(card.id, {
                                                nameOverride: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 76,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardModal.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: lab,
                                        children: "PERSONAL NOTES"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 77,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 3,
                                        className: field,
                                        placeholder: "Cert number, where you found it…",
                                        value: r.notes ?? "",
                                        onChange: (e)=>update(card.id, {
                                                notes: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 77,
                                        columnNumber: 61
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardModal.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-line p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: lab,
                                        children: [
                                            "CARD IMAGE · URL OR LOCAL PATH (e.g. /cards/",
                                            card.id,
                                            ".png)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: field,
                                                placeholder: "https://…  or  /cards/…",
                                                value: url,
                                                onChange: (e)=>setUrl(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    update(card.id, {
                                                        imageUrl: url.trim() || undefined
                                                    });
                                                },
                                                className: "rounded-lg bg-wash px-3 text-sm font-semibold hover:bg-wash",
                                                children: "Apply"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>fileRef.current?.click(),
                                                className: "flex items-center gap-1.5 rounded-lg border border-ember/40 px-3 py-1.5 text-sm text-ember hover:bg-ember/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CardModal.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 185
                                                    }, this),
                                                    " Upload image"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setUrl("");
                                                    update(card.id, {
                                                        imageUrl: undefined
                                                    });
                                                },
                                                className: "flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm text-silver hover:bg-wash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CardModal.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 211
                                                    }, this),
                                                    " Use default"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: fileRef,
                                                type: "file",
                                                accept: "image/*",
                                                hidden: true,
                                                onChange: async (e)=>{
                                                    const f = e.target.files?.[0];
                                                    if (!f) return;
                                                    try {
                                                        const d = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileToDataUrl"])(f);
                                                        update(card.id, {
                                                            imageUrl: d
                                                        });
                                                        setUrl("");
                                                        setErr("");
                                                    } catch  {
                                                        setErr("Could not read that image.");
                                                    }
                                                    e.target.value = "";
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardModal.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-red-400",
                                        children: err
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardModal.tsx",
                                        lineNumber: 94,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardModal.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (confirm("Clear all saved data for this card?")) {
                                        resetCard(card.id);
                                        setUrl("");
                                    }
                                },
                                className: "text-xs tracking-widest text-muted hover:text-red-400",
                                children: "RESET THIS CARD"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CardModal.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CardModal.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CardModal.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CardModal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(CardModal, "eT6O6C3JSvM5HlYNW0uBBFcwcIk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = CardModal;
var _c;
__turbopack_context__.k.register(_c, "CardModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CardSlot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardSlot",
    ()=>CardSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PsaSlab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PsaSlab.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CardSlotBase({ card, onOpen, justUnlocked, index }) {
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5), my = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5);
    const rx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(my, [
        0,
        1
    ], [
        10,
        -10
    ]), {
        stiffness: 220,
        damping: 20
    });
    const ry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mx, [
        0,
        1
    ], [
        -12,
        12
    ]), {
        stiffness: 220,
        damping: 20
    });
    const glare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])([
        mx,
        my
    ], {
        "CardSlotBase.useTransform[glare]": ([x, y])=>`radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,.28), transparent 55%)`
    }["CardSlotBase.useTransform[glare]"]);
    const owned = card.owned;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        type: "button",
        onClick: ()=>onOpen(card),
        "aria-label": `${card.displayName}, ${card.setName} ${card.number}, ${owned ? "owned" : "missing"}`,
        initial: reduce ? false : {
            opacity: 0,
            y: 18
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: Math.min(index, 24) * 0.02,
            duration: 0.4
        },
        onPointerMove: (e)=>{
            if (e.pointerType !== "mouse") return;
            const r = e.currentTarget.getBoundingClientRect();
            mx.set((e.clientX - r.left) / r.width);
            my.set((e.clientY - r.top) / r.height);
        },
        onPointerLeave: ()=>{
            mx.set(0.5);
            my.set(0.5);
        },
        whileHover: reduce ? undefined : {
            scale: 1.06,
            zIndex: 20
        },
        whileTap: {
            scale: 0.98
        },
        style: reduce ? undefined : {
            rotateX: rx,
            rotateY: ry,
            transformPerspective: 800
        },
        className: "group relative block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ember",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative rounded-[12px] transition-shadow duration-500 ${owned ? "shadow-[0_0_28px_-4px_#ff8a32bb] group-hover:shadow-[0_0_44px_0_#ff8a32]" : "shadow-[0_0_14px_-6px_#ff8a3255] group-hover:shadow-[0_0_24px_-4px_#ff8a32aa]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PsaSlab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PsaSlab"], {
                        card: card,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-[63/88] overflow-hidden rounded-[2px] slot-silhouette",
                            children: [
                                !failed && // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: card.image,
                                    alt: owned ? card.displayName : "",
                                    loading: "lazy",
                                    draggable: false,
                                    onError: ()=>setFailed(true),
                                    className: `h-full w-full object-cover transition-all duration-700 ${owned ? "" : "locked-art"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardSlot.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                !owned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-1.5 top-1.5 rounded-full bg-black/60 p-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "h-3.5 w-3.5 text-ember"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardSlot.tsx",
                                        lineNumber: 47,
                                        columnNumber: 97
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardSlot.tsx",
                                    lineNumber: 47,
                                    columnNumber: 24
                                }, this),
                                owned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "slab-shine absolute inset-0 overflow-hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardSlot.tsx",
                                    lineNumber: 48,
                                    columnNumber: 23
                                }, this),
                                !reduce && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "pointer-events-none absolute inset-0 mix-blend-overlay opacity-0 transition group-hover:opacity-100",
                                    style: {
                                        background: glare
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardSlot.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CardSlot.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardSlot.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    justUnlocked && !reduce && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "pointer-events-none absolute inset-0 bg-white",
                        initial: {
                            opacity: 0.9
                        },
                        animate: {
                            opacity: 0
                        },
                        transition: {
                            duration: 1.1
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardSlot.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CardSlot.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            justUnlocked && !reduce && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "pointer-events-none absolute inset-0 rounded-xl border-2 border-ember",
                        initial: {
                            scale: 1,
                            opacity: 1
                        },
                        animate: {
                            scale: 1.5,
                            opacity: 0
                        },
                        transition: {
                            duration: 1.2
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardSlot.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 text-gold",
                        initial: {
                            y: 0,
                            opacity: 1
                        },
                        animate: {
                            y: -34,
                            opacity: 0
                        },
                        transition: {
                            duration: 1.6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CardSlot.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardSlot.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CardSlot.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CardSlot.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(CardSlotBase, "yxEvIxHuUbJuPbVaHe9C/u6oP3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = CardSlotBase;
const CardSlot = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(CardSlotBase);
_c1 = CardSlot;
var _c, _c1;
__turbopack_context__.k.register(_c, "CardSlotBase");
__turbopack_context__.k.register(_c1, "CardSlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Celebration.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Celebration",
    ()=>Celebration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.mjs [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Celebration() {
    _s();
    const { celebration, dismissCelebration, owned } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const final = celebration?.at === 100;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Celebration.useEffect": ()=>{
            if (!celebration || final) return;
            const t = setTimeout(dismissCelebration, 4800);
            return ({
                "Celebration.useEffect": ()=>clearTimeout(t)
            })["Celebration.useEffect"];
        }
    }["Celebration.useEffect"], [
        celebration,
        final,
        dismissCelebration
    ]);
    const bits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Celebration.useMemo[bits]": ()=>Array.from({
                length: final ? 90 : 28
            }, {
                "Celebration.useMemo[bits]": (_, i)=>{
                    const r = {
                        "Celebration.useMemo[bits].r": (k)=>{
                            const v = Math.sin(i * 97.13 + k * 31.7) * 10000;
                            return v - Math.floor(v);
                        }
                    }["Celebration.useMemo[bits].r"];
                    return {
                        x: r(1) * 100,
                        d: 2 + r(2) * 3,
                        delay: r(3) * 1.5,
                        c: i % 2 ? "#FF8A32" : "#D6A64B",
                        s: 4 + r(4) * 8
                    };
                }
            }["Celebration.useMemo[bits]"])
    }["Celebration.useMemo[bits]"], [
        final
    ]);
    if (!celebration) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "data-theme": "dark",
        role: "alert",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        onClick: dismissCelebration,
        className: `fixed inset-0 z-[60] flex cursor-pointer flex-col items-center justify-center text-center ${final ? "bg-black/90" : "bg-black/60 backdrop-blur-sm"}`,
        children: [
            !reduce && bits.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "absolute top-0 rounded-sm",
                    style: {
                        left: `${b.x}%`,
                        width: b.s,
                        height: b.s * 1.6,
                        background: b.c
                    },
                    initial: {
                        y: -20,
                        rotate: 0,
                        opacity: 1
                    },
                    animate: {
                        y: "105vh",
                        rotate: 720
                    },
                    transition: {
                        duration: b.d,
                        delay: b.delay,
                        repeat: final ? Infinity : 0,
                        ease: "linear"
                    }
                }, i, false, {
                    fileName: "[project]/src/components/Celebration.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.4,
                    rotate: -10
                },
                animate: {
                    scale: 1,
                    rotate: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 180,
                    damping: 12
                },
                children: final ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                    className: "mx-auto h-24 w-24 text-gold drop-shadow-[0_0_40px_#ff8a32]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Celebration.tsx",
                    lineNumber: 26,
                    columnNumber: 18
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                    className: "mx-auto h-16 w-16 text-ember drop-shadow-[0_0_30px_#ff8a32]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Celebration.tsx",
                    lineNumber: 26,
                    columnNumber: 101
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Celebration.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.3
                },
                className: "px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-xs tracking-[0.5em] text-ember",
                        children: [
                            Math.round(celebration.at),
                            "% · ",
                            owned,
                            " CARDS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Celebration.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `font-display mt-3 font-black text-tiger ${final ? "text-3xl sm:text-6xl" : "text-3xl sm:text-5xl"}`,
                        children: celebration.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Celebration.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg text-silver/80",
                        children: celebration.sub
                    }, void 0, false, {
                        fileName: "[project]/src/components/Celebration.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 text-xs tracking-[0.3em] text-muted",
                        children: "CLICK TO CONTINUE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Celebration.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Celebration.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Celebration.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Celebration, "Wp1htAPvFXwd5gjvZMAS2X5hwvU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Celebration;
var _c;
__turbopack_context__.k.register(_c, "Celebration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Controls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Controls",
    ()=>Controls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.mjs [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/filter.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Controls(p) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass top-[68px] z-30 mx-auto flex max-w-7xl flex-col gap-3 rounded-2xl px-3 py-3 md:sticky md:flex-row md:flex-wrap md:items-center md:px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] md:flex-wrap md:overflow-visible md:pb-0",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTERS"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>p.setFilter(f.id),
                        className: `relative shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold tracking-wide transition md:py-1.5 ${p.filter === f.id ? "text-black" : "text-silver/80 hover:text-ink"}`,
                        children: [
                            p.filter === f.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                layoutId: `filter-pill-${p.compact ? "b" : "w"}`,
                                className: "absolute inset-0 rounded-full bg-tiger",
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 32
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Controls.tsx",
                                lineNumber: 15,
                                columnNumber: 35
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative",
                                children: f.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Controls.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        ]
                    }, f.id, true, {
                        fileName: "[project]/src/components/Controls.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Controls.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 md:ml-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative min-w-0 flex-1 basis-full md:basis-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Controls.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: p.query,
                                onChange: (e)=>p.setQuery(e.target.value),
                                placeholder: "Search Pokémon, trainer, card…",
                                "aria-label": "Search cards",
                                type: "search",
                                className: "w-full rounded-lg border border-line bg-void/70 py-2.5 pl-8 pr-8 text-base outline-none transition placeholder:text-muted focus:border-ember/60 md:w-64 md:py-1.5 md:text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Controls.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            p.query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>p.setQuery(""),
                                "aria-label": "Clear search",
                                className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-ink",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Controls.tsx",
                                    lineNumber: 25,
                                    columnNumber: 168
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Controls.tsx",
                                lineNumber: 25,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Controls.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: p.sort,
                        onChange: (e)=>p.setSort(e.target.value),
                        "aria-label": "Sort cards",
                        className: "min-w-0 flex-1 rounded-lg border border-line bg-void px-2.5 py-2.5 text-base outline-none focus:border-ember/60 md:flex-none md:py-1.5 md:text-sm",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SORTS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: s.id,
                                children: s.label
                            }, s.id, false, {
                                fileName: "[project]/src/components/Controls.tsx",
                                lineNumber: 28,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Controls.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden text-xs tracking-widest text-muted sm:inline",
                        children: [
                            p.count,
                            " SHOWN"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Controls.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: p.onBinder,
                        className: "flex items-center gap-1.5 rounded-lg border border-ember/40 px-3 py-2.5 text-sm font-semibold text-ember transition hover:bg-ember/10 md:py-1.5",
                        children: [
                            p.compact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Controls.tsx",
                                lineNumber: 32,
                                columnNumber: 24
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Controls.tsx",
                                lineNumber: 32,
                                columnNumber: 52
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: p.compact ? "" : "hidden min-[400px]:inline",
                                children: p.compact ? "Exit" : "Binder Mode"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Controls.tsx",
                                lineNumber: 32,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Controls.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Controls.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Controls.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Controls;
var _c;
__turbopack_context__.k.register(_c, "Controls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Brand.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Footer() {
    _s();
    const { owned, percent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative mt-20 border-t border-line bg-gradient-to-b from-transparent to-wash px-4 py-10 sm:px-6 sm:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stripes absolute inset-0 opacity-40"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-sm tracking-[0.3em] text-muted",
                        children: [
                            "CURATED FOR ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-gold",
                                style: {
                                    fontFamily: "var(--font-kr)"
                                },
                                children: "호랑이"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 13,
                                columnNumber: 86
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center md:text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-display text-xl font-bold text-tiger",
                                children: [
                                    owned,
                                    " / ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs tracking-[0.3em] text-muted",
                                children: [
                                    percent.toFixed(2),
                                    "% COMPLETE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Footer, "YXZ6FiByCj+fM364XdVoeR9N4Kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedNumber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedNumber.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Ring({ percent }) {
    const R = 118, C = 2 * Math.PI * R;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[230px] w-[230px] shrink-0 sm:h-[290px] sm:w-[290px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-4 rounded-full bg-ember/20 blur-3xl",
                style: {
                    opacity: 0.25 + percent / 140
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 280 280",
                className: "relative h-full w-full -rotate-90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "ring",
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0",
                                        stopColor: "#FF8A32"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 15,
                                        columnNumber: 65
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "1",
                                        stopColor: "#FFD27A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 15,
                                        columnNumber: 104
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "glow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        stdDeviation: "4",
                                        result: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 16,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 16,
                                                columnNumber: 84
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 16,
                                                columnNumber: 106
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 16,
                                        columnNumber: 75
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "140",
                        cy: "140",
                        r: R,
                        fill: "none",
                        stroke: "var(--c-slab)",
                        strokeWidth: "14"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "140",
                        cy: "140",
                        r: R + 16,
                        fill: "none",
                        stroke: "#ffffff10",
                        strokeWidth: "1",
                        strokeDasharray: "2 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: "140",
                        cy: "140",
                        r: R,
                        fill: "none",
                        stroke: "url(#ring)",
                        strokeWidth: "14",
                        strokeLinecap: "round",
                        filter: "url(#glow)",
                        strokeDasharray: C,
                        initial: {
                            strokeDashoffset: C
                        },
                        animate: {
                            strokeDashoffset: C * (1 - Math.min(percent, 100) / 100)
                        },
                        transition: {
                            type: "spring",
                            stiffness: 60,
                            damping: 18
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-display text-4xl font-black text-tiger sm:text-5xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedNumber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedNumber"], {
                            value: percent,
                            decimals: 2,
                            suffix: "%"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 25,
                            columnNumber: 82
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-xs tracking-[0.35em] text-muted",
                        children: "COMPLETE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Ring;
function Stat({ icon: Icon, label, value, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            y: -4,
            scale: 1.03
        },
        className: "glass group relative overflow-hidden rounded-xl p-3 sm:p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 transition group-hover:opacity-100"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: `mb-2 h-4 w-4 ${accent ? "text-ember" : "text-gold"}`
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-display text-2xl font-bold text-ink sm:text-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedNumber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedNumber"], {
                    value: value
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 37,
                    columnNumber: 77
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 text-[11px] tracking-[0.25em] text-muted",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = Stat;
function Hero() {
    _s();
    const { owned, missing, psa10, percent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-14",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl text-center lg:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "mb-4 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1 text-xs tracking-[0.3em] text-ember",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1.5 w-1.5 rounded-full bg-ember",
                                    style: {
                                        animation: "pulseGlow 1.8s infinite"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                " PSA 10 · VAULT ACTIVE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.1
                            },
                            className: "font-display text-[2rem] font-black leading-[1.05] text-ink sm:text-6xl",
                            children: [
                                "THE ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-tiger",
                                    children: "TAG TEAM"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 53,
                                    columnNumber: 61
                                }, this),
                                "COLLECTION"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "mt-5 text-xl tracking-wide text-silver/80",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"],
                                " Cards. One Ultimate Chase."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs tracking-[0.35em] text-muted",
                                    children: "COLLECTION PROGRESS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 font-display text-2xl font-bold text-ink sm:text-3xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedNumber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedNumber"], {
                                            value: owned
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 60,
                                            columnNumber: 88
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted",
                                            children: [
                                                "/ ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 60,
                                            columnNumber: 121
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg tracking-widest text-gold",
                                            children: "CARDS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 60,
                                            columnNumber: 174
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 h-2.5 overflow-hidden rounded-full bg-slab",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "h-full rounded-full bg-tiger shadow-[0_0_18px_#ff8a32]",
                                        animate: {
                                            width: `${percent}%`
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 70,
                                            damping: 18
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
                                    label: "OWNED",
                                    value: owned,
                                    accent: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
                                    label: "MISSING",
                                    value: missing
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
                                    label: "PSA 10",
                                    value: psa10,
                                    accent: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                                    label: "TOTAL",
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ring, {
                    percent: percent
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Hero, "ha70+q2vhR6oOT1yw7m+a4x5Pzo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c2 = Hero;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Ring");
__turbopack_context__.k.register(_c1, "Stat");
__turbopack_context__.k.register(_c2, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Overview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overview",
    ()=>Overview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Overview({ onOpen, onShowMissing }) {
    _s();
    const { recent, cards, missing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const miss = cards.filter((c)=>!c.owned).slice(0, 10);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-4 px-4 pb-8 sm:gap-5 sm:px-6 sm:pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-2xl p-4 sm:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-4 flex items-center gap-2 font-display text-sm font-bold tracking-[0.25em] text-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-4 w-4 text-ember"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Overview.tsx",
                                lineNumber: 13,
                                columnNumber: 112
                            }, this),
                            " RECENTLY ACQUIRED"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Overview.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    recent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "py-8 text-center text-sm text-muted",
                        children: "Nothing unlocked yet. Click any slot to begin."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Overview.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 overflow-x-auto pb-2",
                        children: recent.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    y: -6
                                },
                                onClick: ()=>onOpen(c),
                                className: "w-24 shrink-0 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: c.image,
                                        alt: c.displayName,
                                        className: "aspect-[63/88] w-full rounded-md border border-gold/50 object-cover shadow-[0_0_14px_-3px_#ff8a32]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Overview.tsx",
                                        lineNumber: 21,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 truncate text-[11px] text-silver",
                                        children: c.displayName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Overview.tsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/components/Overview.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Overview.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Overview.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-2xl p-4 sm:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "flex items-center gap-2 font-display text-sm font-bold tracking-[0.25em] text-ink",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                        className: "h-4 w-4 text-gold"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Overview.tsx",
                                        lineNumber: 30,
                                        columnNumber: 109
                                    }, this),
                                    " MISSING CARDS · ",
                                    missing
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Overview.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onShowMissing,
                                className: "text-xs font-semibold tracking-widest text-ember hover:underline",
                                children: "VIEW ALL ON WALL →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Overview.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Overview.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    missing === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "py-8 text-center text-gold",
                        children: "Nothing missing. Legendary."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Overview.tsx",
                        lineNumber: 33,
                        columnNumber: 26
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 overflow-x-auto pb-2",
                        children: miss.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    y: -6
                                },
                                onClick: ()=>onOpen(c),
                                className: "group w-24 shrink-0 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: c.image,
                                        alt: "",
                                        loading: "lazy",
                                        className: "aspect-[63/88] w-full rounded-md border border-line object-cover locked-art"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Overview.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 truncate text-[11px] text-muted",
                                        children: c.displayName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Overview.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/components/Overview.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Overview.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Overview.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Overview.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Overview, "1KFF1ydSQvx9yT5YUSHeUkQa6w4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Overview;
var _c;
__turbopack_context__.k.register(_c, "Overview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PsaSlab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PsaSlab",
    ()=>PsaSlab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PsaSlab({ card, large = false, children }) {
    const owned = card.owned;
    const z = large ? {
        h: "h-[84px]",
        gem: "text-[22px]",
        ten: "text-[64px]",
        bar: "h-[18px] w-[110px]",
        holo: "h-[26px] w-[26px] text-[9px]",
        name: "text-[11px]",
        pad: "p-3",
        bw: "border-[5px]"
    } : {
        h: "h-[46px]",
        gem: "text-[11px]",
        ten: "text-[32px]",
        bar: "h-[9px] w-[52px]",
        holo: "h-[14px] w-[14px] text-[5px]",
        name: "text-[7px]",
        pad: "p-[7px]",
        bw: "border-[3px]"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `psa-case psa-gloss relative rounded-[10px] ${z.pad} ${owned ? "" : "grayscale-[0.6] brightness-[0.55]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative mb-[6px] ${z.h} ${z.bw} overflow-visible rounded-[3px] border-[#e32c25] bg-white text-black shadow-[0_1px_2px_#0006]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full items-center justify-between px-[7%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 flex-col justify-center gap-[3px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `whitespace-nowrap font-medium leading-none tracking-tight ${z.gem}`,
                                        children: "GEM MT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PsaSlab.tsx",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `psa-barcode ${z.bar} opacity-90`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PsaSlab.tsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PsaSlab.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `font-light leading-none ${z.ten}`,
                                style: {
                                    fontFamily: "var(--font-display)"
                                },
                                children: "10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PsaSlab.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PsaSlab.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute left-1/2 top-full -translate-x-1/2 -translate-y-[62%] ${z.holo} flex items-center justify-center rounded-[1px] bg-gradient-to-br from-[#e9ecf2] via-[#9ea6b5] to-[#dfe3ea] font-black italic text-[#1f3f9a] shadow ring-1 ring-black/20`,
                        children: "PSA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PsaSlab.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PsaSlab.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "psa-well relative rounded-[4px] p-[3px]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/PsaSlab.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-[5px] truncate px-1 text-center font-semibold uppercase tracking-wide text-black/45 ${z.name}`,
                children: owned ? `${card.displayName} · ${card.setName} #${card.number}` : `${card.variant} · ${card.setName}`
            }, void 0, false, {
                fileName: "[project]/src/components/PsaSlab.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PsaSlab.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = PsaSlab;
var _c;
__turbopack_context__.k.register(_c, "PsaSlab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Settings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-exclamation-point.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Settings({ onClose }) {
    _s();
    const { exportJson, importJson, resetAll } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmReset, setConfirmReset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const doExport = ()=>{
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([
            exportJson()
        ], {
            type: "application/json"
        }));
        a.download = `tiger-binder-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(a.href);
        setMsg("Exported.");
    };
    const btn = "flex w-full items-center gap-3 rounded-xl border border-line bg-void/60 px-4 py-3 text-left text-sm font-semibold transition hover:border-ember/50";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/75 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/Settings.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.92,
                    y: 20
                },
                animate: {
                    scale: 1,
                    y: 0
                },
                exit: {
                    scale: 0.95,
                    opacity: 0
                },
                className: "glass relative max-h-[90vh] w-full max-w-lg space-y-3 overflow-y-auto rounded-2xl border-ember/30 p-5 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        "aria-label": "Close settings",
                        className: "absolute right-4 top-4 text-muted hover:text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Settings.tsx",
                            lineNumber: 27,
                            columnNumber: 126
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-lg font-bold tracking-widest text-tiger",
                        children: "SETTINGS · DATA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: btn,
                        onClick: doExport,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-4 w-4 text-ember"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 29,
                                columnNumber: 52
                            }, this),
                            " Export collection (JSON)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: btn,
                        onClick: ()=>fileRef.current?.click(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "h-4 w-4 text-gold"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 30,
                                columnNumber: 74
                            }, this),
                            " Import collection (JSON)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileRef,
                        type: "file",
                        accept: "application/json",
                        hidden: true,
                        onChange: async (e)=>{
                            const f = e.target.files?.[0];
                            if (!f) return;
                            setMsg(importJson(await f.text()).message);
                            e.target.value = "";
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    !confirmReset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${btn} hover:!border-red-500/60`,
                        onClick: ()=>setConfirmReset(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "h-4 w-4 text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 36,
                                columnNumber: 103
                            }, this),
                            " Reset collection…"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-red-500/50 bg-red-500/10 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 flex items-center gap-2 text-sm text-red-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 39,
                                        columnNumber: 78
                                    }, this),
                                    " This erases every owned card, note and image. Export first!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            resetAll();
                                            setConfirmReset(false);
                                            setMsg("Collection reset.");
                                        },
                                        className: "flex-1 rounded-lg bg-red-600 py-2 text-sm font-bold",
                                        children: "Yes, erase everything"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setConfirmReset(false),
                                        className: "flex-1 rounded-lg border border-line py-2 text-sm",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gold",
                        role: "status",
                        children: msg
                    }, void 0, false, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-line pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-2 text-[11px] tracking-[0.3em] text-muted",
                                children: "CATALOG VALIDATION NOTES"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc space-y-1.5 pl-5 text-xs text-silver/80",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANIFEST_NOTES"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: n
                                    }, n, false, {
                                        fileName: "[project]/src/components/Settings.tsx",
                                        lineNumber: 49,
                                        columnNumber: 104
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Settings.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Settings.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Settings, "AD5LuvIpRAxynPgrLD+oFiQJVAc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Settings;
var _c;
__turbopack_context__.k.register(_c, "Settings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            // eslint-disable-next-line react-hooks/set-state-in-effect -- read the theme the init script applied
            setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
        }
    }["ThemeToggle.useEffect"], []);
    const toggle = ()=>{
        const next = theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("tiger-binder:theme", next);
        } catch  {}
        setTheme(next);
    };
    const light = theme === "light";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggle,
        "aria-label": light ? "Switch to dark mode" : "Switch to light mode",
        title: light ? "Dark mode" : "Light mode",
        className: "rounded-lg border border-line p-2.5 text-silver transition hover:border-ember/60 hover:text-ember sm:p-2",
        children: light ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 21,
            columnNumber: 16
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 21,
            columnNumber: 47
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeToggle.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "8cORP+VmZIUfFKJJBlFCtPazdq0=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Wall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wall",
    ()=>Wall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardSlot.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Wall({ cards, sort, onOpen, sigKey }) {
    _s();
    const { lastUnlocked } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Wall.useMemo[groups]": ()=>{
            if (sort !== "set") return [
                {
                    id: "all",
                    name: "",
                    date: "",
                    cards
                }
            ];
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATALOG_SETS"].map({
                "Wall.useMemo[groups]": (s)=>({
                        id: s.id,
                        name: s.name,
                        date: s.releaseDate,
                        cards: cards.filter({
                            "Wall.useMemo[groups]": (c)=>c.setId === s.id
                        }["Wall.useMemo[groups]"])
                    })
            }["Wall.useMemo[groups]"]).filter({
                "Wall.useMemo[groups]": (g)=>g.cards.length
            }["Wall.useMemo[groups]"]);
        }
    }["Wall.useMemo[groups]"], [
        cards,
        sort
    ]);
    if (!cards.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-24 text-center text-muted",
        children: "No cards match this view. The vault is quiet…"
    }, void 0, false, {
        fileName: "[project]/src/components/Wall.tsx",
        lineNumber: 18,
        columnNumber: 12
    }, this);
    let idx = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.2
            },
            className: "space-y-10",
            children: groups.map((g)=>{
                const ownedN = g.cards.filter((c)=>c.owned).length;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            g.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-8 w-1.5 rounded bg-tiger"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Wall.tsx",
                                        lineNumber: 31,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-display text-sm font-bold tracking-widest sm:text-lg text-ink",
                                                children: g.name.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Wall.tsx",
                                                lineNumber: 33,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs tracking-[0.25em] text-muted",
                                                children: [
                                                    g.date.slice(0, 4),
                                                    " · ",
                                                    ownedN,
                                                    " / ",
                                                    g.cards.length,
                                                    " UNLOCKED"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Wall.tsx",
                                                lineNumber: 34,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Wall.tsx",
                                        lineNumber: 32,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px flex-1 bg-gradient-to-r from-ember/50 via-gold/20 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Wall.tsx",
                                        lineNumber: 36,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Wall.tsx",
                                lineNumber: 30,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(140px,1fr))] sm:gap-4 sm:[grid-template-columns:repeat(auto-fill,minmax(148px,1fr))] [perspective:1200px]",
                                children: g.cards.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSlot"], {
                                        card: c,
                                        onOpen: onOpen,
                                        justUnlocked: lastUnlocked === c.id,
                                        index: idx++
                                    }, c.id, false, {
                                        fileName: "[project]/src/components/Wall.tsx",
                                        lineNumber: 41,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Wall.tsx",
                                lineNumber: 39,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Wall.tsx",
                        lineNumber: 28,
                        columnNumber: 15
                    }, this)
                }, g.id, false, {
                    fileName: "[project]/src/components/Wall.tsx",
                    lineNumber: 27,
                    columnNumber: 13
                }, this);
            })
        }, sigKey, false, {
            fileName: "[project]/src/components/Wall.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Wall.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Wall, "w3fyIanTEer/S8g8/SDAFvPUHL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Wall;
var _c;
__turbopack_context__.k.register(_c, "Wall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/cardImages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IMAGE MANAGEMENT
 * ----------------
 * Resolution order for a card's artwork:
 *   1. Image saved in the app (modal → upload / change URL)   [localStorage]
 *   2. LOCAL_IMAGES below   (drop files into /public/cards and list them here)
 *   3. Default official artwork URL from catalog.json
 *
 * Example:   "sm9-1": "/cards/sm9-1.png",
 */ __turbopack_context__.s([
    "LOCAL_IMAGES",
    ()=>LOCAL_IMAGES
]);
const LOCAL_IMAGES = {
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/cards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATALOG",
    ()=>CATALOG,
    "CATALOG_SETS",
    ()=>CATALOG_SETS,
    "MANIFEST_NOTES",
    ()=>MANIFEST_NOTES,
    "POKEMON_COUNT",
    ()=>POKEMON_COUNT,
    "TARGET_TOTAL",
    ()=>TARGET_TOTAL,
    "TRAINER_COUNT",
    ()=>TRAINER_COUNT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$catalog$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/catalog.json.[json].cjs [app-client] (ecmascript)");
;
const TARGET_TOTAL = 131;
const CATALOG_SETS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$catalog$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sets;
const base = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$catalog$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cards;
/** Label each printing so same-named cards are never confused. */ function variantOf(c) {
    switch(c.rarity){
        case "Rare Holo GX":
            return "Holo";
        case "Rare Rainbow":
            return "Rainbow";
        case "Promo":
            return "Promo";
        case "Uncommon":
            return "Regular";
        case "Rare Ultra":
            {
                const sibs = base.filter((x)=>x.name === c.name && x.setId === c.setId && x.rarity === "Rare Ultra");
                return sibs.length > 1 && sibs[0].id !== c.id ? "Alternate Art" : "Full Art";
            }
        default:
            return c.rarity;
    }
}
const CATALOG = base.map(_c = (c)=>({
        ...c,
        variant: variantOf(c)
    }));
_c1 = CATALOG;
const MANIFEST_NOTES = [
    `Catalog contains ${CATALOG.length} unique printings (target ${TARGET_TOTAL}) — ${CATALOG.length === TARGET_TOTAL ? "matches the target." : "DOES NOT match the target; review."}`,
    "Pokémon TAG TEAM-GX and TAG TEAM Trainer cards are listed; ordinary Pokémon-GX are excluded.",
    "Includes Hidden Fates (3), SM Black Star Promos (17) and Cosmic Eclipse Togepi 143a as separate entries.",
    "'30th Celebration: Classic Collection' Pikachu & Zekrom-GX (me55c-33, Sep 2026) is a reprint counted toward 131 by the database. Verify it is in your reference screenshot; if not, the true set total may be 130.",
    "No screenshot was attached, so this catalog could not be compared against your reference image."
];
const POKEMON_COUNT = CATALOG.filter((c)=>c.category === "pokemon").length;
const TRAINER_COUNT = CATALOG.filter((c)=>c.category === "trainer").length;
var _c, _c1;
__turbopack_context__.k.register(_c, "CATALOG$base.map");
__turbopack_context__.k.register(_c1, "CATALOG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/catalog.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"sets\":[{\"id\":\"sm9\",\"name\":\"Team Up\",\"releaseDate\":\"2019-02-01\"},{\"id\":\"sm10\",\"name\":\"Unbroken Bonds\",\"releaseDate\":\"2019-05-03\"},{\"id\":\"sm11\",\"name\":\"Unified Minds\",\"releaseDate\":\"2019-08-02\"},{\"id\":\"sm115\",\"name\":\"Hidden Fates\",\"releaseDate\":\"2019-08-23\"},{\"id\":\"sm12\",\"name\":\"Cosmic Eclipse\",\"releaseDate\":\"2019-11-01\"},{\"id\":\"smp\",\"name\":\"SM Black Star Promos\",\"releaseDate\":\"2019-12-31\"},{\"id\":\"me55c\",\"name\":\"30th Celebration: Classic Collection\",\"releaseDate\":\"2026-09-16\"}],\"cards\":[{\"id\":\"sm9-1\",\"name\":\"Celebi & Venusaur-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"1\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/1_hires.png\"},{\"id\":\"sm9-33\",\"name\":\"Pikachu & Zekrom-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"33\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/33_hires.png\"},{\"id\":\"sm9-53\",\"name\":\"Gengar & Mimikyu-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"53\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/53_hires.png\"},{\"id\":\"sm9-113\",\"name\":\"Latias & Latios-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"113\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/113_hires.png\"},{\"id\":\"sm9-120\",\"name\":\"Eevee & Snorlax-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"120\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/120_hires.png\"},{\"id\":\"sm9-159\",\"name\":\"Celebi & Venusaur-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"159\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/159_hires.png\"},{\"id\":\"sm9-160\",\"name\":\"Magikarp & Wailord-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"160\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/160_hires.png\"},{\"id\":\"sm9-161\",\"name\":\"Magikarp & Wailord-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"161\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/161_hires.png\"},{\"id\":\"sm9-162\",\"name\":\"Pikachu & Zekrom-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"162\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/162_hires.png\"},{\"id\":\"sm9-164\",\"name\":\"Gengar & Mimikyu-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"164\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/164_hires.png\"},{\"id\":\"sm9-165\",\"name\":\"Gengar & Mimikyu-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"165\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/165_hires.png\"},{\"id\":\"sm9-169\",\"name\":\"Latias & Latios-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"169\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/169_hires.png\"},{\"id\":\"sm9-170\",\"name\":\"Latias & Latios-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"170\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/170_hires.png\"},{\"id\":\"sm9-171\",\"name\":\"Eevee & Snorlax-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"171\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/171_hires.png\"},{\"id\":\"sm9-182\",\"name\":\"Celebi & Venusaur-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"182\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/182_hires.png\"},{\"id\":\"sm9-183\",\"name\":\"Magikarp & Wailord-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"183\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/183_hires.png\"},{\"id\":\"sm9-184\",\"name\":\"Pikachu & Zekrom-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"184\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/184_hires.png\"},{\"id\":\"sm9-186\",\"name\":\"Gengar & Mimikyu-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"186\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/186_hires.png\"},{\"id\":\"sm9-190\",\"name\":\"Latias & Latios-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"190\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/190_hires.png\"},{\"id\":\"sm9-191\",\"name\":\"Eevee & Snorlax-GX\",\"category\":\"pokemon\",\"setId\":\"sm9\",\"setName\":\"Team Up\",\"number\":\"191\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm9/191_hires.png\"},{\"id\":\"sm10-1\",\"name\":\"Pheromosa & Buzzwole-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"1\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/1_hires.png\"},{\"id\":\"sm10-20\",\"name\":\"Reshiram & Charizard-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"20\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/20_hires.png\"},{\"id\":\"sm10-61\",\"name\":\"Muk & Alolan Muk-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"61\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/61_hires.png\"},{\"id\":\"sm10-82\",\"name\":\"Marshadow & Machamp-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"82\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/82_hires.png\"},{\"id\":\"sm10-107\",\"name\":\"Greninja & Zoroark-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"107\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/107_hires.png\"},{\"id\":\"sm10-120\",\"name\":\"Lucario & Melmetal-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"120\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/120_hires.png\"},{\"id\":\"sm10-130\",\"name\":\"Gardevoir & Sylveon-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"130\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/130_hires.png\"},{\"id\":\"sm10-191\",\"name\":\"Pheromosa & Buzzwole-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"191\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/191_hires.png\"},{\"id\":\"sm10-192\",\"name\":\"Pheromosa & Buzzwole-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"192\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/192_hires.png\"},{\"id\":\"sm10-194\",\"name\":\"Reshiram & Charizard-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"194\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/194_hires.png\"},{\"id\":\"sm10-196\",\"name\":\"Muk & Alolan Muk-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"196\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/196_hires.png\"},{\"id\":\"sm10-197\",\"name\":\"Muk & Alolan Muk-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"197\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/197_hires.png\"},{\"id\":\"sm10-198\",\"name\":\"Marshadow & Machamp-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"198\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/198_hires.png\"},{\"id\":\"sm10-199\",\"name\":\"Marshadow & Machamp-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"199\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/199_hires.png\"},{\"id\":\"sm10-200\",\"name\":\"Greninja & Zoroark-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"200\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/200_hires.png\"},{\"id\":\"sm10-201\",\"name\":\"Greninja & Zoroark-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"201\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/201_hires.png\"},{\"id\":\"sm10-203\",\"name\":\"Lucario & Melmetal-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"203\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/203_hires.png\"},{\"id\":\"sm10-204\",\"name\":\"Gardevoir & Sylveon-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"204\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/204_hires.png\"},{\"id\":\"sm10-205\",\"name\":\"Gardevoir & Sylveon-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"205\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/205_hires.png\"},{\"id\":\"sm10-215\",\"name\":\"Pheromosa & Buzzwole-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"215\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/215_hires.png\"},{\"id\":\"sm10-217\",\"name\":\"Reshiram & Charizard-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"217\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/217_hires.png\"},{\"id\":\"sm10-220\",\"name\":\"Muk & Alolan Muk-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"220\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/220_hires.png\"},{\"id\":\"sm10-221\",\"name\":\"Marshadow & Machamp-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"221\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/221_hires.png\"},{\"id\":\"sm10-222\",\"name\":\"Greninja & Zoroark-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"222\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/222_hires.png\"},{\"id\":\"sm10-224\",\"name\":\"Lucario & Melmetal-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"224\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/224_hires.png\"},{\"id\":\"sm10-225\",\"name\":\"Gardevoir & Sylveon-GX\",\"category\":\"pokemon\",\"setId\":\"sm10\",\"setName\":\"Unbroken Bonds\",\"number\":\"225\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm10/225_hires.png\"},{\"id\":\"sm11-1\",\"name\":\"Rowlet & Alolan Exeggutor-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"1\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/1_hires.png\"},{\"id\":\"sm11-35\",\"name\":\"Slowpoke & Psyduck-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"35\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/35_hires.png\"},{\"id\":\"sm11-54\",\"name\":\"Raichu & Alolan Raichu-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"54\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/54_hires.png\"},{\"id\":\"sm11-71\",\"name\":\"Mewtwo & Mew-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"71\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/71_hires.png\"},{\"id\":\"sm11-72\",\"name\":\"Espeon & Deoxys-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"72\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/72_hires.png\"},{\"id\":\"sm11-125\",\"name\":\"Umbreon & Darkrai-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"125\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/125_hires.png\"},{\"id\":\"sm11-126\",\"name\":\"Mega Sableye & Tyranitar-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"126\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/126_hires.png\"},{\"id\":\"sm11-146\",\"name\":\"Garchomp & Giratina-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"146\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/146_hires.png\"},{\"id\":\"sm11-214\",\"name\":\"Rowlet & Alolan Exeggutor-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"214\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/214_hires.png\"},{\"id\":\"sm11-215\",\"name\":\"Rowlet & Alolan Exeggutor-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"215\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/215_hires.png\"},{\"id\":\"sm11-217\",\"name\":\"Slowpoke & Psyduck-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"217\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/217_hires.png\"},{\"id\":\"sm11-218\",\"name\":\"Slowpoke & Psyduck-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"218\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/218_hires.png\"},{\"id\":\"sm11-220\",\"name\":\"Raichu & Alolan Raichu-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"220\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/220_hires.png\"},{\"id\":\"sm11-221\",\"name\":\"Raichu & Alolan Raichu-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"221\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/221_hires.png\"},{\"id\":\"sm11-222\",\"name\":\"Mewtwo & Mew-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"222\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/222_hires.png\"},{\"id\":\"sm11-225\",\"name\":\"Mega Sableye & Tyranitar-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"225\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/225_hires.png\"},{\"id\":\"sm11-226\",\"name\":\"Mega Sableye & Tyranitar-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"226\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/226_hires.png\"},{\"id\":\"sm11-228\",\"name\":\"Garchomp & Giratina-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"228\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/228_hires.png\"},{\"id\":\"sm11-237\",\"name\":\"Rowlet & Alolan Exeggutor-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"237\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/237_hires.png\"},{\"id\":\"sm11-239\",\"name\":\"Slowpoke & Psyduck-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"239\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/239_hires.png\"},{\"id\":\"sm11-241\",\"name\":\"Raichu & Alolan Raichu-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"241\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/241_hires.png\"},{\"id\":\"sm11-242\",\"name\":\"Mewtwo & Mew-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"242\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/242_hires.png\"},{\"id\":\"sm11-245\",\"name\":\"Mega Sableye & Tyranitar-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"245\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/245_hires.png\"},{\"id\":\"sm11-247\",\"name\":\"Garchomp & Giratina-GX\",\"category\":\"pokemon\",\"setId\":\"sm11\",\"setName\":\"Unified Minds\",\"number\":\"247\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm11/247_hires.png\"},{\"id\":\"sm115-44\",\"name\":\"Moltres & Zapdos & Articuno-GX\",\"category\":\"pokemon\",\"setId\":\"sm115\",\"setName\":\"Hidden Fates\",\"number\":\"44\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm115/44_hires.png\"},{\"id\":\"sm115-66\",\"name\":\"Moltres & Zapdos & Articuno-GX\",\"category\":\"pokemon\",\"setId\":\"sm115\",\"setName\":\"Hidden Fates\",\"number\":\"66\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm115/66_hires.png\"},{\"id\":\"sm115-69\",\"name\":\"Moltres & Zapdos & Articuno-GX\",\"category\":\"pokemon\",\"setId\":\"sm115\",\"setName\":\"Hidden Fates\",\"number\":\"69\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm115/69_hires.png\"},{\"id\":\"sm12-1\",\"name\":\"Venusaur & Snivy-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"1\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/1_hires.png\"},{\"id\":\"sm12-22\",\"name\":\"Charizard & Braixen-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"22\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/22_hires.png\"},{\"id\":\"sm12-38\",\"name\":\"Blastoise & Piplup-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"38\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/38_hires.png\"},{\"id\":\"sm12-75\",\"name\":\"Solgaleo & Lunala-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"75\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/75_hires.png\"},{\"id\":\"sm12-143\",\"name\":\"Togepi & Cleffa & Igglybuff-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"143\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/143_hires.png\"},{\"id\":\"sm12-143a\",\"name\":\"Togepi & Cleffa & Igglybuff-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"143a\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/143a_hires.png\"},{\"id\":\"sm12-156\",\"name\":\"Arceus & Dialga & Palkia-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"156\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/156_hires.png\"},{\"id\":\"sm12-157\",\"name\":\"Reshiram & Zekrom-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"157\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/157_hires.png\"},{\"id\":\"sm12-158\",\"name\":\"Naganadel & Guzzlord-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"158\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/158_hires.png\"},{\"id\":\"sm12-165\",\"name\":\"Mega Lopunny & Jigglypuff-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"165\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/165_hires.png\"},{\"id\":\"sm12-186\",\"name\":\"Bellelba & Brycen-Man\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"186\",\"rarity\":\"Uncommon\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/186_hires.png\"},{\"id\":\"sm12-189\",\"name\":\"Cynthia & Caitlin\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"189\",\"rarity\":\"Uncommon\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/189_hires.png\"},{\"id\":\"sm12-193\",\"name\":\"Guzma & Hala\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"193\",\"rarity\":\"Uncommon\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/193_hires.png\"},{\"id\":\"sm12-198\",\"name\":\"Mallow & Lana\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"198\",\"rarity\":\"Uncommon\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/198_hires.png\"},{\"id\":\"sm12-199\",\"name\":\"Misty & Lorelei\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"199\",\"rarity\":\"Uncommon\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/199_hires.png\"},{\"id\":\"sm12-202\",\"name\":\"Red & Blue\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"202\",\"rarity\":\"Uncommon\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/202_hires.png\"},{\"id\":\"sm12-210\",\"name\":\"Venusaur & Snivy-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"210\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/210_hires.png\"},{\"id\":\"sm12-212\",\"name\":\"Charizard & Braixen-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"212\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/212_hires.png\"},{\"id\":\"sm12-214\",\"name\":\"Blastoise & Piplup-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"214\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/214_hires.png\"},{\"id\":\"sm12-215\",\"name\":\"Blastoise & Piplup-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"215\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/215_hires.png\"},{\"id\":\"sm12-216\",\"name\":\"Solgaleo & Lunala-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"216\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/216_hires.png\"},{\"id\":\"sm12-220\",\"name\":\"Arceus & Dialga & Palkia-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"220\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/220_hires.png\"},{\"id\":\"sm12-221\",\"name\":\"Arceus & Dialga & Palkia-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"221\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/221_hires.png\"},{\"id\":\"sm12-222\",\"name\":\"Reshiram & Zekrom-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"222\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/222_hires.png\"},{\"id\":\"sm12-223\",\"name\":\"Naganadel & Guzzlord-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"223\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/223_hires.png\"},{\"id\":\"sm12-224\",\"name\":\"Naganadel & Guzzlord-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"224\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/224_hires.png\"},{\"id\":\"sm12-225\",\"name\":\"Mega Lopunny & Jigglypuff-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"225\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/225_hires.png\"},{\"id\":\"sm12-226\",\"name\":\"Mega Lopunny & Jigglypuff-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"226\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/226_hires.png\"},{\"id\":\"sm12-228\",\"name\":\"Cynthia & Caitlin\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"228\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/228_hires.png\"},{\"id\":\"sm12-229\",\"name\":\"Guzma & Hala\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"229\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/229_hires.png\"},{\"id\":\"sm12-231\",\"name\":\"Mallow & Lana\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"231\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/231_hires.png\"},{\"id\":\"sm12-234\",\"name\":\"Red & Blue\",\"category\":\"trainer\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"234\",\"rarity\":\"Rare Ultra\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/234_hires.png\"},{\"id\":\"sm12-249\",\"name\":\"Venusaur & Snivy-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"249\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/249_hires.png\"},{\"id\":\"sm12-251\",\"name\":\"Charizard & Braixen-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"251\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/251_hires.png\"},{\"id\":\"sm12-253\",\"name\":\"Blastoise & Piplup-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"253\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/253_hires.png\"},{\"id\":\"sm12-254\",\"name\":\"Solgaleo & Lunala-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"254\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/254_hires.png\"},{\"id\":\"sm12-258\",\"name\":\"Arceus & Dialga & Palkia-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"258\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/258_hires.png\"},{\"id\":\"sm12-259\",\"name\":\"Reshiram & Zekrom-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"259\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/259_hires.png\"},{\"id\":\"sm12-260\",\"name\":\"Naganadel & Guzzlord-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"260\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/260_hires.png\"},{\"id\":\"sm12-261\",\"name\":\"Mega Lopunny & Jigglypuff-GX\",\"category\":\"pokemon\",\"setId\":\"sm12\",\"setName\":\"Cosmic Eclipse\",\"number\":\"261\",\"rarity\":\"Rare Rainbow\",\"imageUrl\":\"https://images.pokemontcg.io/sm12/261_hires.png\"},{\"id\":\"smp-SM166\",\"name\":\"Magikarp & Wailord-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM166\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM166_hires.png\"},{\"id\":\"smp-SM167\",\"name\":\"Celebi & Venusaur-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM167\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM167_hires.png\"},{\"id\":\"smp-SM168\",\"name\":\"Pikachu & Zekrom-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM168\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM168_hires.png\"},{\"id\":\"smp-SM169\",\"name\":\"Eevee & Snorlax-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM169\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM169_hires.png\"},{\"id\":\"smp-SM191\",\"name\":\"Mewtwo & Mew-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM191\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM191_hires.png\"},{\"id\":\"smp-SM192\",\"name\":\"Lucario & Melmetal-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM192\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM192_hires.png\"},{\"id\":\"smp-SM193\",\"name\":\"Garchomp & Giratina-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM193\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM193_hires.png\"},{\"id\":\"smp-SM201\",\"name\":\"Reshiram & Charizard-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM201\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM201_hires.png\"},{\"id\":\"smp-SM210\",\"name\":\"Moltres & Zapdos & Articuno-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM210\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM210_hires.png\"},{\"id\":\"smp-SM217\",\"name\":\"Trevenant & Dusknoir-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM217\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM217_hires.png\"},{\"id\":\"smp-SM229\",\"name\":\"Venusaur & Snivy-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM229\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM229_hires.png\"},{\"id\":\"smp-SM230\",\"name\":\"Charizard & Braixen-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM230\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM230_hires.png\"},{\"id\":\"smp-SM240\",\"name\":\"Espeon & Deoxys-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM240\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM240_hires.png\"},{\"id\":\"smp-SM241\",\"name\":\"Umbreon & Darkrai-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM241\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM241_hires.png\"},{\"id\":\"smp-SM246\",\"name\":\"Sabrina & Brycen\",\"category\":\"trainer\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM246\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM246_hires.png\"},{\"id\":\"smp-SM247\",\"name\":\"Reshiram & Charizard-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM247\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM247_hires.png\"},{\"id\":\"smp-SM248\",\"name\":\"Pikachu & Zekrom-GX\",\"category\":\"pokemon\",\"setId\":\"smp\",\"setName\":\"SM Black Star Promos\",\"number\":\"SM248\",\"rarity\":\"Promo\",\"imageUrl\":\"https://images.pokemontcg.io/smp/SM248_hires.png\"},{\"id\":\"me55c-33\",\"name\":\"Pikachu & Zekrom-GX\",\"category\":\"pokemon\",\"setId\":\"me55c\",\"setName\":\"30th Celebration: Classic Collection\",\"number\":\"33\",\"rarity\":\"Rare Holo GX\",\"imageUrl\":\"https://images.scrydex.com/pokemon/me55c-33/large\"}]}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/filter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILTERS",
    ()=>FILTERS,
    "SORTS",
    ()=>SORTS,
    "applyView",
    ()=>applyView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards.ts [app-client] (ecmascript)");
;
const FILTERS = [
    {
        id: "all",
        label: "All Cards"
    },
    {
        id: "owned",
        label: "Owned"
    },
    {
        id: "missing",
        label: "Missing"
    },
    {
        id: "pokemon",
        label: "Pokémon TAG TEAM"
    },
    {
        id: "trainer",
        label: "Trainer TAG TEAM"
    }
];
const SORTS = [
    {
        id: "set",
        label: "Expansion / Set"
    },
    {
        id: "name",
        label: "Card Name"
    },
    {
        id: "number",
        label: "Card Number"
    },
    {
        id: "owned",
        label: "Owned First"
    },
    {
        id: "missing",
        label: "Missing First"
    }
];
const num = (n)=>parseFloat(n.replace(/\D/g, "")) || 0;
const setIdx = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATALOG_SETS"].findIndex((s)=>s.id === id);
function applyView(cards, filter, sort, query) {
    const q = query.trim().toLowerCase();
    let out = cards.filter((c)=>{
        if (filter === "owned" && !c.owned) return false;
        if (filter === "missing" && c.owned) return false;
        if (filter === "pokemon" && c.category !== "pokemon") return false;
        if (filter === "trainer" && c.category !== "trainer") return false;
        if (q && !`${c.displayName} ${c.name} ${c.setName} ${c.number} ${c.variant ?? ""}`.toLowerCase().includes(q)) return false;
        return true;
    });
    const bySet = (a, b)=>setIdx(a.setId) - setIdx(b.setId) || num(a.number) - num(b.number);
    out = [
        ...out
    ].sort((a, b)=>{
        switch(sort){
            case "name":
                return a.displayName.localeCompare(b.displayName) || bySet(a, b);
            case "number":
                return num(a.number) - num(b.number) || bySet(a, b);
            case "owned":
                return Number(b.owned) - Number(a.owned) || bySet(a, b);
            case "missing":
                return Number(a.owned) - Number(b.owned) || bySet(a, b);
            default:
                return bySet(a, b);
        }
    });
    return out;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/image.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Downscale an uploaded image to keep localStorage small. */ __turbopack_context__.s([
    "fileToDataUrl",
    ()=>fileToDataUrl
]);
function fileToDataUrl(file, maxW = 560) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = ()=>{
            const s = Math.min(1, maxW / img.width);
            const c = document.createElement("canvas");
            c.width = Math.round(img.width * s);
            c.height = Math.round(img.height * s);
            c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
            URL.revokeObjectURL(url);
            resolve(c.toDataURL("image/jpeg", 0.85));
        };
        img.onerror = ()=>reject(new Error("Could not read image"));
        img.src = url;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/store.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionProvider",
    ()=>CollectionProvider,
    "MILESTONES",
    ()=>MILESTONES,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cardImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cardImages.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const KEY = "tiger-binder:v1";
const MS_KEY = "tiger-binder:milestones";
const MILESTONES = [
    {
        at: 10,
        title: "First Milestone Unlocked",
        sub: "The hunt has begun."
    },
    {
        at: 25,
        title: "Bronze Collection",
        sub: "A quarter of the vault is lit."
    },
    {
        at: 50,
        title: "Halfway There",
        sub: "The wall is half illuminated."
    },
    {
        at: 75,
        title: "Almost Complete",
        sub: "The summit is in sight."
    },
    {
        at: 90,
        title: "Near Completion",
        sub: "Only a handful of slabs remain."
    },
    {
        at: 100,
        title: "THE ULTIMATE TAG TEAM COLLECTION",
        sub: "131 Cards. One Ultimate Chase. Complete."
    }
];
const blank = {
    owned: false,
    psa10: false
};
const Ctx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useStore = ()=>{
    _s();
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Ctx);
    if (!s) throw new Error("useStore outside provider");
    return s;
};
_s(useStore, "NcaH+8mKJ+9JAQWtl1EQlqI+Ikk=");
function CollectionProvider({ children }) {
    _s1();
    const [col, setCol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [celebration, setCelebration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastUnlocked, setLastUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const prevPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollectionProvider.useEffect": ()=>{
            try {
                const raw = localStorage.getItem(KEY);
                // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from localStorage after mount
                if (raw) setCol(JSON.parse(raw));
            } catch  {}
            setReady(true);
        }
    }["CollectionProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollectionProvider.useEffect": ()=>{
            if (!ready) return;
            try {
                localStorage.setItem(KEY, JSON.stringify(col));
            } catch  {
                alert("Storage is full — remove some uploaded images or export your data.");
            }
        }
    }["CollectionProvider.useEffect"], [
        col,
        ready
    ]);
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CollectionProvider.useMemo[cards]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATALOG"].map({
                "CollectionProvider.useMemo[cards]": (c)=>{
                    const record = col[c.id] ?? blank;
                    return {
                        ...c,
                        record,
                        owned: record.owned,
                        displayName: record.nameOverride?.trim() || c.name,
                        image: record.imageUrl || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cardImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL_IMAGES"][c.id] || c.imageUrl
                    };
                }
            }["CollectionProvider.useMemo[cards]"])
    }["CollectionProvider.useMemo[cards]"], [
        col
    ]);
    const owned = cards.filter((c)=>c.owned).length;
    const psa10 = cards.filter((c)=>c.owned && c.record.psa10).length;
    const percent = owned / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"] * 100;
    const recent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CollectionProvider.useMemo[recent]": ()=>cards.filter({
                "CollectionProvider.useMemo[recent]": (c)=>c.owned
            }["CollectionProvider.useMemo[recent]"]).sort({
                "CollectionProvider.useMemo[recent]": (a, b)=>(b.record.ownedAt ?? 0) - (a.record.ownedAt ?? 0)
            }["CollectionProvider.useMemo[recent]"]).slice(0, 8)
    }["CollectionProvider.useMemo[recent]"], [
        cards
    ]);
    // Milestones: celebrate only when progress rises past a threshold, once each.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollectionProvider.useEffect": ()=>{
            if (!ready) return;
            const prev = prevPct.current;
            prevPct.current = percent;
            if (percent <= prev) return;
            let seen = [];
            try {
                seen = JSON.parse(localStorage.getItem(MS_KEY) || "[]");
            } catch  {}
            const hit = [
                ...MILESTONES
            ].reverse().find({
                "CollectionProvider.useEffect.hit": (m)=>percent >= m.at && prev < m.at && !seen.includes(m.at)
            }["CollectionProvider.useEffect.hit"]);
            if (hit) {
                localStorage.setItem(MS_KEY, JSON.stringify([
                    ...seen,
                    hit.at
                ]));
                setCelebration(hit);
            }
        }
    }["CollectionProvider.useEffect"], [
        percent,
        ready
    ]);
    // Set the baseline silently after loading so a refresh doesn't celebrate.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollectionProvider.useEffect": ()=>{
            if (ready) prevPct.current = Object.values(col).filter({
                "CollectionProvider.useEffect": (r)=>r.owned
            }["CollectionProvider.useEffect"]).length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"] * 100;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CollectionProvider.useEffect"], [
        ready
    ]);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollectionProvider.useCallback[update]": (id, patch)=>{
            setCol({
                "CollectionProvider.useCallback[update]": (p)=>({
                        ...p,
                        [id]: {
                            ...blank,
                            ...p[id],
                            ...patch
                        }
                    })
            }["CollectionProvider.useCallback[update]"]);
        }
    }["CollectionProvider.useCallback[update]"], []);
    const setOwned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollectionProvider.useCallback[setOwned]": (id, isOwned)=>{
            setCol({
                "CollectionProvider.useCallback[setOwned]": (p)=>{
                    const cur = {
                        ...blank,
                        ...p[id]
                    };
                    return {
                        ...p,
                        [id]: isOwned ? {
                            ...cur,
                            owned: true,
                            psa10: true,
                            ownedAt: Date.now(),
                            acquiredDate: cur.acquiredDate || new Date().toISOString().slice(0, 10)
                        } : {
                            ...cur,
                            owned: false,
                            psa10: false
                        }
                    };
                }
            }["CollectionProvider.useCallback[setOwned]"]);
            if (isOwned) {
                setLastUnlocked(id);
                setTimeout({
                    "CollectionProvider.useCallback[setOwned]": ()=>setLastUnlocked({
                            "CollectionProvider.useCallback[setOwned]": (c)=>c === id ? null : c
                        }["CollectionProvider.useCallback[setOwned]"])
                }["CollectionProvider.useCallback[setOwned]"], 2500);
            }
        }
    }["CollectionProvider.useCallback[setOwned]"], []);
    const resetCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollectionProvider.useCallback[resetCard]": (id)=>setCol({
                "CollectionProvider.useCallback[resetCard]": (p)=>{
                    const n = {
                        ...p
                    };
                    delete n[id];
                    return n;
                }
            }["CollectionProvider.useCallback[resetCard]"])
    }["CollectionProvider.useCallback[resetCard]"], []);
    const exportJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollectionProvider.useCallback[exportJson]": ()=>JSON.stringify({
                app: "TIGER BINDER",
                version: 1,
                exportedAt: new Date().toISOString(),
                collection: col
            }, null, 2)
    }["CollectionProvider.useCallback[exportJson]"], [
        col
    ]);
    const importJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollectionProvider.useCallback[importJson]": (text)=>{
            try {
                const data = JSON.parse(text);
                const c = data?.collection ?? data;
                if (!c || typeof c !== "object" || Array.isArray(c)) throw new Error("Invalid format");
                const known = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATALOG"].map({
                    "CollectionProvider.useCallback[importJson]": (x)=>x.id
                }["CollectionProvider.useCallback[importJson]"]));
                const next = {};
                let n = 0;
                for (const [id, r] of Object.entries(c)){
                    if (known.has(id) && r && typeof r === "object") {
                        next[id] = {
                            ...blank,
                            ...r
                        };
                        n++;
                    }
                }
                prevPct.current = Object.values(next).filter({
                    "CollectionProvider.useCallback[importJson]": (r)=>r.owned
                }["CollectionProvider.useCallback[importJson]"]).length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"] * 100;
                setCol(next);
                return {
                    ok: true,
                    message: `Imported ${n} card records.`
                };
            } catch (e) {
                return {
                    ok: false,
                    message: e instanceof Error ? e.message : "Import failed"
                };
            }
        }
    }["CollectionProvider.useCallback[importJson]"], []);
    const resetAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollectionProvider.useCallback[resetAll]": ()=>{
            prevPct.current = 0;
            localStorage.removeItem(MS_KEY);
            setCol({});
        }
    }["CollectionProvider.useCallback[resetAll]"], []);
    const value = {
        ready,
        cards,
        owned,
        psa10,
        missing: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_TOTAL"] - owned,
        percent,
        recent,
        update,
        setOwned,
        resetCard,
        exportJson,
        importJson,
        resetAll,
        celebration,
        dismissCelebration: ()=>setCelebration(null),
        lastUnlocked
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ctx.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/store.tsx",
        lineNumber: 173,
        columnNumber: 10
    }, this);
}
_s1(CollectionProvider, "Aj69UMyKgcwlee86Q2JJMLn728E=");
_c = CollectionProvider;
var _c;
__turbopack_context__.k.register(_c, "CollectionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1wd8kkf7me4it._.js.map