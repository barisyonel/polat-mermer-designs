import { Box } from '@mui/material';
import HeroSlider from '../components/HeroSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import Features from '../components/Features';

const Home = () => {
  return (
    <Box component="div" sx={{ width: '100%' }}>
      <HeroSlider />
      <FeaturedProducts />
      <Features />
    </Box>
  );
};

export default Home; 