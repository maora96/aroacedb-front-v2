import { useMutation } from "react-query";
import styles from "./styles.module.scss";
import { changePermission } from "../../../api/admin";

export function Switch({
  text,
  defaultValue,
  id,
}: {
  text: string;
  defaultValue: boolean;
  id: string;
}) {
  const changePermissionMutation = useMutation(async (status: boolean) =>
    changePermission({ id, status })
  );
  return (
    <div className={styles.container}>
      {text}
      <div className={styles.toggleSwitch}>
        <input
          type="checkbox"
          className={styles.checkbox}
          name={text}
          id={text}
          defaultChecked={defaultValue}
          onClick={(value: any) =>
            changePermissionMutation.mutate(value.target.checked)
          }
        />
        <label className={styles.label} htmlFor={text}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
    </div>
  );
}
