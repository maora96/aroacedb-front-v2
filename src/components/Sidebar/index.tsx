// import { Button, Input } from "antd";
// import { Space } from "antd";
// import styles from "./styles.module.scss";
// // import { useGetSearchedCharacter } from "../../hooks/characters";
// // import { useState } from "react";
// // import { IGetSearchedCharacters } from "../../types";
// import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

import { useState } from "react";
import { PrimaryButton } from "../Atoms/PrimaryButton";
import { SecondaryButton } from "../Atoms/SecondaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ageGroups,
  genders,
  genres,
  importances,
  lengths,
  normalize,
  pairings,
  relationships,
  romanticOrientations,
  sexualOrientations,
  typeOfReps,
} from "../../utils/dictionary";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const [selectedSearch, setSelectedSearch] = useState("characters");
  const {
    register,
    reset,
    handleSubmit,
    formState: {},
  } = useForm();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    if (selectedSearch === "characters") {
      const payload = {
        ...(data.gender !== "Choose one..." && { gender: data.gender }),
        ...(data.genres !== "Choose one..." && { genres: data.genres }),
        ...(data.importance !== "Choose one..." && {
          importance: data.importance,
        }),
        ...(data.pairing !== "Choose one..." && { pairing: data.pairing }),
        ...(data.relationships !== "Choose one..." && {
          relationships: data.relationships,
        }),
        ...(data.romanticOrientation !== "Choose one..." && {
          romanticOrientation: data.romanticOrientation,
        }),
        ...(data.sexualOrientation !== "Choose one..." && {
          sexualOrientation: data.sexualOrientation,
        }),
        ...(data.typeOfRep !== "Choose one..." && {
          typeOfRep: data.typeOfRep,
        }),
      };

      navigate("/advanced-results", {
        state: { payload: payload, search: selectedSearch },
      });
    }

    if (selectedSearch === "stories") {
      const payload = {
        ...(data.genres !== "Choose one..." && { genres: data.genres }),
        ...(data.ageGroup !== "Choose one..." && {
          ageGroup: data.ageGroup,
        }),
        ...(data.length !== "Choose one..." && { length: data.length }),
      };

      navigate("/advanced-results", {
        state: { payload: payload, search: selectedSearch },
      });
    }

    window.location.reload();
  };
  return (
    <aside className="border-r border-l border-b border-lightgreen h-full w-1/6 p-6 overflow-y-auto">
      <h5 className="mb-4 text-base font-medium text-neutral-800 dark:text-neutral-50 uppercase text-center w-full">
        you are searching for
      </h5>
      <div className={styles.buttons}>
        {selectedSearch === "characters" ? (
          <PrimaryButton
            text="Characters"
            onClick={() => setSelectedSearch("stories")}
            paddingY="0.625rem"
            paddingX="1rem"
          />
        ) : (
          <SecondaryButton
            text="Characters"
            onClick={() => setSelectedSearch("characters")}
            paddingY="0.625rem"
            paddingX="1rem"
          />
        )}

        {selectedSearch === "stories" ? (
          <PrimaryButton
            text="Stories"
            onClick={() => setSelectedSearch("characters")}
            paddingY="0.625rem"
            paddingX="2rem"
          />
        ) : (
          <SecondaryButton
            text="Stories"
            onClick={() => setSelectedSearch("stories")}
            paddingY="0.625rem"
            paddingX="2rem"
          />
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <span>Filter by</span> <span onClick={() => reset()}>Clear</span>
        </div>

        {selectedSearch === "characters" ? (
          <>
            {" "}
            <div className={styles.option}>
              <span>Sexual Orientation</span>
              <select
                {...register("sexualOrientation")}
                className={styles.select}
              >
                {sexualOrientations.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Romantic Orientation</span>
              <select
                {...register("romanticOrientation")}
                className={styles.select}
              >
                {romanticOrientations.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Gender</span>
              <select {...register("gender")} className={styles.select}>
                {genders.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Type of Rep</span>
              <select {...register("typeOfRep")} className={styles.select}>
                {typeOfReps.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Genre</span>
              <select {...register("genres")} className={styles.select}>
                {genres.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Importance</span>
              <select {...register("importance")} className={styles.select}>
                {importances.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Pairing</span>
              <select {...register("pairing")} className={styles.select}>
                {pairings.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Relationship</span>
              <select {...register("relationships")} className={styles.select}>
                {relationships.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className={styles.option}>
              <span>Genre</span>
              <select {...register("genres")} className={styles.select}>
                {genres.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Age group</span>
              <select {...register("ageGroup")} className={styles.select}>
                {ageGroups.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Length</span>
              <select {...register("length")} className={styles.select}>
                {lengths.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
        <div className={styles.submit}>
          <PrimaryButton
            text="Search!"
            onClick={handleSubmit(onSubmit)}
            paddingY="0.625rem"
            paddingX="3rem"
          />
        </div>
      </form>
    </aside>
  );
}
