import React from 'react';
import { Grid, Box } from '@mui/material';
import Input from '@mui/material/TextField';

// components
import Widget from '../../components/Widget';
import { Button, Typography } from '../../components/Wrappers';

const Validation = () => {
  const MIN_LENGTH = 10;
  const [requiredValue, setRequiredValue] = React.useState('');
  const [minLengthValue, setMinLengthValue] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const requiredError = isSubmitted && !requiredValue.trim();
  const minLengthError =
    minLengthValue.length > 0 && minLengthValue.length < MIN_LENGTH;

  const validate = () => {
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setRequiredValue('');
    setMinLengthValue('');
  };

  return (
    <div>
      <Grid container spacing={6}>
        <Grid size={12}>
          <Widget
            title='Dead simple validation'
            disableWidgetMenu
            inheritHeight
          >
            <Box sx={{ maxWidth: 860, width: '100%', mx: 'auto' }}>
              <Typography
                variant='body2'
                color='text'
                colorBrightness='secondary'
                style={{ marginBottom: 16 }}
              >
                Basic example with required and minimum-length validation.
              </Typography>

              <Grid container direction='column' spacing={2.5}>
                <Grid size={12}>
                  <Box
                    sx={{
                      p: 2.5,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      backgroundColor: 'background.default',
                    }}
                  >
                    <Grid container spacing={2} alignItems='center'>
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant='body1' weight='medium'>
                          Simple required
                        </Typography>
                        <Typography
                          variant='caption'
                          color='text'
                          colorBrightness='secondary'
                        >
                          Checked when you click Validate
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, md: 8 }}>
                        <Input
                          id='component-helper9'
                          style={{ width: '100%' }}
                          value={requiredValue}
                          onChange={(event) => setRequiredValue(event.target.value)}
                          error={requiredError}
                          helperText={requiredError ? 'This field is required' : ' '}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Box
                    sx={{
                      p: 2.5,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      backgroundColor: 'background.default',
                    }}
                  >
                    <Grid container spacing={2} alignItems='center'>
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant='body1' weight='medium'>
                          Min-length on change
                        </Typography>
                        <Typography
                          variant='caption'
                          color='text'
                          colorBrightness='secondary'
                        >
                          At least {MIN_LENGTH} characters
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, md: 8 }}>
                        <Input
                          id='component-helper10'
                          style={{ width: '100%' }}
                          value={minLengthValue}
                          onChange={(event) => setMinLengthValue(event.target.value)}
                          error={minLengthError}
                          helperText={
                            minLengthError
                              ? `At least ${MIN_LENGTH} characters (${minLengthValue.length}/${MIN_LENGTH})`
                              : ' '
                          }
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Box display='flex' justifyContent='flex-end' gap={1.5}>
                    <Button variant='outlined' onClick={resetForm}>
                      Reset
                    </Button>
                    <Button
                      variant='contained'
                      color='success'
                      onClick={validate}
                    >
                      Validate
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
};

export default Validation;
