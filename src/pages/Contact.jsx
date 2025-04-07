import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
  Card,
  CardContent,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: 'Adres',
      content: 'Yeniyurt mah. Çeçenistan caddesi No:99 Tokat Merkez'
    },
    {
      icon: <PhoneIcon />,
      title: 'Telefon',
      content: '0541 829 17 08'
    },
    {
      icon: <EmailIcon />,
      title: 'E-posta',
      content: 'polatmermer6060@hotmail.com'
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cumartesi: 09:00 - 18:00\nPazar: Kapalı'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
      py: { xs: 4, md: 8 },
    }}>
      <Container maxWidth="xl">
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 6, md: 8 }
        }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: 2,
              background: 'linear-gradient(45deg, #2B4C7E, #567EBF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px'
            }}
          >
            Bizimle İletişime Geçin
          </Typography>
          <Typography 
            variant="h6"
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            Sorularınız ve özel talepleriniz için bize ulaşın, size en kısa sürede dönüş yapalım.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          gap: 4,
          maxWidth: '1400px',
          mx: 'auto',
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          <Card sx={{ 
            width: { xs: '100%', md: '40%' },
            background: 'linear-gradient(135deg, #2B4C7E 0%, #567EBF 100%)',
            color: 'white',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(43,76,126,0.15)',
            alignSelf: 'flex-start'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ 
                mb: 4,
                fontWeight: 700,
                color: '#2B4C7E',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 60,
                  height: 3,
                  bgcolor: '#2B4C7E',
                  opacity: 0.2,
                  borderRadius: 1.5
                }
              }}>
                İletişim Bilgileri
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 4 }}>
                {contactInfo.map((info, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      display: 'flex', 
                      gap: 3,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'rgba(255,255,255,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(161, 16, 16, 0.1)',
                        transform: 'translateX(8px)'
                      }
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 45,
                      height: 45,
                      borderRadius: 2,
                      bgcolor: 'rgba(255,255,255,0.1)'
                    }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ 
                        fontWeight: 600,
                        mb: 0.5,
                        opacity: 0.9
                      }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        opacity: 0.7,
                        whiteSpace: 'pre-line',
                        lineHeight: 1.6
                      }}>
                        {info.content}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ 
            width: { xs: '100%', md: '50%' },
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            alignSelf: 'flex-start',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <CardContent sx={{ 
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <Typography variant="h5" sx={{ 
                mb: 4,
                fontWeight: 700,
                color: '#2B4C7E',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 60,
                  height: 3,
                  bgcolor: '#2B4C7E',
                  opacity: 0.2,
                  borderRadius: 1.5
                }
              }}>
                Mesaj Gönderin
              </Typography>

              <Box 
                component="form"
                onSubmit={handleSubmit}
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  height: '100%'
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Adınız Soyadınız"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: '#f8f9fa',
                          '& fieldset': { borderColor: 'rgba(0,0,0,0.1)' },
                          '&:hover fieldset': { borderColor: '#2B4C7E' },
                          '&.Mui-focused fieldset': { borderColor: '#2B4C7E' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Telefon Numaranız"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: '#f8f9fa',
                          '& fieldset': { borderColor: 'rgba(0,0,0,0.1)' },
                          '&:hover fieldset': { borderColor: '#2B4C7E' },
                          '&.Mui-focused fieldset': { borderColor: '#2B4C7E' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="E-posta Adresiniz"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: '#f8f9fa',
                          '& fieldset': { borderColor: 'rgba(0,0,0,0.1)' },
                          '&:hover fieldset': { borderColor: '#2B4C7E' },
                          '&.Mui-focused fieldset': { borderColor: '#2B4C7E' }
                        }
                      }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Mesajınız"
                  name="message"
                  multiline
                  rows={10}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    flex: 1,
                    minHeight: '200px',
                    '& .MuiOutlinedInput-root': {
                      height: '100%',
                      borderRadius: 2,
                      bgcolor: '#f8f9fa',
                      '& fieldset': { borderColor: 'rgba(0,0,0,0.1)' },
                      '&:hover fieldset': { borderColor: '#2B4C7E' },
                      '&.Mui-focused fieldset': { borderColor: '#2B4C7E' }
                    }
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 2,
                    mt: 2,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    background: 'linear-gradient(45deg, #2B4C7E, #567EBF)',
                    boxShadow: '0 4px 12px rgba(43,76,126,0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #567EBF, #2B4C7E)',
                      boxShadow: '0 6px 16px rgba(43,76,126,0.3)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Mesaj Gönder
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success"
          sx={{ 
            width: '100%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 