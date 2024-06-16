import styles from "./styles.module.scss";

interface ISecondaryButton {
  text: string;
  onClick?: () => void;
  paddingY: string;
  paddingX: string;
}

export function SecondaryButton({
  text,
  onClick,
  paddingY,
  paddingX,
}: ISecondaryButton) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      style={{ padding: `${paddingY} ${paddingX}` }}
    >
      {text}
    </button>
  );
}
