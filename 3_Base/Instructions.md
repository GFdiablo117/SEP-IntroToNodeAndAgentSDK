# Base

## General

This project introduces some basic node principles/feature. It shows the usage of the node API which allows interacting with the file system, further it shows the usage of async functionality. Additional it shows how to wrap on code parts into modules for usages in other files.

The index file uses the node functionality to directly require a static JSON file and make it available as an object. And also used our small utility module which allows for asynchronous reading of a JSON file.

# Usage

This project contains none dependencies, therefore you are able to directly execute this sample using `$ yarn start`.
Afterwards, you should see the following output:

```Code
Content of the static referenced JSON: {"message":"I`m static"}
Content of the dynamic referenced JSON: {"message":"I`m dynamic"}
✨  Done in X.XXs.
```