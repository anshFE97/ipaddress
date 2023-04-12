import React, { useState, useEffect } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Map from "./components/Map";
import DesktopBg from "./assets/images/pattern-bg-desktop.png";
import MobileBg from './assets/images/pattern-bg-mobile.png'

interface Location {
  ip: string;
  city: string;
  region: string;
  region_code: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  asn: string;
  org: string;
}

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState<Location | null>(null);
  const [hasData, setHasData] = useState(false);
  const [longLat, setLongLat] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    const fetchIpAddress = async () => {
      const response = await axios.get("https://api64.ipify.org?format=json");
      setIpAddress(response.data.ip);
    };

    fetchIpAddress();
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
      setLocation(response.data);
    };

    if (ipAddress) {
      fetchLocation();
    }
  }, [ipAddress]);

  useEffect(() => {
    if (!location) return setHasData(false);

    setLongLat({ lat: location?.latitude, lng: location?.longitude });
    setHasData(true)
  }, [location]);

  return (
    <div className="flex flex-col justify-center w-full h-[100vh]">
      <div className="flex justify-center h-full items-center flex-col">
        <div className="relative w-full flex justify-center items-center h-[360px]">
          <div className="absolute -z-10 w-full">
            <img
              src={DesktopBg}
              alt="desktopbg"
              className="w-full object-contain hidden md:block"
            />
            <img
              src={MobileBg}
              alt="desktopbg"
              className="w-full object-contain md:hidden block"
            />
          </div>
          <Navbar setIpAddress={setIpAddress} />
        </div>
        <div className="relative w-full z-20">
          <Details location={location} />
        </div>
        <div className="bg-sky-700 w-full h-full z-10">
          {hasData && <Map longLat={longLat} />}
        </div>
      </div>
    </div>
  );
}

export default App;
