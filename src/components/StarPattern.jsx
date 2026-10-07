export default function StarPattern({ className }) {
  const id = "star8";
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={id} width="70" height="70" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M35 5 L45 25 L65 35 L45 45 L35 65 L25 45 L5 35 L25 25 Z" />
            <circle cx="35" cy="35" r="4" />
          </g>
        </pattern>
      </defs>
      <rect width="400" height="400" fill={`url(#${id})`} />
    </svg>
  );
}
