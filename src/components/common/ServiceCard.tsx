import type { Icon } from "iconsax-react";

type ServiceCardProps = {
  Icon: Icon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  Icon,
  iconBg,
  iconColor,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center px-8 py-12 text-center">
      <div
        className="mb-6 rounded-full p-[18px]"
        style={{ background: iconBg }}
      >
        <Icon size="32" color={iconColor} variant="Linear" />
      </div>
      <h3 className="font-poppins mb-3 text-xl font-bold text-white">
        {title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-white/60">
        {description}
      </p>
    </div>
  );
}
