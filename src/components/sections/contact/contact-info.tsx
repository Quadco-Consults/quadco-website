import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/data/company";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4 uppercase tracking-widest">
          Corporate Hub
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-foreground font-bold mb-1 uppercase tracking-wider text-sm">
                Registered Office
              </p>
              <address className="text-muted-foreground text-sm leading-relaxed not-italic">
                {COMPANY.address.street},
                <br />
                {COMPANY.address.district}, {COMPANY.address.city},
                <br />
                {COMPANY.address.country}.
              </address>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-foreground font-bold mb-1 uppercase tracking-wider text-sm">
                Contact Lines
              </p>
              <p className="text-muted-foreground text-sm">
                Office: {COMPANY.phone.office}
                <br />
                Alt: {COMPANY.phone.alt}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-foreground font-bold mb-1 uppercase tracking-wider text-sm">
                Official Email
              </p>
              <p className="text-muted-foreground text-sm">
                {COMPANY.email.general}
                <br />
                {COMPANY.email.projects}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
