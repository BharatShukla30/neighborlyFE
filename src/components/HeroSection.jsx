

const HeroSection = () => {
  return (
    <div className="bg-[#F9FAFB] h-screen">
      <div className="relative isolate px-6 lg:px-8">
        </div>
        <div className="mx-auto max-w-4xl py-20 sm:py-28 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Discover Your Community
            </h1>
            <h1 className="text-2xl py-5 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unlock Local Treasures.
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover Your Community, Unlock Local Treasures. Dive into the
              heart of your neighborhood, where you&apos;ll find a vibrant community
              of locals eager to share their favorite local spots, from cozy
              cafes to scenic parks. Join us on a journey of exploration and
              connection, as we uncover the rich tapestry of your area&apos;s unique
              gems together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/signin"
                className="rounded-md bg-sky-600 px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </a>
              <a
                href="/signup"
                className="rounded-md bg-green-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
        
    </div>
  );
};

export default HeroSection;
