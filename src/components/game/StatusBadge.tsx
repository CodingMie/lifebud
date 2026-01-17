import React from 'react';

interface StatusBadgeProps {
  icon: React.ReactElement;
  label?: string; // Defined in original props but not used in render, keeping it optional
  value: string | number;
  color: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ icon, value, color }) => (
  <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-black/5 px-3 py-1.5 rounded-full shadow-sm text-slate-900 transition-transform hover:-translate-y-1">
    <div className={`p-1 rounded-full ${color}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: 10, className: "text-white" })}
    </div>
    <div className="flex flex-col leading-none">
       <span className="text-xs font-bold font-mono">{value}</span>
    </div>
  </div>
);
