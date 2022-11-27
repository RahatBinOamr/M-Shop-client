import React from "react";
import img from "../assets/banner/Untitled-Diagram108.png";
import useTitle from "../Hook/UseTitle";
const Blog = () => {
  useTitle('blog')
  return (
    <div className="mb-10">
      <div className="mt-10">
        <h2 className="text-xl font-semibold">
          * What are the different ways to manage a state in a React
          application?
        </h2>
        <p className="font-semibold">The Four Kinds of React State to Manage</p>
        <p>
          <strong>Local (UI) state</strong> – Local state is data we manage in
          one or another component. Local state is most often managed in React
          using the useState hook. For example, local state would be needed to
          show or hide a modal component or to track values for a form
          component, such as form submission, when the form is disabled and the
          values of a form’s inputs. <br />
          <strong>Global (UI) state</strong> – Global state is data we manage
          across multiple components. Global state is necessary when we want to
          get and update data anywhere in our app, or in multiple components at
          least. A common example of global state is authenticated user state.
          If a user is logged into our app, it is necessary to get and change
          their data throughout our application. Sometimes state we think should
          be local might become global. <br />
          <strong>Server state</strong> – Data that comes from an external
          server that must be integrated with our UI state. Server state is a
          simple concept, but can be hard to manage alongside all of our local
          and global UI state. There are several pieces of state that must be
          managed every time you fetch or update data from an external server,
          including loading and error state. Fortunately there are tools such as
          SWR and React Query that make managing server state much easier.{" "}
          <br />
          <strong> URL state</strong> – Data that exists on our URLs, including
          the pathname and query parameters. URL state is often missing as a
          category of state, but it is an important one. In many cases, a lot of
          major parts of our application rely upon accessing URL state. Try to
          imagine building a blog without being able to fetch a post based off
          of its slug or id that is located in the URL! There are undoubtedly
          more pieces of state that we could identify, but these are the major
          categories worth focusing on for most applications you build.
        </p>
      </div>
      <div className="mt-7">
        <h2 className="text-xl font-semibold">
          * How does prototypical inheritance work?
        </h2>
        <p>
          Every object with its methods and properties contains an internal and
          hidden property known as [[Prototype]]. The Prototypal Inheritance is
          a feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf. Nowadays, in modern language, it is being set
          using __proto__.
        </p>
        <br />
        <img src={img} alt="" />
      </div>
      <div className="mt-7">
        <h2 className="text-xl font-semibold">
          * What is a unit test? Why should we write unit tests?
        </h2>
        <p>
          {" "}
          <strong>What is a unit test?</strong>
          <br />A unit test is a way of testing a unit - the smallest piece of
          code that can be logically isolated in a system. In most programming
          languages, that is a function, a subroutine, a method or property. The
          isolated part of the definition is important. In his book "Working
          Effectively with Legacy Code", author Michael Feathers states that
          such tests are not unit tests when they rely on external systems: “If
          it talks to the database, it talks across the network, it touches the
          file system, it requires system configuration, or it can't be run at
          the same time as any other test."
        </p>
        <p>
          {" "}
          <strong> Why should we write unit tests?</strong> <br />
          In his book, Real Time Business Systems, Robert V. Head says
          "Frequently, unit testing is considered part of the programming phase,
          with the person that wrote the program...unit testing". That isn't
          because programmers hold the secret sauce to unit testing, it's
          because it makes sense. The programmer that wrote the prod code will
          likely know how to access the parts that can be tested easily and how
          to mock objects that can't be accessed otherwise. It's a time trade
          off.
        </p>
      </div>
      <div className="mt-7">
        <h2 className="text-xl font-semibold"> * React vs. Angular vs. Vue?</h2>
        <p>
          <strong>Angular</strong>
          <br />
          Angular is the perfect choice for those who wish to create refined
          Single Page Applications (SPA). The framework’s two-way data binding,
          which automatically synchronizes the data between the database and the
          client and eases the development process, is another reason to prefer
          creating Angular applications. Angular is also a famously monolithic
          framework specializing in creating applications that combine different
          components into the same platform, rendering it an excellent choice
          for e-commerce sites. Another feature that separates Angular from its
          rivals is that it comes as a complete framework, meaning it doesn’t
          require additional libraries, unlike other frameworks, to do the job.
          While it’s free and open-source and can be used for both mobile and
          web apps, Angular works better for more complex applications
        </p>
        <p>
          <strong> React </strong>
          <br />
          With its easy-to-learn nature, this open-source JavaScript Framework
          can help you save a significant amount of time since it allows you to
          create reusable components, in other words, creating packages of code
          to use across the entire application. In addition, React may also be
          the right framework choice for you since it reigns supreme when it
          comes to search engine optimization (SEO). Other reasons for React to
          attain its top position are its declarative views such as Document
          Object Models (DOM), and the state-of-the-art React Hooks. While the
          former trait renders the code more readable and makes it easier to
          spot errors, the latter allows you to use certain React features
          without having to write a class. React’s migration friendliness and
          ability to perform seamless integration certainly don’t hurt its
          popularity in front-end development. The same can be said for
          JavaScript Syntax Extension (JSX), a unique React extension that makes
          the syntax almost identical to HTML, making writing React components
          more accessible. On the downside, React is a progressive framework
          that receives frequent updates primarily due to its large developer
          community. While this can seem like a good thing (and it sort of is)
          at first glance, you’d need to show extra effort if you want to keep
          up-to-date. Another side-effect of this, it is harder to find detailed
          documentation that includes the latest additions to React.
        </p>
        <p>
          <strong> Vue</strong>
          <br />
          Vue combines two essential aspects of its rivals: Angular’s two-way
          data binding and React’s virtual DOM. Free and open-source like the
          others, Vue distinguishes itself as a flexible and lightweight
          framework. Although Vue is the least popular framework of the trio,
          its popularity is on the rise thanks to its simple, fast, and
          straightforward design. Naturally a fitting framework for
          inexperienced developers, you can quickly improve your Vue skills with
          proper documentation and create well-organized interactive tours
          beneficial to user onboarding. One of the most significant downsides
          of Vue is that it has not joined the mainstream and paves the way for
          fewer job opportunities, though companies like Adobe, Alibaba, GitLab,
          and Grammarly deploy Vue for the front-end development of their apps.
        </p>
      </div>
    </div>
  );
};

export default Blog;
