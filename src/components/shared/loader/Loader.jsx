
import "./loader.css";

const Loader = ({
  size = "md",
  color = "primary",
  className = "",
  "aria-label": ariaLabel = "Loading",
}) => {
  const style = typeof size === "number" 
    ? { width: size, aspectRatio: 1 } 
    : {};
  const isHexColor = typeof color === "string" && color.startsWith("#");
  const sizeClass = typeof size === "string" ? size : "";
  const colorAttr = isHexColor ? undefined : color;

  return (
    <div
      className={`loader ${sizeClass} ${className}`.trim()}
      style={{
        ...style,
        ...(isHexColor && {
          "--loader-bg-1": color,
          "--loader-bg-2": `${color}99`, 
        }),
      }}
      data-color={colorAttr}
      role="status"
      aria-label={ariaLabel}
    />
  );
};

export default Loader;