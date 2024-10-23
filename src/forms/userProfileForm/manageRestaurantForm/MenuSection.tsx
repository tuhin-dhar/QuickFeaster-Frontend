import MenuItemInput from "@/components/MenuItemInput";
import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";

import { useFieldArray, useFormContext } from "react-hook-form";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>
          Create your menu and assign a deription and price to each item
        </FormDescription>
        <div>
          <FormField
            control={control}
            name="menuItems"
            render={() => (
              <FormItem className="flex flex-col gap-2">
                {fields.map((_, index) => (
                  <MenuItemInput
                    index={index}
                    removeMenuItem={() => remove(index)}
                  />
                ))}
              </FormItem>
            )}
          />
        </div>
      </div>
      <Button
        className="bg-custom"
        type="button"
        onClick={() => append({ name: "", description: "", price: "" })}
      >
        Add Item
      </Button>
    </div>
  );
};

export default MenuSection;
