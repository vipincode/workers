import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";
import { GrNext, GrPrevious } from "react-icons/gr";
import { stepFormeData } from "../../react-query/apis";
import { stepFormDataType, stepFormSchema } from "../../schema/step-form";

const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<stepFormDataType>();

  return (
    <div className="step-1 space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col">
          <label className="font-medium leading-6" htmlFor="name">
            Your name
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Type here"
            className={`input input-bordered w-full ${errors.name ? "border-red-600" : ""}`}
          />
          {errors.name && <p className="text-xs text-red-600 font-normal mt-2">{errors.name.message}</p>}
        </div>

        {/* City Field */}
        <div className="flex flex-col">
          <label className="font-medium leading-6" htmlFor="city">
            Your City
          </label>
          <select
            {...register("city")}
            defaultValue=""
            className={`select select-bordered w-full ${errors.city ? "border-red-600" : ""}`}
          >
            <option value="" disabled>
              Select your City
            </option>
            <option value="Han Solo">Han Solo</option>
            <option value="Greedo">Greedo</option>
          </select>
          {errors.city && <p className="text-xs text-red-600 font-normal mt-2">{errors.city.message}</p>}
        </div>

        {/* State Field */}
        <div className="flex flex-col">
          <label className="font-medium leading-6" htmlFor="state">
            Your state
          </label>
          <select
            {...register("state")}
            defaultValue=""
            className={`select select-bordered w-full ${errors.state ? "border-red-600" : ""}`}
          >
            <option value="" disabled>
              Select your state
            </option>
            <option value="Han Solo">Han Solo</option>
            <option value="Greedo">Greedo</option>
          </select>
          {errors.state && <p className="text-xs text-red-600 font-normal mt-2">{errors.state.message}</p>}
        </div>
      </div>
      <div className="max-w-[400px]">
        <div>
          <h3 className="text-lg font-semibold mb-4"> Tell us what work you do?</h3>
          <h4 className="text-lg font-medium mb-3">Labor supplier</h4>
        </div>
        <div className="flex flex-col">
          <label className="font-medium leading-6" htmlFor="laborType">
            Which types of labor do you supply?
          </label>
          <select
            {...register("laborType")}
            defaultValue=""
            className={`select select-bordered w-full ${errors.laborType ? "border-red-600" : ""}`}
          >
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Brick work / Plaster work">Brick work / Plaster work</option>
            <option value="Tile / marble / Granite / Stone work">Tile / marble / Granite / Stone work</option>
            <option value="RCC Concrete Casting work">RCC Concrete Casting work</option>
            <option value="Shuttering work">Shuttering work</option>
            <option value="Bar Bending Steel work">Bar Bending Steel work</option>
            <option value="Scaffolding work">Scaffolding work</option>
            <option value="Painter">Painter</option>
          </select>
          {errors.laborType && <p className="text-xs text-red-600 font-normal mt-2">{errors.laborType.message}</p>}
        </div>
      </div>
      <div className="max-w-[400px]">
        <h4 className="font-medium mb-3">Mason/Helper</h4>
        <p className="text-lg mb-2">Select your Skill:</p>
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <input {...register("workTye")} value="Meson" type="radio" className="radio" />
            <span>Meson</span>
          </div>
          <div className="flex items-center gap-2">
            <input {...register("workTye")} value="Helper" type="radio" className="radio" />
            <span>Helper</span>
          </div>
        </div>
        {errors.workTye && <p className="text-xs text-red-600 font-normal mt-2">{errors.workTye.message}</p>}
      </div>
      <div className="flex flex-col mt-3">
        <label className="font-medium leading-6" htmlFor="workChoice">
          Choose which work you can do?
        </label>
        <select
          {...register("workChoice")}
          defaultValue=""
          className={`select select-bordered w-full ${errors.workChoice ? "border-red-600" : ""}`}
        >
          <option value="" disabled>
            Select your work type
          </option>
          <option value="Brick / Plaster work">Brick / Plaster work</option>
          <option value="Marble / Tile / Granite work">Marble / Tile / Granite work</option>
          <option value="AAC Block work">AAC Block work</option>
          <option value="RCC Concrete Casting">RCC Concrete Casting </option>
        </select>
        {errors.workChoice && <p className="text-xs text-red-600 font-normal mt-2">{errors.workChoice.message}</p>}
      </div>
    </div>
  );
};

