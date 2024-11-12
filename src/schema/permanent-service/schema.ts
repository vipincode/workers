import { z } from "zod";

export const employeeSchema = z.object({
  company_name: z.string().min(1, { message: "Company name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  owner_name: z.string().min(1, { message: "Owner name is required" }),
  mobile_number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(20, { message: "Phone number must not exceed 20 characters" }),

  shift: z.string().min(1, { message: "Shift is required" }),
  state_id: z.string().min(1, "State is required"),
  city_id: z.string().min(1, "City is required"),
  address: z.string().min(1, { message: "Address is required" }),
  meson: z.number().min(1, { message: "Meson count is required" }),
  helper: z.number().min(1, { message: "Helper count is required" }),

  // Faculties as an array of strings (assuming it's a list of facilities offered)
  faculties: z.array(z.string()).optional(),

  year: z.number().min(1, { message: "Year is required" }),
  month: z.number().min(1, { message: "Month is required" }),
  day: z.number().min(1, { message: "Day is required" }),
  employee_position: z.string().min(1, { message: "Employee position is required" }),

  // Upload photo as an array of images (optional, max 10)
  // upload_photo: z
  //   .array(z.string().regex(/\.(jpg|jpeg|png|gif)$/, { message: "Invalid image format" }))
  //   .min(1, { message: "At least one image is required" })
  //   .max(10, { message: "No more than 10 images are allowed" })
  //   .optional(),

  // upload_photos: z.array(z.instanceof(File)).nonempty("Please upload at least one photo").optional(),
  upload_photos: z
    .array(z.instanceof(File))
    .min(1, "At least one photo is required")
    .max(10, "Maximum 10 photos allowed")
    .optional(),

  alternative_work: z.string().optional(),

  // Terms and Conditions checkbox validation
  term_and_conditions: z.boolean().refine((val) => val === true, {
    message: "Terms and conditions must be accepted",
  }),
});

export type employeeFormData = z.infer<typeof employeeSchema>;
