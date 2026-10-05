<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awasthi Medicals & Clinic · Bhoothnath Market, Lucknow</title>
    <meta name="description" content="Awasthi Medicals - Trusted pharmacy & homeopathic clinic in Bhoothnath Market, Lucknow for over 40 years. Home delivery of medicines across Lucknow. Consulting: Dr. Shailja Awasthi.">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💊</text></svg>">
    
    <!-- Local Business & Clinic Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Pharmacy",
          "@id": "https://awasthimedicals.com/#pharmacy",
          "name": "Awasthi Medicals",
          "description": "Trusted community pharmacy & medicine home delivery service in Bhoothnath Market and Amrapali Market, Lucknow for over 40 years.",
          "telephone": "+917081222214",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bhoothnath Market, Indira Nagar",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "226016",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.8778,
            "longitude": 80.9912
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "22:30"
            }
          ],
          "priceRange": "₹₹",
          "paymentAccepted": "Cash, UPI, Digital Wallet"
        },
        {
          "@type": "MedicalClinic",
          "@id": "https://awasthimedicals.com/#clinic",
          "name": "Awasthi Homeopathic Clinic",
          "medicalSpecialty": "Homeopathic",
          "physician": {
            "@type": "Physician",
            "name": "Dr. Shailja Awasthi",
            "jobTitle": "Consulting Homeopathic Physician",
            "description": "Consulting homeopathic physician specializing in PCOS/PCOD, chronic arthritis, hairfall, piles, and holistic wellness."
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bhoothnath Market, Indira Nagar",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "226016",
            "addressCountry": "IN"
          },
          "telephone": "+917081222214",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "11:30",
              "closes": "14:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "18:30",
              "closes": "21:00"
            }
          ]
        }
      ]
    }
    </script>

    <!-- Google Fonts: Inter & Playfair Display -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        playfair: ['"Playfair Display"', 'serif'],
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0', transform: 'scale(0.96)' },
                            '100%': { opacity: '1', transform: 'scale(1)' }
                        }
                    },
                    animation: {
                        fadeIn: 'fadeIn 0.25s ease-out forwards'
                    }
                }
            }
        }
    </script>

    <style>
        /* Custom Keyframes and Visual Effects */
        @keyframes heroZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.08); }
        }
        .hero-zoom {
            animation: heroZoom 22s ease-out infinite alternate;
        }
        
        @keyframes heroFade {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroReveal {
            from { opacity: 0; transform: translateY(35px) skewY(1.2deg); filter: blur(3px); }
            to { opacity: 1; transform: translateY(0) skewY(0); filter: blur(0); }
        }
        .hero-anim {
            animation-duration: 1.2s;
            animation-fill-mode: both;
            animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-fade {
            animation-name: heroFade;
        }
        .hero-reveal {
            animation-name: heroReveal;
        }
        
        /* 3D Pointer Orb */
        .pointer-orb {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 320px;
            height: 320px;
            pointer-events: none;
            z-index: 20;
            perspective: 1000px;
        }
        .orb-stage {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            will-change: transform;
        }
        .orb-ring {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            border: 1px solid rgba(203, 26, 26, 0.22);
            box-shadow: 0 0 25px rgba(201, 255, 72, 0.12);
        }
        .orb-ring.r1 {
            transform: rotateX(65deg) rotateY(15deg);
            animation: spinRing1 18s linear infinite;
        }
        .orb-ring.r2 {
            transform: rotateX(-50deg) rotateY(45deg);
            animation: spinRing2 24s linear infinite reverse;
        }
        .orb-ring.r3 {
            transform: rotateX(25deg) rotateY(70deg);
            animation: spinRing3 30s linear infinite;
        }
        .orb-core {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 44px;
            height: 44px;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle, rgba(231, 12, 12, 0.85) 0%, rgba(244, 4, 4, 0.45) 50%, rgba(0, 0, 0, 0) 80%);
            border-radius: 50%;
            filter: blur(5px);
            animation: pulseCore 3.5s ease-in-out infinite alternate;
        }
        .orb-dot {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #e70808;
            box-shadow: 0 0 10px #c9ff48, 0 0 18px #c9ff48;
        }
        .orb-dot.d1 { top: 20%; left: 30%; }
        .orb-dot.d2 { top: 76%; left: 66%; }
        .orb-dot.d3 { top: 38%; left: 82%; }
        
        @keyframes pulseCore {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.6; }
            100% { transform: translate(-50%, -50%) scale(1.25); opacity: 1; }
        }
        @keyframes spinRing1 {
            0% { transform: rotateX(65deg) rotateY(15deg) rotateZ(0deg); }
            100% { transform: rotateX(65deg) rotateY(15deg) rotateZ(360deg); }
        }
        @keyframes spinRing2 {
            0% { transform: rotateX(-50deg) rotateY(45deg) rotateZ(0deg); }
            100% { transform: rotateX(-50deg) rotateY(45deg) rotateZ(360deg); }
        }
        @keyframes spinRing3 {
            0% { transform: rotateX(25deg) rotateY(70deg) rotateZ(0deg); }
            100% { transform: rotateX(25deg) rotateY(70deg) rotateZ(360deg); }
        }
    </style>
