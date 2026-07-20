import type { ReactNode } from "react";

type MockupBrand = {
  name: string;
  tagline: string;
  initials: string;
  accent: string;
};

type MockupFrameProps = {
  brand: MockupBrand;
  children: ReactNode;
};

function MockupFrame({ brand, children }: MockupFrameProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_12px_40px_rgba(26,21,32,0.07)]">
      <div
        className="flex items-center gap-1.5 border-b border-[var(--line)] bg-[var(--paper)] px-3 py-2"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-[rgba(228,164,180,0.55)]" />
        <span className="h-2 w-2 rounded-full bg-[rgba(228,164,180,0.35)]" />
        <span className="h-2 w-2 rounded-full bg-[rgba(228,164,180,0.2)]" />
      </div>
      <div
        className="flex items-center justify-between gap-2 border-b border-[var(--line)] px-3 py-2"
        aria-hidden="true"
      >
        <div className="flex min-w-0 items-center gap-2">
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[8px] font-semibold text-white"
            style={{ backgroundColor: brand.accent }}
          >
            {brand.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-[10px] font-medium text-[var(--ink)]">{brand.name}</p>
            <p className="truncate text-[8px] text-[var(--muted)]">{brand.tagline}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-[var(--line)] bg-[var(--paper)] px-2 py-0.5 text-[7px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
          Example UI
        </span>
      </div>
      <div className="aspect-[16/10] bg-[var(--paper)] p-3 sm:p-4">{children}</div>
    </div>
  );
}

function JobTrackerMockup({ brand }: { brand: MockupBrand }) {
  const jobs = [
    {
      name: "Boiler install",
      place: "Mortlake",
      status: "In progress",
      tone: "text-[var(--ink)]",
      badge: { backgroundColor: `${brand.accent}22`, color: brand.accent },
    },
    {
      name: "Radiator check",
      place: "Kew",
      status: "Scheduled",
      tone: "text-[var(--ink)]",
      badge: { backgroundColor: "rgba(228,164,180,0.25)", color: "var(--plum)" },
    },
    {
      name: "Annual service",
      place: "Twickenham",
      status: "Complete",
      tone: "text-[var(--muted)]",
      badge: { backgroundColor: "var(--line)", color: "var(--muted)" },
    },
  ];

  return (
    <MockupFrame brand={brand}>
      <div className="flex h-full flex-col gap-2" aria-hidden="true">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            This week
          </p>
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-medium text-white"
            style={{ backgroundColor: brand.accent }}
          >
            + Job
          </span>
        </div>
        <ul className="flex flex-1 flex-col gap-1.5">
          {jobs.map((job) => (
            <li
              key={job.name}
              className="flex items-center justify-between gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-2.5 py-2"
            >
              <div className="min-w-0">
                <p className={`truncate text-[11px] font-medium ${job.tone}`}>{job.name}</p>
                <p className="text-[9px] text-[var(--muted)]">{job.place}</p>
              </div>
              <span
                className="shrink-0 rounded-full px-2 py-0.5 text-[8px] font-medium"
                style={job.badge}
              >
                {job.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </MockupFrame>
  );
}

function ClientPortalMockup({ brand }: { brand: MockupBrand }) {
  return (
    <MockupFrame brand={brand}>
      <div className="flex h-full flex-col gap-2" aria-hidden="true">
        <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-2.5 py-2">
          <p className="text-[9px] uppercase tracking-[0.12em] text-[var(--muted)]">Client</p>
          <p className="text-[11px] font-medium text-[var(--ink)]">The Pemberton project</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-1.5">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-2">
            <p className="text-[8px] uppercase tracking-[0.1em] text-[var(--muted)]">Next visit</p>
            <p className="mt-1 text-[10px] font-medium text-[var(--ink)]">Wed 9 Sep</p>
            <p className="text-[9px]" style={{ color: brand.accent }}>
              2:00pm
            </p>
          </div>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-2">
            <p className="text-[8px] uppercase tracking-[0.1em] text-[var(--muted)]">Documents</p>
            <p className="mt-1 text-[10px] text-[var(--ink-soft)]">Moodboard.pdf</p>
            <p className="text-[10px] text-[var(--ink-soft)]">Estimate v2</p>
          </div>
          <div
            className="col-span-2 rounded-lg border p-2"
            style={{ borderColor: `${brand.accent}33`, backgroundColor: `${brand.accent}12` }}
          >
            <p className="text-[8px] uppercase tracking-[0.1em] text-[var(--muted)]">Message</p>
            <p className="mt-1 text-[10px] leading-snug text-[var(--ink-soft)]">
              Fabric samples approved. Layout plan attached for review.
            </p>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function StockListMockup({ brand }: { brand: MockupBrand }) {
  const rows = [
    { item: "MDF sheet 18mm", qty: "12", loc: "Aisle 3" },
    { item: "Deck screws 50mm", qty: "40", loc: "Van 1" },
    { item: "Masking tape", qty: "9", loc: "Counter" },
  ];

  return (
    <MockupFrame brand={brand}>
      <div className="flex h-full flex-col gap-2" aria-hidden="true">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-2 border-b border-[var(--line)] pb-1 text-[8px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
          <span>Item</span>
          <span className="text-right">Qty</span>
          <span className="text-right">Where</span>
        </div>
        <ul className="flex flex-1 flex-col gap-1">
          {rows.map((row) => (
            <li
              key={row.item}
              className="grid grid-cols-[1fr_auto_auto] gap-x-2 rounded-md bg-[var(--surface)] px-2 py-1.5 text-[10px]"
            >
              <span className="truncate text-[var(--ink)]">{row.item}</span>
              <span className="text-right font-medium" style={{ color: brand.accent }}>
                {row.qty}
              </span>
              <span className="text-right text-[var(--muted)]">{row.loc}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between rounded-md border border-dashed border-[var(--line)] px-2 py-1 text-[9px] text-[var(--muted)]">
          <span>Low stock alert</span>
          <span style={{ color: brand.accent }}>2 items</span>
        </div>
      </div>
    </MockupFrame>
  );
}

const mockupScreens = {
  jobs: JobTrackerMockup,
  portal: ClientPortalMockup,
  stock: StockListMockup,
} as const;

export type AppBuildMockupItem = {
  title: string;
  caption: string;
  brand: MockupBrand;
  type: keyof typeof mockupScreens;
};

type AppBuildMockupsProps = {
  items: readonly AppBuildMockupItem[];
};

export function AppBuildMockups({ items }: AppBuildMockupsProps) {
  return (
    <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Screen = mockupScreens[item.type];
        return (
          <li key={item.title}>
            <Screen brand={item.brand} />
            <h3 className="font-display mt-4 text-lg font-medium text-[var(--ink)]">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{item.caption}</p>
          </li>
        );
      })}
    </ul>
  );
}
