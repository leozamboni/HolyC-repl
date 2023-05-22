// Allows "5 < 1 < 2 + 1 < 20" instead of "5 < 1 && 1 < 2 + 1 && 1 + 1 < 20";
if (5 < 1 < 2 + 1 < 20)
{
	"true\n";
}

// Conditionals with logicals;
if (TRUE)
{
	if (1 > 2)
	{
		"1 > 2\n";
	}
	else if (1 > 2 || 2 > 3)
	{
		"2 > 3\n";
	}
	else
	{
		"all false conditions\n";
	}
}

if (TRUE > FALSE)
{
	"TRUE > FALSE\n";
}

// Conditionals with variables;
U8 A = 1;
U8 B = 2;
if (A < B)
{
	"A < B\n";
}

if (A)
{
	"A != 0\n";
	A = 0;
}

if (A)
{
	"A == 0\n";
}

// Conditionals with math expressions.
if (1 + 2 * 3 > 9)
{
	"1 + 2 * 3 > 9\n";
}
else if (1 + 2 * 3 > A + 8)
{
	"1 + 2 * 3 > A + 8\n";
}

