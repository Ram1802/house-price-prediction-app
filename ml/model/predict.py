import sys
import json
import joblib
import pandas as pd

# Model load
model = joblib.load("model/house_price_model.pkl")

# JSON input from Node
input_json = sys.argv[1]
data = json.loads(input_json)

# Correct feature order
df = pd.DataFrame([{
    "area": float(data["area"]),
    "bedrooms": float(data["bedrooms"]),
    "bathrooms": float(data["bathrooms"]),
    "locationScore": float(data["locationScore"]),
    "age": float(data["age"])
}])

# Prediction
prediction = model.predict(df)[0]

# Output as JSON
print(json.dumps({
    "predicted_price": round(float(prediction), 2)
}))