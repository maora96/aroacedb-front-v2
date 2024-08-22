import { useGetAdminCharacters } from "../../hooks/characters";
import { useState } from "react";
import { Character } from "../../types";
import { GlobalLayout } from "../../components/GlobalLayout";
import { GeneralCard } from "../../components/GeneralCard";
import styles from "./styles.module.scss";
import { SecondaryButton } from "../../components/Atoms/SecondaryButton";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { AdminCharacterRow } from "../../components/AdminCharacterRow";

export function AdminCharacters() {
  const [status, setStatus] = useState<boolean>(true);
  const [search, setSearch] = useState<string | undefined>(undefined);

  const { data, refetch } = useGetAdminCharacters({
    status: status,
    search: search,
  });

  return (
    <GlobalLayout>
      <>
        <div className={styles.buttons}>
          {status === true ? (
            <PrimaryButton
              text="Approved characters"
              onClick={() => setStatus(false)}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          ) : (
            <SecondaryButton
              text="Approved characters"
              onClick={() => setStatus(true)}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          )}

          {status !== true ? (
            <PrimaryButton
              text="Unapproved characters"
              onClick={() => setStatus(true)}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          ) : (
            <SecondaryButton
              text="Unapproved characters"
              onClick={() => setStatus(false)}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          )}
        </div>

        <input
          type="text"
          id="Search"
          placeholder="Search for characters..."
          className={styles.input}
          onChange={(data) => {
            setSearch(data.target.value);
          }}
        />
        <div className={styles.table}>
          <div className={styles.tableTitle}>Character Name</div>
          <div className={styles.tableTitle}>Gender</div>
          <div className={styles.tableTitle}>Pairing</div>
          <div className={styles.tableTitle}>Author</div>
          <div className={styles.tableTitle}>Series</div>
          <div className={styles.tableTitle}>Genres</div>
          <div className={styles.tableTitle}>Importance</div>
          <div className={styles.tableTitle}>Sexual Orientation</div>
          <div className={styles.tableTitle}>Romantic Orientation</div>
        </div>
        {data?.result?.map((character: Character) => (
          <AdminCharacterRow
            character={character}
            key={character.id}
            refetch={refetch}
          />
        ))}
        {data?.result?.length === 0 && (
          <GeneralCard>
            <div className={styles.cardContent}>
              <h5 className={styles.cardTitle}>No entries found!</h5>

              <p className={styles.cardParagraph}>
                You can always suggest a character or story if you haven't found
                what you were looking for.
              </p>
            </div>
          </GeneralCard>
        )}
      </>
    </GlobalLayout>
  );
}
