
#Python model for analyzing the sentiment of our sentences

#Python package that allows us to pass cmd line arguments to our script
import argparse 
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import operator

#entry point of python script
if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Vader sentiment analyzer')
    parser.add_argument('-s', action='store', type=str)
    args = parser.parse_args() #all parameters that we pass to our script wil be here

    if args.s:
        scores = SentimentIntensityAnalyzer().polarity_scores(args.s) #how pos/neg/neutral inputted sentence is
        # {'neg': 0.756, 'neu': 0.244, 'pos': 0.0, 'compound': -0.4767}
        del scores['compound'] #we dont need it
        #sort and take highest value
        sorted_scores = sorted(scores.items(), key=operator.itemgetter(1), reverse=True) #itemgetter(1) is value. itemgetter(0) is key, 'neg'
        # sorted_scores = [('neg', 0.756), ('neu', 0.244), ('pos', 0.0)]
        print sorted_scores[0][0] #it'll return neg, neu or pos