
export const ItemListContainer = ({greeting, imagen}) => {
    return (
      <div className="container">
        <img src={imagen} alt="producto" style={{width: 1000 }}/>
        <h2>{greeting}</h2>
      </div>
      );
  };