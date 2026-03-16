"use client";

import React from "react";

export const GlobalCinematicBackground = () => (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
            className="absolute top-0 left-0 w-[60vw] max-w-[800px] aspect-square rounded-full opacity-70 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"
            style={{
                background:
                    "radial-gradient(circle, rgba(103,232,249,0.4) 0%, transparent 60%)",
                transform: "translate(-10vw, -10vh)"
            }}
        />

        <div
            className="absolute top-[20%] right-[-10%] w-[50vw] max-w-[600px] aspect-square rounded-full opacity-60 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"
            style={{
                background:
                    "radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 60%)",
                transform: "translate(10vw, 0vh)"
            }}
        />

        <div
            className="absolute bottom-[-10%] left-[20%] w-[70vw] max-w-[900px] aspect-square rounded-full opacity-60 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
            style={{
                background:
                    "radial-gradient(circle, rgba(125,211,252,0.4) 0%, transparent 60%)",
                transform: "translate(0vw, 10vh)"
            }}
        />

        {/* CÍRCULO DIFUMINADO GLOBAL (Celeste en Light, Verde en Dark) */}
        <div
            className="absolute top-0 left-[30%] w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-400/40 dark:bg-green-400/20 rounded-full blur-[140px] lg:blur-[180px] pointer-events-none z-0"
            style={{ transform: "translate(-10vw, -10vh) scale(1)" }}
        />
    </div>
);
