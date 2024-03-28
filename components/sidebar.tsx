import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "@/components/sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <aside
      className={cn(
        " h-full flex lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/next.svg" width={40} height={40} alt="Logo" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Logha
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/next.svg" />
        <SidebarItem label="about" href="/about" iconSrc="/next.svg" />
        <SidebarItem
          label="leaderboad"
          href="/leaderboad"
          iconSrc="/next.svg"
        />
        <SidebarItem label="quests" href="/quests" iconSrc="/next.svg" />
        <SidebarItem label="shop" href="/shop" iconSrc="/next.svg" />
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </aside>
  );
};
