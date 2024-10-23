import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultinfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap- justify-between lg:items-center lg:flex-row">
      <span className="">
        {total} {total === 1 ? "Restuarant" : "Restaurants"} found in {city}{" "}
        <Link
          to="/"
          className="text-sm font-semibold underline cursor-pointer text-blue-500"
        >
          Change Location
        </Link>
      </span>
    </div>
  );
};

export default SearchResultinfo;
