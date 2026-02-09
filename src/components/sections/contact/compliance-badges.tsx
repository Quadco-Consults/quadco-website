import { COMPANY } from "@/data/company";

export function ComplianceBadges() {
  return (
    <div className="bg-card p-8 rounded-2xl border border-border">
      <h4 className="text-foreground font-bold mb-4 uppercase text-xs tracking-[0.2em]">
        Industry Regulatory Compliance
      </h4>
      <div className="flex flex-wrap gap-3">
        {COMPANY.compliance.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-secondary rounded text-[10px] text-muted-foreground font-bold border border-border tracking-wider"
          >
            {tag} VERIFIED
          </span>
        ))}
      </div>
    </div>
  );
}

export default ComplianceBadges;
