import "./../styles/checkbox.css";
export default function CheckInput({ isChecked, checkedTaskHandler }) {
  return (
    <>
      <label className="container">
        <input
          type="checkbox"
          value={isChecked}
          onChange={checkedTaskHandler}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
}
