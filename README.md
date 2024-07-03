# npx create-react-app robot-gallery --template typescript
### 1. If use json format in the project, below 2 configs must be in the `tsconfig.json`
    "moduleResolution": "node",
    "resolveJsonModule": true,
### 2. npm install typescript-plugin-css-modules --save-dev 
- Dev only, there will be "devDependcies" in the package.json
- This plugin is used for css intellisense
### 3. Props and State
Props is used for passing data to other components
- From parent component to current.
- It is immutable. Confirm data changing by comparing address.

State is used for passing data inner component
- State is private
- Call `setState()` to render data, data changing is asynchronous, can't depend on the previous value.
- State can be Initialized in the `constructor()` only, updated in other place

 ```
onClick={ () => {
    this.setState(
        (preState, preProps) => {return {count: preState.count + 1}}, 
        () => {console.log(count, this.state.count)}
    )
}};
```
### 4. Can't find keyword `this`
- Add `this.onClick() = this.onClick().bind(this)` in constructor()
- Use arrow method `onClick() = () =>{ this.xxx }`
### 5. React event `e: React.MouseEvent<HTMLButtonElement, MouseEvent>`
- `e.target`: the element which event happened on
- `e.currentTarget`: the element which event binding on

```
npm install react-icons
import {FiShoppingCart} from 'react-icons/fi'
<FiShoppingCart />
if ((e.target as HTMLElement).nodeName === "SPAN") {
    this.setState({ isOpen: !this.state.isOpen });
}
```
### 6. Life syscle
- componentDidMount
- shouldComponentUpdate
- componentDidUpdate
- componentWillUnmount

### 7. Hooks created in 2018, React 16.7
- Pure function: same results will be returned with same parameters
- Hooks can only be used in FunctionComponent
- Start with 'useXXX()'

### 8. Pass data
- Use props to pass data
- Fix props drilling, use context provider / customer\
  <appContext.Provider value={defaultContextValue}>\
  <appContext.Consumer>
- Use hooks, only works in FunctionComponent\
  export const appContext = React.createContext(defaultContextValue)\
  const value = useContext(appContext);

### 9. High Order Component
- const hoc = highOrder(wrappedComponent);
- Start with 'withXXX()'


![image](https://github.com/AntonyChen1/robot-gallery/assets/138751151/ac0cbbf0-c6b5-4a51-9a3d-5691ded64e12)




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
