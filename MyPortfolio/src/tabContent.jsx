export default function TabContent({ children, isActive }) {
  return isActive ? <div className="tab-content">{children}</div> : null;
}
