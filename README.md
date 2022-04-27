# REACT

React is a JavaScript library for building user interfaces.
**Key benefits of React**

1. **Speed**: React allows developers to utilize individual parts of their application on both the client-side and the server-side, which ultimately boosts the speed of the development process.
2. **Flexibility**: Compared to other frontend frameworks, the React code is easier to maintain and is flexible due to its modular structure. This flexibility, in turn, saves a huge amount of time and cost for businesses.
3. **Performance**: React JS was designed to provide high performance in mind. The core of the framework offers a virtual DOM program and server-side rendering, which makes complex apps run extremely fast
4. **Reusable Components**: One of the main benefits of using React JS is its potential to reuse components. Components are independent chunks of user interfaces. It saves time for developers as they don’t have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application.

**What is Virtual DOM?**
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called [reconciliation](https://reactjs.org/docs/reconciliation.html). This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app. Since “virtual DOM” is more of a pattern than a specific technology, people sometimes say it to mean different things. In the React world, the term “virtual DOM” is usually associated with [React elements](https://reactjs.org/docs/rendering-elements.html) since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

**Is the Shadow DOM the same as the Virtual DOM?**
No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

**What is “React Fiber”?**
Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.

**Babel**
Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).
It makes all the syntactic sugar added to JavaScript with the new ES6 specification, including classes, fat arrows, and multiline strings.
Documentation : [Babel](https://babeljs.io/)

**WebPack**
Webpack is a popular module bundling system built on top of Node.js. It can handle not only the combination and minification of JavaScript and CSS files but also other assets such as image files (sprinting) through the use of plugins. Webpack is the recommended bundling solution and should be preferred over Cassette or ASP.NET Bundling.
Documentation : [WebPack](https://webpack.js.org/)

**Creating React App**
![](https://lh6.googleusercontent.com/hk08Nnq-NlrRGY46gWP6Xk6dvAXPPl877mzOg5rT1Mjt64Bf9lfzAF4yUjJbt2KHcBVguM5Qc-oUkrn_AggXIubG3_HKtex6o7xAKvHBtO5CRztx-mOdwJmbyL4C2HJdmb4g3641)Create React Documentation : [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
Read about npx : [What is NPX](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

**Folder Structure**
**![](https://lh4.googleusercontent.com/-Elaoc-lSkKBcKs0n9t2_Nc_uI41CgPPiwalUbJNyTxlV1sd5Mv36b5Cq8HfTOSt8jiR87zyUo0evlqW4X21oLitFA4uYXKKMtMy_mK-1-pHPlAMmSbxzPzakRf5YxO-G8XDi6Ua)**
**node_module** : Contains all our dependencies
**package.json** : Contains name of all the dependencies used in the project
**public**: Contains index.html
**src** : Where we will create all component for our project

**First Component**
**![](https://lh6.googleusercontent.com/xV_442TCsbXTmjuPb2T1suetKiIcvi0-G1YRuJgzLwrWM6p5Oh9rFtTt6KBTPvTgctWc3I-hqhx7HMiHpUowskqD6wFdc0Kpjpip_iFKDJJ15e3vOI5RSZJg3orhvNti61dWKl_B)**

**JSX**
JSX stands for JavaScript XML. JSX allows us to write HTML in React and JSX makes it easier to write and add HTML in React.
Documentation : [JSX](https://reactjs.org/docs/introducing-jsx.html)
Without JSX
**![](https://lh3.googleusercontent.com/sG4d78ukfUEYhWu2p-XzLTcHNtvCU4Yp4V2vIJWErj-knuWgwzLgsJKqbsb8fStYp_fe6CfP2YVeS7VBzIMh9mUp6tdguTA7bNGzb1HdU2nxaR_rcaM3YS2LTNXWD--IpdAuiLvL)**
With JSX
**![](https://lh5.googleusercontent.com/3iyQtfHeByTEhhh0rgoBYBjq9jMwpK8ulEm8sxLqsbTSQTVZjKF4VexH4WZZzS9hn6Bq0o99nTU3e69e7PCRe_antqgCWDMEDUDG11MMo6KPcPE_vkeMsXQfwB0UN-p85ZbckN6q)**
JSX Rules
Always return JSX
Return single element
div / section / article or fragment
Use camelCase for html attribute
className instead of class
Close every element
Formatting

**React CSS**
There are three ways to add CSS in React Component

1. Inline CSS
   ![](https://lh4.googleusercontent.com/IRPjukKk8seM4s6gIpWibmJa4oGr3rhnyYHX-aEvxE2bx3WfpRdMv8XSPGoIpPY5mzFPDKi_AXdoEMnngIeiyDtuss8BSdKiVRKJq2e1f25QRPPiIJEXSmK9h9ilhvyxSj2rINif)
2. JavaScript Object
   ![](https://lh6.googleusercontent.com/MsIswzeA1QeWzXHaQCaJ13TDYKMFJrmeOAvB7IJsJYrqzhV4-OVu3FckIvNBoKQXmfxmTFPwphvUW7ZxblqZJwROETQ1g7v2sR2fgjMHBbghX2S08Dix0WcGI1zW76uHL1yTM-BE)
3. CSS Stylesheet
   ![](https://lh4.googleusercontent.com/laH_ixx5CxWDkEXaHfJ-hmixXtTc3F9o52YcuPkOznjEQ37LWJypo-hOkOTBsmFtDlQbspmAMQtPag27vJy4O7OscBLUnqm-cp_6OOfg-UEO8dBsEEBEFRBHcKv5YO_OZ5nx4lb1)
   Inline CSS has higher priority than imported CSS

**Props**
Props stand for properties, these are arguments passed into React components. Props are passed to components via HTML attributes. React Props are like function arguments in JavaScript and attributes in HTML. To send props into a component, use the same syntax as HTML attributes.
Sending Props
![](https://lh6.googleusercontent.com/rnUEnO7uhqNMFnpNi8mDRXdEjXjfPumyqxMbBA5q_fK2SEEBJ1yKwvN_objVPdse3vz6prFnurY2oMqlJn8__P_fefOkCKvq06G0TmFR5rPjKyY_pu9DHxwPQqB7kTBPut3I2coG)
Using Props
![](https://lh3.googleusercontent.com/ouXBMIWw_Vj4RsTS4KFLVOC_Ka629JlAZxQ1bTMC-NAkyYWXCGfbBnoZZ2EguDwEGHLrB1ZzRNo7iw2KqhQkVwAL4sPmRu6vW8WYDGG9FnmrcP99BP2a4Ath0BWoJmsZCD9fcqML)

**Props Destructuring**
![](https://lh4.googleusercontent.com/OamGDbcnp7elRbT0zdKARZ4xwAXyJLT66j7cf8XzFszmctfZgpD45fnyEy4QdQ3HsX5d17OBwFaAi3gRVd4DTMgqaRx7qPFk55BreVHD3kNkUv8DeJf9wK-hNsnNT3lyov-UOc2u)

![](https://lh5.googleusercontent.com/44gfT78_huhUTOAHWD2pAAFqCb23w9tRUchhcPJT4AZ_AiF6fr7zY9WhBAtgHXOT4TXkpU2mYk6Rd5nrmy0-fYsh1jXGj7iF3gEzc3FstgdGjeulIzzB9rYyXEDfbN0t1dHiMDHc)

**Props Children**
props.children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the [official documentation](https://reactjs.org/docs/composition-vs-inheritance.html#containment) as “boxes”.
![](https://lh6.googleusercontent.com/PcpASMKe49MuJp9sFh7Ok1GhB75ITgdn9Iyd50C7y5qqzS5wvBRqkVISq8A8TJfigarMO2wJ7DGWfXYvY6xq64O6jRX0O-4vyrdbda4VybIJv9KZfQMgkEONRamJMRhJ-ObU9iKm)
![](https://lh6.googleusercontent.com/fUnkOHktPDqbTJW0e-TN3DGgkD4z6UnsqL7jKvSu4v_diANL3RcAfGBWxyfar8lVOagmP2OYm8dMI4nVMlEAejzQjWAOy-DQgVL9VEj7ne8h9qMSuwNlDKj6TNfndslcgM9LWnkr)

**Rendering dynamic Component List**
![](https://lh4.googleusercontent.com/4ABq1_ybi9tOj5xq5Y03H0kA82IFp3-XxyQshKZ2Lf-fkeHWJpuCDvY8-E3xA5vKmHNOrJDgAM1kuCYlOjOYGpYn86wW9vdPkpfGOSEG7SgYrr-f3DO2pLnslmCAc59zTaFwZ-54)

**Events**
Reference Events
![](https://lh5.googleusercontent.com/O9fuRk_3TjHndqrrOP_4FQRlRha2FcFSwlkNqyaJzqdRsQq7Ks3E_5X63oIBRpYlCKTQQ2MDcXH4Hng-dqGslG-dpvx5IxgO564cJRitaba3OhUmQSBPZm3ZKg0dcMXcJ1mczeai)
Inline Events
![](https://lh6.googleusercontent.com/K1PxP9x8WADMHj4YgDk5wcpa8JVQhJXY4_J301cwORZ4UG8YGkfrB-Pzz-zLj-ztbxms6QCp_1YyIdTkS_iIOLfCjSLHQvJkW2tiouXhYLM9d5D7w0NxIcpZrELflgAydPiE3IdU)
Complex Events
When need to pass value to the function
![](https://lh6.googleusercontent.com/zaTdqIBfyjS4wJnZHudwW9Acj8iZQCiyJVIhhga7rOyWaG8IGa6cyYhBZjS8pb1MrHaG6M8ICIGMOWqDf2A5Zj_tK3e_209T925zWlByPSXCHHzM11wNaMNIITe_1PkbTAYa_rWS)

**Hook**
A Hook is a special function that lets you "hook into" React feature. If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.
Rules of Hooks
Only call Hooks at the top level
Don't call Hooks inside loops, conditions, or nested functions
Only Call Hooks from React Functions
Don't call Hooks from regular JS functions
Use eslint-plugin-react-hooks that enforce these two rules

**useState**
The React `useState` Hook allows us to track state in a function component. The state generally refers to data or properties that need to be tracked in an application. The `useState` Hook can be used to keep track of strings, numbers, Booleans, arrays, objects, and any combination of these.
[W3School](https://www.w3schools.com/react/react_usestate.asp)
_Refer to 3-usestateproj Project for code implementation_

**useEffect**
The `useEffect` Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. `useEffect` runs on every render. `useEffect` accepts two arguments. The second argument is optional. `useEffect(<function>, <dependency>)`
_useEffect Cleanup Function_
Just like the name implies, the `useEffect` cleanup is a function in the `useEffect` Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, `useEffect`also cleans up after itself using the cleanup function. The `useEffect` Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.
[W3School](https://www.w3schools.com/react/react_useeffect.asp)
_Refer to 4-useeffectproj Project for code implementation_

**Conditional Rendering React**
In React, you can conditionally render components.
There are several ways to do this.

1. if Statement
2. Logical && Operator
3. Ternary Operator

[W3School](https://www.w3schools.com/react/react_conditional_rendering.asp)
_Refer to 5-conditionalrendering Project for code implementation_

**Controlled and Uncontrolled Input**

_Uncontrolled Inputs_: Uncontrolled Inputs are the inputs that are not controlled by the React state and are handled by the [DOM](https://www.geeksforgeeks.org/dom-document-object-model/) (Document Object Model). So in order to access any value that has been entered we take the help of refs. For instance, if we want to add a file as an input, this cannot be controlled as this depends on the browser so this is an example of an uncontrolled input.

_Controlled Inputs:_ In React, Controlled Inputs are those in which form’s data is handled by the input's state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

[GeeksForGeeks](https://www.geeksforgeeks.org/controlled-vs-uncontrolled-components-in-reactjs/)
_Refer to 6-forms Project for code implementation_

**useRef**
The `useRef` Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. `useRef` does not cause re-render. `useRef()` only returns one item. It returns an Object called `current`.
[W3School](https://www.w3schools.com/react/react_useref.asp)
_Refer to 7-userefproj Project for code implementation_

**UseReducer**
The `useReducer` Hook is similar to the `useState` Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, `useReducer` may be useful. The `useReducer` Hook accepts two arguments.
`useReducer(<reducer>, <initialState>)`.The `reducer` function contains your custom state logic and the `initialState` can be a simple value but generally will contain an object. The `useReducer` Hook returns the current `state` and a `dispatch` method.
[W3School](https://www.w3schools.com/react/react_usereducer.asp)
_Refer to 8-usereducerproj Project for code implementation_

**Prop Drilling**
Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.
![](https://media.geeksforgeeks.org/wp-content/uploads/20210618101141/Untitled.png)
[GeeksForGeeks](https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/)
_Refer to 9-propdrilling Project for code implementation_

**useContext**
React Context is a way to manage a state globally. It can be used together with the `useState` Hook to share state between deeply nested components more easily than with `useState` alone.
[W3School](https://www.w3schools.com/react/react_usecontext.asp)
_Refer to 10-usecontextproj Project for code implementation_

**Custom Hooks**
Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: `useFetch`.
[W3School](https://www.w3schools.com/react/react_customhooks.asp)
_Refer to 11-customhooks Project for code implementation_

**PropTypes**
`PropTypes` is used for validating any data we are receiving from props. and setting up default values of the props.
[GeeksForGeeks](https://www.geeksforgeeks.org/reactjs-proptypes/)
_Refer to 12-proptypes Project for code implementation_

**Routing**
React Router is used to create routing in React Applications
[W3School](https://www.w3schools.com/react/react_router.asp)
_Refer to 13-router Project for code implementation_

**React Optimization**

_useMemo_: The React `useMemo` Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The `useMemo` Hook only runs when one of its dependencies update. The `useMemo` Hook can be used to keep expensive, resource intensive functions from needlessly running.
[W3School](https://www.w3schools.com/react/react_usememo.asp)

_useCallback_: The React `useCallback` Hook returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated. This allows us to isolate resource-intensive functions so that they will not automatically run on every render. The `useCallback` Hook only runs when one of its dependencies update. This can improve performance.
[W3School](https://www.w3schools.com/react/react_usecallback.asp)
_Refer to 14-reactoptimization Project for code implementation_

React Documentation: https://reactjs.org/
