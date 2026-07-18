type ArchitectureStackProps = {
  layers: string[];
  className?: string;
};

export function ArchitectureStack({ layers, className = "" }: ArchitectureStackProps) {
  return (
    <div
      className={`font-mono text-[0.7rem] leading-relaxed text-[var(--ink-soft)] ${className}`}
      aria-label="Architecture stack"
    >
      {layers.map((layer, index) => (
        <div key={layer}>
          <span className="block rounded-md border border-[var(--line)] bg-[var(--paper)] px-3 py-1.5 text-center">
            {layer}
          </span>
          {index < layers.length - 1 ? (
            <span className="my-1 block text-center text-[var(--muted)]" aria-hidden="true">
              ↓
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
