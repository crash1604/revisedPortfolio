from http.server import BaseHTTPRequestHandler, HTTPServer
from mimetypes import guess_type
import random
import db as xmldb
#put Mimetypes.py in the same folder as the server
import os

hostName="localhost"
serverPort=8088

root ="."
os.chdir(root)
db=xmldb.xmldb()

class server(BaseHTTPRequestHandler):
    def do_GET(self):
        uri=self.path
        head=self.headers
        cookie=str(head).rfind("Cookie")
        print("Cookie:-")
        print(cookie)
        print("Head:-")
        print(head)
        if cookie != -1:
            print(str(head)[cookie+8:])
            cookie=str(head)[cookie+8:]
            uri = "/page1-w-on-b.html"
        if uri == '/': uri = "register.html"
        qmark = uri.rfind('?')
        p = uri.rfind('.')

        if qmark == -1:
            path = uri
            print(path)
            query = ""
            ext = uri[p:]
            print("ext is :"+ ext)

        else:
            path=uri[:qmark]
            print(path)
            query=uri[p+1:qmark]
            print(query)
            ext=uri[p+1:qmark]
            print(ext)

        if path[-3:] == "php" or path[-3:] == "bin" or path[-2:] == "py":
            notImplemented(self)
            return
        if path == "/":
            print("just slash")
            path= "register.html"
        if qmark!=-1:
            esign =query.rfind('=')
            name = query[esign+1:]
            print(name)
            y = db.find(name)
            preference=y['background']
            if preference =="dark": path ="/page1-w-on-b.html"
            elif preference=="light": path="/page1-b-on-w.html"
        filename = root+path
        print(filename)
        if(os.path.isfile(filename)):
            f = open(filename, "rb")
            data= f.read()
            self.send_response(200)
            self.send_header("Content-type",guess_type(ext))
            if qmark == -1:
                rnum = random.randint(1,5000)
                print(rnum)
                self.send_header("Set-Cookie", ("key="+str(rnum)))
            self.end_headers()
            self.wfile.write(data)
        else:
            self.send_response(404)
            self.send_header("Content-type","text/html")
            self.end_headers()

def notImplemented(self):
    self.send_response(501)
    self.send_header("Content-type","text/html")
    self.end_headers()

if __name__ == "__main__":
    db.load("users.xml")
    list = db.list()
    print(list)
    webServer = HTTPServer((hostName,serverPort),server)
    print("Server started http://%s:%s" %(hostName,serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass
    webServer.server_close()
    print("Server Stopped.")
    db.save(users.xml)