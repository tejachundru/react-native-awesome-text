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

You need to ensure that you've wrapped your app in the TypographyProvider, and pass in neccesary styles

```js

import { TypographyProvider } from 'react-native-awesome-text';

const style = {
    base: { fontSize: 14, color: 'black', fontFamily: 'Lato-Medium' }, // base style (common style that extends the variant style)
    h1: { color: 'red' }, // style for a variant (key is variant name)
    h2: { fontSize: 22, color: 'green' },
    h3: { fontSize: 20, color: 'blue' },
    h4: { fontSize: 18, color: 'purple' },
    h5: { fontSize: 16, color: 'orange' },
    h6: { fontSize: 14, color: 'yellow' },
};

<TypographyProvider typography={style}>
    <App>
</TypographyProvider>

```

Now you can import Typography and use it any where in the app

```js
// example usage

<Typography>Awesome</Typography>
<Typography variant="h1">Awesome</Typography>
<Typography variant="h2">Awesome</Typography>
<Typography variant="h3">Awesome</Typography>
<Typography variant="h4">Awesome</Typography>
<Typography variant="h5">Awesome</Typography>
<Typography
    variant="h6"
    style={{
    color: 'red',
    }}
>
    Awesome
</Typography>

```


![Screenshot 2022-03-09 at 6 18 44 AM](https://user-images.githubusercontent.com/31952669/157350948-91309c50-e1fd-4c95-b49d-cb23b1dad0a1.png)




## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
