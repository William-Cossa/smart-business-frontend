export function Logo() {
  return (
    <div className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity">
      {/* Icon: top black (or white in dark mode), bottom blue */}
      <div className="flex flex-col gap-[2px]">
        {/* We use bg-foreground so it's black in light mode, white in dark mode.
            The logo reference has black top section. */}
        <div className="w-[22px] h-[10px] bg-foreground transition-colors" />
        <div className="w-[22px] h-[10px] bg-[#2F5FA3] transition-colors" />
      </div>
      
      {/* Text: stacked, completely uppercase, corporate font style */}
      <div className="flex flex-col leading-[0.85] font-black tracking-tight text-[#2F5FA3]">
        <span className="text-[13px] uppercase">Smart</span>
        <span className="text-[13px] uppercase">Business</span>
      </div>
    </div>
  );
}
