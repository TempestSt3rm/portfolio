export const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto max-w-3xl px-4 ${className}`}>{children}</div>
);
