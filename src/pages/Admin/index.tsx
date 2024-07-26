import { useGetRecentlyAddedCharacters } from "../../hooks/characters";
import { GeneralCard } from "../../components/GeneralCard";
import { CharacterCard } from "../../components/CharacterCard";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { GlobalLayout } from "../../components/GlobalLayout";
import { useNavigate } from "react-router-dom";
import { Character, Story } from "../../types";
import { StoryCard } from "../../components/StoryCard";
import { useGetRecentlyAddedStories } from "../../hooks/stories";
import { useGetPermissions, useGetStats } from "../../hooks/admin";
import styles from "./styles.module.scss";
import { Switch } from "../../components/Atoms/Switch";

export function Admin() {
  const navigate = useNavigate();

  const { data: characters } = useGetRecentlyAddedCharacters();
  const { data: stories } = useGetRecentlyAddedStories();

  const { data: stats } = useGetStats();

  const { data: permissions } = useGetPermissions();

  return (
    <GlobalLayout>
      <div className={styles.cards}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <h4 className={styles.homeTitle}>Dashboard</h4>
            <div className={styles.right}>
              <div className={styles.buttons}>
                <PrimaryButton
                  text="All characters"
                  paddingY="0.625rem"
                  paddingX="2rem"
                  onClick={() => navigate(`/admin/characters`)}
                />
                <PrimaryButton
                  text="All stories"
                  paddingY="0.625rem"
                  paddingX="2rem"
                  onClick={() => navigate(`/admin/stories`)}
                />
              </div>
              {permissions && (
                <div className={styles.permissions}>
                  <Switch
                    text="Character suggestions"
                    defaultValue={permissions[0]?.available}
                    id={permissions[0]?.id}
                  />
                  <Switch
                    text="Story suggestions"
                    defaultValue={permissions[1]?.available}
                    id={permissions[1]?.id}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <h5 className={styles.cardTitle}>Statistics</h5>
        <div className={styles.cardsContent}>
          <GeneralCard>
            <div className={styles.cardContent}>
              <span className={styles.number}>{stats?.totalCharacters}</span>
              <h5 className={styles.title}>Total Characters</h5>
            </div>
          </GeneralCard>
          <GeneralCard>
            <div className={styles.cardContent}>
              <span className={styles.number}>{stats?.totalStories}</span>
              <h5 className={styles.title}>Total Stories</h5>
            </div>
          </GeneralCard>
          <GeneralCard>
            <div className={styles.cardContent}>
              <span className={styles.number}>{stats?.approvedCharacters}</span>
              <h5 className={styles.title}>Approved Characters</h5>
            </div>
          </GeneralCard>
          <GeneralCard>
            <div className={styles.cardContent}>
              <span className={styles.number}>{stats?.approvedStories}</span>
              <h5 className={styles.title}>Approved Stories</h5>
            </div>
          </GeneralCard>
          <GeneralCard>
            <div className={styles.cardContent}>
              <span className={styles.number}>
                {stats?.unapprovedCharacters}
              </span>
              <h5 className={styles.title}>Unapproved Characters</h5>
            </div>
          </GeneralCard>
          <GeneralCard>
            <div className={styles.cardContent}>
              <span className={styles.number}>{stats?.unapprovedStories}</span>
              <h5 className={styles.title}>Unapproved Stories</h5>
            </div>
          </GeneralCard>
        </div>
        <div className={styles.titleContainer}>
          <h5 className={styles.cardTitle}>Recently suggested characters</h5>
          <div className={styles.button}>
            <PrimaryButton
              text="New character"
              paddingY="0.625rem"
              paddingX="1rem"
              onClick={() => navigate(`/suggest-character`)}
            />
          </div>
        </div>
        <div className={styles.cardsContent}>
          {characters?.map((character: Character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </div>
        <div className={styles.buttons}>
          <PrimaryButton
            text="View more"
            paddingY="0.625rem"
            paddingX="2rem"
            onClick={() => navigate(`/admin/characters`)}
          />
        </div>
        <div className={styles.titleContainer}>
          <h5 className={styles.cardTitle}>Recently suggested stories</h5>
          <div className={styles.button}>
            <PrimaryButton
              text="New story"
              paddingY="0.625rem"
              paddingX="1rem"
              onClick={() => navigate(`/suggest-story`)}
            />
          </div>
        </div>
        <div className={styles.cardsContent}>
          {stories?.map((story: Story) => (
            <StoryCard story={story} key={story.id} />
          ))}
        </div>

        <div className={styles.buttons}>
          <PrimaryButton
            text="View more"
            paddingY="0.625rem"
            paddingX="2rem"
            onClick={() => navigate(`/admin/stories`)}
          />
        </div>
      </div>
    </GlobalLayout>
  );
}
