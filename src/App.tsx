import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CreationSection } from './components/CreationSection';
import { FlowSection } from './components/FlowSection';
import { CatalogSection } from './components/CatalogSection';
import { TeamIdentitySection } from './components/TeamIdentitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [imageModalData, setImageModalData] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    src: '',
    title: '',
    caption: ''
  });

  const handleOpenImageModal = (src: string, title: string, caption: string) => {
    setImageModalData({
      isOpen: true,
      src,
      title,
      caption
    });
  };

  const handleCloseImageModal = () => {
    setImageModalData((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans selection:bg-amber-400 selection:text-black">
      
      {/* Header / Navigation */}
      <Header
        onOpenKitBuilder={handleOpenQuote}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        
        {/* Hero Section */}
        <Hero
          onScrollToBuilder={handleOpenQuote}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        />

        {/* Section: IDENTIDADE DO SEU TIME */}
        <TeamIdentitySection onOpenQuote={handleOpenQuote} />

        {/* Section 1: CRIAÇÃO */}
        <CreationSection
          onSelectImage={handleOpenImageModal}
          onOpenKitBuilder={handleOpenQuote}
        />

        {/* Section 2: MODELOS DE FUTEBOL */}
        <CatalogSection
          onSelectModel={() => handleOpenQuote()}
          onOpenKitBuilder={handleOpenQuote}
        />

        {/* Section: FLUXO DE PROCESSO */}
        <FlowSection />

        {/* Section 5: Entre em contato */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal for Image Zoom */}
      <ImageModal
        isOpen={imageModalData.isOpen}
        onClose={handleCloseImageModal}
        imageSrc={imageModalData.src}
        title={imageModalData.title}
        caption={imageModalData.caption}
      />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

    </div>
  );
}
