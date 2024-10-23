import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2 flex flex-row items-end gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Chicken Biryani"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Description
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Chicken Biryani is a sav..."
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="felx items-center gap-1">
              Price (&#8377;)
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="330" className="bg-white" />
            </FormControl>
          </FormItem>
        )}
      />
      <Button className="bg-red-500" type="button" onClick={removeMenuItem}>
        Remove Item
      </Button>
    </div>
  );
};

export default MenuItemInput;
