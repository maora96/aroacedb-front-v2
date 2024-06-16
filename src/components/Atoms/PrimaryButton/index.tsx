import styles from "./styles.module.scss";

interface IPrimaryButton {
  text: string;
  onClick?: () => void;
  paddingY: string;
  paddingX: string;
}

export function PrimaryButton({
  text,
  onClick,
  paddingY,
  paddingX,
}: IPrimaryButton) {
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
