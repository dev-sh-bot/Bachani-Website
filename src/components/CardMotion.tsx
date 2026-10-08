'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const CARD_SELECTOR = '.motion-card';

export default function CardMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pendingCards = new Set<HTMLElement>();

    const revealCard = (card: HTMLElement, delay = 0) => {
      card.style.setProperty('--card-reveal-delay', `${delay}ms`);
      card.dataset.cardMotionState = 'revealed';
      observer.unobserve(card);
      pendingCards.delete(card);
    };

    const observer = new IntersectionObserver(entries => {
      // Masonry source order differs from the order people see on screen.
      const entering = entries.filter(entry => entry.isIntersecting).sort((a, b) => {
        const rowDifference = Math.round(a.boundingClientRect.top / 24) - Math.round(b.boundingClientRect.top / 24);
        return rowDifference || a.boundingClientRect.left - b.boundingClientRect.left;
      });

      entering.forEach((entry, index) => {
        revealCard(entry.target as HTMLElement, reducedMotion.matches ? 0 : Math.min(index, 3) * 45);
      });
    }, { threshold: 0, rootMargin: '0px 0px 48px 0px' });

    const prepareCards = (cards: Set<HTMLElement>) => {
      // Read positions together before changing styles to avoid repeated reflows.
      const positions = Array.from(cards)
        .filter(card => card.dataset.cardMotionState !== 'revealed' && !pendingCards.has(card))
        .map(card => ({ card, rect: card.getBoundingClientRect() }));

      for (const { card, rect } of positions) {
        // Never hide content that has already been painted inside the viewport.
        if (reducedMotion.matches || rect.top < window.innerHeight || rect.height === 0) {
          revealCard(card);
          continue;
        }

        card.dataset.cardMotionState = 'pending';
        pendingCards.add(card);
        observer.observe(card);
      }
    };

    const collectCards = (container: ParentNode, cards: Set<HTMLElement>) => {
      if (container instanceof HTMLElement && container.matches(CARD_SELECTOR)) {
        cards.add(container);
      }
      container.querySelectorAll<HTMLElement>(CARD_SELECTOR).forEach(card => cards.add(card));
    };

    const initialCards = new Set<HTMLElement>();
    collectCards(document, initialCards);
    prepareCards(initialCards);

    // Filtered galleries and client navigation can add cards after the first render.
    const mutations = new MutationObserver(records => {
      const addedCards = new Set<HTMLElement>();
      for (const record of records) {
        record.addedNodes.forEach(node => {
          if (node instanceof Element) collectCards(node, addedCards);
        });
      }
      prepareCards(addedCards);

      pendingCards.forEach(card => {
        if (!card.isConnected) {
          observer.unobserve(card);
          pendingCards.delete(card);
        }
      });
    });

    const main = document.getElementById('main-content');
    if (main) mutations.observe(main, { childList: true, subtree: true });

    const revealFocusedCard = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const card = event.target.closest<HTMLElement>(CARD_SELECTOR);
      if (card && pendingCards.has(card)) revealCard(card);
    };
    document.addEventListener('focusin', revealFocusedCard);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.removeEventListener('focusin', revealFocusedCard);
      pendingCards.forEach(card => {
        delete card.dataset.cardMotionState;
      });
      pendingCards.clear();
    };
  }, [pathname]);

  return null;
}
