import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";
import { Star, Trash2 } from "lucide-react";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Friends",
  });

  const token = localStorage.getItem("token");

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      const res = await API.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line
  }, []);

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update contact
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await API.put(
          `/contacts/${editingId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Contact updated");
      } else {
        await API.post(
          "/contacts",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Contact added");
      }

      setEditingId(null);

      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "Friends",
      });

      fetchContacts();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Edit contact
  const editContact = (contact) => {
    setEditingId(contact._id);

    setFormData({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      category: contact.category,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete contact
  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Contact deleted");
      fetchContacts();
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  // Toggle favorite
  const toggleFavorite = async (id) => {
    try {
      await API.put(
        `/contacts/favorite/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Favorite updated");
      fetchContacts();
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };

  // Export CSV
  const exportCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Category",
    ];

    const rows = contacts.map((contact) => [
      contact.name,
      contact.email,
      contact.phone,
      contact.category,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    saveAs(blob, "contacts.csv");

    toast.success("CSV downloaded");
  };

  // Search
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">

          <div className="flex items-center gap-4 flex-wrap">
            <h1 className="text-5xl font-bold dark:text-white">
              Contacts
            </h1>

            <button
              onClick={exportCSV}
              className="bg-green-600 text-white px-5 py-3 rounded-2xl"
            >
              Export CSV
            </button>
          </div>

          <input
            type="text"
            placeholder="Search contact..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-white dark:bg-slate-800 dark:text-white border p-4 rounded-2xl w-full md:w-96"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 p-6 rounded-3xl grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-4 rounded-2xl dark:bg-slate-900 dark:text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-4 rounded-2xl dark:bg-slate-900 dark:text-white"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border p-4 rounded-2xl dark:bg-slate-900 dark:text-white"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-4 rounded-2xl dark:bg-slate-900 dark:text-white"
          >
            <option>Friends</option>
            <option>Family</option>
            <option>Business</option>
            <option>Work</option>
          </select>

          <button className="bg-blue-600 text-white rounded-2xl px-6">
            {editingId
              ? "Update"
              : "Add Contact"}
          </button>
        </form>

        {/* Contact List */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Contact List
          </h2>

          {filteredContacts.length === 0 ? (
            <p className="dark:text-white">
              No contacts found
            </p>
          ) : (
            <div className="space-y-4">

              {filteredContacts.map(
                (contact) => (
                  <div
                    key={contact._id}
                    className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-5 flex justify-between items-center flex-wrap gap-4"
                  >
                    <div>
                      <h3 className="font-bold text-xl dark:text-white">
                        {contact.name}
                      </h3>

                      <p className="dark:text-gray-300">
                        {contact.email}
                      </p>

                      <p className="dark:text-gray-300">
                        {contact.phone}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">

                      <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl">
                        {contact.category}
                      </span>

                      <button
                        onClick={() =>
                          editContact(contact)
                        }
                        className="bg-yellow-500 text-white px-4 py-2 rounded-xl"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          toggleFavorite(
                            contact._id
                          )
                        }
                      >
                        <Star
                          fill={
                            contact.favorite
                              ? "gold"
                              : "none"
                          }
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

export default Contacts;