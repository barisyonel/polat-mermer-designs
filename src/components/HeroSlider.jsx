import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import mmermerImage from '../assets/mmermer.png';
import mezarImage from '../assets/mezar.png';
import mermerrImage from '../assets/mermerrr.png';
import bmermerImage from '../assets/bmermer.jpg';
import gunnaImage from '../assets/cesme.png';

const slides = [
  {
    id: 1,
    image: mmermerImage,
    title: '20 Yıllık Tecrübe',
    subtitle: 'Profesyonel ekip ve garantili hizmet',
    link: '/products'
  },
  {
    id: 2,
    image: mezarImage,
    title: 'Özel Tasarım Granit Mezarlar',
    subtitle: 'Modern ve dayanıklı granit mezar taşları',
    link: '/products'
  },
  {
    id: 3,
    image: mermerrImage,
    title: 'Kaliteli Mermer Mezar Taşları',
    subtitle: 'Sevdiklerinizin anısını yaşatmak için özel tasarımlar',
    link: '/products'
  },
  {
    id: 4,
    image: bmermerImage,
    title: 'Banyo Granitleri',
    subtitle: 'Modern ve şık banyo granitleri ile konforlu bir yaşam alanı',
    link: '/products'
  },
  {
    id: 5,
    image: gunnaImage,
    title: 'Mermer Çeşmeler',
    subtitle: 'Özel tasarım mermer çeşmeler ile bahçenize zarafet katın',
    link: '/products'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 80px)',
        overflow: 'hidden',
        touchAction: 'pan-y pinch-zoom',
        marginTop: '0'
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              width: '90%',
              maxWidth: '800px',
              willChange: 'transform'
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  mb: 2
                }}
              >
                {slides[currentSlide].title}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  mb: 4,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                {slides[currentSlide].subtitle}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                component={RouterLink}
                to={slides[currentSlide].link}
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'white',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                Detaylı Bilgi
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </AnimatePresence>

      <Box
        sx={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 2
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(index);
            }}
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </Box>

      <Button
        onClick={handlePrevSlide}
        sx={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 2,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }}
      >
        <ArrowBackIcon />
      </Button>

      <Button
        onClick={handleNextSlide}
        sx={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 2,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }}
      >
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
};

export default HeroSlider; 