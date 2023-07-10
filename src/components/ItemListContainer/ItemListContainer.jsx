export const ItemListContainer = (greeting, imagen) => {
    return (
      <div>
        <img src={imagen} alt="producto" />
        <h3>{greeting}</h3>
      </div>
      );
  };