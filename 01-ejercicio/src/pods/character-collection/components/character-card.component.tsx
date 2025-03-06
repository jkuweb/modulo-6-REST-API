
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterViewModel } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { linkRoutes } from '#core/router';

interface Props {
  character: CharacterViewModel
}

export const CharacterCard: React.FunctionComponent<Props> = ({ character }) => {

  return (
    <Card>
      <CardHeader
        title={character.name}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '100%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
          </Typography>
          <Link
            component={RouterLink}
            to={linkRoutes.character(String(character.id))}
          >
            Ver Perfil
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
