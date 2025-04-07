import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Misyonumuz
        </Typography>
        <Typography variant="body1" paragraph>
          1999 yılında kurulan Polat Mermer, kurulduğu günden bu yana
          müşterilerine kaliteli, dürüst ve disiplinli hizmet anlayışıyla çözüm
          sunmayı ilke edinmiştir. Yılların verdiği tecrübe ile sektöründe
          güvenilir bir marka haline gelen firmamız, müşteri memnuniyetini her
          zaman ön planda tutarak çalışmalarını sürdürmektedir. Polat Mermer
          olarak, kaliteyi bir standart değil, bir yaşam biçimi olarak görüyor;
          dürüstlük ve disiplin prensiplerinden asla ödün vermeden hizmet
          vermeye devam ediyoruz.
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          Vizyonumuz
        </Typography>
        <Typography variant="body1" paragraph>
          Mermer sektöründe kalite ve güven denince akla gelen öncü firmalardan biri olmak. Sürekli gelişen teknolojiyi ve yenilikleri takip ederek, hizmet kalitemizi her geçen gün artırmak ve ulusal çapta tanınan, örnek gösterilen bir marka haline gelmek en büyük hedefimizdir.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
