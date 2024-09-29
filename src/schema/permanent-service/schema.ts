import { z } from "zod";

export const employeeSchema = z.object({
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  company_name: z.string().min(1, { message: "Company name is required" }),
  day: z.string().min(1, { message: "Day is required" }),
  email_address: z.string().email({ message: "Invalid email address" }),
  employee_position: z.string().min(1, { message: "Employee position is required" }),

  // Checkbox validation as optional booleans (they return true/false when checked/unchecked)
  food: z.boolean().optional(),
  stay: z.boolean().optional(),
  over_time: z.boolean().optional(),
  medical_insurance: z.boolean().optional(),

  helper: z.string().min(1, { message: "Helper count is required" }),
  meson: z.string().min(1, { message: "Meson count is required" }),
  month: z.string().min(1, { message: "Month is required" }),
  owner_name: z.string().min(1, { message: "Owner name is required" }),
  phone_number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(20, { message: "Phone number must not exceed 20 characters" }),
  shift: z.string().min(1, { message: "Shift is required" }),
  state: z.string().min(1, { message: "State is required" }),
  year: z.string().min(1, { message: "Year is required" }),
});

export type employeeFormData = z.infer<typeof employeeSchema>;
