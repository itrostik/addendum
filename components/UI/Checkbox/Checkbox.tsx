import styles from "./Checkbox.module.scss";
import React, { useState } from "react";
import { Check } from "lucide-react";

export type CheckboxProps = {
  value: string;
  id: number;
  activeCheckbox: string[];
  setActiveCheckbox: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Checkbox({
  value,
  id,
  activeCheckbox,
  setActiveCheckbox,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  function toggle(value: string, checked: boolean) {
    let buffer = [...activeCheckbox];
    if (checked) {
      buffer.push(value);
      setActiveCheckbox(buffer);
    } else {
      buffer = buffer.filter((checkbox) => checkbox !== value);
      setActiveCheckbox(buffer);
    }
    setIsChecked((prev) => !prev);
  }

  return (
    <div className={styles.wrapper} onClick={() => toggle(value, !isChecked)}>
      <div
        className={
          !isChecked ? styles.checkbox : styles.checkbox + " " + styles.checked
        }
      >
        {isChecked && <Check size={14} color={"#8f00ff"} strokeWidth={4} />}
      </div>
      <span>{value}</span>
    </div>
  );
}
