export function BrandLogo() {
  return (
    <svg className="brand-logo" viewBox="0 0 900 190" role="img" aria-label="PISIMAI TECHNOLOGY" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brand-mark-gradient" x1="36" y1="22" x2="176" y2="148" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#62F2F4" />
          <stop offset=".48" stopColor="#278EFF" />
          <stop offset="1" stopColor="#8A72FF" />
        </linearGradient>
        <linearGradient id="brand-word-gradient" x1="270" y1="0" x2="690" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7FAFF" />
          <stop offset="1" stopColor="#DCEBFF" />
        </linearGradient>
      </defs>
      <rect width="900" height="190" fill="#070B16" />
      <path className="brand-logo-mark" d="M53 145V48C53 37 62 28 73 28H113C137 28 153 44 153 66C153 88 137 104 113 104H53" fill="none" stroke="url(#brand-mark-gradient)" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M62 137V48C62 42 67 37 74 37H112C131 37 144 49 144 66C144 83 131 95 112 95H62" fill="none" stroke="#D9FFFF" strokeWidth="2" strokeLinecap="round" opacity=".48" />
      <path d="M220 34V156" stroke="#31445F" strokeWidth="1.5" />
      <text x="263" y="91" fill="url(#brand-word-gradient)" fontFamily="Arial, Helvetica, sans-serif" fontSize="61" fontWeight="700" letterSpacing="5">PISIMAI</text>
      <text x="267" y="130" fill="#55DCEB" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="600" letterSpacing="11">TECHNOLOGY</text>
      <path d="M265 148H680" stroke="#29415D" strokeWidth="1" opacity=".7" />
      <path d="M265 148H332" stroke="#39CFE8" strokeWidth="1.5" opacity=".8" />
    </svg>
  );
}
