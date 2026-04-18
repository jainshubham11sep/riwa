export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="display text-4xl md:text-5xl mt-3">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-ink/70 leading-relaxed md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
