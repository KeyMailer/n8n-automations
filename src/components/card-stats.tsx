import type { Automation } from "../lib/automations-data";

interface StatsBarProps {
  automations: Automation[];
}

export default function CardStats({ automations }: StatsBarProps) {
  const all = automations.length;
  const active = automations.filter((a) => a.status === "active").length;
  const inactive = automations.filter((a) => a.status === "inactive").length;

  return (
    <div className="flex flex-col md:flex-row gap-3">
      {/* Active Card */}
      <div className="border border-border-light dark:border-0 dark:bg-[#171717] rounded-[14px] p-5 w-full md:w-48">
        <h1 className="font-bold text-3xl tracking-widest">{all}</h1>
        <p className="text-sm text-text-color">Total Automations</p>
      </div>

      {/* Active Card */}
      <div className="border border-border-light dark:border-0 dark:bg-[#171717] rounded-[14px] p-5 w-full md:w-48">
        <h1 className="font-bold text-3xl tracking-widest">{active}</h1>
        <p className="text-sm text-text-color">Active</p>
      </div>

      {/* Inactive Card */}
      <div className="border border-border-light dark:border-0 dark:bg-[#171717] rounded-[14px] p-5 w-full md:w-48">
        <h1 className="font-bold text-3xl tracking-widest">{inactive}</h1>
        <p className="text-sm text-text-color">Inactive</p>
      </div>
    </div>
  );
}
