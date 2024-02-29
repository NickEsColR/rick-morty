import { ListContextProvider } from "../../contexts/ListContext";
import { PaginationContextProvider } from "../../contexts/PaginationContext";
import { LocationFilter } from "../../feature/location/components/location-filter/LocationFilter";
import { LocationList } from "../../feature/location/components/location-list/LocationList";
import { LocationContextProvider } from "../../feature/location/contexts/LocationContext";
import { LocationFilterContextProvider } from "../../feature/location/contexts/LocationFilterContext";
import "./Locations.css";

/**
 * Component that renders Locations page
 * @returns {JSX.Element}
 */
export const Locations = () => {
  return (
    <ListContextProvider>
      <PaginationContextProvider>
        <LocationContextProvider>
          <LocationFilterContextProvider>
            <div className="locations">
              <h1 className="title">Locations</h1>
              <LocationFilter>
                <LocationList />
              </LocationFilter>
            </div>
          </LocationFilterContextProvider>
        </LocationContextProvider>
      </PaginationContextProvider>
    </ListContextProvider>
  );
};
