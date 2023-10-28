# Prueba de Testing con la libreria de Js JEST

1-Creamos un proyecto con

```
npm init -y 
```

se crea el package.json

2-instalamos la libreria de jest

```
npm i -D jest

```

3-iniciamos el jest con:

```
npx jest --init
```

nos saldrán avisos:

Would you like to use Jest when running "test" script in "package.json"?

```
y
```

Would you like to use Typescript for the configuration file?

```
n
```

Choose the test environment that will be used for testing

```
node
```

Do you want Jest to add coverage reports?

```
y
```

Which provider should be used to instrument code for coverage?

```
  v8
```

Automatically clear mock calls, instances, contexts and results before every test?

```
y
```

---

Terminando la configuración podemos ver que se crea un archivo: jest.config.js

---

En este ejemplo crearemos un programa llamado Fizzbuzz el cual consiste en mostrar si un numero es multiplo de 3 o de 5, si es multiplo de 3 musestre fizz y si es de 5 muestre buzz y si son ambos muestre fizzbuzz, de lo contrario se muestre el numero normal, ejemplo:

1=1

2=2

3=fizz

5=buzz

15=fizzbuzz

16=16

creamos el archivo principal y el de test

fizzbuzz.js  y fizzbuzz.test.js

---

Creamos una prueba de confirmación de configuración de la siguiente manera, en el archivo fizzbuzz.test.js:

```
describe("fizzbuzz", () => {
    test("test", () => {
        expect(true).toBe(true);
    });
});
```

corremos el comando

```
npm test
```

Nos saldrá la siguiente información:

```

> testing_jest-@1.0.0 test
> jest

 PASS  ./fizzbuzz.test.js                                                                                                               
  fizzbuzz
    √ test (3 ms)                                                                                                                       
                                                                                                                                        
----------|---------|----------|---------|---------|-------------------                                                                 
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                  
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 | 
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.525 s
```

como podemos observar: Tests: 1 passed, 1 total  tenemos todo correctamente.

y se crea una carpeta llamada "coverage".

---

ahora modificamos el package.json:

creamos un nuevo script:
"test:watch": "test --watchAll"
esto para que corra los test automaticamente y no sea necesario poner en todo momento "npm test"

---
