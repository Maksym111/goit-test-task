import { useState } from "react";
import Select from "react-select";

const FilterFollowings = ({ handleValue }) => {
  const [filterValue, setFilterValue] = useState("all");

  const filters = [
    { value: "all", label: "All" },
    { value: "follow", label: "Follow" },
    { value: "following", label: "Following" },
  ];

  const commonStyles = {
    width: "200px",
    left: "calc(100% - 270px)",
  };

  const selectStyles = {
    control: (baseStyles) => ({
      ...baseStyles,
      ...commonStyles,
    }),
    menu: (styles) => {
      return {
        ...styles,
        ...commonStyles,
      };
    },
  };

  const getFilter = () => {
    return filterValue
      ? filters.find((elem) => elem.value === filterValue)
      : "";
  };

  const onChangeFilter = (newFilter) => {
    setFilterValue(newFilter.value);
    handleValue(newFilter.value);
  };

  return (
    <>
      <Select
        options={filters}
        value={getFilter()}
        onChange={onChangeFilter}
        styles={selectStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#94dee0",
            primary: "#9e9e9e",
          },
        })}
      />
    </>
  );
};

export default FilterFollowings;
