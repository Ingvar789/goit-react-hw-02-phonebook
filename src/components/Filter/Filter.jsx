import React from "react";
import { FilterStyled } from './Filter.styled';
const Filter = ({value, onChange}) => (
    <FilterStyled>
        Find contacts by name
    <input
      type="text"
      className="filter-input"
      value={value}
      onChange={onChange} />
    </FilterStyled>
)  
export default Filter;
