const disinfection = require('./src/disinfection');

const ajvDisinfection = (ajv, extraDisinfection) => {
	const extendedDisinfection = {
		...disinfection,
		...extraDisinfection
	};

  ajv.addKeyword('disinfect', {
		modifying: true,
		compile: function compile(schema) {
			let disinfect;

			if(typeof schema === 'string') {
				disinfect = extendedDisinfection[schema];
			}

			if(typeof schema === 'object') {
				disinfect = extendedDisinfection[schema.name];
			}

			if(typeof schema === 'function') {
				disinfect = schema;
			}

			if(!disinfect) {
				throw new TypeError('Unknown disinfection');
			}

			return (data, currentDataPath, parentDataObject, propertyName) => {
				if(!propertyName && propertyName !== 0) throw new TypeError('Data must be a property of an object');

				if(typeof schema === 'object') {
					parentDataObject[propertyName] = disinfect(data, schema);
				} else {
					parentDataObject[propertyName] = disinfect(data);
				}
        
				return true;
			};
		},
		errors: false
	});

	return ajv;
};

module.exports = ajvDisinfection;