import { Box, Typography } from '@mui/material';
/**
 * Компонент футера с тёмным фоном и белым текстом.
 * Box — универсальный контейнер, аналог <div>, но с поддержкой sx.
 */
const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 2, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; 2025 Моя библиотека на React
      </Typography>
    </Box>
  );
};

export default Footer;
