

import React from "react";

const steps = [
    {
        title: "Understand the Request",
        description:
            "DidYet first analyzes the user's prompt, identifies intent, extracts objectives, and understands context before beginning any task.",
    },
    {
        title: "Plan the Workflow",
        description:
            "The AI decomposes the request into smaller actionable steps, selecting the best reasoning strategy before generating results.",
    },
    {
        title: "Gather Knowledge",
        description:
            "Relevant knowledge, project context, and previous interactions are combined to create accurate, personalized responses.",
    },
    {
        title: "Reason & Validate",
        description:
            "Each response is internally validated for consistency, completeness, and alignment with the requested outcome.",
    },
    {
        title: "Generate Output",
        description:
            "The final answer is generated with clear formatting, professional structure, and actionable insights.",
    },
    {
        title: "Continuous Improvement",
        description:
            "Feedback and future interactions continuously improve recommendations while maintaining a secure and reliable workflow.",
    },
];

export default function SciencePage(): React.ReactElement {
    return (
        <main className="min-h-screen bg-[#1A1D24] text-white">
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-20 text-center">
                    <span className="inline-flex rounded-full border border-[#20E296]/30 bg-[#20E296]/10 px-4 py-2 text-sm font-medium text-[#20E296]">
                        The Science Behind DidYet
                    </span>

                    <h1 className="mt-6 text-5xl font-bold tracking-tight">
                        How Our AI Works
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-[#A0AABF]">
                        Every request follows a structured reasoning pipeline designed to
                        produce reliable, accurate, and useful responses while keeping the
                        experience simple for users.
                    </p>
                </div>

                <div className="relative mx-auto max-w-4xl">
                    {/* Timeline Line */}
                    <div className="absolute left-5 top-0 h-full w-[2px] bg-[#20E296]/30" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className="relative flex items-start gap-8"
                            >
                                {/* Timeline Node */}
                                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#20E296] font-bold text-[#07140f] shadow-lg shadow-[#20E296]/30">
                                    {index + 1}
                                </div>

                                {/* Card */}
                                <div className="w-full rounded-2xl border border-white/10 bg-[#232733] p-6 transition duration-300 hover:border-[#20E296]/40 hover:shadow-xl hover:shadow-[#20E296]/10">
                                    <h2 className="mb-3 text-2xl font-semibold text-white">
                                        {step.title}
                                    </h2>

                                    <p className="leading-8 text-[#A0AABF]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Summary */}
                <section className="mt-24 rounded-3xl border border-[#20E296]/20 bg-gradient-to-r from-[#20E296]/10 to-transparent p-10">
                    <h2 className="mb-4 text-3xl font-bold">
                        Built for Reliable Assistance
                    </h2>

                    <p className="max-w-4xl text-lg leading-8 text-[#A0AABF]">
                        DidYet combines intelligent planning, contextual understanding, and
                        structured reasoning into a transparent workflow. Rather than simply
                        generating text, each request passes through multiple stages that
                        improve quality, consistency, and usefulness—helping individuals and
                        teams complete work faster with confidence.
                    </p>
                </section>
            </section>
        </main>
    );
}