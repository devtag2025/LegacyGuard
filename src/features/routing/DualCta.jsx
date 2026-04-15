import { useNavigate } from "react-router-dom";

export function DualCTA({ onAdviserClick }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={onAdviserClick}
        className="w-full py-4 px-6 font-sans text-[15px] font-medium bg-cadet text-night rounded-sm hover:bg-cadet/90 transition-colors"
      >
        Speak to an adviser
      </button>
      <button
        type="button"
        onClick={() => navigate("/will")}
        className="w-full py-4 px-6 font-sans text-[15px] text-cadet/70 border border-cadet/20 rounded-sm hover:border-cadet/40 hover:text-cadet transition-colors"
      >
        Continue with my will
      </button>

      <p className="font-sans text-xs text-cadet/40 text-center mt-1">
        No obligation — just a conversation.
      </p>
    </div>
  );
}

export default DualCTA;
