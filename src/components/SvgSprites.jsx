import React from 'react';

export default function SvgSprites() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a9c8ff" />
          <stop offset="1" stopColor="#1f5eff" />
        </linearGradient>

        <radialGradient id="starGradBlue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#8ab4ff" />
          <stop offset="100%" stopColor="#1f5eff" />
        </radialGradient>

        <radialGradient id="starGradLight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#dce9ff" />
          <stop offset="100%" stopColor="#8ab4ff" />
        </radialGradient>
      </defs>

      <symbol id="i-wa" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.58.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01"
        />
      </symbol>

      <symbol id="i-dot" viewBox="0 0 24 24">
        <path
          d="M12 1L14.2 8.5L21 4.5L16.5 10.8L23 12L16.5 13.2L21 19.5L14.2 15.5L12 23L9.8 15.5L3 19.5L7.5 13.2L1 12L7.5 10.8L3 4.5L9.8 8.5Z"
          fill="currentColor"
        />
      </symbol>

      <symbol id="g-sparkle-4" viewBox="0 0 100 100">
        <path
          d="M50 0 C52 36 64 48 100 50 C64 52 52 64 50 100 C48 64 36 52 0 50 C36 48 48 36 50 0Z"
          fill="url(#starGradBlue)"
        />
      </symbol>

      <symbol id="g-star-8" viewBox="0 0 100 100">
        <polygon
          points="50,0 59,34 85,15 66,41 100,50 66,59 85,85 59,66 50,100 41,66 15,85 34,59 0,50 34,41 15,15 41,34"
          fill="url(#starGradBlue)"
        />
      </symbol>

      <symbol id="g-star-12" viewBox="0 0 100 100">
        <polygon
          points="50,0 56,33 75,7 63,37 93,25 67,44 100,50 67,56 93,75 63,63 75,93 56,67 50,100 44,67 25,93 37,63 7,75 33,56 0,50 33,44 7,25 37,37 25,7 44,33"
          fill="url(#starGradLight)"
        />
      </symbol>

      <symbol id="i-wallet" viewBox="0 0 24 24">
        <path
          d="M3 7a2 2 0 0 1 2-2h12v4M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H5a2 2 0 0 1-2-2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="16.5" cy="13.5" r="1.2" fill="currentColor" />
      </symbol>

      <symbol id="i-layers" viewBox="0 0 24 24">
        <path
          d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </symbol>

      <symbol id="i-building" viewBox="0 0 24 24">
        <path
          d="M5 21V4h9v17M14 9h5v12M9 8h1M9 12h1M9 16h1M3 21h18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </symbol>

      <symbol id="i-check" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
          d="m7.5 12.3 3 3 6-6.3"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>

      <symbol id="i-chev" viewBox="0 0 24 24">
        <path
          d="m6 9 6 6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>

      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path
          d="M7 17 17 7M8 7h9v9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>

      <symbol id="i-bolt" viewBox="0 0 24 24">
        <path
          d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </symbol>

      <symbol id="i-phone" viewBox="0 0 24 24">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </symbol>

      <symbol id="i-sliders" viewBox="0 0 24 24">
        <path
          d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </symbol>

      <symbol id="gauge" viewBox="0 0 220 120">
        <path
          d="M16 110a94 94 0 0 1 188 0"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="26"
          strokeDasharray="5 7"
        />
      </symbol>
    </svg>
  );
}