const Step2 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<stepFormDataType>();

  return (
    <div className="step-2 space-y-6">
      <div>
        <div>
          <p className="text-lg mb-2">Select your Skill:</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <input {...register("skillType")} value="Meson" type="radio" className="radio" />
              <span>Meson</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("skillType")} value="Helper" type="radio" className="radio" />
              <span>Helper</span>
            </div>
          </div>
          {errors.skillType && <p className="text-xs text-red-600 font-normal mt-2">{errors.skillType.message}</p>}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Choose which machine operating work can you do?
          </label>
          <select {...register("machineSkillWork")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Excavator operator">Excavator operator</option>
            <option value="Tower Crane Operator">Tower Crane Operator</option>
            <option value="RMC Batch Mixture Operator">RMC Batch Mixture Operator</option>
            <option value="Dump Truck Operator">Dump Truck Operator</option>
            <option value="Drum Roller operator">Drum Roller operator</option>
            <option value="RMC Truck Operator">RMC Truck Operator</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <h4 className="font-medium mb-1">Suttering</h4>
          <p className="text-lg mb-2">Select your Skill:</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <input {...register("shutteringWorkType")} value="Suttering Meson" type="radio" className="radio" />
              <span>Suttering Meson</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("shutteringWorkType")} value="Suttering Helper" type="radio" className="radio" />
              <span>Suttering Helper</span>
            </div>
          </div>
          {errors.shutteringWorkType && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.shutteringWorkType.message}</p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Choose which suttering work you can do?
          </label>
          <select {...register("shutteringSkillWork")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Column shuttering">Column shuttering</option>
            <option value="Beam shuttering">Beam shuttering</option>
            <option value="Wall shuttering">Wall shuttering</option>
            <option value="Slab shuttering">Slab shuttering</option>
            <option value="Shuttering making">Shuttering making</option>
            <option value="Door (window) furniture work">Door (window) furniture work</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <h4 className="font-medium mb-1">Bar Blender</h4>
          <p className="text-lg mb-2">Select your Skill:</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <input {...register("barBenderSkill")} value="Bar Bender Fitter" type="radio" className="radio" />
              <span>Bar Bender Fitter</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("barBenderSkill")} value="Bar Bender Helper" type="radio" className="radio" />
              <span>Bar Bender Helper</span>
            </div>
          </div>
          {errors.barBenderSkill && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.barBenderSkill.message}</p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Choose which Bar Bending work you can do?
          </label>
          <select {...register("barBendingSkillWork")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Column/Beam steel work">Column/Beam steel work</option>
            <option value="Wall steel work">Wall steel work</option>
            <option value="Foundation/Footing steel work">Foundation/Footing steel work</option>
          </select>
          {errors.barBendingSkillWork && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.barBendingSkillWork.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<stepFormDataType>();

  return (
    <div className="step-3 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Plumber</h3>
        <div>
          <p className="text-lg mb-2">Select your Skill:</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <input {...register("plumbingSkillLevel")} value="Skill Plumber" type="radio" className="radio" />
              <span>Skill Plumber</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("plumbingSkillLevel")} value="Semi Skill Plumber" type="radio" className="radio" />
              <span>Semi Skill Plumber</span>
            </div>
          </div>
          {errors.plumbingSkillLevel && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.plumbingSkillLevel.message}</p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Choose which Plumbing work can you do?
          </label>
          <select {...register("plumbingWorkType")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Bathroom Fitting">Bathroom Fitting</option>
            <option value="Suspended Scaffolding">Supply and waste pipe blockage</option>
            <option value="Geyser | Ro | water tank repairing">Geyser | Ro | water tank repairing</option>
            <option value="All Fixture installing">All Fixture installing</option>
          </select>
          {errors.plumbingWorkType && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.plumbingWorkType.message}</p>
          )}
        </div>
      </div>
      <div>
        <div>
          <h4 className="font-medium mb-1">Electrician</h4>
          <p className="text-lg mb-2">Select your Skill:</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <input {...register("electricianSkillLevel")} value="Skill Electrician" type="radio" className="radio" />
              <span>Skill Electrician</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                {...register("electricianSkillLevel")}
                value="Semi Skill Electrician"
                type="radio"
                className="radio"
              />
              <span>Semi Skill Electrician</span>
            </div>
          </div>
          {errors.electricianSkillLevel && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.electricianSkillLevel.message}</p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Choose which Electric work you can do?
          </label>
          <select {...register("electricianWorkType")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Wall Conducting, Slab Conducting">Wall Conducting, Slab Conducting</option>
            <option value="MCB, fuse and other fitting connection">MCB, fuse and other fitting connection</option>
            <option value="Wiring">Wiring</option>
            <option value="Power failure check up">Power failure check up</option>
            <option value="Switch socket installation">Switch socket installation</option>
            <option value="Door (window) furniture work">Door (window) furniture work</option>
          </select>
          {errors.electricianWorkType && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.electricianWorkType.message}</p>
          )}
        </div>
      </div>
      <div>
        <div>
          <h4 className="font-medium mb-1">Painter</h4>
          <p className="text-lg mb-2">Select your Skill:</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <input {...register("painterSkillLevel")} value="Skill Painter" type="radio" className="radio" />
              <span>Skill Painter</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("painterSkillLevel")} value="Semi Skill Painter" type="radio" className="radio" />
              <span>Semi Skill Painter</span>
            </div>
          </div>
          {errors.painterSkillLevel && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.painterSkillLevel.message}</p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Choose which Painting work you can Do?
          </label>
          <select {...register("paintingWorkType")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="P.O.P and wall Putty">P.O.P and wall Putty</option>
            <option value="Wood Polishing">Wood Polishing</option>
            <option value="Normal Cement Painting">Normal Cement Painting</option>
          </select>
          {errors.paintingWorkType && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.paintingWorkType.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Step4 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<stepFormDataType>();

  return (
    <div className="step-4 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Scaffolding</h3>
        <div>
          <p className="text-lg mb-2">Select your Skill:</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <input {...register("scaffoldingType")} value="Scaffolding mason" type="radio" className="radio" />
              <span>Scaffolding mason</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("scaffoldingType")} value="Scaffolding helper" type="radio" className="radio" />
              <span>Scaffolding helper</span>
            </div>
          </div>
          {errors.scaffoldingType && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.scaffoldingType.message}</p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Choose which Scaffolding work you can Do?
          </label>
          <select {...register("scaffoldingWorkType")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Supported Scaffolding">Supported Scaffolding</option>
            <option value="Suspended Scaffolding">Suspended Scaffolding</option>
            <option value="Aerial Scaffolding">Aerial Scaffolding</option>
          </select>
          {errors.scaffoldingWorkType && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.scaffoldingWorkType.message}</p>
          )}
        </div>
      </div>
      <div>
        <div>
          <h4 className="font-medium mb-1">Water Proofing</h4>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <input {...register("waterProofingType")} value="Waterproofing mason" type="radio" className="radio" />
              <span>Waterproofing mason</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("waterProofingType")} value="Waterproofing helper" type="radio" className="radio" />
              <span>Waterproofing helper</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Choose which Waterproofing work you can Do?
          </label>
          <select {...register("waterProofingWorkType")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Cementitious waterproofing">Cementitious waterproofing</option>
            <option value="Bituminous Coating waterproofing">Bituminous Coating waterproofing</option>
            <option value="Bituminous membrane waterproofing">Bituminous membrane waterproofing</option>
            <option value="Liquid waterproofing membrane">Liquid waterproofing membrane</option>
          </select>
          {errors.waterProofingWorkType && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.waterProofingWorkType.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-1">Work Experience</h4>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <input {...register("workExperience")} value="0-12 month" type="radio" className="radio" />
              <span>0-12 month</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("workExperience")} value="1-2 year" type="radio" className="radio" />
              <span>1-2 year</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("workExperience")} value="2-3 year" type="radio" className="radio" />
              <span>2-3 year</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("workExperience")} value="3-5 year" type="radio" className="radio" />
              <span>3-5 year</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("workExperience")} value="5-7 year" type="radio" className="radio" />
              <span>5-7 year</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("workExperience")} value="7-9 year" type="radio" className="radio" />
              <span>7-9 year</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("workExperience")} value="10-15 year" type="radio" className="radio" />
              <span>10-15 year</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("workExperience")} value="15 years more" type="radio" className="radio" />
              <span>15 years more</span>
            </div>
          </div>
          {errors.workExperience && (
            <p className="text-xs text-red-600 font-normal mt-2">{errors.workExperience.message}</p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Which shift can you work?
          </label>
          <select {...register("shift")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>
            <option value="Both">Both</option>
          </select>
          {errors.shift && <p className="text-xs text-red-600 font-normal mt-2">{errors.shift.message}</p>}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            When can we call you to work?
          </label>
          <select {...register("whenCall")} defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your work type
            </option>
            <option value="Quickly">Quickly</option>
            <option value="Within 1 to 3 days">Within 1 to 3 days</option>
            <option value="Within 5 to 7 days">Within 5 to 7 days</option>
            <option value="Within 7 to 12 days">Within 7 to 12 days</option>
          </select>
          {errors.whenCall && <p className="text-xs text-red-600 font-normal mt-2">{errors.whenCall.message}</p>}
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium leading-6" htmlFor="name">
            Write down your Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            type="tel"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          {errors.phoneNumber && <p className="text-xs text-red-600 font-normal mt-2">{errors.phoneNumber.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default function StepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm<stepFormDataType>({
    resolver: zodResolver(stepFormSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    trigger,
    formState: { isValid, errors },
  } = methods;

  const mutation = useMutation({
    mutationFn: stepFormeData,
    onSuccess: (data) => {
      console.log("Data successfully saved:", data);
      toast.success("Form submitted successfully!");
    },
    onError: (error) => {
      console.error("Error saving data:", error);
      toast.error("Error submitting form. Please try again.");
    },
  });

  const onSubmit = (data: stepFormDataType) => {
    mutation.mutate(data);
  };

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isStepValid = await trigger(fields);
    if (isStepValid) {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
    } else {
      toast.error("Please fill out all required fields correctly before proceeding.");
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const getFieldsForStep = (step: number): (keyof stepFormDataType)[] => {
    switch (step) {
      case 1:
        return ["name", "city", "state", "laborType", "workTye", "workChoice"];
      case 2:
        return [
          "skillType",
          "machineSkillWork",
          "shutteringWorkType",
          "shutteringSkillWork",
          "barBenderSkill",
          "barBendingSkillWork",
        ];
      case 3:
        return [
          "plumbingSkillLevel",
          "plumbingWorkType",
          "electricianSkillLevel",
          "electricianWorkType",
          "painterSkillLevel",
          "paintingWorkType",
        ];
      case 4:
        return [
          "scaffoldingType",
          "scaffoldingWorkType",
          "waterProofingType",
          "waterProofingWorkType",
          "workExperience",
          "shift",
          "whenCall",
          "phoneNumber",
        ];
      default:
        return [];
    }
  };
  const isStepValid = () => {
    const fields = getFieldsForStep(currentStep);
    return fields.every((field) => !errors[field]);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <h3 className="text-2xl font-semibold mb-8">Step {currentStep}</h3>

        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {currentStep === 4 && <Step4 />}

        <div className="flex justify-between items-center">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-1 rounded-md text-gray-600 px-4 text-base underline leading-6"
            >
              <GrPrevious className="mr-2 text-gray-600" /> Previous
            </button>
          )}
          {currentStep < 4 && (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              className="flex items-center gap-1 rounded-md ml-auto text-gray-600 px-4 text-base underline leading-6"
            >
              Next <GrNext className="ml-2 text-gray-600" />
            </button>
          )}
          {currentStep === 4 && (
            <button type="submit" disabled={!isValid || mutation.isPending} className="btn btn-primary min-w-[130px]">
              {mutation.isPending ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
