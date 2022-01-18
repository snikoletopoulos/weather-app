const Icon: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt=""
      />
    </div>
  );
};

export default Icon;

interface Props {
  icon: string;
  className?: string;
}
