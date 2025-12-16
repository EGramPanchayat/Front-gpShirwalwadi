import React from "react";

const PlacesSection = () => (
  <section id="places" className="py-10 bg-white pt-17 md:pt-30">
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-green-700 mb-10 relative">
        गावातील प्रसिद्ध स्थळे
        <span className="block w-24 h-1 bg-orange-400 rounded absolute left-1/2 -translate-x-1/2 -bottom-3"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ठिकाण 1 */}
        <div className="bg-white rounded-xl shadow-lg p-4 fade-in flex flex-col justify-between items-center h-full hover:shadow-2xl hover:-translate-y-1 transition">
          <img
            src="./images/talav.jpeg"
            alt="शिरवळवाडी साठवण तलाव"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h5 className="text-lg font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
            शिरवळवाडी साठवण तलाव (पाझर)
          </h5>
          <p className="text-justify">
            शिरवळवाडी येथील साठवण तलाव हा गावासाठी महत्त्वाचा पाणीस्रोत आहे.
            पावसाळ्यात तलाव परिसर अत्यंत निसर्गरम्य दिसतो आणि भूजल पातळी वाढविण्यास मदत करतो.
          </p>
        </div>

        {/* ठिकाण 2 */}
        <div className="bg-white rounded-xl shadow-lg p-4 fade-in flex flex-col justify-between items-center h-full hover:shadow-2xl hover:-translate-y-1 transition">
          <img
            src="./images/maruti.jpg"
            alt="जय हनुमान मंदिर"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h5 className="text-lg font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2L12 22" />
              <path d="M6 12L12 2L18 12" />
            </svg>
            जय हनुमान मंदिर
          </h5>
          <p className="text-justify">
            जय हनुमान मंदिर हे गावातील एक श्रद्धास्थान असून
            दरवर्षी येथे भाविक मोठ्या संख्येने दर्शनासाठी येतात.
             येथे वार्षिक जत्रा आणि उत्सव कार्यक्रम मोठ्या उत्सवात सादर केले जातात. 
          </p>
        </div>

        {/* ठिकाण 3 */}
        <div className="bg-white rounded-xl shadow-lg p-4 fade-in flex flex-col justify-between items-center h-full hover:shadow-2xl hover:-translate-y-1 transition">
          <img
            src="./images/amba.jpg"
            alt="जय जगदंबा मंदिर"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h5 className="text-lg font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2L12 22" />
              <path d="M6 12L12 2L18 12" />
            </svg>
            जय जगदंबा मंदिर
          </h5>
          <p className="text-justify">
            जय जगदंबा मंदिर हे गावातील धार्मिक व सांस्कृतिक दृष्ट्या
            महत्त्वाचे स्थान असून उत्सवांच्या काळात येथे विशेष कार्यक्रम होतात.
            जय जगदंबा मंदिरात साप चावलेल्या लोकांना आयुर्वेदीक औषध दिले जाते. 
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default PlacesSection;
