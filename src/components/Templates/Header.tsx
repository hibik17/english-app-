import { BiRefresh, BiAlarmAdd } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";

export const Header = () => {
  // useNavigation の展開
  // const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <button
        className="flex items-center flex-shrink-0 text-white mr-6"
        // onClick={() => navigate("/todos")}
      >
        <BiAlarmAdd className="w-10 h-10" />
        <span className="font-semibold text-xl tracking-tight">Eng Word</span>
      </button>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <button
            // onClick={() => navigate("/document")}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2"
            onClick={() => window.location.reload()}
          >
            <BiRefresh className="w-10 h-10" />
          </button>
        </div>
      </div>
    </nav>
  );
};
