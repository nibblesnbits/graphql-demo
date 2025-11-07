import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  title: z.string(),
  author: z
    .object({
      name: z.string(),
    })
    .optional(),
  characters: z
    .array(
      z.object({
        name: z.string(),
      })
    )
    .optional(),
});

export type CreateBookFormInputs = z.infer<typeof FormSchema>;

export default function CreateBookForm({
  onSubmitForm,
}: {
  onSubmitForm: (data: CreateBookFormInputs) => void;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateBookFormInputs>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  console.log(watch("title"));

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("title", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.title && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
