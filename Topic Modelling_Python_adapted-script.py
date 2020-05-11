#!/usr/bin/env python
# coding: utf-8

# In[10]:


import os
import numpy as np
import sklearn.feature_extraction.text as text # submodule gathers utilities to build feature vectors from text documents
from sklearn import decomposition

CORPUS_PATH ="C:\\Users\\mobarget\\Google Drive\\ACADEMIA\\7_FeministDH for Susan\\7_Transcriptions from JSON files\\JSON_all_files_TXT"                                  

filenames=sorted([os.path.join(CORPUS_PATH, fn) for fn in os.listdir(CORPUS_PATH)])
print(len(filenames)) # count files in corpus
print(filenames[:10]) # print names of 1st ten files in corpus

vectorizer = text.CountVectorizer(input='filename', stop_words='english', min_df=20) # HOW CAN I ADD MY OWN STOP WORD LIST?

dtm=vectorizer.fit_transform(filenames).toarray() # defines document term matrix

vocab=np.array(vectorizer.get_feature_names())

print(dtm.shape)

print(len(vocab)) # seems rather too small?

num_topics=15 # No. of topics created in a previous topic model of 2016 to which I want to compare the results.

num_top_words=30 # Can be reduced if a better stop word list is used!

clf=decomposition.NMF(n_components=num_topics, random_state=1)

doctopic=clf.fit_transform(dtm) 

topic_words=[] # list of most prominent words associated with topics
for topic in clf.components_: # I have no idea where this class was defined but it works.
   
    word_idx=np.argsort(topic)[::-1][0:num_top_words]
    topic_words.append([vocab[i] for i in word_idx])
    
print(topic_words) # 
    
doctopic=doctopic/np.sum(doctopic,axis=1,keepdims=True)# not sure why doctopic is being redefined here
    
text_names=[] # names of texts associated with each topic, according to topic shares in MALLET?        
for fn in filenames:
    
    basename=os.path.basename(fn)
    name, ext=os.path.splitext(basename)
    name=name.rstrip('0123456789')
    text_names.append(name)

text_names=np.asarray(text_names) # turn into array to use NumPy function
        
# print(text_names) # list all file names in corpus
        
doctopic_orig=doctopic.copy()
        
print(doctopic_orig)
        
num_groups=len(set(text_names))
print(num_groups) # occassionaly, a strange warning comes up: 
# C:\ProgramData\Anaconda3\lib\site-packages\ipykernel_launcher.py:38:
# RuntimeWarning: invalid value encountered in true_divide
        
doctopic_grouped=np.zeros((num_groups, num_topics)) 
        
for i, name in enumerate(sorted(set(text_names))):
    doctopic_grouped[i,:]=np.mean(doctopic[novel_names==name,:],axis=0)
            
doctopic=doctopic_grouped
            
novels=sorted(set(text_names))
            
print("Top NMF topics in ...")
            
for i in range(len(doctopic)):
    top_topics=np.argsort(doctopic[i,:])[::-1][0:3]
    top_topics_str=' '.join(str(t)for t in top_topics)
    print("{}:{}".format(novels[i],top_topics_str)) # show top topics per text in corpus
    
# show top 15 words

for t in range(len(topic_words)):
    
    print("Topic{}:{}".format(t, ' '.join(topic_words[t][:31])))
            

    







# In[ ]:





# In[ ]:




