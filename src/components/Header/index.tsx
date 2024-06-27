import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { PrimaryButton } from "../Atoms/PrimaryButton";
import { SecondaryButton } from "../Atoms/SecondaryButton";
import styles from "./styles.module.scss";

export function Header({ query }: { query?: string | null }) {
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    navigate(`/results?search=${data.search}`);
  };

  const changeLocation = (placeToGo: string) => {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  };

  return (
    <header className={styles.container}>
      <div className={styles.home}>
        <SecondaryButton
          text="The AroAce Database"
          onClick={() => navigate("/", { replace: true })}
          paddingY="0.625rem"
          paddingX="2rem"
        />
        <nav className={styles.nav}>
          <a href="/about">The database</a>
          <a href="/team">The team</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <div className={styles.searchBar}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                id="Search"
                placeholder="Search for characters..."
                className="w-full rounded-lg border-green border border-solid py-2.5 pe-10 shadow-sm sm:text-sm outline-lightgreen p-2"
                {...register("search")}
                defaultValue={query ? query : ""}
              />
              {/* <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>

                  <button type="submit">
                    <FaSearch onSubmit={handleSubmit(onSubmit)} />
                  </button>
                </button>
              </span> */}
            </form>
          </div>

          <div className={styles.searchButtons}>
            <PrimaryButton
              text="Suggest a character"
              onClick={() => navigate("/suggest-character")}
              paddingY="0.625rem"
              paddingX="2rem"
            />

            <SecondaryButton text="Admin" paddingY="0.625rem" paddingX="2rem" />
          </div>
        </div>

        <div className={styles.customButtons}>
          <SecondaryButton
            text="All aromantic characters"
            onClick={() => changeLocation(`/all-characters/AROMANTIC`)}
            paddingY="0.625rem"
            paddingX="2rem"
          />
          <SecondaryButton
            text="All asexual characters"
            onClick={() => changeLocation(`/all-characters/ASEXUAL`)}
            paddingY="0.625rem"
            paddingX="2rem"
          />
          <SecondaryButton
            text="Canon aromantic characters"
            onClick={() => changeLocation(`/canon-characters/AROMANTIC`)}
            paddingY="0.625rem"
            paddingX="2rem"
          />
          <SecondaryButton
            text="Canon asexual characters"
            onClick={() => changeLocation(`/canon-characters/ASEXUAL`)}
            paddingY="0.625rem"
            paddingX="2rem"
          />
        </div>
      </div>
    </header>
  );
}