</head>
<body class="bg-[#090b0a] text-gray-900 selection:bg-[#c9ff48] selection:text-black">
    <div id="root"></div>

    <!-- React 18 & ReactDOM 18 -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
    <!-- Babel Standalone for JSX compilation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
        const { useEffect, useRef, useState } = React;

        
// Comprehensive Inlined Lucide SVG Icons
function ArrowUpRight({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
    );
}

function Menu({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
    );
}

function X({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
}

function Phone({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    );
}

function MapPin({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    );
}

function MessageCircle({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9h-.5a8.48 8.48 0 0 1-8-8v-.5z"></path>
        </svg>
    );
}

function Truck({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
    );
}

function Clock({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    );
}

function CheckCircle2({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
        </svg>
    );
}

function Star({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
    );
}

function ChevronDown({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
}

function Calendar({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
    );
}

function Send({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
    );
}

function ShieldCheck({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
        </svg>
    );
}

function Stethoscope({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M4.5 3h2v7a5 5 0 0 0 10 0V3h2"></path>
            <circle cx="19" cy="3" r="1.5"></circle>
            <circle cx="4" cy="3" r="1.5"></circle>
            <path d="M11.5 15v3.5a3.5 3.5 0 0 0 7 0V17"></path>
            <circle cx="18.5" cy="16.5" r="2.5"></circle>
        </svg>
    );
}

function Package({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
    );
}

function ShoppingBag({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
    );
}


        


const PHONE = "+917081222214";
const MAP_QUERY = "Bhoothnath Market, Indira Nagar, Lucknow, Uttar Pradesh 226016";

const BG_IMAGE_1 =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";

const BG_IMAGE_2 =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

const SPOTLIGHT_R = 260;

function whatsapp(message) {
    return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

function getLiveStatus() {
    const now = new Date();
    const totalMinutes = now.getHours() * 60 + now.getMinutes();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday...

    // Store: 09:00 (540 min) to 22:30 (1350 min) daily
    const isStoreOpen = totalMinutes >= 540 && totalMinutes <= 1350;
    let storeStatus = isStoreOpen 
        ? "Store Open Now · Closes 10:30 PM" 
        : (totalMinutes < 540 ? "Store Opens Today at 9:00 AM" : "Store Closed · Opens Tomorrow 9:00 AM");

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

function RevealLayer({ image, cursorX, cursorY }) {
    const canvasRef = useRef(null);
    const revealRef = useRef(null);
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
        gradient.addColorStop(.4, "rgba(255,255,255,1)");
        gradient.addColorStop(.6, "rgba(255,255,255,.75)");
        gradient.addColorStop(.75, "rgba(255,255,255,.4)");
        gradient.addColorStop(.88, "rgba(255,255,255,.12)");
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
        <React.Fragment>
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ display: "none" }} />
            <div ref={revealRef} className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
                style={{ backgroundImage: `url(${image})` }} />
        </React.Fragment>
    );
}

function ScrollProgress({ className = "", containerRef }) {
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

function AnimatedBackground({
  children,
  defaultValue,
  className = "rounded-lg bg-zinc-100 dark:bg-zinc-800",
  transition,
  enableHover = false,
}) {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(defaultValue);
  const [hoveredId, setHoveredId] = useState(null);
  const [pillStyle, setPillStyle] = useState({ opacity: 0, left: 0, top: 0, width: 0, height: 0 });

  const currentTargetId = enableHover ? (hoveredId || activeId) : activeId;

  useEffect(() => {
    if (!containerRef.current) return;
    if (!currentTargetId) {
      setPillStyle(prev => ({ ...prev, opacity: 0 }));
      return;
    }
    const target = containerRef.current.querySelector(`[data-id="${currentTargetId}"]`);
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
        if (!React.isValidElement(child)) return child;
        const id = child.props['data-id'];
        return React.cloneElement(child, {
          onMouseEnter: (e) => {
            if (enableHover) setHoveredId(id);
            if (child.props.onMouseEnter) child.props.onMouseEnter(e);
          },
          onClick: (e) => {
            setActiveId(id);
            if (child.props.onClick) child.props.onClick(e);
          },
          className: `${child.props.className || ''} relative z-10`,
        });
      })}
    </div>
  );
}

function OrderModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    medicines: "",
    hasPrescriptionPhoto: false,
    urgency: "Standard Delivery (Today)"
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
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
              I have a doctor's prescription photo (I will attach it on WhatsApp)
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
            Orders processed directly by Awasthi Medicals ·staff · Cash on Delivery & UPI accepted.
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
      text: "Dr. Shailja's treatment for my chronic migraine has been a true blessing. After months of painkillers with only temporary relief, her gentle homeopathic remedies solved the root cause. Very compassionate and patient listener."
    },
    {
      name: "R. K. Mishra",
      area: "Bhoothnath Market",
      rating: 5,
      date: "Customer for 25+ Years",
      text: "Awasthi Medicals ·has been our family pharmacy since 1988. Shivam and Vishnukant ji always provide genuine medicines and expert advice. Their home delivery is prompt whenever my elderly parents need medications."
    },
    {
      name: "Dr. Ankit Verma",
      area: "Gomti Nagar",
      rating: 5,
      date: "Verified Customer",
      text: "Extremely reliable for authentic German dilutions (Dr. Reckeweg & Schwabe) that are often out of stock elsewhere. One quick WhatsApp message and the package was delivered to my doorstep within 2 hours in Lucknow."
    },
    {
      name: "Sunita Agarwal",
      area: "Aliganj, Lucknow",
      rating: 5,
      date: "Patient Family",
      text: "Consulted Dr. Shailja for recurrent seasonal allergic bronchitis in my 7-year-old child. The progress was noticeable within 3 weeks without any steroid or drowsy side-effects. Highly recommended neighborhood clinic!"
    }
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
                  <Star key={i} size={16} />
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
                      <Star key={idx} size={15} />
                    ))}
                  </div>
                  <span className="text-xs text-[#c9ff48]/70 font-mono">{rev.date}</span>
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed italic">
                  "{rev.text}"
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
      a: "Awasthi Medicals ·pharmacy is open daily 7 days a week from 9:00 AM to 10:30 PM. Dr. Shailja Awasthi's homeopathic consultation sessions run Monday through Saturday: Morning (11:30 AM – 2:00 PM) and Evening (6:30 PM – 9:00 PM). Sunday consultations are available on-call."
    },
    {
      q: "How do I place an order for medicine home delivery?",
      a: "Placing an order takes seconds: click the 'Home Delivery' or 'Order Medicine' button on this site, fill out your items and address, or directly WhatsApp your prescription/medicine list to +91 70812 22214. We deliver quickly across Bhoothnath, Indira Nagar, Gomti Nagar, and surrounding localities."
    },
    {
      q: "Do you stock both Allopathic and Homeopathic remedies?",
      a: "Yes! We maintain an extensive inventory of all allopathic medicines, daily OTC healthcare products, baby care, surgical items, as well as genuine German and Indian homeopathic dilutions and mother tinctures (Dr. Reckeweg, SBL, Schwabe, etc.)."
    },
    {
      q: "Can I book a consultation with Dr. Shailja Awasthi in advance?",
      a: "Yes. While walk-in patients are warmly welcomed at our Bhoothnath Market clinic during consultation hours, you can also send a WhatsApp message or call ahead at +91 70812 22214 to confirm queue timings or reserve an appointment slot for chronic case-taking."
    },
    {
      q: "Where exactly are your stores located in Lucknow?",
      a: "Our landmark primary clinic and medical store is in the central Bhoothnath Market, Indira Nagar, Lucknow (226016). We also operate our community branch in Amrapali Market, ensuring convenient local access across Indira Nagar."
    }
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
                  <div className={`w-8 h-8 rounded-full border border-white/15 grid place-items-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#c9ff48] text-black border-transparent" : "text-white/60"}`}>
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

