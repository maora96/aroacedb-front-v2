import { GeneralCard } from "../../components/GeneralCard";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../../types";
import { login } from "../../api/admin";

export function Login() {
  const navigate = useNavigate();

  const loginMutation = useMutation(async (params: ILogin) => login(params), {
    onSuccess: (data: any) => {
      localStorage.setItem("token", data.data.access_token);
      navigate("/admin");
    },
  });

  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    loginMutation.mutate(data);
  };
  return (
    <GlobalLayout>
      <div className={styles.content}>
        <GeneralCard>
          <div className={styles.cardContent}>
            <h5 className={styles.cardTitle}>Login</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="E-mail" {...register("email")} />

              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />

              <PrimaryButton
                text="Login"
                onClick={handleSubmit(onSubmit)}
                paddingY="0.625rem"
                paddingX="3rem"
              />
            </form>
          </div>
        </GeneralCard>
      </div>
    </GlobalLayout>
  );
}
