/* i hate next/image, ty. */
import Image from 'next/image';
import Foods from '@/data/Foods.json';
import styles from '@/styles/Home.module.css';

interface FoodContainerProps {
  parent: React.RefObject<HTMLDivElement>;
  selectedCategory: string;
}

const FoodContainer = ({ parent, selectedCategory }: FoodContainerProps) => {
  return (
    <section className={styles.menu} ref={parent}>
      {Foods.map(foodItem => {
        const { id, title, category, price, img, desc } = foodItem;
        if (selectedCategory === 'all' || selectedCategory === category) {
          return (
            <article key={id} className={styles.menuItem}>
              <Image
                src={`/${img}`}
                alt={title}
                title={title}
                width={240}
                height={200}
                className={styles.photo}
              />
              <div className={styles.infoFood}>
                <header className={styles.header}>
                  <h4 className={styles.titleFood}>{title}</h4>
                  <h4 className={styles.priceFood}>${price}</h4>
                </header>
                <p className={styles.descFood}>{desc}</p>
              </div>
            </article>
          );
        }
      })}
    </section>
  );
};

export default FoodContainer;
