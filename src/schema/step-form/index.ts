import { z } from "zod";

export const FormJoinUsSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  state_id: z.string().min(1, "State ID is required"),
  city_id: z.string().min(1, "City ID is required"),
  work_experience: z.string().optional(),
  shift: z.string().optional(),
  joining: z.string().optional(), // Consider z.date() if it's a date field
  mobile_number: z.string().min(10, "Mobile number should be at least 10 digits"),
  password: z.string().min(8, "Password should be at least 8 characters"),
  skills: z.array(
    z.object({
      skill_name: z.string().min(1, "Skill name is required"),
      skill_type: z.string().min(1, "Skill type is required"),
      work_with_skill: z.array(z.string().min(1)).optional(),
    })
  ),
});


export type FormJoinUsType = z.infer<typeof FormJoinUsSchema>