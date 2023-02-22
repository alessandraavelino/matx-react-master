import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import SimpleForm from './SimpleForm';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const AgendarCliente = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Agendar Cliente', path: '/agendarcliente' }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Novo Agendamento">
          <SimpleForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AgendarCliente;
