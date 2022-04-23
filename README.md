# ottery-ui
<p>
This is a react based ui framework following the ottery design schema. The objective of this software is to provide a simple and easy to use react library that is used by ottery and others who like it.
</p>

<p>
We felt that it was best that oui was not published or used through npm but instead manually added to a project. The reasoning behind this was that we wanted the code to be easily modifiable for your specific needs. For example. You can easily change the basic color theme by going into oui/styles/colors rather then having to deal with pesky and confusing api (yuck). Heck you can even replace a component entirely or switch the way it functions.
</p>

# getting started
Copy the file into your src folder in a react app and access components either from oui/index.js or directly from their own files. To run the app you need to make sure that you have some dependancies installed. They can be quickly installed using the following code:

```
npm config set legacy-peer-deps true
npm install react --save-dev
npm install react-dom --save-dev
npm install styled-components --save-dev
npm install react-icons --save-dev
npm install @mui/material @emotion/react @emotion/styled --save-dev
npm install @material-ui/styles --save-dev
npm install axios --save-dev
npm install --save-dev @babel/core @babel/cli @babel/preset-env npm install -save @babel/polyfill
npm install @material-ui/core --save-dev
```
Possible issues:
1. make sure you have no node modules installed in oui. These should be in your main aplication.

# headers
<h3>MainHeader</h3>
<img src="./docs/images/MainHeader.png" alt="image of MainHeader class"/>

<h4>Usage:</h4>

```html
import { MainHeader } from "{relativePath}/oui/index";
//or
import MainHeader from "{relativePath}/oui/headers/MainHeader";


<MainHeader
    left={<IconButton icon="back" />}
    main={<h3>HOME</h3>}
    right={<IconButton icon="info" />}
/>
```

<a>See docs for more details</a>
