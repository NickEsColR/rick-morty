import { ListContextProvider } from "../../contexts/ListContext";
import { PaginationContextProvider } from "../../contexts/PaginationContext";
import { EpisodeFilter } from "../../feature/episode/components/episode-filter/EpisodeFilter";
import { EpisodeList } from "../../feature/episode/components/episode-list/EpisodeList";
import { EpisodeContextProvider } from "../../feature/episode/contexts/EpisodeContext";
import { EpisodeFilterContextProvider } from "../../feature/episode/contexts/EpisodeFilterContext";
import "./Episodes.css";

/**
 * Component that renders episodes page
 * @returns {JSX.Element}
 */
export const Episodes = () => {
  return (
    <ListContextProvider>
      <PaginationContextProvider>
        <EpisodeContextProvider>
          <EpisodeFilterContextProvider>
            <div className="episodes">
              <h1 className="title">Episodes</h1>
              <EpisodeFilter>
                <EpisodeList />
              </EpisodeFilter>
            </div>
          </EpisodeFilterContextProvider>
        </EpisodeContextProvider>
      </PaginationContextProvider>
    </ListContextProvider>
  );
};
