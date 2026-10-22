import React, { useEffect } from 'react';
import SvgSprites from './components/SvgSprites';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Workflow from './components/Workflow';
import Portfolio from './components/Portfolio';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // 1. Reduced motion check
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const root = document.documentElement;
    root.classList.add('js');

    // 2. Scroll reveal targets
    const targets = [
      '.statement .star-badge',
      '.statement__card',
      '.finance .star-badge',
      '.finance .section-title',
      '.finance .lead',
      '.card-w',
      '.bento .section-title',
      '.bento .lead',
      '.bento > .btn',
      '.bento__card',
      '.pricing .tag',
      '.pricing .section-title',
      '.pricing .lead',
      '.plan',
      '.discover .section-title',
      '.discover .lead',
      '.post',
      '.cta .star-badge',
      '.cta .section-title',
      '.cta .lead',
      '.cta > .btn',
      '.footer__top > *',
      '.wordmark',
    ].join(',');

    const perParent = new Map();
    const revealEls = document.querySelectorAll(targets);
    revealEls.forEach((el) => {
      const i = perParent.get(el.parentNode) || 0;
      perParent.set(el.parentNode, i + 1);
      el.classList.add('reveal');
      if (el.classList.contains('wordmark')) el.classList.add('reveal--rise');
      el.style.setProperty('--d', (i % 5) * 0.1 + 's');
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          el.classList.add('in');
          setTimeout(() => {
            el.classList.remove('reveal', 'reveal--rise', 'in');
          }, 1600);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    );

    revealEls.forEach((el) => io.observe(el));

    // 3. Gauge sweep & bar growth
    const viz = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            viz.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll('.gauge, .bars').forEach((el) => viz.observe(el));

    document.querySelectorAll('.bars').forEach((b) => {
      Array.prototype.forEach.call(b.children, (c, i) => {
        c.style.setProperty('--i', i);
      });
    });

    return () => {
      io.disconnect();
      viz.disconnect();
    };
  }, []);

  return (
    <>
      <SvgSprites />
      <Hero />
      <main>
        <Statement />
        <Services />
        <Features />
        <Pricing />
        <Workflow />
        <Portfolio />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
