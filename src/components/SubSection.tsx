import "./SubSection.css";
type Props = {
  title: string;
  subtitle: string;
};

export function SubSection(props: Props) {
  return (
    <div className="container">
      <h2 className="title">{props.title}</h2>
      <p className="subtitle">{props.subtitle}</p>
    </div>
  );
}
