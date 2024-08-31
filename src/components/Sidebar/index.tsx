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
  matcher,
  pairings,
  relationships,
  romanticOrientations,
  sexualOrientations,
  typeOfReps,
} from "../../utils/dictionary";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import {
  AgeGroup,
  Gender,
  Genres,
  Importance,
  Length,
  Pairing,
  Relationship,
  RomanticOrientation,
  SexualOrientation,
  TypeOfRep,
} from "../../types";

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
  const [chosenSexualOrientations, setChosenSexualOrientations] = useState<
    SexualOrientation[]
  >([]);
  const [chosenRomanticOrientations, setChosenRomanticOrientations] = useState<
    RomanticOrientation[]
  >([]);
  const [chosenGenders, setChosenGenders] = useState<Gender[]>([]);
  const [chosenGenres, setChosenGenres] = useState<Genres[]>([]);
  const [chosenImportance, setChosenImportance] = useState<Importance[]>([]);
  const [chosenPairing, setChosenPairing] = useState<Pairing[]>([]);
  const [chosenRelationships, setChosenRelationships] = useState<
    Relationship[]
  >([]);
  const [chosenTypeOfRep, setChosenTypeOfRep] = useState<TypeOfRep[]>([]);

  const [chosenAgeGroup, setChosenAgeGroup] = useState<AgeGroup[]>([]);
  const [chosenLength, setChosenLength] = useState<Length[]>([]);

  const {
    reset,
    handleSubmit,
    formState: {},
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = () => {
    if (selectedSearch === "characters") {
      const payload = {
        ...(chosenGenders?.length !== 0 && { gender: chosenGenders }),
        ...(chosenGenres?.length !== 0 && { genres: chosenGenres }),
        ...(chosenImportance?.length !== 0 && {
          importance: chosenImportance,
        }),
        ...(chosenPairing?.length !== 0 && { pairing: chosenPairing }),
        ...(chosenRelationships?.length !== 0 && {
          relationships: chosenRelationships,
        }),
        ...(chosenRomanticOrientations?.length !== 0 && {
          romanticOrientation: chosenRomanticOrientations,
        }),
        ...(chosenSexualOrientations?.length !== 0 && {
          sexualOrientation: chosenSexualOrientations,
        }),
        ...(chosenTypeOfRep?.length !== 0 && {
          typeOfRep: chosenTypeOfRep,
        }),
      };

      navigate("/advanced-results", {
        state: { payload: payload, search: selectedSearch },
      });
    }

    if (selectedSearch === "stories") {
      const payload = {
        ...(chosenGenres?.length !== 0 && { genres: chosenGenres }),
        ...(chosenAgeGroup?.length !== 0 && {
          ageGroup: chosenAgeGroup,
        }),
        ...(chosenLength?.length !== 0 && { length: chosenLength }),
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
            <div className={styles.option}>
              <span>
                Sexual
                <br /> Orientation
              </span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={sexualOrientations?.map((sexualOrientation) => {
                  return {
                    value: sexualOrientation,
                    label: matcher[sexualOrientation],
                  };
                })}
                onChange={(state) => {
                  const newSexualOrientations = state.map(
                    (ship) => ship.value
                  ) as SexualOrientation[];
                  setChosenSexualOrientations(newSexualOrientations);
                }}
              />
            </div>
            <div className={styles.option}>
              <span>
                Romantic <br /> Orientation
              </span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={romanticOrientations?.map((romanticOrientation) => {
                  return {
                    value: romanticOrientation,
                    label: matcher[romanticOrientation],
                  };
                })}
                onChange={(state) => {
                  const newRomanticOrientations = state.map(
                    (ship) => ship.value
                  ) as RomanticOrientation[];
                  setChosenRomanticOrientations(newRomanticOrientations);
                }}
              />
            </div>
            <div className={styles.option}>
              <span>Gender</span>

              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={genders?.map((gender) => {
                  return {
                    value: gender,
                    label: matcher[gender],
                  };
                })}
                onChange={(state) => {
                  const newGenders = state.map(
                    (ship) => ship.value
                  ) as Gender[];
                  setChosenGenders(newGenders);
                }}
              />
            </div>
            <div className={styles.option}>
              <span>Type of Rep</span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={typeOfReps?.map((typeOfRep) => {
                  return {
                    value: typeOfRep,
                    label: matcher[typeOfRep],
                  };
                })}
                onChange={(state) => {
                  const newTypeOfReps = state.map(
                    (ship) => ship.value
                  ) as TypeOfRep[];
                  setChosenTypeOfRep(newTypeOfReps);
                }}
              />
            </div>
            <div className={styles.option}>
              <span>Genre</span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={genres?.map((genre) => {
                  return {
                    value: genre,
                    label: matcher[genre],
                  };
                })}
                onChange={(state) => {
                  const newGenres = state.map((ship) => ship.value) as Genres[];
                  setChosenGenres(newGenres);
                }}
              />
            </div>
            <div className={styles.option}>
              <span>Importance</span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={importances?.map((importance) => {
                  return {
                    value: importance,
                    label: matcher[importance],
                  };
                })}
                onChange={(state) => {
                  const newImportances = state.map(
                    (ship) => ship.value
                  ) as Importance[];
                  setChosenImportance(newImportances);
                }}
              />
            </div>
            <div className={styles.option}>
              <span>Pairing</span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={pairings?.map((pairing) => {
                  return {
                    value: pairing,
                    label: pairing,
                  };
                })}
                onChange={(state) => {
                  const newPairings = state.map(
                    (ship) => ship.value
                  ) as Pairing[];
                  setChosenPairing(newPairings);
                }}
              />
            </div>
            <div className={styles.option}>
              <span>Relationship</span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={relationships?.map((relationship) => {
                  return {
                    value: relationship,
                    label: matcher[relationship],
                  };
                })}
                onChange={(state) => {
                  const newRelationships = state.map(
                    (ship) => ship.value
                  ) as Relationship[];
                  setChosenRelationships(newRelationships);
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.option}>
              <span>Genre</span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={genres?.map((genre) => {
                  return {
                    value: genre,
                    label: matcher[genre],
                  };
                })}
                onChange={(state) => {
                  const newGenres = state.map((ship) => ship.value) as Genres[];
                  setChosenGenres(newGenres);
                }}
              />
            </div>
            <div className={styles.option}>
              <span>Age group</span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={ageGroups?.map((ageGroup) => {
                  return {
                    value: ageGroup,
                    label: matcher[ageGroup],
                  };
                })}
                onChange={(state) => {
                  const newAgeGroups = state.map(
                    (ship) => ship.value
                  ) as AgeGroup[];
                  setChosenAgeGroup(newAgeGroups);
                }}
              />
            </div>
            <div className={styles.option}>
              <span>Length</span>
              <Select
                closeMenuOnSelect={false}
                className={styles.multi}
                isMulti
                options={lengths?.map((length) => {
                  return {
                    value: length,
                    label: matcher[length],
                  };
                })}
                onChange={(state) => {
                  const newLengths = state.map(
                    (ship) => ship.value
                  ) as Length[];
                  setChosenLength(newLengths);
                }}
              />
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
