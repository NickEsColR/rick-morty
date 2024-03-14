import { LocationItem } from "../location-item/LocationItem";
import { useLocation } from "../../hooks/useLocation";
import { Pagination } from "../../../../components/pagination/Pagination";
import { LOCATIONS } from "../../../../Constants/ResourcesAPI";
import { FilterError } from "../../../../components/filter-error/FilterError";
import { useList } from "../../../../hooks/useList";
import { useLocationFilter } from "../../hooks/useLocationFilter";

/**
 * Component that renders the list of Locations
 * @returns {JSX.Element}
 */
export const LocationList = () => {
  const { locations, setLocations } = useLocation();

  const { loading, hasFilterError } = useList();

  const { getFilter } = useLocationFilter();

  if (hasFilterError) {
    return <FilterError />;
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-cards">
          {locations.map((location) => (
            <LocationItem key={location.id} location={location} />
          ))}
        </div>
      )}
      <Pagination
        resource={LOCATIONS}
        setItems={setLocations}
        getFilter={getFilter}
      />
    </>
  );
};
