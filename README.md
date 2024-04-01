# Varun UI Library

Varun UI Library is a lightweight React component for creating vertical carousels in your web applications. It allows you to easily implement a vertical carousel with customizable options such as offset radius, animation configuration, and gesture support.

## Installation

You can install Varun UI Library via npm:

```bash
npm install varun-ui-library
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import CarouselContainer from 'varun-ui-library';
import 'varun-ui-library/dist/style.css';

const slides = [
  { key: 1, content: 'Slide 1' },
  { key: 2, content: 'Slide 2' },
  { key: 3, content: 'Slide 3' },
  { key: 4, content: 'Slide 4' },
  { key: 5, content: 'Slide 5' },
  { key: 6, content: 'Slide 6' },
  // Add more slides here
];

ReactDOM.render(
  <CarouselContainer slides={slides} />,
  document.getElementById('root')
);
```

## Props

- `slides`: An array of slide objects with unique keys and content.
- `offsetRadius` (optional): The offset radius for the carousel (default is 2).
- `animationConfig` (optional): Configuration object for animation (default is { tension: 120, friction: 14 }).

## Examples

![Example Image](./dist/carousel1.jpg)


## Contributing

Contributions are welcome! If you encounter any bugs or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository] .

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README further to include additional information or instructions specific to your package.