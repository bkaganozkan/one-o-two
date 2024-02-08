import styles from './App.module.css';
import PreparedPage from './components/Page';

export function App() {

  return (
    <>
      <main className={styles.main}>
        <div className='bg-zinc-100 min-h-screen flex items-center'>
          <PreparedPage />
        </div>
      </main>
    </>
  );
}
