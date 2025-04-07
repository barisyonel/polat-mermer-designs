import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Modal,
  IconButton,
} from "@mui/material";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Designs = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    document.title = "Tasarım Ürünlerimiz - Mermer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Özel tasarım mermer ürünlerimizi inceleyin. Modern ve estetik mermer tasarımlarımız arasından seçim yapın."
      );
    }
  }, []);

  const designs = [
    {
      id: 1,
      title: "Modern Mermer Çeşme",
      description: "Özel tasarım modern mermer çeşme. Minimalist çizgiler ve dayanıklı yapı ile bahçenize şıklık katın.",
      image: "src/assets/çeşme/çeşme2.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme2.1.jpeg", "src/assets/çeşme/çeşme2.2.jpeg"]
    },
    {
      id: 2,
      title: "Klasik Mermer Çeşme",
      description: "Osmanlı mimarisinden esinlenilen klasik mermer çeşme. El işçiliği detayları ile göz kamaştırıcı.",
      image: "src/assets/çeşme/çeşme3.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme3.1.jpeg", "src/assets/çeşme/çeşme3.2.jpeg"]
    },
    {
      id: 3,
      title: "Özel Tasarım Şadırvan",
      description: "Cami ve mescitler için özel tasarlanmış şadırvan. Geleneksel motifler modern yorumla buluşuyor.",
      image: "src/assets/çeşme/çeşme4.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme4.1.jpeg", "src/assets/çeşme/çeşme4.2.jpeg"]
    },
    {
      id: 4,
      title: "Modern CNC İşlemeli Mezar",
      description: "5 eksenli CNC teknolojisi ile işlenmiş özel tasarım mezar. İnce detaylı motifler, altın varak süslemeler ve kusursuz işçilik ile hazırlanmıştır. Her detayı özenle tasarlanmış premium kalite mermer işçiliği.",
      image: "src/assets/mezar/mezar27.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar27.jpeg"]
    },
    {
      id: 5,
      title: "Modern Duvar Çeşmesi",
      description: "Duvar montajlı modern çeşme tasarımı. Kompakt boyutu ve şık görünümü ile ideal çözüm.",
      image: "src/assets/çeşme/çeşme6.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme6.1.jpeg", "src/assets/çeşme/çeşme6.2.jpeg"]
    },
    {
      id: 6,
      title: "Özel Tasarım CNC Mezar",
      description: "CNC teknolojisi ile işlenmiş özel tasarım mezar. Yan panellerde zarif oyma desenler, üst kısımda detaylı işlemeler ve köşe sütunları ile dikkat çeken premium işçilik. Her detayı özenle tasarlanmış, yüksek kaliteli beyaz mermerden üretilmiştir.",
      image: "src/assets/mezar/mezar25.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar25.jpeg"]
    },
    {
      id: 7,
      title: "Minimalist Çeşme",
      description: "Modern mimari için tasarlanmış minimalist çeşme. Sade ve şık tasarımı ile dikkat çeker.",
      image: "src/assets/çeşme/çeşme8.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme8.1.jpeg", "src/assets/çeşme/çeşme8.2.jpeg"]
    },
    {
      id: 8,
      title: "Rustik Bahçe Çeşmesi",
      description: "Doğal taş dokulu rustik çeşme tasarımı. Bahçenize otantik bir hava katar.",
      image: "src/assets/çeşme/çeşme9.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme9.1.jpeg", "src/assets/çeşme/çeşme9.2.jpeg"]
    },
    {
      id: 9,
      title: "Lüks Villa Çeşmesi",
      description: "Lüks villalar için özel tasarlanmış mermer çeşme. İhtişamlı görünümü ile mekanınıza değer katar.",
      image: "src/assets/lavobo/lavabo2.jpeg",
      category: "lavabo",
      gallery: ["src/assets/lavobo/lavabo2.jpeg",]
    }
  ];

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setMainImage(product.image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setMainImage(null);
  };

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          textAlign: "center",
          mb: 8,
          position: "relative",
          background: "linear-gradient(45deg, rgba(44, 62, 80, 0.05), rgba(44, 62, 80, 0.1))",
          py: 4,
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 800,
            background: "linear-gradient(45deg, #2c3e50, #FFA500)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "3px",
          }}
        >
          Tasarım Ürünlerimiz
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            maxWidth: "500px",
            mx: "auto",
            mt: 3,
          }}
        >
          Modern ve estetik mermer tasarımlarımızla yaşam alanlarınızı özelleştirin
        </Typography>
      </Box>

      {/* Video Section */}
      <Box
        sx={{
          width: "100%",
          mb: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
    
        
        <Grid container spacing={4} alignItems="center">
          {/* Sol taraf - Açıklama */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2rem" },
                  fontWeight: 600,
                  mb: 3,
                  color: "#2c3e50"
                }}
              >
                Modern Teknoloji & Ustalık
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  color: "text.secondary",
                  mb: 2,
                  lineHeight: 1.8
                }}
              >
                Son teknoloji CNC makinelerimiz ve deneyimli ustalarımızla, mermer işleme sanatını endüstriyel hassasiyetle buluşturuyoruz. Üretim sürecimizde:
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    color: "text.secondary",
                    mb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    "&:before": {
                      content: '"•"',
                      marginRight: "8px",
                      color: "#1976d2",
                      fontWeight: "bold"
                    }
                  }}
                >
                  5 eksenli CNC teknolojisi ile hassas kesim ve işleme
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    color: "text.secondary",
                    mb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    "&:before": {
                      content: '"•"',
                      marginRight: "8px",
                      color: "#1976d2",
                      fontWeight: "bold"
                    }
                  }}
                >
                  3D modelleme ve CAD/CAM yazılım desteği
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    color: "text.secondary",
                    mb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    "&:before": {
                      content: '"•"',
                      marginRight: "8px",
                      color: "#1976d2",
                      fontWeight: "bold"
                    }
                  }}
                >
                  0.1mm hassasiyetle detaylı işçilik imkanı
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    color: "text.secondary",
                    mb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    "&:before": {
                      content: '"•"',
                      marginRight: "8px",
                      color: "#1976d2",
                      fontWeight: "bold"
                    }
                  }}
                >
                  Kompleks tasarımları kusursuz uygulama yeteneği
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    color: "text.primary",
                    mt: 3,
                    fontStyle: "italic",
                    borderLeft: "3px solid #1976d2",
                    pl: 2,
                  }}
                >
                  Modern teknoloji ve geleneksel mermer işçiliğini bir araya getirerek, her projenizde mükemmelliği hedefliyoruz.
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          {/* Sağ taraf - Video */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "600px",
                position: "relative",
                paddingTop: { xs: "55%", md: "48%" },
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                mx: "auto",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/4-F5lMduVWY"
                title="Özel Tasarım Çalışmalarımız"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <m.div variants={staggerContainer} initial="initial" animate="animate">
        <Grid
          container
          spacing={4}
          sx={{
            mb: 6,
            justifyContent: "center",
            "& .MuiGrid-item": {
              width: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                md: "calc(33.33% - 16px)",
              },
              maxWidth: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                md: "calc(33.33% - 16px)",
              },
              margin: "8px",
            },
          }}
        >
          {designs.map((design) => (
            <Grid item xs={12} sm={6} md={4} key={design.id}>
              <m.div
                variants={fadeInUp}
                style={{ width: "100%", height: "100%" }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: { xs: '800px', sm: '650px' },
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease-in-out",
                    borderRadius: 2,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: '450px', sm: '350px' },
                      overflow: "hidden",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={design.image}
                      alt={design.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: { xs: '350px', sm: '300px' },
                      width: "100%",
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box sx={{ 
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          fontWeight: "bold",
                          mb: 2,
                          fontSize: { xs: '1.4rem', sm: '1.2rem' },
                          lineHeight: 1.3,
                          height: { xs: '60px', sm: '48px' },
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {design.title}
                      </Typography>
                      <Box sx={{ 
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 2.5
                      }}>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: '1.2rem', sm: '1rem' },
                            lineHeight: 1.5,
                            height: { xs: '90px', sm: '72px' },
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {design.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#1976d2',
                            fontWeight: '600',
                            textAlign: 'center',
                            fontSize: { xs: '1.4rem', sm: '1.2rem' },
                            backgroundColor: 'rgba(25, 118, 210, 0.08)',
                            padding: '16px',
                            borderRadius: '8px',
                            border: '1px solid rgba(25, 118, 210, 0.2)',
                            height: { xs: '64px', sm: '56px' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          Tasarım No: {design.id}
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      onClick={() => handleOpenModal(design)}
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        height: { xs: '64px', sm: '50px' },
                        textTransform: 'none',
                        fontSize: { xs: '1.4rem', sm: '1.2rem' },
                        borderRadius: 2,
                        mt: 3,
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

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="design-detail-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "80%", md: "70%" },
            maxWidth: "800px",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxHeight: "90vh",
            overflow: "auto",
          }}
        >
          {selectedProduct && (
            <>
              <Box sx={{ position: "relative", mb: 2 }}>
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: "absolute",
                    right: -16,
                    top: -16,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h4" component="h2" gutterBottom>
                  {selectedProduct.title}
                </Typography>
              </Box>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "400px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <img
                        src={mainImage || selectedProduct.image}
                        alt={selectedProduct.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                    {/* Galeri Resimleri */}
                    <Box sx={{ 
                      display: "grid", 
                      gridTemplateColumns: "repeat(2, 1fr)", 
                      gap: 2,
                      mt: 2 
                    }}>
                      {selectedProduct.gallery.map((img, index) => (
                        <Box
                          key={index}
                          onClick={() => handleImageClick(img)}
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: "150px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            cursor: "pointer",
                            transition: "transform 0.3s ease",
                            border: mainImage === img ? "3px solid #1976d2" : "none",
                            "&:hover": {
                              transform: "scale(1.05)",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            },
                          }}
                        >
                          <img
                            src={img}
                            alt={`${selectedProduct.title} - ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Tasarım Detayları
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProduct.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                    Özellikler
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Premium kalite mermer malzeme
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Özel tasarım ve işçilik
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Modern ve estetik görünüm
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Kişiye özel üretim imkanı
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 4 }}
                    onClick={() => navigate("/contact")}
                  >
                    İletişime Geç
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Designs; 