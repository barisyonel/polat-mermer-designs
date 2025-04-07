import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const HomePage = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/Products'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const DesignsPage = lazy(() => import('./pages/Designs'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#c0392b',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  useEffect(() => {
    // Varsayılan SEO meta etiketleri
    document.title = 'Polat Mermer - Kaliteli Mermer ve Granit Ürünleri';
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Polat Mermer, kaliteli mermer ve granit ürünleri sunan güvenilir bir markadır. Mutfak tezgahı, mezar, merdiven ve dekoratif ürünler için bizi tercih edin.';
    
    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'polat mermer, mermer, granit, doğal taş, mutfak tezgahı, mezar, merdiven, çeşme, kurna, dekorasyon';
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = window.location.href;
    
    // Open Graph meta etiketleri
    const ogTags = {
      'og:title': 'Polat Mermer - Kaliteli Mermer ve Granit Ürünleri',
      'og:description': 'Polat Mermer, kaliteli mermer ve granit ürünleri sunan güvenilir bir markadır.',
      'og:type': 'website',
      'og:url': window.location.href,
      'og:site_name': 'Polat Mermer'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/designs" element={<DesignsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* 404 Route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <WhatsAppButton />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
