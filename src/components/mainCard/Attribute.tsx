const Attribute = ({ attribute }: Props) => {
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
