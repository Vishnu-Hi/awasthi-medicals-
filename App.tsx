import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X, Phone, MapPin, MessageCircle, Truck } from "lucide-react";

const PHONE = "+917275321380";
const MAP_QUERY = "Bhoothnath Market, Indira Nagar, Lucknow, Uttar Pradesh 226016";

const BG_IMAGE_1 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";

const BG_IMAGE_2 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

const SPOTLIGHT_R = 260;
type Cursor = { x: number; y: number };

function whatsapp(message: string) {
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

function RevealLayer({ image, cursorX, cursorY }: { image: string; cursorX: number; cursorY: number }) {
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

  return <>
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{display:"none"}} />
    <div ref={revealRef} className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
      style={{backgroundImage:`url(${image})`}} />
  </>;
}

function App() {
  const mouse = useRef<Cursor>({x:-999,y:-999});
  const smooth = useRef<Cursor>({x:-999,y:-999});
  const rafRef = useRef<number | null>(null);
  const [cursorPos,setCursorPos] = useState<Cursor>({x:-999,y:-999});
  const [menuOpen,setMenuOpen] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { mouse.current = {x:e.clientX,y:e.clientY}; };
    window.addEventListener("mousemove",move);
    const animate = () => {
      smooth.current.x += (mouse.current.x-smooth.current.x)*.1;
      smooth.current.y += (mouse.current.y-smooth.current.y)*.1;
      setCursorPos({x:smooth.current.x,y:smooth.current.y});
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current=requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove",move);
      if(rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  },[]);

  const deliveryMessage = "Hello Awasthi Homeopathy, I want home delivery.%0A%0AMedicine required: %0ADelivery address: ";
  const waDelivery = whatsapp("Hello Awasthi Homeopathy, I want home delivery.\n\nMedicine required:\nDelivery address:");

  return (
    <div className="min-h-screen bg-white tracking-[-0.02em]" style={{fontFamily:"'Inter', sans-serif"}}>
      <section id="home" className="relative w-full overflow-hidden h-screen bg-black" style={{height:"100dvh"}}>
        <div className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
          style={{backgroundImage:`url(${BG_IMAGE_1})`}} />
        <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

        <div className="pointer-orb hidden sm:block" aria-hidden="true">
          <div className="orb-stage" id="pointerOrb">
            <div className="orb-ring r1"/><div className="orb-ring r2"/><div className="orb-ring r3"/>
            <div className="orb-core"/><i className="orb-dot d1"/><i className="orb-dot d2"/><i className="orb-dot d3"/>
          </div>
        </div>

        <div className="absolute inset-0 z-40 bg-black/25 pointer-events-none" />

        <div className="absolute top-[15%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
          <div className="hero-anim hero-fade text-white/75 text-[10px] sm:text-xs uppercase tracking-[.22em] mb-4"
            style={{animationDelay:".1s"}}>Bhoothnath Market · Lucknow · 25+ years</div>
          <h1 className="text-white leading-[.95]">
            <span className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
              style={{letterSpacing:"-.05em",animationDelay:".25s"}}>Trusted care</span>
            <span className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
              style={{letterSpacing:"-.08em",animationDelay:".42s"}}>close to home</span>
          </h1>
        </div>

        <div className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[270px] z-50 hero-anim hero-fade"
          style={{animationDelay:".7s"}}>
          <p className="text-sm text-white/80 leading-relaxed">
            Awasthi Homeopathy has served the Bhoothnath Market community for more than 25 years, bringing the store and clinic together in one familiar local place.
          </p>
        </div>

        <div className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[285px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
          style={{animationDelay:".85s"}}>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Need medicines delivered? Message the store on WhatsApp with your medicine requirement and complete delivery address.
          </p>
          <a href={waDelivery} className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30">
            Home Delivery <ArrowUpRight size={16} className="inline ml-2"/>
          </a>
        </div>

        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-[26px] h-[26px] rounded-full border border-white/50 grid place-items-center text-white font-semibold text-xs">A</div>
            <span className="text-white text-2xl font-playfair italic">Awasthi</span>
          </a>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
            <a href="#home" className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium">Home</a>
            <a href="#about" className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium">About</a>
            <a href="#clinic" className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium">Clinic</a>
            <a href="#delivery" className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium">Delivery</a>
            <a href="#contact" className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a href={`tel:${PHONE}`} className="hidden md:flex bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 items-center gap-2">
              <Phone size={15}/> Call
            </a>
            <button type="button" onClick={()=>setMenuOpen(v=>!v)} aria-label="Menu"
              className="md:hidden w-11 h-11 grid place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white">
              {menuOpen ? <X size={21}/> : <Menu size={21}/>}
            </button>
          </div>

          {menuOpen && <div className="md:hidden absolute top-16 right-4 w-56 rounded-2xl border border-white/20 bg-black/80 backdrop-blur-xl p-2">
            {["Home","About","Clinic","Home Delivery","Contact"].map((item,i)=><a key={item}
              href={["#home","#about","#clinic","#delivery","#contact"][i]}
              onClick={()=>setMenuOpen(false)}
              className="block text-white/85 hover:text-white hover:bg-white/10 rounded-xl px-4 py-3 text-sm">{item}</a>)}
          </div>}
        </nav>
      </section>

      <section id="about" className="bg-[#090b0a] text-white py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div><div className="text-[#c9ff48] text-xs tracking-[.2em] uppercase mb-5">01 / Our Story</div>
              <h2 className="font-playfair italic text-5xl sm:text-7xl leading-none">A local name, built over time.</h2></div>
            <p className="text-white/60 leading-7 max-w-xl">Awasthi Homeopathy has been part of Bhoothnath Market, Lucknow for 25+ years. The store is owned by Shivam Awasthi, with Dr. Shailja Awasthi attending patients inside the clinic.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-white/10 mt-16">
            {[["25+","Years of local presence"],["01","Store + clinic"],["Lucknow","Bhoothnath Market"]].map(([big,small])=>
              <div key={big} className="bg-[#090b0a] p-8 sm:p-10"><div className="text-4xl sm:text-5xl font-semibold">{big}</div><div className="text-white/50 text-xs uppercase tracking-wider mt-3">{small}</div></div>
            )}
          </div>
        </div>
      </section>

      <section id="clinic" className="bg-[#eef2ed] text-[#111512] py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-xs tracking-[.2em] uppercase text-[#49624d] mb-5">02 / The Clinic</div>
          <div className="grid md:grid-cols-[.8fr_1.2fr] gap-12 items-center">
            <div className="aspect-square max-w-[360px] bg-[#152018] text-[#c9ff48] grid place-items-center text-7xl font-playfair italic rounded-sm">SA</div>
            <div><h2 className="font-playfair italic text-5xl sm:text-7xl leading-none">Dr. Shailja Awasthi</h2>
              <p className="mt-6 text-[#526058] leading-7 max-w-xl">Homeopathic doctor at the clinic. Consultations are provided inside the Awasthi Homeopathy store in Bhoothnath Market.</p>
              <div className="flex flex-wrap gap-2 mt-7"><span className="px-3 py-2 border border-black/15 rounded-full text-xs">BHMS</span><span className="px-3 py-2 border border-black/15 rounded-full text-xs">Homeopathy</span><span className="px-3 py-2 border border-black/15 rounded-full text-xs">Lucknow</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="bg-[#c9ff48] text-[#0d120b] py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-[1.2fr_.8fr] gap-12 items-center">
            <div><div className="text-xs tracking-[.2em] uppercase opacity-60 mb-5">03 / Home Delivery</div>
              <h2 className="font-playfair italic text-5xl sm:text-7xl leading-none">Medicine to your door.</h2>
              <p className="mt-6 max-w-xl leading-7 opacity-75">The store provides home delivery. Send the store your medicine requirement and your complete delivery address on WhatsApp. The store can confirm availability and delivery details directly with you.</p>
              <a href={waDelivery} className="inline-flex items-center gap-2 mt-8 bg-[#10140e] text-white px-7 py-3 rounded-full text-sm font-semibold hover:scale-[1.03] transition">Order on WhatsApp <MessageCircle size={17}/></a>
            </div>
            <div className="border border-black/20 min-h-48 grid place-items-center text-center p-8">
              <div><Truck className="mx-auto mb-4" size={42}/><div className="font-semibold">Send your address</div><div className="text-sm opacity-60 mt-2">Medicine → Address → Confirmation</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#090b0a] text-white py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-xs tracking-[.2em] uppercase text-[#c9ff48] mb-5">04 / Visit Us</div>
          <h2 className="font-playfair italic text-5xl sm:text-7xl leading-none mb-12">Come by. Call. WhatsApp.</h2>
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="border border-white/10 bg-white/[.03] p-7 sm:p-10">
              <div className="flex gap-4 py-5 border-b border-white/10"><MapPin className="text-[#c9ff48] shrink-0"/><div><div className="text-xs uppercase tracking-wider text-white/40">Address</div><div className="mt-2">Shop No. 5, Bhoothnath Market, Sector 5, Indira Nagar, Lucknow, Uttar Pradesh 226016</div></div></div>
              <div className="flex gap-4 py-5 border-b border-white/10"><Phone className="text-[#c9ff48] shrink-0"/><div><div className="text-xs uppercase tracking-wider text-white/40">Phone</div><div className="mt-2">{PHONE.replace("+91","")}</div></div></div>
              <div className="flex gap-4 py-5"><MessageCircle className="text-[#c9ff48] shrink-0"/><div><div className="text-xs uppercase tracking-wider text-white/40">WhatsApp</div><div className="mt-2">Message the store for enquiries and home delivery.</div></div></div>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href={`tel:${PHONE}`} className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2"><Phone size={16}/> Call Store</a>
                <a href={whatsapp("Hello Awasthi Homeopathy, I have an enquiry.")} className="bg-[#c9ff48] text-black px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2"><MessageCircle size={16}/> WhatsApp</a>
                <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`} className="border border-white/20 px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"><MapPin size={16}/> Open Maps</a>
              </div>
            </div>
            <div className="min-h-[420px] border border-white/10 overflow-hidden">
              <iframe title="Awasthi Homeopathy location" className="w-full h-full min-h-[420px] border-0 grayscale invert-[.9] contrast-[.85]"
                src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`} loading="lazy"/>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#090b0a] text-white/40 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <span>Awasthi Homeopathy · Bhoothnath Market, Lucknow</span><span>Owner: Shivam Awasthi</span>
        </div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-4 text-[10px] leading-5 text-white/25">For general information only. Medical treatment decisions should be made with a qualified healthcare professional. Verify current timings, medicine availability and delivery terms with the store.</div>
      </footer>

      <a href={whatsapp("Hello Awasthi Homeopathy, I have an enquiry.")} className="fixed right-5 bottom-5 z-[110] bg-[#c9ff48] text-black rounded-full px-5 py-3 text-xs font-bold shadow-2xl flex items-center gap-2 hover:scale-105 transition">
        <MessageCircle size={16}/> WHATSAPP
      </a>

      <script dangerouslySetInnerHTML={{__html:`
        (() => {
          const orb = document.getElementById('pointerOrb');
          if (!orb || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
          const hero = document.getElementById('home');
          let tx=0,ty=0,cx=0,cy=0,raf=0;
          hero.addEventListener('pointermove',e=>{
            const r=hero.getBoundingClientRect();
            tx=((e.clientX-r.left)/r.width-.5)*2;
            ty=((e.clientY-r.top)/r.height-.5)*2;
          });
          hero.addEventListener('pointerleave',()=>{tx=0;ty=0});
          const tick=()=>{
            cx+=(tx-cx)*.09; cy+=(ty-cy)*.09;
            orb.style.transform=\`rotateX(\${(-cy*14).toFixed(2)}deg) rotateY(\${(cx*19).toFixed(2)}deg) translate3d(\${(cx*18).toFixed(1)}px,\${(cy*12).toFixed(1)}px,0)\`;
            raf=requestAnimationFrame(tick);
          };
          raf=requestAnimationFrame(tick);
          window.addEventListener('beforeunload',()=>cancelAnimationFrame(raf));
        })();
      `}} />
    </div>
  );
}

export default App;