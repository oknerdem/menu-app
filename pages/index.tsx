import { useState, useRef, useEffect } from 'react';
import autoAnimate from '@formkit/auto-animate';
import Header from '@/components/home/Header';
import ButtonContainer from '@/components/home/ButtonContainer';
import FoodContainer from '@/components/home/FoodContainer';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const title = 'MenuTastic';
  const content = 'MenuTastic is a restaurant menu app';
  const parent = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, []);

  const categoryHandler = (e: any) => {
    const category = e.target.innerText.toLowerCase();
    setSelectedCategory(category);
  };

  return (
    <>
      <Header title={title} content={content} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Menu
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
