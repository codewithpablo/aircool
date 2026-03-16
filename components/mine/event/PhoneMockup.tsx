export default function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative bg-gray-900 p-1.5 rounded-[3rem] shadow-2xl border-4 border-gray-950 aspect-[9/17] max-w-[280px] hover:scale-[1.02] transition-transform duration-500"
    >
      <div className="relative bg-black rounded-[2.5rem] overflow-hidden h-full w-full">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-black rounded-full z-20" />
        {children}
      </div>
    </div>
  );
}
