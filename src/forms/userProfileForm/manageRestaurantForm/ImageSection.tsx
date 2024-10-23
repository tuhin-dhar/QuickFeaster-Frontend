import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { control, watch } = useFormContext();

  const existingImageUrl = watch("imageUrl");

  return (
    <div className="space-y-2">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Upload Restaurant Image</h2>
        <FormDescription>
          Add an image to be displayed on your restaurant listing.
          <div className="text-red-500">
            Note: Adding a new image will automatically remove the exsiting one
          </div>
        </FormDescription>
        <div className="flex flex-col gap-8 md:w-[50%]">
          {existingImageUrl && (
            <AspectRatio ratio={16 / 9}>
              <img
                src={existingImageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          )}
          <FormField
            control={control}
            name="imageFile"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="file"
                    accept=".jpeg, .jpg, .png"
                    className="bg-white"
                    onChange={(event) =>
                      field.onChange(
                        event.target.files ? event.target.files[0] : null
                      )
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
