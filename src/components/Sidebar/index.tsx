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

export function Sidebar({
  payload,
  search,
}: {
  payload?: any;
  search?: string | null;
}) {
  const [selectedSearch, setSelectedSearch] = useState(
    search ? search : "characters"
  );
  const {
    register,
    reset,
    handleSubmit,
    formState: {},
    setValue,
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
    <aside className={styles.aside}>
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
          <span>Filter by</span>{" "}
          <span
            onClick={() => {
              reset();
              setValue("sexualOrientation", "Choose one...");
              setValue("romanticOrientation", "Choose one...");
              setValue("gender", "Choose one...");
              setValue("typeOfRep", "Choose one...");
              setValue("genres", "Choose one...");
              setValue("importance", "Choose one...");
              setValue("pairing", "Choose one...");
              setValue("relationships", "Choose one...");

              setValue("ageGroup", "Choose one...");
              setValue("length", "Choose one...");
            }}
          >
            Clear
          </span>
        </div>

        {selectedSearch === "characters" ? (
          <>
            {" "}
            <div className={styles.option}>
              <span>
                Sexual
                <br /> Orientation
              </span>
              <select
                {...register("sexualOrientation")}
                className={styles.select}
                defaultValue={payload?.sexualOrientation}
              >
                {sexualOrientations.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>
                Romantic <br /> Orientation
              </span>
              <select
                {...register("romanticOrientation")}
                className={styles.select}
                defaultValue={payload?.romanticOrientation}
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
              <select
                {...register("gender")}
                className={styles.select}
                defaultValue={payload?.gender}
              >
                {genders.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Type of Rep</span>
              <select
                {...register("typeOfRep")}
                className={styles.select}
                defaultValue={payload?.typeOfRep}
              >
                {typeOfReps.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Genre</span>
              <select
                {...register("genres")}
                className={styles.select}
                defaultValue={payload?.genres}
              >
                {genres.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Importance</span>
              <select
                {...register("importance")}
                className={styles.select}
                defaultValue={payload?.importance}
              >
                {importances.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Pairing</span>
              <select
                {...register("pairing")}
                className={styles.select}
                defaultValue={payload?.pairing}
              >
                {pairings.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Relationship</span>
              <select
                {...register("relationships")}
                className={styles.select}
                defaultValue={payload?.relationships}
              >
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
              <select
                {...register("genres")}
                className={styles.select}
                defaultValue={payload?.genres}
              >
                {genres.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Age group</span>
              <select
                {...register("ageGroup")}
                className={styles.select}
                defaultValue={payload?.ageGroup}
              >
                {ageGroups.map((value: string) => (
                  <option value={value} key={value}>
                    {normalize(value)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.option}>
              <span>Length</span>
              <select
                {...register("length")}
                className={styles.select}
                defaultValue={payload?.length}
              >
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
