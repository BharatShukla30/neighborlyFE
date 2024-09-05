import userImage from "../../assets/userImage.png";
import apostrophe from "../../assets/apostrophe.png";
import apostropheRev from "../../assets/apostrophe reverse.png";
import team1 from "../../assets/team_1.jpeg";
import team2 from "../../assets/team_2.png";

const Section7 = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col items-center text-center">
        <p className="text-xl text-gray-800 mb-6 max-phone:text-2xl">
          <b>Some Words From Our Team</b>
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="bg-custom-blue rounded-2xl text-white shadow-indigo-400 p-6 w-80 max-medium:w-full max-medium:flex max-medium:items-center">
            <div className="flex items-center space-x-4 max-medium:flex-col max-medium:space-x-0 max-medium:space-y-3">
              <img src={team2} alt="Bharat" className="w-12 h-12 rounded-full" />
              <p className="text-lg font-semibold">Bharat, Founder</p>
            </div>
            <div className="mt-5">
              <img src={apostrophe} alt="apostrophe" className="h-5" />
              <p className="text-sm text-start my-3">
                Neighborly is about breaking down the barriers that keep us isolated in our own neighborhoods. It’s a tool to help people connect on a deeper level with those around them.
              </p>
              <div className="flex justify-end">
                <img src={apostropheRev} alt="apostropheRev" className="h-5" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-custom-blue rounded-2xl text-white shadow-lg p-6 w-80 max-medium:w-full max-medium:flex max-medium:items-center">
            <div className="flex items-center space-x-4 max-medium:flex-col max-medium:space-x-0 max-medium:space-y-3">
              <img src={team1} alt="Niraj" className="w-12 h-12 rounded-full" />
              <p className="text-lg font-semibold">Niraj, Frontend Lead</p>
            </div>
            <div className="mt-5">
              <img src={apostrophe} alt="apostrophe" className="h-5" />
              <p className="text-sm text-start my-3">
                I love how Neighborly uses technology to create opportunities for neighbors to come together, whether it’s organizing local events, sharing resources, or just getting to know each other better.
              </p>
              <div className="flex justify-end">
                <img src={apostropheRev} alt="apostropheRev" className="h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
