import { Header } from "@/app/(landing)/Header";
import { Footer } from "@/app/(landing)/Footer";

type Props = {
  children: React.ReactNode;
};

export default function ButtonsLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center ">
        {children}
      </main>

      <Footer />
    </div>
  );
}
