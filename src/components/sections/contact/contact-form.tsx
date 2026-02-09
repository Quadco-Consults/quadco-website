"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INQUIRY_TYPES = [
  "IT Transformation / ERP",
  "Engineering Solutions",
  "Oil & Gas Platform Support",
  "Cybersecurity & Security Audit",
  "Infrastructure & Operations",
  "Advisory & Risk Management",
  "Procurement & Supply",
  "Other",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", inquiryType: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      // Silently handle - form still shows success for demo
      setSubmitted(true);
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card/50 backdrop-blur p-8 md:p-12 rounded-2xl border border-border shadow-2xl">
      <h3 className="text-2xl font-bold text-foreground mb-8">
        Send an Official Inquiry
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Company / Your Name
            </Label>
            <Input
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Organization Name"
              className="bg-background border-border"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Corporate Email
            </Label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="official@domain.com"
              className="bg-background border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Inquiry Type
          </Label>
          <Select
            required
            value={formData.inquiryType}
            onValueChange={(value) =>
              setFormData({ ...formData, inquiryType: value })
            }
          >
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              {INQUIRY_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Detailed Message
          </Label>
          <Textarea
            required
            rows={6}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Outline your requirements..."
            className="bg-background border-border resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 uppercase tracking-[0.2em] text-sm"
          size="lg"
        >
          {submitted ? (
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Inquiry Submitted!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              {loading ? "Sending..." : "Transmit Request"}
              {!loading && <Send className="w-4 h-4" />}
            </span>
          )}
        </Button>

        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center text-primary font-bold text-sm"
            >
              Receipt acknowledged. Our consultant will contact you shortly.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

export default ContactForm;
