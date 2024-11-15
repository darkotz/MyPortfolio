export default function schedule(title, isActive, onClick) {
  return (
    <button className={isActive ? "active" : ""} onClick={onClick}>
      {title}
    </button>
  );
}
