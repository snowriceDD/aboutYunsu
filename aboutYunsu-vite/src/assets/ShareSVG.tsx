interface SvgProps {
  onClick: () => void;
}

export const ShareSVG = ({ onClick }: SvgProps) => (

  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    xmlSpace="preserve"
    className="share"
    onClick={onClick}
  >
    <circle
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      strokeMiterlimit={10}
      cx={51}
      cy={13}
      r={12}
    />
    <circle
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      strokeMiterlimit={10}
      cx={11}
      cy={42}
      r={10}
    />
    <circle
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      strokeMiterlimit={10}
      cx={48}
      cy={55}
      r={8}
    />
    <line
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      strokeMiterlimit={10}
      x1={40}
      y1={54}
      x2={20}
      y2={46}
    />
    <line
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      strokeMiterlimit={10}
      x1={19}
      y1={35}
      x2={41}
      y2={21}
    />
  </svg>
);
