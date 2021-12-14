# ajv-disinfection
Sanitization using Ajv.

### Installation

Install the library with `npm install ajv-disinfection --save`

### How to use

```js
import Ajv from 'ajv'
import ajvDisinfection from 'ajv-disinfection'
const ajv = new Ajv();
ajvDisinfection(ajv);

const schema = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
      disinfect: 'html'
    }
  }
};

const data = {
  content: 'data to <b>disinfect</b>'
};

ajv.validate(schema, data);
```