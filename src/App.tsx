import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  Truck,
  Clock,
  Star,
  ChevronDown,
  Calendar,
  Send,
  Stethoscope,
  ShoppingBag,
} from "lucide-react";

const PHONE = "+917081222214";
const MAP_QUERY = "Bhoothnath Market, Indira Nagar, Lucknow, Uttar Pradesh 226016";

const BG_IMAGE_1 = "assets/hero_bg1.webp";
const BG_IMAGE_2 = "assets/hero_bg2.webp";

const SPOTLIGHT_R = 260;

function whatsapp(message: string): string {
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

interface LiveStatus {
  isStoreOpen: boolean;
  storeStatus: string;
  isDocConsulting: boolean;
  docStatus: string;
}

function getLiveStatus(): LiveStatus {
  const now = new Date();
  const totalMinutes = now.getHours() * 60 + now.getMinutes();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday...

  // Store: 09:00 (540 min) to 22:30 (1350 min), Monday - Saturday (6 days)
  const isStoreDay = day >= 1 && day <= 6;
  const isStoreOpen = isStoreDay && totalMinutes >= 540 && totalMinutes <= 1350;
  const storeStatus = !isStoreDay
    ? "Sunday Closed · Opens Monday 9:00 AM"
    : isStoreOpen
    ? "Store Open Now · Closes 10:30 PM"
    : totalMinutes < 540
    ? "Store Opens Today at 9:00 AM"
    : "Store Closed · Opens Tomorrow 9:00 AM";

  // Doctor: Morning 11:30 (690 min) to 14:00 (840 min), Evening 18:30 (1110 min) to 21:00 (1260 min)
  // Monday - Saturday
  const isDocDay = day >= 1 && day <= 6;
  let isDocConsulting = false;
  let docStatus = "";

  if (!isDocDay) {
    docStatus = "Sunday: Consultations On-Call / Prior Appointment";
  } else if (totalMinutes >= 690 && totalMinutes <= 840) {
    isDocConsulting = true;
    docStatus = "Dr. Shailja in Clinic (Morning: 11:30 AM – 2:00 PM)";
  } else if (totalMinutes >= 1110 && totalMinutes <= 1260) {
    isDocConsulting = true;
    docStatus = "Dr. Shailja in Clinic (Evening: 6:30 PM – 9:00 PM)";
  } else if (totalMinutes < 690) {
    docStatus = "Next Consultation: Today 11:30 AM – 2:00 PM";
  } else if (totalMinutes < 1110) {
    docStatus = "Next Consultation: Today 6:30 PM – 9:00 PM";
  } else {
    docStatus = "Consultations Done for Today · Tomorrow 11:30 AM";
  }

  return { isStoreOpen, storeStatus, isDocConsulting, docStatus };
}

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
}

function RevealLayer({ image, cursorX, cursorY }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setReady(true);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reveal = revealRef.current;
    if (!canvas || !reveal || !ready || cursorX < -100) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, SPOTLIGHT_R);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,.75)");
    gradient.addColorStop(0.75, "rgba(255,255,255,.4)");
    gradient.addColorStop(0.88, "rgba(255,255,255,.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();
    const mask = canvas.toDataURL("image/png");
    reveal.style.maskImage = `url(${mask})`;
    reveal.style.webkitMaskImage = `url(${mask})`;
    reveal.style.maskSize = "100% 100%";
    reveal.style.webkitMaskSize = "100% 100%";
  }, [cursorX, cursorY, ready]);

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ display: "none" }} />
      <div
        ref={revealRef}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
        style={{ backgroundImage: `url(${image})` }}
      />
    </>
  );
}

interface ScrollProgressProps {
  className?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
}

