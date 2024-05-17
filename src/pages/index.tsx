import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ backgroundImage: 'url(./path-to-your-background-image.jpg)' }}>
      <div className="container">
        <h1 className="header-title">{siteConfig.title}</h1>
        <h2 className="header-subtitle">כל מה שצריך לדעת על העדכונים החדשים</h2>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="כל העדכונים של פלטפורמת WorkWay במקום אחד">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
