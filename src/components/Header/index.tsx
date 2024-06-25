import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { PrimaryButton } from "../Atoms/PrimaryButton";
import { SecondaryButton } from "../Atoms/SecondaryButton";
import styles from "./styles.module.scss";
import { FaSearch } from "react-icons/fa";

export function Header() {
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
    <header className="w-full h-40 flex border border-lightgreen">
      <div className="w-1/6 flex flex-col justify-center items-center gap-y-2">
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
      <div className="w-5/6 border-l border-l-lightgreen">
        <div className="h-2/3 flex items-center px-8 gap-x-4 w-full border-b border-b-lightgreen">
          <div className="relative w-3/4 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                id="Search"
                placeholder="Search for characters..."
                className="w-full rounded-lg border-green border border-solid py-2.5 pe-10 shadow-sm sm:text-sm outline-lightgreen p-2"
                {...register("search")}
              />
              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>

                  <button type="submit">
                    <FaSearch onSubmit={handleSubmit(onSubmit)} />
                  </button>
                </button>
              </span>
            </form>
          </div>

          <div className="flex w-1/4 items-center gap-x-4">
            <PrimaryButton
              text="Suggest a character"
              onClick={() => navigate("/suggest-character")}
              paddingY="0.625rem"
              paddingX="2rem"
            />

            <SecondaryButton text="Admin" paddingY="0.625rem" paddingX="2rem" />
          </div>
        </div>

        <div className="h-1/3 flex justify-evenly items-center">
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
