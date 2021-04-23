from flask import Flask, request, jsonify
import pickle
import numpy
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/predict": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/predict',methods=['POST'])
def results():
    data = request.get_json(force=True)
    prediction = model.predict([numpy.array(list(data.values()))])
    output = prediction[0]
    response = jsonify(output)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run()