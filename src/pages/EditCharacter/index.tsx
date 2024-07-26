import { GeneralCard } from "../../components/GeneralCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";
import {
  genders,
  genres,
  importances,
  matcher,
  normalize,
  pairings,
  relationships,
  romanticOrientations,
  sexualOrientations,
  typeOfReps,
} from "../../utils/dictionary";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import Select from "react-select";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { editCharacter } from "../../api/characters";
import { Genres, IEditCharacter, Relationship } from "../../types";
import { useGetCharacter } from "../../hooks/characters";

export function EditCharacter() {
  let { id } = useParams();
  const { data } = useGetCharacter(id!);

  const navigate = useNavigate();

  const [chosenRelationships, setChosenRelationships] = useState<
    Relationship[]
  >([]);
  const [chosenGenres, setChosenGenres] = useState<Genres[]>([]);

  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();

  const editCharacterMutation = useMutation(
    async (params: IEditCharacter) =>
      editCharacter({ body: params, id: data.id }),
    {
      onSuccess: () => {
        navigate(`/edit/character/${data.id}/stories`);
      },
    }
  );

  const onSubmit: SubmitHandler<any> = (data: any) => {
    const payload = {
      author: data.author,
      gender: data.gender,
      importance: data.importance,
      name: data.name,
      relationships:
        chosenRelationships?.length === 0 ? null : chosenRelationships,
      genres: chosenGenres?.length === 0 ? [] : chosenGenres,
      cover: data.cover ? data.cover : null,
      series: data.series ? data.series : null,
      notesAndWarnings: data.notesAndWarnings ? data.notesAndWarnings : null,
      pairing: data.pairing === "Choose one..." ? null : data.pairing,
      romanticOrientation: data.romanticOrientation,
      sexualOrientation: data.sexualOrientation,
      typeOfRep: data.typeOfRep,
      approved: false,
    };
    editCharacterMutation.mutate(payload);
  };

  const genreOptions = genres
    ?.map((genre) => {
      return { value: genre, label: matcher[genre] };
    })
    .filter((item) => item.value !== "Choose one...");

  const relationshipOptions = relationships
    ?.map((relationship) => {
      return { value: relationship, label: matcher[relationship] };
    })
    .filter((item) => item.value !== "Choose one...");
  return (
    <GlobalLayout>
      {data && (
        <div className={styles.boundary}>
          <GeneralCard>
            <div className={styles.content}>
              <h5 className={styles.title}>Edit character: {data?.name}</h5>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.item}>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <div className={styles.subtitle}>The character's name.</div>
                  <input {...register("name")} defaultValue={data?.name} />
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
                    <label className={styles.label} htmlFor="gender">
                      Gender
                    </label>
                    <div className={styles.subtitle}>
                      The character's gender. Pick from one of the already
                      existing labels or message us to add a new one.
                    </div>

                    <div className={styles.option}>
                      <select
                        {...register("gender")}
                        className={styles.select}
                        defaultValue={data?.gender}
                      >
                        {genders.map((value: string) => (
                          <option value={value} key={value}>
                            {normalize(value)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label className={styles.label} htmlFor="typeOfRep">
                      Type of Rep
                    </label>
                    <div className={styles.subtitle}>
                      The type of rep of the character.
                    </div>

                    <div className={styles.option}>
                      <select
                        {...register("typeOfRep")}
                        className={styles.select}
                        defaultValue={data?.typeOfRep}
                      >
                        {typeOfReps.map((value: string) => (
                          <option value={value} key={value}>
                            {normalize(value)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label className={styles.label} htmlFor="pairing">
                      Pairing
                    </label>
                    <div className={styles.subtitle}>
                      What type of pairing (if any) is present in the story
                      involving this character.
                    </div>

                    <div className={styles.option}>
                      <select
                        {...register("pairing")}
                        className={styles.select}
                        defaultValue={data?.pairing}
                      >
                        {pairings.map((value: string) => (
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
                    {data?.genres.length > 0 && (
                      <div className={styles.subtitle}>
                        Previously:{" "}
                        {data.genres?.map((genre: string, index: number) => {
                          return (
                            `${matcher[genre]}` +
                            `${index + 1 !== data.genres.length ? ", " : ""}`
                          );
                        })}
                        .
                      </div>
                    )}
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

                  <div className={styles.box}>
                    <label className={styles.label} htmlFor="sexualOrientation">
                      Sexual Orientation
                    </label>
                    <div className={styles.subtitle}>
                      The character's sexual orientation. Pick from one of the
                      already existing labels or message us to add a new one.
                    </div>

                    <div className={styles.option}>
                      <select
                        {...register("sexualOrientation")}
                        className={styles.select}
                        defaultValue={data?.sexualOrientation}
                      >
                        {sexualOrientations.map((value: string) => (
                          <option value={value} key={value}>
                            {normalize(value)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label
                      className={styles.label}
                      htmlFor="romanticOrientation"
                    >
                      Romantic Orientation
                    </label>
                    <div className={styles.subtitle}>
                      The character's romantic orientation. Pick from one of the
                      already existing labels or message us to add a new one.
                    </div>

                    <div className={styles.option}>
                      <select
                        {...register("romanticOrientation")}
                        className={styles.select}
                        defaultValue={data?.romanticOrientation}
                      >
                        {romanticOrientations.map((value: string) => (
                          <option value={value} key={value}>
                            {normalize(value)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label className={styles.label} htmlFor="importance">
                      Importance
                    </label>
                    <div className={styles.subtitle}>
                      The character's importance in the story.
                    </div>

                    <div className={styles.option}>
                      <select
                        {...register("importance")}
                        className={styles.select}
                        defaultValue={data?.importance}
                      >
                        {importances.map((value: string) => (
                          <option value={value} key={value}>
                            {normalize(value)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label className={styles.label} htmlFor="relationships">
                      Relationships
                    </label>
                    <div className={styles.subtitle}>
                      What type of relationships are present involving this
                      character.
                    </div>
                    {data?.relationships?.length > 0 && (
                      <div className={styles.subtitle}>
                        Previously:{" "}
                        {data?.relationships?.map(
                          (relationship: string, index: number) => {
                            return (
                              `${matcher[relationship]}` +
                              `${
                                index + 1 !== data.relationships.length
                                  ? ", "
                                  : ""
                              }`
                            );
                          }
                        )}
                        .
                      </div>
                    )}

                    <div className={styles.option}>
                      <Select
                        closeMenuOnSelect={false}
                        className={styles.multi}
                        isMulti
                        options={relationshipOptions}
                        onChange={(state) => {
                          const newRelationships = state.map(
                            (ship) => ship.value
                          ) as Relationship[];
                          setChosenRelationships(newRelationships);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <label className={styles.label} htmlFor="notesAndWarnings">
                    Notes & Warnings
                  </label>
                  <div className={styles.subtitle}>
                    Any notes or warnings about this character.
                  </div>
                  <textarea
                    {...register("notesAndWarnings")}
                    defaultValue={data?.notesAndWarnings}
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
