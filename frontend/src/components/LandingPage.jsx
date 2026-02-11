import { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Story from './Story';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';
import './LandingPage.css';

export default function LandingPage({ onGetStarted }) {
  const [activeSection, setActiveSection] = useState('home');
  const isScrolling = useRef(false);

  const handleNavClick = useCallback((section) => {
    console.log('=== handleNavClick called ===');
    console.log('Section:', section);
    console.log('Current scroll position:', window.pageYOffset);

    isScrolling.current = true;
    setActiveSection(section);

    setTimeout(() => {
      const element = document.getElementById(section);
      console.log('Element found:', element);

      if (element) {
        const rect = element.getBoundingClientRect();
        const navbarHeight = 80;
        const elementPosition = rect.top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        console.log('Element rect:', rect);
        console.log('Element position:', elementPosition);
        console.log('Offset position (after navbar):', offsetPosition);

        window.scrollTo({
          top: section === 'home' ? 0 : offsetPosition,
          behavior: 'smooth'
        });

        console.log('Scroll command executed');

        // Reset scrolling flag after animation completes
        setTimeout(() => {
          isScrolling.current = false;
          console.log('Scrolling flag reset');
        }, 1000);
      } else {
        console.error('Element NOT found for section:', section);
        // List all available IDs
        const allElements = document.querySelectorAll('[id]');
        console.log('Available element IDs:', Array.from(allElements).map(el => el.id));
      }
    }, 0);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isScrolling.current) {
        console.log('Skipping scroll handler (programmatic scrolling)');
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          console.log('Scroll Y:', scrollY, 'Window height:', windowHeight);

          // If at the top of page
          if (scrollY < windowHeight / 2) {
            console.log('Setting active section: home');
            setActiveSection('home');
            ticking = false;
            return;
          }

          // Check each section
          const sections = ['about', 'story', 'pricing', 'contact'];

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = rect.top;
              const elementBottom = rect.bottom;

              // Section is active if it's in the middle of viewport
              const threshold = windowHeight / 3;

              console.log(`Section ${sectionId}: top=${elementTop.toFixed(0)}, bottom=${elementBottom.toFixed(0)}, threshold=${threshold.toFixed(0)}`);

              if (elementTop < threshold && elementBottom > threshold) {
                console.log('Setting active section:', sectionId);
                setActiveSection(sectionId);
                break;
              }
            }
          }

          ticking = false;
        });
      }
      ticking = true;
    };

    console.log('Adding scroll event listener');
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    console.log('Running initial scroll check');
    handleScroll();

    return () => {
      console.log('Removing scroll event listener');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} onGetStarted={onGetStarted} />
      <Hero onGetStarted={onGetStarted} />
      <About />
      <Story />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
