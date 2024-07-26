import { GeneralCard } from "../../components/GeneralCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import Select from "react-select";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { addStoriesToCharacter } from "../../api/characters";
import { IGetSearchedStories, Story } from "../../types";
import { useGetCharacter } from "../../hooks/characters";
import { useGetSearchedStories } from "../../hooks/stories";
import styles from "./styles.module.scss";
import { SecondaryButton } from "../../components/Atoms/SecondaryButton";

export function AddStoriesToCharacter() {
  let { id } = useParams();
  const { data } = useGetCharacter(id!);

  const navigate = useNavigate();

  const [filters, setFilters] = useState<IGetSearchedStories>({
    search: undefined,
    amount: 1000,
    page: 1,
  });
  const [storyIds, setStoriesIds] = useState<string[]>([]);

  const addStoriesToCharacterMutation = useMutation(
    async (params: { storiesIds: string[] }) =>
      addStoriesToCharacter({ body: params, id: data.id }),
    {
      onSuccess: () => {
        navigate(`/admin/characters`);
      },
    }
  );

  const onSubmit = () => {
    const payload = {
      storiesIds: storyIds,
    };

    addStoriesToCharacterMutation.mutate(payload);
  };

  const { data: stories } = useGetSearchedStories(filters);

  const storyOptions = stories?.map((story: Story) => {
    return { value: story.id, label: `${story.title} by ${story.author}` };
  });

  return (
    <GlobalLayout>
      <div className={styles.boundary}>
        <GeneralCard>
          <div className={styles.content}>
            <h5 className={styles.title}>
              Add stories to the character {data?.name}
            </h5>
            <div className={styles.form}>
              <div className={styles.item}>
                <label className={styles.label} htmlFor="name">
                  Select from already existing stories
                </label>
                <div className={styles.option}>
                  <Select
                    closeMenuOnSelect={false}
                    className={styles.multi}
                    isMulti
                    options={storyOptions!}
                    onInputChange={(state) => {
                      const newFilters = {
                        ...filters,
                        search: state,
                      };
                      setFilters(newFilters);
                    }}
                    onChange={(state) => {
                      const ids = state.map((state: any) => state.value);
                      setStoriesIds(ids);
                    }}
                  />
                </div>
              </div>

              <div className={styles.buttons}>
                <PrimaryButton
                  text="Submit"
                  buttonType="submit"
                  paddingY="0.625rem"
                  paddingX="3rem"
                  onClick={() => onSubmit()}
                />

                <SecondaryButton
                  text={"Add new story"}
                  paddingY="0.625rem"
                  paddingX="3rem"
                  onClick={() => navigate(`/edit/character/${id}/stories/new`)}
                />
              </div>
            </div>
          </div>
        </GeneralCard>
      </div>
    </GlobalLayout>
  );
}
