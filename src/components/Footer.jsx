import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { memo, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/polatmermer1.png'; // Logo'yu import ediyoruz
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = memo(() => {
  // Memoize the current year
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Memoize footer links
  const footerLinks = useMemo(() => [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/products', label: 'Ürünler' },
    { path: '/about', label: 'Hakkımızda' },
    { path: '/contact', label: 'İletişim' }
  ], []);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Logo Section */}
          <Grid item xs={12} md={3}>
            <Box sx={{ 
              mb: 2,
              textAlign: { xs: 'center', md: 'left' }
            }}>
              <Link 
                component={RouterLink} 
                to="/"
                sx={{ 
                  display: 'inline-block',
                  '& img': {
                    width: '180px',
                    height: 'auto',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }
                }}
              >
                <img 
                  src={logo}
                  alt="Polat Mermer Logo"
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </Link>
            </Box>
          </Grid>

          {/* İletişim Section */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{
                fontSize: '1.2rem',
                fontWeight: 600,
                mb: 3,
                position: 'relative',
                display: 'inline-block',
                pb: 1,
                textAlign: 'center',
                width: '100%',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  height: '2px',
                  bgcolor: 'rgba(255,255,255,0.4)'
                }
              }}
            >
              İletişim
            </Typography>
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 2
            }}>
              <Typography 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1.5,
                  fontSize: '1rem'
                }}
              >
                <span>📍</span> Yeniyurt mah. Çeçenistan caddesi No:99 Tokat Merkez
              </Typography>
              <Typography 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1.5,
                  fontSize: '1rem'
                }}
              >
                <span>📞</span> 0541 829 17 08
              </Typography>
              <Box sx={{ 
                display: 'flex',
                gap: 2,
                mt: 1,
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/polat_mermer2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/share/12Jk4CimU2m/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Hızlı Bağlantılar Section */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{
                fontSize: '1.2rem',
                fontWeight: 600,
                mb: 3,
                position: 'relative',
                display: 'inline-block',
                pb: 1,
                textAlign: 'center',
                width: '100%',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  height: '2px',
                  bgcolor: 'rgba(255,255,255,0.4)'
                }
              }}
            >
              Hızlı Bağlantılar
            </Typography>
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 2
            }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    opacity: 0.9,
                    transition: 'all 0.2s',
                    '&:hover': {
                      opacity: 1,
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Çalışma Saatleri Section */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{
                fontSize: '1.2rem',
                fontWeight: 600,
                mb: 3,
                position: 'relative',
                display: 'inline-block',
                pb: 1,
                textAlign: 'center',
                width: '100%',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  height: '2px',
                  bgcolor: 'rgba(255,255,255,0.4)'
                }
              }}
            >
              Çalışma Saatleri
            </Typography>
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 2
            }}>
              <Typography 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1.5,
                  fontSize: '1rem'
                }}
              >
                <span>🕒</span> Pazartesi - Cumartesi: 08:00 - 18:00
              </Typography>
              <Typography 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1.5,
                  fontSize: '1rem'
                }}
              >
                <span>🕒</span> Pazar: Kapalı
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box 
          sx={{ 
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
          }}>
            <Typography sx={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Media by
            </Typography>
            <Link
              href="https://bariscanyonel.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#FFA500',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.9rem',
                '&:hover': {
                  color: '#FF8C00',
                  textDecoration: 'underline'
                }
              }}
            >
              Barış Can Yönel
            </Link>
          </Box>
          <Typography sx={{ fontSize: '0.9rem', opacity: 0.7 }}>
            © {currentYear} Polat Mermer. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
});

Footer.displayName = 'Footer';

export default Footer; 