import LoginPage from '@/app/(public)/login/page';


export default {
  title: 'Component/Form/Login',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  }
}

export const Login = () => <LoginPage />;