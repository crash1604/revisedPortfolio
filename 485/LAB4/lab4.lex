 /* starter lex file for Wanderful recognizer:
  *     currently what it actually (incorrectly) recognizes as a Wanderful program is
  *     anything of the form "start NUMBER finish" where NUMBER is a positive integer
  */

 /* ---- part 1: declarations ---- */

 /* part 1a: any character sets we want to identify */
Digit [0-9]
Alpha [a-zA-Z]

 /* part 1b: the C setup */
%{
#include<stdio.h>
#include "y.tab.h"
extern YYSTYPE yylval;
int yywrap();
int yyerror(char* s);
int col=1;
int row=1;
%}

%%

 /* ---- part 2: token rules ---- */
[A-Z]{Alpha}*  { 
		yylval.info.number= 0;
		strcpy( yylval.info.name, yytext);
		col+=strlen(yytext); 
		return(NAME);
	}

({Digit})+ { 
		yylval.info.number = atoi(yytext);
		yylval.info.name[0] = '\0';
		col+=strlen(yytext); 
		return(NUMBER); 
	}
":"		{col++;return(COLON);}
";"     {col++; return(SEMI);}
"<"	{col++; return(LESS);}
"<="	{col+=2; return(LESSEQ);}
"="	{col++; return(EQ);}
"><"	{col+=2; return(NOTEQ);}
"("	{col++; return(LBRACKET);}
")"	{col++; return(RBRACKET);}
":="	{col+=2; return(ASSIGNOP);}
"'"	{col++; return(QUOTE);}

"+"	{col++; return(PLUS);}
"-"	{col++; return(MINUS);}

"mapsize"	{col+=7; return(MAPSIZE);}

"function"	{col+=8; return(FUNCNAME);}

"start"    { col+=5; return(START); }
"finish"    { col+=6; return(FINISH); }

 /*Typenames for lab3*/
"int"		{col+=3;return(VINT);}
"name"		{col+=4;return(VNAME);}
"str"		{col+=3;return(VSTR);}
"facing"	{col+=6;return(VFACING);}
"none"		{col+=4;return(NONE);}

 /* ACTION items */

"create"	{col+=6; return(CREATE);}
"move"		{col+=4; return(MOVE);}
"turn"		{col+=4; return(TURN);}
"print"		{col+=5; return(PRINT);}

 /* LOOP items */
"repeat"	{col+=6;return(REPEAT);}
"until"		{col+=5; return(UNTIL);}

 /* SELECT items */

"if"	{col+=2; return(IF);}
"then"	{col+=4; return(THEN);}
"begin" {col+=5; return(BEGIN);}
"end"	{col+=3; return(END);}
 /* Coodinate Items */

"row"	{col+=3; return(ROW);}
"col"	{col+=3; return(COL);}

 /*Direction items*/

"north"		{col+=5;return(NORTH);}
"south"		{col+=5;return(SOUTH);}
"east"		{col+=4;return(EAST);}
"west"		{col+=4;return(WEST);}

 /*function call Face*/
"face"		{col+=4;return(FACE);}

	
([a-z][0-9a-z]*) {
		yylval.info.number =0;
		strcpy( yylval.info.name, yytext);
		col+=strlen(yytext);
		return(VARNAME);
	}
	

(['](.[^/[a-zA-Z']{1}])*[']) {
		yylval.info.number= atoi(yytext);
		strcpy( yylval.info.name, yytext);
		col+=strlen(yytext);
		return(STRVAL);
}


 /* identify any characters that are just to be skipped, e.g. whitespace */
[ \t\f\v]  { col++; }

 /* adjust row/column after a newline */
([\n]) { row++; col=0; }

 /* comments striping*/
([%](.)*[\n]) 	{  row++; }

 /* anything else is an error, return it as a token so the yacc rules can reject it */
.          { char errmsg[] = "Unknown char in input: x";
             errmsg[23] = yytext[0];
             yyerror(errmsg);
             return(yytext[0]); }

%%

 /* ---- part 3: supporting code ---- */

 /* cleanup any loose ends at the end of input */
int yywrap()
{
   return(1);
}

 /* process any error messages generated */
int yyerror(char* s)
{
   fprintf(stderr, "\n***Error detected: %s\n   on/after row %d, col %d.\n\n", s, row, col);
   return 1;
}

