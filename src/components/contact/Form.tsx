const Form = () => {
  return (
    <div>
      <div className="container mx-auto px-7 md:px-[100px] py-10">
        <h1 className="text-[40px] font-bold text-black font-primary text-center">
          Get in touch
        </h1>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Full name"
                name="fullName"
                id="fullName"
                className="w-full outline-none border-b border-[#707070] font-primary text-base text-black pb-2"
              />
              <input
                type="email"
                placeholder="Email address"
                name="email"
                id="email"
                className="w-full outline-none border-b border-[#707070] font-primary text-base text-black pb-2"
              />
              <input
                type="text"
                placeholder="Contact number"
                name="mobile"
                id="mobile"
                className="w-full outline-none border-b border-[#707070] font-primary text-base text-black pb-2"
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                id="subject"
                className="w-full outline-none border-b border-[#707070] font-primary text-base text-black pb-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Description"
                name="description"
                id="description"
                className="w-full outline-none border-b border-[#707070] font-primary text-base text-black pb-2"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary  text-white font-bold text-lg rounded-full px-8 py-4"
              >
                SEND A MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
