import { useGetRestaurants } from "@/api/RestaurantApi";
import HomePageCarousel from "@/components/HomePageCarousel";
import SearchBar, { SearchForm } from "@/components/SearchBar";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const { restaurants, isLoading, error } = useGetRestaurants();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });

    if (!restaurants || error || isLoading) {
      return <span>...</span>;
    }
  };
  return (
    <div className="flex flex-col justify-center gap-10">
      <SearchBar
        searchQuery=""
        placeHolder="Search by City or town"
        onSubmit={handleSearchSubmit}
      />
      <HomePageCarousel restaurants={restaurants} />
      <div className="collapse md:visible grid grid-cols-[3fr_6fr] h-[1000px]">
        <AspectRatio className="h-ful" ratio={4 / 4}>
          <img
            className="ml-4 object-cover h-[1000px]"
            src="/delivery.png"
            alt=""
          />
        </AspectRatio>
        <div className="flex flex-col gap-40">
          <h1 className="mt-20 text-8xl font-bold tracking-tight">
            "Speedy Bites, Wallet-Friendly Delights!"
          </h1>
          <span className="pl-9 text-2xl font-semibold">
            With "Speedy Bites, Wallet-Friendly Delights!" your cravings are
            satisfied in record time without breaking the bank. We pride
            ourselves on delivering your favorite meals faster than you can say
            "I'm hungry," all while keeping costs low so you can enjoy more for
            less.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
