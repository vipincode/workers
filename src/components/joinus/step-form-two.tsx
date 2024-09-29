const StepFormTwo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="space-y-6">
        <h3 className="text-center font-medium">Choose your profession</h3>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 50 }).map((_, index) => (
            <div className="text-xs p-4 rounded-md bg-red-600 text-white" key={index}>
              Service {index}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepFormTwo;
