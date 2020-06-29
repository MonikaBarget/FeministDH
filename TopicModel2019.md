**Topic model of Letters 1916-1923 data dump exported in 2019**

This topic model was created to track the evolution of the collection since the 2016 topic model created by Roman Bleier. Back then, 15 topics were identified that largely corresponded with the tagging system used by the Letters 1916-1923 team.

For the extended collection, 18 NMF topics provided the best description. The topics related to correspondence in Irish and French show that the collection has become more diverse in terms of language as well as content. 

The [linked table](
https://github.com/MonikaBarget/FeministDH/blob/master/TopicModel_fulldata_18topics.csv
) shows the 18 identified topics including our interpretation.

Analysing the relevance of these topics in the 2019 data dump, we find that "personal relations" is the most dominant one overall. This matches the analysis of our manually attributed categories. At the same time, the automated topics give a more nuanced insight into the different aspects of government proceedings and administration covered in our letters. Also, it is interesting that "imprisonment" forms a topic of its own as the Letters 1916-1923 database contains many prison letters from the First World War as well as the Easter Rising and the Irish Civil War.

<img src="Top NMF topics_full data dump 2019.png" alt="5 topics in Daly letters" target="_blank">

Please check the [data table](https://github.com/MonikaBarget/FeministDH/blob/master/Top%20NFM%20topics_full%20data_18%20TOPICS.csv) for details.

The [Python script used to generate the topic model](https://github.com/MonikaBarget/FeministDH/blob/master/Topic%20Modelling_Python_adapted-script.py) is based on the NLTK and Scikit Learn packages. Special thanks goes to [Allen Riddel](https://github.com/ariddell) and the [Sicit Learn development team](https://github.com/scikit-learn/scikit-learn) for their tutorials, documentation and willingness to discuss issues.

For insights into the problems one may encounter when working with multilingual corpora or corpora that contain outdated forms of English, consult [issue #17929 in the Scikit Learn issue tracker](https://github.com/scikit-learn/scikit-learn/issues/17292). 

