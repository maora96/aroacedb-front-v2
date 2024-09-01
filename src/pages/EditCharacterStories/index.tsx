import { GeneralCard } from "../../components/GeneralCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";
import { matcher } from "../../utils/dictionary";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Story } from "../../types";
import { useGetCharacter } from "../../hooks/characters";
import { ShadowlessGeneralCard } from "../../components/ShadowlessGeneralCard";
import { Tag } from "../../components/Atoms/Tag";
import { DangerButton } from "../../components/Atoms/DangerButton";
import { GeneralModal } from "../../components/GeneralModal";
import { DeleteModal } from "../../components/DeleteModal";
import { removeStoryFromCharacter } from "../../api/characters";

export function EditCharacterStories() {
  let { id } = useParams();
  const { data, refetch } = useGetCharacter(id ?? "");

  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const removeStoryMutation = useMutation(
    async (storyId: string) => removeStoryFromCharacter(id!, storyId),
    {
      onSuccess: () => {
        setDeleteModal(false);
        refetch();
      },
    }
  );

  return (
    <GlobalLayout>
      {data && (
        <div className={styles.boundary}>
          <GeneralCard>
            <div className={styles.content}>
              <h5 className={styles.title}>Edit {data?.name}'s stories</h5>
              {data?.stories?.map((story: Story) => (
                <ShadowlessGeneralCard>
                  <>
                    <img
                      className={styles.cardImage}
                      src={story?.cover || ""}
                      alt="book cover"
                    />{" "}
                    {deleteModal && (
                      <GeneralModal>
                        <DeleteModal
                          text={"story"}
                          id={story.id!}
                          name={story.title}
                          setDeleteModal={setDeleteModal}
                          onDelete={removeStoryMutation}
                        />
                      </GeneralModal>
                    )}
                    <div className={styles.cardContent}>
                      <div className={styles.buttons}>
                        <PrimaryButton
                          text={"Edit story"}
                          paddingY="0.625rem"
                          paddingX="1rem"
                          onClick={() => navigate(`/edit/story/${story.id}`)}
                        />
                        <DangerButton
                          text="Remove story from character"
                          onClick={() => setDeleteModal(true)}
                          paddingY="0.625rem"
                          paddingX="1rem"
                        />
                      </div>
                      <div className={styles.cardCompostTitle}>
                        <h5 className={styles.cardSimpleTitle}>
                          {story?.title}
                        </h5>

                        <h5 className={styles.cardSimpleTitle}>
                          {matcher[story?.length]}
                        </h5>
                      </div>
                      <span className={styles.cardSimpleParagraph}>
                        by {story?.author}
                        {story?.series &&
                          ` | volume ${story?.volume} in the ${story?.series} series`}
                      </span>
                      <div className={styles.cardGenres}>
                        {story?.genres.map((genre: string) => (
                          <Tag
                            color="#b5de9d"
                            text={matcher[genre]}
                            key={genre}
                          />
                        ))}

                        <Tag color="#800080" text={matcher[story?.ageGroup]} />
                      </div>

                      <hr className={styles.cardDivider} />

                      <p className={styles.cardParagraph}>
                        {story?.description}
                      </p>

                      <hr className={styles.cardDivider} />
                      <div className={styles.row}>
                        <div className={styles.unique}>
                          <span className={styles.field}>Notes & Warnings</span>
                          <span>{story?.notesAndWarnings}</span>
                        </div>
                      </div>

                      <div className={styles.row}>
                        <div className={styles.unique}>
                          <span className={styles.field}>
                            Rep Notes & Warnings
                          </span>
                          <span>{story?.repNotesAndWarnings}</span>
                        </div>
                      </div>
                    </div>
                  </>
                </ShadowlessGeneralCard>
              ))}
            </div>
          </GeneralCard>
        </div>
      )}
    </GlobalLayout>
  );
}
