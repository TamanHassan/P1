import { useState } from "react";
import "../components/Contact.css";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState("false");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Please fill in all fields.");
            return;
        }

        setLoading(true);
        setStatus("");

        try {
            console.log("Form submitted:", formData);
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact">
            <h2>Lets Connect</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button type="submit" disabled={loading}>
                    {loading ? "Send" : "Send Message"}
                </button>
                {status && <p className="status">{status}</p>}
            </form>
        </section>
    );
};
export default Contact;
