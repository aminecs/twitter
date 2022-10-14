from flask import Flask, request
import os
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
	return 'Hello, World!'

def check_file_exists(user_id, session_id):
    if os.path.exists(user_id + "-" + session_id + "-log.txt"):
        print("File already exists...")
        append_write = 'a' # append if already exists
    else:
        print("Creating new file...")
        append_write = 'w'
        with open(user_id + "-" + session_id + "-log.txt", append_write) as log_info:
            log_info.write("Timestamp,UserID,ActionID,ActionDescription,Comment\n")
        append_write = 'a'
    return append_write

def check_mouse_file_exists(user_id, session_id):
    if os.path.exists(user_id + "-" + session_id + "-Mouse-log.txt"):
        print("File already exists...")
        append_write = 'a' # append if already exists
    else:
        print("Creating new file...")
        append_write = 'w'
        with open(user_id + "-" + session_id + "-Mouse-log.txt", append_write) as mouse_info:
            print("Creation of mouse")
            mouse_info.write("Timestamp,UserID,XCoordinates,YCoordinates,Comment\n")
        append_write = 'a'
    return append_write

@app.route('/createLogFile', methods=['POST'])
def create_log_file():
    content = request.get_json()
    check_file_exists(content.get("UserID"), content.get("SessionID"))
    check_mouse_file_exists(content.get("UserID"), content.get("SessionID"))
    print("UserID", content.get("UserID"))
    print("SessionID", content.get("SessionID"))
    return "Log file created"

@app.route('/postLogInfo', methods=['POST'])
def post_log_info():
    print("Recording new action")
    content = request.get_json()
    append_write = check_file_exists(content.get("UserID"), content.get("SessionID"))
    with open(content.get("UserID") + "-" + content.get("SessionID") + "-log.txt", append_write) as log_info:
        log_info.write('"{}","{}","{}","{}","{}"\n'.format(content.get("Timestamp"), content.get("UserID"), content.get("ActionID"), content.get("ActionDescription"), content.get("Comment")))
    return 'JSON posted'

@app.route('/postMouseInfo', methods=['POST'])
def post_mouse_info():
    print("Recording new action")
    content = request.get_json()
    append_write = check_mouse_file_exists(content.get("UserID"), content.get("SessionID"))
    print(content)
    with open(content.get("UserID") + "-" + content.get("SessionID") + "-Mouse-log.txt", append_write) as log_info:
        log_info.write('"{}","{}","{}","{}","{}"\n'.format(content.get("Timestamp"), content.get("UserID"), content.get("XCoordinates"), content.get("YCoordinates"), content.get("Comment")))
    return 'JSON posted'


if __name__ == '__main__':
    app.run(threaded=True,host='0.0.0.0')
