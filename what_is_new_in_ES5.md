# Object/array literal extensions
+ Getter accessors
+ Setter accessors
+ Trailing commas in object literals
+ Trailing commas in array literals
+ Reserved words as property names

# Object static methods
+ Object.create()
+ Object.defineProperty()
+ Object.defineProperties()
+ Object.getPrototypeOf()
+ Object.keys()
+ Object.seal()
+ Object.freeze()
+ Object.preventExtensions()
+ Object.isSealed()
+ Object.isFrozen()
+ Object.isExtensible()
+ Object.getOwnPropertyDescriptor()
+ Object.getOwnPropertyNames()

# Array methods
+ Array.isArray()
+ Array.prototype.indexOf()
+ Array.prototype.lastIndexOf()
+ Array.prototype.every()
+ Array.prototype.some()
+ Array.prototype.forEach()
+ Array.prototype.map()
+ Array.prototype.filter()
+ Array.prototype.reduce()
+ Array.prototype.reduceRight()

# String properties and methods
+ Property access on strings
+ String.prototype.trim()

# Date methods
+ Date.prototype.toISOString()
+ Date.now()
+ Date.prototype.toJSON()

# Function.prototype.bind()

# JSON

# Immutable globals
+ undefined
+ NaN
+ Infinity

# Miscellaneous
+ Array.prototype.sort: compareFn must be function or undefined
+ Array.prototype.sort: compareFn may be explicit undefined
+ Function.prototype.apply permits array-likes
+ parseInt ignores leading zeros
+ Function "prototype" property is non-enumerable
+ Arguments toStringTag is "Arguments"
+ Zero-width chars in identifiers
+ Unreserved words
+ Enumerable properties can be shadowed by non-enumerables
+ Thrown functions have proper "this" values

# Strict mode
+ reserved words
+ "this" is undefined in functions
+ "this" is not coerced to object in primitive methods
+ "this" is not coerced to object in primitive accessors
+ legacy octal is a SyntaxError
+ assignment to unresolvable identifiers is a ReferenceError
+ assignment to eval or arguments is a SyntaxError
+ assignment to non-writable properties is a TypeError
+ eval or arguments bindings is a SyntaxError
+ arguments.caller removed or is a TypeError
+ arguments.callee is a TypeError
+ (function(){}).caller and (function(){}).arguments is a TypeError
+ arguments is unmapped
+ eval() can't create bindings
+ deleting bindings is a SyntaxError
+ deleting non-configurable properties is a TypeError
+ "with" is a SyntaxError
+ repeated parameter names is a SyntaxError
+ function expressions with matching name and argument are valid


# es5-shim
+ Object.keys()
+ Array.prototype.every()
+ Array.prototype.filter()
+ Array.prototype.forEach()
+ Array.prototype.indexOf()
+ Array.prototype.lastIndexOf()
+ Array.prototype.map()
+ Array.prototype.some()
+ String.prototype.sort()
+ String.prototype.reduce()
+ String.prototype.reduceRight()
+ String.isArray()
+ Date.now()
+ Date.prototype.toJSON()
+ Function.prototype.bind()
