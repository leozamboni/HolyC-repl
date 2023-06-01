class Example {
	U16 a, b, c;
	U32 d, e, f;
}Exp;

class Example2 {
	Exp a;
}Exp2;

Exp2 a;

a.a = 10;
"%d\n", a.a;

U8 variable = a.a * 2 + 1;
"var: %d", variable;