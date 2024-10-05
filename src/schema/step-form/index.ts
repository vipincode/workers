import { z } from "zod";

export const stepFormSchema = z.object({
  // Step 1
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  city: z.string().min(1, "Please write your city name"),
  state: z.string().min(1, "Please select a state"),
  laborType: z.string().min(1, "Please select a labor type"),
  workTye: z.enum(["Meson", "Helper"], { required_error: "Please select a work type" }),
  workChoice: z.string().min(1, "Please select a work choice"),

  // Step 2
  skillType: z.enum(["Meson", "Helper"], { required_error: "Please select a skill type" }),
  machineSkillWork: z.string().min(1, "Please select a machine skill work"),
  shutteringWorkType: z.enum(["Suttering Meson", "Suttering Helper"], {
    required_error: "Please select a shuttering work type",
  }),
  shutteringSkillWork: z.string().min(1, "Please select a shuttering skill work"),
  barBenderSkill: z.enum(["Bar Bender Fitter", "Bar Bender Helper"], {
    required_error: "Please select a bar bender skill",
  }),
  barBendingSkillWork: z.string().min(1, "Please select a bar bending skill work"),

  // Step 3
  plumbingSkillLevel: z.enum(["Skill Plumber", "Semi Skill Plumber"], {
    required_error: "Please select a plumbing skill level",
  }),
  plumbingWorkType: z.string().min(1, "Please select a plumbing work type"),
  electricianSkillLevel: z.enum(["Skill Electrician", "Semi Skill Electrician"], {
    required_error: "Please select an electrician skill level",
  }),
  electricianWorkType: z.string().min(1, "Please select an electrician work type"),
  painterSkillLevel: z.enum(["Skill Painter", "Semi Skill Painter"], {
    required_error: "Please select a painter skill level",
  }),
  paintingWorkType: z.string().min(1, "Please select a painting work type"),

  // Step 4
  scaffoldingType: z.enum(["Scaffolding mason", "Scaffolding helper"], {
    required_error: "Please select a scaffolding type",
  }),
  scaffoldingWorkType: z.string().min(1, "Please select a scaffolding work type"),
  waterProofingType: z.enum(["Waterproofing mason", "Waterproofing helper"], {
    required_error: "Please select a water proofing type",
  }),
  waterProofingWorkType: z.string().min(1, "Please select a water proofing work type"),

  workExperience: z.enum(
    ["0-12 month", "1-2 year", "2-3 year", "3-5 year", "5-7 year", "7-9 year", "10-15 year", "15 years more"],
    {
      required_error: "Please select your work experience",
    }
  ),
  shift: z.string().min(1, "Please select your shift preference"),
  whenCall: z.string().min(1, "Please select when we can call you"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
});

export type stepFormDataType = z.infer<typeof stepFormSchema>;
