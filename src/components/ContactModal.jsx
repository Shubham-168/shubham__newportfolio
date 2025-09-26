import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

export default function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "Hi Shubham,\n\nI came across your portfolio and was really impressed. I'd love to connect!\n\nBest regards,\n[Your Name]" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_roqvrxo",      // EmailJS service ID
        "template_5y91m39",     // EmailJS template ID
        formData,
        "lXsIOhinH26cq7LoD"     // EmailJS public key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        onClose();
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Contact Me</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Your Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={22} color="inherit" /> : "Send"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
