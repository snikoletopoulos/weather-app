const Attribute: React.FC<Props> = ({ attribute }) => {
  return (
    <section>
      <p className="text-muted">{attribute.title}</p>
      <p>{attribute.value}</p>
    </section>
  );
};

export default Attribute;

interface Props {
  attribute: AttributeInterface;
}

export interface AttributeInterface {
  title: string;
  value: string | number;
}
