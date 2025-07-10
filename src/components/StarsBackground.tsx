export default function StarsBackground({
  color = "#ffffff33",
  size = "20px 20px",
}) {
  return (
    <div
      className={`
        absolute inset-0 pointer-events-none
        bg-[radial-gradient(${color}_1px,transparent_1px)]
        opacity-30
      `}
      style={{
        backgroundSize: size,
      }}
    ></div>
  );
}
