
from http.server import BaseHTTPRequestHandler, HTTPServer      #python 3
import os
from statsGen import statisticsGenerator as stats

hostName = "localhost"
serverPort = 8002

startingValue = 987665         #initial value of the statistic
increasing = True   

#this is where the server looks for files requested by the browser
root = "."   
os.chdir(root) #change to the html root directory



class server(BaseHTTPRequestHandler):
   def do_GET(self):          #this function responds to GET requests
       data = stats(startingValue,increasing)
       foo=int(data.get())
       print(foo)
       self.send_response(200)
       self.send_header("Access-Control-Allow-Origin", "*")
       self.end_headers()
       oof=str(foo)
       self.wfile.write(oof.encode())


   def do_HEAD(self):    notImplemented(self)
   def do_POST(self):    notImplemented(self)
   def do_PUT(self):     notImplemented(self)
   def do_POST(self):    notImplemented(self)
   def do_UPDATE(self):  notImplemented(self)
   def do_DELETE(self):  notImplemented(self)
   def do_CONNECT(self): notImplemented(self)
   def do_OPTIONS(self): notImplemented(self)
   def do_TRACE(self):   notImplemented(self)
   def do_PATCH(self):   notImplemented(self)

def notImplemented(self):
    self.send_response(501)    #501 Not Implemented
    self.send_header("Content-type","text/html")
    self.end_headers()
    
       
#only run the server if this module was called from the command line.
#python makes the name different if this module is called by another module.
if __name__ == "__main__":    

    webServer = HTTPServer((hostName, serverPort), server)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")       
