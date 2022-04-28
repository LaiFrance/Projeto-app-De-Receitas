import React, { useContext, useState, useEffect } from 'react';
import { DrinkContext } from '../context/Providers/DrinksProvider';
import BarraInferior from '../components/BarraInferior';
import CategoryBtn from '../components/CategoryBtn';
import { searchDrinkByCategory } from '../services/index';

export default function Drinks() {
  const [toggleState, setToggleState] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [prevCategory, setPrevCategory] = useState('');

  const { splicedDrinks, categories } = useContext(DrinkContext);

  useEffect(() => {
    setDrinks(splicedDrinks);
  }, [splicedDrinks]);

  const handleAllBtn = () => {
    setPrevCategory('');
    setDrinks(splicedDrinks);
    setToggleState(false);
  };

  const handleCategoryBtn = async (category) => {
    if (prevCategory !== category) {
      // Após ter clicado em um botão de categoria, e clicar direto em outro,
      // cai nessa verificação, que muda de uma categoria para a outra.
      // tendo como parametro a comparação da categoria atual e anterior.
      setPrevCategory(category);
      setToggleState(!toggleState);
      const drinksbyCategory = await searchDrinkByCategory(category);
      setDrinks(drinksbyCategory);
      return;
    }
    if (prevCategory === category) {
      // quando clicado em uma categoria, e depois clicar na mesma categoria,
      // irá cair nessa condição, para que renderize todas as categorias novamente.
      setPrevCategory('');
      setToggleState(!toggleState);
      setDrinks(splicedDrinks);
      return;
    }
    if (toggleState === false) {
      // Ao clicar pela primeira vez no botão da categoria,
      // cai primeiramente nessa verificação
      setPrevCategory(category);
      setToggleState(!toggleState);
      const drinksbyCategory = await searchDrinkByCategory(category);
      setDrinks(drinksbyCategory);
    }
  };

  return (
    <div>
      <h2>Drinks</h2>
      <CategoryBtn data={ categories } func={ handleCategoryBtn } all={ handleAllBtn } />
      {drinks.length > 0 ? drinks.map((drink, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt={ `imagem de ${drink.strDrink}` }
          />
          <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
        </div>
      )) : ''}
      <BarraInferior />
    </div>

  );
}
