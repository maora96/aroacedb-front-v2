import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlobalLayout } from "../../components/GlobalLayout";
import { useMutation } from "react-query";
import { getAdvancedResults } from "../../api/characters";
import { CharacterCard } from "../../components/CharacterCard";
import { StoryCard } from "../../components/StoryCard";
import { GeneralCard } from "../../components/GeneralCard";
import styles from "./styles.module.scss";
import { SecondaryButton } from "../../components/Atoms/SecondaryButton";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { CharacterRow } from "../../components/CharacterRow";
import { StoryRow } from "../../components/StoryRow";

export function AdvancedResults() {
  const [content, setContent] = useState<any>();
  const [search, setSearch] = useState<string>("");
  const [viewMode, setViewMode] = useState<string>("card");
  let location = useLocation();

  const getAdvancedResultsMutation = useMutation(
    async ({ data, search }: { data: any; search: string }) =>
      getAdvancedResults({
        params: { ...data, amount: 20, page: 1 },
        search: search,
      }),
    {
      onSuccess: (data: any) => {
        setContent(data.data);
      },
    }
  );

  useEffect(() => {
    setSearch(location.state.search);
    getAdvancedResultsMutation.mutate({
      data: location.state.payload,
      search: location.state.search,
    });
  }, [location]);

  return (
    <GlobalLayout
      payload={location.state.payload}
      search={location.state.search}
    >
      <>
        <div className={styles.buttons}>
          {viewMode === "card" ? (
            <PrimaryButton
              text="Card View"
              onClick={() => setViewMode("card")}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          ) : (
            <SecondaryButton
              text="Card View"
              onClick={() => setViewMode("card")}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          )}

          {viewMode === "row" ? (
            <PrimaryButton
              text="Table View"
              onClick={() => setViewMode("row")}
              paddingY="0.625rem"
              paddingX="2rem"
            />
          ) : (
            <SecondaryButton
              text="Table View"
              onClick={() => setViewMode("row")}
              paddingY="0.625rem"
              paddingX="2rem"
            />
          )}
        </div>

        {content?.result?.map((content: any) => {
          if (search === "stories")
            return viewMode === "card" ? (
              <div className={styles.content}>
                <StoryCard story={content} key={content.id} />
              </div>
            ) : (
              <StoryRow story={content} key={content.id} />
            );
          return viewMode === "card" ? (
            <div className={styles.content}>
              {" "}
              <CharacterCard character={content} key={content.id} />
            </div>
          ) : (
            <CharacterRow character={content} key={content.id} />
          );
        })}
        {content?.result?.length === 0 && (
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
