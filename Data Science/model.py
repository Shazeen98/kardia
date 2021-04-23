import pandas as pd
import pickle

'''
    Features
     1. X1 - Age
     2. X2 - EF (Ejection Fraction)
     3. X3 - Creatinine
    
    Predicted Value
     Y - Event
'''

# Read data set
dataset = pd.read_csv('dataset.csv')

# fill missing values from taking average of that column
dataset['Age'].fillna(dataset['Age'].mean(), inplace=True)
dataset['EF'].fillna(dataset['EF'].mean(), inplace=True)
dataset['Creatinine'].fillna(dataset['Creatinine'].mean(), inplace=True)

# take model parameters
X = dataset.iloc[: , :3]

# take predicted term
y = dataset.iloc[:, -1]

# use LinearRegression and fit the model
from sklearn.linear_model import LinearRegression
regression = LinearRegression()
regression.fit(X, y)

pickle.dump(regression, open('model.pkl','wb'))

model = pickle.load(open('model.pkl','rb'))

print("Prediction = " , model.predict([[40,50,1.03]]))