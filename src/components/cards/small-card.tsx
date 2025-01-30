import { ReactNode } from "react";

const SmallCard = ({
  title,
  count,
  icon,
}: {
  title?: string;
  count?: number;
  icon?: ReactNode;
}) => {
  return (
    <div className="bg-white px-2 flex items-center justify-between gap-5 border h-[90px]">
      <div className="mt-[-20px]">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-zinc-600">{count}</h3>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
