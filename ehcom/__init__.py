from flask import Flask, render_template
app = Flask(__name__)


@app.route("/", methods=["GET"])
@app.route("/home", methods=["GET"])
def main_page():
    return render_template("home_page.html")


if __name__ == "__main__":
    app.run(debug=True)
