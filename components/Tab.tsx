import clsx from "clsx";
import { useTabs } from "../context/TabsContext";

const Tab = ({ children, value }) => {
  const { value: contextValue, setValue } = useTabs();

  return (
    <div className="m-2">
      
      <div
        className={clsx([
          "px-5 py-2 md:font-semibold font-medium md:text-lg text-sm cursor-pointer text-white bg-emerald-400 hover:bg-emerald-600 hover:text-white rounded-md ",
          { "border-b-2 border-main": value === contextValue },
        ])}
        onClick={() => setValue(value)}
      >
        {children}
      </div>
    </div>
  );
};

export default Tab;
