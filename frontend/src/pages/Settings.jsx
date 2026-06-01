import DashboardLayout from "../layouts/DashboardLayout";
import {
  useNavigate,
} from "react-router-dom";

const Settings = () => {

  const navigate =
    useNavigate();

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <h1 className="text-5xl font-bold dark:text-white">
          Settings ⚙️
        </h1>

        <div className="bg-white dark:bg-slate-800 rounded-[30px] p-8 shadow-sm">

          <h2 className="text-2xl font-bold dark:text-white mb-4">
            App Settings
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold dark:text-white">
                  Dark Mode
                </h3>

                <p className="text-gray-500 dark:text-gray-300">
                  Use dark theme
                </p>

              </div>

              <span className="text-green-600 font-semibold">
                Enabled
              </span>

            </div>

            <hr className="dark:border-slate-700" />

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold dark:text-white">
                  Account
                </h3>

                <p className="text-gray-500 dark:text-gray-300">
                  Manage profile settings
                </p>

              </div>

              <button
                onClick={() =>
                  navigate(
                    "/profile"
                  )
                }
                className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Manage
              </button>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Settings;