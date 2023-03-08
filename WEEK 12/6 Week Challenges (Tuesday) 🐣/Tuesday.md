Understanding well what Node.JS is before starting to use it, will make it much easier for us to work with this powerful tool. In this exercise your task is to answer the following questions in your own words:

What is Node.JS?
What is NPM?
What problem does Node.JS solve (Is there any problem that can be solved with Node.JS 🤔)?
What is the V8 Javascript Engine?
Is Node.JS really necessary in the Development ecosystem?
Why not use PHP or Golang?
What is the difference between Node.JS and any other browser?
Are Node.JS and a browser the same?
What is NVM and Why is it useful for Node.JS developers?
It's important to share your opinion with the team and thus be able to form your own concept of Node.JS, so before answering the questions, meet or chat with at least two colleagues and discuss the answers as a group and refine your final answers.


What is Node.JS? 
    R// is an open source, cross-platform runtime environment for the server layer based on the JavaScript programming language

What is NPM?
    R// npm stands for Node Package Manager. It is a library and registry for JavaScript software packages. 
    npm also has command line tools to help you install the different packages and manage their dependencies.
    npm is free and trusted by over 11 million developers worldwide. It could be said that it is a big problem. They are open source and have become the center of Javascript code sharing. There are over a million packages available on npm.

What problem does Node.JS solve (Is there any problem that can be solved with Node.JS 🤔)?
    To make communication easier to manipulate.

What is the V8 Javascript Engine?
    V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome. V8 provides the runtime environment in which JavaScript executes. The DOM and the other Web Platform APIs are provided by the browser.

Is Node.JS really necessary in the Development ecosystem?
    Node.js is not absolutely necessary in the development ecosystem, but it has become an extremely popular and useful tool for many developers. Node.js is a runtime environment that allows developers to use JavaScript to build applications on the server-side, rather than just in the browser.

Why not use PHP or Golang?
    PHP and Go are two programming languages that have been around for decades, and these both have their strengths and weaknesses. Nowadays, entrepreneurs are looking for languages like PHP and Go to quickly build their web-based applications with minimal costs

What is the difference between Node.JS and any other browser?
    Unlike the browser where Javascript is sandboxed for your safety, node.js has full access to the system like any other native application. This means you can read and write directly to/from the file system, have unrestricted access to the network, can execute software and more.

Are Node.JS and a browser the same?
    Node.js is an open-source, cross-platform JavaScript runtime that is built on the V8 JavaScript engine used by Google Chrome. It enables developers to use JavaScript on the server-side to build scalable, high-performance web applications

What is NVM and Why is it useful for Node.JS developers?
    NVM (Node Version Manager) is a command-line tool that allows Node.js developers to manage multiple versions of Node.js on a single machine. With NVM, developers can easily switch between different versions of Node.js and install and manage different versions of NPM (Node Package Manager) as well.



What is a Javascript Module?
Why are Javascript Modules necessary?
What module standards are available in Node.JS?
What are the differences between ESModules and CommonJS modules?
Which types of modules exist in Node.JS?

What is a Javascript Module?
    A JavaScript module is a self-contained block of code that can be loaded, reused, and managed independently from other code. It is essentially a file containing JavaScript code that defines a particular functionality, and can be loaded into another script using the import statement.

Why are Javascript Modules necessary?
    Encapsulation: Modules allow developers to encapsulate their code and hide the implementation details, which reduces the risk of conflicts or unintended consequences with other parts of the code.

    Reusability: Modules can be reused in different parts of an application, making it easier to maintain and update the codebase.

    Dependency management: Modules can have their own dependencies, which can be automatically resolved and loaded when the module is loaded, reducing the need for manual dependency management.

    Performance: Modules can be loaded on demand, which reduces the amount of code that needs to be loaded when the application is initialized, improving performance.

    Security: Modules can limit the scope of the code, preventing malicious code from accessing or modifying other parts of the application.

What module standards are available in Node.JS?
    CommonJS: CommonJS is the default module system used in Node.js. It uses the require() function to load modules and the module.exports or exports object to export modules. CommonJS modules are loaded synchronously and are cached after the first load.

    ES modules (ESM): ES modules are a newer module system introduced in ECMAScript 6 (ES6). They use the import statement to load modules and the export keyword to export modules. ES modules are loaded asynchronously and can be used in both Node.js and browser environments. In Node.js, ESM can be enabled by using the --experimental-modules flag or by setting the "type": "module" field in the package.json file.

What are the differences between ESModules and CommonJS modules?
    Syntax: ESM uses the import statement to load modules, whereas CommonJS uses the require() function. Similarly, ESM uses the export keyword to export modules, whereas CommonJS uses the module.exports or exports object.

    Loading: ESM is loaded asynchronously, whereas CommonJS is loaded synchronously. This means that ESM is better suited for modern web development where performance and asynchronous loading are important.

    Scope: ESM has a separate scope for each module, which means that variables and functions defined in one module are not accessible in another module, unless explicitly exported and imported. In contrast, CommonJS has a shared scope, which means that variables and functions defined in one module are accessible in other modules, even if not exported.

Which types of modules exist in Node.JS?
    Built-in modules: Node.js comes with a set of built-in modules that provide functionality for common tasks such as file system operations, network communication, and data streams. These modules can be loaded into a Node.js application using the require() function, without the need for additional installation or configuration. Examples of built-in modules in Node.js include fs, http, path, and util.

    External modules: External modules are modules that are not built into Node.js and are typically created and maintained by third-party developers or the community. External modules can be installed using Node Package Manager (npm) and can be loaded into a Node.js application using the require() function. External modules provide additional functionality that may not be available in the built-in modules or are tailored for specific use cases. Examples of popular external modules in Node.js include express, lodash, mongoose, and socket.io.

