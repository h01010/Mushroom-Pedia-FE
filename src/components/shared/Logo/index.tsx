import { useNavigate } from 'react-router-dom';

type LogoProps = {
  fill?: string;
  height?: string;
};

const Logo = ({ fill = '#000000', height }: LogoProps) => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <svg
      fill={fill}
      height={height}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      onClick={handleLogoClick}
    >
      <g>
        <g>
          <polygon points="166.957,0 166.957,33.391 222.609,33.391 222.609,122.435 256,122.435 256,33.391 345.043,33.391 345.043,0 		" />
        </g>
      </g>
      <g>
        <g>
          <rect x="256" y="122.435" width="89.043" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="345.043,33.391 345.043,122.435 378.435,122.435 378.435,66.783 411.826,66.783 411.826,33.391 		" />
        </g>
      </g>
      <g>
        <g>
          <rect x="411.826" y="66.783" width="33.391" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="445.217" y="100.174" width="33.391" height="66.783" />
        </g>
      </g>
      <g>
        <g>
          <rect x="478.609" y="166.957" width="33.391" height="111.304" />
        </g>
      </g>
      <g>
        <g>
          <rect x="33.391" y="100.174" width="33.391" height="66.783" />
        </g>
      </g>
      <g>
        <g>
          <rect x="66.783" y="66.783" width="33.391" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="100.174" y="33.391" width="66.783" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="133.565" y="122.435" width="55.652" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="189.217" y="155.826" width="33.391" height="55.652" />
        </g>
      </g>
      <g>
        <g>
          <rect x="100.174" y="155.826" width="33.391" height="55.652" />
        </g>
      </g>
      <g>
        <g>
          <rect x="133.565" y="211.478" width="55.652" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="189.217" y="478.609" width="133.565" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <polygon
            points="33.391,278.261 33.391,311.652 155.826,311.652 155.826,478.609 189.217,478.609 189.217,311.652 
			322.783,311.652 322.783,478.609 356.174,478.609 356.174,311.652 478.609,311.652 478.609,278.261 		"
          />
        </g>
      </g>
      <g>
        <g>
          <rect y="166.957" width="33.391" height="111.304" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
