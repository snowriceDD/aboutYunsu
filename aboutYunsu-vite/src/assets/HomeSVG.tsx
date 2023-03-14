import { useNavigate } from "react-router-dom";

export const HomeSVG = () => {
    const navigate = useNavigate();

    return (
        <svg
        id="eb0RPcv3w6l1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        // {...props}
      >
        <ellipse
          rx={133.666459}
          ry={221.736414}
          transform="matrix(.989864 0.989864-.989864 0.989864 400 300)"
          fill="none"
          stroke="#8fff00"
        />
        <ellipse onClick={()=>navigate('/experience')} style={{cursor: "pointer"}}
          rx={133.666459}
          ry={221.736414}
          transform="matrix(.374686 0.374686-.374686 0.374686 611.649612 300)"
          fill="#8fff00"
        />
        <ellipse onClick={()=>navigate('/works')} style={{cursor: "pointer"}}
          rx={133.666459}
          ry={221.736414}
          transform="matrix(.374686 0.374686-.374686 0.374686 400 300)"
          fill="#8fff00"
        />
        <ellipse onClick={()=>navigate('/about')} style={{cursor: "pointer"}}
          rx={133.666459}
          ry={221.736414}
          transform="matrix(.374686 0.374686-.374686 0.374686 188.350388 300)"
          fill="#8fff00"
        />
        <text
    x="400"
    y="300"
    text-anchor="middle"
    alignment-baseline="middle"
    fill="#000000"
    style={{ fontSize: '1.3rem', fontWeight: '700'}}
  >
    Works
  </text>
  <text
    x="188.350388"
    y="300"
    text-anchor="middle"
    alignment-baseline="middle"
    fill="#000000"
    style={{ fontSize: '1.3rem', fontWeight: '700'}}
  >
    About
  </text>
  <text
    x="611.649612"
    y="300"
    text-anchor="middle"
    alignment-baseline="middle"
    fill="#000000"
    style={{ fontSize: '1.3rem', fontWeight: '700'}}
  >
    Experience
  </text>

      </svg>
    )
}