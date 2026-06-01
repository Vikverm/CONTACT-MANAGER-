import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";

import {
  Star,
  Trash2,
} from "lucide-react";

const Favorites = () => {

  const [contacts,
    setContacts] =
    useState([]);

  const [search,
    setSearch] =
    useState("");

  const token =
    localStorage.getItem(
      "token"
    );

  // Fetch Favorites
  const fetchFavorites =
    async () => {
      try {

        const res =
          await API.get(
            "/contacts",
            {
              headers: {
                Authorization:
                  "Bearer " +
                  token,
              },
            }
          );

        const favorites =
          res.data.filter(
            (
              contact
            ) =>
              contact.favorite
          );

        setContacts(
          favorites
        );

      } catch (
      error
      ) {
        console.log(
          error
        );
      }
    };

  useEffect(() => {
    fetchFavorites();
    // eslint-disable-next-line
  }, []);

  // Remove Favorite
  const toggleFavorite =
    async (id) => {
      try {

        await API.put(
          `/contacts/favorite/${id}`,
          {},
          {
            headers:
            {
              Authorization:
                "Bearer " +
                token,
            },
          }
        );

        fetchFavorites();

      } catch (
      error
      ) {
        console.log(
          error
        );
      }
    };

  // Delete Contact
  const deleteContact =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this contact?"
        );

      if (
        !confirmDelete
      )
        return;

      try {

        await API.delete(
          `/contacts/${id}`,
          {
            headers:
            {
              Authorization:
                "Bearer " +
                token,
            },
          }
        );

        fetchFavorites();

      } catch (
      error
      ) {
        console.log(
          error
        );
      }
    };

  // Search
  const filteredContacts =
    contacts.filter(
      (contact) =>
        contact.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">

          <h1 className="text-5xl font-bold dark:text-white">
            ⭐ Favorite Contacts
          </h1>

          <input
            type="text"
            placeholder="Search favorites..."
            value={search}
            onChange={(
              e
            ) =>
              setSearch(
                e.target
                  .value
              )
            }
            className="bg-white dark:bg-slate-800 dark:text-white border dark:border-slate-700 p-4 rounded-2xl w-full md:w-96"
          />
        </div>

        {/* List */}
        <div className="bg-white dark:bg-slate-800 rounded-[30px] p-6 md:p-8 shadow-sm">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Favorites
          </h2>

          {filteredContacts.length ===
            0 ? (

            <div className="text-center py-20">

              <h3 className="text-2xl font-bold dark:text-white">
                No Favorite Contacts ⭐
              </h3>

              <p className="text-gray-500 dark:text-gray-300 mt-2">
                Add favorites from contacts page
              </p>

            </div>

          ) : (

            <div className="space-y-4">

              {filteredContacts.map(
                (
                  contact
                ) => (
                  <div
                    key={
                      contact._id
                    }
                    className="bg-slate-100 dark:bg-slate-900 rounded-[24px] p-5 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center"
                  >

                    <div>

                      <h3 className="font-bold text-xl dark:text-white">
                        {
                          contact.name
                        }
                      </h3>

                      <p className="text-gray-500 dark:text-gray-300">
                        {
                          contact.email
                        }
                      </p>

                      <p className="text-gray-500 dark:text-gray-300">
                        {
                          contact.phone
                        }
                      </p>

                    </div>

                    <div className="flex items-center gap-3 flex-wrap">

                      <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl">
                        {
                          contact.category
                        }
                      </span>

                      <button
                        onClick={() =>
                          toggleFavorite(
                            contact._id
                          )
                        }
                      >
                        <Star
                          fill="gold"
                          className="text-yellow-500"
                        />
                      </button>

                      <button
                        onClick={() =>
                          deleteContact(
                            contact._id
                          )
                        }
                        className="text-red-500"
                      >
                        <Trash2 />
                      </button>

                    </div>

                  </div>
                )
              )}

            </div>
          )}
        </div>

      </div>

    </DashboardLayout>
  );
};

export default Favorites;