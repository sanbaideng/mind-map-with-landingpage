export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#6366F1' }} /> {/* Indigo */}
          <stop offset="100%" style={{ stopColor: '#8B5CF6' }} /> {/* Purple */}
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#10B981' }} /> {/* Emerald */}
          <stop offset="100%" style={{ stopColor: '#6EE7B7' }} /> {/* Green */}
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="white" />

      {/* Letters with gradients */}
      <g transform="translate(50,50)">
        {/* R letter */}
        <path
          d="M-20 -15 L-20 15 L-10 15 L-10 2 L-5 2 L0 15 L10 15 L4 0 C7 0 10 -3 10 -7 C10 -11 7 -15 0 -15 Z M-10 -7 L0 -7 C2 -7 2 -5 0 -5 L-10 -5 Z"
          fill="url(#gradient1)"
        />
        {/* G letter */}
        <path
          d="M15 -15 C8 -15 2 -8 2 0 C2 8 8 15 15 15 C22 15 28 8 28 0 L28 -2 L15 -2 L15 5 L20 5 L20 0 C20 -4 17 -7 15 -7 C13 -7 10 -4 10 0 C10 4 13 7 15 7 C17 7 19 5 20 3 L27 6 C24 11 20 15 15 15 C8 15 2 8 2 0 C2 -8 8 -15 15 -15 Z"
          fill="url(#gradient2)"
        />
      </g>
    </svg>
  )
}
