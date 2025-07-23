import appLogo from '../../assets/app_logo.png';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 32,
  height = 32,
  className = "",
}) => {
  return (
    <img
      src={appLogo}
      alt="Calendar App Logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
};
