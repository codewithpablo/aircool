interface WaveSeparatorProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export const WaveSeparator = ({ topColor, bottomColor, flip = false }: WaveSeparatorProps) => {
  return (
    <div className={`  relative -z-50 w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      

      {/* Parte inferior complementaria */}
      <div style={{ backgroundColor: bottomColor }} className="relative z-60">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[200px] "
        >
          <path
            d="M0,0V27.35C86.46,64.17,199.18,90.7,
            321.39,93.57c124.1,2.93,248.52-22.28,
            372.58-41.86C794.74,35.05,906.71,16.9,
            1018.29,22.42,1090.8,26,1162,40.33,
            1200,51.78V0Z"
            fill={topColor}
          />
        </svg>
      </div>
    </div>
  );
};
