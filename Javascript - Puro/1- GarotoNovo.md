##Iniciando - JS
###Tabela - Comparação de Operadores

Operador | Descrição | Exemplo 
---------|-----------|--------
==|True if operands are the same;  otherwise false|<p> var sVal = "this";  if (sVal == "this") //true </p>
Igualdade Restrito ===| True if operands are the same, and data type; otherwise false|<p>`var sVa1 = "this";  var sVal2 = new String("this");   if(sVal == sVal2)// not true`</p>
!== | True if operands are not the same, or are note the same data  type; otherwise false| `var sval= "this";  var sVal2 = new String("this");  if(sVal !== sVal2)//true`
Greater than > | True if first operand is greater in value tha second operand | `var sOne = "cat";  sTwo = "dog";  if(sOne > sTwo)//false`
Greater than or   equal>=| True if first operand is greater than or equal to second operand | `var sOne = "cat";  var sTwo = "Cat";  if(sOne >= sTwo) //true`
|Less than < | True if second operand is greater tha first operand | ` var sOne= "cat";  var = sTwo = "Cat";  if(sOne < sTwo) //true `
| Less than or equal <= | True if second operand is greater tha or equal to   first operand | ` var sOne = new String("cat");  var sTwo = "cat";    if(sOne <= sTwo)//equal, true`

