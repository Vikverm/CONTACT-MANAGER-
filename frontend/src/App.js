import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const refreshContacts = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="app-container">
      <h2>Contact Management</h2>
      <ContactForm onContactAdded={refreshContacts} />
      <ContactList refresh={refresh} />
    </div>
  );
}

export default App;
