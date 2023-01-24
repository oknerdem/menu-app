import styles from '@/styles/Home.module.css';

const Categories = ['All', 'Breakfast', 'Lunch', 'Shakes'];

interface ButtonContainerProps {
  selectedCategory: string;
  categoryHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonContainer = ({
  selectedCategory,
  categoryHandler,
}: ButtonContainerProps) => {
  return (
    <div className={styles.btnContainer}>
      {Categories.map((category, index) => {
        const categoryL = category.toLowerCase();
        return (
          <button
            type="button"
            className={`text-[#c59d5f] font-medium px-3 py-1 rounded hover:bg-[#c59d5f] hover:text-white duration-300 ${
              selectedCategory === categoryL && 'bg-[#c59d5f] text-white'
            }`}
            key={index}
            onClick={categoryHandler}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
