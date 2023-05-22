import clsx from "clsx";
import { useTabs } from "../context/TabsContext";

const Tab = ({ children, value }) => {
  const { value: contextValue, setValue } = useTabs();

  return (
    <div
      className={clsx([
        "px-5 py-2 md:font-semibold font-medium md:text-lg text-sm cursor-pointer bg-green-400 hover:bg-green-600",
        { "border-b-2 border-main": value === contextValue },
      ])}
      onClick={() => setValue(value)}
    >
      {children}
    </div>
  );
};

export default Tab;
