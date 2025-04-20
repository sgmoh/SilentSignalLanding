const Logo = () => {
  return (
    <>
      {/* Top Red Path */}
      <svg 
        className="absolute top-0 left-0 w-full h-full" 
        viewBox="0 0 300 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M130 120C130 120 130 120 130 120C130 120 190 120 190 120C230 120 250 140 250 180C250 180 250 220 250 220" 
          fill="none" 
          stroke="#E92019" 
          strokeWidth="60" 
          strokeLinecap="round"
        />
      </svg>
      
      {/* Bottom Black Path */}
      <svg 
        className="absolute top-0 left-0 w-full h-full" 
        viewBox="0 0 300 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M170 180C170 180 170 180 170 180C170 180 110 180 110 180C70 180 50 160 50 120C50 120 50 80 50 80" 
          fill="none" 
          stroke="#111111" 
          strokeWidth="60" 
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default Logo;
