# Higher-Order Component (HOC)

A Higher-Order Component (HOC) is a design pattern used in component-based frameworks like React. HOC refers to a function that takes a component as input and returns a new enhanced component with additional functionalities or props.

One of the main reasons for using HOC is to avoid code duplication and enable code reusability. With HOC, you can add extra features or behavior to a component without modifying the original source code of the component. In other words, HOC allows you to modify or extend the functionality of existing components without having to modify the components themselves.

HOCs are commonly used to fulfill common requirements that apply to multiple components. For example, if you have several components that require authentication, you can create an HOC to encapsulate the authentication logic. By applying this HOC to those components, you can easily add authentication functionality without having to rewrite the authentication code in each component.

Additionally, HOCs also provide a way to abstract common logic and cross-cutting concerns, such as logging, error handling, or data fetching. They promote code reusability, composition, and separation of concerns in component-based architectures.






