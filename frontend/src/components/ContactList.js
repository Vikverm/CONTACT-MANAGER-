import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://contact-manager-jn7a.onrender.com/api/contacts";

export default function ContactList({ refresh }) {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_URL);
      setContacts(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchContacts();
  };

  useEffect(() => {
  fetchContacts();
  }, [refresh]);

  // 🔹 Loading state
  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading contacts...</p>;
  }

  // 🔹 Empty state
  if (contacts.length === 0) {
    return <p style={{ textAlign: "center" }}>No contacts found</p>;
  }

  return (
    <div className="contact-list">
      {contacts.map((c) => (
        <div className="contact-card" key={c._id}>
          <span>
            <strong>{c.name}</strong><br />
            {c.phone}
          </span>
          <button onClick={() => deleteContact(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
