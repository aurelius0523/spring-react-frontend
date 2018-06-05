# This is not the same md

This is the parent project that includes two submodules [spring-react-frontend](https://github.com/aurelius0523/spring-react-backend) and [spring-react-frontend](https://github.com/aurelius0523/spring-react-backend)

a Spring .war file that contains a .jar file from React frontend will be generated when `mvn clean install` is ran.

Full steps:

1.  `git clone https://github.com/aurelius0523/spring-react-module`
2.  `git submodule init`
3.  `git submodule update`
4.  `cd spring-react-module-parent`
5.  `mvn clean install -DskipTests`
