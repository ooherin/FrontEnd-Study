import { RiCheckboxBlankLine, RiCheckboxBlankFill } from "react-icons/ri";

interface CheckBoxProps {
  checked?: boolean;
  onCheckBox: (id: number) => void;
  id: number;
}

const CheckBox = ({ checked, onCheckBox, id }: CheckBoxProps) => {
  return checked ? (
    <RiCheckboxBlankFill
      onClick={() => {
        onCheckBox(id);
      }}
    />
  ) : (
    <RiCheckboxBlankLine
      onClick={() => {
        onCheckBox(id);
      }}
    />
  );
};

export default CheckBox;
