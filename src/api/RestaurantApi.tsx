import { SearchState } from "@/pages/SearchPage";
import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Error searching for hotels");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState],
    createSearchRequest,
    {
      enabled: !!city,
    }
  );

  return { results, isLoading };
};

export const useGetRestaurants = () => {
  const getRestaurantsRequest = async (): Promise<Restaurant[]> => {
    const response = await fetch(`${API_BASE_URL}/api/restaurant/all`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  };

  const {
    data: restaurants,
    isLoading,
    error,
  } = useQuery("getRestaurants", getRestaurantsRequest);

  return { restaurants, isLoading, error };
};

export const useGetRestaurant = (restaurantId?: string) => {
  const getRestaurantRequest = async (): Promise<Restaurant> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/${restaurantId}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  };

  const { data: restaurant, isLoading } = useQuery(
    "fetchRestaurant",
    getRestaurantRequest,
    {
      enabled: !!restaurantId,
    }
  );

  return { restaurant, isLoading };
};
