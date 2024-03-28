type Props = {
  children: React.ReactNode;
};

export const StickyWrapper = ({ children }: Props) => {
  return <div className="sticky top-0 h-full w-80">{children}</div>;
};
