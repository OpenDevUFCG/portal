import styles from "./subsection.module.css";
type Props = {
  title: string;
  subtitle: string;
};

export function SubSection(props: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </div>
  );
}
