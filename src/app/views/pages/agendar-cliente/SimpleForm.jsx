import { DatePicker, TimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import * as React from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
} from '@mui/material';
import { Span } from 'app/components/Typography';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import OutlinedInput from '@mui/material/OutlinedInput';
import dayjs from 'dayjs';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SimpleForm = () => {
  const theme = useTheme();
  const [state, setState] = useState({ date: new Date() });
  const [personName, setPersonName] = React.useState([]);
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const {
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    email,
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="username"
              id="standard-basic"
              value={username || ''}
              onChange={handleChange}
              errorMessages={['Este campo é obrigatório!']}
              label="Nome completo"
              validators={['required', 'minStringLength: 4', 'maxStringLength: 9']}
            />

            <TextField
              type="text"
              name="mobile"
              value={mobile || ''}
              label="Contato"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <TextField
              type="text"
              name="endereco"
              label="Endereço"
              onChange={handleChange}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Data de nascimento"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: '100%' }}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <FormControl sx={{ mb: 2, width: '620px' }}>
              <InputLabel id="demo-multiple-name-label">Serviço</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ mb: 2, width: '620px' }}>
              <InputLabel id="demo-multiple-name-label">Profissional</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Data do atendimento"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: '100%' }}
                  />
                )}
              />
              <TimePicker
                label="Horário do atendimento"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Salvar</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
