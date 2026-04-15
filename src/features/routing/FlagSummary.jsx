export function FlagSummary({ flags }) {
  if (!flags || flags.length === 0) return null;

  return (
    <div className="border border-cadet/15 rounded-sm bg-cadet/5 p-6 mb-8">
      <p className="font-sans text-xs tracking-widest uppercase text-cadet/50 mb-4">
        Based on what you've told us
      </p>

      <ul className="flex flex-col gap-4">
        {flags.map((flag, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-[7px] w-[5px] h-[5px] min-w-[5px] rounded-full bg-cadet/60"
              aria-hidden="true"
            />
            <span className="font-sans text-[14px] text-frosted/80 leading-relaxed">
              {flag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlagSummary;
