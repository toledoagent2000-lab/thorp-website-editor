import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Layout,
  Newspaper,
  Users,
  Send,
  Palette,
  Eye,
  Plus,
  Trash2,
  Edit,
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  Search,
  School,
  BellRing,
  Globe,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ShieldAlert,
  GraduationCap,
  Mail,
  Phone,
  UserPlus,
  FileText,
  Filter,
  Check,
  Code,
  X,
  Layers,
  Smartphone,
  Monitor,
  Image,
  Youtube,
  Presentation,
  Play,
  Settings,
  MoveUp,
  MoveDown,
  Sliders,
  Maximize2,
  Calendar,
  Award,
  BookOpen,
  MapPin,
  HeartHandshake
} from 'lucide-react';

// Authentic O.A. Thorp Academy Banner Slides
const INITIAL_BANNERS = [
  {
    id: 'banner-1',
    type: 'image',
    title: 'Welcome to O.A. Thorp Scholastic Academy',
    subtitle: 'Chicago Public Schools Magnet Exemplar • Inspiring Imagination K-8',
    mediaUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '#academics',
    buttonText: 'Explore Active Learning'
  },
  {
    id: 'banner-2',
    type: 'slides',
    title: 'Middle School House System Showcase',
    subtitle: 'Ferris House, Palmer House & Wrigley House Leadership Presentation',
    mediaUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vR_EXAMPLE_GOOGLE_SLIDES/embed?start=false&loop=false&delayms=3000',
    buttonText: 'View House Standings'
  },
  {
    id: 'banner-3',
    type: 'youtube',
    title: 'Thorpie Active Learning & STEM Showcase',
    subtitle: 'See how our 5C\'s (Critical Thinking, Creativity, Collaboration, Communication, Caring) come to life',
    mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoId: 'dQw4w9WgXcQ',
    buttonText: 'Watch STEM Highlights'
  }
];

// Authentic O.A. Thorp School Announcements (From Thorpie Express)
const INITIAL_NEWS = [
  {
    id: 'news-1',
    title: 'Thorpie Express: Golden Eagle Attendance & Saturday Support',
    category: 'Principal Update',
    date: 'Nov 2, 2026',
    author: 'Principal Toledo',
    summary: 'Congratulations to our Golden Eagle homeroom attendance winners! Thorp Saturday Enrichment & Academic Catch-up sessions start this weekend.',
    isPinned: true
  },
  {
    id: 'news-2',
    title: 'Friends of Thorp (FOT) Fall Fest & Community Dine-Out',
    category: 'Community',
    date: 'Oct 28, 2026',
    author: 'Friends of Thorp',
    summary: 'Thank you to all families who attended our Fall Fest! Join us for our upcoming Culver\'s Dine-Out fundraiser supporting Thorp STEM labs.',
    isPinned: false
  },
  {
    id: 'news-3',
    title: 'IAR Academic Excellence Review & Socratic Learning',
    category: 'Academics',
    date: 'Oct 20, 2026',
    author: 'Curriculum Team',
    summary: 'Thorp continues to rank in the top 10% statewide on Illinois Assessment of Readiness. Classroom games and Socratic challenges are underway!',
    isPinned: false
  }
];

// O.A. Thorp Real Leadership & Staff Roster
const INITIAL_STAFF = [
  {
    id: 'staff-1',
    name: 'Mr. Toledo',
    title: 'Principal',
    department: 'Admin',
    grade: 'K-8 All',
    email: 'ptoledo@cps.edu',
    phone: '(773) 534-3640',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    bio: 'Dedicated to fostering emotional growth and academic excellence for every Thorp student.'
  },
  {
    id: 'staff-2',
    name: 'Ms. McNally',
    title: 'Assistant Principal',
    department: 'Admin',
    grade: 'K-8 All',
    email: 'mmcnally@cps.edu',
    phone: '(773) 534-3640',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    bio: 'Leading curriculum alignment, 5Cs active learning, and student support services.'
  },
  {
    id: 'staff-3',
    name: 'Ms. Santos',
    title: 'STEM & Robotics Lead Teacher',
    department: 'Science',
    grade: 'Middle School',
    email: 'esantos@cps.edu',
    phone: '(773) 534-3640',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    bio: 'Empowering students through robotics, hands-on experimentation, and coding.'
  },
  {
    id: 'staff-4',
    name: 'Ms. Schoonewolff',
    title: 'Primary Instructional Coach',
    department: 'Primary',
    grade: 'Grades K-2',
    email: 'aschoonewolff@cps.edu',
    phone: '(773) 534-3640',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    bio: 'Specializing in early childhood literacy, small-group guided reading, and Socratic questioning.'
  }
];

// O.A. Thorp Official School Calendar Events
const INITIAL_EVENTS = [
  { id: 'ev-1', title: 'Parent Teacher Conferences', date: 'Nov 2, 2026', time: '12:00 PM - 6:00 PM', location: 'Main Building / Virtual' },
  { id: 'ev-2', title: 'Election Day - No School for Students', date: 'Nov 3, 2026', time: 'All Day', location: 'Campus Closed' },
  { id: 'ev-3', title: 'Friends of Thorp (FOT) Monthly Meeting', date: 'Nov 12, 2026', time: '6:30 PM', location: 'Thorp Library & Zoom' }
];

