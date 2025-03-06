import React from 'react'
import { Link as RouterLink, generatePath } from 'react-router-dom'
import { EpisodeViewModel } from './episode.vm'
import { linkRoutes } from '#core/router'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Link } from '@mui/material'

interface Props {
  episode: EpisodeViewModel
}

export const Episode: React.FC<Props> = ({ episode }) => {
  return (
    <><TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#a2c8ed' }}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Air date</TableCell>
            <TableCell align="right">Episode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={episode.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {episode.id}
            </TableCell>
            <TableCell align="right">{episode.name}</TableCell>
            <TableCell align="right">{episode.airDate}</TableCell>
            <TableCell align="right">{episode.episode}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer><Link
      component={RouterLink}
      to={generatePath(linkRoutes.episodeCollection)}
      sx={{
        position: 'absolute',
        bottom: '30px',
        transform: 'translateX(50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '.3rem',
        backgroundColor: '#111827',
        padding: '1rem',
        borderRadius: '4px',
        border: '1px solid #111827',
        color: 'aliceblue',
        textDecoration: 'none',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          backgroundColor: 'aliceblue',
          color: '#111827',
          border: '1px solid #111827',
        },
      }}
    >
        Regresar
      </Link></>
  )
}
