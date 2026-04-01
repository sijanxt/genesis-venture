"use client";
import React, { useState } from "react";

const reports = [
  {
    id: 1,
    type: "Annual Report",
    date: "2025",
    title: "Annual Report 2025",
    description:
      "Comprehensive overview of our investments, performance metrics, and strategic updates from 2025.",
    badge: "2025",
  },
  {
    id: 2,
    type: "Performance Update",
    date: "Q2 2026",
    title: "Q2 2026 Performance Update",
    description:
      "Summary of portfolio performance for Q2 2026 including sector-wise highlights and fund allocation.",
    badge: "Q2 2026",
  },
  {
    id: 3,
    type: "Portfolio Overview",
    date: "2026",
    title: "Portfolio Overview",
    description:
      "Snapshot of all portfolio companies, their stages, and progress updates across 12 countries.",
    badge: "2026",
  },
  {
    id: 4,
    type: "Market Outlook",
    date: "2026",
    title: "Market Outlook Report",
    description:
      "Insights into emerging trends, high-growth sectors, and strategic market forecasts for the year ahead.",
    badge: "2026",
  },
  {
    id: 5,
    type: "Annual Report",
    date: "2024",
    title: "Annual Report 2024",
    description:
      "Full-year review of Genesis Ventures' fund performance, notable exits, and new commitments in 2024.",
    badge: "2024",
  },
  {
    id: 6,
    type: "Performance Update",
    date: "Q1 2026",
    title: "Q1 2026 Performance Update",
    description:
      "First-quarter portfolio performance summary, sector highlights, and key milestones from Q1 2026.",
    badge: "Q1 2026",
  },
];

const filterTabs = [
  "All",
  "Annual Report",
  "Performance Update",
  "Portfolio Overview",
  "Market Outlook",
];

const PDFIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ReportsAndUpdates = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? reports
      : reports.filter((r) => r.type === activeFilter);

  return (
    <section className="min-h-screen w-full bg-white flex flex-col px-8 md:px-16 py-10 md:py-24">

      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          Reports & Updates
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-6 md:pt-10 mb-8 md:mb-12">

        {/* Left: heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-genesis-navy leading-snug font-[PPFONT] max-w-xl">
          Stay informed with our latest performance reports, portfolio
          overviews, and market insights.
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-3 shrink-0">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`
                text-xs uppercase tracking-widest font-[GT50] px-3 py-1.5 border transition-all duration-150
                ${
                  activeFilter === tab
                    ? "border-genesis-navy bg-genesis-navy text-white"
                    : "border-gray-200 text-gray-500 bg-white hover:border-genesis-navy hover:text-genesis-navy"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 flex-1">
        {filtered.map((report) => (
          <div
            key={report.id}
            className="bg-white flex flex-col gap-4 p-6 md:p-8 group hover:bg-gray-50 transition-colors duration-200"
          >

            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-genesis-red font-[GT50]">
                {report.type}
              </span>
              <span className="text-xs text-gray-400 font-[GT50] tracking-wide">
                {report.badge}
              </span>
            </div>

            <h3 className="text-base md:text-lg font-[PPFONT] text-genesis-navy leading-snug group-hover:text-genesis-red transition-colors duration-200">
              {report.title}
            </h3>

            <p className="text-xs text-gray-500 font-[GT50] leading-relaxed flex-1">
              {report.description}
            </p>

            <div className="border-t border-gray-100" />

            <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-[GT50] text-genesis-navy w-fit hover:text-genesis-red transition-colors duration-150 group/btn">
              <PDFIcon />
              <span className="border-b border-gray-300 group-hover/btn:border-genesis-red pb-0.5 transition-colors duration-150">
                Download PDF
              </span>
              <DownloadIcon />
            </button>

          </div>
        ))}
      </div>

    </section>
  );
};

export default ReportsAndUpdates;
