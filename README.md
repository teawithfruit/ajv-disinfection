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
      disinfect: 'html' //boolean, date, email, escape, float, int, number, text, trim, regex
    }
  }
};

const data = {
  content: 'data to <b>disinfect</b>'
};

ajv.validate(schema, data);
```

### Advanced HTML sanitization
You have the ability to set options based on apostrophecms/sanitize-html.
This example just allow <u> tags.

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
      disinfect: { name: 'html', allowedTags: ['u'] }
    }
  }
};

const data = {
  content: 'data to <b>disinfect</b>'
};

ajv.validate(schema, data);
```

### RegEx sanitization
Also you have the ability to create regular expressions inside the schema.
This example will leave just the "123".

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
      disinfect: { name: 'regex', regex: '\\d+' }
    }
  }
};

const data = {
  content: 'data to <b>disinfect</b> 123'
};

ajv.validate(schema, data);
```