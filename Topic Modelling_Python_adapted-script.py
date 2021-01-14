#!/usr/bin/env python
# coding: utf-8

# script for topic modelling based on Scikit Learn and NLTK stopword list
# adapted from tutorial provided by Allen Riddell (https://github.com/ariddell)

# import necessary modules

import os
import numpy as np
import sklearn.feature_extraction.text as text # submodule gathers utilities to build feature vectors from text documents
from sklearn import decomposition
from sklearn.feature_extraction.text import TfidfVectorizer
import nltk
from nltk.corpus import stopwords
nltk.download('stopwords')

# call custom NLTK stopword list

my_stopwords=stopwords.words('en_letters')
my_stopwords.extend(['x2014', '39', 'st', 'quot', 'us', 'didn', 'couldn', 'shouldn', 'wouldn', '000']) # extend list if necessary
print(my_stopwords) # show updated stop word list (optional)

# read .txt files to be analysed from directory

CORPUS_PATH=("C:\\Users\\mobarget\\Google Drive\\ACADEMIA\\7_FeministDH for Susan\\7_Transcriptions from JSON files\\JSON_all_files_TXT")

filenames=sorted([os.path.join(CORPUS_PATH, fn) for fn in os.listdir(CORPUS_PATH)])
print(len(filenames)) # count files in corpus
print(filenames[:10]) # print names of 1st ten files in corpus

vectorizer=text.CountVectorizer(input='filename', stop_words=my_stopwords, min_df=1) # apply stopword list and vectorise data

# min_df: float in range [0.0, 1.0] or int, default=1
# When building the vocabulary ignore terms that have a document frequency 
# strictly lower than the given threshold. This value is also called cut-off
# in the literature. If float, the parameter represents a proportion of documents,
# integer absolute counts. 
#This parameter is ignored if vocabulary is not None

dtm=vectorizer.fit_transform(filenames).toarray() # defines document term matrix

vocab=np.array(vectorizer.get_feature_names())

print(dtm.shape)

print(len(vocab)) # vocabulary size of corpus

num_topics=18 # no. of topics

num_top_words=25 # no. of words per topic to be displayed

clf=decomposition.NMF(n_components=num_topics, random_state=1) # Non-Negative Matrix Factorization (NMF)

# for full documentation see: 
# https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html#sklearn.decomposition.NMF

# random_state : int
# RandomState instance or None, optional (default=None)
# If int, random_state is the seed used by the random number generator; 
# If RandomState instance, random_state is the random number generator; 
# If None, the random number generator is the RandomState instance used by np.random.

doctopic=clf.fit_transform(dtm) 

topic_words=[] # list of most prominent words associated with topics
for topic in clf.components_: 
   
    word_idx=np.argsort(topic)[::-1][0:num_top_words]
    topic_words.append([vocab[i] for i in word_idx])
    
print(topic_words) # output results
    
doctopic=doctopic/np.sum(doctopic,axis=1,keepdims=True)
    
text_names=[] # names of texts associated with each topic, corresponding to topic shares in MALLET    
for fn in filenames:
    
    basename=os.path.basename(fn)
    name, ext=os.path.splitext(basename)
    name=name.rstrip('0123456789')
    text_names.append(name)

text_names=np.asarray(text_names) # turn into array to use NumPy function
        
print(text_names) # list all file names in corpus (optional)
        
doctopic_orig=doctopic.copy()
        
print(doctopic_orig)
        
num_groups=len(set(text_names))
print(num_groups) 
        
doctopic_grouped=np.zeros((num_groups, num_topics)) 
        
for i, name in enumerate(sorted(set(text_names))):
    doctopic_grouped[i,:]=np.mean(doctopic[text_names==name,:],axis=0)
            
doctopic=doctopic_grouped
            
texts=sorted(set(text_names))
            
print("Top NMF topics in ...") 
            
for i in range(len(doctopic)):
    top_topics=np.argsort(doctopic[i,:])[::-1][0:3]
    top_topics_str=' '.join(str(t)for t in top_topics) 
    print("{}:{}".format(texts[i],top_topics_str)) # show top topics per text in corpus

for t in range(len(topic_words)):
    print("Topic{}:{}".format(t, ' '.join(topic_words[t][:31]))) # show topic words according to indicated range

print("done") # confirm successful completion

