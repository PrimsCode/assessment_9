### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router allows you to navigate betweent different components in a React Application and changing browerer URL endpoints, while making sure that the UI and the URL endpoints are in sync. 

- What is a single page application?
A single page application is where the website loads all the content when opened, then only rerender certain content when visiting a specific page without refreshing the website.

- What are some differences between client side and server side routing?
Server side routing is the backend especially when you are doing CRUL requests causing the whole document to refresh and served to the user. Client side routing is the front end where the route is handled by JavaScript.

- What are two ways of handling redirects with React Router? When would you use each?
Using the Redirect component and the History object. The Redirect component is great to redirect user to where they are supposed to be, while the history is good for get user to go to a spot after they complete an action.

- What are two different ways to handle page-not-found user experiences using React Router? 
One is to redirect user to go to a different page (specific 404 page) when they try to go to a page that does not exist, or redirect them to go back to home.

- How do you grab URL parameters from within a component using React Router?
You can use React Router's useParams Hook.

- What is context in React? When would you use it?
React's context is a data that is shared to the whole app. You can use it when you need a set of data that all different components in the React project might need access to.

- Describe some differences between class-based components and function components in React.
A class component requires you to extend from React. It creates a render function which returns a React element. A function component is a JavaScript function that accepts props as argument and returns a React element.

- What are some of the problems that hooks were designed to solve?
Hook allows you to use state and other React features without writing a class. Hook allows you to use functional component to render instead of class, which allows for less lines of code, wrappers and you can test it in isolation.