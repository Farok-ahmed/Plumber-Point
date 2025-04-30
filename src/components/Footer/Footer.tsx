import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10 text-sm">
        {/* About Section */}
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/drukec6k7/image/upload/v1746026134/logo_bnghgk.png"
              alt=""
            />
          </Link>

          <p className="mb-4 text-gray-300">
            Lore Issue is simply dummy text of the printing and typesetting
            industry. Lore Issue has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex gap-4 text-red-600">
            <svg
              width="72"
              height="12"
              viewBox="0 0 72 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.90459 1.9925H6V0.0845C5.81102 0.0585 5.16107 0 4.40413 0C2.82476 0 1.74286 0.9935 1.74286 2.8195V4.5H0V6.633H1.74286V12H3.87968V6.6335H5.55204L5.81752 4.5005H3.87918V3.031C3.87968 2.4145 4.04566 1.9925 4.90459 1.9925Z"
                fill="#DD3142"
              />
              <path
                d="M32 4.8V7.2H35.3948C34.8992 8.5968 33.5648 9.6 32 9.6C30.0152 9.6 28.4 7.9848 28.4 6C28.4 4.0152 30.0152 2.4 32 2.4C32.8604 2.4 33.6884 2.7084 34.3316 3.2688L35.9084 1.4592C34.8284 0.5184 33.4412 0 32 0C28.6916 0 26 2.6916 26 6C26 9.3084 28.6916 12 32 12C35.3084 12 38 9.3084 38 6V4.8H32Z"
                fill="#DD3142"
              />
              <path
                d="M72 1.42062C71.4794 1.66154 70.9246 1.82123 70.3462 1.89877C70.9412 1.524 71.3954 0.935077 71.6089 0.225231C71.0541 0.574154 70.4416 0.820615 69.7889 0.958154C69.2621 0.366462 68.5114 0 67.6924 0C66.1034 0 64.8241 1.36062 64.8241 3.02862C64.8241 3.26862 64.8434 3.49938 64.8906 3.71908C62.5045 3.59631 60.3931 2.38985 58.9747 0.552C58.7271 1.00523 58.5819 1.524 58.5819 2.08246C58.5819 3.13108 59.0938 4.06062 59.8568 4.59877C59.3956 4.58954 58.9433 4.44831 58.56 4.22585C58.56 4.23508 58.56 4.24708 58.56 4.25908C58.56 5.73046 59.5549 6.95262 60.8595 7.23415C60.6259 7.30154 60.3712 7.33385 60.107 7.33385C59.9232 7.33385 59.7377 7.32277 59.5636 7.28215C59.9355 8.48123 60.9908 9.36277 62.2455 9.39138C61.269 10.1972 60.0291 10.6828 58.6869 10.6828C58.4515 10.6828 58.2257 10.6717 58 10.6412C59.2714 11.5062 60.7781 12 62.403 12C67.6845 12 70.572 7.38462 70.572 3.384C70.572 3.25015 70.5676 3.12092 70.5615 2.99262C71.1311 2.56615 71.6097 2.03354 72 1.42062Z"
                fill="#DD3142"
              />
            </svg>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-red-600 font-semibold mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Plumber Service</li>
            <li>Bathroom Plumbing Service</li>
            <li>Kitchen Plumbing Service</li>
            <li>Roof Plumbing Service</li>
            <li>Bathroom Plumbing Service</li>
            <li>Kitchen Plumbing Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-red-600 font-semibold mb-4">CONTACT</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="text-white font-semibold">1800-9938-2839</li>
            <li>support@plumberpoint.com</li>
            <li>
              A-507 Mandoli
              <br />
              New Delhi, India
            </li>
            <li>
              Mon-Sat 9.00-15:00 <br /> Sunday CLOSED
            </li>
          </ul>
        </div>

        {/* Recent Post */}
        <div>
          <h3 className="text-red-600 font-semibold mb-4">RECENT POST</h3>
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-start gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/drukec6k7/image/upload/v1746029888/Rectangle_172_pmulll.png"
                alt="post"
                className="w-14 h-14 object-cover"
              />
              <div className="text-gray-300 text-xs">
                <p className="text-white font-semibold">Sewer Line Repair</p>
                <p>Lore Issue. Simply dummy text... industry standard.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className=" container mx-auto border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-400 px-4">
        <p>©Copyright 2020 Techwero Systems.</p>
        <div className="flex gap-4 mt-2 md:mt-0 text-red-600">
          <a href="#">Term of Services</a>
          <a href="#">Privacy & policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
