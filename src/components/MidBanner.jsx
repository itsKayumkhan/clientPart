import React from "react";

const MidBanner = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10  md:my-20">
        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="hidden md:block md:w-1/2 px-4">
              <div
                className="h-2/3 w-full bg-cover rounded shadow-md hover:rounded-lg hover:scale-105 duration-300 hover:shadow-xl"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/random/1280x720")',
                }}
              />
            </div>
            <div className="md:w-1/2 h-auto px-4">
              <div className="mb-8">
                <img
                  className="rounded shadow-md hover:rounded-lg hover:scale-105 duration-300 hover:shadow-xl"
                  src="https://source.unsplash.com/random/1280x720"
                  alt
                />
              </div>
              <div>
                <img
                  className="rounded shadow-md hover:rounded-lg hover:scale-105 duration-300 hover:shadow-xl"
                  src="https://source.unsplash.com/random/1280x720"
                  alt
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MidBanner;
