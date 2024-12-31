interface AsideProps {
  visible?: boolean;
  position?: AsidePosition;
}

type AsidePosition = "left" | "right" | null;

const Aside: React.FC<AsideProps> = ({ visible = true, position = null }) => {
  const pos = position
    ? position === "left"
      ? "aside-left"
      : "aside-right"
    : "";

  return (
    <>{visible && <aside id="aside" className={`aside ${pos}`}></aside>}</>
  );
};

export default Aside;
