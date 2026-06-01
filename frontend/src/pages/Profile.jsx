import DashboardLayout from "../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Profile = () => {
  const navigate =
    useNavigate();

  const user = JSON.parse(
    localStorage.getItem(
      "user"
    )
  );

  const handleLogout =
    () => {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      toast.success(
        "Logged out"
      );

      navigate(
        "/login"
      );
    };

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <h1 className="text-5xl font-bold dark:text-white">
          Profile 👤
        </h1>

        <div className="bg-white dark:bg-slate-800 rounded-[30px] p-8 shadow-sm">

          <div className="flex items-center gap-5 mb-8">

            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
              {
                user?.name
                  ?.charAt(0)
                  ?.toUpperCase()
              }
            </div>

            <div>

              <h2 className="text-3xl font-bold dark:text-white">
                {
                  user?.name
                }
              </h2>

              <p className="text-gray-500 dark:text-gray-300">
                {
                  user?.email
                }
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-100 dark:bg-slate-900 rounded-[24px] p-6">

              <h3 className="text-xl font-bold dark:text-white mb-2">
                Account Info
              </h3>

              <p className="dark:text-gray-300">
                Name:
                {" "}
                {
                  user?.name
                }
              </p>

              <p className="dark:text-gray-300">
                Email:
                {" "}
                {
                  user?.email
                }
              </p>

            </div>

            <div className="bg-slate-100 dark:bg-slate-900 rounded-[24px] p-6">

              <h3 className="text-xl font-bold dark:text-white mb-4">
                Actions
              </h3>

              <button
                onClick={
                  handleLogout
                }
                className="bg-red-600 text-white px-5 py-3 rounded-2xl hover:bg-red-700 transition"
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Profile;