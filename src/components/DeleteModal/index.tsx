import styles from "./styles.module.scss";
import { SecondaryButton } from "../Atoms/SecondaryButton";
import { DangerButton } from "../Atoms/DangerButton";

interface IDeleteModal {
  text: string;
  id: string;
  name: string;
  setDeleteModal: (value: boolean) => void;
  onDelete: any;
}

export function DeleteModal({
  text,
  id,
  name,
  setDeleteModal,
  onDelete,
}: IDeleteModal) {
  return (
    <div className={styles.modal}>
      <h5 className={styles.title}>
        Are you sure you want to delete the {text} "{name}"?
      </h5>
      <div className={styles.buttons}>
        <SecondaryButton
          text="Cancel"
          onClick={() => setDeleteModal(false)}
          paddingY="0.625rem"
          paddingX="1rem"
        />
        <DangerButton
          text="Delete"
          onClick={() => onDelete.mutate(id)}
          paddingY="0.625rem"
          paddingX="1rem"
        />
      </div>
    </div>
  );
}
