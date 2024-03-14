import { EpisodeItem } from "../episode-item/EpisodeItem";
import { useEpisode } from "../../hooks/useEpisode";
import { Pagination } from "../../../../components/pagination/Pagination";
import { EPISODES } from "../../../../Constants/ResourcesAPI";
import { FilterError } from "../../../../components/filter-error/FilterError";
import { useList } from "../../../../hooks/useList";
import { useEpisodeFilter } from "../../hooks/useEpisodeFilter";

/**
 * Component that renders the list of Episodes
 * @returns {JSX.Element}
 */
export const EpisodeList = () => {
  const { episodes, setEpisodes } = useEpisode();

  const { loading, hasFilterError } = useList();

  const { getFilter } = useEpisodeFilter();

  if (hasFilterError) {
    return <FilterError />;
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-cards">
          {episodes.map((episode) => (
            <EpisodeItem key={episode.id} episode={episode} />
          ))}
        </div>
      )}
      <Pagination
        resource={EPISODES}
        setItems={setEpisodes}
        getFilter={getFilter}
      />
    </>
  );
};
