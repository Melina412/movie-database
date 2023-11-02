import { useContext } from "react";
import { SortContext } from "../context/Context";

const Sort = () => {
  const { sortOption, setSortOption } = useContext(SortContext);

  const getSortOption = (event) => {
    const selectValue = event.target.value;
    setSortOption(selectValue);
    // console.log({ selectValue });
  };

  return (
    <section className="sort">
      <select name="sort" id="sort" onChange={getSortOption}>
        <option value="">sort by</option>
        <option value="new">Release Date (new to old)</option>
        <option value="old">Release Date (old to new)</option>
        <option value="rate">Best Rating</option>
        <option value="a-z">Name A-Z</option>
        <option value="z-a">Name Z-A</option>
      </select>
    </section>
  );
};

export default Sort;
