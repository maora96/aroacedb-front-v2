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
import { Genres, IEditStory } from "../../types";
import { editStory } from "../../api/story";
import { useGetStory } from "../../hooks/stories";

export function EditStory() {
  const navigate = useNavigate();
  const [chosenGenres, setChosenGenres] = useState<Genres[]>([]);
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();

  let { id } = useParams();
  const { data } = useGetStory(id ?? "");

  const editStoryMutation = useMutation(
    async (params: IEditStory) => editStory({ body: params, id: data.id }),
    {
      onSuccess: () => {
        navigate("/success");
      },
    }
  );

  const onSubmit: SubmitHandler<any> = (data: any) => {
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
    editStoryMutation.mutate(payload);
  };

  const genreOptions = genres
    ?.map((genre) => {
      return { value: genre, label: matcher[genre] };
    })
    .filter((item) => item.value !== "Choose one...");

  return (
    <GlobalLayout>
      {data && (
        <div className={styles.boundary}>
          <GeneralCard>
            <div className={styles.content}>
              <h5 className={styles.title}>Edit story: {data?.title}</h5>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.item}>
                  <label className={styles.label} htmlFor="title">
                    Title
                  </label>
                  <div className={styles.subtitle}>The story's title.</div>
                  <input {...register("title")} defaultValue={data?.title} />
                </div>
                <div className={styles.item}>
                  <label className={styles.label} htmlFor="author">
                    Author
                  </label>
                  <div className={styles.subtitle}>The author's name.</div>
                  <input {...register("author")} defaultValue={data?.author} />
                </div>
                <div className={styles.item}>
                  <label className={styles.label} htmlFor="series">
                    Series
                  </label>
                  <div className={styles.subtitle}>The series' name.</div>
                  <input {...register("series")} defaultValue={data?.series} />
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
                      <input
                        {...register("volume")}
                        type="number"
                        defaultValue={data?.volume}
                      />
                    </div>

                    <label className={styles.label} htmlFor="length">
                      Length
                    </label>
                    <div className={styles.subtitle}>
                      The length of the story.
                    </div>

                    <div className={styles.option}>
                      <select
                        {...register("length")}
                        className={styles.select}
                        defaultValue={data?.length}
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
                    <div className={styles.subtitle}>
                      The story's age group.
                    </div>

                    <div className={styles.option}>
                      <select
                        {...register("ageGroup")}
                        className={styles.select}
                        defaultValue={data?.ageGroup}
                      >
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
                  <textarea
                    {...register("description")}
                    defaultValue={data?.description}
                  />
                </div>

                <div className={styles.item}>
                  <label className={styles.label} htmlFor="notesAndWarnings">
                    Notes & Warnings
                  </label>
                  <div className={styles.subtitle}>
                    Any notes or warnings about this story.
                  </div>
                  <textarea
                    {...register("notesAndWarnings")}
                    defaultValue={data?.notesAndWarnings}
                  />
                </div>

                <div className={styles.item}>
                  <label className={styles.label} htmlFor="repNotesAndWarnings">
                    Rep Notes & Warnings
                  </label>
                  <div className={styles.subtitle}>
                    Any notes or warnings about the story's representation.
                  </div>
                  <textarea
                    {...register("repNotesAndWarnings")}
                    defaultValue={data?.repNotesAndWarnings}
                  />
                </div>
                <div className={styles.item}>
                  <label className={styles.label} htmlFor="cover">
                    Cover
                  </label>
                  <div className={styles.subtitle}>
                    A cover to represent the character (possibly the cover of a
                    book they are in).
                  </div>
                  <input {...register("cover")} defaultValue={data?.cover} />
                </div>

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
      )}
    </GlobalLayout>
  );
}
