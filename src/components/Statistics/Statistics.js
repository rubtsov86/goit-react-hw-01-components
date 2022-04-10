import s from './Statistics.module.css';
import PropTypes from 'prop-types';


export default function Statistics({arrayOfItems, title}) {

  return (
    <section className={s.statistics}>
      {title && (<h2 className={s.title}>{title }</h2>)}

      <ul className={s.statList}>
        {arrayOfItems.map(item =>
        {
          let color = getRandomHexColor();
          return <li className={s.item} key={item.id} style={{ backgroundColor: color }}> 
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>} 
         )} 
      </ul>
    </section>
  )}

Statistics.propTypes = {
  arrayOfItems: PropTypes.array.isRequired,
  title: PropTypes.string,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

