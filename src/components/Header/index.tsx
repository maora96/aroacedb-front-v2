import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { PrimaryButton } from "../Atoms/PrimaryButton";
import { SecondaryButton } from "../Atoms/SecondaryButton";
import styles from "./styles.module.scss";

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
                placeholder="Search for..."
                className="w-full rounded-lg border-green border border-solid py-2.5 pe-10 shadow-sm sm:text-sm outline-lightgreen p-2"
                {...register("search")}
              />
              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#3F3F44"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </form>
          </div>

          <div className="flex w-1/4 items-center gap-x-4">
            <PrimaryButton
              text="Suggest a character"
              onClick={() => console.log("suggesting character")}
            />

            <SecondaryButton
              text="Admin"
              onClick={() => console.log("suggesting character")}
            />
          </div>
        </div>

        <div className="h-1/3 flex justify-evenly items-center">
          <SecondaryButton
            text="All aromantic characters"
            onClick={() => changeLocation(`/results?all=AROMANTIC`)}
          />
          <SecondaryButton
            text="All asexual characters"
            onClick={() => changeLocation(`/results?all=ASEXUAL`)}
          />
          <SecondaryButton
            text="Canon aromantic characters"
            onClick={() => changeLocation(`/results?canon=AROMANTIC`)}
          />
          <SecondaryButton
            text="Canon asexual characters"
            onClick={() => changeLocation(`/results?canon=ASEXUAL`)}
          />
        </div>
      </div>
    </header>
  );
}
