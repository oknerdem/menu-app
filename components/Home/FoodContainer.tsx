/* eslint-disable @next/next/no-img-element */
/* i hate next/image ty. */

import styles from '@/styles/Home.module.css';

const Foods = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'Diner Double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `Cornhole echo park skateboard authentic crucifix neutra tilde. Fanny pack 3 wolf moon street art photo booth 8-bit pinterest.`,
  },
  {
    id: 4,
    title: 'Country Delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, post-ironic thundercats`,
  },
  {
    id: 5,
    title: 'Egg Attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'Oreo Dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'Bacon Overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
  },
  {
    id: 8,
    title: 'American Classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'Quarantine Buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const FoodContainer = ({ parent, selectedCategory }: any) => {
  return (
    <section className={styles.menu} ref={parent}>
      {Foods.map(foodItem => {
        const { id, title, category, price, img, desc } = foodItem;

        if (selectedCategory === 'all' || selectedCategory === category) {
          return (
            <article key={id} className={styles.menuItem}>
              <img
                src={img}
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
