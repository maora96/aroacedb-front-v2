import styles from "./styles.module.scss";

interface IPrimaryButton {
  text: string;
  onClick?: () => void;
  paddingY: string;
  paddingX: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
}

export function PrimaryButton({
  text,
  onClick,
  paddingY,
  paddingX,
  buttonType,
}: IPrimaryButton) {
  return (
    <button
      type={buttonType ? `${buttonType}` : "button"}
      className={styles.button}
      onClick={onClick}
      style={{ padding: `${paddingY} ${paddingX}` }}
    >
      {text}
    </button>
  );
}
