import { cn } from '@/lib/utils';
import { LucideSquareDashedMousePointer } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Logo({
  fontSize = "text-2xl",
  iconSize = 20
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2", // ✅ horizontal layout
        fontSize
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
        <LucideSquareDashedMousePointer size={iconSize} className="stroke-white" />
      </div>
      <span className="font-extrabold">
        <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Scrap</span>
        <span className="text-stone-700 dark:text-stone-300">Site</span>
      </span>
    </Link>
  );
}

export default Logo;
