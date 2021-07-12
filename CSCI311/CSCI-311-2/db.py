import xmltodict
import os.path
import random
import dict2xml
import collections

class xmldb:

    def __init__(self):
        self.listOfUsers=0
    
    def add(self,newuser):
        nu=collections.OrderedDict(newuser)
        key=random.randrange(1,10000000)
        nu["key"]=str(key)
        slef.listOfUsers(nu)
        return key
    
    def find(self,key):
        for x in self.listOfUsers:
            if x['key'] == key: return x
        return "key not found"
    
    def list(self):
        return self.listOfUsers

    def load(self, filename):
        if os.path.exists(filename): f=open(filename)
        else: return filename + " doesn't exist. "

        buf=f.read()
        f.close()
        dict = xmltodict.parse(buf)
        root=dict.get('root')
        return "ok"
    
    def save(self,filename):
        X='<?xml version="1.0" encoding="UTF-8"?>\n'
        X+= '<root>\n'
        y = dict2xml.dict2xml(self.listofUsers,wrap="user")
        x+=y
        x+='</root>'
        f=open(filename, "w+")
        f.write(x)
        f.close()