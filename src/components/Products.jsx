import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Tabs,
  Tab,
  Modal,
  IconButton,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion as m } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const tabsRef = useRef(null);

  const categories = [
    { label: "Tümü", value: "all" },
    { label: "Mutfak", value: "mutfak" },
    { label: "Mezar", value: "mezar" },
    { label: "Merdiven", value: "merdiven" },
    { label: "Çeşme", value: "cesme" },
    { label: "Kurna", value: "kurna" },
    { label: "Lavabo", value: "lavabo" },
    { label: "Dekorasyon", value: "dekorasyon" },
  ];

  const currentIndex = categories.findIndex(cat => cat.value === selectedCategory);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
    // Reset scroll position when category changes
    const tabsContainer = document.querySelector(".MuiTabs-scroller");
    if (tabsContainer) {
      tabsContainer.scrollLeft = 0;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!tabsRef.current) return;
      
      const currentIndex = categories.findIndex(cat => cat.value === selectedCategory);
      let newIndex;

      switch (e.key) {
        case 'ArrowLeft':
          newIndex = Math.max(0, currentIndex - 1);
          break;
        case 'ArrowRight':
          newIndex = Math.min(categories.length - 1, currentIndex + 1);
          break;
        default:
          return;
      }

      setSelectedCategory(categories[newIndex].value);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCategory]);

  useEffect(() => {
    // SEO için title ve meta etiketlerini güncelle
    document.title = "Ürünlerimiz - Mermer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Mermer ürünlerimizi inceleyin. Kaliteli ve şık mermer çeşitlerimiz arasından seçim yapın."
      );
    }
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const products = [
    // Mutfak Kategorisi
    {
      id: 1,
      title: "Beyaz Mermer Mutfak Tezgahı",
      description:
        "Modern mutfaklar için özel tasarlanmış, dayanıklı ve şık beyaz mermer tezgah.",
      image: "src/assets/mezar/mezar1.jpeg",
      category: "mezar",
      gallery: [
        "src/assets/mezar/mezar1.jpeg",
        "src/assets/mezar/mezar1.1.jpeg",
        "src/assets/mezar/mezar1.2.jpeg",
      ],
    },
    {
      id: 2,
      title: "Granit Mutfak Tezgahı",
      description:
        "Yüksek dayanıklılık sunan, leke tutmayan özel granit mutfak tezgahı.",
      image: "src/assets/mezar/mezar2.jpeg",
      category: "mezar",
      gallery: [
        "src/assets/mezar/mezar2.3.jpeg",
        "src/assets/mezar/mezar2.jpeg",
      ],
    },
    {
      id: 3,
      title: "Ada Mutfak Tezgahı",
      description: "Modern mutfaklar için özel tasarım ada tezgah çözümleri.",
      image: "src/assets/mezar/mezar4.1.jpeg",
      category: "mezar",
      gallery: [
        "src/assets/mezar/mezar4.2.jpeg",
        "src/assets/mezar/mezar4.1.jpeg",
      ],
    },
    // Mezar Kategorisi
    {
      id: 4,
      title: "Klasik Mermer Mezar",
      description: "Geleneksel tasarıma sahip, beyaz mermerden yapılmış mezar.",
      image: "src/assets/mezar/mezar6.jpeg",
      category: "mezar",
      gallery: [
        "src/assets/mezar/mezar6.1.jpeg",
        "src/assets/mezar/mezar6.jpeg",
      ],
    },
    {
      id: 5,
      title: "Granit Mezar",
      description: "Modern tasarımlı, dayanıklı granit mezar.",
      image: "src/assets/mezar/mezar7.jpeg",
      category: "mezar",
      gallery: [
        "src/assets/mezar/mezar7.1.jpeg",
        "src/assets/mezar/mezar7.jpeg",
      ],
    },
    {
      id: 6,
      title: "Özel Tasarım Aile Mezarı",
      description: "Aile mezarlığı için özel tasarlanmış geniş mezar.",
      image: "src/assets/mezar/mezar8.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar8.jpeg"],
    },
    // Merdiven Kategorisi
    {
      id: 7,
      title: "Mermer Merdiven",
      description: "Özel tasarım mermer merdiven, şık ve dayanıklı.",
      image: "src/assets/mezar/mezar9.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar9.jpeg"],
    },
    {
      id: 8,
      title: "Granit Merdiven",
      description: "Modern mekanlar için granit merdiven çözümleri.",
      image: "src/assets/mezar/mezar10.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar10.jpeg"],
    },
    {
      id: 9,
      title: "Özel Tasarım Merdiven",
      description: "Mekanınıza özel tasarlanmış merdiven seçenekleri.",
      image: "src/assets/mezar/mezar11.jpeg",
      category: "mezar",
      gallery: [
        "src/assets/mezar/mezar11.1.jpeg",
        "src/assets/mezar/mezar11.jpeg",
      ],
    },
    // Çeşme Kategorisi
    {
      id: 10,
      title: "Klasik Mermer Çeşme",
      description: "Geleneksel tasarıma sahip mermer çeşme.",
      image: "src/assets/mezar/mezar12.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar12.jpeg"],
    },
    {
      id: 11,
      title: "Modern Çeşme",
      description: "Modern tasarımlı, şık mermer çeşme.",
      image: "src/assets/mezar/mezar13.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar13.jpeg"],
    },
    {
      id: 12,
      title: "Duvar Çeşmesi",
      description: "Duvar tipi özel tasarım mermer çeşme.",
      image: "src/assets/mezar/mezar14.jpeg",
      category: "mezar",
      gallery: [
        "src/assets/mezar/mezar14.1.jpeg",
        "src/assets/mezar/mezar14.jpeg",
      ],
    },
    // Kurna Kategorisi
    {
      id: 13,
      title: "Klasik Mermer Kurna",
      description: "Geleneksel tasarım hamam kurnası.",
      image: "src/assets/mezar/mezar13.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar13.jpeg"],
    },
    {
      id: 14,
      title: "Modern Kurna",
      description: "Modern tasarımlı mermer kurna.",
      image: "src/assets/mezar/mezar15.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar15.jpeg"],
    },
    {
      id: 15,
      title: "Özel Tasarım Kurna",
      description: "Özel tasarım hamam ve banyo kurnaları.",
      image: "src/assets/mezar/mezar16.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar16.jpeg"],
    },
    // Mermer Masa Kategorisi
    {
      id: 16,
      title: "Yemek Masası",
      description: "Özel tasarım mermer yemek masası.",
      image: "src/assets/mezar/mezar16.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar17.jpeg"],
    },
    {
      id: 17,
      title: "Lüks Mermer Sehpa",
      description: "Özel tasarım mermer sehpa seti.",
      image: "src/assets/mezar/mezar17.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar18.jpeg"],
    },
    {
      id: 18,
      title: "Mermer Lavabo",
      description: "Modern banyolar için mermer lavabo.",
      image: "src/assets/mezar/mezar18.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar18.jpeg"],
    },
    {
      id: 19,
      title: "Mermer Şömine",
      description: "Lüks mermer şömine tasarımı.",
      image: "src/assets/mezar/mezar20.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar20.jpeg"],
    },
    {
      id: 20,
      title: "Mermer Duvar Kaplaması",
      description: "Özel tasarım mermer duvar kaplaması.",
      image: "src/assets/mezar/mezar20.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar20.jpeg"],
    },
    {
      id: 21,
      title: "Mermer Sütun",
      description: "Klasik mermer sütun tasarımı.",
      image: "src/assets/mezar/mezar22.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar22.jpeg"],
    },
    {
      id: 22,
      title: "Mermer Bahçe Masası",
      description: "Dış mekan için özel tasarım mermer masa.",
      image: "src/assets/mezar/mezar23.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar23.jpeg"],
    },
    {
      id: 23,
      title: "Mermer Bahçe Süsü",
      description: "Bahçe dekorasyonu için mermer süs.",
      image: "src/assets/mezar/mezar24.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar24.jpeg"],
    },
    {
      id: 24,
      title: "Mermer Vazo",
      description: "Özel tasarım mermer vazo.",
      image: "src/assets/mezar/mezar25.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar25.jpeg"],
    },
    {
      id: 25,
      title: "Mermer Heykel",
      description: "Sanatsal mermer heykel tasarımı.",
      image: "src/assets/mezar/mezar26.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar26.jpeg"],
    },
    {
      id: 26,
      title: "Mermer Duvar Paneli",
      description: "Modern duvar paneli tasarımı.",
      image: "src/assets/mezar/mezar27.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar27.jpeg"],
    },
    {
      id: 27,
      title: "Mermer Banyo Seti",
      description: "Tam mermer banyo seti.",
      image: "src/assets/mezar/mezar28.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar28.jpeg"],
    },
    {
      id: 28,
      title: "Mermer Hamam Seti",
      description: "Geleneksel hamam seti.",
      image: "src/assets/mezar/mezar29.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar29.jpeg"],
    },
    {
      id: 29,
      title: "Mermer Sauna Seti",
      description: "Modern sauna seti.",
      image: "src/assets/mezar/mezar30.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar30.jpeg"],
    },
    {
      id: 30,
      title: "Mermer Duş Seti",
      description: "Lüks mermer duş seti.",
      image: "src/assets/mezar/mezar30.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar30.jpeg"],
    },
    {
      id: 31,
      title: "Mermer Jakuzi",
      description: "Özel tasarım mermer jakuzi.",
      image: "src/assets/mezar/mezar32.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar32.jpeg"],
    },
    {
      id: 32,
      title: "Mermer Duş Tabanı",
      description: "Modern duş tabanı tasarımı.",
      image: "src/assets/mezar/mezar33.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar33.jpeg"],
    },
    {
      id: 33,
      title: "Mermer Ayna",
      description: "Özel tasarım mermer ayna.",
      image: "src/assets/mezar/mezar33.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar33.jpeg"],
    },
    {
      id: 34,
      title: "Mermer Şamdan",
      description: "Klasik mermer şamdan tasarımı.",
      image: "src/assets/mezar/mezar35.jpeg",
      category: "mezar",
      gallery: ["src/assets/mezar/mezar35.jpeg"],
    },
    {
      id: 35,
      title: "Mermer Mumluk",
      description: "Modern mermer mumluk tasarımı.",
      image: "src/assets/çeşme/çeşme.jpg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme1.1..jpg"],
    },
    {
      id: 36,
      title: "Mermer Abajur",
      description: "Özel tasarım mermer abajur.",
      image: "src/assets/çeşme/çeşme2.jpeg",
      category: "cesme",
      gallery: [
        "src/assets/çeşme/çeşme2.1.jpeg",
        "src/assets/çeşme/çeşme2.2.jpeg",
      ],
    },
    {
      id: 37,
      title: "Mermer Kitaplık",
      description: "Modern mermer kitaplık tasarımı.",
      image: "src/assets/çeşme/çeşme3.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme3.1.jpeg"],
    },
    {
      id: 38,
      title: "Mermer TV Ünitesi",
      description: "Özel tasarım mermer TV ünitesi.",
      image: "src/assets/çeşme/çeşme4.jpeg",
      category: "cesme",
      gallery: [
        "src/assets/çeşme/çeşme4.1.jpeg",
        "src/assets/çeşme/çeşme4.2.jpeg",
      ],
    },
    {
      id: 39,
      title: "Mermer Konsol",
      description: "Modern mermer konsol tasarımı.",
      image: "src/assets/çeşme/çeşme5.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme5.1.jpeg"],
    },
    {
      id: 40,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/çeşme/çeşme6.jpeg",
      category: "cesme",
      gallery: [
        "src/assets/çeşme/çeşme6.1.jpeg",
        "src/assets/çeşme/çeşme6.2.jpeg",
      ],
    },
    {
      id: 41,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/çeşme/çeşme7.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme7.1.jpeg"],
    },
    {
      id: 42,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/çeşme/çeşme8.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme8.jpeg"],
    },
    {
      id: 43,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/çeşme/çeşme9.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme9.jpeg"],
    },
    {
      id: 44,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/çeşme/çeşme10.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme10.jpeg"],
    },
    {
      id: 45,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/çeşme/çeşme11.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme12.jpeg"],
    },
    {
      id: 46,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/çeşme/çeşme13.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme13.jpeg"],
    },
    {
      id: 47,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/çeşme/çeşme14.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme14.jpeg"],
    },
    {
      id: 48,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/çeşme/çeşme15.jpeg",
      category: "cesme",
      gallery: ["src/assets/çeşme/çeşme15.jpeg"],
    },
    {
      id: 49,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/mutfak/mutfak2.jpeg",
      category: "mutfak",
      gallery: ["src/assets/mutfak/mutfak2.1.jpeg"],
    },
    {
      id: 50,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/mutfak/mutfak3.jpeg",
      category: "mutfak",
      gallery: [
        "src/assets/mutfak/mutfak3.1.jpeg",
        "src/assets/mutfak/mutfak3.3.jpeg",
      ],
    },
    {
      id: 51,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/mutfak/mutfak4.jpeg",
      category: "mutfak",
      gallery: ["src/assets/mutfak/mutfak4.1.jpeg"],
    },
    {
      id: 52,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/mutfak/mutfak5.jpeg",
      category: "mutfak",
      gallery: ["src/assets/mutfak/mutfak5.jpeg"],
    },
    {
      id: 53,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/mutfak/mutfak6.jpeg",
      category: "mutfak",
      gallery: ["src/assets/mutfak/mutfak6.jpeg"],
    },
    {
      id: 54,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/mutfak/mutfak7.jpeg",
      category: "mutfak",
      gallery: ["src/assets/mutfak/mutfak7.jpeg"],
    },
    {
      id: 55,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/mutfak/mutfak8.jpeg",
      category: "mutfak",
      gallery: ["src/assets/mutfak/mutfak8.jpeg"],
    },
    {
      id: 56,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/mutfak/mutfak9.jpeg",
      category: "mutfak",
      gallery: ["src/assets/mutfak/mutfak9.jpeg"],
    },
    {
      id: 57,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/lavobo/lavabo.jpeg",
      category: "lavabo",
      gallery: ["src/assets/lavabo/lavabo.jpeg"],
    },
    {
      id: 58,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/lavobo/lavabo2.jpeg",
      category: "lavabo",
      gallery: ["src/assets/lavobo/lavabo2.jpeg"],
    },
    {
      id: 59,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/dekorasyon/dekorasyon.jpeg",
      category: "dekorasyon",
      gallery: ["src/assets/dekorasyon/dekorasyon.jpeg"],
    },
    {
      id: 60,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/dekorasyon/dekorasyon1.jpeg",
      category: "dekorasyon",
      gallery: ["src/assets/dekorasyon/dekorasyon1.jpeg"],
    },
    {
      id: 61,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/gunna/gunna.jpeg",
      category: "kurna",
      gallery: ["src/assets/gunna/gunnaa.jpeg"],
    },
    {
      id: 62,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/gunna/gunna1.jpeg",
      category: "kurna",
      gallery: ["src/assets/gunna/gunna1.jpeg"],
    },
    {
      id: 63,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/gunna/gunna2.jpeg",
      category: "kurna",
      gallery: ["src/assets/gunna/gunna2.jpeg"],
    },
    {
      id: 64,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/gunna/gunna3.jpeg",
      category: "kurna",
      gallery: ["src/assets/gunna/gunna3.jpeg"],
    },
    {
      id: 65,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/gunna/gunna4.jpeg",
      category: "kurna",
      gallery: ["src/assets/gunna/gunna4.jpeg"],
    },
    {
      id: 66,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/merdiven/merdiven.jpeg",
      category: "merdiven",
      gallery: ["src/assets/merdiven/merdiven.jpeg"],
    },
    {
      id: 67,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/gunna/gunna4.jpeg",
      category: "kurna",
      gallery: ["src/assets/gunna/gunna4.jpeg"],
    },
    {
      id: 68,
      title: "Mermer Bar Tezgahı",
      description: "Lüks mermer bar tezgahı.",
      image: "src/assets/gunna/gunna4.jpeg",
      category: "kurna",
      gallery: ["src/assets/gunna/gunna4.jpeg"],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          textAlign: "center",
          mb: 8,
          position: "relative",
          background:
            "linear-gradient(45deg, rgba(44, 62, 80, 0.05), rgba(44, 62, 80, 0.1))",
          py: 4,
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #FFA500, #FF8C00, #FFA500)",
            animation: "gradient 3s ease infinite",
            "@keyframes gradient": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          },
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
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -15,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              background:
                "linear-gradient(90deg, transparent, #FFA500, transparent)",
              borderRadius: "2px",
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": {
                "0%": { width: "100px" },
                "50%": { width: "150px" },
                "100%": { width: "100px" },
              },
            },
          }}
        >
          Ürünlerimiz
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            maxWidth: "800px",
            mx: "auto",
            mt: 3,
            position: "relative",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: "50%",
              width: "30px",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #FFA500, transparent)",
            },
            "&::before": {
              left: "20%",
              transform: "translateY(-50%)",
            },
            "&::after": {
              right: "20%",
              transform: "translateY(-50%)",
            },
          }}
        >
          Polat Mermer'in özenle seçilmiş ve işlenmiş mermer ürünleri
        </Typography>
      </Box>

      <Box
        sx={{
          mb: 6,
          width: "100%",
          position: "relative",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          padding: { xs: "20px 0", md: "28px 0" },
          overflow: "hidden",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        <IconButton
          onClick={() => {
            if (currentIndex > 0) {
              setSelectedCategory(categories[currentIndex - 1].value);
            }
          }}
          sx={{
            position: 'absolute',
            left: { xs: 8, md: 16 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: '2px solid',
            borderColor: 'primary.light',
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
            '&:hover': {
              backgroundColor: 'primary.main',
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
            },
            '& .MuiSvgIcon-root': {
              color: 'primary.main',
              transition: 'color 0.3s ease',
            },
            display: currentIndex <= 0 ? 'none' : 'flex',
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
        </IconButton>

        <IconButton
          onClick={() => {
            if (currentIndex < categories.length - 1) {
              setSelectedCategory(categories[currentIndex + 1].value);
            }
          }}
          sx={{
            position: 'absolute',
            right: { xs: 8, md: 16 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: '2px solid',
            borderColor: 'primary.light',
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
            '&:hover': {
              backgroundColor: 'primary.main',
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
            },
            '& .MuiSvgIcon-root': {
              color: 'primary.main',
              transition: 'color 0.3s ease',
            },
            display: currentIndex >= categories.length - 1 ? 'none' : 'flex',
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
        </IconButton>

        <Tabs
          ref={tabsRef}
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons={false}
          sx={{
            minHeight: { xs: "52px", md: "64px" },
            "& .MuiTabs-indicator": {
              backgroundColor: "primary.main",
              height: 4,
              borderRadius: "4px",
              transition: "all 0.3s ease",
            },
            "& .MuiTabs-flexContainer": {
              gap: { xs: 1.5, md: 2.5 },
              px: { xs: 8, md: 10 },
              justifyContent: { xs: "flex-start", md: "center" },
            },
            "& .MuiTab-root": {
              minHeight: { xs: "48px", md: "56px" },
              minWidth: "auto",
              padding: { xs: "12px 24px", md: "14px 32px" },
              borderRadius: "28px",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontWeight: 500,
              textTransform: "none",
              color: "text.secondary",
              transition: "all 0.3s ease",
              border: "2px solid transparent",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
              whiteSpace: "nowrap",
              flex: { xs: "0 0 auto", md: "0 0 auto" },
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.08)",
                color: "#1976d2",
                transform: "translateY(-2px)",
              },
              "&.Mui-selected": {
                color: "#1976d2",
                backgroundColor: "rgba(25, 118, 210, 0.12)",
                border: "2px solid",
                borderColor: "#1976d2",
                fontWeight: 600,
                transform: "translateY(-2px)",
              },
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            },
          }}
        >
          {categories.map((category) => (
            <Tab
              key={category.value}
              label={category.label}
              value={category.value}
              disableRipple
            />
          ))}
        </Tabs>
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
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                      image={product.image}
                      alt={product.title}
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
                        {product.title}
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
                          {product.description}
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
                          Ürün Numarası: {product.id}
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      onClick={() => handleOpenModal(product)}
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

      {/* Product Detail Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="product-detail-modal"
        aria-describedby="product-detail-description"
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
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "400px",
                      }}
                    >
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>

                    {/* Galeri Bölümü */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        overflowX: "auto",
                        padding: "8px 0",
                        "&::-webkit-scrollbar": {
                          height: "4px",
                        },
                        "&::-webkit-scrollbar-track": {
                          background: "#f1f1f1",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "#888",
                          borderRadius: "4px",
                        },
                      }}
                    >
                      {selectedProduct.gallery.map((image, index) => (
                        <Box
                          key={index}
                          sx={{
                            minWidth: "100px",
                            height: "80px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            overflow: "hidden",
                            border: "2px solid transparent",
                            "&:hover": {
                              borderColor: "primary.main",
                            },
                          }}
                          onClick={() => {
                            const newProduct = { ...selectedProduct, image };
                            setSelectedProduct(newProduct);
                          }}
                        >
                          <img
                            src={image}
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
                    Ürün Detayları
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProduct.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                    Özellikler
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Yüksek kalite mermer/granit malzeme
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Profesyonel işçilik
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Dayanıklı ve uzun ömürlü
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Özel tasarım seçenekleri
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

export default Products;
