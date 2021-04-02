from flask import Flask, jsonify, request

app = Flask(__name__)


class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return f'<User: {self.username}>'


users = [User(username='Shazeen', password='password'), User(username='pahasara', password='secret')]


@app.route('/store', methods=['POST'])
def create_store():
    request_data = request.get_json()
    username = str(request_data['user']),
    password = str(request_data['password']),
    result = 'False'

    for x in users:
        tmp1 = "('" + x.username + "',)"
        tmp2 = "('" + x.password + "',)"

        if str(tmp1) == str(username):
            if str(tmp2) == str(password):
                result = "True"

    if result == "True":
        return jsonify(1)
    else:
        return jsonify(0)


@app.route('/store')
def get_all_store_name():
    return jsonify({users: users})


app.run(port=5000)
