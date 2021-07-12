 /*
 */

 /* ---- part 1: declarations ---- */

 /* C setup code: libraries, prototypes, etc */
%{
#include<stdio.h>
#include<string.h>
int MapSize;
int yylex(void);
int yywrap();
int yyerror(char* s);
extern int row;
extern int col;
#define MaxSyms 200
#define MaxVars 300
#define MaxNameLen 200
struct Symbol {
		int row, col;
		long maprow, mapcol;
		char facing;
		char SymName[MaxNameLen];
	};

struct Symbol SymTable[MaxSyms];
int numSyms =0;


int insert (char name[], int r , int c, long mrow, long mcol, char dir);
int checkSymbol (char name[]);
void printTable();
int numVars=0;
struct GlobalVariables {
		int row,col;
		char variableName[MaxNameLen];
		char strVal[MaxNameLen];
		char nameVal[MaxNameLen];
		char faceVal;
		int intVal,varflag;
};
struct GlobalVariables VariableTable[MaxSyms];
int insertSymbol(char name[], int r, int c, char sval[], char nval[], char fval, int ival);
int checkVariable(char name[]);
char face (char name[]);

/*
	flag=1 for int
	flag=2 for name
	flag=3 for str
	flag=4 for facing

	also for comparison we will use valueset as int comparison
	valueset will have same values as flag described above for given types int-> facing

	valueset = 2 for NAME
	valueset = 3 for QUOTE NAME QUOTE which is basically a string
	valueset = 4 for direction

*/
%}

 /* begin processing the top-level component */
%start program

%union { struct nodeinfo { long number; char name[256];int datatype;} info; }

 /* identify the valid token types, all have yylval type long */
%token<struct nodeinfo> NAME NUMBER SEMI LESS LESSEQ EQ NOTEQ LBRACKET RBRACKET MAPSIZE START FINISH CREATE MOVE TURN PRINT REPEAT UNTIL IF THEN END ROW COL NORTH SOUTH EAST WEST VINT VNAME VSTR STRVAL VFACING VARNAME ASSIGNOP QUOTE FACE PLUS MINUS FUNCNAME COLON NONE BEGIN
%type<struct nodeinfo> program setmap statements statement action loop select comparison value lookup builtin compop direction globalvar typename variableassignment valueset arithematicop arithematic numbers function functionlist returntype params functionhead functionbody

 /* ---- part 2: grammar rules ----
  */

