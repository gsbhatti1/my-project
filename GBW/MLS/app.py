from flask import Flask, render_template, request, jsonify
from db_config import db_connection

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/listings', methods=['POST'])
def listings():
    filters = request.json
    property_type = filters['propertyType']
    sort_by = filters['sortBy']

    conn = db_connection()
    cursor = conn.cursor()

    query = "SELECT * FROM listings WHERE property_type = %s ORDER BY %s"
    cursor.execute(query, (property_type, sort_by))
    results = cursor.fetchall()

    listings = []
    for row in results:
        listings.append({
            "title": row[1],
            "location": row[2],
            "price": row[3],
            "image_url": row[4]
        })
    
    return jsonify(listings)

if __name__ == '__main__':
    app.run(debug=True)
