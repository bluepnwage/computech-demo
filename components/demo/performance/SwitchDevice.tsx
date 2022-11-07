"use client";
import type { TablerIcon } from "@tabler/icons";
import { cx } from "@util/cx";

interface PropTypes {
  onSwitch: () => void;
  device: string;
  Icon: TablerIcon;
  active: boolean;
}

export function SwitchTab({ onSwitch, Icon, device, active }: PropTypes) {
  const handleClick = () => {
    onSwitch();
  };
  return (
    <button
      className={cx(
        active ? "bg-indigo-600 text-gray-100 " : "bg-white text-gray-900",
        "grow basis-2/4 rounded-md border px-4 py-2 font-semibold last-of-type:rounded-tl-none last-of-type:rounded-bl-none first-of-type:rounded-tr-none first-of-type:rounded-br-none"
      )}
      onClick={handleClick}
    >
      {device} {<Icon size={15} className="inline" aria-hidden />}
    </button>
  );
}
