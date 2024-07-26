import { GeneralCard } from "../../components/GeneralCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";
import {
  ageGroups,
  genres,
  lengths,
  matcher,
  normalize,
} from "../../utils/dictionary";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import Select from "react-select";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Genres, ICreateStory } from "../../types";
import { useGetCharacter } from "../../hooks/characters";
import { createStory } from "../../api/story";
import { addStoriesToCharacter } from "../../api/characters";

export function AddNewStoryToCharacter() {
  const navigate = useNavigate();
  const [chosenGenres, setChosenGenres] = useState<Genres[]>([]);
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();

  let { id } = useParams();

  const createStoryMutation = useMutation(
    async (params: ICreateStory) => createStory(params),
    {
      onSuccess: (data) => {
        addStoriesToCharacterMutation.mutate({
          storiesIds: [data.data.result.id],
        });
      },
    }
  );

  const addStoriesToCharacterMutation = useMutation(
    async (params: { storiesIds: string[] }) =>
      addStoriesToCharacter({ body: params, id: id! }),
    {
      onSuccess: () => {
        navigate(`/admin/characters`);
      },
    }
  );

  const { data } = useGetCharacter(id!);

  const onSubmit: SubmitHandler<any> = (data: any) => {
    if (chosenGenres?.length === 0) {
      setError("Please select at least one genre.");
    } else if (
      data.ageGroup === "Choose one..." ||
      data.length === "Choose one..."
    ) {
      setError("Please fill all required fields.");
    } else {
      setError("");
      const payload = {
        title: data.title,
        author: data.author,
        series: data.series ? data.series : null,
        volume: data.volume ? data.pairing : null,
        genres: chosenGenres?.length === 0 ? [] : chosenGenres,
        cover: data.cover ? data.cover : null,
        description: data.description,
        length: data.length,
        ageGroup: data.ageGroup === "Choose one..." ? null : data.ageGroup,
        notesAndWarnings: data.notesAndWarnings ? data.notesAndWarnings : null,
        repNotesAndWarnings: data.repNotesAndWarnings
          ? data.repNotesAndWarnings
          : null,
        approved: false,
      };
      createStoryMutation.mutate(payload);
    }
  };

  const genreOptions = genres
    ?.map((genre) => {
      return { value: genre, label: matcher[genre] };
    })
    .filter((item) => item.value !== "Choose one...");

  return (
    <GlobalLayout>
      <div className={styles.boundary}>
        <GeneralCard>
          <div className={styles.content}>
            <h5 className={styles.title}>Add a new story for {data?.name}</h5>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.item}>
                <label className={styles.label} htmlFor="title">
                  Title
                </label>
                <div className={styles.subtitle}>The story's title.</div>
                <input {...register("title", { required: true })} />
              </div>
              <div className={styles.item}>
                <label className={styles.label} htmlFor="author">
                  Author
                </label>
                <div className={styles.subtitle}>The author's name.</div>
                <input {...register("author", { required: true })} />
              </div>
              <div className={styles.item}>
                <label className={styles.label} htmlFor="series">
                  Series
                </label>
                <div className={styles.subtitle}>The series' name.</div>
                <input {...register("series")} />
              </div>
              <div className={styles.block}>
                <div className={styles.box}>
                  <label className={styles.label} htmlFor="volume">
                    Volume
                  </label>
                  <div className={styles.subtitle}>
                    The story's volume, if it is in a series.
                  </div>

                  <div className={styles.option}>
                    <input {...register("volume")} type="number" />
                  </div>

                  <label className={styles.label} htmlFor="typeOfRep">
                    Length
                  </label>
                  <div className={styles.subtitle}>
                    The length of the story.
                  </div>

                  <div className={styles.option}>
                    <select
                      {...register("length", { required: true })}
                      className={styles.select}
                    >
                      {lengths.map((value: string) => (
                        <option value={value} key={value}>
                          {normalize(value)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.box}>
                  <label className={styles.label} htmlFor="ageGroup">
                    Age Group
                  </label>
                  <div className={styles.subtitle}>The story's age group.</div>

                  <div className={styles.option}>
                    <select {...register("ageGroup")} className={styles.select}>
                      {ageGroups.map((value: string) => (
                        <option value={value} key={value}>
                          {normalize(value)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className={styles.label} htmlFor="genres">
                    Genres
                  </label>
                  <div className={styles.subtitle}>The story's genres.</div>

                  <div className={styles.option}>
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
                </div>
              </div>
              <div className={styles.item}>
                <label className={styles.label} htmlFor="description">
                  Description
                </label>
                <div className={styles.subtitle}>A blurb for the story.</div>
                <textarea {...register("description", { required: true })} />
              </div>

              <div className={styles.item}>
                <label className={styles.label} htmlFor="notesAndWarnings">
                  Notes & Warnings
                </label>
                <div className={styles.subtitle}>
                  Any notes or warnings about this story.
                </div>
                <textarea {...register("notesAndWarnings")} />
              </div>

              <div className={styles.item}>
                <label className={styles.label} htmlFor="repNotesAndWarnings">
                  Rep Notes & Warnings
                </label>
                <div className={styles.subtitle}>
                  Any notes or warnings about the story's representation.
                </div>
                <textarea {...register("repNotesAndWarnings")} />
              </div>
              <div className={styles.item}>
                <label className={styles.label} htmlFor="cover">
                  Cover
                </label>
                <div className={styles.subtitle}>
                  A cover to represent the character (possibly the cover of a
                  book they are in).
                </div>
                <input {...register("cover", { required: true })} />
              </div>

              <div className={styles.error}>{error}</div>
              <div className={styles.submit}>
                <PrimaryButton
                  text="Submit"
                  buttonType="submit"
                  paddingY="0.625rem"
                  paddingX="3rem"
                />
              </div>
            </form>
          </div>
        </GeneralCard>
      </div>
    </GlobalLayout>
  );
}
