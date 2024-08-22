import {
  genders,
  genres,
  importances,
  matcher,
  normalize,
  pairings,
  romanticOrientations,
  sexualOrientations,
} from "../../utils/dictionary";
import { Character, Genres, IEditCharacter } from "../../types";
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
import {
  approveCharacter,
  deleteCharacter,
  editCharacter,
} from "../../api/characters";
import { useForm } from "react-hook-form";
import Select from "react-select";

export function AdminCharacterRow({
  character,
  refetch,
}: {
  character: Character;
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
    async (id: string) => deleteCharacter(id),
    {
      onSuccess: () => {
        setDeleteModal(false);
        refetch();
      },
    }
  );

  const editCharacterMutation = useMutation(
    async (params: IEditCharacter) =>
      editCharacter({ body: params, id: character.id }),
    {
      onSuccess: () => {
        setEditMode(false);
        refetch();
      },
    }
  );

  const approveCharacterMutation = useMutation(
    async () => approveCharacter(character.id),
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
      gender: data.gender,
      importance: data.importance,
      name: data.name,
      genres: chosenGenres?.length === 0 ? [] : chosenGenres,

      series: data.series ? data.series : null,

      pairing: data.pairing === "Choose one..." ? null : data.pairing,
      romanticOrientation: data.romanticOrientation,
      sexualOrientation: data.sexualOrientation,
    };

    editCharacterMutation.mutate(payload);
  };
  return (
    <div className={styles.megaContainer}>
      <GeneralRow>
        <div className={styles.container}>
          {editMode ? (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.contentEdit}>
                <div className={styles.item}>
                  <input {...register("name")} defaultValue={character?.name} />
                </div>
                <div className={styles.item}>
                  <span className={styles.compact}>
                    <select
                      {...register("gender")}
                      defaultValue={character?.gender}
                      className={styles.select}
                    >
                      {genders.map((value: string) => (
                        <option value={value} key={value}>
                          {normalize(value)}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>
                <div className={styles.item}>
                  <span className={styles.compact}>
                    <select {...register("pairing")} className={styles.select}>
                      {pairings.map((value: string) => (
                        <option value={value} key={value}>
                          {normalize(value)}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>
                <div className={styles.item}>
                  <span className={styles.compact}>
                    <input
                      {...register("author")}
                      defaultValue={character?.author}
                    />
                  </span>
                </div>
                <div className={styles.item}>
                  <span className={styles.compact}>
                    <input
                      {...register("series")}
                      defaultValue={character?.series ?? ""}
                    />
                  </span>
                </div>
                <div className={styles.item}>
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
                <div className={styles.item}>
                  <div className={styles.compact}>
                    <select
                      {...register("importance")}
                      className={styles.select}
                      defaultValue={character?.importance}
                    >
                      {importances.map((value: string) => (
                        <option value={value} key={value}>
                          {normalize(value)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.compact}>
                    <select
                      {...register("sexualOrientation")}
                      className={styles.select}
                      defaultValue={character?.sexualOrientation}
                    >
                      {sexualOrientations.map((value: string) => (
                        <option value={value} key={value}>
                          {normalize(value)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.compact}>
                    <select
                      {...register("romanticOrientation")}
                      className={styles.select}
                      defaultValue={character?.romanticOrientation}
                    >
                      {romanticOrientations.map((value: string) => (
                        <option value={value} key={value}>
                          {normalize(value)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

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
              <div className={styles.item}>{character?.name}</div>
              <div className={styles.item}>{matcher[character?.gender]}</div>
              <div className={styles.item}>
                {character?.pairing && `${character.pairing}`}
              </div>
              <div className={styles.item}>{character?.author}</div>
              <div className={styles.item}>{character?.series}</div>
              <div className={styles.megaItem}>
                {character?.genres?.map((genre: string) => (
                  <Tag color="#b5de9d" text={matcher[genre]} key={genre} />
                ))}
              </div>
              <div className={styles.item}>{character?.importance}</div>
              <div className={styles.item}>
                <Tag color="#800080" text={character?.sexualOrientation} />
              </div>
              <div className={styles.item}>
                <Tag color="#b5de9d" text={character?.romanticOrientation} />
              </div>
            </div>
          )}
          {deleteModal && (
            <GeneralModal>
              <DeleteModal
                text={"character"}
                id={character.id}
                name={character.name}
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
          onClick={() => navigate(`/edit/character/${character.id}`)}
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
        {character.approved !== true && (
          <PrimaryButton
            text="Approve"
            paddingY="0.625rem"
            paddingX="1rem"
            onClick={() => approveCharacterMutation.mutate()}
          />
        )}
      </div>
    </div>
  );
}
