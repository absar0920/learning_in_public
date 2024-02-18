# passing states withoout the use of useContext Hook

- It happens by passing the variables through different components as props. Due to this the code becomes messy
- In this example the App.jsx passes the count and setCount to Component1.jsx using props.
- Component1 takes the input as props and pass them to button component using props. Button component actually uses these variables (count, setCount).
- This process is known as props digging or drilling.
- Better way to use this is by use of `useContext` Hook


