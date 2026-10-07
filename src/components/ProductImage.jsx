import { useState } from "react";
import { RingIcon, PendantIcon, FrameIcon } from "./icons";

const ICONS = { ring: RingIcon, pendant: PendantIcon, frame: FrameIcon };

export default function ProductImage({ src, alt, icon }) {
  const [failed, setFailed] = useState(false);
  const FallbackIcon = ICONS[icon] || RingIcon;

  if (!src || failed) {
    return (
      <div className="icon-tile w-full h-full flex items-center justify-center">
        <div style={{ transform: "scale(2.6)", color: "var(--primary-strong)" }}>
          <FallbackIcon />
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="w-full h-full object-cover"
    />
  );
}
