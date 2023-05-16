const Boton = () => {
  const clickHandler = (event) => {
    console.log("Me hicieron click");
    console.log(event);
  };

  return <button onClick={clickHandler}>click me</button>;
};

export default Boton;
