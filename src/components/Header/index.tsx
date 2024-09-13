import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { SecondaryButton } from "../Atoms/SecondaryButton";
import styles from "./styles.module.scss";
import { useGetPermissions } from "../../hooks/admin";
import { PrimaryButton } from "../Atoms/PrimaryButton";
import { useEffect, useState } from "react";

export function Header({ query }: { query?: string | null }) {
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();
  const navigate = useNavigate();

  const [token, setToken] = useState("");

  const onSubmit: SubmitHandler<any> = (data: any) => {
    navigate(`/results?search=${data.search}`);
  };

  const changeLocation = (placeToGo: string) => {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  };

  const goTo = (path: string) => {
    navigate(path);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const newToken = localStorage.getItem("token");
    if (newToken) {
      setToken(newToken);
    }
  }, []);

  const { data: permissions } = useGetPermissions();

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
                className={styles.input}
                {...register("search")}
                defaultValue={query ? query : ""}
              />
            </form>
          </div>

          <div className={styles.searchButtons}>
            {permissions && permissions[0].available && (
              <PrimaryButton
                text="Suggest a character"
                onClick={() => navigate("/suggest-character")}
                paddingY="0.625rem"
                paddingX="2rem"
              />
            )}

            {token ? (
              <>
                <SecondaryButton
                  text="Dashboard"
                  paddingY="0.625rem"
                  paddingX="2rem"
                  onClick={() => goTo("/admin")}
                />

                <SecondaryButton
                  text="Logout"
                  paddingY="0.625rem"
                  paddingX="2rem"
                  onClick={() => logout()}
                />
              </>
            ) : (
              <SecondaryButton
                text="Admin"
                paddingY="0.625rem"
                paddingX="2rem"
                onClick={() => goTo("/login")}
              />
            )}

            <SecondaryButton
              text="Favorites"
              paddingY="0.625rem"
              paddingX="2rem"
              onClick={() => goTo("/favorites")}
            />
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
