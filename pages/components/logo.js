const Logo = () => {
  return (
    <svg
      width="102"
      height="100"
      viewBox="0 0 102 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="51" cy="50" rx="51" ry="50" fill="url(#paint0_linear_793_1430)" />
      <g filter="url(#filter0_d_793_1430)">
        <rect
          x="61.5399"
          y="28.0001"
          width="25.0508"
          height="5.54"
          rx="2.77"
          transform="rotate(45 61.5399 28.0001)"
          fill="white"
          fillOpacity="0.89"
        />
        <rect
          x="23"
          y="46.3356"
          width="25.9304"
          height="5.54"
          rx="2.77"
          transform="rotate(-45 23 46.3356)"
          fill="white"
          fillOpacity="0.89"
        />
        <rect
          x="38.6225"
          y="29.0001"
          width="25"
          height="5.54"
          rx="2.77"
          fill="white"
          fillOpacity="0.89"
        />
        <rect
          x="41.8749"
          y="67.8995"
          width="38.4824"
          height="5.54361"
          rx="2.77181"
          transform="rotate(-45 41.8749 67.8995)"
          fill="white"
          fillOpacity="0.89"
        />
        <rect
          x="55.8337"
          y="72.1312"
          width="38.4824"
          height="5.54361"
          rx="2.77181"
          transform="rotate(-135 55.8337 72.1312)"
          fill="white"
          fillOpacity="0.89"
        />
        <rect
          x="47.6225"
          y="67.0001"
          width="38"
          height="6"
          rx="3"
          transform="rotate(-90 47.6225 67.0001)"
          fill="white"
          fillOpacity="0.89"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_793_1430"
          x="22"
          y="28"
          width="62.2535"
          height="51.1312"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="4" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_793_1430" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_793_1430"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_793_1430"
          x1="82.9762"
          y1="10.9375"
          x2="16.5887"
          y2="111.861"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD2BC2" />
          <stop offset="1" stopColor="#352731" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
