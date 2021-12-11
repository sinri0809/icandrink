const DrinksCard = ({alcohol}) => {
  return<div className="drinks-card">
    <div className="alcohol-visual">
      <h4>{alcohol.name}</h4>
      <img src={`https://sinri0809.github.io/icandrinkdata.github.io/alcohol-icon/${alcohol.file}`}
        alt="alcohol"
      />
    </div>
    <div className="right">
      <button className="material-icons add-card">local_bar</button>
    </div>
  </div>
}

export default DrinksCard;