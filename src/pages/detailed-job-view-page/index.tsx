export default function JobDetailedViewPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 mb-[100px]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <img src="https://dummyimage.com/300x200/000/fff" alt="Company Logo" className="w-24 h-24 mx-auto" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">TATA</h1>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Post:</p>
                <p>Mason</p>
              </div>
              <div>
                <p className="font-semibold">Vacancy:</p>
                <p>190 Post</p>
              </div>
              <div>
                <p className="font-semibold">Daily wages:</p>
                <p>900/Day</p>
              </div>
              <div>
                <p className="font-semibold">Facilities:</p>
                <p>Day/Night Shift, Overtime, Lodge, Transport, ESI/PF</p>
              </div>
              <div>
                <p className="font-semibold">Experience:</p>
                <p>3+ Year</p>
              </div>
              <div>
                <p className="font-semibold">Job Skill:</p>
                <p>Measuring Tape, Brickwork, Plasterwork, R.C.C casting, Earth & Excavation work</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p>Delhi (Laxmi Nagar)</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Job description:</p>
              <p>
                TATA Company is Hiring for the Job profile of skilled mason for 190 candidates at location Delhi(Laxmi
                Nagar) locality. For their Airport Project. If you interested in this Job then click the Button Given
                Below on Apply Now.
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="btn btn-primary">Call Now</button>
            <button className="btn btn-secondary">Apply Now</button>
            <button className="btn btn-accent">WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
}
