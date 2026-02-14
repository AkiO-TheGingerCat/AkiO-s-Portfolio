export type Certificate = {
  title: string;
  issuer: string;
  date?: string;      // e.g. "2026-02" or "Feb 2026"
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  // Add items later like this:
  // {
  //   title: "Responsive Web Design",
  //   issuer: "freeCodeCamp",
  //   date: "2026-03",
  //   credentialUrl: "https://...",
  // },
];
