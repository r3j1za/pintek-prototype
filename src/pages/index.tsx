import scss from '@styles/landingPage.module.scss';
export default function Home() {
  return (
    <div className={scss.appWrapper}>
      <header>

      </header>
      <main>
        <h1>Welcome to My App</h1>
        <p>This is a simple Next.js app.</p>
      </main>
      <footer>
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}
