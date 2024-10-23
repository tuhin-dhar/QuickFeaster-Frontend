import { cuisineList } from "@/config/restaurants-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpanded: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpanded,
}: Props) => {
  const handleCuisineReset = () => {
    onChange([]);
  };

  const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCuisineList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine === clickedCuisine);

    onChange(newCuisineList);
  };
  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Cuisines</div>
        <div
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
          onClick={handleCuisineReset}
        >
          Reset Filters
        </div>
      </div>
      <div className="space-y-2 flex-col">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 9)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div className="flex">
                <input
                  id={`cuisine_${cuisine}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisinesChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }|`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine}
                </Label>
              </div>
            );
          })}
      </div>
      <Button
        onClick={onExpanded}
        variant="link"
        className="mt-4 flex-1 text-green"
      >
        {isExpanded ? (
          <span className="flex flex-row items-center">
            View Less
            <ChevronUp />
          </span>
        ) : (
          <span className="flex flex-row items-center">
            View More
            <ChevronDown />
          </span>
        )}
      </Button>
    </>
  );
};

export default CuisineFilter;
