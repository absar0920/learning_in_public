# passing states withoout the use of useContext Hook

- It happens by passing the variables through different components as props. Due to this the code becomes messy
- In this example the App.jsx passes the count and setCount to Component1.jsx using props.
- Component1 takes the input as props and pass them to button component using props. Button component actually uses these variables (count, setCount).
- This process is known as props digging or drilling.
- Better way to use this is by use of `useContext` Hook


# To use this project: 
- First Clone the repo
    ```
        git clone https://github.com/absar0920/learning_in_public/tree/master/Web_development/usingNode/React/useContextHook/without_context_hook
    ```
    ```
    npm install
    ```
    ```
    npm run dev
    ```
- head to your browser at http://localhost:5173
