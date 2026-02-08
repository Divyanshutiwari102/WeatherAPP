const Header = ({ city, region, country }) => {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-semibold">
        Results for {city}, {region}
      </h1>
      <p className="text-gray-400">{country}</p>
    </div>
  );
};

export default Header;
