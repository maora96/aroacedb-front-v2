import styles from "./styles.module.scss";

export function Tag({ color, text }: { color: string; text: string }) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      {text}
    </div>
  );
}
