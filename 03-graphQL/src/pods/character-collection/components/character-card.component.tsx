
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { CharacterViewModel } from '../character-collection.vm';
import { Card, CardContent, CardHeader, CardMedia, Link, Typography } from '@mui/material';
import * as classes from './character-card.styles';

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
