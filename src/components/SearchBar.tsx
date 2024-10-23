import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;
type Props = {
  searchQuery: string;
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
};

const SearchBar = ({ onSubmit, placeHolder, onReset, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <div className="flex justify-between w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-full flex items-center gap-2 flex-row border-2 justify-between rounded-full p-3 ${
            form.formState.errors.searchQuery && "border-red-500"
          }`}
        >
          <Search
            strokeWidth={2.5}
            size={30}
            className="ml-1 text-custom hidden md:block"
          />
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="w-7/12">
                <FormControl>
                  <Input
                    className="border-none shadow-none text-xl focus-visible:ring-0"
                    placeholder={placeHolder}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div>
            <Button
              onClick={handleReset}
              type="button"
              variant="outline"
              className="rounded-full bg-red-500"
            >
              Clear
            </Button>
            <Button
              type="submit"
              variant="outline"
              className="bg-custom rounded-full"
            >
              I am hungry
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