// Theme Presets tailored for O.A. Thorp
const SCHOOL_THEMES = [
  {
    id: 'thorp-blue-gold',
    name: 'Thorp Blue & Gold (Official)',
    primary: '#1e3a8a', // Deep Royal Blue
    accent: '#f59e0b',  // Eagle Gold
    bg: '#f8fafc',
    headerBg: '#0f172a',
    textColor: '#0f172a',
    font: 'Inter'
  },
  {
    id: 'thorp-emerald',
    name: 'Scholastic Green & Cream',
    primary: '#15803d',
    accent: '#eab308',
    bg: '#f0fdf4',
    headerBg: '#14532d',
    textColor: '#0f172a',
    font: 'Inter'
  },
  {
    id: 'modern-navy',
    name: 'Modern Magnet Blue',
    primary: '#0369a1',
    accent: '#38bdf8',
    bg: '#f8fafc',
    headerBg: '#0c4a6e',
    textColor: '#0f172a',
    font: 'Roboto'
  }
];

// Template Layout Structures
const TEMPLATE_LAYOUTS = [
  {
    id: 'classic-scholastic',
    name: 'Classic Scholastic',
    desc: 'Full-width top hero slider, 2-column main body (News on left, Staff & Links on right)',
    sections: ['alert', 'header', 'nav', 'banner', 'news_main', 'staff_side', 'quick_links', 'footer']
  },
  {
    id: 'media-showcase',
    name: 'Media Showcase Focus',
    desc: 'Extra large video & slides hero banner deck, 3-column quick cards below',
    sections: ['alert', 'header', 'nav', 'banner', 'quick_cards', 'news_main', 'footer']
  },
  {
    id: 'sidebar-news',
    name: 'Sidebar News & Alert Hub',
    desc: 'News stream taking top priority, split side-by-side hero slider with quick emergency alert focus',
    sections: ['alert', 'header', 'nav', 'news_main', 'banner', 'staff_side', 'footer']
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('pages'); // 'pages', 'banners', 'layouts', 'news', 'staff', 'alerts', 'theme'
  const [activePage, setActivePage] = useState('home'); // 'home', 'about', 'academics', 'directory', 'parents'
  
  const [themes, setThemes] = useState(SCHOOL_THEMES);
  const [selectedTheme, setSelectedTheme] = useState(SCHOOL_THEMES[0]);
  const [activeLayout, setActiveLayout] = useState(TEMPLATE_LAYOUTS[0]);
  const [layoutSections, setLayoutSections] = useState(TEMPLATE_LAYOUTS[0].sections);
  
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [viewDevice, setViewDevice] = useState('desktop');

  // Media Banner State
  const [banners, setBanners] = useState(INITIAL_BANNERS);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // New Banner Form State
  const [bannerForm, setBannerForm] = useState({
    type: 'image',
    title: '',
    subtitle: '',
    mediaUrl: '',
    buttonText: 'Learn More'
  });

  // Dynamic School Content States
  const [newsList, setNewsList] = useState(INITIAL_NEWS);
  const [staffList, setStaffList] = useState(INITIAL_STAFF);
  const [eventsList, setEventsList] = useState(INITIAL_EVENTS);
  const [activeAlert, setActiveAlert] = useState({
    enabled: true,
    message: 'NOTICE: Parent-Teacher Conferences today from 12 PM - 6 PM. Election Day Tomorrow - No School for Students.'
  });

  // Dynamic Page Content Editing
  const [pageTitles, setPageTitles] = useState({
    home: 'O.A. Thorp Scholastic Academy',
    about: 'About Our School - Ole A. Thorp Scholastic Academy',
    academics: 'Active Learning & K-8 Magnet Academics',
    directory: 'Staff & Faculty Directory',
    parents: 'Parents & Community - Friends of Thorp (FOT)'
  });

  // Forms
  const [newsForm, setNewsForm] = useState({ title: '', category: 'General', summary: '', sendBroadcast: false });
  const [staffForm, setStaffForm] = useState({ name: '', title: '', department: 'Primary', grade: 'K-5', email: '', phone: '' });
  const [staffFilter, setStaffFilter] = useState('All');
  const [broadcastForm, setBroadcastForm] = useState({ targetGroup: 'All Parents & Guardians', type: 'sms', message: '' });
  const [broadcastHistory, setBroadcastHistory] = useState([
    { id: 1, time: 'Oct 24, 8:00 AM', target: 'All Parents', type: 'SMS & Voice', message: 'Reminder: Friday Thorpie Express letter published on the website portal.' }
  ]);

  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // Auto Slider Timer
  useEffect(() => {
    if (!isAutoPlay || banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, banners.length]);

  // Handlers
  const handleAddBanner = (e) => {
    e.preventDefault();
    if (!bannerForm.title || !bannerForm.mediaUrl) return;

    let processedUrl = bannerForm.mediaUrl;
    let videoId = '';

    if (bannerForm.type === 'youtube') {
      if (bannerForm.mediaUrl.includes('watch?v=')) {
        videoId = bannerForm.mediaUrl.split('watch?v=')[1]?.split('&')[0];
        processedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else if (bannerForm.mediaUrl.includes('youtu.be/')) {
        videoId = bannerForm.mediaUrl.split('youtu.be/')[1]?.split('?')[0];
        processedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    }

    const newBanner = {
      id: `banner-${Date.now()}`,
      type: bannerForm.type,
      title: bannerForm.title,
      subtitle: bannerForm.subtitle,
      mediaUrl: processedUrl,
      videoId: videoId,
      buttonText: bannerForm.buttonText || 'Learn More'
    };

    setBanners([...banners, newBanner]);
    showToast(`Added ${bannerForm.type.toUpperCase()} banner!`);
    setBannerForm({ type: 'image', title: '', subtitle: '', mediaUrl: '', buttonText: 'Learn More' });
  };

  const handleDeleteBanner = (id) => {
    const updated = banners.filter((b) => b.id !== id);
    setBanners(updated);
    if (currentSlideIndex >= updated.length) setCurrentSlideIndex(0);
    showToast('Banner slide removed');
  };

  const handleAddNews = (e) => {
    e.preventDefault();
    if (!newsForm.title || !newsForm.summary) return;
    const item = {
      id: `news-${Date.now()}`,
      title: newsForm.title,
      category: newsForm.category,
      date: 'Nov 2, 2026',
      author: 'Administration',
      summary: newsForm.summary,
      isPinned: false
    };
    setNewsList([item, ...newsList]);
    if (newsForm.sendBroadcast) {
      setBroadcastHistory([
        { id: Date.now(), time: 'Just Now', target: 'All School', type: 'Instant SMS', message: `NEW ANNOUNCEMENT: ${newsForm.title}` },
        ...broadcastHistory
      ]);
      showToast('News published & SMS alert broadcast sent!');
    } else {
      showToast('News announcement published!');
    }
    setNewsForm({ title: '', category: 'General', summary: '', sendBroadcast: false });
  };

  const handleDeleteNews = (id) => {
    setNewsList(newsList.filter((n) => n.id !== id));
    showToast('Announcement deleted');
  };

  const handleAddStaff = (e) => {
    e.preventDefault();
    if (!staffForm.name || !staffForm.title) return;
    const newStaff = {
      id: `staff-${Date.now()}`,
      ...staffForm,
      photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
      bio: 'Faculty member at O.A. Thorp Scholastic Academy.'
    };
    setStaffList([...staffList, newStaff]);
    showToast(`Added ${staffForm.name} to directory`);
    setStaffForm({ name: '', title: '', department: 'Primary', grade: 'K-5', email: '', phone: '' });
  };

  const handleDeleteStaff = (id) => {
    setStaffList(staffList.filter((s) => s.id !== id));
    showToast('Staff profile removed');
  };

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    if (!broadcastForm.message) return;
    const newLog = {
      id: Date.now(),
      time: 'Just Now',
      target: broadcastForm.targetGroup,
      type: broadcastForm.type === 'sms' ? 'SMS Text' : 'Voice Call',
      message: broadcastForm.message
    };
    setBroadcastHistory([newLog, ...broadcastHistory]);
    showToast(`Broadcast sent to ${broadcastForm.targetGroup}!`);
    setBroadcastForm({ targetGroup: 'All Parents & Guardians', type: 'sms', message: '' });
  };

  const filteredStaff = staffFilter === 'All' ? staffList : staffList.filter((s) => s.department === staffFilter);

  // Render Rotating Media Slider Component
  const renderBannerSection = () => {
    if (banners.length === 0) return null;
    const currentBanner = banners[currentSlideIndex] || banners[0];

    return (
      <section className="relative bg-slate-900 text-white overflow-hidden shadow-md">
        {currentBanner.type === 'image' && (
          <div
            className="relative p-8 md:p-14 min-h-[380px] flex items-center transition-all duration-500"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url("${currentBanner.mediaUrl}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="max-w-2xl space-y-3 z-10">
              <span className="text-xs uppercase tracking-widest font-bold px-2.5 py-1 rounded inline-block" style={{ backgroundColor: selectedTheme.accent, color: '#000' }}>
                O.A. Thorp Featured Slideshow
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">{currentBanner.title}</h2>
              <p className="text-sm opacity-90">{currentBanner.subtitle}</p>
              <div className="pt-2">
                <button className="px-4 py-2 rounded font-semibold text-xs transition shadow-lg" style={{ backgroundColor: selectedTheme.primary, color: '#fff' }}>
                  {currentBanner.buttonText}
                </button>
              </div>
            </div>
          </div>
        )}

        {currentBanner.type === 'youtube' && (
          <div className="relative min-h-[380px] bg-slate-950 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 h-[280px] md:h-[380px]">
              <iframe
                src={`${currentBanner.mediaUrl}?autoplay=0&rel=0`}
                title={currentBanner.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="w-full md:w-1/3 p-6 space-y-3 bg-slate-900 border-l border-slate-800">
              <span className="text-[10px] uppercase font-bold text-red-400 bg-red-950 border border-red-800 px-2 py-0.5 rounded flex items-center gap-1 w-max">
                <Youtube className="w-3 h-3" /> YouTube Video Embed
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">{currentBanner.title}</h3>
              <p className="text-xs text-slate-300">{currentBanner.subtitle}</p>
              <button className="px-3 py-1.5 rounded font-semibold text-xs bg-red-600 hover:bg-red-500 text-white transition flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5" /> {currentBanner.buttonText}
              </button>
            </div>
          </div>
        )}

        {currentBanner.type === 'slides' && (
          <div className="relative min-h-[380px] bg-slate-900 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 h-[280px] md:h-[380px] bg-slate-950">
              <iframe
                src={currentBanner.mediaUrl}
                title={currentBanner.title}
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
            <div className="w-full md:w-1/3 p-6 space-y-3 bg-slate-900 border-l border-slate-800">
              <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950 border border-amber-800 px-2 py-0.5 rounded flex items-center gap-1 w-max">
                <Presentation className="w-3 h-3" /> Google Slides Embed
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">{currentBanner.title}</h3>
              <p className="text-xs text-slate-300">{currentBanner.subtitle}</p>
              <a href={currentBanner.mediaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded font-semibold text-xs text-slate-900 transition" style={{ backgroundColor: selectedTheme.accent }}>
                <Maximize2 className="w-3.5 h-3.5" /> Fullscreen Slide Deck
              </a>
            </div>
          </div>
        )}

        {/* Navigation Dots */}
        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-full border border-slate-800 backdrop-blur">
          <button onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + banners.length) % banners.length)} className="text-slate-300 hover:text-white p-1">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${currentSlideIndex === idx ? 'w-5 bg-amber-400' : 'bg-slate-600'}`}
              />
            ))}
          </div>
          <button onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % banners.length)} className="text-slate-300 hover:text-white p-1">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    );
  };

  return (
    <div className="flex h-screen w-screen bg-slate-950 font-sans text-slate-100 overflow-hidden select-none">
      {/* Toast Popup */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toast}</span>
        </div>
      )}

      {/* TOP APPLICATION TOOLBAR */}
      {!isPreviewMode && (
        <header className="absolute top-0 left-0 right-0 h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 z-40">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <div className="p-1.5 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                <School className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight text-white font-bold">O.A. Thorp Academy Portal</span>
                <span className="text-[10px] text-slate-400 font-normal">Edlio Content & Media Manager</span>
              </div>
            </div>
            <span className="text-[10px] bg-slate-800 text-emerald-400 border border-slate-700 px-2 py-0.5 rounded-full font-mono ml-2">
              oathorpacademy.org
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button onClick={() => setViewDevice('desktop')} className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 ${viewDevice === 'desktop' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}>
                <Monitor className="w-3.5 h-3.5" /> Desktop
              </button>
              <button onClick={() => setViewDevice('mobile')} className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 ${viewDevice === 'mobile' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}>
                <Smartphone className="w-3.5 h-3.5" /> Mobile
              </button>
            </div>

            <button onClick={() => setIsPreviewMode(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-semibold text-white transition shadow-md">
              <Eye className="w-3.5 h-3.5" /> Live Preview Site
            </button>
          </div>
        </header>
      )}

      {isPreviewMode && (
        <button onClick={() => setIsPreviewMode(false)} className="fixed top-4 right-6 z-50 bg-slate-900/90 hover:bg-slate-800 text-white px-4 py-2 rounded-full border border-slate-700 shadow-2xl flex items-center gap-2 text-xs font-semibold transition">
          <X className="w-4 h-4 text-emerald-400" /> Exit Live Preview
        </button>
      )}

      {/* MAIN CONTENT AREA */}
      <div className={`flex flex-1 w-full h-full ${isPreviewMode ? 'pt-0' : 'pt-14'}`}>
        
        {/* LEFT MANAGEMENT SIDEBAR */}
        {!isPreviewMode && (
          <aside className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col z-30">
            {/* Sidebar Tabs */}
            <div className="grid grid-cols-6 border-b border-slate-800 bg-slate-950/50 text-[10px]">
              <button onClick={() => setActiveTab('pages')} className={`py-3 font-semibold flex flex-col items-center gap-1 ${activeTab === 'pages' ? 'text-emerald-400 border-b-2 border-emerald-500 bg-slate-900' : 'text-slate-400 hover:text-slate-200'}`}>
                <Globe className="w-3.5 h-3.5" /> Pages
              </button>
              <button onClick={() => setActiveTab('banners')} className={`py-3 font-semibold flex flex-col items-center gap-1 ${activeTab === 'banners' ? 'text-emerald-400 border-b-2 border-emerald-500 bg-slate-900' : 'text-slate-400 hover:text-slate-200'}`}>
                <Image className="w-3.5 h-3.5" /> Slides
              </button>
              <button onClick={() => setActiveTab('news')} className={`py-3 font-semibold flex flex-col items-center gap-1 ${activeTab === 'news' ? 'text-emerald-400 border-b-2 border-emerald-500 bg-slate-900' : 'text-slate-400 hover:text-slate-200'}`}>
                <Newspaper className="w-3.5 h-3.5" /> News
              </button>
              <button onClick={() => setActiveTab('staff')} className={`py-3 font-semibold flex flex-col items-center gap-1 ${activeTab === 'staff' ? 'text-emerald-400 border-b-2 border-emerald-500 bg-slate-900' : 'text-slate-400 hover:text-slate-200'}`}>
                <Users className="w-3.5 h-3.5" /> Staff
              </button>
              <button onClick={() => setActiveTab('alerts')} className={`py-3 font-semibold flex flex-col items-center gap-1 ${activeTab === 'alerts' ? 'text-emerald-400 border-b-2 border-emerald-500 bg-slate-900' : 'text-slate-400 hover:text-slate-200'}`}>
                <BellRing className="w-3.5 h-3.5" /> Alerts
              </button>
              <button onClick={() => setActiveTab('theme')} className={`py-3 font-semibold flex flex-col items-center gap-1 ${activeTab === 'theme' ? 'text-emerald-400 border-b-2 border-emerald-500 bg-slate-900' : 'text-slate-400 hover:text-slate-200'}`}>
                <Palette className="w-3.5 h-3.5" /> Theme
              </button>
            </div>

            {/* Tab Controls */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              
              {/* PAGE & MENU MANAGER */}
              {activeTab === 'pages' && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" /> Site Navigation & Pages
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">Switch active page to edit content or modify menu titles.</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { id: 'home', label: 'Home Page' },
                      { id: 'about', label: 'About Thorp (5C\'s & Vision)' },
                      { id: 'academics', label: 'Academics & Magnet Program' },
                      { id: 'directory', label: 'Staff & Directory' },
                      { id: 'parents', label: 'Parents (FOT & PTA)' }
                    ].map((pg) => (
                      <button
                        key={pg.id}
                        onClick={() => setActivePage(pg.id)}
                        className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between ${activePage === pg.id ? 'bg-slate-800 border-emerald-500 text-white font-bold' : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'}`}
                      >
                        <span className="text-xs">{pg.label}</span>
                        {activePage === pg.id && <Check className="w-4 h-4 text-emerald-400" />}
                      </button>
                    ))}
                  </div>

                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-slate-200">Edit Selected Page Header Title</span>
                    <input
                      type="text"
                      value={pageTitles[activePage]}
                      onChange={(e) => setPageTitles({ ...pageTitles, [activePage]: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              )}

              {/* ROTATING DISPLAY BANNERS */}
              {activeTab === 'banners' && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Image className="w-3.5 h-3.5" /> Banner Slideshows & Media
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">Embed Google Slides decks, YouTube videos, or photo banners.</p>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-slate-950/60 border border-slate-800 rounded-xl">
                    <span className="text-xs text-slate-300 font-medium">Auto-rotate Slides (5s)</span>
                    <input
                      type="checkbox"
                      checked={isAutoPlay}
                      onChange={(e) => setIsAutoPlay(e.target.checked)}
                      className="rounded bg-slate-800 border-slate-700 text-emerald-500"
                    />
                  </div>

                  <form onSubmit={handleAddBanner} className="space-y-3 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-xs font-bold text-slate-200">Add New Banner Slide</span>

                    <div>
                      <label className="text-[10px] text-slate-400 font-semibold uppercase">Media Type</label>
                      <div className="grid grid-cols-3 gap-1.5 mt-1">
                        <button type="button" onClick={() => setBannerForm({ ...bannerForm, type: 'image' })} className={`p-1.5 rounded text-[11px] font-medium flex items-center justify-center gap-1 border ${bannerForm.type === 'image' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                          <Image className="w-3 h-3" /> Image
                        </button>
                        <button type="button" onClick={() => setBannerForm({ ...bannerForm, type: 'youtube' })} className={`p-1.5 rounded text-[11px] font-medium flex items-center justify-center gap-1 border ${bannerForm.type === 'youtube' ? 'bg-red-600/20 border-red-500 text-red-300' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                          <Youtube className="w-3 h-3" /> YouTube
                        </button>
                        <button type="button" onClick={() => setBannerForm({ ...bannerForm, type: 'slides' })} className={`p-1.5 rounded text-[11px] font-medium flex items-center justify-center gap-1 border ${bannerForm.type === 'slides' ? 'bg-amber-600/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                          <Presentation className="w-3 h-3" /> Slides
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 font-semibold uppercase">Headline Title</label>
                      <input type="text" placeholder="e.g. Science Fair Showcase" value={bannerForm.title} onChange={(e) => setBannerForm({ ...bannerForm, title: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white mt-1" />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 font-semibold uppercase">Media Link / URL</label>
                      <input type="text" placeholder="https://..." value={bannerForm.mediaUrl} onChange={(e) => setBannerForm({ ...bannerForm, mediaUrl: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white mt-1 font-mono text-[10px]" />
                    </div>

                    <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-1.5 rounded-lg text-xs transition flex items-center justify-center gap-1">
                      <Plus className="w-3.5 h-3.5" /> Insert Slide
                    </button>
                  </form>

                  <div className="space-y-2">
                    {banners.map((banner, index) => (
                      <div key={banner.id} className={`p-2.5 rounded-xl border transition flex items-center justify-between gap-2 ${currentSlideIndex === index ? 'bg-slate-800 border-emerald-500' : 'bg-slate-900 border-slate-800'}`}>
                        <div className="flex items-center gap-2.5 min-w-0">
                          {banner.type === 'image' && <Image className="w-4 h-4 text-emerald-400 shrink-0" />}
                          {banner.type === 'youtube' && <Youtube className="w-4 h-4 text-red-400 shrink-0" />}
                          {banner.type === 'slides' && <Presentation className="w-4 h-4 text-amber-400 shrink-0" />}
                          <div className="min-w-0">
                            <h4 className="text-xs font-semibold text-slate-200 truncate">{banner.title}</h4>
                            <p className="text-[10px] text-slate-400 capitalize">{banner.type} Slide</p>
                          </div>
                        </div>
                        <button onClick={() => handleDeleteBanner(banner.id)} className="text-slate-500 hover:text-rose-400 p-1">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* NEWS PUBLISHER */}
              {activeTab === 'news' && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Newspaper className="w-3.5 h-3.5" /> Thorpie Express & News
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">Publish principal updates and school announcements.</p>
                  </div>

                  <form onSubmit={handleAddNews} className="space-y-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <div>
                      <label className="text-[10px] text-slate-400 font-semibold uppercase">Headline</label>
                      <input type="text" placeholder="Title..." value={newsForm.title} onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white mt-1" />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 font-semibold uppercase">Category</label>
                      <select value={newsForm.category} onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white mt-1">
                        <option value="Principal Update">Principal Update</option>
                        <option value="Academics">Academics & IAR</option>
                        <option value="Community">Friends of Thorp (FOT)</option>
                        <option value="Athletics">Athletics & Houses</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 font-semibold uppercase">Summary</label>
                      <textarea rows={3} placeholder="Body..." value={newsForm.summary} onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white mt-1 resize-none" />
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer pt-1">
                      <input type="checkbox" checked={newsForm.sendBroadcast} onChange={(e) => setNewsForm({ ...newsForm, sendBroadcast: e.target.checked })} className="rounded bg-slate-800 border-slate-700 text-emerald-500" />
                      <span className="text-[11px] text-slate-300 font-medium">Broadcast Instant SMS to Parents</span>
                    </label>

                    <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-lg text-xs transition flex items-center justify-center gap-1.5">
                      <Plus className="w-4 h-4" /> Publish Announcement
                    </button>
                  </form>
                </div>
              )}

              {/* STAFF DIRECTORY */}
              {activeTab === 'staff' && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> Staff Roster Manager
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">Add or edit faculty profiles displayed on the directory page.</p>
                  </div>

                  <form onSubmit={handleAddStaff} className="space-y-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <input type="text" placeholder="Name" value={staffForm.name} onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white" />
                    <input type="text" placeholder="Job Title" value={staffForm.title} onChange={(e) => setStaffForm({ ...staffForm, title: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white" />
                    <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-1.5 rounded-lg text-xs transition">
                      Save Faculty Profile
                    </button>
                  </form>
                </div>
              )}

              {/* ALERTS & NOTIFICATIONS */}
              {activeTab === 'alerts' && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <BellRing className="w-3.5 h-3.5" /> Urgent Alert System
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">Broadcast SMS or enable yellow banner alert at top of website.</p>
                  </div>

                  <div className="bg-amber-950/40 border border-amber-800/80 p-3 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" /> Active Banner Alert
                      </span>
                      <input type="checkbox" checked={activeAlert.enabled} onChange={(e) => setActiveAlert({ ...activeAlert, enabled: e.target.checked })} className="rounded bg-slate-800 border-amber-700 text-amber-500" />
                    </div>
                    <textarea rows={2} value={activeAlert.message} onChange={(e) => setActiveAlert({ ...activeAlert, message: e.target.value })} className="w-full bg-slate-900 border border-amber-800/60 rounded px-2 py-1 text-xs text-amber-200 resize-none" />
                  </div>
                </div>
              )}

              {/* THEME SELECTOR */}
              {activeTab === 'theme' && (
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" /> School Theme Presets
                  </span>
                  <div className="space-y-3">
                    {themes.map((theme) => (
                      <div
                        key={theme.id}
                        onClick={() => { setSelectedTheme(theme); showToast(`Applied ${theme.name}`); }}
                        className={`p-3 rounded-xl border cursor-pointer transition ${selectedTheme.id === theme.id ? 'bg-slate-800 border-emerald-500 ring-1 ring-emerald-500' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-200">{theme.name}</span>
                          {selectedTheme.id === theme.id && <Check className="w-4 h-4 text-emerald-400" />}
                        </div>
                        <div className="flex gap-1.5">
                          <div className="h-4 flex-1 rounded" style={{ backgroundColor: theme.primary }} title="Primary Color" />
                          <div className="h-4 flex-1 rounded" style={{ backgroundColor: theme.accent }} title="Accent Color" />
                          <div className="h-4 flex-1 rounded" style={{ backgroundColor: theme.headerBg }} title="Header Background" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </aside>
        )}

        {/* LIVE WEBSITE DISPLAY CANVAS */}
        <main className="flex-1 bg-slate-950 overflow-auto p-6 flex justify-center items-start">
          <div className={`transition-all bg-white shadow-2xl rounded-lg overflow-hidden text-slate-900 ${viewDevice === 'mobile' ? 'w-[375px] min-h-[667px] border-8 border-slate-800 rounded-3xl' : 'w-full max-w-[1100px] min-h-[850px]'}`} style={{ fontFamily: selectedTheme.font }}>
            
            {/* Top Alert Bar */}
            {activeAlert.enabled && (
              <div className="bg-amber-500 text-slate-950 px-4 py-2 flex items-center justify-between text-xs font-semibold shadow-inner">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{activeAlert.message}</span>
                </div>
              </div>
            )}

            {/* School Main Header */}
            <header className="text-white p-6 border-b-4" style={{ backgroundColor: selectedTheme.headerBg, borderColor: selectedTheme.accent }}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl border-2 shadow-inner" style={{ backgroundColor: selectedTheme.primary, borderColor: selectedTheme.accent }}>
                    OA
                  </div>
                  <div>
                    <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">O.A. Thorp Scholastic Academy</h1>
                    <p className="text-xs opacity-90">Chicago Public Schools • 6024 W Warwick Ave • (773) 534-3640</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a href="tel:7735343640" className="px-3 py-1.5 rounded text-xs font-semibold bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 border border-white/20">
                    <Phone className="w-3.5 h-3.5" /> Call Office
                  </a>
                </div>
              </div>
            </header>

            {/* Navigation Menu Bar */}
            <nav className="bg-slate-900 text-slate-200 border-b border-slate-800 px-4 flex items-center gap-1 overflow-x-auto text-xs font-semibold">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Our School' },
                { id: 'academics', label: 'Academics & 5C\'s' },
                { id: 'directory', label: 'Staff Directory' },
                { id: 'parents', label: 'Parents & FOT' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePage(tab.id)}
                  className={`px-4 py-3 transition border-b-2 whitespace-nowrap ${activePage === tab.id ? 'border-amber-400 text-amber-400 bg-slate-800/60' : 'border-transparent text-slate-300 hover:text-white hover:bg-slate-800/30'}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* PAGE CONTENT SWITCHER */}
            {activePage === 'home' && (
              <>
                {/* Media Banner Deck */}
                {renderBannerSection()}

                {/* News & Calendar Split Section */}
                <section className="p-6 bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left News Feed (2 Columns) */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: selectedTheme.primary }}>
                      <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: selectedTheme.primary }}>
                        <Newspaper className="w-5 h-5" /> Thorpie Express & News
                      </h3>
                      <span className="text-xs text-slate-500 font-semibold">Weekly Updates</span>
                    </div>

                    <div className="space-y-4">
                      {newsList.map((item) => (
                        <article key={item.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 hover:shadow-md transition">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold px-2 py-0.5 rounded text-[10px]" style={{ backgroundColor: selectedTheme.bg, color: selectedTheme.primary }}>
                              {item.category}
                            </span>
                            <span className="text-slate-400 font-medium">{item.date} • {item.author}</span>
                          </div>
                          <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{item.summary}</p>
                        </article>
                      ))}
                    </div>
                  </div>

                  {/* Right Calendar & House System Sidebar */}
                  <div className="space-y-5">
                    {/* Calendar Events Widget */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                      <h4 className="font-bold text-sm text-slate-800 flex items-center gap-1.5" style={{ color: selectedTheme.primary }}>
                        <Calendar className="w-4 h-4" /> Upcoming Events
                      </h4>
                      <div className="space-y-2.5">
                        {eventsList.map((ev) => (
                          <div key={ev.id} className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs space-y-0.5">
                            <div className="font-bold text-slate-800">{ev.title}</div>
                            <div className="text-[11px] text-amber-700 font-semibold">{ev.date} • {ev.time}</div>
                            <div className="text-[10px] text-slate-500">{ev.location}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Middle School House System Widget */}
                    <div className="p-4 rounded-xl border text-white space-y-2" style={{ backgroundColor: selectedTheme.headerBg }}>
                      <h4 className="font-bold text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <Award className="w-4 h-4" /> Middle School House System
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Ferris House, Palmer House, and Wrigley House exemplify Chicago heritage, leadership, and positive behavior at Thorp.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Staff Directory Highlights */}
                <section className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold flex items-center gap-2" style={{ color: selectedTheme.primary }}>
                      <Users className="w-5 h-5" /> Administration & Faculty Spotlight
                    </h3>
                    <button onClick={() => setActivePage('directory')} className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1">
                      View Full Roster <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {staffList.map((staff) => (
                      <div key={staff.id} className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2 text-center">
                        <img src={staff.photo} alt={staff.name} className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-amber-400" />
                        <div>
                          <h5 className="text-xs font-bold text-slate-800">{staff.name}</h5>
                          <p className="text-[10px] text-slate-500">{staff.title}</p>
                          <p className="text-[10px] font-mono text-emerald-700 mt-1">{staff.email}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* ABOUT PAGE */}
            {activePage === 'about' && (
              <div className="p-8 space-y-6 bg-white">
                <div className="border-b pb-4" style={{ borderColor: selectedTheme.primary }}>
                  <h2 className="text-2xl font-extrabold" style={{ color: selectedTheme.primary }}>About Ole A. Thorp Scholastic Academy</h2>
                  <p className="text-xs text-slate-500 mt-1">Inspiring Imagination & Academic Excellence on Chicago's Northwest Side</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed">
                  <div className="space-y-3 bg-slate-50 p-5 rounded-xl border">
                    <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-600" /> Our Vision & Philosophy
                    </h3>
                    <p>
                      Ole A. Thorp Scholastic Academy envisions all of our students reaching their full potential. Language, mathematics, the sciences, and the arts are the core of our instruction. Through innovative lessons in our classrooms, our students learn how to create, think critically, communicate effectively, collaborate with others, and care for their community.
                    </p>
                  </div>

                  <div className="space-y-3 bg-slate-50 p-5 rounded-xl border">
                    <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" /> The 5 C's Framework
                    </h3>
                    <ul className="space-y-1.5 list-disc pl-4">
                      <li><strong>Critical Thinking:</strong> Socratic questioning and inquiry-based problem solving.</li>
                      <li><strong>Creativity:</strong> Weekly Art, Music, Programming & Coding classes.</li>
                      <li><strong>Collaboration:</strong> Differentiated small-group rotation centers.</li>
                      <li><strong>Communication:</strong> Oral, written, and visual evidence of learning.</li>
                      <li><strong>Caring:</strong> Active community involvement and character development.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ACADEMICS PAGE */}
            {activePage === 'academics' && (
              <div className="p-8 space-y-6 bg-white">
                <div className="border-b pb-4" style={{ borderColor: selectedTheme.primary }}>
                  <h2 className="text-2xl font-extrabold" style={{ color: selectedTheme.primary }}>Thorp Active Learning & Curriculum</h2>
                  <p className="text-xs text-slate-500 mt-1">Magnet Scholastic Academy Instruction (K-8)</p>
                </div>

                <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
                  <div className="p-4 bg-slate-50 rounded-xl border space-y-2">
                    <h4 className="font-bold text-sm text-slate-900">Thorp Active Learning Centers</h4>
                    <p>
                      Instruction at Thorp is characterized by targeted small-group learning centers. Rotations occur every 20-40 minutes, ensuring students are challenged at their precise instructional level while engaging in active movement.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border space-y-2">
                    <h4 className="font-bold text-sm text-slate-900">World Language & Special Subjects</h4>
                    <p>
                      All Thorp students take Spanish twice a week, along with weekly classes in Physical Education, Health, Programming & Coding, Music, and Fine Arts.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* DIRECTORY PAGE */}
            {activePage === 'directory' && (
              <div className="p-8 space-y-6 bg-white">
                <div className="border-b pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ borderColor: selectedTheme.primary }}>
                  <div>
                    <h2 className="text-2xl font-extrabold" style={{ color: selectedTheme.primary }}>Faculty & Staff Directory</h2>
                    <p className="text-xs text-slate-500 mt-1">Connect with teachers and administrative leadership</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {['All', 'Admin', 'Primary', 'Science'].map((dept) => (
                      <button
                        key={dept}
                        onClick={() => setStaffFilter(dept)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${staffFilter === dept ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredStaff.map((staff) => (
                    <div key={staff.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4">
                      <img src={staff.photo} alt={staff.name} className="w-16 h-16 rounded-full object-cover border-2 border-amber-400" />
                      <div className="space-y-1 text-xs">
                        <h4 className="font-bold text-slate-900 text-sm">{staff.name}</h4>
                        <p className="text-emerald-700 font-semibold">{staff.title}</p>
                        <p className="text-slate-500">{staff.department} • {staff.grade}</p>
                        <p className="text-slate-600 font-mono text-[11px] pt-1">{staff.email} • {staff.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PARENTS PAGE */}
            {activePage === 'parents' && (
              <div className="p-8 space-y-6 bg-white">
                <div className="border-b pb-4" style={{ borderColor: selectedTheme.primary }}>
                  <h2 className="text-2xl font-extrabold" style={{ color: selectedTheme.primary }}>Parents & Community - Friends of Thorp</h2>
                  <p className="text-xs text-slate-500 mt-1">Get involved with FOT, PTA, Local School Council, and Thorp Theatre</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-50 rounded-xl border space-y-2 text-xs">
                    <HeartHandshake className="w-6 h-6 text-emerald-600" />
                    <h4 className="font-bold text-sm text-slate-900">Friends of Thorp (FOT)</h4>
                    <p className="text-slate-600">Fundraising organization supporting technology, STEM equipment, and student enrichment.</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl border space-y-2 text-xs">
                    <Users className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-sm text-slate-900">Thorp PTA</h4>
                    <p className="text-slate-600">Parent Teacher Association organizing Book Fairs, Fall Fest, and school volunteer events.</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl border space-y-2 text-xs">
                    <School className="w-6 h-6 text-amber-500" />
                    <h4 className="font-bold text-sm text-slate-900">Local School Council (LSC)</h4>
                    <p className="text-slate-600">Elected leadership body guiding continuous improvement plans and academic budgets.</p>
                  </div>
                </div>
              </div>
            )}

            {/* FOOTER */}
            <footer className="bg-slate-900 text-slate-400 text-xs p-6 border-t border-slate-800 text-center space-y-2">
              <p className="font-semibold text-slate-200">O.A. Thorp Scholastic Academy • Chicago Public Schools (CPS District 299)</p>
              <p className="text-[11px]">6024 W Warwick Ave, Chicago, IL 60634 | Main Office: (773) 534-3640</p>
            </footer>

          </div>
        </main>
      </div>
    </div>
  );
}