function ScrollProgress({ className = "", containerRef }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef && containerRef.current ? containerRef.current : window;
    const handleScroll = () => {
      if (containerRef && containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const total = scrollHeight - clientHeight;
        setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
      } else {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return (
    <div
      className={`transition-[width] duration-75 ease-out ${className}`}
      style={{ width: `${progress}%` }}
    />
  );
}

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
  enableHover?: boolean;
}

function AnimatedBackground({
  children,
  defaultValue,
  className = "rounded-lg bg-zinc-100 dark:bg-zinc-800",
  enableHover = false,
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | undefined>(defaultValue);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pillStyle, setPillStyle] = useState({ opacity: 0, left: 0, top: 0, width: 0, height: 0 });

  const currentTargetId = enableHover ? hoveredId || activeId : activeId;

  useEffect(() => {
    if (!containerRef.current) return;
    if (!currentTargetId) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const target = containerRef.current.querySelector<HTMLElement>(`[data-id="${currentTargetId}"]`);
    if (target) {
      setPillStyle({
        opacity: 1,
        left: target.offsetLeft,
        top: target.offsetTop,
        width: target.offsetWidth,
        height: target.offsetHeight,
      });
    }
  }, [currentTargetId]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center"
      onMouseLeave={() => {
        if (enableHover) setHoveredId(null);
      }}
    >
      <div
        className={`absolute pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${className}`}
        style={{
          opacity: pillStyle.opacity,
          transform: `translate3d(${pillStyle.left}px, ${pillStyle.top}px, 0)`,
          width: `${pillStyle.width}px`,
          height: `${pillStyle.height}px`,
        }}
      />
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<Record<string, unknown>>(child)) return child;
        const id = child.props["data-id"] as string | undefined;
        return React.cloneElement(child, {
          onMouseEnter: (e: React.MouseEvent) => {
            if (enableHover && id) setHoveredId(id);
            if (typeof child.props.onMouseEnter === "function") child.props.onMouseEnter(e);
          },
          onClick: (e: React.MouseEvent) => {
            if (id) setActiveId(id);
            if (typeof child.props.onClick === "function") child.props.onClick(e);
          },
          className: `${(child.props.className as string) || ""} relative z-10`,
        });
      })}
    </div>
  );
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    medicines: "",
    hasPrescriptionPhoto: false,
    urgency: "Standard Delivery (Today)",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.medicines.trim()) {
      alert("Please enter your name and required medicines.");
      return;
    }
    const message = `*NEW MEDICINE DELIVERY ORDER - AWASTHI MEDICALS*
---------------------------------------
👤 *Customer Name:* ${formData.name}
📞 *Phone Number:* ${formData.phone || "Same as WhatsApp"}
📍 *Delivery Address:* ${formData.address || "Lucknow (Please confirm via chat)"}
📦 *Required Medicines:*
${formData.medicines}
---------------------------------------
📑 *Prescription Photo:* ${formData.hasPrescriptionPhoto ? "Yes, I will send the photo now" : "No prescription required / written above"}
⚡ *Delivery Preference:* ${formData.urgency}
---------------------------------------
Thank you! Please confirm delivery timeline and total amount.`;

    window.open(whatsapp(message), "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#111512] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-[#c9ff48]/15 border border-[#c9ff48]/30 flex items-center justify-center text-[#c9ff48]">
            <Truck size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold font-playfair italic">Order Medicine / Home Delivery</h3>
            <p className="text-xs text-white/60">Fast local doorstep delivery across Lucknow</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-sm">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Verma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#c9ff48]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
              Contact / Mobile Number
            </label>
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#c9ff48]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
              Delivery Address & Landmark in Lucknow
            </label>
            <input
              type="text"
              placeholder="e.g. Flat 302, Sector 14, Indira Nagar, Lucknow"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#c9ff48]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
              List of Medicines / Products Needed *
            </label>
            <textarea
              required
              rows={3}
              placeholder="e.g. Paracetamol 650mg (1 strip), Arnica Montana 30C (1 bottle), Vitamin D3 capsules..."
              value={formData.medicines}
              onChange={(e) => setFormData({ ...formData, medicines: e.target.value })}
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#c9ff48]"
            />
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <input
              type="checkbox"
              id="prescriptionCheck"
              checked={formData.hasPrescriptionPhoto}
              onChange={(e) => setFormData({ ...formData, hasPrescriptionPhoto: e.target.checked })}
              className="w-4 h-4 rounded text-[#c9ff48] accent-[#c9ff48] cursor-pointer"
            />
            <label htmlFor="prescriptionCheck" className="text-xs text-white/80 cursor-pointer select-none">
              I have a doctor&#39;s prescription photo (I will attach it on WhatsApp)
            </label>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {["Standard Delivery (Today)", "Urgent Delivery (Priority)"].map((speed) => (
              <button
                key={speed}
                type="button"
                onClick={() => setFormData({ ...formData, urgency: speed })}
                className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                  formData.urgency === speed
                    ? "bg-[#c9ff48]/20 border-[#c9ff48] text-[#c9ff48]"
                    : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                }`}
              >
                {speed}
              </button>
            ))}
          </div>

          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/20"
            >
              <Send size={16} /> Send via WhatsApp
            </button>
            <a
              href={`tel:${PHONE}`}
              className="border border-white/20 hover:bg-white/10 text-white py-3 px-5 rounded-full flex items-center justify-center gap-2 font-medium transition-all"
            >
              <Phone size={15} /> Call Instead
            </a>
          </div>

          <p className="text-[11px] text-white/40 text-center pt-1">
            Orders processed directly by Awasthi Medicals staff · Cash on Delivery & UPI accepted.
          </p>
        </form>
      </div>
    </div>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      name: "Priya Srivastava",
      area: "Indira Nagar, Sector 14",
      rating: 5,
      date: "Recent Patient",
      text: "Dr. Shailja's treatment for my chronic migraine has been a true blessing. After months of painkillers with only temporary relief, her gentle homeopathic remedies solved the root cause. Very compassionate and patient listener.",
    },
    {
      name: "R. K. Mishra",
      area: "Bhoothnath Market",
      rating: 5,
      date: "Customer for 25+ Years",
      text: "Awasthi Medicals has been our family pharmacy since 1988. Shivam and Vishnukant ji always provide genuine medicines and expert advice. Their home delivery is prompt whenever my elderly parents need medications.",
    },
    {
      name: "Dr. Ankit Verma",
      area: "Gomti Nagar",
      rating: 5,
      date: "Verified Customer",
      text: "Extremely reliable for authentic German dilutions (Dr. Reckeweg & Schwabe) that are often out of stock elsewhere. One quick WhatsApp message and the package was delivered to my doorstep within 2 hours in Lucknow.",
    },
    {
      name: "Sunita Agarwal",
      area: "Aliganj, Lucknow",
      rating: 5,
      date: "Patient Family",
      text: "Consulted Dr. Shailja for recurrent seasonal allergic bronchitis in my 7-year-old child. The progress was noticeable within 3 weeks without any steroid or drowsy side-effects. Highly recommended neighborhood clinic!",
    },
  ];

  return (
    <section id="reviews" className="bg-[#101411] text-white py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-[#c9ff48] text-xs tracking-[.2em] uppercase mb-4">03 / Community Trust</div>
            <h2 className="font-playfair italic text-4xl sm:text-6xl">Words from our neighbors.</h2>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
            <div className="text-3xl sm:text-4xl font-bold text-[#c9ff48]">4.9</div>
            <div>
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-white/60 mt-1">Based on 500+ patient visits in Lucknow</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-[#141a15] border border-white/10 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} size={15} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-[#c9ff48]/70 font-mono">{rev.date}</span>
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#c9ff48]/20 text-[#c9ff48] font-bold text-xs grid place-items-center">
                  {rev.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{rev.name}</div>
                  <div className="text-xs text-white/50">{rev.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Trust Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-12 border-t border-white/10">
          {[
            { title: "40+ Years", desc: "Trusted in Bhoothnath Market" },
            { title: "BHMS Physician", desc: "Dr. Shailja Awasthi on-site" },
            { title: "100% Genuine", desc: "Certified Allopathic & Homeopathic" },
            { title: "Home Delivery", desc: "Fast service across Lucknow" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/[.02] border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-[#c9ff48] font-bold text-xl sm:text-2xl">{item.title}</div>
              <div className="text-xs text-white/60 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What are the store and clinic operating hours?",
      a: "Awasthi Medicals pharmacy is open 6 days a week (Monday through Saturday) from 9:00 AM to 10:30 PM. Dr. Shailja Awasthi's homeopathic consultation sessions run Monday through Saturday: Morning (11:30 AM – 2:00 PM) and Evening (6:30 PM – 9:00 PM). Sunday consultations are available on-call.",
    },
    {
      q: "How do I place an order for medicine home delivery?",
      a: "Placing an order takes seconds: click the 'Home Delivery' or 'Order Medicine' button on this site, fill out your items and address, or directly WhatsApp your prescription/medicine list to +91 70812 22214. We deliver quickly across Bhoothnath, Indira Nagar, Gomti Nagar, and surrounding localities.",
    },
    {
      q: "Do you stock both Allopathic and Homeopathic remedies?",
      a: "Yes! We maintain an extensive inventory of all allopathic medicines, daily OTC healthcare products, baby care, surgical items, as well as genuine German and Indian homeopathic dilutions and mother tinctures (Dr. Reckeweg, SBL, Schwabe, etc.).",
    },
    {
      q: "Can I book a consultation with Dr. Shailja Awasthi in advance?",
      a: "Yes. While walk-in patients are warmly welcomed at our Bhoothnath Market clinic during consultation hours, you can also send a WhatsApp message or call ahead at +91 70812 22214 to confirm queue timings or reserve an appointment slot for chronic case-taking.",
    },
    {
      q: "Where exactly are your stores located in Lucknow?",
      a: "Our landmark primary clinic and medical store is in the central Bhoothnath Market, Indira Nagar, Lucknow (226016). We also operate our community branch in Amrapali Market, ensuring convenient local access across Indira Nagar.",
    },
  ];

  return (
    <section id="faq" className="bg-[#090b0a] text-white py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="text-[#c9ff48] text-xs tracking-[.2em] uppercase mb-4">05 / Frequently Asked Questions</div>
          <h2 className="font-playfair italic text-4xl sm:text-6xl">Everything you need to know.</h2>
          <p className="text-white/60 text-sm mt-4 max-w-lg mx-auto">
            Got questions about consultations, store timings, or medicine home delivery? Find answers here or reach out directly.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-white/10 rounded-2xl bg-white/[.02] overflow-hidden transition-all duration-200 hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
                >
                  <span className="font-medium text-base sm:text-lg text-white/90">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/15 grid place-items-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#c9ff48] text-black border-transparent" : "text-white/60"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-white/65 leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [status, setStatus] = useState<LiveStatus>(getLiveStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getLiveStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const orb = document.getElementById("pointerOrb");
    if (!orb || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    const hero = document.getElementById("home");
    if (!hero) return;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    const tick = () => {
      cx += (tx - cx) * 0.09;
      cy += (ty - cy) * 0.09;
      orb.style.transform = `rotateX(${(-cy * 14).toFixed(2)}deg) rotateY(${(cx * 19).toFixed(2)}deg) translate3d(${(
        cx * 18
      ).toFixed(1)}px,${(cy * 12).toFixed(1)}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", move);
    const animate = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white tracking-[-0.02em] pb-16 md:pb-0" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ScrollProgress className="fixed top-0 left-0 h-[3px] bg-[#c9ff48] z-[150] shadow-[0_0_12px_#c9ff48]" />

      <OrderModal isOpen={orderModalOpen} onClose={() => setOrderModalOpen(false)} />

      {/* HERO SECTION */}
      <section id="home" className="relative w-full overflow-hidden h-screen bg-black" style={{ height: "100dvh" }}>
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
          style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
        />
        <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

        <div className="pointer-orb hidden sm:block" aria-hidden="true">
          <div className="orb-stage" id="pointerOrb">
            <div className="orb-ring r1" />
            <div className="orb-ring r2" />
            <div className="orb-ring r3" />
            <div className="orb-core" />
            <i className="orb-dot d1" />
            <i className="orb-dot d2" />
            <i className="orb-dot d3" />
          </div>
        </div>

        <div className="absolute inset-0 z-40 bg-black/35 pointer-events-none" />

        <div className="absolute top-[14%] sm:top-[16%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
          {/* Live Operating Status Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 pointer-events-auto hero-anim hero-fade" style={{ animationDelay: ".1s" }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs text-white">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  status.isStoreOpen ? "bg-[#c9ff48] shadow-[0_0_8px_#c9ff48] animate-pulse" : "bg-red-400"
                }`}
              />
              <span className="font-semibold">{status.storeStatus}</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs text-white">
              <Stethoscope size={14} className="text-[#c9ff48]" />
              <span>{status.docStatus}</span>
            </div>
          </div>

          <div
            className="hero-anim hero-fade text-white/75 text-[10px] sm:text-xs uppercase tracking-[.22em] mb-4"
            style={{ animationDelay: ".2s" }}
          >
            Bhoothnath Market & Amrapali Market · Lucknow · 40 Years
          </div>
          <h1 className="text-white leading-[.95]">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
              style={{ letterSpacing: "-.05em", animationDelay: ".3s" }}
            >
              Trusted care
            </span>
            <span
              className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
              style={{ letterSpacing: "-.08em", animationDelay: ".45s" }}
            >
              close to home
            </span>
          </h1>
        </div>

        <div
          className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[280px] z-50 hero-anim hero-fade"
          style={{ animationDelay: ".7s" }}
        >
          <p className="text-sm text-white/80 leading-relaxed">
            Awasthi Medicals has served Bhoothnath Market and Indira Nagar for over 40 years, bringing genuine pharmacy care and homeopathic consultations together under one trusted roof.
          </p>
        </div>

        <div
          className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[300px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
          style={{ animationDelay: ".85s" }}
        >
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Need medicines delivered to your doorstep? Place your order online or send your prescription via WhatsApp.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setOrderModalOpen(true)}
              className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 shadow-lg shadow-[#e8702a]/30 flex items-center gap-2"
            >
              <ShoppingBag size={16} /> Home Delivery
            </button>
            <a
              href="#clinic"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white text-sm font-semibold px-5 py-3 rounded-full transition-all flex items-center gap-1.5"
            >
              Dr. Shailja <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-[26px] h-[26px] rounded-full border border-white/50 grid place-items-center text-white font-semibold text-xs bg-black/20">
              A
            </div>
            <span className="text-white text-xl sm:text-2xl font-playfair italic">Awasthi Medicals</span>
          </a>

          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full p-1.5 items-center">
            <AnimatedBackground defaultValue="Home" className="rounded-full bg-white shadow-sm" enableHover>
              {[
                { id: "Home", label: "Home", href: "#home" },
                { id: "About", label: "About", href: "#about" },
                { id: "Clinic", label: "Clinic", href: "#clinic" },
                { id: "Reviews", label: "Reviews", href: "#reviews" },
                { id: "Delivery", label: "Delivery", href: "#delivery" },
                { id: "FAQ", label: "FAQ", href: "#faq" },
                { id: "Contact", label: "Contact", href: "#contact" },
              ].map((tab) => (
                <a
                  key={tab.id}
                  data-id={tab.id}
                  href={tab.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/80 hover:text-gray-900 transition-colors duration-200"
                >
                  {tab.label}
                </a>
              ))}
            </AnimatedBackground>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOrderModalOpen(true)}
              className="hidden sm:inline-flex bg-[#c9ff48] text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-[#b8eb3e] items-center gap-1.5 transition-transform hover:scale-105"
            >
              <ShoppingBag size={14} /> Order
            </button>
            <a
              href={`tel:${PHONE}`}
              className="hidden md:flex bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-100 items-center gap-1.5"
            >
              <Phone size={14} /> Call
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden absolute top-16 right-4 w-60 rounded-2xl border border-white/20 bg-black/90 backdrop-blur-xl p-2.5 shadow-2xl">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Clinic & Dr. Shailja", href: "#clinic" },
                { name: "Patient Reviews", href: "#reviews" },
                { name: "Home Delivery", href: "#delivery" },
                { name: "FAQ", href: "#faq" },
                { name: "Visit & Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white/85 hover:text-white hover:bg-white/10 rounded-xl px-4 py-2.5 text-xs font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setOrderModalOpen(true);
                  }}
                  className="w-full text-center bg-[#c9ff48] text-black font-bold py-2 rounded-xl text-xs"
                >
                  Order Medicines Now
                </button>
              </div>
            </div>
          )}
        </nav>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#090b0a] text-white py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="text-[#c9ff48] text-xs tracking-[.2em] uppercase mb-5">01 / Our Heritage</div>
              <h2 className="font-playfair italic text-5xl sm:text-7xl leading-none">A local name, built over time.</h2>
            </div>
            <p className="text-white/60 leading-7 max-w-xl">
              AWASTHI MEDICALS has been a trusted cornerstone of the Bhoothnath Market and Indira Nagar community in Lucknow for over 40 years. Founded and operated with deep personal commitment by Shivam Awasthi and Vishnu Kant Awasthi, we unite a fully stocked pharmacy with specialized homeopathic clinical care led by Dr. Shailja Awasthi.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-white/10 mt-16">
            {[
              ["40+", "Years Serving Lucknow"],
              ["02", "Locations (Bhoothnath & Amrapali)"],
              ["50k+", "Families Cared For"],
            ].map(([big, small]) => (
              <div key={big} className="bg-[#090b0a] p-8 sm:p-10">
                <div className="text-4xl sm:text-5xl font-semibold text-white">{big}</div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-3">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINIC SECTION */}
      <section id="clinic" className="bg-[#eef2ed] text-[#111512] py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-xs tracking-[.2em] uppercase text-[#49624d] mb-5">02 / The Homeopathic Clinic</div>
          <div className="grid md:grid-cols-[.85fr_1.15fr] gap-12 items-center">
            <div className="relative">
              <img
                src="data:image/jpeg;base64,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" alt="Dr. Shailja Awasthi" className="aspect-square max-w-[360px] rounded-sm object-cover" />

                alt="Dr. Shailja Awasthi"
                className="w-full max-h-[520px] object-cover rounded-3xl shadow-2xl border border-black/10"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-black/10 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-[#111512] uppercase tracking-wider">
                    Available for Consultations
                  </span>
                </div>
                <div className="text-xs text-gray-600 mt-1">Bhoothnath Market Clinic, Lucknow</div>
              </div>
            </div>

            <div>
              <h2 className="font-playfair italic text-5xl sm:text-6xl leading-none">Dr. Shailja Awasthi</h2>
              <p className="mt-2 text-sm font-semibold text-[#49624d] tracking-wide uppercase">
                Consulting Homeopathic Physician · BHMS
              </p>
              <p className="mt-4 text-[#526058] leading-7">
                As the clinic’s dedicated consulting physician, Dr. Shailja offers thoughtful, root-cause homeopathic care. She takes the time to listen thoroughly to every patient’s medical history, crafting customized remedies that work gently and sustainably without undesirable side-effects.
              </p>

              {/* Exact Timings Card */}
              <div className="mt-8 bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#49624d]">
                    <Clock size={16} /> Consultation Timings
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Mon – Sat
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-[#f5f8f4] p-4 rounded-xl border border-black/5">
                    <div className="text-xs uppercase text-gray-500 font-semibold">Morning Session</div>
                    <div className="text-lg font-bold text-[#111512] mt-0.5">11:30 AM – 2:00 PM</div>
                    <div className="text-[11px] text-gray-500 mt-1">Walk-in & Advance Appointments</div>
                  </div>
                  <div className="bg-[#f5f8f4] p-4 rounded-xl border border-black/5">
                    <div className="text-xs uppercase text-gray-500 font-semibold">Evening Session</div>
                    <div className="text-lg font-bold text-[#111512] mt-0.5">6:30 PM – 9:00 PM</div>
                    <div className="text-[11px] text-gray-500 mt-1">Walk-in & Advance Appointments</div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={whatsapp("Hello Dr. Shailja Awasthi / Awasthi Medicals, I would like to book a consultation appointment.")}
                    className="bg-[#111512] hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <Calendar size={15} /> Book Consultation on WhatsApp
                  </a>
                  <a
                    href={`tel:${PHONE}`}
                    className="border border-black/20 hover:bg-black/5 text-[#111512] text-xs sm:text-sm font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2 transition-all"
                  >
                    <Phone size={14} /> Call Clinic
                  </a>
                </div>
              </div>

              {/* Specialties */}
              <div className="mt-8">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">Core Clinical Specialties:</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "PCOS / PCOD & Hormonal Care",
                    "Arthritis & Chronic Joint Pain",
                    "Hairfall & Alopecia",
                    "Piles & Fissure Care",
                    "Kidney Stones",
                    "Chronic Migraine",
                    "Children Immunity & Allergies",
                    "Gastric & Digestive Disorders",
                  ].map((spec) => (
                    <span
                      key={spec}
                      className="px-3.5 py-1.5 bg-black/5 border border-black/10 rounded-full text-xs font-medium text-gray-800"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <ReviewsSection />

      {/* DELIVERY SECTION */}
      <section id="delivery" className="bg-[#c9ff48] text-[#0d120b] py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-[1.2fr_.8fr] gap-12 items-center">
            <div>
              <div className="text-xs tracking-[.2em] uppercase opacity-70 mb-5 font-semibold">04 / Home Delivery Service</div>
              <h2 className="font-playfair italic text-5xl sm:text-7xl leading-none">Medicine to your doorstep.</h2>
              <p className="mt-6 max-w-xl leading-7 text-[#1b2417] text-base">
                Fast, reliable medicine delivery across Indira Nagar, Bhoothnath Market, Gomti Nagar, and surrounding Lucknow areas. Simply message your required medicines or upload your doctor’s prescription.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#10140e] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:bg-black hover:scale-[1.03] shadow-lg shadow-black/20"
                >
                  <ShoppingBag size={17} /> Order Medicine Delivery <ArrowUpRight size={16} />
                </button>
                <a
                  href={whatsapp("Hello Awasthi Medicals, I want home delivery of medicines.\n\nMedicine required:\nDelivery address:")}
                  className="inline-flex items-center gap-2 border border-black/20 hover:bg-black/10 text-black px-6 py-3.5 rounded-full text-sm font-semibold transition-all"
                >
                  <MessageCircle size={16} /> Direct WhatsApp
                </a>
              </div>
            </div>
            <img
              src="assets/delivery_banner.jpg"
              alt="Awasthi Medicals Delivery"
              className="w-full h-auto min-h-35 object-cover rounded-3xl border border-black/15 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection />

      {/* CONTACT & LOCATION SECTION */}
      <section id="contact" className="bg-[#090b0a] text-white py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-xs tracking-[.2em] uppercase text-[#c9ff48] mb-5">06 / Visit Us in Lucknow</div>
          <h2 className="font-playfair italic text-5xl sm:text-7xl leading-none mb-12">Come by. Call. WhatsApp.</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border border-white/10 bg-white/[.03] p-7 sm:p-10 rounded-3xl">
              <div className="flex gap-4 py-5 border-b border-white/10">
                <MapPin className="text-[#c9ff48] shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-white">Main Pharmacy & Clinic:</div>
                  <div className="text-white/60 text-sm mt-1">Bhoothnath Market, Indira Nagar, Lucknow, Uttar Pradesh 226016</div>
                  <div className="text-white/40 text-xs mt-2">Secondary Location: Amrapali Market, Lucknow</div>
                </div>
              </div>
              <div className="flex gap-4 py-5 border-b border-white/10">
                <Clock className="text-[#c9ff48] shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-white">Pharmacy Store Hours:</div>
                  <div className="text-white/60 text-sm mt-1">Open 6 Days a Week: 9:00 AM – 10:30 PM</div>
                  <div className="text-[#c9ff48]/90 text-xs mt-2 font-medium">
                    Dr. Shailja Clinic: 11:30 AM – 2:00 PM & 6:30 PM – 9:00 PM (Mon-Sat)
                  </div>
                </div>
              </div>
              <div className="flex gap-4 py-5 border-b border-white/10">
                <Phone className="text-[#c9ff48] shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-white">Call Us Directly:</div>
                  <a href={`tel:${PHONE}`} className="text-white/60 hover:text-white text-sm mt-1 block">
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <MessageCircle className="text-[#c9ff48] shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-white">WhatsApp Medicine Delivery:</div>
                  <div className="text-white/60 text-sm mt-1">Send prescriptions or inquiries anytime 24/7</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-white/10">
                <a
                  href={`tel:${PHONE}`}
                  className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 flex items-center gap-2"
                >
                  <Phone size={15} /> Call Store
                </a>
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="bg-[#c9ff48] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b8eb3e] flex items-center gap-2"
                >
                  <ShoppingBag size={15} /> Order Medicine
                </button>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`}
                  className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 flex items-center gap-2"
                >
                  <MapPin size={15} /> Open Map
                </a>
              </div>
            </div>
            <div className="min-h-[420px] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <iframe
                title="Awasthi Medicals Location"
                className="w-full h-full min-h-[420px] border-0"
                src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#090b0a] text-white/40 border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-playfair italic text-white text-base">Awasthi Medicals & Clinic</span>
            <span>· Bhoothnath Market & Amrapali Market, Lucknow</span>
          </div>
          <div>Serving the community with trust since 1980s</div>
        </div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-4 text-[10px] leading-5 text-white/25 text-center sm:text-left">
          Medical Disclaimer: Information provided on this website is for general informational and local community service purposes only. For serious medical emergencies, please visit the nearest hospital emergency department or consult qualified healthcare professionals immediately.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsapp("Hello Awasthi Medicals, I have an enquiry.")}
        className="hidden sm:flex fixed right-6 bottom-6 z-[110] bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full items-center gap-2 shadow-2xl hover:scale-105 transition-all shadow-[#25D366]/30"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>

      {/* Sticky Mobile Bottom Quick Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[115] bg-[#090b0a]/95 backdrop-blur-xl border-t border-white/15 px-4 py-2.5 flex items-center justify-around gap-2 shadow-2xl">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 py-2.5 rounded-xl bg-white/10 text-white font-medium text-xs flex items-center justify-center gap-1.5 hover:bg-white/20 active:scale-95 transition-all"
        >
          <Phone size={14} /> Call
        </a>
        <button
          type="button"
          onClick={() => setOrderModalOpen(true)}
          className="flex-[1.4] py-2.5 rounded-xl bg-[#c9ff48] text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#c9ff48]/20 active:scale-95 transition-all"
        >
          <ShoppingBag size={14} /> Order
        </button>
        <a
          href={whatsapp("Hello Awasthi Medicals, I have an enquiry.")}
          className="flex-1 py-2.5 rounded-xl bg-[#25D366] text-black font-semibold text-xs flex items-center justify-center gap-1 hover:bg-[#20ba5a] active:scale-95 transition-all"
        >
          <MessageCircle size={14} /> Chat
        </a>
      </div>
    </div>
  );
}
