
import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import Main from './Form';
import { AppProvider } from '@shopify/polaris';

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;