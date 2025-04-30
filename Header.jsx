import { AppBar, Toolbar, Typography } from '@mui/material';


/**
 * Компонент шапки сайта, использует AppBar (верхняя панель) и Toolbar (внутренний контейнер).
 */
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Моё React приложение
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
