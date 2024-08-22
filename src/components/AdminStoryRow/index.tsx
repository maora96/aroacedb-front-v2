import { genres, matcher } from "../../utils/dictionary";
import { Genres, IEditStory, Story } from "../../types";
import { Tag } from "../Atoms/Tag";
import styles from "./styles.module.scss";
import { PrimaryButton } from "../Atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { GeneralRow } from "../GeneralRow";
import { SecondaryButton } from "../Atoms/SecondaryButton";
import { useState } from "react";
import { DangerButton } from "../Atoms/DangerButton";
import { GeneralModal } from "../GeneralModal";
import { DeleteModal } from "../DeleteModal";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { approveStory, deleteStory, editStory } from "../../api/story";

export function AdminStoryRow({
  story,
  refetch,
}: {
  story: Story;
  refetch: () => void;
}) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [chosenGenres, setChosenGenres] = useState<Genres[]>([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();

  const deleteCharacterMutation = useMutation(
    async (id: string) => deleteStory(id),
    {
      onSuccess: () => {
        setDeleteModal(false);
        refetch();
      },
    }
  );

  const editStoryMutation = useMutation(
    async (params: IEditStory) => editStory({ body: params, id: story.id! }),
    {
      onSuccess: () => {
        setEditMode(false);
        refetch();
      },
    }
  );

  const approveStoryMutation = useMutation(
    async () => approveStory(story.id!),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const genreOptions = genres
    ?.map((genre) => {
      return { value: genre, label: matcher[genre] };
    })
    .filter((item) => item.value !== "Choose one...");

  const onSubmit = (data: any) => {
    const payload = {
      author: data.author,
      title: data.title,
      genres: chosenGenres?.length === 0 ? [] : chosenGenres,
      series: data.series ? data.series : null,
    };

    editStoryMutation.mutate(payload);
  };
  return (
    <div className={styles.megaContainer}>
      <GeneralRow>
        <div className={styles.container}>
          {editMode ? (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.editItem}>
                <input {...register("title")} defaultValue={story?.title} />
              </div>
              <div className={styles.editItem}>
                <input {...register("author")} defaultValue={story?.author} />
              </div>
              <div className={styles.editItem}>
                <input
                  {...register("series")}
                  defaultValue={story?.series ?? ""}
                />
              </div>
              <div className={styles.megaEditItem}>
                <Select
                  closeMenuOnSelect={false}
                  className={styles.multi}
                  isMulti
                  options={genreOptions!}
                  onChange={(state) => {
                    const newGenres = state.map(
                      (ship) => ship.value
                    ) as Genres[];
                    setChosenGenres(newGenres);
                  }}
                />
              </div>
              <div className={styles.contentEdit}>
                <div className={styles.buttons}>
                  <SecondaryButton
                    text="Cancel"
                    onClick={() => setEditMode(false)}
                    paddingY="0.625rem"
                    paddingX="1rem"
                  />
                  <PrimaryButton
                    text="Save"
                    paddingY="0.625rem"
                    paddingX="1rem"
                    buttonType="submit"
                  />
                </div>
              </div>
            </form>
          ) : (
            <div className={styles.rowContent}>
              <div className={styles.content}>
                <div className={styles.item}>{story?.title}</div>
                <div className={styles.item}>{story?.author}</div>
                <div className={styles.item}>{story?.series}</div>
                <div className={styles.megaItem}>
                  {story?.genres.map((genre: string) => (
                    <Tag color="#b5de9d" text={matcher[genre]} key={genre} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {deleteModal && (
            <GeneralModal>
              <DeleteModal
                text={"character"}
                id={story.id!}
                name={story.title}
                setDeleteModal={setDeleteModal}
                onDelete={deleteCharacterMutation}
              />
            </GeneralModal>
          )}
        </div>
      </GeneralRow>
      <div className={styles.buttons}>
        <PrimaryButton
          text="full edit"
          paddingY="0.625rem"
          paddingX="1rem"
          onClick={() => navigate(`/edit/story/${story.id}`)}
        />
        <SecondaryButton
          text="Edit"
          onClick={() => setEditMode(true)}
          paddingY="0.625rem"
          paddingX="1rem"
        />
        <DangerButton
          text="Delete"
          onClick={() => setDeleteModal(true)}
          paddingY="0.625rem"
          paddingX="1rem"
        />
        {story.approved !== true && (
          <PrimaryButton
            text="Approve"
            paddingY="0.625rem"
            paddingX="1rem"
            onClick={() => approveStoryMutation.mutate()}
          />
        )}
      </div>
    </div>
  );
}
