import { certificates } from "../data/certificates";

export function Certificates() {
  if (certificates.length === 0) {
    return (
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5">
        <p className="text-sm text-neutral-400">
          No certificates yet — I’ll add them here as I complete courses and trainings.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {certificates.map((c) => (
        <div
          key={`${c.title}-${c.issuer}`}
          className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5"
        >
          <h3 className="text-base font-semibold tracking-tight">{c.title}</h3>
          <p className="mt-1 text-sm text-neutral-400">
            {c.issuer}
            {c.date ? ` • ${c.date}` : ""}
          </p>

          {c.credentialUrl && (
            <a
              href={c.credentialUrl}
              className="mt-4 inline-flex rounded-xl border border-neutral-800 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
            >
              View Credential
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
