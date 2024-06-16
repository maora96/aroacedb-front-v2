import styles from "./styles.module.scss";

interface IPrimaryButton {
  text: string;
  onClick: () => void;
}

export function PrimaryButton({ text, onClick }: IPrimaryButton) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
