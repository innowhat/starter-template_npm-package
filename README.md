# npm-starter-template

---

##### 🚦 Build Status

![npm-starter-template workflow](https://github.com/innowhat/starter-template_npm-package/actions/workflows/ci.yml/badge.svg?branch=main)

![npm-starter-template workflow](https://github.com/innowhat/starter-template_npm-package/actions/workflows/release.yml/badge.svg)

![npm-starter-template workflow](https://github.com/innowhat/starter-template_npm-package/actions/workflows/s3-visualizer.yml/badge.svg?branch=main)

---

### The npm-starter-template lib

---

This project is ideal for developers looking for a lightweight, dependency-free library to enhance their JavaScript
coding experience. All utilities are optimized for performance and are designed to work seamlessly across different
environments, including browsers and Node.js.

### 🚀 Installation

You can easily install the Common JavaScript Utilities library via npm. Simply run the following command in your project
directory:

```sh
npm i @innowhat/npm-starter-template
```

Alternatively, if you're using Yarn, you can install it with:

```shell
yarn add @innowhat/npm-starter-template
```

Once installed, you can start using the utility functions in your JavaScript or TypeScript projects by importing the
necessary modules:

```ts
// Importing specific utilities
import { ArrayUtils, StringUtils } from 'co2m.js';

// Using a utility function
const sortedArray = ArrayUtils.sortInt([5, 2, 9, 1]);
// ==> [1, 2, 5, 9]
const distinctArray = ArrayUtils.distinct<number>([12, 2, 12, 9]);
// ==> [12, 2, 9]
const formattedString = StringUtils.trim('   Hello World!   ');
// ==> 'Hello World!'
const padString = StringUtils.leftPad('1', '0', 3);
// ==> '0001'
```

##### License

This project is licensed under the Apache License 2.0.

You are free to use, modify, and distribute this software in accordance with the terms of the license. For more details,
please refer to the LICENSE file included in the repository.
