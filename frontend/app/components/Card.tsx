import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardComponent({ characterProps } : any) {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'green'; 
      case 'unknown':
        return 'gray'; 
      case 'Dead':
        return 'red'; 
      default:
        return 'black'; 
    }
  };

  const statusColor = getStatusColor(characterProps.status);

  const cardStyle = {
    border: '6px solid #C0DF40',
    maxWidth: 345,
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        image={characterProps.image}
        alt={characterProps.name}
        style={{ width: '100%', height: '100%' }}
      />
      <CardContent sx={{ backgroundColor: '#40B5CB' }}>
        <Typography variant="h5" component="div" sx={{ fontSize: 38, fontWeight: 'bold', color: 'white', fontFamily: 'Garamond', borderBottom: "3px solid " }}>
          {characterProps.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{margin: '4px'}}>
        <span style={{ color: 'white', fontFamily: 'Arial', fontSize: 16 }}>Species:</span>{' '}
        <span style={{ color: 'green', fontFamily: 'Arial', fontSize: 16 }}>{characterProps.species}</span>{' '}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{margin: '4px'}}>
          <span style={{ color: 'white', fontFamily: 'Arial', fontSize: 16 }}>Status:</span>{' '}
          <span style={{ color: statusColor, fontFamily: 'Arial', fontSize: 16 }}>{characterProps.status}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{margin: '4px'}}>
        <span style={{ color: 'white', fontFamily: 'Arial' , fontSize: 16}}>Origin:</span>{' '}
        <span style={{ color: 'yellow', fontFamily: 'Arial' , fontSize: 16}}>{characterProps.origin.name}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