function App() {
    const mouse = useRef({ x: -999, y: -999 });
    const smooth = useRef({ x: -999, y: -999 });
    const rafRef = useRef(null);
    const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
    const [menuOpen, setMenuOpen] = useState(false);
    const [orderModalOpen, setOrderModalOpen] = useState(false);
    const [status, setStatus] = useState(getLiveStatus());

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(getLiveStatus());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const orb = document.getElementById('pointerOrb');
        if (!orb || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
        const hero = document.getElementById('home');
        if (!hero) return;
        let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
        const onMove = (e) => {
            const r = hero.getBoundingClientRect();
            tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
            ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
        };
        const onLeave = () => { tx = 0; ty = 0; };
        hero.addEventListener('pointermove', onMove);
        hero.addEventListener('pointerleave', onLeave);
        const tick = () => {
            cx += (tx - cx) * 0.09;
            cy += (ty - cy) * 0.09;
            orb.style.transform = `rotateX(${(-cy * 14).toFixed(2)}deg) rotateY(${(cx * 19).toFixed(2)}deg) translate3d(${(cx * 18).toFixed(1)}px,${(cy * 12).toFixed(1)}px,0)`;
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => {
            hero.removeEventListener('pointermove', onMove);
            hero.removeEventListener('pointerleave', onLeave);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);



    useEffect(() => {
        const move = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
        window.addEventListener("mousemove", move);
        const animate = () => {
            smooth.current.x += (mouse.current.x - smooth.current.x) * .1;
            smooth.current.y += (mouse.current.y - smooth.current.y) * .1;
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
                <div className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
                    style={{ backgroundImage: `url(${BG_IMAGE_1})` }} />
                <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

                <div className="pointer-orb hidden sm:block" aria-hidden="true">
                    <div className="orb-stage" id="pointerOrb">
                        <div className="orb-ring r1" /><div className="orb-ring r2" /><div className="orb-ring r3" />
                        <div className="orb-core" /><i className="orb-dot d1" /><i className="orb-dot d2" /><i className="orb-dot d3" />
                    </div>
                </div>

                <div className="absolute inset-0 z-40 bg-black/35 pointer-events-none" />

                <div className="absolute top-[14%] sm:top-[16%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
                    {/* Live Operating Status Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-4 pointer-events-auto hero-anim hero-fade" style={{ animationDelay: ".1s" }}>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs text-white">
                            <span className={`w-2.5 h-2.5 rounded-full ${status.isStoreOpen ? "bg-[#c9ff48] shadow-[0_0_8px_#c9ff48] animate-pulse" : "bg-red-400"}`} />
                            <span className="font-semibold">{status.storeStatus}</span>
                        </div>
                        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs text-white">
                            <Stethoscope size={14} className="text-[#c9ff48]" />
                            <span>{status.docStatus}</span>
                        </div>
                    </div>

                    <div className="hero-anim hero-fade text-white/75 text-[10px] sm:text-xs uppercase tracking-[.22em] mb-4"
                        style={{ animationDelay: ".2s" }}>Bhoothnath Market & Amrapali Market · Lucknow · 40 Years</div>
                    <h1 className="text-white leading-[.95]">
                        <span className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
                            style={{ letterSpacing: "-.05em", animationDelay: ".3s" }}>Trusted care</span>
                        <span className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
                            style={{ letterSpacing: "-.08em", animationDelay: ".45s" }}>close to home</span>
                    </h1>
                </div>

                <div className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[280px] z-50 hero-anim hero-fade"
                    style={{ animationDelay: ".7s" }}>
                    <p className="text-sm text-white/80 leading-relaxed">
                        Awasthi Medicals ·has served Bhoothnath Market and Indira Nagar for over 40 years, bringing genuine pharmacy care and homeopathic consultations together under one trusted roof.
                    </p>
                </div>

                <div className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[300px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
                    style={{ animationDelay: ".85s" }}>
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
                        <div className="w-[26px] h-[26px] rounded-full border border-white/50 grid place-items-center text-white font-semibold text-xs bg-black/20">A</div>
                        <span className="text-white text-xl sm:text-2xl font-playfair italic">Awasthi Medicals</span>
                    </a>

                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full p-1.5 items-center">
                        <AnimatedBackground
                            defaultValue="Home"
                            className="rounded-full bg-white shadow-sm"
                            enableHover
                        >
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
                        <a href={`tel:${PHONE}`} className="hidden md:flex bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-100 items-center gap-1.5">
                            <Phone size={14} /> Call
                        </a>
                        <button type="button" onClick={() => setMenuOpen(v => !v)} aria-label="Menu"
                            className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white">
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {menuOpen && <div className="lg:hidden absolute top-16 right-4 w-60 rounded-2xl border border-white/20 bg-black/90 backdrop-blur-xl p-2.5 shadow-2xl">
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
                                onClick={() => { setMenuOpen(false); setOrderModalOpen(true); }}
                                className="w-full text-center bg-[#c9ff48] text-black font-bold py-2 rounded-xl text-xs"
                            >
                                Order Medicines Now
                            </button>
                        </div>
                    </div>}
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
                            ["50k+", "Families Cared For"]
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
                                src="assets/dr_shailja.jpg"
                                alt="Dr. Shailja Awasthi"
                                className="w-full max-h-[520px] object-cover rounded-3xl shadow-2xl border border-black/10"
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-black/10 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs font-bold text-[#111512] uppercase tracking-wider">Available for Consultations</span>
                                </div>
                                <div className="text-xs text-gray-600 mt-1">Bhoothnath Market Clinic, Lucknow</div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-playfair italic text-5xl sm:text-6xl leading-none">Dr. Shailja Awasthi</h2>
                            <p className="mt-2 text-sm font-semibold text-[#49624d] tracking-wide uppercase">Consulting Homeopathic Physician · BHMS</p>
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
                                        "Gastric & Digestive Disorders"
                                    ].map((spec) => (
                                        <span key={spec} className="px-3.5 py-1.5 bg-black/5 border border-black/10 rounded-full text-xs font-medium text-gray-800">
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
                                    href={whatsapp("Hello Awasthi Medicals, I want home delivery of medicines.

Medicine required:
Delivery address:")}
                                    className="inline-flex items-center gap-2 border border-black/20 hover:bg-black/10 text-black px-6 py-3.5 rounded-full text-sm font-semibold transition-all"
                                >
                                    <MessageCircle size={16} /> Direct WhatsApp
                                </a>
                            </div>
                        </div>
                        <img
                            src="assets/delivery_banner.jpg"
                            alt="Awasthi Medicals ·Delivery"
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
                                    <div className="text-white/60 text-sm mt-1">Open 7 Days a Week: 9:00 AM – 10:30 PM</div>
                                    <div className="text-[#c9ff48]/90 text-xs mt-2 font-medium">Dr. Shailja Clinic: 11:30 AM – 2:00 PM & 6:30 PM – 9:00 PM (Mon-Sat)</div>
                                </div>
                            </div>
                            <div className="flex gap-4 py-5 border-b border-white/10">
                                <Phone className="text-[#c9ff48] shrink-0" size={24} />
                                <div>
                                    <div className="font-semibold text-white">Call Us Directly:</div>
                                    <a href={`tel:${PHONE}`} className="text-white/60 hover:text-white text-sm mt-1 block">{PHONE}</a>
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
                                <a href={`tel:${PHONE}`} className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 flex items-center gap-2">
                                    <Phone size={15} /> Call Store
                                </a>
                                <button
                                    onClick={() => setOrderModalOpen(true)}
                                    className="bg-[#c9ff48] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b8eb3e] flex items-center gap-2"
                                >
                                    <ShoppingBag size={15} /> Order Medicine
                                </button>
                                <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`} className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 flex items-center gap-2">
                                    <MapPin size={15} /> Open Map
                                </a>
                            </div>
                        </div>
                        <div className="min-h-[420px] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                            <iframe
                                title="Awasthi Medicals ·Location"
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
                        <span className="font-playfair italic text-white text-base">Awasthi Medicals ·& Clinic</span>
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




        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>
