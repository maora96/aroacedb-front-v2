import styles from "./styles.module.scss";

interface ISecondaryButton {
  text: string;
  onClick: () => void;
}

export function SecondaryButton({ text, onClick }: ISecondaryButton) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
