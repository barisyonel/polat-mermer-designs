import { Typography, Paper } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion as m } from 'framer-motion';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Features = () => {
  const features = [
    {
      icon: <LocalFloristIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
      title: 'Kaliteli Malzeme',
      description: 'En kaliteli mermer ve granit malzemeleri kullanarak uzun ömürlü ürünler üretiyoruz.'
    },
    {
      icon: <StarIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
      title: 'Uzman Ekip',
      description: 'Deneyimli ve profesyonel ekibimizle en iyi hizmeti sunuyoruz.'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
      title: 'Özel Tasarım',
      description: 'İsteğinize göre özel tasarım mezar taşları üretiyoruz.'
    },
    {
      icon: <EngineeringIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
      title: 'Profesyonel Montaj',
      description: 'Uzman ekibimizle ücretsiz montaj hizmeti sağlıyoruz.'
    },
    {
      icon: <PriceCheckIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
      title: 'Uygun Fiyat',
      description: 'Her bütçeye uygun çözümler sunuyoruz.'
    }
  ];

  return (
    <section className="features-section">
      <div className="container-md">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography className="section-title" variant="h2" component="h2">
            Neden Bizi Seçmelisiniz?
          </Typography>
        </m.div>
        <m.div
          className="features-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <m.div key={index} variants={fadeInUp}>
              <Paper 
                className="feature-card"
                sx={{
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}
              >
                {feature.icon}
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default Features; 