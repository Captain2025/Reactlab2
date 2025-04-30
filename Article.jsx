import { Card, CardContent, Typography } from '@mui/material';

/**
 * Компонент для отображения статьи с заголовком и содержимым.
 * Использует карточку MUI для визуального оформления.
 */
const Article = ({ title, content }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Article;
