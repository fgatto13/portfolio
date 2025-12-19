type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Panel({ children, className = "" }: Props) {
  return (
    <div className={`panel-metal ${className}`}>
      {children}
    </div>
  );
}
