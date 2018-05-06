# Frontend sub module

This project is intended to work as both a standalone react project that can also be included into a Maven project.

It currently builds its artefacts into `/target/classes/META-INF/resources/webjars` as per Maven standard but can easily be configured back into a standard React build by replacing `MAVEN_WEBJAR_PATH` in `webpack.config.js` with `DIST_DIR`
