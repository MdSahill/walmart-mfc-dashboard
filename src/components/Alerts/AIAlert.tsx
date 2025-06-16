import { Alert, Button } from '@mui/material';

const AIAlert = () => {
  return (
    <Alert
      severity="warning"
      action={
        <Button color="inherit" size="small">
          DISPATCH
        </Button>
      }
    >
      High demand for sunscreen in Zone 3!
    </Alert>
  );
};

export default AIAlert;