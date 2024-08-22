import { useState } from "react";
import { Story } from "../../types";
import { GlobalLayout } from "../../components/GlobalLayout";
import { GeneralCard } from "../../components/GeneralCard";
import styles from "./styles.module.scss";
import { SecondaryButton } from "../../components/Atoms/SecondaryButton";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { useGetAdminStories } from "../../hooks/stories";
import { AdminStoryRow } from "../../components/AdminStoryRow";

export function AdminStories() {
  const [status, setStatus] = useState<boolean>(true);
  const [search, setSearch] = useState<string | undefined>(undefined);

  const { data, refetch } = useGetAdminStories({
    status: status,
    search: search,
  });

  return (
    <GlobalLayout>
      <>
        <div className={styles.buttons}>
          {status === true ? (
            <PrimaryButton
              text="Approved stories"
              onClick={() => setStatus(false)}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          ) : (
            <SecondaryButton
              text="Approved stories"
              onClick={() => setStatus(true)}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          )}

          {status !== true ? (
            <PrimaryButton
              text="Unapproved stories"
              onClick={() => setStatus(true)}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          ) : (
            <SecondaryButton
              text="Unapproved stories"
              onClick={() => setStatus(false)}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          )}
        </div>
        <input
          type="text"
          id="Search"
          placeholder="Search for stories..."
          className={styles.input}
          onChange={(data) => {
            setSearch(data.target.value);
          }}
        />
        <div className={styles.table}>
          <div className={styles.tableTitle}>Story Title</div>
          <div className={styles.tableTitle}>Author</div>
          <div className={styles.tableTitle}>Series</div>
          <div className={styles.tableTitle}>Genres</div>
        </div>
        {data?.result?.map((story: Story) => (
          <AdminStoryRow story={story} key={story.id} refetch={refetch} />
        ))}
        {data?.result?.length === 0 && (
          <GeneralCard>
            <div className={styles.cardContent}>
              <h5 className={styles.cardTitle}>No entries found!</h5>
            </div>
          </GeneralCard>
        )}
      </>
    </GlobalLayout>
  );
}