%%
`
program: setmap functionlist  statements FINISH
   ;

functionlist:
		function functionlist	|  START
	;

function:
	functionhead functionbody

	;
functionhead:
	FUNCNAME VARNAME LBRACKET params COLON returntype 
	;
functionbody:
	BEGIN statements END
	;
returntype:
	typename
	|	NONE
	;
setmap: MAPSIZE NUMBER SEMI 
{
	MapSize = $<info.number>2;
}
   ;

statements: 
	statement
	|	statement statements
	;

statement:
	select
	|	loop
	|	action
	|	globalvar
	|	variableassignment
	;
action:
	CREATE NAME value value direction SEMI
	{
		if (!checkSymbol ($<info.name>2))
		{
			yyerror("Already declared variable");
			printf("\t name already declared or");	
		}
		else if(!insert ($<info.name>2 , row, col, $<info.number>3, $<info.number>4, $<info.number>5))
		{
			yyerror("redeclaration of name");
			printf("\t offending name was : %s \n", $<info.name>2);
		}
		else if (MapSize < $<info.number>3 | MapSize < $<info.number>4)
		{
			yyerror("The number used it too big");
			printf("\t the number used were: %d  %d and mapSize is %d\n", $<info.number>3, $<info.number>4, MapSize);
		
	}
	}
	|	MOVE NAME value SEMI
		{
		if(checkSymbol($<info.name>2))
		{
			yyerror("name was not declared");
			printf("\t the name was not  declared: %s \n", $<info.name>2);
		}
		}
	|	TURN NAME direction SEMI
		{
		if(checkSymbol($<info.name>2))
		{
			yyerror("name was not declared");
			printf("\t the name was not  declared: %s \n", $<info.name>2);
		}
		}
	|	PRINT valueset SEMI
	;

loop:
	REPEAT statements UNTIL comparison
	;

select:
	IF comparison THEN statements END
	;

comparison:
	LBRACKET valueset compop valueset RBRACKET
	{
		if($<info.datatype>3 = 1)
		{
			if( $<info.datatype>2 != 1 || $<info.datatype>4 !=1)
			{
				yyerror("The types cannot be evaluated");
				printf("Please check the types used for comaprison // < and <= are only for numeric values\n");
			}		
		}
		else if($<info.datatype>2 != $<info.datatype>4)
		{
			yyerror("The types cannot be evaluated");
			printf("Please check the types used for comaprison");
		}

	}
	;

value:
	lookup
	{
		$<info.datatype>$ = $<info.datatype>1;
	}
	|	NUMBER
	{
		$<info.datatype>$=1;
		if(MapSize < $<info.number>1)
		{
			yyerror("The number used it too big");
			printf("\t the number used was: %d and mapSize is %d\n", $<info.number>1,  MapSize);
		}
	}	
	;
lookup:
	builtin LBRACKET NAME RBRACKET
	{
		if(checkSymbol($<info.name>3))
		{
			yyerror("name was not declared");
			printf("\t the name was not  declared: %s \n", $<info.name>2);
		}
		$<info.datatype>$ = $<info.datatype>1;
	}
	;

builtin:
	ROW
		{	$<info.datatype>$ = 1;}
	|	COL
		{	$<info.datatype>$ = 1;}
	|	FACE
		{	$<info.datatype>$ = 4; }
	;

compop:
	LESS
		{
			$<info.datatype>$= 1;
		}
	|	LESSEQ
		{
			$<info.datatype>$= 1;
		}
	|	EQ
		{
			$<info.datatype>$= 0;
		}
	|	NOTEQ
		{
			$<info.datatype>$= 0;
		}
	;

direction:
	NORTH
	{
		$<info.number>$ = 'n';
		$<info.datatype>1 = 4;
	}
	|	SOUTH
	{
		$<info.number>$ ='s';
		$<info.datatype>1 = 4;
	}
	|	EAST
	{
		$<info.number>$ ='e';
		$<info.datatype>1 = 4;
	}
	|	WEST
	{
		$<info.number>$ ='w';
		$<info.datatype>1 = 4;
	}
	;

globalvar:
	typename VARNAME SEMI
	{
		strcpy(VariableTable[numVars].variableName, $<info.name>2);
		VariableTable[numVars].varflag=$<info.datatype>1;
		VariableTable[numVars].row=row;
		VariableTable[numVars].col=col;
		numVars++;
	}
	;

typename:


	VINT
		{
			$<info.datatype>$ =1;
		}
	| VNAME 
		{
			$<info.datatype>$ =2;
		}
	| VSTR 
		{
			$<info.datatype>$ =3;
		}
	| VFACING
		{
			$<info.datatype>$ =4;
		}
	;

variableassignment:
	VARNAME ASSIGNOP valueset SEMI
	{
		// printf("%d blah %s blah blah\n", checkVariable($<info.name>1) , $<info.name>1);
		int temp = checkVariable($<info.name>1);
		if (temp == -1)
		{
			yyerror("Undeclared Variable");
			printf("\t The variable was not declared: %s \n", $<info.name>1);
		}
		if(VariableTable[temp].varflag != $<info.datatype>3)
		{
			yyerror("Type Mismatch");
			printf("\t Check the variable types declared: %s\t%d\t%d \n", $<info.name>1,VariableTable[temp].varflag, $<info.datatype>3 );
		}
		else if (VariableTable[temp].varflag == $<info.datatype>3)
		{
			switch (VariableTable[temp].varflag){
				case 1 :
					VariableTable[temp].intVal= $<info.number>3;
					break;
				case 2 :
					if(checkSymbol( $<info.name>3))
					{
						yyerror("The AI name was not declared");
						printf("\t the name was not  declared: %s \n", $<info.name>3);
						break;
					}
					strcpy(VariableTable[temp].nameVal,$<info.name>3);
					break;
				case 3 :
					strcpy(VariableTable[temp].strVal, $<info.name>3);
					break;
				case 4 :
					VariableTable[temp].faceVal= $<info.number>3;
					break;
				default :
					printf("bruh something is wrong with the datatype of <info.datatype> %d\t var name %s\n", $<info.datatype>1,$<info.name>1);
					break;
			}
		}
	}
	;
valueset:
	value {
		$<info.datatype>$ = $<info.datatype>1;
	}
	|	VARNAME
		{
			int temp = checkVariable($<info.name>1);
			$<info.datatype>$ = VariableTable[temp].varflag;
		}
	|	NAME
		{
			$<info.datatype>$ = 2;
		}
	|	STRVAL
		{
			$<info.datatype>$ = 3;
		}
	|	direction
		{
			$<info.datatype>$ = 4;
		}
	|	arithematic
	;

arithematic:
	numbers arithematicop numbers 
	{
		$<info.datatype>$=1;
	}
	;

arithematicop:
	PLUS	|	MINUS	;

numbers:
	NUMBER	|	lookup	|	VARNAME
	;

 /* ---- part 3: supporting programs ---- */

%%

int insert(char name[], int r, int c, long mrow, long mcol, char dir){
	
	strcpy(SymTable[numSyms].SymName,name);
	SymTable[numSyms].row=r;
	SymTable[numSyms].col=c;
	SymTable[numSyms].maprow=mrow;
	SymTable[numSyms].mapcol=mcol;
	SymTable[numSyms].facing=dir;
	numSyms++;
	return 1;	
}



int checkSymbol(char name[]){
	for(int i=0; i < numSyms ; i++)
	{
		if(strcmp(name, SymTable[i].SymName) == 0)
		{
			return 0;
		}
	}
	return 1;

}

int insertSymbol(char name[], int r, int c, char sval[], char nval[], char fval, int ival)
{
	int i=checkVariable(name);
	if(i==-1){return 0;}
	strcpy(VariableTable[i].strVal,sval);
	strcpy(VariableTable[i].nameVal,nval);
	VariableTable[i].varflag=fval;
	VariableTable[i].row=r;
	VariableTable[i].col=c;
	VariableTable[i].intVal=ival;
	return 1;

}

int checkVariable(char name[])
{
	for(int i=0; i< numVars;i++)
	{
		if(strcmp(name,VariableTable[i].variableName) == 0)
		{
			return i;
		}
	}
	return -1;

}


void printTable(){
	printf("\t mapSize is %d\n Symbols in table:\t%d\n", MapSize, numSyms);
	printf("the table\nSymName\trow\tcol\tmrow\tmcol\tfacing\n");
	for(int i=0; i< numSyms;i++)
	{
		printf("%s\t%d\t%d\t%d\t%d\t%c\n",  SymTable[i].SymName, SymTable[i].row, SymTable[i].col, SymTable[i].maprow, SymTable[i].mapcol, SymTable[i].facing  );
	}
}

void printVarTable(){
	printf("--------Variable Table-------\n\nformat:\nvariableName\t row, col \tvarflag\n");
	for(int i=0;i<numVars;i++)
	{
		printf("%s\t\t%d %d\t %d\n", VariableTable[i].variableName, VariableTable[i].row, VariableTable[i].col, VariableTable[i].varflag );
	}
}


char face(char name[])
{
	for(int i=0; i< numSyms;i++)
	{
		if(strcmp(name,SymTable[i].SymName) == 0)
		{
			return SymTable[i].facing;
		}
	}
}


 /* begin parsing */
int main() {
   printf("Compilation begins:\n\n");
   int res = yyparse();

   printf("\nCompilation complete.\n", res);

   printTable();
   printVarTable();
   return(res);
}

