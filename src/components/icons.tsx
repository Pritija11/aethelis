type IconProps = {
  className?: string;
};

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconLogo({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 4.5 17.5 12 12 19.5 6.5 12Z" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTrendingUp({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 16 9 10.5l4 4 7.5-8.5" />
      <path d="M15.5 6h5v5" />
    </svg>
  );
}

export function IconShieldCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 19 6v6c0 4-3 7-7 8.5-4-1.5-7-4.5-7-8.5V6l7-2.5Z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.8 19c0.9-3.1 3.4-4.8 6.2-4.8s5.3 1.7 6.2 4.8" />
      <circle cx="17" cy="8.5" r="2.3" opacity="0.7" />
      <path d="M15.5 14.5c2.2 0.3 3.8 1.8 4.5 4.3" opacity="0.7" />
    </svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1-3.5 4-5.5 7.5-5.5s6.5 2 7.5 5.5" />
    </svg>
  );
}

export function IconFileText({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3.5h7l4 4v13H7Z" />
      <path d="M14 3.5v4h4M9.5 12.5h5M9.5 16h5" />
    </svg>
  );
}

export function IconLock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5.5" y="10.5" width="13" height="9" rx="1.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.5 5.3 3.5 8.5s-1.3 6.2-3.5 8.5c-2.2-2.3-3.5-5.3-3.5-8.5s1.3-6.2 3.5-8.5Z" />
    </svg>
  );
}

export function IconScale({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5v17M7 7.5h10" />
      <path d="M4 7.5 2 13a2.8 2.8 0 0 0 4 0ZM20 7.5 18 13a2.8 2.8 0 0 0 4 0Z" />
      <path d="M8.5 20.5h7" />
    </svg>
  );
}

export function IconHandshake({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2.5 11.5 7 8l3 2 2-1.8 3 2.3 3.5-2.5 3 2" />
      <path d="M8 12.5l3 2.5 2-1.8 2.5 2M4 12l3.5 5.5a2 2 0 0 0 3 .4l.5-.4M20 12l-3.5 5.5a2 2 0 0 1-3 .4" />
    </svg>
  );
}

export function IconPieChart({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5v8.5h8.5A8.5 8.5 0 1 1 12 3.5Z" />
      <path d="M15.5 3.9A8.5 8.5 0 0 1 20.1 8.5H13Z" opacity="0.6" />
    </svg>
  );
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.6 3.5h2.4l1.4 4-2 1.6a12 12 0 0 0 5.5 5.5l1.6-2 4 1.4v2.4c0 1-.9 1.8-1.9 1.7-6-1-10.6-5.6-11.7-11.7-.1-1 .7-1.9 1.7-1.9Z" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21.5c4-3.8 7-7.6 7-11.5a7 7 0 1 0-14 0c0 3.9 3 7.7 7 11.5Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="1" />
      <path d="M8.5 7.5h1.5M14 7.5h1.5M8.5 11.5h1.5M14 11.5h1.5M8.5 15.5h1.5M14 15.5h1.5M10.5 20.5v-3h3v3" />
    </svg>
  );
}

export function IconMessageSquare({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4Z" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 13l4.5 4.5L19 7" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
