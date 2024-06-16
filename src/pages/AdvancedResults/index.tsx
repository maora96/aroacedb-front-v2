import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlobalLayout } from "../../components/GlobalLayout";
import { useMutation } from "react-query";
import { getAdvancedResults } from "../../api/characters";
import { CharacterCard } from "../../components/CharacterCard";
import { StoryCard } from "../../components/StoryCard";

export function AdvancedResults() {
  const [content, setContent] = useState<any>();
  const [search, setSearch] = useState<string>("");
  let location = useLocation();

  const getAdvancedResultsMutation = useMutation(
    async ({ data, search }: { data: any; search: string }) =>
      getAdvancedResults({
        params: { ...data, amount: 20, page: 1 },
        search: search,
      }),
    {
      onSuccess: (data: any) => {
        setContent(data.data);
      },
    }
  );

  useEffect(() => {
    setSearch(location.state.search);
    getAdvancedResultsMutation.mutate({
      data: location.state.payload,
      search: location.state.search,
    });
  }, [location]);

  return (
    <GlobalLayout>
      <>
        {content?.result?.map((content: any) => {
          if (search === "stories")
            return <StoryCard story={content} key={content.id} />;
          return <CharacterCard character={content} key={content.id} />;
        })}
      </>
    </GlobalLayout>
  );
}
