
from http.server import BaseHTTPRequestHandler, HTTPServer      #python 3
from MimeTypes import getMimeType  #put MimeTypes.py in same folder as the server
import os

hostName = "localhost"
serverPort = 8000

#this is where the server looks for files requested by the browser
root = "/home/frank/311/html/"   
os.chdir(root) #change to the html root directory
   
class server(BaseHTTPRequestHandler):

   def do_GET(self):          #this function responds to GET requests

      uri = self.path
      if uri == '/': uri = "/index.html"
      
      qmark = uri.rfind('?')  #position of '?' char
      p = uri.rfind('.')      #position of '.' char
      print("qmark is {}, p is {}".format(qmark,p))
      if qmark == -1: 
         path = uri   
         query = ""
         ext = uri[p:] #python slice
      else:
         path  = uri[:qmark]      #everything before the '?'
         query = uri[qmark+1:]    #everything after the '?'
         ext   = uri[p+1:qmark]   #everything between the . and the ?
      
		#does this GET request require us to execute a script?    
      if path[-3:] == "php" or path[-3:]=="bin" or path[-2:]=="py":
         notImplemented(self)
         return
                 
      # **************** the URI is actually a URL ***************
      if path == "/": path = path + "index.html"
      filename = root+path
      
      #can we open the file?
      if(os.path.isfile(filename)):  #yes we can
         f=open(filename,"rb")       #open the file
         data=f.read()               #and read its contents

         #send the HTTP status message to the browser
         self.send_response(200)
         self.send_header("Content-type",getMimeType(ext))        
         self.end_headers()

         #now send the data
         self.wfile.write(data)

      else:                         #no we can't                
         self.send_response(404)    #let the browser know
         self.send_header("Content-type","text/html")
         self.end_headers()
     

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
