type CircleProps = {
  progress: number;
};

export default function Circle({ progress }: CircleProps) {
  return (
    <div className="relative flex items-center justify-center w-[136px] h-[120px]">
      <svg>
        <g transform="rotate(-90, 68, 68)">
          <circle
            cx={68}
            cy={68}
            r={60}
            fill="none"
            stroke="var(--white)"
            stroke-width={8}
            stroke-dasharray={378}
            stroke-dashoffset={0}
          />
          <circle
            cx={68}
            cy={68}
            r={60}
            fill="none"
            stroke="var(--dark-gray)"
            stroke-width={8}
            stroke-dasharray={378}
            stroke-dashoffset={(378 - (progress * 378) / 100)}
          />
        </g>
      </svg>
      <h2 className="absolute text-2xl text-[var(--dark-gray)] mb-4">
        {progress}%
      </h2>
    </div>
  );
}
