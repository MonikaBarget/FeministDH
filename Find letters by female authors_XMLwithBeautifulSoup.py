#!/usr/bin/env python
# coding: utf-8

from bs4 import BeautifulSoup
import os
from os.path import join
import shutil

directory=("C:\\Users\\mbarg\\Documents\\corpus") # directory containing all XML files

results=[] # new result list
item=("Female") # item searched for in XML
for infile in os.listdir(directory):
    filename=join(directory, infile)
    indata=open(filename,"r", encoding="utf-8", errors="ignore") 
    contents = indata.read()
    soup = BeautifulSoup(contents,'xml')
    keywords = soup.find_all('keywords') # accessing XML tag where gender info is stored
    for keyword in keywords:
        items=str(keyword.get_text())
        if item in items:
            results.append(infile) # add name of XML file to result list
            shutil.copy2(join(directory, infile), 'C:\\Users\\mbarg\\Documents\\corpus_women') # copy file to subcorpus 
        else:
             continue     
print(results) # print list of file names in subcorpus
print(len(results)) # print number of files in subcorpus
