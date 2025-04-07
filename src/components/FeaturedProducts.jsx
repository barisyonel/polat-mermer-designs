import { Typography, Card, CardContent, CardMedia, Button, Box, Container, Grid, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion as m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

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

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpenDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
    setSelectedImage(0);
  };

  const products = [
    {
      id: 1,
      title: 'Özel Tasarım Mermer Mezar',
      description: 'Modern ve zarif tasarımıyla öne çıkan, yüksek kaliteli mermerden üretilmiş mezar modeli.',
      image: 'src/assets/mermer.png',
      additionalImages: ['src/assets/mermer.png', 'src/assets/mermer.png', 'src/assets/mermer.png'],
      fullDescription: 'Özel tasarım mermer mezarlarımız, sevdiklerinizin anısını en güzel şekilde yaşatmak için tasarlanmıştır. Yüksek kaliteli mermer kullanılarak üretilen mezarlarımız, dayanıklılığı ve estetik görünümüyle öne çıkar.',
      specifications: [
        'Yüksek kaliteli mermer',
        'Özel tasarım seçenekleri',
        'Profesyonel işçilik',
        'Uzun ömürlü dayanıklılık',
        'Kişiselleştirilebilir yazı ve desenler'
      ]
    },
    {
      id: 2,
      title: 'Granit Mutfak Tezgahı',
      description: 'Mutfağınız için dayanıklı ve şık granit tezgah çözümleri.',
      image: 'src/assets/mermer.png',
      additionalImages: ['src/assets/mermer.png', 'src/assets/mermer.png', 'src/assets/mermer.png'],
      fullDescription: 'Granit mutfak tezgahlarımız, mutfağınıza hem estetik hem de fonksiyonel bir değer katar. Yüksek kaliteli granit malzeme kullanılarak üretilen tezgahlarımız, çizilmelere ve lekelere karşı dirençlidir.',
      specifications: [
        'Yüksek kaliteli granit',
        'Çizilme ve leke direnci',
        'Geniş renk seçenekleri',
        'Kolay temizlenebilir yüzey',
        'Profesyonel montaj hizmeti'
      ]
    },
    {
      id: 3,
      title: 'Mermer Merdiven',
      description: 'Evinize değer katan özel tasarım mermer merdiven uygulamaları.',
      image: 'src/assets/mermer.png',
      additionalImages: ['src/assets/mermer.png', 'src/assets/mermer.png', 'src/assets/mermer.png'],
      fullDescription: 'Mermer merdivenlerimiz, evinizin iç mekanına lüks ve zarif bir görünüm katar. Her bir basamak özenle işlenir ve mükemmel bir uyumla monte edilir.',
      specifications: [
        'Özel kesim mermer basamaklar',
        'Kaymaz yüzey işlemi',
        'Profesyonel montaj',
        'Uzun ömürlü kullanım',
        'Modern tasarım seçenekleri'
      ]
    },
    {
      id: 4,
      title: 'Özel Tasarım Şömine',
      description: 'Evinize sıcaklık katan modern ve şık mermer şömine tasarımları.',
      image: 'src/assets/mermer.png',
      additionalImages: ['src/assets/mermer.png', 'src/assets/mermer.png', 'src/assets/mermer.png'],
      fullDescription: 'Özel tasarım mermer şöminelerimiz, evinize hem sıcaklık hem de lüks bir görünüm katar. Modern ve klasik tasarım seçenekleriyle her tarza uygun şömineler üretiyoruz.',
      specifications: [
        'Özel tasarım seçenekleri',
        'Yüksek kaliteli mermer',
        'Profesyonel montaj',
        'Isıya dayanıklı yapı',
        'Modern ve klasik stiller'
      ]
    },
    {
      id: 5,
      title: 'Mermer Banyo Lavabo',
      description: 'Banyonuz için özel tasarlanmış, şık ve modern mermer lavabo modelleri.',
      image: 'src/assets/mermer.png',
      additionalImages: ['src/assets/mermer.png', 'src/assets/mermer.png', 'src/assets/mermer.png'],
      fullDescription: 'Mermer banyo lavabolarımız, banyonuza lüks ve modern bir görünüm kazandırır. Her bir lavabo, özel olarak seçilmiş mermerlerden, uzman eller tarafından işlenir.',
      specifications: [
        'Özel kesim mermer',
        'Modern tasarım',
        'Kolay temizlenebilir yüzey',
        'Uzun ömürlü kullanım',
        'Profesyonel montaj'
      ]
    },
    {
      id: 6,
      title: 'Mermer Duvar Kaplaması',
      description: 'İç mekanlarınız için lüks görünüm sağlayan özel mermer duvar kaplama çözümleri.',
      image: 'src/assets/mermer.png',
      additionalImages: ['src/assets/mermer.png', 'src/assets/mermer.png', 'src/assets/mermer.png'],
      fullDescription: 'Mermer duvar kaplamalarımız, iç mekanlarınıza lüks ve sofistike bir görünüm kazandırır. Özenle seçilen mermerler, profesyonel ekibimiz tarafından hassasiyetle işlenir ve monte edilir.',
      specifications: [
        'Yüksek kaliteli mermer',
        'Çeşitli renk seçenekleri',
        'Profesyonel montaj',
        'Kolay bakım',
        'Uzun ömürlü kullanım'
      ]
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <Typography 
          variant="h2" 
          component="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: '800',
            color: 'primary.main',
            mb: 2
          }}
        >
          Öne Çıkan Ürünlerimiz
        </Typography>
        <Typography 
          variant="h6"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}
        >
          En çok tercih edilen kaliteli mermer ürünlerimiz
        </Typography>
      </m.div>

      <m.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Grid 
          container 
          spacing={4}
          justifyContent="center"
        >
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <m.div variants={fadeInUp}>
                <Card 
                  sx={{
                    width: { xs: '100%', sm: '400px' },
                    height: { xs: '750px', sm: '700px' },
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: 2,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    mx: 'auto',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative',
                      width: '100%',
                      height: { xs: '400px', sm: '350px' },
                      overflow: 'hidden',
                      backgroundColor: '#f5f5f5'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </Box>
                  <CardContent 
                    sx={{ 
                      p: { xs: 3, sm: 4 },
                      display: 'flex',
                      flexDirection: 'column',
                      height: { xs: '350px', sm: '350px' },
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        sx={{ 
                          fontWeight: 'bold',
                          mb: 2,
                          fontSize: { xs: '1.7rem', sm: '1.5rem' },
                          lineHeight: 1.3,
                          height: { xs: '70px', sm: '65px' },
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ 
                          fontSize: { xs: '1.3rem', sm: '1.2rem' },
                          lineHeight: 1.5,
                          height: { xs: '90px', sm: '80px' },
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          mb: 2
                        }}
                      >
                        {product.description}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#1976d2',
                          fontWeight: '600',
                          textAlign: 'center',
                          fontSize: { xs: '1.2rem', sm: '1.1rem' },
                          mb: 3,
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid rgba(25, 118, 210, 0.2)'
                        }}
                      >
                        Ürün Numarası: {product.id}
                      </Typography>
                    </Box>
                    <Button
                      onClick={() => handleOpenDetails(product)}
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        height: { xs: '50px', sm: '45px' },
                        textTransform: 'none',
                        fontSize: { xs: '1.2rem', sm: '1.1rem' },
                        borderRadius: 1.5,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        }
                      }}
                    >
                      Detayları Gör
                    </Button>
                  </CardContent>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </m.div>

      <Dialog
        open={Boolean(selectedProduct)}
        onClose={handleCloseDetails}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            maxWidth: '1200px',
            margin: { xs: 2, md: 4 }
          }
        }}
      >
        {selectedProduct && (
          <>
            <DialogTitle 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                p: 3
              }}
            >
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                {selectedProduct.title}
              </Typography>
              <IconButton onClick={handleCloseDetails} sx={{ color: 'text.secondary' }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Box
                      component="img"
                      src={selectedProduct.additionalImages[selectedImage]}
                      alt={selectedProduct.title}
                      sx={{
                        width: '100%',
                        height: '500px',
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Grid container spacing={2}>
                      {selectedProduct.additionalImages.map((img, index) => (
                        <Grid item xs={4} key={index}>
                          <Box
                            component="img"
                            src={img}
                            alt={`${selectedProduct.title} ${index + 1}`}
                            onClick={() => setSelectedImage(index)}
                            sx={{
                              width: '100%',
                              height: '120px',
                              objectFit: 'cover',
                              borderRadius: 1,
                              cursor: 'pointer',
                              border: selectedImage === index ? '2px solid #1976d2' : '2px solid transparent',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                opacity: 0.8,
                                transform: 'scale(1.05)'
                              }
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    Ürün Detayları
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    {selectedProduct.fullDescription}
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ mt: 4, fontWeight: 'bold', color: 'primary.main' }}>
                    Özellikler
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                    {selectedProduct.specifications.map((spec, index) => (
                      <Typography 
                        component="li" 
                        key={index} 
                        sx={{ 
                          mb: 1.5,
                          fontSize: '1.1rem',
                          '&::marker': {
                            color: 'primary.main'
                          }
                        }}
                      >
                        {spec}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ 
                      mt: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      borderRadius: 2,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                      }
                    }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    İletişime Geç
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default FeaturedProducts;