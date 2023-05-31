`timescale 1ps/1ps
`include "demo.v"
module demo_tb;
reg X;
wire Y;

demo ut(X,Y);

initial 
    begin
        $dumpfile("demo_tb.vcd");
        $dumpvars(0, demo_tb);

        X=1;
        #30;

        X=0;
        #30;
        
        X=1;
        #30;
        
        X=0;
        #30;
        
        $display("Hello World");
    end
    
endmodule