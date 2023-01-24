import { useState, useRef, useEffect } from 'react';
import autoAnimate from '@formkit/auto-animate';
import Header from '@/components/Home/Header';
import ButtonContainer from '@/components/Home/ButtonContainer';
import FoodContainer from '@/components/Home/FoodContainer';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const title = 'MenuTastic';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, []);

  const categoryHandler = (e: any) => {
    const category = e.target.innerText.toLowerCase();
    setSelectedCategory(category);
  };

  const parent = useRef(null);

  return (
    <>
      <Header title={title} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Our Menu
          <div className={styles.underline} />
        </h1>
        <ButtonContainer
          selectedCategory={selectedCategory}
          categoryHandler={categoryHandler}
        />
        <FoodContainer parent={parent} selectedCategory={selectedCategory} />
      </main>
    </>
  );
}
