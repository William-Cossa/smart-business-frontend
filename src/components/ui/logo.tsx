import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity">
      <Image src="/logo.png" alt="Logo" width={100} loading="eager" height={100} />
    </div>
  );
}
