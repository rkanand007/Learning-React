function Random() {
  let number = Math.random() * 10;
  return (
    <h1 style={{ backgroundColor: "#775264" }}>Random number is: {number}</h1>
  );
}

export default Random;
