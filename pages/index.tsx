import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import autoAnimate from '@formkit/auto-animate';

const Categories = ['All', 'Breakfast', 'Lunch', 'Shakes'];

const Foods = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './public/images/item-1.jpeg',
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

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all' as string);

  const categoryHandler = (e: any) => {
    const category = e.target.innerText.toLowerCase();
    setSelectedCategory(category);
  };

  const parent = useRef<any>(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, []);

  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Menu App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/food.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Our Menu
          <div className={styles.underline} />
        </h1>
        <div className={styles.btnContainer}>
          {Categories.map((category, index) => {
            return (
              <button
                type="button"
                className={`text-[#c59d5f] font-medium px-3 py-1 rounded hover:bg-[#c59d5f] hover:text-white duration-300 ${
                  selectedCategory === category.toLowerCase() &&
                  'bg-[#c59d5f] text-white'
                }`}
                key={index}
                onClick={categoryHandler}
              >
                {category}
              </button>
            );
          })}
        </div>

        <section className={styles.menu} ref={parent}>
          {Foods.map(foodItem => {
            const { id, title, category, price, img, desc } = foodItem;

            if (selectedCategory === 'all' || selectedCategory === category) {
              return (
                <article key={id} className={styles.menuItem}>
                  <Image
                    src={`/${img}`}
                    alt={title}
                    width={240}
                    height={200}
                    className={styles.photo}
                  />
                  <div className={styles.itemInfo}>
                    <header className="flex justify-between w-full font-bold border-b border-dotted border-black dark:border-white">
                      <h4 className="dark:text-zinc-200">{title}</h4>
                      <h4 className={styles.price}>${price}</h4>
                    </header>
                    <p className={styles.itemText}>{desc}</p>
                  </div>
                </article>
              );
            }
          })}
        </section>
      </main>
    </>
  );
}
