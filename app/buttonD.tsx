type BtnDProps = {
  onClick?: () => void;
  text?: string;
};

export default function BtnD({ onClick, text = "Відправити" }: BtnDProps) {
  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        flex
        h-11
        w-full
        cursor-pointer
        items-center
        overflow-hidden
        rounded-xl
        border-0
        bg-[#233c1a]
        pl-5
        pr-14
        text-white
        shadow-[inset_0_0_1.6em_-0.6em_#714da6]
        transition-all
      "
    >
      <span className="font-medium tracking-wide">
        {text}
      </span>

      <div
        className="
          absolute
          right-1
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          bg-white
          transition-all
          duration-300
          group-hover:w-[calc(100%-0.5rem)]
          active:scale-95
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="
            h-5
            w-5
            text-[#233c1a]
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </div>
    </button>
  );
}