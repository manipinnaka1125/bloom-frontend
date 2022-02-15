import { CircularProgress, Container } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

// Page to handle redirects from external tools. E.g. firebase auth emails redirect to /action-handler?mode=resetPassword&oobCode....
const ActionHandler: NextPage = () => {
  const router = useRouter();

  if (router.isReady) {
    let modeParam = router.query.mode;
    if (modeParam && modeParam === 'resetPassword') {
      router.replace(`/auth/reset-password?oobCode=${router.query.oobCode}`);
    } else {
      router.replace('/404');
    }
  }
  return (
    <Container
      sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}
    >
      <CircularProgress color="error" />
    </Container>
  );
};

export default ActionHandler;