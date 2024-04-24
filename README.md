# is-valid-email
This package is used to validate an email address.


## Installation

> `npm install @codexcentral/is-valid-email`

## Usage
### 1. Importing

```javascript
import isValidEmail from '@codexcentral/is-valid-email';
```

### 2. Call the function
  
  ```javascript
  console.log(isValidEmail('kai@domain.com'));            // true
  console.log(isValidEmail('_kai@domain.com'));           // false
  console.log(isValidEmail('email_with+symbol@web.com')); // true
  console.log(isValidEmail('email@sub-domain.com'));      // true
  console.log(isValidEmail('kai@do@main.com'));           // false
  console.log(isValidEmail('1234566.dsd?s@domain.com'));  // false
  console.log(isValidEmail('kai@domain..com'));           // false
  console.log(isValidEmail('kai.@domain.com'));           // false
  console.log(isValidEmail('kai@[1234].com'));            // false
  console.log(isValidEmail('test@_domain.com'));          // false
  console.log(isValidEmail('kai@domain.com'));            // true
  console.log(isValidEmail('very.common@example.com'));   // true
  console.log(isValidEmail('disposable.style.email.with+symbol@example.com'));  // true
  console.log(isValidEmail('other.email-with-dash@example.com'));  // true
  ```

__Note__: Let me know if you have any issues or suggestions.

### Response

The function will return a boolean value.

### Attributes

| Attribute | Type | Mandatory |
| ------ | ------ | ------ |
|  email | `string` | true |


# Credits
These code was written by [Roberto Silva Z.](https://www.linkedin.com/in/robertosilvazuniga/)