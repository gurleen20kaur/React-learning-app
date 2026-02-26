import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";

// store all the validation rules
const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(18),
});

// zod has a method that allows us to extract a type from the schema object
// don't need interface
// <typeof schema> return TS type, similar to an interface

type FormData = z.infer<typeof schema>;

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {/* {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be atleast 3 characters</p>
        )} */}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
