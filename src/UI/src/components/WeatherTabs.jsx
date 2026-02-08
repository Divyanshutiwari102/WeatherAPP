const WeatherTabs = ({ activeTab, setActiveTab }) => {
  const tabClass = (tab) =>
    `pb-2 ${
      activeTab === tab
        ? "border-b-2 border-yellow-400 text-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <div className="flex gap-6 border-b border-gray-700 mt-4">
      <button onClick={() => setActiveTab("temperature")} className={tabClass("temperature")}>
        Temperature
      </button>
      <button onClick={() => setActiveTab("precipitation")} className={tabClass("precipitation")}>
        Precipitation
      </button>
      <button onClick={() => setActiveTab("wind")} className={tabClass("wind")}>
        Wind
      </button>
    </div>
  );
};

export default WeatherTabs;
