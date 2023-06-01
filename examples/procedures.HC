U0
no_args()
{
	"no args\n";
}

no_args("*");
no_args();
no_args;

U8
default_args(U8 abc=1, U8 def, U8 ghi=3)
{
	"arg 1: %d\n", abc;
	def = def - 2;
	"arg 2: %d\n", def;
	"arg 3: %d\n", ghi;
	return abc + def + ghi;
}

U32 default_args_value = default_args(,4);
"%d", default_args_value;