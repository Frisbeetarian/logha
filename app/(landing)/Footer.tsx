import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/es.svg"
            alt="spanish flag"
            width={32}
            height={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>

        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/it.svg"
            alt="italy flag"
            width={32}
            height={32}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>

        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/es.svg"
            alt="spanish flag"
            width={32}
            height={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>

        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/es.svg"
            alt="spanish flag"
            width={32}
            height={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>

        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/es.svg"
            alt="spanish flag"
            width={32}
            height={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
      </div>
    </footer>
  );
};
