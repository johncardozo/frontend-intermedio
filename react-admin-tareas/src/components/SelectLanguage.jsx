import PropTypes from "prop-types";

const SelectLanguage = ({ onLanguageChange }) => {
  return (
    <div className="languages">
      <span onClick={() => onLanguageChange("es")}>🇪🇸</span>
      <span onClick={() => onLanguageChange("en")}>🇬🇧</span>
    </div>
  );
};

SelectLanguage.propTypes = {
  onLanguageChange: PropTypes.func,
};

export default SelectLanguage;
