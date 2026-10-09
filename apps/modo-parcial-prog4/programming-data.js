const PROGRAMMING_DATA = {
  "temas": [
    "Variables, alcance y expresiones",
    "El tipo `boolean`",
    "Los tipos `number` y `bigint`",
    "El tipo `string` y Unicode",
    "`undefined`, `null` y la ausencia de datos",
    "Conversión y coerción de tipos",
    "El tipo `symbol` y los protocolos de JavaScript",
    "Arrays y matrices",
    "Objetos, propiedades y referencias",
    "`Map`, `Set` y colecciones especializadas",
    "Estructuras de control",
    "Errores y excepciones",
    "Funciones",
    "Programación funcional y pipelines de datos",
    "Recursividad y árboles binarios",
    "Programación Asincrónica",
    "Gestión de archivos con Node.js",
    "Desarrollo web: del documento a una aplicación del clima",
    "Arrow.js: del contador al inventario",
    "Cómo consumir una API REST"
  ],
  "preguntas": [
    {
      "id": 1,
      "t": 0,
      "q": "¿Qué nombre de variable describe mejor la cantidad de días que faltan para un vencimiento?",
      "o": [
        "diasHastaVencimiento",
        "fechaDeVencimiento",
        "diasTranscurridosDelPlazo"
      ],
      "c": 0,
      "e": "Un buen nombre dice qué contiene la variable: una cantidad de días hasta un momento concreto. `fechaDeVencimiento` sugiere una fecha, no una cantidad, y `diasTranscurridosDelPlazo` cuenta en el sentido contrario."
    },
    {
      "id": 2,
      "t": 0,
      "q": "Después de ejecutar `let total;`, ¿qué valor tiene `total`?",
      "o": [
        "null",
        "ReferenceError",
        "undefined"
      ],
      "c": 2,
      "e": "`let` sin inicializador deja la variable en `undefined`. No vale `null` ni `0`, que habría que asignar a mano, y tampoco da ReferenceError, porque la línea de la declaración ya se ejecutó."
    },
    {
      "id": 3,
      "t": 0,
      "q": "¿Qué hace la sentencia `const iva = 0.21;`?",
      "o": [
        "Declara iva sin valor",
        "Declara e inicializa iva",
        "Reasigna una constante anterior"
      ],
      "c": 1,
      "e": "`const iva = 0.21;` hace dos cosas en una sentencia: declara el nombre y le da su valor inicial. Una constante siempre debe inicializarse en la misma línea en que se declara."
    },
    {
      "id": 4,
      "t": 0,
      "q": "Una variable acumula un total que cambia en cada paso de un cálculo. ¿Con qué palabra conviene declararla?",
      "o": [
        "const",
        "class",
        "let"
      ],
      "c": 2,
      "e": "Un acumulador cambia de valor en cada paso, así que necesita `let`. `const` impide reasignar la variable, y `class` declara una clase, no una variable."
    },
    {
      "id": 5,
      "t": 0,
      "q": "Después de `const pedido = { estado: \"nuevo\" };`, ¿qué operación está permitida?",
      "o": [
        "Reasignar `pedido` a un objeto nuevo",
        "Modificar `pedido.estado`, porque const fija solo la variable",
        "Nada: el objeto queda inmutable"
      ],
      "c": 1,
      "e": "`const` impide reasignar la variable `pedido`, pero no congela el objeto al que apunta. Por eso se pueden cambiar sus propiedades. Para impedirlo haría falta `Object.freeze`."
    },
    {
      "id": 6,
      "t": 0,
      "q": "Una variable se declara con `var` dentro de un `if`, y ese `if` está dentro de una función. ¿Hasta dónde llega el alcance de la variable?",
      "o": [
        "A toda la función",
        "Solo al bloque if",
        "Al módulo que contiene la función"
      ],
      "c": 0,
      "e": "`var` tiene alcance de función: ignora las llaves del `if` y queda visible en toda la función que lo contiene, pero no fuera de ella."
    },
    {
      "id": 7,
      "t": 0,
      "q": "¿Qué formas de declarar variables quedan limitadas al bloque de llaves de un `if`?",
      "o": [
        "let y const",
        "var y let",
        "var, let y const"
      ],
      "c": 0,
      "e": "`let` y `const` tienen alcance de bloque: solo existen entre las llaves donde se declaran. `var` ignora esas llaves."
    },
    {
      "id": 8,
      "t": 0,
      "q": "Fuera de un bloque existe una variable `estado` con el valor `\"global\"`. Dentro del bloque se declara `const estado = \"local\"`. ¿Qué valor tiene `estado` dentro del bloque?",
      "o": [
        "El estado global",
        "undefined",
        "El estado local"
      ],
      "c": 2,
      "e": "Dentro del bloque, la declaración local sombrea a la exterior con el mismo nombre. Se lee `\"local\"`; al salir del bloque vuelve a verse la variable global."
    },
    {
      "id": 9,
      "t": 0,
      "q": "Dentro de un bloque, se lee una variable antes de la línea `const` que la declara. ¿Qué ocurre?",
      "o": [
        "Se obtiene undefined",
        "Se produce ReferenceError",
        "Se obtiene su valor futuro"
      ],
      "c": 1,
      "e": "Entre el inicio del bloque y la línea de la declaración, una variable `let` o `const` está en la zona muerta temporal. Leerla ahí lanza ReferenceError en lugar de devolver `undefined`."
    },
    {
      "id": 10,
      "t": 0,
      "q": "¿Qué muestra en la consola este código?\n\n```js\nconsole.log(total);\nvar total = 100;\n```",
      "o": [
        "undefined",
        "100",
        "ReferenceError"
      ],
      "c": 0,
      "e": "La declaración con `var` se eleva al inicio del alcance, pero la asignación no. Cuando se ejecuta `console.log`, la variable existe y vale `undefined`. Con `let` o `const` sí habría ReferenceError."
    },
    {
      "id": 11,
      "t": 0,
      "q": "Una función exterior declara una variable local y devuelve una función interior que usa esa variable. ¿Qué pasa con la variable cuando la función exterior termina?",
      "o": [
        "El dato se libera al terminar la primera función",
        "La función devuelta recibe una copia congelada del dato",
        "La función devuelta sigue accediendo a esa variable local"
      ],
      "c": 2,
      "e": "Eso es una clausura: la función devuelta conserva acceso a las variables del alcance donde se creó, aunque la función exterior ya haya terminado. La variable no se libera mientras alguien pueda usarla."
    },
    {
      "id": 12,
      "t": 0,
      "q": "¿Cuál de estos fragmentos es una expresión, es decir, produce un valor?",
      "o": [
        "`if (edad >= 18) {}`",
        "`edad >= 18`",
        "`const edad = 18;`"
      ],
      "c": 1,
      "e": "Una expresión produce un valor: `edad >= 18` da `true` o `false`. `if` y `const` son sentencias: ejecutan una acción pero no producen un valor que se pueda usar."
    },
    {
      "id": 13,
      "t": 0,
      "q": "Después de ejecutar `let n = 5; const previo = n++;`, ¿cuánto valen `previo` y `n`?",
      "o": [
        "previo vale 5 y n vale 6",
        "previo vale 6 y n vale 6",
        "previo vale 5 y n vale 5"
      ],
      "c": 0,
      "e": "`n++` es un postincremento: primero devuelve el valor actual (5) y después suma 1. Por eso `previo` vale 5 y `n` queda en 6. Con `++n` ambos valdrían 6."
    },
    {
      "id": 14,
      "t": 1,
      "q": "¿Cuáles son los únicos valores del tipo boolean?",
      "o": [
        "1 y 0",
        "truthy y falsy",
        "true y false"
      ],
      "c": 2,
      "e": "El tipo boolean tiene exactamente dos valores: `true` y `false`. \"Truthy\" y \"falsy\" describen cómo se comportan otros valores en una condición, no son valores booleanos."
    },
    {
      "id": 15,
      "t": 1,
      "q": "¿Puede un string no vacío usarse directamente como condición en un `if`?",
      "o": [
        "No, se exige un booleano literal",
        "Sí, se interpreta como truthy",
        "Sí, pero se interpreta como false"
      ],
      "c": 1,
      "e": "Una condición acepta cualquier valor y lo interpreta como truthy o falsy. Todo string no vacío es truthy, incluso `\"false\"` o `\"0\"`."
    },
    {
      "id": 16,
      "t": 1,
      "q": "¿Cuál de estos valores es falsy?",
      "o": [
        "`\" \"`",
        "`\"false\"`",
        "`NaN`"
      ],
      "c": 2,
      "e": "Los valores falsy son `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined` y `NaN`. Un string con un espacio no está vacío, así que es truthy, igual que `\"false\"`."
    },
    {
      "id": 17,
      "t": 1,
      "q": "¿Qué devuelve `Boolean({})`?",
      "o": [
        "false",
        "true",
        "undefined"
      ],
      "c": 1,
      "e": "Todo objeto es truthy, aunque esté vacío. `Boolean({})` devuelve `true`. Para saber si un objeto no tiene propiedades hay que mirar, por ejemplo, `Object.keys(obj).length`."
    },
    {
      "id": 18,
      "t": 1,
      "q": "¿Qué devuelve `Boolean(\"false\")`?",
      "o": [
        "true, porque el string no está vacío",
        "false, porque el texto dice false",
        "Lanza TypeError, porque no es un booleano válido"
      ],
      "c": 0,
      "e": "`Boolean` no lee el contenido del texto: solo mira si el string está vacío. `\"false\"` tiene 5 caracteres, así que es truthy y da `true`."
    },
    {
      "id": 19,
      "t": 1,
      "q": "¿Qué expresión convierte `valor` a booleano de la forma más explícita y clara?",
      "o": [
        "`valor == true`",
        "`Boolean(valor)`",
        "`new Boolean(valor)`"
      ],
      "c": 1,
      "e": "`Boolean(valor)` expresa la intención sin ambigüedad. `valor == true` compara con coerción numérica y falla con muchos valores truthy, y `new Boolean(valor)` crea un objeto, que siempre es truthy."
    },
    {
      "id": 20,
      "t": 1,
      "q": "¿Qué devuelve `!0`?",
      "o": [
        "false",
        "0",
        "true"
      ],
      "c": 2,
      "e": "`!` convierte el valor a booleano y lo invierte. `0` es falsy, así que `!0` da `true`."
    },
    {
      "id": 21,
      "t": 1,
      "q": "¿Qué devuelve `\"\" && ejecutar()`?",
      "o": [
        "El string vacío sin llamar a ejecutar",
        "El resultado de ejecutar",
        "El booleano false después de llamar a ejecutar"
      ],
      "c": 0,
      "e": "`&&` devuelve el primer operando falsy sin evaluar el resto. `\"\"` es falsy, así que la expresión devuelve `\"\"` y `ejecutar()` nunca se llama. Esto se conoce como cortocircuito."
    },
    {
      "id": 22,
      "t": 1,
      "q": "¿Qué devuelve `\"Ana\" && 20`?",
      "o": [
        "\"Ana\"",
        "20",
        "true"
      ],
      "c": 1,
      "e": "`&&` no devuelve un booleano sino uno de sus operandos. Si el primero es truthy, devuelve el segundo. `\"Ana\"` es truthy, así que el resultado es `20`."
    },
    {
      "id": 23,
      "t": 1,
      "q": "¿Qué devuelve `0 || false || null`?",
      "o": [
        "false",
        "true",
        "null"
      ],
      "c": 2,
      "e": "`||` devuelve el primer operando truthy. Si no hay ninguno, devuelve el último. Aquí todos son falsy, así que devuelve `null`."
    },
    {
      "id": 24,
      "t": 1,
      "q": "¿Qué devuelve `0 ?? 1`?",
      "o": [
        "0",
        "1",
        "null"
      ],
      "c": 0,
      "e": "`??` solo reemplaza `null` y `undefined`. `0` es un valor válido para `??`, así que se conserva. Con `||` el resultado habría sido `1`."
    },
    {
      "id": 25,
      "t": 1,
      "q": "¿Qué devuelve `5 === \"5\"`?",
      "o": [
        "false",
        "true",
        "undefined"
      ],
      "c": 0,
      "e": "`===` compara sin convertir tipos. Un number y un string nunca son estrictamente iguales. Con `==` la comparación daría `true`."
    },
    {
      "id": 26,
      "t": 1,
      "q": "¿Qué expresión comprueba correctamente si `valor` es `NaN`?",
      "o": [
        "`valor === NaN`",
        "`typeof valor === \"NaN\"`",
        "`Number.isNaN(valor)`"
      ],
      "c": 2,
      "e": "`NaN` es el único valor que no es igual a sí mismo, así que `valor === NaN` siempre da `false`. `typeof NaN` es `\"number\"`. `Number.isNaN` es la forma fiable de detectarlo."
    },
    {
      "id": 27,
      "t": 1,
      "q": "¿Qué expresión equivale a `!(a && b)`?",
      "o": [
        "`!a && !b`",
        "`!a || !b`",
        "`a || b`"
      ],
      "c": 1,
      "e": "Es una ley de De Morgan: negar un AND equivale a hacer OR de las negaciones. `!(a && b)` es verdadero cuando al menos uno de los dos es falso."
    },
    {
      "id": 28,
      "t": 1,
      "q": "¿Cómo evalúa JavaScript la expresión `esAdmin || esEditor && estaActivo`?",
      "o": [
        "`(esAdmin || esEditor) && estaActivo`",
        "`esAdmin || (esEditor && estaActivo)`",
        "`!(esAdmin || esEditor) && estaActivo`"
      ],
      "c": 1,
      "e": "`&&` tiene más precedencia que `||`, así que se evalúa primero, como la multiplicación antes que la suma. Si se quiere otro orden, hay que poner paréntesis."
    },
    {
      "id": 29,
      "t": 2,
      "q": "¿Qué tipo representa tanto 42 como 3.5 en JavaScript?",
      "o": [
        "number",
        "bigint",
        "integer"
      ],
      "c": 0,
      "e": "JavaScript tiene un único tipo `number` para enteros y decimales. No existe un tipo `integer`, y `bigint` es otro tipo, para enteros arbitrariamente grandes con sufijo `n`."
    },
    {
      "id": 30,
      "t": 2,
      "q": "¿Qué valor decimal representa `0b101010`?",
      "o": [
        "101010",
        "52",
        "42"
      ],
      "c": 2,
      "e": "El prefijo `0b` indica binario. `101010` en base 2 es 32 + 8 + 2 = 42."
    },
    {
      "id": 31,
      "t": 2,
      "q": "¿Qué valor tiene `46_000_000`?",
      "o": [
        "46000",
        "SyntaxError",
        "46000000"
      ],
      "c": 2,
      "e": "El guion bajo es un separador numérico: solo mejora la lectura y no cambia el valor. `46_000_000` es 46000000 y no produce ningún error."
    },
    {
      "id": 32,
      "t": 2,
      "q": "¿Qué devuelve `-5 % 3` en JavaScript?",
      "o": [
        "-2",
        "1",
        "NaN"
      ],
      "c": 0,
      "e": "En JavaScript, `%` es el resto de la división y toma el signo del dividendo. `-5 % 3` da `-2`. El módulo matemático daría 1, pero `%` no es un módulo."
    },
    {
      "id": 33,
      "t": 2,
      "q": "¿Qué resultado da `1 / 0` en JavaScript?",
      "o": [
        "Una excepción de división",
        "Infinity",
        "NaN"
      ],
      "c": 1,
      "e": "Con number, dividir un valor positivo por cero da `Infinity`, sin excepción. Solo con bigint la división por cero lanza RangeError."
    },
    {
      "id": 34,
      "t": 2,
      "q": "¿Qué produce `0 / 0`?",
      "o": [
        "Infinity",
        "NaN",
        "0"
      ],
      "c": 1,
      "e": "`0 / 0` no tiene un resultado definido, así que da `NaN`. Un positivo dividido por cero, en cambio, da `Infinity`."
    },
    {
      "id": 35,
      "t": 2,
      "q": "¿Por qué `Number.isNaN(\"hola\")` es más confiable que `isNaN(\"hola\")` para detectar `NaN`?",
      "o": [
        "Convierte el string a número antes de comprobar",
        "Devuelve true para cualquier string no numérico",
        "No convierte el string a número antes de comprobar si es NaN"
      ],
      "c": 2,
      "e": "La función global `isNaN` primero convierte a número: `\"hola\"` se vuelve `NaN` y da `true`. `Number.isNaN` no convierte, así que solo da `true` si el valor ya es `NaN`."
    },
    {
      "id": 36,
      "t": 2,
      "q": "¿Qué devuelve `Object.is(0, -0)`?",
      "o": [
        "false",
        "true",
        "TypeError"
      ],
      "c": 0,
      "e": "`0 === -0` es `true`, pero `Object.is` distingue ambos ceros y devuelve `false`. También es la única comparación en que `NaN` es igual a `NaN`."
    },
    {
      "id": 37,
      "t": 2,
      "q": "¿Por qué `0.1 + 0.2` puede no ser exactamente 0.3?",
      "o": [
        "Number guarda los decimales con solo dos cifras",
        "El motor redondea el resultado a 16 decimales",
        "Muchos decimales no tienen representación exacta en binario"
      ],
      "c": 2,
      "e": "Los números se guardan en binario. Valores como 0,1 o 0,2 no tienen una representación binaria finita, igual que 1/3 en decimal, y se guardan aproximados. La suma arrastra ese error."
    },
    {
      "id": 38,
      "t": 2,
      "q": "¿Qué comprueba `Number.isSafeInteger(valor)`?",
      "o": [
        "Que es un número finito y no NaN",
        "Que es un entero representable sin pérdida",
        "Que el valor entra en un entero de 32 bits"
      ],
      "c": 1,
      "e": "Un number representa enteros exactos solo hasta 2^53 − 1. `Number.isSafeInteger` comprueba que el valor sea entero y esté dentro de ese rango, donde no hay pérdida de precisión."
    },
    {
      "id": 39,
      "t": 2,
      "q": "¿Qué devuelve `Number(\"42px\")`?",
      "o": [
        "NaN",
        "42",
        "\"42\""
      ],
      "c": 0,
      "e": "`Number` exige que todo el texto sea un número válido. `\"42px\"` contiene letras, así que el resultado es `NaN`."
    },
    {
      "id": 40,
      "t": 2,
      "q": "¿Qué devuelve `parseInt(\"42px\", 10)`?",
      "o": [
        "NaN",
        "42",
        "0"
      ],
      "c": 1,
      "e": "`parseInt` lee dígitos desde el principio y se detiene en el primer carácter que no entiende. Devuelve `42` e ignora `\"px\"`."
    },
    {
      "id": 41,
      "t": 2,
      "q": "¿Qué valores dan `Math.floor(-3.2)` y `Math.trunc(-3.2)`?",
      "o": [
        "-3 y -4",
        "-3 y -3",
        "-4 y -3"
      ],
      "c": 2,
      "e": "`Math.floor` redondea hacia abajo (hacia menos infinito), así que −3,2 pasa a −4. `Math.trunc` quita los decimales (hacia cero), así que queda −3. Solo difieren con negativos."
    },
    {
      "id": 42,
      "t": 2,
      "q": "¿Qué tipo devuelve `(12.5).toFixed(2)`?",
      "o": [
        "string",
        "number",
        "bigint"
      ],
      "c": 0,
      "e": "`toFixed` devuelve un string formateado, no un number. `(12.5).toFixed(2)` es `\"12.50\"`. Para calcular con él habría que volver a convertirlo."
    },
    {
      "id": 43,
      "t": 2,
      "q": "¿Qué ocurre con `10n + 2`?",
      "o": [
        "Devuelve 12n",
        "Devuelve 12 como number",
        "Lanza TypeError"
      ],
      "c": 2,
      "e": "JavaScript no mezcla bigint y number en una operación aritmética: lanza TypeError. Hay que convertir uno de los dos explícitamente, por ejemplo `10n + 2n`."
    },
    {
      "id": 44,
      "t": 3,
      "q": "¿Qué comillas permiten insertar expresiones dentro de una cadena?",
      "o": [
        "Las comillas invertidas, con la forma ${expresión}",
        "Las comillas simples y dobles",
        "Las comillas dobles con ${}"
      ],
      "c": 0,
      "e": "Solo las plantillas literales, escritas con comillas invertidas, interpretan `${expresión}`. Con comillas simples o dobles, `${...}` es texto común."
    },
    {
      "id": 45,
      "t": 3,
      "q": "¿Qué representa `\\n` dentro de una cadena JavaScript?",
      "o": [
        "Una barra invertida seguida de una n",
        "Un salto de línea",
        "El final de la cadena"
      ],
      "c": 1,
      "e": "`\\n` es una secuencia de escape: dentro de la cadena representa un único carácter, el salto de línea, no una barra seguida de una n."
    },
    {
      "id": 46,
      "t": 3,
      "q": "Después de `const s = \"casa\"; s[0] = \"C\";`, ¿qué valor tiene `s`?",
      "o": [
        "\"Casa\"",
        "\"casa\"",
        "\"C\""
      ],
      "c": 1,
      "e": "Los strings son inmutables. Asignar a `s[0]` no tiene efecto (en modo estricto lanza TypeError) y `s` sigue siendo `\"casa\"`."
    },
    {
      "id": 47,
      "t": 3,
      "q": "Si se llama a `original.trim()` sin guardar el resultado, ¿qué pasa con el string `original`?",
      "o": [
        "Pierde los espacios en el mismo string",
        "Cambia solo si tenía espacios en los extremos",
        "No cambia; trim devuelve una cadena nueva sin los espacios"
      ],
      "c": 2,
      "e": "Ningún método de string modifica el original, porque los strings son inmutables. `trim` devuelve una cadena nueva; hay que guardarla, por ejemplo `texto = texto.trim()`."
    },
    {
      "id": 48,
      "t": 3,
      "q": "¿Qué devuelve `\"JavaScript\".at(-1)`?",
      "o": [
        "\"t\"",
        "\"J\"",
        "undefined"
      ],
      "c": 0,
      "e": "`at` acepta índices negativos que cuentan desde el final. `-1` es el último carácter, `\"t\"`."
    },
    {
      "id": 49,
      "t": 3,
      "q": "¿Qué devuelve `\"JavaScript\".slice(0, 4)`?",
      "o": [
        "\"JavaS\"",
        "\"Java\"",
        "\"Script\""
      ],
      "c": 1,
      "e": "`slice(0, 4)` toma desde el índice 0 hasta el 4 sin incluirlo, es decir, los caracteres 0, 1, 2 y 3: `\"Java\"`."
    },
    {
      "id": 50,
      "t": 3,
      "q": "¿Qué método de string responde directamente si una frase contiene un texto dado?",
      "o": [
        "split",
        "startsWith",
        "includes"
      ],
      "c": 2,
      "e": "`includes` responde exactamente esa pregunta y devuelve un booleano. `startsWith` solo mira el comienzo, y `split` divide la cadena."
    },
    {
      "id": 51,
      "t": 3,
      "q": "¿Qué devuelve `\"uno dos uno\".replaceAll(\"uno\", \"1\")`?",
      "o": [
        "\"1 dos 1\"",
        "\"1 dos uno\"",
        "\"uno dos 1\""
      ],
      "c": 0,
      "e": "`replaceAll` reemplaza todas las apariciones. `replace` con un string reemplaza solo la primera."
    },
    {
      "id": 52,
      "t": 3,
      "q": "¿Qué devuelve `\"a,b,c\".split(\",\")`?",
      "o": [
        "La cadena \"abc\"",
        "Un array con una sola cadena \"a,b,c\"",
        "Un array con \"a\", \"b\" y \"c\""
      ],
      "c": 2,
      "e": "`split` divide la cadena en cada separador y devuelve un array con los trozos: `[\"a\", \"b\", \"c\"]`."
    },
    {
      "id": 53,
      "t": 3,
      "q": "¿Qué expresión convierte `valor` en texto sin fallar aunque `valor` sea `null`?",
      "o": [
        "`valor.toString()`",
        "`String(valor)`",
        "`valor.join()`"
      ],
      "c": 1,
      "e": "`String(valor)` funciona con cualquier valor, incluidos `null` y `undefined`. `valor.toString()` lanza TypeError con `null`, porque `null` no tiene métodos."
    },
    {
      "id": 54,
      "t": 3,
      "q": "¿Qué valor tiene `\"😀\".length`?",
      "o": [
        "2 unidades UTF-16",
        "1, porque es un solo carácter visible",
        "4 puntos de código"
      ],
      "c": 0,
      "e": "`length` cuenta unidades de código UTF-16, no caracteres visibles. Los emoji están fuera del plano básico y ocupan 2 unidades (un par sustituto)."
    },
    {
      "id": 55,
      "t": 3,
      "q": "¿Qué produce `Array.from(\"A😀B\")`?",
      "o": [
        "[\"A\", dos mitades de emoji, \"B\"]",
        "[\"A😀B\"]",
        "[\"A\", \"😀\", \"B\"]"
      ],
      "c": 2,
      "e": "`Array.from` recorre un string por puntos de código, no por unidades UTF-16. Por eso el emoji queda entero en un solo elemento."
    },
    {
      "id": 56,
      "t": 3,
      "q": "¿Qué herramienta divide un texto en caracteres tal como los ve una persona (grafemas), incluidos los emoji compuestos?",
      "o": [
        "Array.from sobre la cadena",
        "Intl.Segmenter",
        "normalize con la forma NFC"
      ],
      "c": 1,
      "e": "`Intl.Segmenter` con granularidad `\"grapheme\"` divide el texto como lo percibe una persona, incluidos emoji compuestos y letras con acentos combinados. `Array.from` separa puntos de código, que no siempre coinciden con lo que se ve."
    },
    {
      "id": 57,
      "t": 3,
      "q": "Dos cadenas se ven iguales, pero están escritas con distintas secuencias Unicode, por ejemplo «é» como un solo carácter o como «e» más un acento. ¿Qué hay que hacer para poder compararlas?",
      "o": [
        "Normalizar ambas a NFC",
        "Aplicar trim a una sola",
        "Comparar sus longitudes UTF-16"
      ],
      "c": 0,
      "e": "Una misma letra acentuada puede escribirse como un solo punto de código o como letra más acento combinado. `normalize(\"NFC\")` lleva ambas a la misma forma y así se pueden comparar."
    },
    {
      "id": 58,
      "t": 3,
      "q": "¿Qué herramienta ordena alfabéticamente nombres en español respetando la ñ y los acentos?",
      "o": [
        "Intl.Collator configurado para es",
        "El operador menor que sin configuración",
        "Comparar la longitud de los strings"
      ],
      "c": 0,
      "e": "`Intl.Collator` ordena según las reglas del idioma, por ejemplo la ñ y los acentos del español. `<` compara códigos numéricos de caracteres y ordena mal esos casos."
    },
    {
      "id": 59,
      "t": 4,
      "q": "¿Qué valor tiene `pendiente` tras `let pendiente;`?",
      "o": [
        "null",
        "`\"\"` (cadena vacía)",
        "undefined"
      ],
      "c": 2,
      "e": "Una variable declarada con `let` y sin valor queda en `undefined`. `null` y `\"\"` son valores que hay que asignar explícitamente."
    },
    {
      "id": 60,
      "t": 4,
      "q": "¿Qué valor se asigna a propósito para indicar que un dato no existe o no tiene valor?",
      "o": [
        "undefined",
        "null",
        "NaN"
      ],
      "c": 1,
      "e": "`null` expresa una ausencia elegida a propósito por el programa. `undefined` suele indicar que algo nunca se asignó."
    },
    {
      "id": 61,
      "t": 4,
      "q": "¿Qué devuelve `typeof null`?",
      "o": [
        "\"null\"",
        "\"undefined\"",
        "\"object\""
      ],
      "c": 2,
      "e": "`typeof null` devuelve `\"object\"` por un error histórico de las primeras versiones de JavaScript que nunca se corrigió para no romper código existente. Para detectar `null` hay que usar `valor === null`."
    },
    {
      "id": 62,
      "t": 4,
      "q": "En un programa, `cantidad` puede valer 0 legítimamente. ¿Por qué `if (!cantidad)` no sirve para detectar que falta el dato?",
      "o": [
        "Porque también entra cuando cantidad vale 0, que es válido",
        "Porque no entra cuando cantidad es undefined",
        "Porque `!cantidad` lanza error si falta el dato"
      ],
      "c": 0,
      "e": "`!cantidad` es verdadero para cualquier valor falsy, y `0` es falsy. Si 0 es válido, la condición lo trata como si faltara. Conviene preguntar `cantidad == null` o usar `??`."
    },
    {
      "id": 63,
      "t": 4,
      "q": "¿Qué devuelve `false ?? true`?",
      "o": [
        "true",
        "false",
        "undefined"
      ],
      "c": 1,
      "e": "`??` solo reemplaza `null` y `undefined`. `false` es un valor presente, así que se conserva."
    },
    {
      "id": 64,
      "t": 4,
      "q": "Si `usuario` es null, ¿qué produce `usuario?.direccion?.ciudad`?",
      "o": [
        "null",
        "undefined",
        "TypeError"
      ],
      "c": 1,
      "e": "El encadenamiento opcional `?.` se detiene al encontrar `null` o `undefined` y devuelve `undefined`, sin lanzar error. Sin `?.`, leer `.direccion` de `null` lanzaría TypeError."
    },
    {
      "id": 65,
      "t": 4,
      "q": "Con `function f(x = 3) { return x; }`, ¿cuándo se aplica el 3?",
      "o": [
        "Cuando el argumento es null",
        "Cuando el argumento es falsy",
        "Cuando falta o es undefined"
      ],
      "c": 2,
      "e": "El valor predeterminado de un parámetro se aplica solo si el argumento falta o es `undefined`. `null`, `0` o `\"\"` son valores explícitos y se respetan."
    },
    {
      "id": 66,
      "t": 4,
      "q": "¿Qué diferencia hay entre los objetos `{}` y `{ valor: undefined }`?",
      "o": [
        "Solo el segundo tiene la propiedad valor como propia",
        "Leer .valor da undefined solo en el primero",
        "JSON.stringify los convierte en textos distintos"
      ],
      "c": 0,
      "e": "Leer `.valor` da `undefined` en ambos casos, así que la lectura no los distingue. `Object.hasOwn` sí: el segundo objeto tiene la propiedad, aunque su valor sea `undefined`."
    },
    {
      "id": 67,
      "t": 4,
      "q": "¿Qué diferencia hay entre `[1, , 3]` y `[1, undefined, 3]` en la posición 1?",
      "o": [
        "Solo el segundo tiene esa posición presente",
        "Solo el primero tiene esa posición presente",
        "Ambos tienen exactamente la misma estructura"
      ],
      "c": 0,
      "e": "`[1, , 3]` tiene un hueco: la posición 1 no existe. `[1, undefined, 3]` tiene esa posición con el valor `undefined`. Se nota con `1 in array`, que da `false` y `true` respectivamente."
    },
    {
      "id": 68,
      "t": 4,
      "q": "¿Qué devuelve `[10, 20].indexOf(50)` si no encuentra el valor?",
      "o": [
        "undefined",
        "null",
        "-1"
      ],
      "c": 2,
      "e": "`indexOf` devuelve el índice encontrado o `-1` si no está. Por eso se compara con `-1` o se usa `includes`."
    },
    {
      "id": 69,
      "t": 4,
      "q": "¿Qué ocurre con una propiedad cuyo valor es undefined al serializar un objeto con JSON.stringify?",
      "o": [
        "Se escribe como null",
        "Se omite",
        "Se escribe como \"undefined\""
      ],
      "c": 1,
      "e": "`JSON.stringify` omite las propiedades cuyo valor es `undefined`, porque JSON no tiene ese valor. `null`, en cambio, sí se conserva."
    },
    {
      "id": 70,
      "t": 4,
      "q": "Una función devuelve `null` en tres situaciones distintas: todavía no hay datos, la búsqueda no encontró nada o hubo un error. ¿Qué representación distingue claramente cada caso?",
      "o": [
        "Un objeto con una propiedad estado que nombre cada caso",
        "Un booleano que indique si hubo resultado",
        "Distinguir null de undefined para cada caso"
      ],
      "c": 0,
      "e": "Un solo valor como `null` no alcanza para distinguir varias situaciones. Un objeto con una propiedad `estado` (por ejemplo `\"pendiente\"`, `\"vacio\"` o `\"error\"`) nombra cada caso sin ambigüedad."
    },
    {
      "id": 71,
      "t": 4,
      "q": "¿Qué se gana al normalizar (limpiar y dar un formato único a) los datos externos apenas se reciben?",
      "o": [
        "La entrada deja de requerir validación posterior",
        "Todo el programa usa datos con la misma forma",
        "JSON.stringify conserva los campos undefined"
      ],
      "c": 1,
      "e": "Normalizar en la entrada deja los datos siempre con la misma forma: mismos tipos, mismos campos. El resto del código puede confiar en esa forma. Eso no reemplaza la validación: son pasos distintos."
    },
    {
      "id": 72,
      "t": 5,
      "q": "¿Qué expresión convierte `textoCantidad` a número de forma explícita?",
      "o": [
        "`textoCantidad * 1`",
        "`textoCantidad.valueOf()`",
        "`Number(textoCantidad)`"
      ],
      "c": 2,
      "e": "`Number(textoCantidad)` declara la conversión de forma explícita. `textoCantidad * 1` también convierte, pero de forma implícita (coerción), y `valueOf()` de un string devuelve el mismo string."
    },
    {
      "id": 73,
      "t": 5,
      "q": "¿Por qué `\"6\" - 1` produce 5?",
      "o": [
        "La resta solo opera con números y convierte el string a número",
        "La resta concatena y luego convierte a número",
        "JavaScript interpreta \"6\" como un literal numérico"
      ],
      "c": 0,
      "e": "La resta solo existe para números, así que JavaScript convierte `\"6\"` a 6 y calcula 6 − 1. Con `+` sería distinto: `\"6\" + 1` concatena y da `\"61\"`."
    },
    {
      "id": 74,
      "t": 5,
      "q": "¿En qué orden conviene procesar un dato que llega de afuera, como un formulario o un archivo?",
      "o": [
        "Convertir, usar y validar al mostrar el resultado",
        "Normalizar, convertir y validar antes de usarlo",
        "Validar el texto crudo y convertir al final"
      ],
      "c": 1,
      "e": "El orden seguro es normalizar (limpiar espacios, formato), convertir al tipo correcto y validar, todo antes de usar el dato. Validar al final deja pasar datos incorrectos al resto del programa."
    },
    {
      "id": 75,
      "t": 5,
      "q": "¿Qué devuelve `String(null)`?",
      "o": [
        "null",
        "TypeError",
        "\"null\""
      ],
      "c": 2,
      "e": "`String(null)` convierte `null` en el texto `\"null\"`. No lanza error, a diferencia de `null.toString()`."
    },
    {
      "id": 76,
      "t": 5,
      "q": "¿Qué devuelve `Number(\"\")` y por qué requiere cuidado en un campo obligatorio?",
      "o": [
        "0; podría aceptarse una omisión como si fuera un cero",
        "NaN; la omisión se detecta sin más control",
        "undefined; se distingue fácilmente de cero"
      ],
      "c": 0,
      "e": "`Number(\"\")` da `0`, no `NaN`. En un campo obligatorio, un campo vacío pasaría como un cero válido si no se verifica antes que el texto no esté vacío."
    },
    {
      "id": 77,
      "t": 5,
      "q": "¿Por qué `Number([])` devuelve 0?",
      "o": [
        "Number devuelve la longitud del array vacío",
        "Se convierte primero en \"\" y luego en 0",
        "Un array vacío es falsy y false vale 0"
      ],
      "c": 1,
      "e": "Para convertir un objeto a número, JavaScript primero lo pasa a primitivo. Un array vacío se convierte en `\"\"`, y `Number(\"\")` es 0. Además, `[]` es truthy, no falsy."
    },
    {
      "id": 78,
      "t": 5,
      "q": "Para el texto `\"42px\"`, ¿qué diferencia hay entre `Number` y `parseInt`?",
      "o": [
        "Ambos dan `42`",
        "`Number` da `42` y `parseInt` da `NaN`",
        "`Number` da `NaN` y `parseInt` da `42`"
      ],
      "c": 2,
      "e": "`Number` exige que todo el texto sea numérico y da `NaN` con `\"42px\"`. `parseInt` lee dígitos hasta el primer carácter inválido y da `42`."
    },
    {
      "id": 79,
      "t": 5,
      "q": "¿Por qué `Boolean(\"false\")` no sirve para interpretar esa palabra?",
      "o": [
        "Devuelve false, pero no reconoce \"FALSE\"",
        "Devuelve true: la cadena no está vacía",
        "Lanza TypeError al no ser un booleano"
      ],
      "c": 1,
      "e": "`Boolean` solo mira si el string está vacío. `\"false\"` no está vacío, así que da `true`. Para interpretar la palabra hay que compararla, por ejemplo `texto === \"true\"`."
    },
    {
      "id": 80,
      "t": 5,
      "q": "Un entero muy grande llega como texto, en la variable `texto`. ¿Cómo se convierte a bigint sin perder dígitos?",
      "o": [
        "`BigInt(texto)`",
        "`BigInt(Number(texto))`",
        "`BigInt(parseInt(texto))`"
      ],
      "c": 0,
      "e": "Un entero grande en texto puede superar la precisión de number. Pasar primero por `Number` o `parseInt` pierde dígitos antes de llegar a `BigInt`. `BigInt(texto)` convierte sin pérdida."
    },
    {
      "id": 81,
      "t": 5,
      "q": "¿Qué resultado produce `\"8\" * \"3\"`?",
      "o": [
        "\"83\"",
        "NaN",
        "24"
      ],
      "c": 2,
      "e": "`*` solo opera con números, así que convierte ambos strings: 8 × 3 = 24. Solo `+` concatena strings."
    },
    {
      "id": 82,
      "t": 5,
      "q": "¿Qué produce `1 + 2 + \"3\"`?",
      "o": [
        "\"33\"",
        "\"123\"",
        "6"
      ],
      "c": 0,
      "e": "Se evalúa de izquierda a derecha: `1 + 2` da 3 (número), y después `3 + \"3\"` concatena y da `\"33\"`."
    },
    {
      "id": 83,
      "t": 5,
      "q": "¿Por qué `\"20\" < \"3\"` puede ser true?",
      "o": [
        "Ambos se convierten a número antes de comparar",
        "Se compara la longitud de las cadenas",
        "Ambos son strings y se comparan carácter por carácter"
      ],
      "c": 2,
      "e": "Si ambos operandos son strings, `<` los compara carácter por carácter según su código. `\"2\"` es menor que `\"3\"`, así que `\"20\" < \"3\"` da `true` aunque 20 sea mayor que 3."
    },
    {
      "id": 84,
      "t": 5,
      "q": "¿Qué devuelve `0 === false`?",
      "o": [
        "true",
        "false",
        "undefined"
      ],
      "c": 1,
      "e": "`===` no convierte tipos. `0` es number y `false` es boolean, así que no son estrictamente iguales. Con `==` darían `true`."
    },
    {
      "id": 85,
      "t": 5,
      "q": "Cuando JavaScript necesita convertir un objeto a un valor primitivo, ¿qué método usa primero si el objeto lo define?",
      "o": [
        "Symbol.toPrimitive",
        "Object.prototype.valueOf",
        "toString"
      ],
      "c": 0,
      "e": "Si un objeto define `Symbol.toPrimitive`, JavaScript lo usa antes que `valueOf` y `toString` para convertirlo a primitivo."
    },
    {
      "id": 86,
      "t": 5,
      "q": "Un formulario acepta números con coma decimal, como `\"3,5\"`. ¿Qué hace falta además de llamar a `Number`?",
      "o": [
        "Reemplazar la coma por punto y nada más",
        "Definir el formato aceptado y normalizarlo",
        "Usar parseFloat, que ya acepta la coma"
      ],
      "c": 1,
      "e": "`Number` no acepta coma decimal: `Number(\"3,5\")` da `NaN` y `parseFloat(\"3,5\")` da 3. Hay que decidir qué formatos se aceptan, normalizarlos (por ejemplo, coma por punto) y validar el resultado."
    },
    {
      "id": 87,
      "t": 6,
      "q": "¿Qué devuelve `Symbol(\"id\") === Symbol(\"id\")`?",
      "o": [
        "true",
        "undefined",
        "false"
      ],
      "c": 2,
      "e": "Cada llamada a `Symbol()` crea un símbolo único, aunque tengan la misma descripción. Por eso nunca son iguales entre sí."
    },
    {
      "id": 88,
      "t": 6,
      "q": "En `Symbol(\"interno\")`, ¿para qué sirve el texto `\"interno\"`?",
      "o": [
        "Hace iguales los símbolos con ese texto",
        "Convierte el símbolo en clave string",
        "Ayuda a depurar; no define identidad"
      ],
      "c": 2,
      "e": "La descripción solo sirve para identificarlo al depurar, por ejemplo en la consola. No afecta la identidad: dos símbolos con la misma descripción siguen siendo distintos."
    },
    {
      "id": 89,
      "t": 6,
      "q": "Un objeto tiene la propiedad string `id` y otra bajo `Symbol(\"id\")`. ¿Qué relación guardan?",
      "o": [
        "La segunda sobrescribe la primera",
        "Son claves distintas",
        "Ambas se enumeran con el mismo nombre"
      ],
      "c": 1,
      "e": "Una clave string y una clave symbol nunca colisionan, aunque la descripción coincida con el texto. El objeto tiene dos propiedades distintas."
    },
    {
      "id": 90,
      "t": 6,
      "q": "¿Qué ocurre con una clave symbol al llamar Object.keys sobre un objeto?",
      "o": [
        "No aparece en el resultado",
        "Aparece convertida a string",
        "Se elimina del objeto"
      ],
      "c": 0,
      "e": "`Object.keys` devuelve solo claves string. Las claves symbol no aparecen, pero siguen en el objeto."
    },
    {
      "id": 91,
      "t": 6,
      "q": "¿Qué función devuelve las claves symbol propias de un objeto?",
      "o": [
        "Object.getOwnPropertyNames",
        "Object.entries",
        "Object.getOwnPropertySymbols"
      ],
      "c": 2,
      "e": "`Object.getOwnPropertySymbols` devuelve las claves symbol propias. `Object.getOwnPropertyNames` y `Object.entries` trabajan solo con claves string."
    },
    {
      "id": 92,
      "t": 6,
      "q": "¿Copia `{ ...obj }` las propiedades de `obj` cuya clave es un symbol?",
      "o": [
        "No, se omiten las claves symbol",
        "Sí",
        "Solo si la clave se creó con Symbol.for"
      ],
      "c": 1,
      "e": "El spread `{ ...obj }` copia todas las propiedades propias enumerables, incluidas las de clave symbol."
    },
    {
      "id": 93,
      "t": 6,
      "q": "¿Qué devuelve `Symbol.for(\"curso\") === Symbol.for(\"curso\")`?",
      "o": [
        "true",
        "false",
        "TypeError"
      ],
      "c": 0,
      "e": "`Symbol.for` usa un registro global: la primera llamada crea el símbolo y las siguientes con la misma clave devuelven el mismo. Por eso son iguales."
    },
    {
      "id": 94,
      "t": 6,
      "q": "¿Qué devuelve `Symbol.keyFor(s)` si `s` se creó con `Symbol()`, fuera del registro global?",
      "o": [
        "Su descripción",
        "undefined",
        "La cadena \"local\""
      ],
      "c": 1,
      "e": "`Symbol.keyFor` solo encuentra símbolos del registro global, creados con `Symbol.for`. Para un símbolo local creado con `Symbol()` devuelve `undefined`."
    },
    {
      "id": 95,
      "t": 6,
      "q": "¿Qué expresión convierte un symbol en texto sin lanzar error?",
      "o": [
        "String(simbolo)",
        "\"id=\" + simbolo",
        "Number(simbolo)"
      ],
      "c": 0,
      "e": "Un símbolo no se convierte a texto de forma implícita: `\"id=\" + simbolo` lanza TypeError. La conversión tiene que ser explícita con `String(simbolo)` o leyendo `simbolo.description`."
    },
    {
      "id": 96,
      "t": 6,
      "q": "¿Qué símbolo especial debe usar un objeto como nombre de un método para poder recorrerse con `for...of`?",
      "o": [
        "Symbol.hasInstance",
        "Symbol.toStringTag",
        "Symbol.iterator"
      ],
      "c": 2,
      "e": "`for...of` busca el método `Symbol.iterator` del objeto. Si existe, el objeto es iterable."
    },
    {
      "id": 97,
      "t": 6,
      "q": "El método `Symbol.iterator` de un objeto devuelve un iterador. ¿Qué método debe tener ese iterador?",
      "o": [
        "value, que devuelve el elemento actual",
        "next, que devuelve value y done",
        "done, que indica si quedan elementos"
      ],
      "c": 1,
      "e": "El iterador debe tener un método `next()` que devuelva objetos `{ value, done }`. `value` es el elemento actual y `done` indica si terminó."
    },
    {
      "id": 98,
      "t": 6,
      "q": "¿Qué símbolo especial busca `for await...of` para recorrer valores que llegan de forma asincrónica?",
      "o": [
        "Symbol.isConcatSpreadable",
        "Symbol.species",
        "Symbol.asyncIterator"
      ],
      "c": 2,
      "e": "`for await...of` busca primero `Symbol.asyncIterator`, cuyo `next()` devuelve promesas. Así puede consumir valores que llegan con espera."
    },
    {
      "id": 99,
      "t": 6,
      "q": "¿Qué tipo de valor debe devolver un método `Symbol.toPrimitive`?",
      "o": [
        "Un valor primitivo",
        "El propio objeto",
        "Un string con la descripción"
      ],
      "c": 0,
      "e": "`Symbol.toPrimitive` debe devolver un valor primitivo (string, number, etc.). Si devuelve un objeto, JavaScript lanza TypeError."
    },
    {
      "id": 100,
      "t": 6,
      "q": "Si un objeto define `Symbol.toStringTag`, ¿qué cambia?",
      "o": [
        "El nombre que muestra typeof",
        "El texto de Object.prototype.toString",
        "La clave con que lo guarda JSON.stringify"
      ],
      "c": 1,
      "e": "`Symbol.toStringTag` define el nombre que aparece en `Object.prototype.toString`, por ejemplo `\"[object MiClase]\"`. No cambia `typeof` ni la identidad del objeto."
    },
    {
      "id": 101,
      "t": 6,
      "q": "Un objeto tiene índices numéricos y `length`, como un array. ¿Qué símbolo hace que `concat` lo expanda elemento por elemento?",
      "o": [
        "Symbol.hasInstance",
        "Symbol.keyFor",
        "Symbol.isConcatSpreadable"
      ],
      "c": 2,
      "e": "`Symbol.isConcatSpreadable` en `true` hace que `concat` expanda el objeto como si fuera un array, usando sus índices y su `length`."
    },
    {
      "id": 102,
      "t": 7,
      "q": "¿Cuándo es un array la mejor estructura para guardar una colección?",
      "o": [
        "Cuando importan el orden y las posiciones",
        "Cuando cada clave es un objeto arbitrario",
        "Cuando los duplicados deben desaparecer"
      ],
      "c": 0,
      "e": "Un array es adecuado cuando importan el orden y la posición de cada elemento. Para claves arbitrarias conviene un Map, y para eliminar duplicados, un Set."
    },
    {
      "id": 103,
      "t": 7,
      "q": "¿Qué diferencia hay entre `Array.of(3)` y `Array(3)`?",
      "o": [
        "Array.of(3) es [3]; Array(3) tiene tres huecos",
        "Ambos crean un array con tres huecos vacíos",
        "El primero tiene tres huecos; el segundo contiene 3"
      ],
      "c": 0,
      "e": "Con un único número, `Array(3)` lo interpreta como longitud y crea un array de 3 huecos. `Array.of(3)` siempre usa sus argumentos como elementos, así que da `[3]`."
    },
    {
      "id": 104,
      "t": 7,
      "q": "¿Qué expresión comprueba de forma confiable si `x` es un array?",
      "o": [
        "`typeof x === \"array\"`",
        "`x instanceof Object`",
        "`Array.isArray(x)`"
      ],
      "c": 2,
      "e": "`typeof` devuelve `\"object\"` para arrays, y `instanceof Object` es verdadero para arrays y objetos por igual. `Array.isArray` es la forma fiable de distinguirlos."
    },
    {
      "id": 105,
      "t": 7,
      "q": "Con `const a = [\"rojo\", \"azul\"]`, ¿qué devuelve `a.at(-1)`?",
      "o": [
        "\"rojo\"",
        "\"azul\"",
        "undefined"
      ],
      "c": 1,
      "e": "`at(-1)` cuenta desde el final: devuelve el último elemento, `\"azul\"`."
    },
    {
      "id": 106,
      "t": 7,
      "q": "¿Qué ocurre al asignar `a.length = 1` a `a = [1, 2, 3]`?",
      "o": [
        "Se descartan los elementos 2 y 3 y la longitud pasa a 1",
        "Los elementos 2 y 3 quedan ocultos pero existen",
        "Lanza TypeError: length es de solo lectura"
      ],
      "c": 0,
      "e": "`length` se puede escribir. Asignar un valor menor recorta el array y elimina los elementos sobrantes para siempre."
    },
    {
      "id": 107,
      "t": 7,
      "q": "¿Qué devuelve `1 in [1, , 3]`?",
      "o": [
        "true",
        "false",
        "undefined"
      ],
      "c": 1,
      "e": "`in` pregunta si existe el índice, no si hay un valor. En `[1, , 3]` la posición 1 es un hueco: no existe, así que da `false`."
    },
    {
      "id": 108,
      "t": 7,
      "q": "¿Qué devuelve `[10, 20, 30, 40].slice(1, 3)`?",
      "o": [
        "[20, 30, 40]",
        "[10, 20, 30]",
        "[20, 30]"
      ],
      "c": 2,
      "e": "`slice(1, 3)` copia desde el índice 1 hasta el 3 sin incluirlo, es decir, los índices 1 y 2: `[20, 30]`."
    },
    {
      "id": 109,
      "t": 7,
      "q": "¿Qué devuelve `push` al agregar un elemento a un array?",
      "o": [
        "El elemento agregado",
        "Una copia del array",
        "La nueva longitud"
      ],
      "c": 2,
      "e": "`push` agrega al final, modifica el array y devuelve la nueva longitud, no el elemento ni una copia."
    },
    {
      "id": 110,
      "t": 7,
      "q": "¿Qué devuelve `splice` además de modificar el array original?",
      "o": [
        "Una copia del array original antes del cambio",
        "Un array con los elementos eliminados",
        "La nueva longitud del array"
      ],
      "c": 1,
      "e": "`splice` modifica el array original y devuelve un array con los elementos que eliminó (vacío si no eliminó ninguno)."
    },
    {
      "id": 111,
      "t": 7,
      "q": "¿Qué expresión devuelve `true` porque encuentra `NaN` dentro del array?",
      "o": [
        "`[NaN].includes(NaN)`",
        "`[NaN].indexOf(NaN) >= 0`",
        "`NaN === NaN`"
      ],
      "c": 0,
      "e": "`includes` usa la comparación SameValueZero, que considera `NaN` igual a `NaN`. `indexOf` usa `===`, y como `NaN !== NaN`, nunca lo encuentra."
    },
    {
      "id": 112,
      "t": 7,
      "q": "¿Qué devuelve `find` si ningún elemento cumple la condición?",
      "o": [
        "undefined",
        "-1",
        "Un array vacío"
      ],
      "c": 0,
      "e": "`find` devuelve el primer elemento que cumple la condición o `undefined` si ninguno la cumple. Quien devuelve `-1` es `findIndex`."
    },
    {
      "id": 113,
      "t": 7,
      "q": "¿Qué bucle recorre directamente los valores de un array?",
      "o": [
        "for...in",
        "for...of",
        "switch"
      ],
      "c": 1,
      "e": "`for...of` recorre los valores. `for...in` recorre nombres de propiedades (los índices como strings) y no se recomienda para arrays."
    },
    {
      "id": 114,
      "t": 7,
      "q": "¿Qué método produce un array nuevo con un resultado por elemento?",
      "o": [
        "forEach",
        "pop",
        "map"
      ],
      "c": 2,
      "e": "`map` llama a la función una vez por elemento y arma un array nuevo con los resultados. `forEach` no devuelve nada, y `pop` quita el último elemento."
    },
    {
      "id": 115,
      "t": 7,
      "q": "`filter` devuelve un array nuevo con algunos objetos del array original. ¿Qué relación tienen esos objetos con los del original?",
      "o": [
        "Son los mismos objetos: filter copia solo las referencias",
        "Cada objeto se copia en forma superficial",
        "Se copian solo los objetos modificados"
      ],
      "c": 0,
      "e": "`filter` crea un array nuevo, pero sus elementos son los mismos objetos del original. Modificar un objeto filtrado modifica también el original."
    },
    {
      "id": 116,
      "t": 7,
      "q": "¿Por qué conviene pasar un valor inicial a `reduce`?",
      "o": [
        "Hace que reduce recorra el array de derecha a izquierda",
        "Fija el acumulador y cubre el array vacío",
        "Evita que el callback reciba el índice"
      ],
      "c": 1,
      "e": "Sin valor inicial, `reduce` usa el primer elemento como acumulador y lanza TypeError si el array está vacío. Con valor inicial, el acumulador empieza con un tipo conocido y el array vacío devuelve ese valor."
    },
    {
      "id": 117,
      "t": 7,
      "q": "¿Qué devuelve `forEach`?",
      "o": [
        "Un array transformado",
        "El último elemento",
        "undefined"
      ],
      "c": 2,
      "e": "`forEach` siempre devuelve `undefined`. Sirve para efectos por elemento. Si se necesita un resultado, corresponde `map`, `filter` o `reduce`."
    },
    {
      "id": 118,
      "t": 7,
      "q": "¿Qué resultado produce el siguiente código?\n\n```js\nconst datos = [1, [2, [3]]];\ndatos.flat(2);\n```",
      "o": [
        "Un array plano con 1, 2 y 3",
        "Un array con el 3 todavía anidado",
        "Un array con el 1 y el 2 anidados"
      ],
      "c": 0,
      "e": "`flat(2)` aplana hasta dos niveles de anidamiento. `[1, [2, [3]]]` tiene dos niveles, así que queda `[1, 2, 3]`."
    },
    {
      "id": 119,
      "t": 7,
      "q": "¿Por qué `[2, 10, 1].sort()` no da necesariamente el orden numérico esperado?",
      "o": [
        "sort sin comparador ordena de mayor a menor",
        "sort ordena según el orden de inserción original",
        "Sin comparador, sort convierte a string y compara texto"
      ],
      "c": 2,
      "e": "Sin comparador, `sort` convierte los elementos a string y los ordena como texto. `\"10\"` va antes que `\"2\"` porque `\"1\"` es menor que `\"2\"`. Para números hay que usar `sort((a, b) => a - b)`."
    },
    {
      "id": 120,
      "t": 7,
      "q": "Después de `const copia = [...original]`, donde `original` contiene objetos, ¿qué comparten ambos arrays?",
      "o": [
        "El mismo array exterior, con otro nombre",
        "Las referencias a los objetos internos",
        "Nada: los objetos se copian también"
      ],
      "c": 1,
      "e": "El spread crea un array exterior nuevo, pero copia las referencias a los objetos, no los objetos. Es una copia superficial: ambos arrays comparten los mismos objetos internos."
    },
    {
      "id": 121,
      "t": 7,
      "q": "¿Qué problema tiene crear una matriz de 3 × 3 con `Array(3).fill(Array(3).fill(0))`?",
      "o": [
        "Las tres filas son el mismo array, así que cambiar una cambia todas",
        "Las filas quedan con huecos en lugar de ceros",
        "Solo la primera fila queda llena de ceros"
      ],
      "c": 0,
      "e": "`fill` coloca el mismo valor en todas las posiciones. Aquí ese valor es un único array, así que las tres filas son el mismo objeto: cambiar una celda cambia la columna entera."
    },
    {
      "id": 122,
      "t": 7,
      "q": "Para un array con los valores 10, 20, 30, 40 y 50, ¿qué devuelve `slice(-2)`?",
      "o": [
        "El array original reducido a 40 y 50",
        "Un array nuevo con 40 y 50",
        "Un array nuevo con 10 y 20"
      ],
      "c": 1,
      "e": "`slice(-2)` toma los dos últimos elementos y devuelve un array nuevo. El original no cambia."
    },
    {
      "id": 123,
      "t": 7,
      "q": "Para los valores 1, 2 y 3, ¿qué devuelven respectivamente `some(n => n > 2)` y `every(n => n > 2)`?",
      "o": [
        "true y true",
        "false y false",
        "true y false"
      ],
      "c": 2,
      "e": "`some` es `true` si al menos un elemento cumple (el 3). `every` es `true` solo si todos cumplen, y 1 y 2 no lo hacen."
    },
    {
      "id": 124,
      "t": 7,
      "q": "Tras ejecutar este código, ¿qué ocurre con `original` y `copia`?\n\n```js\nconst original = [3, 1, 2];\nconst copia = original.toSorted((a, b) => a - b);\n```",
      "o": [
        "Ambos quedan ordenados de menor a mayor",
        "original no cambia; copia queda ordenada",
        "original queda ordenado; copia no cambia"
      ],
      "c": 1,
      "e": "`toSorted` devuelve una copia ordenada y no toca el original. `sort` sí ordena el array en su lugar."
    },
    {
      "id": 125,
      "t": 7,
      "q": "¿Por qué `Array.from({ length: 3 }, () => Array(3).fill(0))` evita el problema de las filas compartidas?",
      "o": [
        "Todas las filas usan la misma referencia a un único array",
        "Convierte la matriz en un objeto sin índices",
        "La función crea un array nuevo para cada fila"
      ],
      "c": 2,
      "e": "`Array.from` llama a la función una vez por fila, y cada llamada crea un array nuevo. Así las filas son independientes."
    },
    {
      "id": 126,
      "t": 8,
      "q": "¿Qué estructura conviene para representar un alumno con campos fijos, como nombre y legajo?",
      "o": [
        "Un objeto",
        "Un Set",
        "Una cadena separada por comas"
      ],
      "c": 0,
      "e": "Un objeto agrupa campos con nombre. Un Set guarda valores sin nombre, y una cadena separada por comas obliga a interpretar posiciones."
    },
    {
      "id": 127,
      "t": 8,
      "q": "Si un objeto se crea con `{ 10: \"diez\" }`, ¿cómo aparece esa clave en `Object.keys`?",
      "o": [
        "Como el string \"10\"",
        "Como el número 10",
        "Como un symbol"
      ],
      "c": 0,
      "e": "Las claves de un objeto común siempre son strings (o symbols). La clave `10` se guarda como `\"10\"`."
    },
    {
      "id": 128,
      "t": 8,
      "q": "Con `const campo = \"precio\"`, ¿qué expresión lee la propiedad `precio` de `producto` usando la variable?",
      "o": [
        "`producto.campo`",
        "`producto[\"campo\"]`",
        "`producto[campo]`"
      ],
      "c": 2,
      "e": "Los corchetes evalúan la expresión: `producto[campo]` lee la clave `\"precio\"`. `producto.campo` y `producto[\"campo\"]` buscan literalmente una clave llamada `\"campo\"`."
    },
    {
      "id": 129,
      "t": 8,
      "q": "¿Qué efecto tiene `delete producto.stock`?",
      "o": [
        "La conserva con valor undefined",
        "Quita la propiedad stock",
        "La convierte en null"
      ],
      "c": 1,
      "e": "`delete` quita la propiedad del objeto. Después, `\"stock\" in producto` es `false`. Asignar `undefined`, en cambio, conserva la propiedad."
    },
    {
      "id": 130,
      "t": 8,
      "q": "¿Qué diferencia hay entre `Object.hasOwn(obj, \"x\")` y `\"x\" in obj`?",
      "o": [
        "in considera propiedades heredadas; hasOwn no",
        "hasOwn considera heredadas; in no",
        "Ambas revisan también las propiedades heredadas"
      ],
      "c": 0,
      "e": "`in` busca en el objeto y en toda su cadena de prototipos. `Object.hasOwn` mira solo las propiedades propias."
    },
    {
      "id": 131,
      "t": 8,
      "q": "`alumno.direccion` puede ser `null` o `undefined`. ¿Qué evita escribir `alumno.direccion?.ciudad`?",
      "o": [
        "Validar cualquier campo obligatorio",
        "Leer ciudad cuando direccion es null o undefined",
        "Que ciudad valga undefined si falta"
      ],
      "c": 1,
      "e": "Si `direccion` es `null` o `undefined`, `?.` corta la cadena y devuelve `undefined` en lugar de lanzar TypeError al intentar leer `ciudad`."
    },
    {
      "id": 132,
      "t": 8,
      "q": "Con `const nombre = \"Ana\"`, ¿qué crea `{ nombre }`?",
      "o": [
        "Un Set que contiene el string \"Ana\"",
        "Un bloque de código que evalúa nombre",
        "La propiedad nombre con valor \"Ana\""
      ],
      "c": 2,
      "e": "Es la forma abreviada de propiedad: `{ nombre }` equivale a `{ nombre: nombre }`. Crea la propiedad `nombre` con el valor de la variable, `\"Ana\"`."
    },
    {
      "id": 133,
      "t": 8,
      "q": "¿Por qué no conviene definir con una función flecha un método de objeto que usa `this`?",
      "o": [
        "No puede devolver valores",
        "No tiene this propio",
        "Su this es el objeto donde se define"
      ],
      "c": 1,
      "e": "Las funciones flecha no tienen `this` propio: usan el del alcance donde se escribieron. Como método de un objeto literal, su `this` no es el objeto."
    },
    {
      "id": 134,
      "t": 8,
      "q": "En un literal de objeto, ¿qué sintaxis usa el contenido de la variable `campo` como nombre de la clave?",
      "o": [
        "`{ campo: valor }`",
        "`{ \"campo\": valor }`",
        "`{ [campo]: valor }`"
      ],
      "c": 2,
      "e": "Los corchetes en un literal crean una clave calculada: `{ [campo]: valor }` usa el contenido de la variable como nombre. `{ campo: valor }` crea una clave llamada `\"campo\"`."
    },
    {
      "id": 135,
      "t": 8,
      "q": "¿Qué función devuelve pares [clave, valor] de propiedades propias enumerables?",
      "o": [
        "Object.entries",
        "Object.getOwnPropertyNames",
        "Object.hasOwn"
      ],
      "c": 0,
      "e": "`Object.entries` devuelve un array de pares `[clave, valor]`. `Object.values` devuelve solo los valores, y `Object.hasOwn` responde si existe una clave."
    },
    {
      "id": 136,
      "t": 8,
      "q": "¿Qué devuelve `({ x: 1 }) === ({ x: 1 })`?",
      "o": [
        "true, porque sus campos coinciden",
        "undefined, porque no se comparan objetos",
        "false, porque son objetos distintos"
      ],
      "c": 2,
      "e": "`===` compara referencias de objetos, no su contenido. Cada literal crea un objeto nuevo, así que son distintos aunque tengan los mismos campos."
    },
    {
      "id": 137,
      "t": 8,
      "q": "`a` es un objeto. Después de `const b = a; b.nombre = \"Ana\";`, ¿qué valor tiene `a.nombre`?",
      "o": [
        "El valor anterior, porque b es una copia",
        "El nuevo valor, porque a y b son el mismo objeto",
        "undefined, porque b tomó la propiedad"
      ],
      "c": 1,
      "e": "`const b = a` copia la referencia, no el objeto. `a` y `b` apuntan al mismo objeto, así que el cambio se ve desde las dos variables."
    },
    {
      "id": 138,
      "t": 8,
      "q": "`original` tiene una propiedad `usuario` que es un objeto. Después de `const copia = { ...original }`, ¿qué comparación da `true`?",
      "o": [
        "`copia.usuario === original.usuario`",
        "`copia === original`",
        "`copia.usuario === structuredClone(original.usuario)`"
      ],
      "c": 0,
      "e": "El spread copia un solo nivel. `copia.usuario` y `original.usuario` son el mismo objeto. `copia` y `original`, en cambio, son objetos distintos."
    },
    {
      "id": 139,
      "t": 8,
      "q": "`base` tiene la propiedad `tema: \"claro\"`. ¿Qué valor de `tema` tiene el objeto `{ ...base, tema: \"oscuro\" }`?",
      "o": [
        "\"claro\"",
        "\"oscuro\"",
        "undefined"
      ],
      "c": 1,
      "e": "En un literal, si una clave se repite gana la última. `tema: \"oscuro\"` aparece después del spread y sobrescribe el valor de `base`."
    },
    {
      "id": 140,
      "t": 8,
      "q": "¿Qué argumento modifica `Object.assign(destino, origen)`?",
      "o": [
        "origen",
        "Ninguno: devuelve un objeto nuevo",
        "destino"
      ],
      "c": 2,
      "e": "`Object.assign` copia las propiedades de `origen` en `destino`, lo modifica y devuelve ese mismo `destino`. `origen` no cambia."
    },
    {
      "id": 141,
      "t": 8,
      "q": "Al copiar un objeto que contiene otros objetos, ¿qué hace `structuredClone` que el spread `{ ...obj }` no hace?",
      "o": [
        "Puede crear objetos internos nuevos en lugar de compartirlos",
        "Copia también las funciones de los objetos",
        "Solo copia el primer nivel del objeto"
      ],
      "c": 0,
      "e": "`structuredClone` hace una copia profunda: crea objetos internos nuevos. El spread copia solo el primer nivel. `structuredClone` no puede copiar funciones y lanza un error si las encuentra."
    },
    {
      "id": 142,
      "t": 8,
      "q": "Con `const { nombre: nombreCompleto } = persona`, ¿qué variable local se crea?",
      "o": [
        "nombre",
        "nombreCompleto",
        "persona.nombreCompleto"
      ],
      "c": 1,
      "e": "En `{ nombre: nombreCompleto }`, `nombre` es la propiedad que se lee y `nombreCompleto` es la variable que se crea."
    },
    {
      "id": 143,
      "t": 8,
      "q": "¿Por qué `JSON.parse(JSON.stringify(obj))` no sirve para clonar cualquier objeto?",
      "o": [
        "Copia solo el primer nivel del objeto",
        "Modifica el objeto original al serializarlo",
        "Pierde undefined, funciones y fechas, y falla con ciclos"
      ],
      "c": 2,
      "e": "JSON no representa `undefined` ni funciones, que se pierden. Las fechas se convierten en strings, los símbolos desaparecen y los objetos con ciclos hacen fallar `stringify`."
    },
    {
      "id": 144,
      "t": 8,
      "q": "¿Qué añade `Reflect.ownKeys(obj)` frente a `Object.keys(obj)`?",
      "o": [
        "También claves symbol y propiedades no enumerables",
        "Las claves heredadas del prototipo",
        "Los valores junto con cada clave"
      ],
      "c": 0,
      "e": "`Reflect.ownKeys` devuelve todas las claves propias: strings y symbols, enumerables o no. `Object.keys` devuelve solo las claves string enumerables."
    },
    {
      "id": 145,
      "t": 8,
      "q": "Si se aplica `Object.freeze` a un objeto que contiene otro objeto, ¿qué cambio puede seguir siendo posible?",
      "o": [
        "Modificar el objeto interior, si no se congeló",
        "Reasignar una propiedad directa con otro objeto",
        "Agregar propiedades directas si no existían antes"
      ],
      "c": 0,
      "e": "`Object.freeze` es superficial: congela las propiedades directas del objeto, pero un objeto interior que no se congeló sigue siendo modificable."
    },
    {
      "id": 146,
      "t": 8,
      "q": "En `const { idioma = \"es\" } = configuracion`, ¿cuándo se usa `\"es\"`?",
      "o": [
        "Cuando idioma vale null o undefined",
        "Cuando idioma es una cadena vacía",
        "Cuando la propiedad falta o su valor es undefined"
      ],
      "c": 2,
      "e": "El valor predeterminado en la desestructuración se usa solo si la propiedad falta o vale `undefined`. `null` y `\"\"` se respetan."
    },
    {
      "id": 147,
      "t": 8,
      "q": "¿Qué hace `Object.fromEntries` con una colección de pares clave y valor?",
      "o": [
        "Devuelve un Map con esos pares",
        "Construye un objeto con esos pares como propiedades",
        "Devuelve un array de claves"
      ],
      "c": 1,
      "e": "`Object.fromEntries` hace lo inverso de `Object.entries`: recibe pares `[clave, valor]` y construye un objeto con ellos."
    },
    {
      "id": 148,
      "t": 9,
      "q": "¿Cuándo conviene usar un Map en lugar de un objeto común?",
      "o": [
        "Cuando se necesita convertir a JSON directo",
        "Cuando importa el orden por posición numérica",
        "Cuando las claves salen de los datos y pueden ser de cualquier tipo"
      ],
      "c": 2,
      "e": "Un Map conviene cuando las claves no se conocen de antemano, se agregan y quitan seguido o no son strings. Para campos fijos y conocidos, un objeto es más claro."
    },
    {
      "id": 149,
      "t": 9,
      "q": "¿Puede un objeto usarse como clave de Map sin convertirse en string?",
      "o": [
        "No, Map convierte la clave en string",
        "Sí",
        "Solo si tiene una propiedad id"
      ],
      "c": 1,
      "e": "Un Map acepta cualquier valor como clave, incluidos objetos, y los compara por referencia sin convertirlos a string."
    },
    {
      "id": 150,
      "t": 9,
      "q": "Un Map guarda el valor `undefined` en una clave. ¿Cómo se distingue esa clave de una que no existe?",
      "o": [
        "Con mapa.has(clave)",
        "Con mapa.get(clave) === undefined",
        "Comparando el tamaño con cero"
      ],
      "c": 0,
      "e": "`get` devuelve `undefined` tanto si la clave falta como si el valor guardado es `undefined`. `has` responde si la clave existe."
    },
    {
      "id": 151,
      "t": 9,
      "q": "¿En qué orden recorre pares un Map?",
      "o": [
        "En orden alfabético de claves",
        "En orden de inserción",
        "En orden numérico de valores"
      ],
      "c": 1,
      "e": "Un Map recuerda el orden en que se insertaron las claves y las recorre en ese orden."
    },
    {
      "id": 152,
      "t": 9,
      "q": "¿En qué orden recibe argumentos el callback de Map.forEach?",
      "o": [
        "clave, valor, mapa",
        "índice, valor, mapa",
        "valor, clave, mapa"
      ],
      "c": 2,
      "e": "El callback de `Map.forEach` recibe primero el valor y después la clave, igual que el `forEach` de arrays recibe primero el elemento y después el índice."
    },
    {
      "id": 153,
      "t": 9,
      "q": "Hay que buscar muchos alumnos por legajo dentro de un array. ¿Qué se gana al armar antes un Map con el legajo como clave?",
      "o": [
        "Busca por legajo directamente, sin recorrer el array cada vez",
        "Ordena los alumnos por número de legajo",
        "Evita que haya dos alumnos con el mismo nombre"
      ],
      "c": 0,
      "e": "Con un Map indexado por legajo, cada búsqueda es un acceso directo por clave. Buscar en el array obliga a recorrerlo cada vez."
    },
    {
      "id": 154,
      "t": 9,
      "q": "¿Qué tamaño tiene `new Set([\"js\", \"node\", \"js\"])`?",
      "o": [
        "3",
        "1",
        "2"
      ],
      "c": 2,
      "e": "Un Set no guarda duplicados. `\"js\"` aparece dos veces pero se guarda una vez: quedan `\"js\"` y `\"node\"`."
    },
    {
      "id": 155,
      "t": 9,
      "q": "¿Qué valor tiene `new Set([{ id: 1 }, { id: 1 }]).size`?",
      "o": [
        "1",
        "2",
        "0"
      ],
      "c": 1,
      "e": "Un Set compara objetos por referencia. Dos literales `{id: 1}` son objetos distintos, así que ambos se guardan."
    },
    {
      "id": 156,
      "t": 9,
      "q": "Si se agrega a un Set un valor que ya contiene, ¿qué pasa con ese valor?",
      "o": [
        "Queda en su lugar original",
        "Se mueve al final del Set",
        "Se agrega otra copia al final"
      ],
      "c": 0,
      "e": "Agregar un valor que ya está no tiene efecto: no se duplica ni cambia de lugar. Conserva la posición de su primera inserción."
    },
    {
      "id": 157,
      "t": 9,
      "q": "¿Qué contiene la intersección de dos conjuntos?",
      "o": [
        "Los valores de uno u otro conjunto",
        "Solo valores presentes en ambos",
        "Valores presentes en exactamente uno"
      ],
      "c": 1,
      "e": "La intersección contiene solo los valores presentes en ambos conjuntos. La unión tiene los de cualquiera, y la diferencia simétrica, los que están en uno solo."
    },
    {
      "id": 158,
      "t": 9,
      "q": "¿Qué estructura conviene si importan el orden de los elementos y también sus repeticiones?",
      "o": [
        "Set",
        "WeakSet",
        "Array"
      ],
      "c": 2,
      "e": "Un array conserva el orden y admite repetidos. Un Set y un WeakSet eliminan duplicados."
    },
    {
      "id": 159,
      "t": 9,
      "q": "Si los valores de un Map son objetos, ¿qué comparte `new Map(original)` con el Map original?",
      "o": [
        "Las referencias a esos objetos",
        "El mismo Map, con otro nombre",
        "Nada: los valores se clonan también"
      ],
      "c": 0,
      "e": "`new Map(original)` crea un Map nuevo, pero copia las referencias de los valores. Si son objetos, ambos Map comparten los mismos objetos."
    },
    {
      "id": 160,
      "t": 9,
      "q": "¿Qué diferencia principal tiene un WeakMap respecto de un Map?",
      "o": [
        "No impide que el recolector libere sus claves objeto",
        "Permite iterar todas sus claves",
        "Acepta claves primitivas y objetos"
      ],
      "c": 0,
      "e": "WeakMap no impide que sus claves objeto se liberen de la memoria cuando nadie más las usa. Por eso no se puede recorrer ni tiene `size`, y solo acepta objetos como clave."
    },
    {
      "id": 161,
      "t": 9,
      "q": "¿Para qué sirve WeakSet?",
      "o": [
        "Guardar valores primitivos sin duplicados",
        "Marcar objetos sin impedir su liberación",
        "Listar objetos en orden de inserción"
      ],
      "c": 1,
      "e": "WeakSet sirve para marcar objetos (por ejemplo, \"ya procesado\") sin impedir que se liberen de la memoria. No se puede recorrer y no acepta primitivos."
    },
    {
      "id": 162,
      "t": 9,
      "q": "¿Qué método de Set indica si un valor pertenece al conjunto?",
      "o": [
        "set.indexOf(valor)",
        "set.get(valor)",
        "set.has(valor)"
      ],
      "c": 2,
      "e": "`has` responde si el valor pertenece al Set. Los Set no tienen `indexOf` ni `get`."
    },
    {
      "id": 163,
      "t": 10,
      "q": "¿Qué hace más legible la condición de un `if` que expresa una regla importante?",
      "o": [
        "Un valor truthy sin comparar",
        "Una condición con nombre que explique la regla",
        "Una asignación dentro del if"
      ],
      "c": 1,
      "e": "Una condición con nombre, como `const esMayorDeEdad = edad >= 18`, explica la regla de negocio. Un valor truthy sin contexto obliga al lector a deducir la intención."
    },
    {
      "id": 164,
      "t": 10,
      "q": "Cada vez que se ejecuta `if (condición) { A } else { B }`, ¿qué está garantizado?",
      "o": [
        "Se ejecuta uno de los dos caminos",
        "Se ejecutan A y B en orden",
        "No se ejecuta ninguno aunque la condición sea válida"
      ],
      "c": 0,
      "e": "`if...else` garantiza que se ejecuta exactamente uno de los dos bloques: si la condición es truthy, A; si no, B."
    },
    {
      "id": 165,
      "t": 10,
      "q": "Una cadena de `if...else if` clasifica notas en dos grupos: 8 o más, y 6 o más. ¿Qué condición debe ir primero?",
      "o": [
        "La de 6 o más",
        "Cualquiera, pues se evalúan ambas ramas",
        "La de 8 o más"
      ],
      "c": 2,
      "e": "En una cadena de `if...else if` se ejecuta la primera rama que se cumple. Una nota de 9 también es \"6 o más\", así que la condición más exigente tiene que ir primero."
    },
    {
      "id": 166,
      "t": 10,
      "q": "Una función empieza con `if (!pedido) return;`. ¿Qué se logra con esa guarda?",
      "o": [
        "Hace que todas las condiciones sean globales",
        "Obliga a usar switch",
        "Deja el camino válido con menos anidamiento"
      ],
      "c": 2,
      "e": "Una guarda retorna temprano ante el caso inválido. El resto de la función puede suponer que el pedido existe y no necesita anidarse dentro de un `if`."
    },
    {
      "id": 167,
      "t": 10,
      "q": "¿Cuándo conviene anidar dos `if` en lugar de unir las condiciones con `&&`?",
      "o": [
        "Cuando una decisión solo tiene sentido dentro de la otra",
        "Cuando ambas condiciones son independientes y triviales",
        "Cuando hay que garantizar que se evalúen las dos condiciones"
      ],
      "c": 0,
      "e": "Si la segunda condición solo tiene sentido cuando se cumple la primera, anidarlas refleja esa dependencia. Si son independientes, una expresión combinada suele ser más clara."
    },
    {
      "id": 168,
      "t": 10,
      "q": "¿Qué equivale a `!(tieneSaldo && hayStock)`?",
      "o": [
        "`!tieneSaldo && !hayStock`",
        "`!tieneSaldo || !hayStock`",
        "`tieneSaldo || hayStock`"
      ],
      "c": 1,
      "e": "Es la ley de De Morgan: negar un AND equivale a hacer OR de las negaciones. No se puede comprar si falta saldo o si falta stock."
    },
    {
      "id": 169,
      "t": 10,
      "q": "¿Cómo compara `switch` el valor con cada `case`?",
      "o": [
        "Con igualdad flexible (==)",
        "Con igualdad estricta",
        "Con comparación estructural profunda"
      ],
      "c": 1,
      "e": "`switch` compara con `===`, sin conversión de tipos. `case 1` no coincide con `\"1\"`."
    },
    {
      "id": 170,
      "t": 10,
      "q": "¿En qué situación conviene usar `switch`?",
      "o": [
        "Clasificar intervalos numéricos solapados",
        "Repetir hasta que cambie una condición",
        "Elegir según códigos fijos de un estado"
      ],
      "c": 2,
      "e": "`switch` sirve para elegir entre valores discretos, como códigos de estado. Para intervalos numéricos queda más claro un `if...else if`, y para repetir, un bucle."
    },
    {
      "id": 171,
      "t": 10,
      "q": "¿Qué pasa en switch si un case no termina con break, return o throw?",
      "o": [
        "Sigue ejecutando el case siguiente hasta encontrar un corte",
        "Sale del switch al final del case",
        "Se produce SyntaxError al analizar el código"
      ],
      "c": 0,
      "e": "Sin `break`, `return` o `throw`, la ejecución sigue en el `case` siguiente sin evaluar su condición. Esto se llama fall-through."
    },
    {
      "id": 172,
      "t": 10,
      "q": "¿Para qué sirve encerrar entre llaves el código de cada `case` de un `switch`?",
      "o": [
        "Para que cada case tenga su propio alcance",
        "Para que el break sea opcional en ese case",
        "Para que case compare con igualdad flexible"
      ],
      "c": 0,
      "e": "Todos los `case` de un `switch` comparten un único alcance de bloque. Si dos declaran `const` con el mismo nombre, hay SyntaxError. Las llaves crean un alcance propio para cada `case`."
    },
    {
      "id": 173,
      "t": 10,
      "q": "`intentos` empieza en 0. ¿Qué le falta a `while (intentos < 3) { ejecutar(); }` para terminar?",
      "o": [
        "Un else que termine el bucle",
        "Incrementar intentos en el cuerpo",
        "Declarar intentos con const"
      ],
      "c": 1,
      "e": "La condición depende de `intentos`, pero nada lo cambia dentro del bucle: se repite para siempre. Falta algo como `intentos += 1` en el cuerpo."
    },
    {
      "id": 174,
      "t": 10,
      "q": "¿Qué bucle ejecuta el cuerpo al menos una vez antes de evaluar su condición?",
      "o": [
        "while",
        "for clásico",
        "do...while"
      ],
      "c": 2,
      "e": "`do...while` ejecuta el cuerpo primero y evalúa la condición al final, así que corre al menos una vez. `while` evalúa antes de entrar."
    },
    {
      "id": 175,
      "t": 10,
      "q": "¿En qué orden se ejecutan las partes de un `for` clásico?",
      "o": [
        "Inicio, condición, cuerpo, actualización, condición",
        "Inicio, condición, actualización, cuerpo, condición",
        "Inicio, cuerpo, condición, actualización, cuerpo"
      ],
      "c": 0,
      "e": "El `for` clásico inicializa una vez, evalúa la condición, ejecuta el cuerpo, actualiza y vuelve a evaluar la condición. Así hasta que sea falsa."
    },
    {
      "id": 176,
      "t": 10,
      "q": "¿Qué bucle recorre valores de un array o Set?",
      "o": [
        "for...in",
        "switch",
        "for...of"
      ],
      "c": 2,
      "e": "`for...of` recorre los valores de cualquier iterable, como arrays, Set, Map o strings."
    },
    {
      "id": 177,
      "t": 10,
      "q": "¿Qué recorre `for...in` sobre un objeto?",
      "o": [
        "Los valores de las propiedades propias",
        "Claves enumerables, también las heredadas",
        "Las claves propias, incluidas las symbol"
      ],
      "c": 1,
      "e": "`for...in` recorre los nombres de las propiedades enumerables del objeto, incluidas las heredadas del prototipo. No recorre claves symbol."
    },
    {
      "id": 178,
      "t": 10,
      "q": "¿Qué hace break dentro de un bucle?",
      "o": [
        "Salta solo a la vuelta siguiente",
        "Reinicia el contador",
        "Termina el bucle más cercano"
      ],
      "c": 2,
      "e": "`break` termina el bucle más cercano que lo contiene. La ejecución sigue después del bucle."
    },
    {
      "id": 179,
      "t": 10,
      "q": "¿Qué hace continue dentro de un bucle?",
      "o": [
        "Pasa a la vuelta siguiente",
        "Termina el bucle más cercano",
        "Sale de todos los bucles anidados"
      ],
      "c": 0,
      "e": "`continue` saltea el resto de la vuelta actual y pasa a la siguiente. El bucle no termina."
    },
    {
      "id": 180,
      "t": 10,
      "q": "¿Qué permite `break etiqueta` en bucles anidados?",
      "o": [
        "Salir del bucle interior, como un break común",
        "Salir directamente del bucle que tiene esa etiqueta",
        "Volver al comienzo del bucle exterior"
      ],
      "c": 1,
      "e": "Una etiqueta nombra un bucle. `break etiqueta` sale directamente de ese bucle, aunque haya otros anidados dentro."
    },
    {
      "id": 181,
      "t": 10,
      "q": "Un bucle recorre un array por índice y elimina elementos con `splice`. ¿Por qué puede saltearse elementos?",
      "o": [
        "El siguiente se corre al índice actual",
        "splice deja un hueco en esa posición",
        "splice reordena el resto del array"
      ],
      "c": 0,
      "e": "Al eliminar con `splice`, los elementos siguientes se corren una posición hacia atrás. Si el índice avanza igual, el elemento que ocupó el lugar del eliminado queda sin revisar."
    },
    {
      "id": 182,
      "t": 10,
      "q": "¿Cuándo conviene usar el operador ternario `condición ? a : b`?",
      "o": [
        "Al encadenar varias decisiones anidadas",
        "Al ejecutar una acción sin valor de retorno",
        "Al elegir un valor entre dos alternativas de forma breve"
      ],
      "c": 2,
      "e": "El ternario es una expresión: elige uno de dos valores en una línea. Anidado o usado para ejecutar acciones, se vuelve difícil de leer."
    },
    {
      "id": 183,
      "t": 11,
      "q": "Dentro de un bloque, `JSON.parse` lanza un error porque el texto no es JSON válido. ¿Qué pasa con la sentencia siguiente de ese bloque?",
      "o": [
        "Se ejecuta con el valor undefined",
        "No se ejecuta: la excepción corta el bloque y se propaga",
        "Se ejecuta y el error se registra en consola"
      ],
      "c": 1,
      "e": "Cuando una sentencia lanza, el resto del bloque no se ejecuta. La excepción se propaga hasta un `catch` o, si no lo hay, detiene el programa."
    },
    {
      "id": 184,
      "t": 11,
      "q": "Si una sentencia dentro de `try` lanza un error, ¿dónde continúa la ejecución?",
      "o": [
        "Al comienzo del try",
        "Directo al finally",
        "Al catch correspondiente"
      ],
      "c": 2,
      "e": "Cuando algo lanza dentro de `try`, el control salta de inmediato al `catch`. Después se ejecuta `finally`, si existe."
    },
    {
      "id": 185,
      "t": 11,
      "q": "¿Por qué se recomienda lanzar `new Error(mensaje)` y no una cadena?",
      "o": [
        "Permite capturarlo con catch",
        "Incluye nombre, mensaje y pila",
        "Hace que el error no detenga el programa"
      ],
      "c": 1,
      "e": "Un objeto `Error` incluye `name`, `message` y `stack` (la pila de llamadas), y puede llevar `cause`. Un string también se puede capturar, pero no trae esa información."
    },
    {
      "id": 186,
      "t": 11,
      "q": "Una función `dividir` no admite divisor cero y, si lo recibe, hace `throw new RangeError(...)`. ¿Qué expresa ese error?",
      "o": [
        "Que la entrada incumple el contrato de esa función",
        "Que JavaScript lanza al dividir un number por cero",
        "Que cero se convierte en null"
      ],
      "c": 0,
      "e": "`RangeError` indica que un valor está fuera de lo aceptado. JavaScript no lanza nada al dividir un number por cero: da `Infinity`. Si la función prohíbe el cero, es su contrato y debe lanzar ella."
    },
    {
      "id": 187,
      "t": 11,
      "q": "Una función busca un alumno, y que no exista es un resultado habitual. ¿Qué conviene que devuelva si no lo encuentra?",
      "o": [
        "Lanzar una excepción al no encontrarlo",
        "Un objeto alumno con campos vacíos",
        "Un resultado documentado como null"
      ],
      "c": 2,
      "e": "Si no encontrar es un resultado esperado, devolver `null` (documentado) es más claro que lanzar. Las excepciones son para situaciones que la función no puede resolver."
    },
    {
      "id": 188,
      "t": 11,
      "q": "¿Qué error lanza JavaScript cuando una operación recibe un valor de un tipo que no corresponde?",
      "o": [
        "TypeError",
        "RangeError",
        "URIError"
      ],
      "c": 0,
      "e": "TypeError aparece cuando una operación recibe un valor del tipo equivocado, por ejemplo al llamar a algo que no es una función."
    },
    {
      "id": 189,
      "t": 11,
      "q": "¿Qué error lanza `JSON.parse` si el texto está mal formado?",
      "o": [
        "ReferenceError",
        "SyntaxError",
        "AggregateError"
      ],
      "c": 1,
      "e": "`JSON.parse` lanza SyntaxError si el texto no es JSON válido."
    },
    {
      "id": 190,
      "t": 11,
      "q": "Una función de stock lanza un error que incluye las propiedades `disponible` y `requerido`. ¿Qué ventaja tiene eso?",
      "o": [
        "Hace innecesario el mensaje de error",
        "Permite decidir con datos, no con el texto",
        "Hace que el error no necesite capturarse"
      ],
      "c": 1,
      "e": "Con propiedades como `disponible` y `requerido`, quien captura el error puede decidir con datos. Extraer esos números del texto del mensaje es frágil."
    },
    {
      "id": 191,
      "t": 11,
      "q": "Se captura un error técnico y se lanza otro, más comprensible para la aplicación. ¿Qué propiedad del nuevo error guarda el error original?",
      "o": [
        "stackLength",
        "responseText",
        "cause"
      ],
      "c": 2,
      "e": "`cause` guarda el error original: `new Error(\"mensaje\", { cause: error })`. Así se traduce a un error de dominio sin perder el detalle técnico."
    },
    {
      "id": 192,
      "t": 11,
      "q": "¿Por qué conviene evitar un único `try` que envuelva el parseo, la validación, el guardado y la notificación?",
      "o": [
        "Se vuelve difícil saber qué etapa falló y cómo recuperarse",
        "Impide que finally se ejecute",
        "Hace más lento el código del try"
      ],
      "c": 0,
      "e": "Con un `try` enorme, el `catch` no sabe qué etapa falló y no puede elegir cómo recuperarse. Varios `try` pequeños permiten tratar cada fallo según su causa."
    },
    {
      "id": 193,
      "t": 11,
      "q": "Un `catch` recibe un error que no sabe manejar. ¿Cómo conviene relanzarlo para conservar su tipo y su pila?",
      "o": [
        "`throw new Error(error.message)` sin causa",
        "`throw error`",
        "`return false`"
      ],
      "c": 1,
      "e": "`throw error` relanza el mismo objeto, con su tipo, su pila y su causa intactos. Crear un `Error` nuevo solo con el mensaje pierde esa información."
    },
    {
      "id": 194,
      "t": 11,
      "q": "¿Cuándo se ejecuta el bloque `finally`?",
      "o": [
        "Siempre: tras un éxito, un return o una excepción del try",
        "Solo cuando el try lanza una excepción",
        "Solo si el try no terminó con return"
      ],
      "c": 0,
      "e": "`finally` se ejecuta siempre al salir del `try`: si terminó bien, si hubo un `return` o si hubo una excepción, capturada o no."
    },
    {
      "id": 195,
      "t": 11,
      "q": "¿Qué riesgo tiene escribir `return` dentro de un bloque `finally`?",
      "o": [
        "Impide que finally termine de limpiar",
        "Relanza la excepción que se había capturado",
        "Puede tapar el return o el error del try"
      ],
      "c": 2,
      "e": "Un `return` dentro de `finally` reemplaza el valor que iba a devolver el `try` y descarta cualquier excepción pendiente, que queda silenciada."
    },
    {
      "id": 196,
      "t": 11,
      "q": "Dentro de un `try` se llama a una función que devuelve una promesa, sin `await`. Si la promesa se rechaza después, ¿por qué el `catch` no lo captura?",
      "o": [
        "catch no puede recibir objetos Promise",
        "El try ya terminó cuando llega el rechazo",
        "El rechazo se convierte en undefined sin error"
      ],
      "c": 1,
      "e": "Sin `await`, el `try` termina en cuanto crea la promesa. El rechazo llega más tarde, cuando el `try` ya no está activo. Con `await`, el rechazo se convierte en una excepción dentro del `try`."
    },
    {
      "id": 197,
      "t": 11,
      "q": "Después de `const response = await fetch(url)`, ¿qué hay que comprobar para detectar una respuesta 404?",
      "o": [
        "response.ok o response.status",
        "Si la promesa de fetch fue rechazada",
        "Si response.json() devuelve null"
      ],
      "c": 0,
      "e": "`fetch` solo rechaza ante fallos de red. Un 404 es una respuesta válida: la promesa se resuelve y hay que revisar `response.ok` (falso para 4xx y 5xx) o `response.status`."
    },
    {
      "id": 198,
      "t": 11,
      "q": "¿Qué devuelve Promise.allSettled cuando algunas tareas fallan?",
      "o": [
        "Solo los valores de las tareas exitosas",
        "El primer rechazo, como Promise.all",
        "Un objeto por tarea con su estado: fulfilled o rejected"
      ],
      "c": 2,
      "e": "`Promise.allSettled` espera todas las tareas y devuelve un objeto por cada una: `{ status: \"fulfilled\", value }` o `{ status: \"rejected\", reason }`. Nunca se rechaza."
    },
    {
      "id": 199,
      "t": 11,
      "q": "Si la aplicación falla por un error interno, ¿qué conviene mostrarle a quien la usa?",
      "o": [
        "El mensaje técnico original del error",
        "Un mensaje claro, sin detalles internos",
        "El código de error y la pila resumida"
      ],
      "c": 1,
      "e": "A la persona usuaria le sirve un mensaje comprensible sobre qué pasó y qué puede hacer. La pila y los detalles técnicos van al registro interno: mostrarlos confunde y puede exponer información sensible."
    },
    {
      "id": 200,
      "t": 11,
      "q": "En una tienda, quedarse sin stock es un caso frecuente. ¿Cómo conviene que la función que procesa la compra informe ese caso?",
      "o": [
        "Lanzar un Error y capturarlo arriba",
        "Devolver undefined sin explicación",
        "Un resultado con ok false y motivo"
      ],
      "c": 2,
      "e": "Si falta de stock es un caso frecuente, forma parte del flujo normal. Devolver un resultado como `{ ok: false, motivo }` lo hace explícito, y las excepciones quedan para lo inesperado."
    },
    {
      "id": 201,
      "t": 12,
      "q": "¿Qué diferencia hay entre `sumar` y `sumar(2, 3)`?",
      "o": [
        "Uno nombra la función; el otro la ejecuta con 2 y 3",
        "Ambos llaman; el primero sin argumentos",
        "El primero es un string con el nombre"
      ],
      "c": 0,
      "e": "`sumar` es una referencia a la función: se puede pasar o guardar sin ejecutarla. Los paréntesis la invocan: `sumar(2, 3)` la ejecuta y da el resultado."
    },
    {
      "id": 202,
      "t": 12,
      "q": "En `function presentar(nombre) {}`, ¿qué es `nombre`?",
      "o": [
        "Un argumento de la llamada",
        "Un parámetro de la función",
        "Una variable global implícita"
      ],
      "c": 1,
      "e": "`nombre` es un parámetro: una variable local que se declara en la definición de la función. El argumento es el valor concreto que se pasa en cada llamada."
    },
    {
      "id": 203,
      "t": 12,
      "q": "Una función se llama sin pasarle un argumento, y ese parámetro no tiene valor predeterminado. ¿Qué valor tiene el parámetro?",
      "o": [
        "undefined",
        "null",
        "ReferenceError"
      ],
      "c": 0,
      "e": "Un parámetro sin argumento y sin valor predeterminado queda en `undefined`. No se lanza ningún error."
    },
    {
      "id": 204,
      "t": 12,
      "q": "¿Se puede llamar a `duplicar()` en una línea anterior a su declaración `function duplicar(n) {...}`, dentro del mismo alcance?",
      "o": [
        "No, lanza ReferenceError",
        "Solo si está en modo estricto",
        "Sí"
      ],
      "c": 2,
      "e": "Las declaraciones `function` se elevan completas, con nombre y cuerpo, así que se pueden llamar antes de su línea dentro del mismo alcance."
    },
    {
      "id": 205,
      "t": 12,
      "q": "¿Se puede llamar a una función guardada con `const f = () => ...` en una línea anterior a esa declaración?",
      "o": [
        "Sí, se eleva igual que una declaración completa",
        "No, sigue las reglas de const",
        "Solo si no recibe argumentos"
      ],
      "c": 1,
      "e": "Una función guardada en `const` sigue las reglas de `const`. Antes de la línea está en la zona muerta temporal y usarla lanza ReferenceError."
    },
    {
      "id": 206,
      "t": 12,
      "q": "Una función flecha sin llaves debe devolver un objeto literal. ¿Con qué hay que rodear el objeto?",
      "o": [
        "Corchetes de array",
        "Comillas",
        "Paréntesis"
      ],
      "c": 2,
      "e": "Sin paréntesis, las llaves se interpretan como el cuerpo de la función, no como un objeto. `() => ({ a: 1 })` devuelve el objeto."
    },
    {
      "id": 207,
      "t": 12,
      "q": "Dentro de un método común se define una función flecha. ¿Qué `this` usa la flecha?",
      "o": [
        "El mismo this que tiene el método que la contiene",
        "Uno nuevo creado por la flecha",
        "globalThis, en modo no estricto"
      ],
      "c": 0,
      "e": "La flecha no crea su propio `this`: toma el del alcance donde se escribió. Dentro de un método, ese `this` es el del método."
    },
    {
      "id": 208,
      "t": 12,
      "q": "Un método usa `this`. ¿Qué puede pasar si se guarda ese método en una variable y se lo llama desde ella?",
      "o": [
        "El objeto se clona",
        "El método se convierte en generador",
        "Puede perder el receptor original"
      ],
      "c": 2,
      "e": "`this` se decide en cada llamada según lo que está antes del punto. Si se guarda el método en una variable y se llama solo, pierde el objeto y `this` queda `undefined` en modo estricto."
    },
    {
      "id": 209,
      "t": 12,
      "q": "¿Qué hace `persona.saludar.bind(persona)`?",
      "o": [
        "Llama a saludar con this = persona",
        "Crea una función nueva con this fijado en persona",
        "Cambia saludar en el propio objeto"
      ],
      "c": 1,
      "e": "`bind` no llama a la función: devuelve una función nueva cuyo `this` queda fijado en `persona`. `call` y `apply`, en cambio, la ejecutan en el momento."
    },
    {
      "id": 210,
      "t": 12,
      "q": "Con `function f(x = 3) { return x; }`, ¿con qué argumento `f` devuelve 3?",
      "o": [
        "undefined",
        "null",
        "`\"\"` (cadena vacía)"
      ],
      "c": 0,
      "e": "El valor predeterminado solo se activa con `undefined` u omisión. `null` y `\"\"` son valores explícitos y se respetan."
    },
    {
      "id": 211,
      "t": 12,
      "q": "¿Dónde debe ubicarse `...resto` en la lista de parámetros?",
      "o": [
        "Al comienzo",
        "Al final",
        "En cualquier posición"
      ],
      "c": 1,
      "e": "El parámetro rest junta los argumentos restantes, así que tiene que ser el último. En otra posición produce SyntaxError."
    },
    {
      "id": 212,
      "t": 12,
      "q": "¿Qué ventaja tiene el parámetro rest (`...args`) frente al objeto `arguments`?",
      "o": [
        "Un this propio dentro de las flechas",
        "La cantidad de argumentos recibidos",
        "Un array real de argumentos, también en flechas"
      ],
      "c": 2,
      "e": "Rest crea un array real, con `map`, `filter` y los demás métodos. `arguments` no es un array, y las funciones flecha no tienen `arguments` propio."
    },
    {
      "id": 213,
      "t": 12,
      "q": "La función `function f({ a, b }) {...}` se llama como `f(null)`. ¿Qué ocurre?",
      "o": [
        "Lanza TypeError al intentar desestructurar null",
        "Usa los valores predeterminados",
        "Desestructura un objeto vacío"
      ],
      "c": 0,
      "e": "Desestructurar `null` o `undefined` lanza TypeError al entrar a la función, antes de ejecutar el cuerpo. Para evitarlo, se usa un predeterminado: `({ a, b } = {})`."
    },
    {
      "id": 214,
      "t": 12,
      "q": "Una función recibe un número y dentro le asigna el doble a su parámetro. ¿Cambia la variable que se pasó como argumento?",
      "o": [
        "Sí, porque se pasa por referencia",
        "No",
        "Solo si la función usa return"
      ],
      "c": 1,
      "e": "Los números se pasan por valor: el parámetro es una copia. Cambiarlo dentro de la función no afecta la variable exterior."
    },
    {
      "id": 215,
      "t": 12,
      "q": "Una función recibe un objeto y modifica una de sus propiedades. ¿Qué ve después el código que la llamó?",
      "o": [
        "El cambio, porque ambos apuntan al mismo objeto",
        "El objeto sin cambios, porque se copió",
        "El cambio, solo si la función lo devuelve"
      ],
      "c": 0,
      "e": "Se copia la referencia, no el objeto. La función y quien la llamó apuntan al mismo objeto, así que el cambio de una propiedad se ve desde afuera."
    },
    {
      "id": 216,
      "t": 12,
      "q": "Una función recibe un objeto y asigna un objeto nuevo a su parámetro. ¿A qué apunta la variable que se pasó como argumento?",
      "o": [
        "Pasa a apuntar al nuevo objeto",
        "Se vuelve undefined",
        "Permanece apuntando al objeto original"
      ],
      "c": 2,
      "e": "Reasignar el parámetro solo cambia a qué apunta la variable local. La variable exterior sigue apuntando al objeto original."
    },
    {
      "id": 217,
      "t": 12,
      "q": "¿Qué devuelve una función que solo hace console.log y no retorna?",
      "o": [
        "El texto impreso",
        "La última variable local",
        "undefined"
      ],
      "c": 2,
      "e": "Una función sin `return`, o con `return` solo, devuelve `undefined`. `console.log` muestra texto pero no lo devuelve."
    },
    {
      "id": 218,
      "t": 12,
      "q": "¿Qué pasa si se escribe `return` y el objeto literal que se quiere devolver empieza en la línea siguiente?",
      "o": [
        "Que el objeto se devuelva normalmente",
        "Que la función devuelva undefined",
        "Que se produzca un SyntaxError"
      ],
      "c": 1,
      "e": "La inserción automática de punto y coma pone un `;` después de `return` si la línea termina ahí. La función devuelve `undefined` y el objeto no se evalúa. El `{` tiene que ir en la misma línea que `return`."
    },
    {
      "id": 219,
      "t": 12,
      "q": "Una función necesita devolver varios datos. ¿Qué estructura les da nombres claros?",
      "o": [
        "Un objeto con una propiedad por cada dato",
        "Varios return, uno por cada dato",
        "Un array con los datos en orden"
      ],
      "c": 0,
      "e": "Un objeto nombra cada dato devuelto: `return { total, promedio }`. Un array obliga a recordar qué posición es cada cosa."
    },
    {
      "id": 220,
      "t": 12,
      "q": "Una función interior usa una variable exterior, y esa variable cambia después de crear la función. ¿Qué valor ve la función interior?",
      "o": [
        "Una copia del valor inicial",
        "El valor que tenía al declarar la clausura",
        "La variable, con su valor actual"
      ],
      "c": 2,
      "e": "Una clausura guarda la variable, no una foto de su valor. Si la variable cambia, la función ve el valor actual."
    },
    {
      "id": 221,
      "t": 12,
      "q": "¿Qué devuelve siempre una función marcada async?",
      "o": [
        "Un valor síncrono sin envoltorio",
        "Una promesa",
        "Un generador"
      ],
      "c": 1,
      "e": "Una función `async` siempre devuelve una promesa. Si retorna un valor, la promesa se resuelve con él; si lanza, se rechaza."
    },
    {
      "id": 222,
      "t": 12,
      "q": "¿Cuándo se ejecuta el código dentro de una función generadora?",
      "o": [
        "Cuando se llama a next()",
        "Al llamar a la función generadora",
        "Al declararse la función"
      ],
      "c": 0,
      "e": "Llamar a una función generadora no ejecuta su cuerpo: devuelve un iterador. El cuerpo avanza hasta el siguiente `yield` cada vez que se pide un valor, por ejemplo con `next()` o `for...of`."
    },
    {
      "id": 223,
      "t": 12,
      "q": "Una función usa la variable `tasa` sin declararla adentro. ¿Dónde la busca JavaScript?",
      "o": [
        "En el objeto desde el que la llamaron",
        "En el alcance del lugar donde se la llama",
        "En los alcances del lugar donde fue definida la función"
      ],
      "c": 2,
      "e": "JavaScript usa alcance léxico: una variable libre se busca en los alcances que rodean el lugar donde se escribió la función, no donde se la llama."
    },
    {
      "id": 224,
      "t": 12,
      "q": "`crearContador()` devuelve funciones que modifican una variable local. Si se llama dos veces a `crearContador()`, ¿qué comparten los dos contadores?",
      "o": [
        "Nada: cada llamada tiene su propio estado",
        "El mismo contador, porque la función es única",
        "Solo el valor inicial del contador"
      ],
      "c": 0,
      "e": "Cada llamada a `crearContador` crea un alcance nuevo con su propia variable. Las funciones de cada llamada comparten su contador, pero no el de la otra."
    },
    {
      "id": 225,
      "t": 12,
      "q": "¿Qué muestra `funciones.map(fn => fn())` al final de este código?\n\n```js\nconst funciones = [];\nfor (let i = 0; i < 3; i += 1) {\n  funciones.push(() => i);\n}\n```",
      "o": [
        "Un array con 3, 3 y 3",
        "Un array con 0, 1 y 2",
        "Un array con 2, 2 y 2"
      ],
      "c": 1,
      "e": "`let` en un `for` crea una variable nueva en cada vuelta, así que cada flecha captura su propio `i`: 0, 1 y 2. Con `var` habría una sola variable y las tres verían 3."
    },
    {
      "id": 226,
      "t": 12,
      "q": "Al documentar una función que recibe un callback, ¿qué conviene aclarar?",
      "o": [
        "Si lo ejecuta enseguida, varias veces o más tarde",
        "Que lo ejecuta exactamente una vez y de forma inmediata",
        "Que el callback no puede devolver un valor"
      ],
      "c": 0,
      "e": "Quien recibe un callback debe decir cuándo y cuántas veces lo llama: en el momento, varias veces o más tarde. De eso depende cómo se escribe el callback."
    },
    {
      "id": 227,
      "t": 13,
      "q": "¿Qué caracteriza a una función de orden superior?",
      "o": [
        "Se llama a sí misma",
        "Recibe o devuelve funciones",
        "No tiene efectos secundarios"
      ],
      "c": 1,
      "e": "Una función de orden superior recibe funciones como argumento, devuelve funciones o ambas cosas, como `map`, `filter` o una fábrica de funciones."
    },
    {
      "id": 228,
      "t": 13,
      "q": "¿Qué condiciones cumple una función pura?",
      "o": [
        "Mismo resultado, aunque modifique variables externas",
        "Ningún efecto externo, aunque cambie el resultado",
        "Siempre el mismo resultado y ningún efecto externo observable"
      ],
      "c": 2,
      "e": "Una función pura siempre devuelve el mismo resultado para las mismas entradas y no produce efectos externos observables (no modifica variables de afuera ni hace entrada o salida)."
    },
    {
      "id": 229,
      "t": 13,
      "q": "Una función que calcula un impuesto lee la variable global `tasaActual`. ¿Por qué eso la vuelve impura?",
      "o": [
        "Leer una variable global la modifica",
        "Toda multiplicación con decimales es impura",
        "Su resultado depende de algo externo"
      ],
      "c": 2,
      "e": "Si la función lee una variable global, su resultado depende de algo que no está en sus argumentos. Con el mismo argumento puede dar distinto resultado, y eso la hace impura."
    },
    {
      "id": 230,
      "t": 13,
      "q": "En un programa hecho con funciones puras, ¿dónde conviene ubicar la lectura de archivos y la escritura de resultados?",
      "o": [
        "Dentro de cada transformación del pipeline",
        "En los bordes del programa: al entrar y al salir",
        "En una función auxiliar por cada dato"
      ],
      "c": 1,
      "e": "Conviene concentrar la entrada y salida (leer archivos, escribir, mostrar) en los bordes del programa, y dejar el centro hecho de transformaciones puras, más fáciles de probar."
    },
    {
      "id": 231,
      "t": 13,
      "q": "¿En qué se diferencia `{ ...alumno, nota: 8 }` de hacer `alumno.nota = 8`?",
      "o": [
        "Crea una versión exterior nueva con nota 8",
        "Clona profundamente cualquier objeto anidado",
        "Borra todas las otras propiedades"
      ],
      "c": 0,
      "e": "El spread crea un objeto exterior nuevo con `nota: 8` y deja intacto `alumno`. Es una copia superficial: los objetos anidados siguen compartidos."
    },
    {
      "id": 232,
      "t": 13,
      "q": "Una función crea un Map dentro de su cuerpo, lo modifica y no toca sus argumentos. ¿Puede ser pura?",
      "o": [
        "No, cualquier mutación la vuelve impura",
        "Solo si el Map se congela al terminar",
        "Sí, si no hay efectos visibles afuera"
      ],
      "c": 2,
      "e": "La pureza se juzga desde afuera. Si la función crea y modifica su propio Map interno, no toca sus entradas y su resultado depende solo de ellas, sigue siendo pura."
    },
    {
      "id": 233,
      "t": 13,
      "q": "¿Cuántos elementos agrega `map` al resultado por cada elemento del array?",
      "o": [
        "Cero o una, según el callback",
        "Una",
        "Tantas como devuelva el callback"
      ],
      "c": 1,
      "e": "`map` produce exactamente un resultado por cada elemento, así que el array nuevo tiene la misma longitud. Para devolver cero o varios por elemento existe `flatMap`."
    },
    {
      "id": 234,
      "t": 13,
      "q": "¿Qué decide la función que se le pasa a `filter`?",
      "o": [
        "Si se conserva cada elemento",
        "El orden de inserción global",
        "La cantidad exacta de llamadas futuras"
      ],
      "c": 0,
      "e": "El predicado de `filter` devuelve verdadero o falso para cada elemento: verdadero lo conserva, falso lo descarta."
    },
    {
      "id": 235,
      "t": 13,
      "q": "En `reduce`, ¿qué papel cumple el valor inicial?",
      "o": [
        "Es el primer elemento que se procesa",
        "Es el acumulador de la primera vuelta",
        "Es el valor que se devuelve si falla"
      ],
      "c": 1,
      "e": "El valor inicial es el acumulador en la primera vuelta. Sin él, `reduce` usa el primer elemento como acumulador y empieza desde el segundo."
    },
    {
      "id": 236,
      "t": 13,
      "q": "¿Qué método de array deja de recorrer apenas encuentra un elemento que cumple la condición y devuelve un booleano?",
      "o": [
        "every",
        "forEach",
        "some"
      ],
      "c": 2,
      "e": "`some` se detiene en cuanto un elemento cumple, porque ya sabe que la respuesta es verdadera. `forEach` recorre todo siempre, y `every` se detiene en el primero que no cumple."
    },
    {
      "id": 237,
      "t": 13,
      "q": "¿Cuándo es `forEach` el método adecuado?",
      "o": [
        "Cuando solo importa el efecto por elemento",
        "Cuando se necesita un array transformado",
        "Cuando hay que cortar el recorrido antes"
      ],
      "c": 0,
      "e": "`forEach` comunica que se busca un efecto por elemento (mostrar, guardar) y no un resultado. No permite `break` ni devuelve un array."
    },
    {
      "id": 238,
      "t": 13,
      "q": "¿Cuántos elementos puede aportar al resultado cada llamada de la función que recibe `flatMap`?",
      "o": [
        "Cero, uno o varios elementos",
        "Exactamente un elemento, como map",
        "Un array anidado sin aplanar"
      ],
      "c": 0,
      "e": "`flatMap` aplica la función y aplana un nivel. Si la función devuelve `[]`, el elemento desaparece; si devuelve `[a, b]`, aparecen dos."
    },
    {
      "id": 239,
      "t": 13,
      "q": "¿Qué método ordena un array devolviendo un array nuevo, sin modificar el original?",
      "o": [
        "sort",
        "toReversed",
        "toSorted"
      ],
      "c": 2,
      "e": "`toSorted` devuelve un array nuevo ordenado. `sort` ordena el original, y `toReversed` crea una copia invertida, no ordenada."
    },
    {
      "id": 240,
      "t": 13,
      "q": "¿Qué hacen, en orden, los pasos `filter`, `map` y `reduce` encadenados?",
      "o": [
        "Acumular, ordenar y borrar",
        "Seleccionar, transformar y acumular",
        "Crear un objeto, clonarlo y serializarlo"
      ],
      "c": 1,
      "e": "`filter` selecciona los elementos, `map` los transforma y `reduce` los acumula en un único resultado."
    },
    {
      "id": 241,
      "t": 13,
      "q": "¿Qué hace una función `pipe` que recibe varias funciones y las aplica de izquierda a derecha?",
      "o": [
        "Ejecuta todas las funciones sobre la entrada original sin relación",
        "Vuelve cada función recursiva",
        "Pasa la salida de una transformación a la siguiente"
      ],
      "c": 2,
      "e": "`pipe` encadena funciones de izquierda a derecha: la salida de cada una es la entrada de la siguiente, como una cañería."
    },
    {
      "id": 242,
      "t": 13,
      "q": "Si `esImpar = n => !esPar(n)`, ¿qué papel tiene `esPar`?",
      "o": [
        "Un predicado que se reutiliza",
        "Una función de orden superior",
        "Un callback que se ejecuta después"
      ],
      "c": 0,
      "e": "`esPar` es un predicado (devuelve verdadero o falso) que se reutiliza para definir otro por negación. Así la regla vive en un solo lugar."
    },
    {
      "id": 243,
      "t": 13,
      "q": "¿Qué ocurre al ejecutar `array.filter(...).map(...)`?",
      "o": [
        "Nada se ejecuta hasta pedir el resultado",
        "Cada una crea un array intermedio",
        "Se combinan en un único recorrido"
      ],
      "c": 1,
      "e": "Los métodos de array son ansiosos: `filter` recorre todo y crea un array intermedio, y después `map` recorre ese array y crea otro."
    },
    {
      "id": 244,
      "t": 13,
      "q": "¿Qué ventaja tiene usar un generador para producir una secuencia muy grande?",
      "o": [
        "Calcular todos los valores por adelantado",
        "Ejecutarse en paralelo con el resto",
        "Producir solo los valores consumidos"
      ],
      "c": 2,
      "e": "Un generador produce cada valor solo cuando se lo piden. En una secuencia enorme o infinita, se calculan únicamente los valores que se consumen."
    },
    {
      "id": 245,
      "t": 13,
      "q": "¿Por qué `[\"10\", \"10\", \"10\"].map(parseInt)` puede dar resultados inesperados?",
      "o": [
        "map pasa el índice y parseInt lo usa como base",
        "map convierte cada string en número antes",
        "parseInt necesita que la base sea un string"
      ],
      "c": 0,
      "e": "`map` pasa tres argumentos (elemento, índice y array), y `parseInt` usa el segundo como base. Resulta `parseInt(\"10\", 0)`, `parseInt(\"10\", 1)` y `parseInt(\"10\", 2)`: 10, NaN y 2."
    },
    {
      "id": 246,
      "t": 13,
      "q": "¿Qué devuelve la función `n => { n * 2; }` al llamarla?",
      "o": [
        "El doble de n",
        "undefined",
        "Un objeto con el doble de n"
      ],
      "c": 1,
      "e": "Con llaves, la flecha tiene un cuerpo de bloque y necesita `return`. Sin él devuelve `undefined`. El retorno implícito solo existe sin llaves: `n => n * 2`."
    },
    {
      "id": 247,
      "t": 14,
      "q": "¿Qué crea cada llamada recursiva para guardar sus parámetros y variables locales?",
      "o": [
        "Una variable global nueva",
        "Un marco propio en la pila",
        "Un hilo de ejecución propio"
      ],
      "c": 1,
      "e": "Cada llamada, recursiva o no, crea un marco propio en la pila de llamadas, con sus parámetros y variables locales. Por eso las llamadas no se pisan entre sí."
    },
    {
      "id": 248,
      "t": 14,
      "q": "¿Qué hace el caso base de una función recursiva?",
      "o": [
        "Resuelve una entrada sin hacer otra llamada",
        "Duplica la entrada para la llamada siguiente",
        "Ordena los nodos del árbol"
      ],
      "c": 0,
      "e": "El caso base resuelve directamente una entrada simple, sin volver a llamar a la función. Sin caso base, la recursión no termina."
    },
    {
      "id": 249,
      "t": 14,
      "q": "Cuando una función recursiva no está en el caso base y se llama a sí misma, ¿qué debe garantizar esa llamada?",
      "o": [
        "Reducir el problema a la mitad",
        "Hacer al menos dos llamadas",
        "Acercarse al caso base con una entrada más pequeña"
      ],
      "c": 2,
      "e": "Cada llamada recursiva debe trabajar con una entrada más pequeña, que se acerque al caso base. Si no, la recursión es infinita y termina en un desbordamiento de pila."
    },
    {
      "id": 250,
      "t": 14,
      "q": "En `factorial(n) = n * factorial(n - 1)`, ¿qué operación combina el resultado de la llamada recursiva?",
      "o": [
        "La multiplicación por n",
        "La lectura de n sin cambio",
        "La creación de un array"
      ],
      "c": 0,
      "e": "`factorial(n - 1)` resuelve el problema más chico. Multiplicarlo por `n` combina ese resultado y da la solución del problema actual."
    },
    {
      "id": 251,
      "t": 14,
      "q": "Para sumar un array de millones de elementos, ¿por qué conviene un bucle en lugar de recursión?",
      "o": [
        "Permite sumar sin variable acumuladora",
        "Evita un marco de pila por elemento",
        "Recorre el array en orden inverso"
      ],
      "c": 1,
      "e": "Cada llamada recursiva ocupa un marco en la pila. Con un array enorme, la pila se desborda (RangeError). Un bucle usa memoria constante."
    },
    {
      "id": 252,
      "t": 14,
      "q": "Un documento tiene secciones que pueden contener otras secciones, sin límite de profundidad. ¿Por qué una función recursiva es adecuada para recorrerlo?",
      "o": [
        "Las secciones forman una lista plana",
        "La profundidad se conoce de antemano",
        "Cada sección tiene la misma forma que la sección que la contiene"
      ],
      "c": 2,
      "e": "Una sección que contiene secciones es una estructura recursiva: cada parte tiene la misma forma que el todo. Una función recursiva recorre cualquier profundidad con el mismo código."
    },
    {
      "id": 253,
      "t": 14,
      "q": "En un árbol binario, ¿qué indica que un nodo tenga `null` como hijo?",
      "o": [
        "Un subárbol vacío",
        "Un nodo con valor cero",
        "Una referencia al padre"
      ],
      "c": 0,
      "e": "`null` como hijo indica que ese subárbol está vacío: no hay nodo de ese lado."
    },
    {
      "id": 254,
      "t": 14,
      "q": "En un árbol binario de búsqueda, ¿dónde van los valores menores que el nodo?",
      "o": [
        "En la rama que tenga menos nodos",
        "En su subárbol menor",
        "En el subárbol mayor, si hay lugar"
      ],
      "c": 1,
      "e": "En un árbol binario de búsqueda, los valores menores que un nodo van a su subárbol menor (izquierdo) y los mayores, al mayor (derecho). Esa regla se cumple en cada nodo."
    },
    {
      "id": 255,
      "t": 14,
      "q": "¿Por qué hay que decidir una regla para los valores repetidos en un árbol binario de búsqueda?",
      "o": [
        "Porque el árbol no admite duplicados",
        "Para que el recorrido inorden sea más rápido",
        "Para que todas las operaciones coincidan"
      ],
      "c": 2,
      "e": "Si los duplicados se insertan de un lado pero se buscan del otro, las operaciones no se encuentran. Hay que fijar una sola regla (rechazarlos, mandarlos a un lado o contarlos) y aplicarla en todas."
    },
    {
      "id": 256,
      "t": 14,
      "q": "¿En qué orden visita los nodos un recorrido inorden de un árbol binario?",
      "o": [
        "Nodo, menor, mayor",
        "Menor, mayor, nodo",
        "Menor, nodo, mayor"
      ],
      "c": 2,
      "e": "El inorden visita el subárbol menor, después el nodo y después el subárbol mayor. En un árbol de búsqueda, eso da los valores ordenados de menor a mayor."
    },
    {
      "id": 257,
      "t": 14,
      "q": "¿Qué visita primero un recorrido preorden de un árbol binario?",
      "o": [
        "El nodo antes de sus hijos",
        "La hoja más profunda",
        "El subárbol mayor antes de la raíz"
      ],
      "c": 0,
      "e": "El preorden procesa cada nodo antes que sus hijos, empezando por la raíz. Sirve, por ejemplo, para copiar un árbol."
    },
    {
      "id": 258,
      "t": 14,
      "q": "¿Cuándo procesa cada nodo un recorrido postorden de un árbol binario?",
      "o": [
        "Antes de ambos hijos",
        "Después de ambos hijos",
        "Entre el hijo menor y el mayor"
      ],
      "c": 1,
      "e": "El postorden procesa los dos subárboles primero y el nodo al final. Sirve, por ejemplo, para liberar o calcular algo que depende de los hijos."
    },
    {
      "id": 259,
      "t": 14,
      "q": "¿Qué ventaja tiene recorrer un árbol con un generador?",
      "o": [
        "Evita toda recursión en el recorrido",
        "Entrega valores a medida que se piden",
        "Recorre el árbol en varios hilos a la vez"
      ],
      "c": 1,
      "e": "Un generador entrega cada valor al pedirlo con `yield`. Se puede recorrer el árbol, detenerse antes y nunca construir un array con todos los valores."
    },
    {
      "id": 260,
      "t": 14,
      "q": "Al buscar un valor en un árbol binario de búsqueda, después de compararlo con un nodo, ¿por cuántas ramas se sigue buscando?",
      "o": [
        "Una rama como máximo",
        "Ambas ramas",
        "Ninguna aunque el valor difiera"
      ],
      "c": 0,
      "e": "En un árbol de búsqueda, la comparación decide un solo lado: menor va a una rama y mayor a la otra. Si el valor es igual, la búsqueda termina."
    },
    {
      "id": 261,
      "t": 14,
      "q": "En una inserción recursiva en un árbol se escribe `nodo.menor = insertar(nodo.menor, valor)`. ¿Por qué se reasigna `nodo.menor`?",
      "o": [
        "Para que la raíz pase a ser el nodo menor",
        "Para borrar el subárbol menor anterior",
        "insertar puede devolver un nodo nuevo donde antes había null"
      ],
      "c": 2,
      "e": "Cuando la rama está vacía, `insertar(null, valor)` crea y devuelve un nodo nuevo. Reasignar `nodo.menor` engancha ese nodo en el árbol. En los demás casos, devuelve el mismo nodo."
    },
    {
      "id": 262,
      "t": 14,
      "q": "Al insertar un valor en un árbol sin modificar el original (inserción inmutable), ¿qué nodos comparte el árbol nuevo con el anterior?",
      "o": [
        "Los del camino de la raíz al nuevo nodo",
        "Los de ramas que no cambiaron",
        "Ninguno, se clona todo"
      ],
      "c": 1,
      "e": "En una inserción inmutable se copian solo los nodos del camino desde la raíz hasta el punto de inserción. Las ramas que no cambiaron se comparten con la versión anterior."
    },
    {
      "id": 263,
      "t": 14,
      "q": "Si los nodos no guardan ningún contador, ¿qué hace falta para contar los nodos de un árbol?",
      "o": [
        "Visitar todos los nodos",
        "Consultar solo la raíz",
        "Consultar solo el mínimo"
      ],
      "c": 0,
      "e": "Sin un contador guardado, la única forma de saber cuántos nodos hay es visitarlos todos. El costo crece con la cantidad de nodos."
    },
    {
      "id": 264,
      "t": 14,
      "q": "¿Cómo se encuentra el valor mínimo en un árbol binario de búsqueda?",
      "o": [
        "Bajando por la rama mayor",
        "Comparando todas las hojas",
        "Bajando por la rama menor"
      ],
      "c": 2,
      "e": "El mínimo es el nodo más a la izquierda: se baja siempre por la rama menor hasta que no haya más."
    },
    {
      "id": 265,
      "t": 14,
      "q": "Al eliminar una hoja de un árbol binario, ¿qué valor ocupa su lugar en el nodo padre?",
      "o": [
        "La raíz original",
        "Una copia de ambos hijos",
        "null"
      ],
      "c": 2,
      "e": "Una hoja no tiene hijos, así que se reemplaza por `null` en el padre y ese subárbol queda vacío."
    },
    {
      "id": 266,
      "t": 14,
      "q": "En un árbol binario de búsqueda, ¿cómo puede eliminarse un nodo con dos hijos?",
      "o": [
        "Reemplazarlo por su sucesor y quitar el sucesor de su rama",
        "Subir su hijo mayor a su lugar",
        "Reemplazarlo por la raíz del árbol"
      ],
      "c": 0,
      "e": "Se reemplaza el valor por el de su sucesor (el mínimo del subárbol mayor), que conserva el orden. Después se elimina el sucesor de su rama, y como no tiene hijo menor, es un caso simple."
    },
    {
      "id": 267,
      "t": 14,
      "q": "Para verificar que un árbol es de búsqueda, ¿por qué no alcanza con comparar cada nodo con sus hijos directos?",
      "o": [
        "Los hijos pueden ser null",
        "Un ancestro también impone límites",
        "El orden también depende de la altura"
      ],
      "c": 1,
      "e": "La regla del árbol vale para todo el subárbol, no solo para los hijos directos. Un nieto puede respetar a su padre y violar el límite de un ancestro. Hay que arrastrar el rango permitido."
    },
    {
      "id": 268,
      "t": 14,
      "q": "¿Qué pasa si se insertan valores ya ordenados en un árbol binario de búsqueda que no se balancea?",
      "o": [
        "La altura queda logarítmica",
        "Se forma una cadena y buscar puede requerir n comparaciones",
        "El árbol se balancea al insertar"
      ],
      "c": 1,
      "e": "Si los valores llegan ordenados, cada uno va siempre al mismo lado. El árbol degenera en una lista y buscar puede recorrer los n nodos."
    },
    {
      "id": 269,
      "t": 15,
      "q": "¿Qué devuelve siempre una función declarada async, incluso si retorna un valor simple?",
      "o": [
        "Una promesa",
        "Un valor síncrono sin envoltorio",
        "Un iterador"
      ],
      "c": 0,
      "e": "Una función `async` siempre devuelve una promesa. `return 5` hace que la promesa se resuelva con 5."
    },
    {
      "id": 270,
      "t": 15,
      "q": "Una función `async` ejecuta `await` sobre una promesa que todavía no se resolvió. ¿Qué se detiene?",
      "o": [
        "Todo el hilo de JavaScript",
        "La función que llamó a la función async",
        "El resto de esa función async"
      ],
      "c": 2,
      "e": "`await` suspende solo la función `async` donde está. El resto del programa sigue: el hilo queda libre para otros eventos, y la función continúa cuando la promesa se resuelve."
    },
    {
      "id": 271,
      "t": 15,
      "q": "¿Por qué se usa `await` dos veces en `const respuesta = await fetch(url); const datos = await respuesta.json();`?",
      "o": [
        "El segundo vuelve a pedir el recurso",
        "Cada operación devuelve su propia promesa",
        "json() necesita await por ser un método"
      ],
      "c": 1,
      "e": "`fetch` devuelve una promesa que se resuelve al llegar las cabeceras. `json()` devuelve otra promesa, que se resuelve al terminar de leer y convertir el cuerpo. Cada una necesita su `await`."
    },
    {
      "id": 272,
      "t": 15,
      "q": "¿Qué hay que hacer para que una respuesta 404 de `fetch` se trate como un error?",
      "o": [
        "Revisar respuesta.ok o el status y lanzar un error",
        "Esperar que fetch rechace la promesa",
        "Envolver el fetch en try/catch"
      ],
      "c": 0,
      "e": "`fetch` no rechaza ante un 404: la promesa se resuelve. Hay que revisar `respuesta.ok` o `status` y lanzar un error explícito. Un `try/catch` solo no alcanza."
    },
    {
      "id": 273,
      "t": 15,
      "q": "Un botón se deshabilita mientras dura una consulta. ¿En qué bloque conviene volver a habilitarlo, tanto si la consulta sale bien como si falla?",
      "o": [
        "catch solamente",
        "El primer await",
        "finally"
      ],
      "c": 2,
      "e": "`finally` se ejecuta tanto si la consulta sale bien como si falla. Es el lugar para restablecer el botón o quitar el indicador de carga."
    },
    {
      "id": 274,
      "t": 15,
      "q": "¿Cómo se ejecutan al mismo tiempo varias tareas asincrónicas independientes, esperando a que terminen todas?",
      "o": [
        "await en cada una, una tras otra",
        "Un forEach async sin esperar",
        "Promise.all sobre sus promesas"
      ],
      "c": 2,
      "e": "`Promise.all` recibe promesas ya iniciadas y espera a que terminen todas, así corren al mismo tiempo. Varios `await` seguidos las ejecutan una tras otra."
    },
    {
      "id": 275,
      "t": 15,
      "q": "¿Por qué `array.forEach(async x => { await ... })` no espera a que terminen las operaciones?",
      "o": [
        "forEach ignora las promesas que recibe",
        "forEach no acepta funciones async",
        "await dentro de forEach bloquea todo el bucle"
      ],
      "c": 0,
      "e": "`forEach` llama a cada callback y descarta lo que devuelve, incluidas las promesas. No espera ninguna. Para esperar, se usa `for...of` con `await` o `Promise.all` con `map`."
    },
    {
      "id": 276,
      "t": 15,
      "q": "Dos tareas independientes pueden fallar y se necesita conocer el resultado de cada una. ¿Qué conviene usar?",
      "o": [
        "`Promise.all` y revisar cada posición",
        "`Promise.allSettled` y revisar cada estado",
        "`Promise.race` y esperar la primera"
      ],
      "c": 1,
      "e": "`Promise.all` se rechaza con el primer error y se pierden los demás resultados. `Promise.allSettled` espera a todas y dice el estado de cada una."
    },
    {
      "id": 277,
      "t": 15,
      "q": "¿Qué ocurre si una de las promesas entregadas a `Promise.all` se rechaza?",
      "o": [
        "La promesa conjunta resuelve con undefined en esa posición",
        "La promesa conjunta se rechaza",
        "Las demás promesas se cancelan de inmediato"
      ],
      "c": 1,
      "e": "`Promise.all` se rechaza apenas una promesa se rechaza, con ese error. Las demás siguen corriendo, pero sus resultados se descartan."
    },
    {
      "id": 278,
      "t": 15,
      "q": "Si `pedirB(a)` necesita el resultado de `pedirA()`, ¿cómo deben esperarse esas operaciones?",
      "o": [
        "Iniciar ambas dentro de Promise.all sin pasar el resultado",
        "Usar forEach para que B lea el futuro valor de A",
        "Primero esperar A y luego iniciar B con ese resultado"
      ],
      "c": 2,
      "e": "Si B necesita el resultado de A, son dependientes: primero hay que esperar A y después iniciar B con ese dato. `Promise.all` es para operaciones independientes."
    },
    {
      "id": 279,
      "t": 15,
      "q": "Tres pedidos independientes tardan un segundo cada uno. ¿Cuánto tardan aproximadamente en serie y juntos con `Promise.all`?",
      "o": [
        "Tres segundos en serie y uno juntos",
        "Un segundo en serie y tres juntos",
        "Tres segundos en ambos casos"
      ],
      "c": 0,
      "e": "En serie, cada pedido espera al anterior: 1 + 1 + 1 = 3 segundos. Con `Promise.all` corren juntos y el total es el del más lento, alrededor de 1 segundo."
    },
    {
      "id": 280,
      "t": 15,
      "q": "Dentro de un `try`, se hace `await` de una promesa que se rechaza. ¿Qué ocurre?",
      "o": [
        "await la convierte en undefined",
        "El catch la recibe como excepción",
        "El error escapa del try por ser asincrónico"
      ],
      "c": 1,
      "e": "`await` convierte el rechazo de una promesa en una excepción en esa línea. Si está dentro de un `try`, la captura el `catch`."
    },
    {
      "id": 281,
      "t": 15,
      "q": "Se escribe `await` dentro de una función común y da error. ¿Qué falta?",
      "o": [
        "Declararla `async`",
        "Marcarla como `function*`",
        "Agregar `Promise.all` fuera de la función"
      ],
      "c": 0,
      "e": "`await` solo se puede usar dentro de una función declarada `async` (o en el nivel superior de un módulo). En una función común es SyntaxError."
    },
    {
      "id": 282,
      "t": 16,
      "q": "¿Qué secuencia describe las capas que hay entre un archivo guardado y los datos que usa un programa?",
      "o": [
        "Extensión, clase CSS y DOM",
        "Nombre, variable global y objeto JSON",
        "Ruta, bytes, codificación, texto y formato"
      ],
      "c": 2,
      "e": "Un archivo tiene una ruta. Su contenido son bytes. Una codificación (como UTF-8) convierte esos bytes en texto, y ese texto sigue un formato (JSON, CSV). Cada paso puede fallar por separado."
    },
    {
      "id": 283,
      "t": 16,
      "q": "¿Qué garantiza que un archivo se llame `datos.json`?",
      "o": [
        "Que su contenido es JSON válido",
        "Que readFile lo devuelve ya parseado como objeto",
        "Nada: la extensión es solo una pista"
      ],
      "c": 2,
      "e": "La extensión es parte del nombre y solo sugiere el formato. El contenido puede estar mal formado, así que `JSON.parse` puede fallar igual."
    },
    {
      "id": 284,
      "t": 16,
      "q": "¿Qué entorno aporta módulos como `node:fs/promises` para acceder a archivos?",
      "o": [
        "Node.js",
        "El núcleo ECMAScript sin entorno",
        "CSS"
      ],
      "c": 0,
      "e": "ECMAScript define el lenguaje, pero no el acceso a archivos. Node.js aporta ese acceso con módulos como `node:fs/promises`."
    },
    {
      "id": 285,
      "t": 16,
      "q": "¿Qué módulo de Node para archivos se usa directamente con `async` y `await`?",
      "o": [
        "readFileSync",
        "node:fs/promises",
        "Un atributo HTML"
      ],
      "c": 1,
      "e": "`node:fs/promises` ofrece funciones que devuelven promesas y se usan directamente con `await`. `readFileSync` bloquea y no devuelve promesas."
    },
    {
      "id": 286,
      "t": 16,
      "q": "¿Qué problema causa usar `readFileSync` en un servidor que atiende muchas solicitudes?",
      "o": [
        "Devuelve una promesa que nadie espera",
        "Lee el archivo con otra codificación",
        "Bloquea el hilo y demora a todas las demás solicitudes"
      ],
      "c": 2,
      "e": "Node atiende todas las solicitudes con un solo hilo. `readFileSync` lo bloquea mientras lee, y ninguna otra solicitud avanza hasta que termina."
    },
    {
      "id": 287,
      "t": 16,
      "q": "¿Qué extensión de archivo hace que Node lo trate como módulo ES sin configurar nada en `package.json`?",
      "o": [
        ".mjs",
        ".css",
        ".json"
      ],
      "c": 0,
      "e": "Node trata los archivos `.mjs` como módulos ES sin necesidad de configurar `\"type\": \"module\"` en `package.json`."
    },
    {
      "id": 288,
      "t": 16,
      "q": "`readFile(\"datos/entrada.txt\")` usa una ruta relativa. ¿Desde qué carpeta la resuelve Node?",
      "o": [
        "El directorio del módulo",
        "process.cwd()",
        "La carpeta raíz del sistema"
      ],
      "c": 1,
      "e": "Una ruta relativa se resuelve desde el directorio de trabajo del proceso, `process.cwd()`, es decir, desde donde se ejecutó el comando, no desde la carpeta del archivo `.js`."
    },
    {
      "id": 289,
      "t": 16,
      "q": "En un módulo ES, ¿qué dato permite armar una ruta relativa a la carpeta del propio archivo?",
      "o": [
        "import.meta.url",
        "process.pid",
        "Buffer.byteLength"
      ],
      "c": 0,
      "e": "`import.meta.url` da la URL del módulo actual. Con `new URL(\"datos.txt\", import.meta.url)` se arma una ruta relativa al propio archivo."
    },
    {
      "id": 290,
      "t": 16,
      "q": "¿Qué función une partes de una ruta sin tener que escribir las barras a mano?",
      "o": [
        "String.split",
        "JSON.parse",
        "path.join"
      ],
      "c": 2,
      "e": "`path.join` une partes de una ruta con el separador correcto del sistema operativo y normaliza barras repetidas."
    },
    {
      "id": 291,
      "t": 16,
      "q": "¿Qué logra `mkdir(\"salidas\", { recursive: true })`?",
      "o": [
        "Sobrescribir cualquier archivo llamado salidas",
        "Crear también directorios padres faltantes",
        "Vaciar salidas si ya existe"
      ],
      "c": 1,
      "e": "Con `recursive: true`, `mkdir` crea también los directorios padre que falten y no falla si el directorio ya existe."
    },
    {
      "id": 292,
      "t": 16,
      "q": "¿Qué hace writeFile por defecto si el archivo destino ya existe?",
      "o": [
        "Lo reemplaza",
        "Falla con EEXIST",
        "Agrega al final"
      ],
      "c": 0,
      "e": "Por defecto, `writeFile` usa el flag `\"w\"`: crea el archivo si no existe y lo reemplaza entero si existe."
    },
    {
      "id": 293,
      "t": 16,
      "q": "¿Qué flag de `writeFile` hace que falle si el archivo ya existe, en lugar de reemplazarlo?",
      "o": [
        "w",
        "wx",
        "a+"
      ],
      "c": 1,
      "e": "El flag `\"wx\"` escribe solo si el archivo no existe. Si existe, falla con EEXIST. `\"w\"` sobrescribe y `\"a+\"` agrega al final."
    },
    {
      "id": 294,
      "t": 16,
      "q": "¿Qué operación añade texto al final sin borrar el contenido previo?",
      "o": [
        "writeFile con flag w",
        "unlink",
        "appendFile"
      ],
      "c": 2,
      "e": "`appendFile` agrega el texto al final del archivo y conserva lo que ya tenía. Si no existe, lo crea."
    },
    {
      "id": 295,
      "t": 16,
      "q": "¿Qué devuelve readFile cuando no se indica codificación?",
      "o": [
        "Un string en UTF-8",
        "Un objeto JSON parseado",
        "Un Buffer de bytes"
      ],
      "c": 2,
      "e": "Sin codificación, `readFile` devuelve un Buffer con los bytes crudos. Para obtener texto hay que indicar la codificación, por ejemplo `\"utf8\"`."
    },
    {
      "id": 296,
      "t": 16,
      "q": "¿Cuántos bytes ocupa el emoji 😀 en UTF-8, según `Buffer.byteLength`?",
      "o": [
        "2 bytes",
        "4 bytes",
        "1 byte"
      ],
      "c": 1,
      "e": "En UTF-8, los emoji fuera del plano básico ocupan 4 bytes. En UTF-16 ocupan 2 unidades, por eso `\"😀\".length` es 2."
    },
    {
      "id": 297,
      "t": 16,
      "q": "Un `TextDecoder` creado con `{ fatal: true }` recibe bytes que no son UTF-8 válido. ¿Qué hace?",
      "o": [
        "Lanza un error en lugar de insertar un reemplazo",
        "Inserta el carácter de reemplazo",
        "Omite los bytes inválidos"
      ],
      "c": 0,
      "e": "Por defecto, `TextDecoder` reemplaza los bytes inválidos por el carácter de reemplazo (U+FFFD). Con `fatal: true` lanza un error y el problema no pasa desapercibido."
    },
    {
      "id": 298,
      "t": 16,
      "q": "Al leer texto creado en distintos sistemas, ¿qué dos convenciones de fin de línea conviene contemplar?",
      "o": [
        "LF y CRLF",
        "CR y TAB",
        "LF y NUL"
      ],
      "c": 0,
      "e": "Linux y macOS usan LF (`\\n`) al final de cada línea, y Windows usa CRLF (`\\r\\n`). Al separar líneas conviene contemplar ambos, por ejemplo con `/\\r?\\n/`."
    },
    {
      "id": 299,
      "t": 16,
      "q": "Al reemplazar un archivo importante, ¿qué técnica evita que quede a medio escribir si el programa se corta?",
      "o": [
        "Borrar el destino y escribirlo de nuevo",
        "Escribir con el flag a sobre el destino",
        "Escribir un archivo temporal y después renombrarlo"
      ],
      "c": 2,
      "e": "Si el proceso se corta mientras escribe el destino, queda un archivo a medias. Escribir en un temporal y renombrarlo reemplaza el archivo de una sola vez, porque `rename` es atómico en el mismo sistema de archivos."
    },
    {
      "id": 300,
      "t": 16,
      "q": "¿Qué información agrega `readdir` cuando se usa con `{ withFileTypes: true }`?",
      "o": [
        "El contenido de cada archivo listado",
        "Si cada entrada es archivo o carpeta",
        "El tamaño y la fecha de cada entrada"
      ],
      "c": 1,
      "e": "Con `withFileTypes: true`, `readdir` devuelve objetos Dirent con métodos como `isFile()` e `isDirectory()`, sin necesidad de llamar a `stat` por cada entrada."
    },
    {
      "id": 301,
      "t": 16,
      "q": "¿Qué diferencia hay entre `stat` y `lstat` cuando la ruta es un enlace simbólico?",
      "o": [
        "stat sigue el enlace; lstat no",
        "lstat sigue el enlace; stat no",
        "lstat es la versión síncrona de stat"
      ],
      "c": 0,
      "e": "`stat` sigue un enlace simbólico e informa sobre el archivo al que apunta. `lstat` informa sobre el enlace mismo, por ejemplo para saber si es un enlace."
    },
    {
      "id": 302,
      "t": 16,
      "q": "Un programa quiere leer un archivo solo si existe. ¿Qué forma evita el problema de que el archivo cambie entre la comprobación y la lectura?",
      "o": [
        "Llamar access y asumir que nada cambiará",
        "Comparar solo la extensión",
        "Intentar readFile y manejar ENOENT"
      ],
      "c": 2,
      "e": "Entre comprobar que existe y leerlo, el archivo puede borrarse o cambiar. Es más seguro intentar la lectura y tratar el error ENOENT si no existe."
    },
    {
      "id": 303,
      "t": 16,
      "q": "¿Cómo se procesa línea por línea un archivo de texto muy grande sin cargarlo entero en memoria?",
      "o": [
        "readFile y después split por saltos",
        "createReadStream combinado con readline",
        "readFileSync con encoding utf8"
      ],
      "c": 1,
      "e": "`createReadStream` lee el archivo por partes sin cargarlo entero en memoria, y `readline` arma líneas completas a partir de esas partes."
    },
    {
      "id": 304,
      "t": 16,
      "q": "Al leer un archivo con un stream, ¿por qué no conviene tratar cada fragmento (chunk) como una línea?",
      "o": [
        "Los chunks llegan desordenados",
        "Un chunk puede cortar una línea",
        "Un chunk trae solo un carácter"
      ],
      "c": 1,
      "e": "Un stream entrega bloques (chunks) de tamaño arbitrario. Un bloque puede terminar en medio de una línea o contener varias. Hay que juntar el texto y separar por saltos de línea."
    },
    {
      "id": 305,
      "t": 16,
      "q": "¿Qué resuelve `pipeline` al conectar un stream de lectura con uno de escritura?",
      "o": [
        "Manejo de errores, cierre y contrapresión",
        "Lectura y escritura en hilos separados del sistema",
        "Carga completa previa para evitar cortes"
      ],
      "c": 0,
      "e": "`pipeline` conecta streams, propaga los errores de cualquiera de ellos, cierra todos al terminar o fallar y maneja la contrapresión: frena la lectura si la escritura va más lenta."
    },
    {
      "id": 306,
      "t": 16,
      "q": "Un programa abre un archivo con `open` y obtiene un FileHandle. ¿Dónde conviene cerrarlo para que se cierre aunque falle la lectura?",
      "o": [
        "Solo después de un éxito",
        "Node lo cierra solo al terminar",
        "En finally"
      ],
      "c": 2,
      "e": "`finally` se ejecuta tanto si la lectura sale bien como si falla. Cerrar el FileHandle ahí evita dejar descriptores abiertos."
    },
    {
      "id": 307,
      "t": 16,
      "q": "Después de `JSON.parse`, ¿qué falta hacer antes de usar los datos en la aplicación?",
      "o": [
        "Validar estructura, tipos y rangos",
        "Nada, si JSON.parse no lanzó",
        "Volver a serializar con stringify"
      ],
      "c": 0,
      "e": "`JSON.parse` solo garantiza que el texto es JSON válido. Hay que validar que tenga los campos esperados, con los tipos y rangos correctos, antes de usarlo."
    },
    {
      "id": 308,
      "t": 16,
      "q": "¿Por qué `linea.split(\",\")` no basta para cualquier CSV?",
      "o": [
        "split no acepta una coma como separador",
        "split pierde el último campo de la línea",
        "Puede haber comas dentro de un campo entre comillas"
      ],
      "c": 2,
      "e": "En CSV, un campo entre comillas puede contener comas, por ejemplo `\"Pérez, Ana\"`. `split(\",\")` lo parte mal. Hace falta un parser que respete las comillas."
    },
    {
      "id": 309,
      "t": 16,
      "q": "Al leer un archivo, ¿qué códigos de error distinguen la falta de permisos de una ruta inexistente?",
      "o": [
        "ENOENT o EEXIST, frente a EACCES",
        "EACCES o EPERM, frente a ENOENT",
        "EMFILE o EXDEV, frente a ENOTDIR"
      ],
      "c": 1,
      "e": "EACCES y EPERM indican falta de permisos. ENOENT indica que la ruta no existe. Distinguirlos permite mostrar el mensaje correcto."
    },
    {
      "id": 310,
      "t": 16,
      "q": "Si `rename` falla con `EXDEV` al mover un archivo, ¿qué procedimiento permite completar el movimiento?",
      "o": [
        "Copiar, verificar la copia y borrar el origen",
        "Borrar el origen primero y después copiar el archivo",
        "Reintentar rename hasta que funcione"
      ],
      "c": 0,
      "e": "EXDEV significa que origen y destino están en distintos volúmenes, y `rename` no puede moverlo. Hay que copiar, verificar la copia y recién después borrar el original, para no perder el archivo si algo falla."
    },
    {
      "id": 311,
      "t": 16,
      "q": "Si procesar miles de rutas con `Promise.all` causa `EMFILE`, ¿qué enfoque equilibra recursos y rendimiento?",
      "o": [
        "Leer todas las rutas en serie, de a una",
        "Limitar cuántas operaciones corren al mismo tiempo con un pool",
        "Convertir todas las rutas a URLs antes de leer"
      ],
      "c": 1,
      "e": "Abrir miles de archivos a la vez agota el límite del sistema (EMFILE). Un pool limita cuántas operaciones corren al mismo tiempo: mantiene el paralelismo sin superar ese límite."
    },
    {
      "id": 312,
      "t": 16,
      "q": "Antes de usar `rm` con `recursive: true`, ¿qué debe comprobarse sobre la ruta?",
      "o": [
        "Que tenga una extensión conocida",
        "Que sea relativa, así no necesita validarse",
        "Que esté dentro de una raíz permitida"
      ],
      "c": 2,
      "e": "`rm` recursivo borra todo lo que hay debajo de la ruta. Antes hay que resolverla a una ruta absoluta y comprobar que esté dentro de una carpeta permitida, para no borrar algo que no correspondía."
    },
    {
      "id": 313,
      "t": 17,
      "q": "¿Cuál es la relación entre Internet y la Web?",
      "o": [
        "La Web funciona sobre Internet",
        "Son dos nombres de la misma red",
        "Internet funciona sobre la Web"
      ],
      "c": 0,
      "e": "Internet es la red que conecta las computadoras. La Web es un servicio más sobre esa red, basado en HTTP y documentos enlazados, como también lo son el correo o los juegos en línea."
    },
    {
      "id": 314,
      "t": 17,
      "q": "En `https://ejemplo.com/apuntes/html.html`, ¿qué representa `/apuntes/html.html`?",
      "o": [
        "El dominio",
        "La ruta",
        "La consulta"
      ],
      "c": 1,
      "e": "En una URL, después del esquema (`https`) y el host (`ejemplo.com`) viene la ruta, que identifica el recurso dentro del servidor."
    },
    {
      "id": 315,
      "t": 17,
      "q": "¿Qué agrega escribir `<h1>El tiempo</h1>` en lugar de poner el texto sin etiqueta?",
      "o": [
        "Solo lo muestra más grande",
        "Lo convierte en un enlace",
        "Le da significado de título"
      ],
      "c": 2,
      "e": "HTML describe el significado del contenido. `<h1>` declara que el texto es el título principal. Los navegadores, los lectores de pantalla y los buscadores lo interpretan así."
    },
    {
      "id": 316,
      "t": 17,
      "q": "¿Con qué criterio se elige entre `h1` y `h2` para un título?",
      "o": [
        "Por el tamaño de letra que se quiere",
        "Por la importancia visual del texto",
        "Por su nivel dentro de la estructura del documento"
      ],
      "c": 2,
      "e": "Los niveles de encabezado arman el índice del documento: `h1` es el título principal, `h2` una sección, `h3` una subsección. El tamaño visual se controla con CSS."
    },
    {
      "id": 317,
      "t": 17,
      "q": "¿Qué diferencia práctica hay entre class e id en HTML?",
      "o": [
        "El id se reutiliza; la clase es única",
        "La clase se reutiliza; el id es único",
        "Solo el id puede usarse desde CSS"
      ],
      "c": 1,
      "e": "Una clase puede repetirse en muchos elementos, así que sirve para aplicar estilos comunes. Un `id` debe ser único en la página e identifica un solo elemento."
    },
    {
      "id": 318,
      "t": 17,
      "q": "Si strong está dentro de p y p dentro de section, ¿qué relación tiene strong con section?",
      "o": [
        "Es descendiente de section",
        "Es hijo directo de section",
        "Es padre de section"
      ],
      "c": 0,
      "e": "`strong` está dentro de `p`, que está dentro de `section`. Es un descendiente de `section`, pero no su hijo directo: el hijo directo es `p`."
    },
    {
      "id": 319,
      "t": 17,
      "q": "¿Cuál de estos elementos no necesita etiqueta de cierre en HTML?",
      "o": [
        "p",
        "section",
        "input"
      ],
      "c": 2,
      "e": "`input` es un elemento vacío: no tiene contenido y no lleva etiqueta de cierre. `p` y `section` sí la necesitan."
    },
    {
      "id": 320,
      "t": 17,
      "q": "¿Qué sucede con `<button disabled=\"false\">` en HTML?",
      "o": [
        "Queda habilitado",
        "Queda deshabilitado",
        "Depende del navegador"
      ],
      "c": 1,
      "e": "Los atributos booleanos de HTML funcionan por presencia. Si `disabled` está escrito, el botón queda deshabilitado, sin importar su valor, incluso `\"false\"`."
    },
    {
      "id": 321,
      "t": 17,
      "q": "¿Para qué sirve `<!doctype html>` al inicio del documento?",
      "o": [
        "Activa el modo de estándares en el navegador",
        "Declara el idioma del documento",
        "Carga la hoja de estilos base"
      ],
      "c": 0,
      "e": "Sin `<!doctype html>`, el navegador entra en el modo quirks, que imita errores de navegadores antiguos. Con el doctype usa el modo de estándares."
    },
    {
      "id": 322,
      "t": 17,
      "q": "¿Qué elemento semántico identifica el contenido principal de una página?",
      "o": [
        "span",
        "link",
        "main"
      ],
      "c": 2,
      "e": "`main` marca el contenido principal de la página. Sirve, por ejemplo, para que un lector de pantalla salte directo a él."
    },
    {
      "id": 323,
      "t": 17,
      "q": "¿Qué debe describir el atributo `alt` de una imagen que aporta información?",
      "o": [
        "El título que aparece al pasar el mouse",
        "Lo que la imagen aporta si no se ve",
        "El nombre del archivo de la imagen"
      ],
      "c": 1,
      "e": "`alt` reemplaza a la imagen cuando no se puede ver: la lee un lector de pantalla o aparece si la imagen no carga. Debe transmitir lo que la imagen aporta."
    },
    {
      "id": 324,
      "t": 17,
      "q": "¿Cuándo corresponde usar una tabla (`table`) en HTML?",
      "o": [
        "Cuando los datos son filas y columnas",
        "Para ubicar el menú junto al contenido",
        "Para alinear campos de un formulario"
      ],
      "c": 0,
      "e": "`table` es para datos tabulares, donde fila y columna dan sentido a cada celda. Para ubicar elementos en la página se usa CSS (flexbox o grid)."
    },
    {
      "id": 325,
      "t": 17,
      "q": "¿Qué debe coincidir para que `<label for=\"ciudad\">` señale un input?",
      "o": [
        "El valor for y el id del input",
        "El valor for y su class",
        "El texto de label y el placeholder"
      ],
      "c": 0,
      "e": "El `for` de `label` tiene que coincidir con el `id` del `input`. Así, al hacer clic en la etiqueta se enfoca el campo, y los lectores de pantalla los asocian."
    },
    {
      "id": 326,
      "t": 17,
      "q": "¿Qué atributo identifica un campo en el envío nativo de un formulario?",
      "o": [
        "id",
        "name",
        "class"
      ],
      "c": 1,
      "e": "Al enviar un formulario, cada campo viaja como un par `name=valor`. Un campo sin `name` no se envía."
    },
    {
      "id": 327,
      "t": 17,
      "q": "¿Qué ventaja tiene un botón `submit` real frente a un `div` programado para funcionar como botón?",
      "o": [
        "Validación del servidor sin programarla",
        "Conversión automática a JSON",
        "Envío con Enter y acceso por teclado"
      ],
      "c": 2,
      "e": "Un botón `submit` real envía el formulario con Enter, se puede usar con teclado y lo reconocen los lectores de pantalla. Un `div` con un evento de clic no hace nada de eso por sí solo."
    },
    {
      "id": 328,
      "t": 17,
      "q": "¿Qué limitación tiene el atributo `required` en un campo de texto?",
      "o": [
        "No valida que el texto tenga sentido",
        "Rechaza cadenas de solo espacios",
        "Valida también en el servidor"
      ],
      "c": 0,
      "e": "`required` solo exige que el campo no esté vacío: acepta, por ejemplo, un texto de solo espacios. Además, se puede saltear desde el navegador, así que el servidor tiene que validar igual."
    },
    {
      "id": 329,
      "t": 17,
      "q": "¿Qué elemento HTML enlaza una hoja CSS externa desde head?",
      "o": [
        "`<script src=\"styles.css\" type=\"text/css\">`",
        "`<link rel=\"stylesheet\" href=\"styles.css\">`",
        "`<style src=\"styles.css\">`"
      ],
      "c": 1,
      "e": "Una hoja externa se enlaza con `<link rel=\"stylesheet\" href=\"...\">` dentro de `head`. `<script>` carga JavaScript, y `<style>` contiene CSS escrito en la propia página."
    },
    {
      "id": 330,
      "t": 17,
      "q": "¿Qué selecciona `.tarjeta` en CSS?",
      "o": [
        "El elemento con id tarjeta",
        "Los elementos <tarjeta> del documento",
        "Elementos con la clase tarjeta"
      ],
      "c": 2,
      "e": "El punto indica clase: `.tarjeta` selecciona los elementos que tienen `tarjeta` entre sus clases. `#tarjeta` seleccionaría por `id`."
    },
    {
      "id": 331,
      "t": 17,
      "q": "¿Qué selecciona `.tarjeta.destacado`?",
      "o": [
        "Un descendiente destacado de tarjeta",
        "Elementos con cualquiera de las dos clases",
        "Un mismo elemento que tiene ambas clases"
      ],
      "c": 2,
      "e": "Dos clases seguidas, sin espacio, exigen que un mismo elemento tenga ambas. Con un espacio en el medio, el selector buscaría un descendiente."
    },
    {
      "id": 332,
      "t": 17,
      "q": "¿Qué selecciona `.tarjeta p`?",
      "o": [
        "Solo párrafos que también tienen clase tarjeta",
        "Párrafos descendientes de un elemento tarjeta",
        "Todas las tarjetas que contienen cualquier texto"
      ],
      "c": 1,
      "e": "El espacio es el combinador descendiente: `.tarjeta p` selecciona los párrafos que están en cualquier nivel dentro de un elemento con clase `tarjeta`."
    },
    {
      "id": 333,
      "t": 17,
      "q": "Tres reglas CSS asignan un color distinto al mismo párrafo, con los selectores `#estado`, `.aviso` y `p`. ¿Cuál tiene mayor especificidad?",
      "o": [
        "`#estado`",
        "`.aviso`",
        "`p`"
      ],
      "c": 0,
      "e": "La especificidad se compara por categorías: los `id` pesan más que las clases, y las clases más que los elementos. `#estado` gana."
    },
    {
      "id": 334,
      "t": 17,
      "q": "Dos reglas CSS asignan la misma propiedad al mismo elemento, con igual especificidad. ¿Cuál se aplica?",
      "o": [
        "La que aparece después",
        "La que tiene el selector más corto",
        "La que aparece primero"
      ],
      "c": 0,
      "e": "Si dos reglas tienen la misma especificidad, gana la que aparece después en el orden de la cascada."
    },
    {
      "id": 335,
      "t": 17,
      "q": "Si se define en `body`, ¿qué propiedad heredan los párrafos que no tienen un valor propio?",
      "o": [
        "margin",
        "border-radius",
        "font-family"
      ],
      "c": 2,
      "e": "Las propiedades de texto, como `font-family`, `color` o `line-height`, se heredan. Las de caja, como `margin`, `border` o `border-radius`, no."
    },
    {
      "id": 336,
      "t": 17,
      "q": "¿Respecto de qué se calcula `1.5rem`?",
      "o": [
        "Del ancho del viewport",
        "Del tamaño de fuente del elemento raíz",
        "Del tamaño de fuente del elemento padre"
      ],
      "c": 1,
      "e": "`rem` es relativo al tamaño de fuente del elemento raíz (`html`). `em` es relativo a la fuente del propio elemento, que suele venir del padre."
    },
    {
      "id": 337,
      "t": 17,
      "q": "Con width 300px, padding 20px por lado y border 2px por lado en content-box, ¿cuál es el ancho hasta el borde?",
      "o": [
        "300px",
        "344px",
        "324px"
      ],
      "c": 1,
      "e": "En `content-box`, `width` es solo el contenido. Se suman padding y bordes de ambos lados: 300 + 20 + 20 + 2 + 2 = 344px."
    },
    {
      "id": 338,
      "t": 17,
      "q": "Con box-sizing border-box y width 300px, ¿qué incluye ese ancho?",
      "o": [
        "Contenido más márgenes exteriores",
        "Solo contenido",
        "Contenido, padding y bordes"
      ],
      "c": 2,
      "e": "En `border-box`, `width` incluye contenido, padding y borde. Si el padding crece, el contenido se achica, pero el ancho total sigue siendo 300px."
    },
    {
      "id": 339,
      "t": 17,
      "q": "¿Qué diferencia hay entre display none y visibility hidden?",
      "o": [
        "hidden conserva el espacio; none no",
        "none conserva el espacio; hidden no",
        "Ninguno conserva el espacio ocupado"
      ],
      "c": 0,
      "e": "`display: none` quita el elemento del diseño: no genera caja ni ocupa espacio. `visibility: hidden` lo vuelve invisible, pero conserva su espacio."
    },
    {
      "id": 340,
      "t": 17,
      "q": "¿Por qué conviene que el estilo `:focus-visible` se vea con claridad?",
      "o": [
        "Muestra qué control tiene el foco",
        "Resalta el control bajo el mouse",
        "Indica qué campos son obligatorios"
      ],
      "c": 0,
      "e": "`:focus-visible` marca el control que tiene el foco cuando se navega con teclado. Quitarlo deja a esas personas sin saber dónde están."
    },
    {
      "id": 341,
      "t": 17,
      "q": "¿Qué consigue `var(--acento)` en una regla CSS?",
      "o": [
        "Lee una variable de JavaScript global",
        "Usa el valor de la propiedad --acento",
        "Define la propiedad --acento"
      ],
      "c": 1,
      "e": "`var(--acento)` lee el valor de la propiedad personalizada `--acento`, definida en el elemento o heredada. Cambiarla en un solo lugar cambia todos sus usos."
    },
    {
      "id": 342,
      "t": 17,
      "q": "En una fila flex con dirección row, ¿qué propiedad distribuye el espacio sobrante en el eje principal?",
      "o": [
        "align-items",
        "flex-direction",
        "justify-content"
      ],
      "c": 2,
      "e": "En flexbox, `justify-content` distribuye el espacio sobrante en el eje principal (horizontal con `row`). `align-items` alinea en el eje cruzado."
    },
    {
      "id": 343,
      "t": 17,
      "q": "¿Qué expresa `grid-template-columns: repeat(3, 1fr)`?",
      "o": [
        "Tres filas de igual altura",
        "Tres columnas de 1px cada una",
        "Tres columnas que reparten el espacio en partes iguales"
      ],
      "c": 2,
      "e": "`repeat(3, 1fr)` crea tres columnas, y `1fr` es una fracción del espacio disponible. Las tres reciben partes iguales."
    },
    {
      "id": 344,
      "t": 17,
      "q": "Un diseño muestra los elementos apilados, pensado primero para móvil. ¿Qué hace una media query con `min-width: 40rem`?",
      "o": [
        "Aplica desde ese ancho en adelante",
        "Aplica por debajo de ese ancho",
        "Fija el ancho de la página en 40rem"
      ],
      "c": 0,
      "e": "`min-width: 40rem` aplica sus reglas cuando la pantalla mide al menos 40rem. El diseño base, pensado para móvil, se amplía en pantallas grandes."
    },
    {
      "id": 345,
      "t": 17,
      "q": "¿Quién aporta el objeto `document` a JavaScript en una página?",
      "o": [
        "La sintaxis básica ECMAScript",
        "El navegador",
        "La hoja CSS"
      ],
      "c": 1,
      "e": "`document` no es parte del lenguaje JavaScript. Lo aporta el navegador, como parte de las APIs del DOM, igual que `window`."
    },
    {
      "id": 346,
      "t": 17,
      "q": "¿Qué efecto tiene el atributo `defer` en `<script src=\"app.js\" defer>`, ubicado en el `head`?",
      "o": [
        "Lo ejecuta apenas termina de descargarse",
        "Lo descarga después de analizar el HTML",
        "Lo ejecuta cuando el navegador terminó de analizar el HTML"
      ],
      "c": 2,
      "e": "`defer` descarga el script en paralelo, sin frenar el análisis, y lo ejecuta cuando el HTML terminó de analizarse, respetando el orden de los scripts. `async` lo ejecuta apenas termina de descargarse."
    },
    {
      "id": 347,
      "t": 17,
      "q": "¿Por qué lo que muestra el panel Elementos de las herramientas del navegador puede diferir del archivo HTML original?",
      "o": [
        "Elementos muestra una versión minificada",
        "El DOM se corrige y JavaScript lo cambia",
        "CSS reescribe el HTML al aplicar estilos"
      ],
      "c": 1,
      "e": "El panel Elementos muestra el DOM vivo. El navegador corrige el HTML mal formado al construirlo (por ejemplo, agrega `tbody`), y JavaScript puede cambiarlo después."
    },
    {
      "id": 348,
      "t": 17,
      "q": "¿Qué devuelve `document.querySelector(\"#estado\")` si no encuentra el elemento?",
      "o": [
        "null",
        "Un elemento vacío",
        "undefined"
      ],
      "c": 0,
      "e": "`querySelector` devuelve el primer elemento que coincide o `null` si no hay ninguno. Conviene comprobarlo antes de usar el resultado."
    },
    {
      "id": 349,
      "t": 17,
      "q": "¿Qué propiedad conviene usar para mostrar en la página un nombre que llegó de una API?",
      "o": [
        "innerHTML sin validación",
        "textContent",
        "outerHTML con la respuesta completa"
      ],
      "c": 1,
      "e": "`textContent` inserta el dato como texto literal. `innerHTML` lo interpretaría como HTML, y un dato externo con etiquetas podría inyectar código (XSS)."
    },
    {
      "id": 350,
      "t": 17,
      "q": "¿Por qué se escribe `boton.addEventListener(\"click\", manejar)` y no `boton.addEventListener(\"click\", manejar())`?",
      "o": [
        "Debe devolver un elemento al registrarse",
        "El navegador no acepta callbacks",
        "Debe ejecutarse cuando ocurra el evento"
      ],
      "c": 2,
      "e": "`addEventListener` recibe una función para llamarla cuando ocurra el evento. Escribir `manejador()` la ejecutaría en ese momento y registraría su resultado."
    },
    {
      "id": 351,
      "t": 17,
      "q": "¿Qué hace `evento.preventDefault()` en un submit cancelable?",
      "o": [
        "Cancela el comportamiento nativo de envío",
        "Detiene la propagación del evento",
        "Vacía los campos del formulario"
      ],
      "c": 0,
      "e": "`preventDefault` cancela la acción por defecto del navegador, como enviar el formulario o seguir un enlace. No detiene la propagación: eso es `stopPropagation`."
    },
    {
      "id": 352,
      "t": 17,
      "q": "¿Qué distingue `evento.target` de `evento.currentTarget`?",
      "o": [
        "target es el origen; currentTarget, el del listener",
        "target es el del listener; currentTarget, el origen",
        "Son el mismo elemento en todos los casos"
      ],
      "c": 0,
      "e": "`target` es el elemento donde se originó el evento, como el botón pulsado. `currentTarget` es el elemento que tiene el listener que se está ejecutando, que puede ser un ancestro."
    },
    {
      "id": 353,
      "t": 17,
      "q": "Una app del clima busca ciudades por nombre y muestra una lista de coincidencias para que la persona elija una. ¿Por qué no usa directamente la primera?",
      "o": [
        "Porque la API exige elegir una por país",
        "Para consultar las coordenadas de la ciudad que se quiso buscar",
        "Para mostrar el clima de todas a la vez"
      ],
      "c": 1,
      "e": "Una ciudad puede compartir el nombre con muchas otras. La app muestra las coincidencias con su región y país para que la persona elija, en lugar de decidir en silencio por ella; cada ubicación tiene sus propias coordenadas."
    },
    {
      "id": 354,
      "t": 17,
      "q": "Una app arma la URL de búsqueda con el nombre de una ciudad que tiene espacios y tildes. ¿Qué aporta usar `URLSearchParams`?",
      "o": [
        "Traduce el nombre de la ciudad al inglés",
        "Garantiza que la red responda",
        "Codifica correctamente los valores de la query"
      ],
      "c": 2,
      "e": "Una URL no admite espacios ni tildes tal cual. `URLSearchParams` los codifica, por ejemplo el espacio como `+` o `%20`, para que el pedido llegue bien."
    },
    {
      "id": 355,
      "t": 17,
      "q": "En una app del clima, al empezar una búsqueda nueva se oculta el resultado anterior y se borra la lista de ciudades. ¿Para qué?",
      "o": [
        "Para liberar la memoria que usó el navegador",
        "Para que la API no reciba dos pedidos",
        "Para no mostrar datos viejos como actuales"
      ],
      "c": 2,
      "e": "Si al empezar una búsqueda nueva siguiera visible el resultado anterior, parecería el actual. Limpiar evita mostrar datos viejos como si fueran de la ciudad nueva."
    },
    {
      "id": 356,
      "t": 17,
      "q": "Una app valida la temperatura con `Number.isFinite(temperatura)` antes de mostrarla. ¿Qué ventaja tiene esto cuando la temperatura es 0 °C?",
      "o": [
        "Descarta 0 por ser un valor falsy",
        "Acepta 0 como temperatura válida",
        "Rechaza temperaturas bajo cero"
      ],
      "c": 1,
      "e": "0 °C es falsy. Una condición como `if (temperatura)` lo trataría como dato faltante. `Number.isFinite(0)` es `true`, así que acepta 0 y rechaza `NaN` o `undefined`."
    },
    {
      "id": 357,
      "t": 17,
      "q": "Una API entrega tiempo Unix en segundos. ¿Qué necesita `new Date` para ese instante?",
      "o": [
        "Milisegundos, por lo que se multiplica por 1000",
        "Segundos sin conversión",
        "Una cadena de zona horaria como único argumento"
      ],
      "c": 0,
      "e": "`new Date(numero)` espera milisegundos desde 1970, y el tiempo Unix suele venir en segundos. Hay que multiplicar por 1000."
    },
    {
      "id": 358,
      "t": 17,
      "q": "¿Qué permite `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` en una página adaptable?",
      "o": [
        "Que el navegador genere las media queries",
        "Que la página funcione sin CSS",
        "Que el ancho de diseño acompañe al dispositivo móvil"
      ],
      "c": 2,
      "e": "Sin esa etiqueta, el navegador móvil simula una pantalla de escritorio y achica todo. `width=device-width` hace que el diseño use el ancho real del dispositivo."
    },
    {
      "id": 359,
      "t": 17,
      "q": "Dentro de un formulario, ¿qué tipo de botón se usa para una acción que no debe enviarlo?",
      "o": [
        "`type=\"submit\"`",
        "`type=\"button\"`",
        "`type=\"search\"`"
      ],
      "c": 1,
      "e": "Dentro de un formulario, un `button` es `type=\"submit\"` por defecto y lo envía. Para una acción que no debe enviarlo hay que indicar `type=\"button\"`."
    },
    {
      "id": 360,
      "t": 17,
      "q": "Si una imagen es puramente decorativa, ¿qué valor de `alt` indica que no aporta contenido?",
      "o": [
        "`alt=\"\"`",
        "Omitir el atributo alt",
        "`alt=\"imagen decorativa\"`"
      ],
      "c": 0,
      "e": "`alt=\"\"` indica que la imagen es decorativa y los lectores de pantalla la saltan. Si se omite `alt`, algunos leen el nombre del archivo."
    },
    {
      "id": 361,
      "t": 17,
      "q": "En la cascada de CSS, ¿qué modifica `!important`?",
      "o": [
        "El número de identificadores en el selector",
        "El orden físico de las reglas en el archivo",
        "La etapa de importancia de la declaración"
      ],
      "c": 2,
      "e": "`!important` pasa la declaración a una etapa de mayor prioridad en la cascada, por encima de las declaraciones normales, sin importar la especificidad ni el orden."
    },
    {
      "id": 362,
      "t": 17,
      "q": "Una app muestra `Failed to fetch`. ¿Qué panel del navegador ayuda a revisar solicitudes, estados y tiempos?",
      "o": [
        "Elementos o Elements",
        "Red o Network",
        "Aplicación o Application"
      ],
      "c": 1,
      "e": "El panel Red (Network) lista cada solicitud con su estado, cabeceras, cuerpo y tiempos. Ahí se ve si el pedido salió, qué respondió el servidor o si nunca llegó."
    },
    {
      "id": 363,
      "t": 18,
      "q": "En Arrow.js, ¿qué hace `reactive({ nombre: \"Tornillos\", cantidad: 3 })`?",
      "o": [
        "Hace observables sus propiedades",
        "Guarda el objeto en localStorage",
        "Convierte el objeto en HTML"
      ],
      "c": 0,
      "e": "`reactive` envuelve el objeto para que Arrow detecte cuándo cambian sus propiedades y actualice las partes de la interfaz que las usan."
    },
    {
      "id": 364,
      "t": 18,
      "q": "En una plantilla de Arrow.js, ¿por qué se escribe `${() => producto.cantidad}` en lugar de `${producto.cantidad}`?",
      "o": [
        "Así Arrow sabe qué actualizar al cambiar",
        "Así la plantilla se evalúa una sola vez",
        "Así cantidad se convierte en texto"
      ],
      "c": 0,
      "e": "Si se inserta el valor, la plantilla lo usa una vez y no se entera de los cambios. Al pasar una función, Arrow registra qué propiedades lee y vuelve a ejecutarla cuando cambian."
    },
    {
      "id": 365,
      "t": 18,
      "q": "En un inventario hecho con Arrow.js, `Contador` es un componente que muestra la tarjeta de un producto. ¿Qué recibe y qué devuelve?",
      "o": [
        "Recibe una plantilla; devuelve un producto",
        "Recibe un producto; devuelve una plantilla",
        "Recibe un id; devuelve HTML en texto"
      ],
      "c": 1,
      "e": "Un componente es una función: recibe datos (un producto) y devuelve una plantilla que los muestra (su tarjeta)."
    },
    {
      "id": 366,
      "t": 18,
      "q": "En Arrow.js, ¿por qué se escribe `Contador(p).key(p.id)` al mostrar una lista de productos?",
      "o": [
        "Ordena la lista por id",
        "Reinicia cada contador al filtrar la lista",
        "Identifica cada producto aunque se mueva"
      ],
      "c": 2,
      "e": "`key` le da a cada elemento una identidad estable. Si la lista se reordena o se filtra, Arrow reutiliza el elemento correcto en lugar de confundirlo por su posición."
    },
    {
      "id": 367,
      "t": 18,
      "q": "En un buscador hecho con Arrow.js, el campo tiene `.value=\"${() => estado.busqueda}\"` y `@input=\"${e => estado.busqueda = e.target.value}\"`. ¿Qué hace cada uno?",
      "o": [
        ".value muestra el estado; @input lo actualiza",
        "@input muestra el estado; .value lo actualiza",
        "Ambos actualizan el estado al escribir"
      ],
      "c": 0,
      "e": "`.value` enlaza el valor del campo con el estado, y el campo muestra lo que dice el estado. `@input` escucha lo que escribe la persona y actualiza el estado. Juntos forman un enlace en dos sentidos."
    },
    {
      "id": 368,
      "t": 18,
      "q": "En un inventario hecho con Arrow.js, un producto se oculta al filtrar por búsqueda y reaparece al borrar el texto. ¿Por qué conserva su cantidad?",
      "o": [
        "Cada búsqueda recrea los productos desde cero",
        "filter devuelve los mismos objetos del estado",
        "Arrow guarda la cantidad en localStorage"
      ],
      "c": 1,
      "e": "`filter` no copia los productos: devuelve los mismos objetos del estado. Al reaparecer, se muestra el mismo objeto, con la cantidad que tenía."
    },
    {
      "id": 369,
      "t": 18,
      "q": "En un inventario hecho con Arrow.js, el componente `Formulario` crea su propio estado `borrador`. ¿Por qué?",
      "o": [
        "Para que el inventario cambie en cada tecla",
        "Porque Arrow no permite estado fuera de componentes",
        "Para no tocar el inventario hasta confirmar"
      ],
      "c": 2,
      "e": "El borrador guarda lo que se escribe sin tocar el inventario hasta confirmar. Como se crea dentro del componente, cada formulario tiene el suyo."
    },
    {
      "id": 370,
      "t": 18,
      "q": "¿Por qué se aplica `Number` a la cantidad que se lee de un campo con `e.target.value`?",
      "o": [
        "Arrow convierte todo número en bigint",
        "El input devuelve undefined si está vacío",
        "El valor del campo llega como texto"
      ],
      "c": 2,
      "e": "El valor de un `input` siempre llega como string, aunque sea de tipo número. Sin convertirlo, una suma concatenaría texto."
    },
    {
      "id": 371,
      "t": 18,
      "q": "En Arrow.js, ¿qué hace `estado.productos = estado.productos.filter(p => p.id !== id)`?",
      "o": [
        "Elimina todos los productos del mismo nombre",
        "Reemplaza la lista por una sin ese producto",
        "Oculta el producto sin cambiar la lista"
      ],
      "c": 1,
      "e": "`filter` crea un array nuevo sin el producto con ese `id`, y la asignación reemplaza la lista del estado. Arrow detecta la asignación y actualiza la interfaz."
    },
    {
      "id": 372,
      "t": 18,
      "q": "En un inventario de Arrow.js cuyos datos viven solo en memoria, ¿qué pasa con los productos agregados al recargar la página?",
      "o": [
        "Se pierden y reaparecen los valores iniciales",
        "Se restauran desde una base de datos integrada en Arrow",
        "Se recuperan desde localStorage"
      ],
      "c": 0,
      "e": "El estado vive en la memoria de la página. Al recargar se pierde y la app arranca con los datos iniciales del código. Para conservarlo haría falta guardarlo, por ejemplo en localStorage."
    },
    {
      "id": 373,
      "t": 18,
      "q": "En un inventario hecho con Arrow.js, ¿cómo entrega el componente `Formulario` los datos de un producto nuevo a la aplicación?",
      "o": [
        "Modifica directamente `estado.productos` mientras se escribe",
        "Envía el borrador al CDN de Arrow.js",
        "Llama a `acciones.onAgregar(datos)` al confirmar"
      ],
      "c": 2,
      "e": "El formulario no toca el inventario: al confirmar, llama a la función que recibió (`acciones.onAgregar`) con los datos. La aplicación, en `agregar`, asigna el identificador y lo incorpora a `estado.productos`."
    },
    {
      "id": 374,
      "t": 18,
      "q": "En una tarjeta hecha con Arrow.js, el botón de restar tiene `disabled=\"${() => producto.cantidad === 0}\"`. ¿Qué pasa cuando la cantidad llega a cero?",
      "o": [
        "Queda deshabilitado mediante una lectura reactiva de la cantidad",
        "Se oculta de la tarjeta",
        "Sigue restando hasta números negativos"
      ],
      "c": 0,
      "e": "El atributo `disabled` del botón depende de una función que lee la cantidad. Cuando llega a 0, Arrow reevalúa la función y deshabilita el botón. Así la cantidad no baja de cero."
    },
    {
      "id": 375,
      "t": 19,
      "q": "¿Cuáles de estos programas pueden actuar como cliente HTTP?",
      "o": [
        "Solo un navegador con interfaz gráfica",
        "Un navegador, curl o fetch desde un programa",
        "Un servidor web, pero no curl"
      ],
      "c": 1,
      "e": "Un cliente HTTP es cualquier programa que envía pedidos HTTP: un navegador, curl en la terminal o `fetch` desde código."
    },
    {
      "id": 376,
      "t": 19,
      "q": "HTTP es un protocolo sin estado (stateless). ¿Qué implica eso?",
      "o": [
        "El servidor recuerda los pedidos anteriores",
        "No se pueden usar cookies ni cabeceras",
        "Cada pedido debe incluir lo necesario para entenderse solo"
      ],
      "c": 2,
      "e": "HTTP no recuerda los pedidos anteriores. Cada pedido tiene que traer todo lo necesario para entenderse, como la autenticación en una cabecera o una cookie."
    },
    {
      "id": 377,
      "t": 19,
      "q": "En la URL `https://ejemplo.com/usuarios?id=7#perfil`, ¿qué parte no se envía al servidor?",
      "o": [
        "El fragmento",
        "La ruta",
        "La cadena de consulta"
      ],
      "c": 0,
      "e": "El fragmento (lo que sigue a `#`) lo usa solo el navegador, por ejemplo para ir a una sección. No se envía al servidor."
    },
    {
      "id": 378,
      "t": 19,
      "q": "¿Qué cabecera indica que el cuerpo del pedido está en formato JSON?",
      "o": [
        "Accept: application/json",
        "Content-Type: application/json",
        "Content-Encoding: application/json"
      ],
      "c": 1,
      "e": "`Content-Type` describe el formato del cuerpo que se envía. `Accept` indica qué formato se quiere recibir en la respuesta."
    },
    {
      "id": 379,
      "t": 19,
      "q": "En una API REST de usuarios, ¿qué URL representa al usuario con id 7?",
      "o": [
        "/obtenerUsuario?id=7 como única forma REST",
        "/users/7",
        "/users#7"
      ],
      "c": 1,
      "e": "En REST, la URL nombra el recurso y el método HTTP indica la acción. `/users/7` es el usuario con id 7, y se lee con `GET /users/7`."
    },
    {
      "id": 380,
      "t": 19,
      "q": "¿Qué método HTTP se usa normalmente para leer un recurso sin modificarlo?",
      "o": [
        "POST",
        "DELETE",
        "GET"
      ],
      "c": 2,
      "e": "`GET` pide un recurso sin modificarlo. `POST` crea y `DELETE` borra."
    },
    {
      "id": 381,
      "t": 19,
      "q": "¿Qué diferencia hay entre los métodos `PATCH` y `PUT`?",
      "o": [
        "PATCH cambia campos; PUT reemplaza todo",
        "PUT cambia campos; PATCH reemplaza todo",
        "PATCH crea recursos; PUT los modifica"
      ],
      "c": 0,
      "e": "`PATCH` modifica solo los campos enviados. `PUT` reemplaza el recurso completo con lo que se envía, y los campos que faltan pueden perderse."
    },
    {
      "id": 382,
      "t": 19,
      "q": "Un `POST` falla por un error de red y se reintenta. ¿Por qué hay que tener cuidado?",
      "o": [
        "POST es idempotente, como PUT",
        "Puede crear el recurso dos veces",
        "El servidor rechaza POST repetidos"
      ],
      "c": 1,
      "e": "`POST` no es idempotente: repetirlo puede crear otro recurso. Si la respuesta se perdió, el servidor pudo haber creado el recurso igual, y reintentar lo duplicaría."
    },
    {
      "id": 383,
      "t": 19,
      "q": "¿Qué significan los códigos HTTP 201 y 204?",
      "o": [
        "201 para recurso creado; 204 para éxito sin cuerpo",
        "201 para éxito sin cuerpo; 204 para recurso creado",
        "201 para redirección; 204 para validación fallida"
      ],
      "c": 0,
      "e": "201 Created indica que se creó un recurso. 204 No Content indica éxito sin cuerpo en la respuesta."
    },
    {
      "id": 384,
      "t": 19,
      "q": "¿Qué diferencia hay entre los códigos HTTP 401 y 403?",
      "o": [
        "401: no hay permiso; 403: falta autenticarse",
        "401: servidor caído; 403: recurso movido",
        "401: falta autenticarse; 403: no hay permiso"
      ],
      "c": 2,
      "e": "401 significa que falta una autenticación válida: el servidor no sabe quién sos. 403 significa que sabe quién sos pero no tenés permiso."
    },
    {
      "id": 385,
      "t": 19,
      "q": "¿Qué informa el código HTTP 429?",
      "o": [
        "Tiempo de espera agotado",
        "Cuerpo JSON inválido",
        "Demasiadas solicitudes"
      ],
      "c": 2,
      "e": "429 Too Many Requests indica que se superó el límite de pedidos. Hay que esperar, a veces lo que indica la cabecera `Retry-After`, antes de reintentar."
    },
    {
      "id": 386,
      "t": 19,
      "q": "¿Cómo deben escribirse las claves de un objeto en JSON?",
      "o": [
        "Comillas dobles",
        "Comillas simples",
        "Ninguna comilla"
      ],
      "c": 0,
      "e": "En JSON, las claves siempre van entre comillas dobles. Las comillas simples o las claves sin comillas son válidas en JavaScript, pero no en JSON."
    },
    {
      "id": 387,
      "t": 19,
      "q": "¿Qué operación convierte un objeto JavaScript en texto JSON para enviarlo?",
      "o": [
        "JSON.parse",
        "JSON.stringify",
        "Response.json"
      ],
      "c": 1,
      "e": "`JSON.stringify` convierte un valor de JavaScript en texto JSON para enviarlo. `JSON.parse` hace lo inverso."
    },
    {
      "id": 388,
      "t": 19,
      "q": "JSONPlaceholder es una API de práctica. Se crea un recurso con `POST` y después se lo pide con `GET`. ¿Qué pasa?",
      "o": [
        "No lo encuentra: el POST se simula y no se guarda",
        "Lo encuentra con el id devuelto",
        "Lo encuentra hasta que se reinicia"
      ],
      "c": 0,
      "e": "JSONPlaceholder es una API de práctica: acepta el POST y responde como si hubiera creado el recurso, pero no guarda nada. Al pedirlo después, el servidor responde 404."
    },
    {
      "id": 389,
      "t": 19,
      "q": "En un archivo `.http` de la extensión REST Client, ¿qué separa un pedido del siguiente?",
      "o": [
        "Una etiqueta HTML",
        "Un archivo distinto por pedido",
        "###"
      ],
      "c": 2,
      "e": "En un archivo `.http` de REST Client, `###` separa un pedido del siguiente."
    },
    {
      "id": 390,
      "t": 19,
      "q": "¿Qué opción de `curl` muestra las cabeceras de la respuesta junto con el cuerpo?",
      "o": [
        "-d",
        "-i",
        "-o"
      ],
      "c": 1,
      "e": "`curl -i` incluye en la salida el estado y las cabeceras de la respuesta, antes del cuerpo. `-d` envía datos y `-o` guarda la salida en un archivo."
    },
    {
      "id": 391,
      "t": 19,
      "q": "¿Qué espera cada uno de estos pasos: `await fetch(url)` y `await respuesta.json()`?",
      "o": [
        "Primero el cuerpo; luego su conversión",
        "Primero las cabeceras; luego el cuerpo",
        "Primero la conexión; luego las cabeceras"
      ],
      "c": 1,
      "e": "`fetch` se resuelve cuando llegan el estado y las cabeceras, aunque el cuerpo todavía no llegó. `json()` espera el cuerpo completo y lo convierte."
    },
    {
      "id": 392,
      "t": 19,
      "q": "Después de `await respuesta.json()`, ¿qué indica `respuesta.bodyUsed`?",
      "o": [
        "true; el cuerpo ya se consumió",
        "false; puede leerse de nuevo sin límite",
        "undefined porque Response no tiene cuerpo"
      ],
      "c": 0,
      "e": "El cuerpo de una respuesta es un stream que se lee una sola vez. Después de `json()`, `bodyUsed` es `true` y otra lectura lanza un error."
    },
    {
      "id": 393,
      "t": 19,
      "q": "¿Qué pasa con la promesa de `fetch` si el servidor responde 404?",
      "o": [
        "La promesa se rechaza con un error",
        "Se resuelve y respuesta.ok es true",
        "Se resuelve y respuesta.ok es false"
      ],
      "c": 2,
      "e": "`fetch` solo rechaza por fallos de red. Un 404 es una respuesta: la promesa se resuelve y `respuesta.ok` es `false`, así que hay que comprobarlo."
    },
    {
      "id": 394,
      "t": 19,
      "q": "Una app de consola hecha con Ink maneja los estados `\"pidiendo\"`, `\"cargando\"`, `\"mostrando\"` y `\"error\"`. ¿Qué indica el estado `\"cargando\"`?",
      "o": [
        "Que la API ya devolvió el clima",
        "Que la consulta está en curso y aún no hay respuesta",
        "Que la consulta falló y se reintenta"
      ],
      "c": 1,
      "e": "La app modela la interfaz como estados: `\"pidiendo\"`, `\"cargando\"`, `\"mostrando\"` y `\"error\"`, y cada uno dibuja una pantalla distinta. `\"cargando\"` significa que el pedido está en curso y todavía no hay respuesta."
    },
    {
      "id": 395,
      "t": 19,
      "q": "En un pedido HTTP, ¿qué cabecera expresa el formato de respuesta que acepta el cliente?",
      "o": [
        "Content-Length",
        "Location",
        "Accept"
      ],
      "c": 2,
      "e": "`Accept` indica qué formatos de respuesta acepta el cliente, por ejemplo `application/json`. `Content-Length` es el tamaño del cuerpo y `Location` señala una URL."
    },
    {
      "id": 396,
      "t": 19,
      "q": "Un servidor recibe JSON bien formado, pero un campo no supera la validación. ¿Qué código HTTP representa ese caso?",
      "o": [
        "422",
        "304",
        "201"
      ],
      "c": 0,
      "e": "422 Unprocessable Content indica que el cuerpo está bien formado pero no pasa las reglas de validación. Un JSON mal escrito correspondería a 400."
    },
    {
      "id": 397,
      "t": 19,
      "q": "¿Qué comunica un estado HTTP `304 Not Modified`?",
      "o": [
        "Que el recurso se movió a otra URL",
        "Que el servidor no reconoce el método",
        "Que la copia en caché sigue valiendo"
      ],
      "c": 2,
      "e": "304 Not Modified responde a un pedido condicional: el recurso no cambió desde la copia en caché del cliente, así que puede seguir usándola sin volver a descargarla."
    },
    {
      "id": 398,
      "t": 19,
      "q": "¿Qué aporta `url.searchParams.set(\"ciudad\", nombre)` al construir una URL?",
      "o": [
        "Codifica el valor para la query, incluso espacios y tildes",
        "Convierte el nombre en coordenadas",
        "Agrega el valor sin codificar a la URL"
      ],
      "c": 0,
      "e": "`searchParams.set` agrega o reemplaza el parámetro y codifica su valor, así los espacios, tildes o símbolos no rompen la URL."
    },
    {
      "id": 399,
      "t": 19,
      "q": "En la salida de `curl -v`, ¿qué distinguen las líneas que empiezan con `>` de las que empiezan con `<`?",
      "o": [
        "`>` es lo recibido; `<` lo enviado",
        "`>` es lo enviado; `<` lo recibido",
        "`>` son errores; `<` son avisos"
      ],
      "c": 1,
      "e": "En `curl -v`, las líneas que empiezan con `>` son lo que curl envía (pedido y cabeceras) y las que empiezan con `<` son lo que recibe (estado y cabeceras de la respuesta)."
    },
    {
      "id": 400,
      "t": 19,
      "q": "Si una respuesta de `fetch` tiene estado `204`, ¿qué debe hacer una función que espera JSON antes de llamar a `respuesta.json()`?",
      "o": [
        "No llamar a json() y devolver null",
        "Llamar a json(), que devuelve {}",
        "Tratar 204 como un error"
      ],
      "c": 0,
      "e": "Un 204 no trae cuerpo, así que `json()` fallaría al intentar leer JSON vacío. Hay que comprobar el estado antes y devolver algo como `null`."
    }
  ]
};
