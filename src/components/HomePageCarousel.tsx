import { Restaurant } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Clock, Dot, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  restaurants: Restaurant[] | undefined;
};

const HomePageCarousel = ({ restaurants }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex jusitfy-center cursor-pointer">
      <Carousel className="px-10 flex justify-center w-full">
        <CarouselContent className="-ml-1">
          {restaurants?.map((restaurant, index) => (
            <CarouselItem key={index} className="pl-1 lg:basis-1/3">
              <Card
                className="w-[400px] h-[500px]"
                onClick={() => {
                  navigate(`/details/${restaurant._id}`);
                }}
              >
                <CardHeader>
                  <img
                    className="w-full h-[300px] object-cover"
                    src={restaurant.imageUrl}
                  />
                </CardHeader>
                <CardContent>
                  <CardDescription className="flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">
                      {restaurant.restaurantName}
                    </h1>
                    <span className="flex items-center justify-between">
                      <span className="flex">
                        <MapPin />
                        {restaurant.city}, {restaurant.country}
                      </span>
                      <span className="flex  gap-1 text-green-600">
                        <Clock className="text-green-600" />
                        {restaurant.estimatedDeliveryTime}mins
                      </span>
                    </span>
                    <span className="flex tracking-tight justify-between">
                      <span className="flex ">
                        {restaurant.cuisines
                          .slice(0, 3)
                          .map((cuisine, index) => (
                            <span className="flex flex-row justify-start">
                              {cuisine}{" "}
                              {index <
                                restaurant.cuisines.slice(0, 3).length - 1 && (
                                <Dot />
                              )}
                            </span>
                          ))}{" "}
                      </span>
                      <span>
                        Delivery Price &#8377;
                        {(restaurant.deliveryPrice / 100).toFixed(2)}
                      </span>
                    </span>
                  </CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomePageCarousel;
