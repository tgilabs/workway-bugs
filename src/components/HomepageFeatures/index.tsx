import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'עדכון V1.1.0',
    Svg: require('@site/static/img/fixing-pana.svg').default,
    description: (
      <>
        שיפורים במערכות צ'אט, מדריך משתמש, שינוי שם משתמש, אישור עוגיות, ליבה ותמיכה באתר. טופלו גם בעיות שהועלו על ידי משתמשי הפלטפורמה.
      </>
    ),
    url: '/updates/v1-1-0'
  },
  {
    title: 'עדכון V1.2.0',
    Svg: require('@site/static/img/Update-bro.svg').default,
    description: (
      <>
        שיפורים במערכת הצ'אט, תיקון בעיות שהועלו על ידי משתמשים, תיקון בעיות עם תמיכת צ'אט ועוד.
      </>
    ),
    url: '/updates/v1-2-0'
  },
  {
    title: 'עדכון V1.3.0',
    Svg: require('@site/static/img/control-bro.svg').default,
    description: (
      <>
        שיפורים בכל מערכות הפלטפטרמה והשקת מערכת המינויים החדשה!
      </>
    ),
    url: '/updates/v1-3-0'
  },
  {
    title: 'עדכון V1.3.1',
    Svg: require('@site/static/img/server-amico.svg').default,
    description: (
      <>
        תיקון אבטחה!
      </>
    ),
    url: '/updates/v1-3-1'
  },
  {
    title: 'עדכון V1.4.0',
    Svg: require('@site/static/img/update-amico.svg').default,
    description: (
      <>
        מערכת תיק העבודות החדש, תיקוני סליקה בעזרת PayPal ועוד.
      </>
    ),
    url: '/updates/v1-3-0'
  },
  
];

function Feature({title, Svg, description, url}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <a href={url} className="text--center">
        <div>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">עדכונים אחרונים</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
