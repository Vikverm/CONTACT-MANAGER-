const Contact =
    require("../models/Contact");

// Add Contact
exports.addContact =
    async (req, res) => {
        try {
            const {
                name,
                email,
                phone,
                category,
            } = req.body;

            const contact =
                await Contact.create({
                    name,
                    email,
                    phone,
                    category,
                    createdBy:
                        req.user.id,
                });

            res
                .status(201)
                .json(contact);
        } catch (error) {
            res
                .status(500)
                .json({
                    message:
                        error.message,
                });
        }
    };

// Get Contacts
exports.getContacts =
    async (req, res) => {
        try {
            const contacts =
                await Contact.find({
                    createdBy:
                        req.user.id,
                });

            res.json(
                contacts
            );
        } catch (error) {
            res
                .status(500)
                .json({
                    message:
                        error.message,
                });
        }
    };

// Delete Contact
exports.deleteContact =
    async (req, res) => {
        try {
            await Contact.findByIdAndDelete(
                req.params.id
            );

            res.json({
                message:
                    "Deleted",
            });
        } catch (error) {
            res
                .status(500)
                .json({
                    message:
                        error.message,
                });
        }
    };

// Toggle Favorite
exports.toggleFavorite =
    async (req, res) => {
        try {
            const contact =
                await Contact.findById(
                    req.params.id
                );

            contact.favorite =
                !contact.favorite;

            await contact.save();

            res.json(contact);

        } catch (error) {
            res.status(500).json({
                message:
                    error.message,
            });
        }
    };

// Edit Contact
exports.updateContact =
    async (req, res) => {
        try {
            const updated =
                await Contact.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                    }
                );

            res.json(updated);

        } catch (error) {
            res.status(500).json({
                message:
                    error.message,
            });
        }
    };
// Dashboard Stats
exports.getStats =
    async (req, res) => {
        try {

            const contacts =
                await Contact.find({
                    createdBy:
                        req.user.id,
                });

            const total =
                contacts.length;

            const favorites =
                contacts.filter(
                    (c) =>
                        c.favorite
                ).length;

            const business =
                contacts.filter(
                    (c) =>
                        c.category ===
                        "Business"
                ).length;

            const recent =
                contacts.slice(-5);

            res.json({
                total,
                favorites,
                business,
                recentCount:
                    recent.length,
            });

        } catch (error) {
            res.status(500).json({
                message:
                    error.message,
            });
        }
    };