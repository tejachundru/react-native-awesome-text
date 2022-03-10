[![npm version](https://badge.fury.io/js/react-native-awesome-text.svg)](https://badge.fury.io/js/react-native-awesome-text)
![LICENSE](https://img.shields.io/github/license/tejachundru/react-native-awesome-text?style=plastic)
![DOWNLOADS](https://img.shields.io/npm/dm/react-native-awesome-text)

# react-native-awesome-text

react native typography , inspired from [Mui Typography](https://mui.com/components/typography/)

## Installation

```sh
npm install react-native-awesome-text
```

## Usage

### TypographyProvider

You need to ensure that you've wrapped your app in the **TypographyProvider**, and pass in neccesary styles

**TypographyProvider** props

| prop       |                    type                     | required |
| ---------- | :-----------------------------------------: | -------: |
| typography | object of TextStyles,with base key provided |      yes |

```js

// App.js File
import { TypographyProvider } from 'react-native-awesome-text';

const style = {
    base: {
      // base can be used to declare common items , that applies for the all variantss like fontfamily,textColor etc
      fontSize: 16,
      color: 'black',
      fontFamily: 'Lato-Medium',
    },
    // Variants
    HeadLine: {
      fontSize: 30,
      color: '#111111',
      fontFamily: 'Lato-Bold',
    },
    SubHeadLine: {
      fontSize: 26,
      color: '#333333',
      fontFamily: 'Lato-Bold',
    },
    Title: {
      fontSize: 24,
      color: '#444444',
      fontFamily: 'Lato-Bold',
    },
    SubTitle: {
      fontSize: 22,
      color: '#666666',
      fontFamily: 'Lato-Bold',
    },
    Body1: {
      fontSize: 18,
      color: '#444444',
      fontFamily: 'Lato-Medium',
    },
    Body2: {
      fontSize: 16,
      color: '#555555',
      fontFamily: 'Lato-Medium',
    },
    Caption: {
      fontSize: 12,
      color: 'grey',
      fontFamily: 'Lato-Medium',
    },
};

<TypographyProvider typography={style}>
    <App>
</TypographyProvider>

```

### Typography

Now you can import **Typography** and use it any where in the app

| prop    |                           type                            | required |
| ------- | :-------------------------------------------------------: | -------: |
| variant | name of the variant(provided as key in Typography styles) |       no |

if variant prop is not used , it show base styles that are added.

```js
// usage

import { Typography } from 'react-native-awesome-text';


// if variant prop is not passed the base styles are displayed
<Typography>Headline</Typography>

//variants
<Typography variant="HeadLine">Headline</Typography>
<Typography variant="SubHeadLine">SubHeadline</Typography>
<Typography variant="Title">Title</Typography>
<Typography variant="SubTitle">SubTitle</Typography>
<Typography variant="Body1">Body1</Typography>
<Typography variant="Body2">Body2</Typography>
<Typography variant="Caption">Caption</Typography>

// you can pass in the other text props to it, refer:  https://reactnative.dev/docs/text
<Typography
    variant="SubTitle"
    style={{
        color: 'blue'
    }}
    >
    SubTitle
</Typography>

```

![Screenshot 2022-03-10 at 4 56 39 PM](https://user-images.githubusercontent.com/31952669/157656935-a88751a6-9f88-41b7-8bc6-3feaf3a1ac98.png)

### Example usages

**Simple example**

```js

import {TypographyProvider} from 'react-native-awesome-text'

const styles = {
    base: {
        fontFamily: 'Lato-Medium',
        color: 'black',
    },
    // variants
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: '10px',
  },
    subHeader: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: '5px',
    },
}

// in App.js
<TypographyProvider typography={styles}>
    <App>
</TypographyProvider>
```

usage in files

```js



import { Typography } from 'react-native-awesome-text';

...

<Typography variant="header">header</Typography>
<Typography variant="subHeader">subHeader</Typography>


```

**Style Extensions , you can also extend styles in the object from package like
[react-native-typography](https://github.com/hectahertz/react-native-typography)**

```js
import {TypographyProvider} from 'react-native-awesome-text'
import { material } from 'react-native-typography'


const styles = {
    base: {
        fontFamily: 'Lato-Medium',
        color: 'black',
    },
    // variants
    display1 : material.display1,
}

// in App.js
<TypographyProvider typography={styles}>
    <App>
</TypographyProvider>
```

usage in files

```js
import { Typography } from 'react-native-awesome-text';

...

<Typography variant="display1">display1</Typography>

```

**Dark Mode and Light Mode**

```js
import {TypographyProvider} from 'react-native-awesome-text'
import { material } from 'react-native-typography'


const lightModeStyles = {
    base: {
        fontFamily: 'Lato-Medium',
        color: 'black',
    },
    // variant use styles , from the react-native-typography material display1 style
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#000000',
    },
    subHeader: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#000000',
    },
}

const darkModeStyles = {
 base: {
        fontFamily: 'Lato-Medium',
        color: 'white',
    },
    // variant use styles , from the react-native-typography material display1 style
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    subHeader: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
}


// in App.js
// here isDarkMode is Boolean that signifies the theme
<TypographyProvider typography={isDarkMode ? darkModeStyles: lightModeStyles}>
    <App>
</TypographyProvider>

```

usage in files

```js
import { Typography } from 'react-native-awesome-text';

...
// header style adapts to darkModestyles and lightModeStyles of it
<Typography variant="header">header</Typography>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
